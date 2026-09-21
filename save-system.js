/* König save system: stable per-origin storage; no domain migration required.
   SAVE_SCHEMA_VERSION is independent of releases and chapter numbers. */
(() => {
  "use strict";
  const KEYS = Object.freeze({
    auto: "konig_otome_autosave_v1",
    backup: "konig_otome_autosave_backup_v1",
    slot: (n) => `konig_otome_save_${n}_v1`
  });

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
  // Browser-local autosave recovery remains internal; no file export/import UI or APIs.
  window.KONIG_SAVE=Object.freeze({keys:KEYS,inspect,inspectAuto,read,readAuto,write,
    validState,safeParse});
})();
