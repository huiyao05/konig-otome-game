(() => {
  "use strict";

  const STORY = window.STORY;
  const CONFIG = window.GAME_CONFIG || {};

  const STORAGE = {
    auto: "konig_otome_autosave_v1",
    slot: (n) => `konig_otome_save_${n}_v1`
  };

  const defaultState = () => ({
    version: 1,
    playerName: "",
    nodeId: STORY.startNode,
    stats: {
      dark: 0,
      redemption: 0,
      ambition: 0,
      dependence: 0
    },
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
    gameScreen: $("gameScreen"),
    newGameBtn: $("newGameBtn"),
    continueBtn: $("continueBtn"),
    titleLoadBtn: $("titleLoadBtn"),
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

  function safeParse(raw) {
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
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


  function toast(message) {
    els.toast.textContent = message;
    els.toast.classList.remove("hidden");
    window.clearTimeout(toast.timer);
    toast.timer = window.setTimeout(() => {
      els.toast.classList.add("hidden");
    }, 1500);
  }

  function normalizeLoadedState(saved) {
    const fresh = defaultState();
    return {
      ...fresh,
      ...saved,
      stats: {
        ...fresh.stats,
        ...(saved?.stats || {})
      },
      history: Array.isArray(saved?.history) ? saved.history : []
    };
  }

  function autoSave() {
    if (!state.playerName) return;
    state.bgm = state.bgm || currentBgm || "";
    state.lastSavedAt = new Date().toISOString();
    localStorage.setItem(STORAGE.auto, JSON.stringify(state));
    refreshContinueButton();
  }

  function refreshContinueButton() {
    const auto = safeParse(localStorage.getItem(STORAGE.auto));
    els.continueBtn.disabled = !auto;
    els.continueBtn.style.opacity = auto ? "1" : ".45";
  }

  function logNode(node) {
    if (!node || node.ending) return;

    const entry = {
      speaker: formatText(node.speaker || ""),
      text: formatText(node.text || "")
    };

    if (!entry.text) return;

    const last = state.history[state.history.length - 1];
    if (last && last.nodeId === state.nodeId) return;

    state.history.push({
      nodeId: state.nodeId,
      ...entry
    });

    if (state.history.length > 120) {
      state.history = state.history.slice(-120);
    }
  }

  function renderNode() {
    const node = STORY.nodes[state.nodeId];

    if (!node) {
      console.error("找不到剧情节点：", state.nodeId);
      toast(`找不到剧情节点：${state.nodeId}`);
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
          applyEffects(choice.effects || {});
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
    if (!node.next) return;

    state.nodeId = node.next;
    renderNode();
  }

  function applyEffects(effects) {
    Object.entries(effects).forEach(([key, amount]) => {
      if (typeof state.stats[key] !== "number") state.stats[key] = 0;
      state.stats[key] += Number(amount) || 0;
    });
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

  function playChapterIntro() {
    showScreen("chapter");

    els.chapterIntro.classList.remove("play");
    void els.chapterIntro.offsetWidth;
    els.chapterIntro.classList.add("play");

    window.setTimeout(() => {
      els.chapterIntro.classList.remove("play");
      showScreen("game");
      renderNode();
    }, 3400);
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

    // 章节标题出现时保持黑屏；正式进入森林后再由第一节点切换森林音乐
    bgmAudio.pause();
    currentBgm = "";
    setBlackBackground();
    playChapterIntro();
  }

  function continueGame() {
    const saved = safeParse(localStorage.getItem(STORAGE.auto));
    if (!saved) {
      toast("还没有自动存档");
      return;
    }

    state = normalizeLoadedState(saved);
    restoreBgmForLoadedState();
    showScreen("game");
    renderNode();
  }

  function saveToSlot(slot) {
    const payload = clone(state);
    payload.bgm = state.bgm || currentBgm || "";
    payload.lastSavedAt = new Date().toISOString();
    localStorage.setItem(STORAGE.slot(slot), JSON.stringify(payload));
    renderSaveSlots();
    toast(`已保存到存档 ${slot}`);
  }

  function loadFromSlot(slot) {
    const saved = safeParse(localStorage.getItem(STORAGE.slot(slot)));
    if (!saved) {
      toast("这个存档位还是空的");
      return;
    }

    state = normalizeLoadedState(saved);
    restoreBgmForLoadedState();

    closeModal("saveLoadModal");
    closeModal("menuModal");
    showScreen("game");
    renderNode();
    toast(`已读取存档 ${slot}`);
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
      const saved = safeParse(localStorage.getItem(STORAGE.slot(slot)));

      const wrap = document.createElement("div");
      wrap.className = "save-slot";

      const title = document.createElement("div");
      title.className = "save-slot-title";
      title.textContent = `存档 ${slot}`;

      const meta = document.createElement("div");
      meta.className = "save-slot-meta";

      if (saved) {
        const node = STORY.nodes[saved.nodeId];
        meta.textContent =
          `${saved.playerName || "未命名"} · ${node?.chapter || saved.nodeId} · ${formatDate(saved.lastSavedAt)}`;
      } else {
        meta.textContent = "空存档";
      }

      const btn = document.createElement("button");
      btn.type = "button";

      if (saveMode === "save") {
        btn.textContent = saved ? "覆盖这个存档" : "保存到这里";
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
      const item = document.createElement("div");
      item.className = "log-entry";

      if (entry.speaker) {
        const who = document.createElement("div");
        who.className = "log-speaker";
        who.textContent = entry.speaker;
        item.appendChild(who);
      }

      const text = document.createElement("div");
      text.className = "log-text";
      text.textContent = entry.text;
      item.appendChild(text);

      els.logContent.appendChild(item);
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

  els.newGameBtn.addEventListener("click", startNewGame);
  els.continueBtn.addEventListener("click", continueGame);
  els.titleLoadBtn.addEventListener("click", () => openSaveLoad("load"));
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
