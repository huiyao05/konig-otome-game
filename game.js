(() => {
  "use strict";

  const BUILD_VERSION = "12-ch4";
  const SAVE = window.KONIG_SAVE;
  if (!SAVE) throw new Error("save-system.js 未加载，游戏已停止以避免存档损坏");
  console.info(`[König Otome] build ${BUILD_VERSION}`);

  const STORY = window.STORY;
  const CONFIG = window.GAME_CONFIG || {};


  // This is a SAVE SCHEMA version, not a chapter number. Do not increment for new scenes.
  const SAVE_VERSION = 1;

  // Future updates: never renumber existing story nodes. If a node truly must be removed,
  // write a precise old-ID -> new-ID redirect here; never guess by dialogue text.
  const NODE_ALIASES = Object.freeze({});

  function resolveSavedNode(id) {
    let cursor = id;
    const seen = new Set();
    for (let steps=0; steps<20 && NODE_ALIASES[cursor]; steps++) {
      if (seen.has(cursor)) throw new Error(`存档节点映射循环：${id}`);
      seen.add(cursor);
      cursor = NODE_ALIASES[cursor];
    }
    if (!STORY.nodes[cursor]) throw new Error(`存档所指剧情 ${id} 已不存在，请勿覆盖存档，需修复剧情连接`);
    return cursor;
  }

  // Fail before deployment rather than let the player reach a dead node after loading.
  function validateStoryGraph() {
    if (!STORY || !STORY.nodes || !STORY.nodes[STORY.startNode]) throw new Error("剧情起点无效");
    const broken=[];
    const check=(from,to)=>{ if (to && !STORY.nodes[to]) broken.push(`${from} → ${to}`); };
    for (const [id,node] of Object.entries(STORY.nodes)) {
      if (!node || typeof node!=="object") { broken.push(`${id}: 节点无效`); continue; }
      check(id,node.next);
      if (node.chapterIntro) check(id,node.chapterIntro.next);
      if (node.nextByFlag) {
        for (const target of Object.values(node.nextByFlag.cases||{})) check(id,target);
        check(id,node.nextByFlag.fallback);
      }
      for (const choice of node.choices||[]) check(id,choice.next);
      if (!node.next && !node.chapterIntro && !node.nextByFlag && !(node.choices||[]).length &&
          !node.ending && !node.chapterComplete && !node.currentVersionEnd) broken.push(`${id}: 剧情断在这里`);
    }
    if (broken.length) throw new Error(`剧情存在失效连接：${broken.slice(0,5).join("；")}`);
  }
  validateStoryGraph();

  function refreshHistory(history, savedName) {
    if (!Array.isArray(history)) return [];
    return history.slice(-500).filter(entry => entry && typeof entry.nodeId==="string")
      .map(entry => ({nodeId: NODE_ALIASES[entry.nodeId] || entry.nodeId,
        // Only used if an old deleted node has no mapping; current text is read live.
        speaker: typeof entry.speaker==="string" ? entry.speaker : "",
        text: typeof entry.text==="string" ? entry.text : ""}));
  }

  const STORAGE = SAVE.keys;

  const defaultState = () => ({
    version: SAVE_VERSION,
    playerName: "",
    nodeId: STORY.startNode,
    stats: {
      dark: 0,
      redemption: 0,
      ambition: 0,
      dependence: 0
    },
    flags: {},
    history: [],
    bgm: "",
    lastSavedAt: null
  });

  let state = defaultState();
  let saveMode = "save";
  let currentBg = "";
  let currentBgm = "";
  let musicEnabled = true;

  const bgmAudio = new Audio();
  bgmAudio.loop = true;
  bgmAudio.preload = "auto";
  bgmAudio.volume = Number(CONFIG.defaultVolume ?? 0.45);

  const $ = (id) => document.getElementById(id);

  const els = {
    bgLayer: $("bgLayer"),
    titleScreen: $("titleScreen"),
    nameScreen: $("nameScreen"),
    chapterIntro: $("chapterIntro"),
    chapterIntroSmall: $("chapterIntroSmall"),
    chapterIntroTitle: $("chapterIntroTitle"),
    gameScreen: $("gameScreen"),
    newGameBtn: $("newGameBtn"),
    continueBtn: $("continueBtn"),
    titleLoadBtn: $("titleLoadBtn"),
    titleExportBtn: $("titleExportBtn"),
    titleImportBtn: $("titleImportBtn"),
    menuExportBtn: $("menuExportBtn"),
    menuImportBtn: $("menuImportBtn"),
    saveFileInput: $("saveFileInput"),
    playerNameInput: $("playerNameInput"),
    confirmNameBtn: $("confirmNameBtn"),
    musicBtn: $("musicBtn"),
    menuBtn: $("menuBtn"),
    chapterBadge: $("chapterBadge"),
    dialoguePanel: $("dialoguePanel"),
    speaker: $("speaker"),
    dialogueText: $("dialogueText"),
    choices: $("choices"),
    advanceHint: $("advanceHint"),
    menuModal: $("menuModal"),
    saveLoadModal: $("saveLoadModal"),
    saveLoadTitle: $("saveLoadTitle"),
    saveSlots: $("saveSlots"),
    statusModal: $("statusModal"),
    statusContent: $("statusContent"),
    logModal: $("logModal"),
    logContent: $("logContent"),
    saveBtn: $("saveBtn"),
    loadBtn: $("loadBtn"),
    statusBtn: $("statusBtn"),
    logBtn: $("logBtn"),
    restartBtn: $("restartBtn"),
    toast: $("toast")
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function formatText(text = "") {
    return String(text).replaceAll("{{playerName}}", state.playerName || "你");
  }

  function showScreen(name) {
    els.titleScreen.classList.toggle("hidden", name !== "title");
    els.nameScreen.classList.toggle("hidden", name !== "name");
    els.chapterIntro.classList.toggle("hidden", name !== "chapter");
    els.gameScreen.classList.toggle("hidden", name !== "game");
  }

  function setBackground(filename, position = "center center") {
    if (!filename) return;
    els.bgLayer.style.backgroundPosition = position;

    if (filename === currentBg) return;
    currentBg = filename;

    els.bgLayer.classList.add("is-changing");
    window.setTimeout(() => {
      els.bgLayer.style.backgroundImage =
        `linear-gradient(165deg, rgba(20,18,17,.18), rgba(8,8,8,.48)), url("assets/backgrounds/${filename}")`;
      els.bgLayer.classList.remove("is-changing");
    }, 130);
  }

  function setBlackBackground() {
    currentBg = "";
    els.bgLayer.classList.remove("is-changing");
    els.bgLayer.style.backgroundImage = "none";
    els.bgLayer.style.backgroundColor = "#000";
  }

  function setTitleBackground() {
    const file = CONFIG.titleBackground || "title.jpg";
    els.bgLayer.style.backgroundColor = "#111";
    currentBg = "";
    setBackground(file);
    if (CONFIG.titleBgm) playBgm(CONFIG.titleBgm, false);
  }

  function playBgm(filename, rememberInState = true) {
    if (!filename) return;

    if (rememberInState && state && state.playerName) {
      state.bgm = filename;
    }

    if (filename === currentBgm) {
      if (musicEnabled && bgmAudio.paused) {
        bgmAudio.play().catch(() => {});
      }
      return;
    }

    currentBgm = filename;
    bgmAudio.src = `assets/audio/${filename}`;

    if (musicEnabled) {
      bgmAudio.play().catch(() => {
        // 手机浏览器可能要求玩家先点击页面后才允许播放音乐。
      });
    }
  }

  function restoreBgmForLoadedState() {
    const node = STORY.nodes[state.nodeId];

    // 新版存档会直接记住存档时正在播放的音乐
    if (state.bgm) {
      currentBgm = "";
      playBgm(state.bgm);
      return;
    }

    // 兼容 V3 之前已经存在的旧存档
    if (node?.bgm) {
      currentBgm = "";
      playBgm(node.bgm);
      return;
    }

    if (state.nodeId.startsWith("route_c_")) {
      currentBgm = "";
      playBgm("route-c.mp3");
      return;
    }

    if (
      state.nodeId.startsWith("prologue_") ||
      state.nodeId.startsWith("hunt_") ||
      state.nodeId === "choice_01"
    ) {
      currentBgm = "";
      playBgm("forest.mp3");
    }
  }

  function setMusicEnabled(enabled) {
    musicEnabled = enabled;
    els.musicBtn.classList.toggle("is-muted", !enabled);
    els.musicBtn.textContent = enabled ? "♫" : "♩";

    if (!enabled) {
      bgmAudio.pause();
    } else if (currentBgm) {
      bgmAudio.play().catch(() => {});
    }
  }

  function toggleMusic() {
    setMusicEnabled(!musicEnabled);
  }


  // 某些浏览器会在章节转场延迟后重新拦截音频播放。
  // 玩家之后任意一次点击页面时，如果当前 BGM 被拦住，就自动重试。
  function retryCurrentBgm() {
    if (!musicEnabled || !currentBgm || !bgmAudio.paused) return;
    bgmAudio.play().catch(() => {});
  }


  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.remove("hidden");
    window.clearTimeout(toast.timer);
    toast.timer = window.setTimeout(() => {
      els.toast.classList.add("hidden");
    }, 1500);
  }

  function normalizeLoadedState(saved) {
    if (!SAVE.validState(saved)) throw new Error("存档结构损坏或缺少姓名／剧情位置");
    const migratedNodeId = resolveSavedNode(saved.nodeId);
    const fresh = defaultState();
    const normalized = {
      ...fresh,
      version: SAVE_VERSION,
      playerName: saved.playerName,
      nodeId: migratedNodeId,
      stats: { ...fresh.stats, ...saved.stats },
      flags: { ...fresh.flags, ...saved.flags },
      history: refreshHistory(saved.history, saved.playerName),
      bgm: saved.bgm || "",
      lastSavedAt: saved.lastSavedAt || null
    };
    return normalized;
  }

  function readSave(key) {
    const saved = key === STORAGE.auto ? SAVE.readAuto() : SAVE.read(key);
    if (!saved) return null;
    return normalizeLoadedState(saved);
  }

  let warnedStorage = false;
  function warnStorageIfNeeded() {
    if (warnedStorage) return;
    warnedStorage = true;
    toast("自动存档失败！请检查浏览器存储权限或使用手动存档");
  }

  function autoSave() {
    if (!state.playerName) return;
    state.bgm = state.bgm || currentBgm || "";
    state.lastSavedAt = new Date().toISOString();
    const saved = SAVE.write(STORAGE.auto, clone(state));
    if (!saved) warnStorageIfNeeded();
    refreshContinueButton();
    return saved;
  }

  function refreshContinueButton() {
    const auto = SAVE.readAuto();
    els.continueBtn.disabled = !auto;
    els.continueBtn.style.opacity = auto ? "1" : ".45";
  }

  function logNode(node) {
    if (!node || node.ending) return;

    const entry = {nodeId: state.nodeId,
      speaker: formatText(node.speaker || ""),
      text: formatText(node.text || "")};

    if (!entry.text) return;

    const last = state.history[state.history.length - 1];
    if (last && last.nodeId === state.nodeId) return;

    state.history.push({ nodeId: state.nodeId });

    if (state.history.length > 500) {
      state.history = state.history.slice(-500);
    }
  }

  function renderNode() {
    const node = STORY.nodes[state.nodeId];

    if (!node) {
      console.error("找不到剧情节点：", state.nodeId);
      toast(`找不到剧情节点：${state.nodeId}`);
      return;
    }

    if (node.chapterIntro) {
      const intro = node.chapterIntro;
      autoSave();
      playChapterIntro(
        intro.small || "",
        intro.title || "",
        intro.next || node.next || null
      );
      return;
    }

    if (node.currentVersionEnd) {
      playCurrentVersionEnd();
      return;
    }

    els.bgLayer.style.backgroundColor = "#111";
    setBackground(node.bg || "forest-autumn.jpg", node.bgPosition || "center center");
    if (node.bgm) playBgm(node.bgm);

    // 普通剧情可打开菜单；BAD END 会在下面隐藏菜单
    els.menuBtn.classList.remove("hidden");
    els.chapterBadge.textContent = node.chapter || "";
    els.speaker.textContent = formatText(node.speaker || "");
    els.dialogueText.textContent = formatText(node.text || "");
    els.choices.innerHTML = "";

    logNode(node);

    if (Array.isArray(node.choices) && node.choices.length) {
      els.advanceHint.classList.add("hidden");
      node.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.type = "button";
        btn.textContent = formatText(choice.text || "选择");
        btn.addEventListener("click", (event) => {
          event.stopPropagation();
          if (!STORY.nodes[choice.next]) {
            toast("剧情连接出错，原存档未覆盖，请报告开发者"); return;
          }
          applyEffects(choice.effects || {});
          applyFlags(choice.setFlags || {});
          state.nodeId = choice.next;

          const targetNode = STORY.nodes[choice.next];
          if (!targetNode?.ending) {
            autoSave();
          }

          renderNode();
        });
        els.choices.appendChild(btn);
      });
      return;
    }

    if (node.chapterComplete) {
      els.advanceHint.classList.add("hidden");

      const actions = document.createElement("div");
      actions.className = "ending-actions single";

      const title = document.createElement("button");
      title.textContent = "返回标题";
      title.addEventListener("click", (event) => {
        event.stopPropagation();
        returnToTitle();
      });

      actions.append(title);
      els.choices.appendChild(actions);
      autoSave();
      return;
    }

    if (node.ending) {
      els.advanceHint.classList.add("hidden");

      const label = document.createElement("span");
      label.className = "ending-title";
      label.textContent = `达成结局 —— ${node.ending}`;
      els.dialogueText.prepend(label);

      // BAD END 直接结束：不能在结局画面原地读档
      els.menuBtn.classList.add("hidden");

      const actions = document.createElement("div");
      actions.className = "ending-actions single";

      const title = document.createElement("button");
      title.textContent = "返回标题";
      title.addEventListener("click", (event) => {
        event.stopPropagation();
        returnToTitle();
      });

      actions.append(title);
      els.choices.appendChild(actions);

      // 故意不在 BAD END 自动存档。
      // 自动存档会保留在玩家做出错误选择之前的安全节点。
      return;
    }

    els.advanceHint.classList.remove("hidden");
    autoSave();
  }

  function advance() {
    const node = STORY.nodes[state.nodeId];
    if (!node || node.ending || (node.choices && node.choices.length)) return;
    const nextNode = resolveNext(node);
    if (!nextNode) return;
    if (!STORY.nodes[nextNode]) {
      toast("剧情连接出错，原存档未覆盖，请报告开发者"); return;
    }
    state.nodeId = nextNode;
    renderNode();
  }

  function applyEffects(effects) {
    Object.entries(effects).forEach(([key, amount]) => {
      if (typeof state.stats[key] !== "number") state.stats[key] = 0;
      state.stats[key] += Number(amount) || 0;
    });
  }


  function applyFlags(flags) {
    if (!flags || typeof flags !== "object") return;
    Object.assign(state.flags, flags);
  }

  function resolveNext(node) {
    if (node?.nextByFlag) {
      const { key, cases = {}, fallback = null } = node.nextByFlag;
      const value = state.flags?.[key];
      return cases[value] || fallback || node.next || null;
    }
    return node?.next || null;
  }


  function ensureTitleMusic() {
    const titleVisible = !els.titleScreen.classList.contains("hidden");
    if (!titleVisible || !CONFIG.titleBgm || !musicEnabled) return;

    playBgm(CONFIG.titleBgm, false);
  }

  function startNewGame() {
    state = defaultState();
    els.playerNameInput.value = "";

    // 输入姓名阶段保持纯黑，不提前出现森林背景
    setBlackBackground();
    showScreen("name");

    window.setTimeout(() => els.playerNameInput.focus(), 100);
  }

  function playChapterIntro(smallText = "序章", titleText = "困兽", nextNode = null) {
    setBlackBackground();
    bgmAudio.pause();

    els.chapterIntroSmall.textContent = smallText;
    els.chapterIntroTitle.textContent = titleText;

    showScreen("chapter");

    els.chapterIntro.classList.remove("play");
    void els.chapterIntro.offsetWidth;
    els.chapterIntro.classList.add("play");

    window.setTimeout(() => {
      els.chapterIntro.classList.remove("play");

      if (nextNode) {
        state.nodeId = nextNode;
      }

      showScreen("game");
      renderNode();
    }, 3400);
  }


  function playCurrentVersionEnd() {
    // 当前版本只暂时写到这里，不当作正式章节结局。
    // 最后一行之后给一个纯黑过渡，然后自动回到标题页。
    bgmAudio.pause();
    setBlackBackground();

    els.chapterIntro.classList.remove("play");
    els.chapterIntroSmall.textContent = "";
    els.chapterIntroTitle.textContent = "";
    els.chapterIntro.style.background = "#000";

    showScreen("chapter");

    window.setTimeout(() => {
      els.chapterIntro.style.background = "";
      returnToTitle();
    }, 1200);
  }

  function confirmName() {
    const name = els.playerNameInput.value.trim();
    if (!name) {
      toast("请先输入姓名");
      return;
    }

    state = defaultState();
    state.playerName = name;
    state.nodeId = STORY.startNode;
    autoSave();

    // 章节标题出现时保持黑屏；正式进入森林后再由第一节点切换森林音乐
    bgmAudio.pause();
    currentBgm = "";
    setBlackBackground();
    playChapterIntro("序章", "困兽", STORY.startNode);
  }

  function continueGame() {
    const status = SAVE.inspectAuto();
    const saved = status.value;
    if (!saved) {
      toast(status.status === "empty" ? "还没有自动存档" : "自动存档损坏或存储受限；不会重置你的进度");
      return;
    }
    let loaded;
    try { loaded = normalizeLoadedState(saved); }
    catch (error) { toast(error.message); return; }
    state = loaded;
    restoreBgmForLoadedState();
    showScreen("game");
    renderNode(); // Autosave on render migrates old auto in place after successful load only.
  }

  function saveToSlot(slot) {
    if (!state.playerName || !STORY.nodes[state.nodeId]) {
      toast("当前没有可保存的剧情"); return;
    }
    const payload = clone(state);
    payload.version = SAVE_VERSION;
    payload.bgm = state.bgm || currentBgm || "";
    payload.lastSavedAt = new Date().toISOString();
    if (!SAVE.write(STORAGE.slot(slot), payload)) {
      toast("保存失败：浏览器存储空间不足或存储被禁用"); return;
    }
    renderSaveSlots();
    toast(`已保存到存档 ${slot}`);
  }

  function loadFromSlot(slot) {
    const result=SAVE.inspect(STORAGE.slot(slot));
    const saved=result.value;
    if (!saved) {toast(result.status === "empty" ? "这个存档位还是空的" : "存档损坏或浏览器禁止读取；未覆盖原存档");return;}
    let loaded;
    try { loaded = normalizeLoadedState(saved); }
    catch (error) { toast(error.message); return; }
    state = loaded;
    restoreBgmForLoadedState();
    closeModal("saveLoadModal");
    closeModal("menuModal");
    showScreen("game");
    renderNode();
    toast(`已读取存档 ${slot}`);
    // Manual slot is never overwritten just because it was read.
  }

  function formatDate(iso) {
    if (!iso) return "未记录时间";
    try {
      return new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date(iso));
    } catch {
      return "时间未知";
    }
  }

  function renderSaveSlots() {
    els.saveSlots.innerHTML = "";

    for (let slot = 1; slot <= 3; slot += 1) {
      const slotStatus = SAVE.inspect(STORAGE.slot(slot));
      const saved = slotStatus.value;

      const wrap = document.createElement("div");
      wrap.className = "save-slot";

      const title = document.createElement("div");
      title.className = "save-slot-title";
      title.textContent = `存档 ${slot}`;

      const meta = document.createElement("div");
      meta.className = "save-slot-meta";

      if (saved) {
        let chapterLabel = "旧版存档（无法定位）";
        try {
          const preview = normalizeLoadedState(saved);
          chapterLabel = STORY.nodes[preview.nodeId]?.chapter || "章节过渡";
        } catch { chapterLabel = "存档需要兼容更新"; }
        meta.textContent =
          `${saved.playerName || "未命名"} · ${chapterLabel} · ${formatDate(saved.lastSavedAt)}`;
      } else {
        meta.textContent = slotStatus.status === "empty" ? "空存档" : "存档损坏或不可读取；不会自动覆盖";
      }

      const btn = document.createElement("button");
      btn.type = "button";

      if (saveMode === "save") {
        btn.textContent = saved ? "覆盖这个存档" : (slotStatus.status==="empty" ? "保存到这里" : "存档异常，暂停覆盖");
        btn.disabled = !saved && slotStatus.status!=="empty";
        btn.addEventListener("click", () => saveToSlot(slot));
      } else {
        btn.textContent = saved ? "读取这个存档" : "暂无存档";
        btn.disabled = !saved;
        btn.style.opacity = saved ? "1" : ".45";
        btn.addEventListener("click", () => loadFromSlot(slot));
      }

      wrap.append(title, meta, btn);
      els.saveSlots.appendChild(wrap);
    }
  }

  function openSaveLoad(mode) {
    saveMode = mode;
    els.saveLoadTitle.textContent = mode === "save" ? "存档" : "读档";
    renderSaveSlots();
    openModal("saveLoadModal");
  }

  function exportSaves() {
    // Always export the current progress, but don't overwrite a bad-ending safe autosave.
    const node = STORY.nodes[state.nodeId];
    if (state.playerName && node && !node.ending && !node.currentVersionEnd) autoSave();
    try {
      const result = SAVE.downloadBundle();
      toast(result.message);
    } catch (error) {
      console.error(error);
      toast("导出失败，请检查浏览器是否允许下载");
    }
  }

  function requestImport() {
    els.saveFileInput.value = "";
    els.saveFileInput.click();
  }

  async function importSaves(file) {
    if (!file) return;
    if (file.size > SAVE.MAX_FILE_BYTES) {
      toast("文件过大，请选择本游戏导出的 JSON 存档文件"); return;
    }
    let data;
    try { data = JSON.parse(await file.text()); }
    catch { toast("文件无法读取：请选择有效的 JSON 存档"); return; }
    // Check file integrity and every scene before confirmation or any write.
    try {
      // Package validator is called again transactionally during import.
      // We validate by importing only AFTER explicit confirmation below.
      if (data?.format !== "konig-otome-save-bundle" ||
          !Array.isArray(data?.saves?.slots) || data.saves.slots.length !== 3) {
        throw new Error("这不是本游戏导出的完整存档文件");
      }
      const existing = SAVE.count(SAVE.all());
      if (existing && !window.confirm(
        "导入将覆盖此网址下的自动存档和三个手动存档。请先使用「导出全部存档」保存现有进度。确认覆盖吗？"
      )) return;
      const quantity = SAVE.importPackage(data, normalizeLoadedState);
      state = defaultState(); // Don't let the previously running story autosave over imported data.
      closeAllModals();
      setTitleBackground();
      showScreen("title");
      refreshContinueButton();
      toast(`已导入 ${quantity} 份存档，请点击「继续游戏」或「读取存档」`);
    } catch (error) {
      console.error("Save import:", error);
      toast(error?.message || "导入失败，原有存档没有被修改");
    }
  }

  function getMaleLeaning() {
    const { dark, redemption } = state.stats;
    if (dark === redemption) return "尚未明显偏向";
    return dark > redemption ? "黑化倾向" : "救赎倾向";
  }

  function getHeroineLeaning() {
    const { ambition, dependence } = state.stats;
    if (ambition === dependence) return "尚未明显偏向";
    return ambition > dependence ? "野心倾向" : "依附倾向";
  }

  function renderStatus() {
    const exact = CONFIG.showExactStats !== false;
    const value = (label, n) => exact ? `${label}：${n}` : label;

    els.statusContent.innerHTML = `
      <div class="axis-card">
        <div class="axis-title">König · 心理状态</div>
        <div class="axis-row"><span>${value("黑化值", state.stats.dark)}</span><span>${value("救赎值", state.stats.redemption)}</span></div>
        <div class="axis-summary">当前：${getMaleLeaning()}</div>
      </div>
      <div class="axis-card">
        <div class="axis-title">${escapeHtml(state.playerName || "女主")} · 生存之道</div>
        <div class="axis-row"><span>${value("野心值", state.stats.ambition)}</span><span>${value("依附值", state.stats.dependence)}</span></div>
        <div class="axis-summary">当前：${getHeroineLeaning()}</div>
      </div>
    `;
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text);
    return div.innerHTML;
  }

  function renderLog() {
    els.logContent.innerHTML = "";

    if (!state.history.length) {
      els.logContent.textContent = "还没有可回看的剧情。";
      return;
    }

    state.history.forEach((entry) => {
      const node = STORY.nodes[entry.nodeId];
      const speaker = node ? formatText(node.speaker || "") : (entry.speaker || "");
      const line = node ? formatText(node.text || "") : (entry.text || "");
      if (!line) return;
      const item = document.createElement("div");
      item.className = "log-entry";

      if (speaker) {
        const who = document.createElement("div");
        who.className = "log-speaker";
        who.textContent = speaker;
        item.appendChild(who);
      }

      const text = document.createElement("div");
      text.className = "log-text";
      text.textContent = line;
      item.appendChild(text);

      els.logContent.appendChild(item);
    });
  }


  function scrollLogToLatest() {
    const card = els.logModal.querySelector(".modal-card");
    if (!card) return;

    // 等弹窗真正显示出来后，再滚到最底部
    window.requestAnimationFrame(() => {
      card.scrollTop = card.scrollHeight;
    });
  }

  function openModal(id) {
    $(id).classList.remove("hidden");
  }

  function closeModal(id) {
    $(id).classList.add("hidden");
  }

  function closeAllModals() {
    ["menuModal", "saveLoadModal", "statusModal", "logModal"].forEach(closeModal);
  }

  function restartGame() {
    const ok = window.confirm("确定要重新开始吗？自动存档会被新的进度覆盖，但手动存档不会消失。");
    if (!ok) return;

    closeAllModals();
    startNewGame();
  }

  function returnToTitle() {
    closeAllModals();
    setTitleBackground();
    showScreen("title");
    refreshContinueButton();
  }

  // Events
  // 手机浏览器通常会拦截“刚打开网页就自动出声”。
  // 因此标题页第一次被触碰时，再尝试启动 title.mp3。
  els.titleScreen.addEventListener("pointerdown", ensureTitleMusic, { passive: true });
  els.titleScreen.addEventListener("touchstart", ensureTitleMusic, { passive: true });
  els.titleScreen.addEventListener("click", ensureTitleMusic);

  // 全局音频解锁/重试：解决章节标题动画结束后浏览器拒绝自动播放的问题。
  document.addEventListener("pointerdown", retryCurrentBgm, { passive: true });
  document.addEventListener("touchstart", retryCurrentBgm, { passive: true });

  els.newGameBtn.addEventListener("click", startNewGame);
  els.continueBtn.addEventListener("click", continueGame);
  els.titleLoadBtn.addEventListener("click", () => openSaveLoad("load"));
  els.titleExportBtn?.addEventListener("click", exportSaves);
  els.titleImportBtn?.addEventListener("click", requestImport);
  els.menuExportBtn.addEventListener("click", exportSaves);
  els.menuImportBtn.addEventListener("click", requestImport);
  els.saveFileInput.addEventListener("change", (event) => importSaves(event.target.files?.[0]));
  els.confirmNameBtn.addEventListener("click", confirmName);

  els.playerNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") confirmName();
  });

  els.dialoguePanel.addEventListener("click", advance);
  els.dialoguePanel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      advance();
    }
  });

  els.musicBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMusic();
  });
  els.menuBtn.addEventListener("click", () => openModal("menuModal"));
  els.saveBtn.addEventListener("click", () => openSaveLoad("save"));
  els.loadBtn.addEventListener("click", () => openSaveLoad("load"));

  els.statusBtn.addEventListener("click", () => {
    renderStatus();
    openModal("statusModal");
  });

  els.logBtn.addEventListener("click", () => {
    renderLog();
    openModal("logModal");
    scrollLogToLatest();
  });

  els.restartBtn.addEventListener("click", restartGame);

  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal.id);
    });
  });

  // Init
  setTitleBackground();
  setMusicEnabled(true);
  showScreen("title");
  refreshContinueButton();
})();
