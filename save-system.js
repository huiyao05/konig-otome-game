/* König save system: stable per-origin storage; no domain migration required.
   SAVE_SCHEMA_VERSION is independent of releases and chapter numbers. */
(() => {
  "use strict";
  const KEYS = Object.freeze({
    auto: "konig_otome_autosave_v1",
    backup: "konig_otome_autosave_backup_v1",
    slot: (n) => `konig_otome_save_${n}_v1`
  });
  const FORMAT = "konig-otome-save-bundle";
  const FORMAT_VERSION = 1;
  const MAX_FILE_BYTES = 4 * 1024 * 1024;
  const MAX_HISTORY = 500;
  const ALL_KEYS = [KEYS.auto, KEYS.slot(1), KEYS.slot(2), KEYS.slot(3)];

  function plain(v) { return v !== null && typeof v === "object" && !Array.isArray(v); }
  function validState(s) {
    if (!plain(s) || typeof s.playerName !== "string" || !s.playerName.trim() || s.playerName.length > 80) return false;
    if (typeof s.nodeId !== "string" || !s.nodeId || s.nodeId.length > 120 || !plain(s.stats)) return false;
    if (s.flags !== undefined && (!plain(s.flags) || Object.keys(s.flags).length > 200)) return false;
    if (s.history !== undefined && (!Array.isArray(s.history) || s.history.length > 3000)) return false;
    if (s.bgm !== undefined && (typeof s.bgm !== "string" || s.bgm.length > 200)) return false;
    for (const k of ["dark","redemption","ambition","dependence"]) {
      if (s.stats[k] !== undefined && (!Number.isFinite(s.stats[k]) || typeof s.stats[k] !== "number")) return false;
    }
    return true;
  }
  function safeParse(raw) {
    if (raw === null || !raw) return null;
    try { const v=JSON.parse(raw); return plain(v) ? v : null; } catch { return null; }
  }
  function storage() {
    try { const s=window.localStorage; s.getItem(KEYS.auto); return s; }
    catch { return null; }
  }
  function inspect(key) {
    const s=storage();
    if (!s) return {status:"blocked", value:null};
    try {
      const raw=s.getItem(key);
      if (raw===null) return {status:"empty", value:null};
      const v=safeParse(raw);
      return validState(v) ? {status:"ok", value:v} : {status:"corrupt",value:null};
    } catch { return {status:"blocked",value:null}; }
  }
  function read(key) { return inspect(key).value; }
  function inspectAuto() {
    const main=inspect(KEYS.auto);
    if (main.status==="ok") return {...main,recovered:false};
    const backup=inspect(KEYS.backup);
    if (backup.status==="ok") return {...backup,recovered:true};
    return {...main,recovered:false};
  }
  function readAuto() { return inspectAuto().value; }
  function write(key,payload) {
    if (!validState(payload)) return false;
    const s=storage(); if (!s) return false;
    let encoded;
    try { encoded=JSON.stringify(payload); } catch { return false; }
    try {
      // Backup the LAST valid autosave before replacing it. Never back up corrupt JSON.
      if (key===KEYS.auto) {
        const last=inspectAuto().value;
        if (last) {
          const prev=JSON.stringify(last);
          s.setItem(KEYS.backup,prev);
          if (s.getItem(KEYS.backup)!==prev) return false;
        }
      }
      s.setItem(key,encoded);
      return s.getItem(key)===encoded;
    } catch (err) {
      console.warn("[König] Failed to save:",err);
      return false;
    }
  }
  function all() {
    return {auto:readAuto(),slots:[read(KEYS.slot(1)),read(KEYS.slot(2)),read(KEYS.slot(3))]};
  }
  function count(bundle) { return Number(!!bundle.auto)+bundle.slots.filter(Boolean).length; }
  function packageData() { return {format:FORMAT,formatVersion:FORMAT_VERSION,exportedAt:new Date().toISOString(),saves:all()}; }
  function downloadBundle() {
    const pack=packageData();
    if (!count(pack.saves)) return {ok:false,message:"没有可备份的存档"};
    const blob=new Blob([JSON.stringify(pack,null,2)],{type:"application/json;charset=utf-8"});
    const url=URL.createObjectURL(blob);
    const a=document.createElement("a");
    a.href=url; a.download=`Konig-存档备份-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a); a.click(); a.remove();
    window.setTimeout(()=>URL.revokeObjectURL(url),60000);
    return {ok:true,message:"已请求下载存档，请确认文件确实保存成功"};
  }
  function extractPackage(bundle, normalize) {
    if (!plain(bundle) || bundle.format!==FORMAT || bundle.formatVersion!==FORMAT_VERSION ||
        !plain(bundle.saves) || !Array.isArray(bundle.saves.slots) || bundle.saves.slots.length!==3)
      throw new Error("不是本游戏的有效存档备份文件");
    const entries=[bundle.saves.auto,...bundle.saves.slots];
    if (entries.every(v=>v==null)) throw new Error("备份文件没有存档");
    return entries.map((value,i)=>{
      if (value==null) return null;
      if (!validState(value)) throw new Error(`存档 ${i || "自动"} 数据损坏`);
      const normalized=normalize(value);
      if (!validState(normalized)) throw new Error(`存档 ${i || "自动"} 无法读取`);
      normalized.history=(normalized.history||[]).slice(-MAX_HISTORY);
      return normalized;
    });
  }
  function importPackage(bundle,normalize) {
    const entries=extractPackage(bundle,normalize); // validate everything BEFORE writing anything
    const s=storage(); if (!s) throw new Error("浏览器禁止本地存储，不能导入");
    const keys=[...ALL_KEYS,KEYS.backup];
    const original=keys.map(k=>s.getItem(k));
    try {
      entries.forEach((entry,i)=>{
        if (entry===null) s.removeItem(ALL_KEYS[i]);
        else s.setItem(ALL_KEYS[i],JSON.stringify(entry));
      });
      if (entries[0]===null) s.removeItem(KEYS.backup);
      else s.setItem(KEYS.backup,JSON.stringify(entries[0]));
      if (entries.some((entry,i)=>{
        const data=s.getItem(ALL_KEYS[i]);
        return entry===null ? data!==null : data!==JSON.stringify(entry);
      })) throw new Error("存储写入后校验失败");
    } catch(error) {
      keys.forEach((key,i)=>{
        try {if(original[i]===null) s.removeItem(key); else s.setItem(key,original[i]);}
        catch(e){console.error("存档回滚失败",e);}
      });
      throw new Error("存档导入失败；已经尝试恢复原来的存档");
    }
    return entries.filter(Boolean).length;
  }
  window.KONIG_SAVE=Object.freeze({keys:KEYS,inspect,inspectAuto,read,readAuto,write,all,
    validState,safeParse,count,packageData,downloadBundle,importPackage,MAX_FILE_BYTES});
})();
