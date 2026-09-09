(() => {
  "use strict";

  const STORY = window.STORY;
  const CONFIG = window.GAME_CONFIG || {};


  const SAVE_VERSION = 3;

  // V6 / V7 / V8 等旧版剧情节点 -> 当前版本剧情节点
  // 已经发布给玩家的旧存档会在读取时自动迁移。
  const LEGACY_NODE_MAP = {
  "prologue_01": "opening_001",
  "prologue_03": "opening_002",
  "hunt_01": "prologue_001",
  "hunt_02": "prologue_002",
  "hunt_03": "prologue_003",
  "hunt_04": "prologue_004",
  "hunt_05": "prologue_005",
  "hunt_06": "prologue_006",
  "hunt_07": "prologue_007",
  "hunt_08": "prologue_008",
  "hunt_09": "prologue_009",
  "hunt_10": "prologue_010",
  "hunt_11": "prologue_011",
  "hunt_12": "prologue_012",
  "hunt_13": "prologue_013",
  "hunt_14": "prologue_014",
  "hunt_15": "prologue_015",
  "hunt_16": "prologue_016",
  "choice_01": "prologue_choice",
  "ending_strangers": "ending_strangers",
  "ending_early_death": "ending_early_death",
  "route_c_01": "prologue_c_001",
  "route_c_02": "prologue_c_002",
  "route_c_03": "prologue_c_003",
  "route_c_04": "prologue_c_004",
  "route_c_05": "prologue_c_005",
  "route_c_06": "prologue_c_006",
  "route_c_07": "prologue_c_007",
  "route_c_08": "prologue_c_008",
  "route_c_09": "prologue_c_009",
  "route_c_10": "prologue_c_010",
  "route_c_11": "prologue_c_011",
  "route_c_12": "prologue_c_012",
  "route_c_13": "prologue_c_013",
  "route_c_14": "prologue_c_014",
  "route_c_15": "prologue_c_015",
  "route_c_16": "prologue_c_016",
  "route_c_17": "prologue_c_017",
  "route_c_18": "prologue_c_018",
  "route_c_19": "prologue_c_019",
  "route_c_20": "prologue_c_020",
  "route_c_21": "prologue_c_021",
  "route_c_22": "prologue_c_022",
  "prologue_end": "chapter1_intro",
  "chapter1_01": "ch1_001",
  "chapter1_02": "ch1_002",
  "chapter1_03": "ch1_003",
  "chapter1_04": "ch1_004",
  "chapter1_05": "ch1_005",
  "chapter1_06": "ch1_006",
  "chapter1_07": "ch1_007",
  "chapter1_08": "ch1_008",
  "chapter1_09": "ch1_009",
  "chapter1_10": "ch1_011",
  "chapter1_11": "ch1_012",
  "chapter1_12": "ch1_013",
  "chapter1_13": "ch1_014",
  "chapter1_14": "ch1_015",
  "chapter1_15": "ch1_016",
  "chapter1_16": "ch1_017",
  "chapter1_17": "ch1_018",
  "chapter1_18": "ch1_019",
  "chapter1_19": "ch1_020",
  "chapter1_20": "ch1_022",
  "chapter1_21": "ch1_023",
  "chapter1_22": "ch1_025",
  "chapter1_23": "ch1_026",
  "chapter1_24": "ch1_027",
  "chapter1_25": "ch1_028",
  "chapter1_26": "ch1_029",
  "chapter1_27": "ch1_030",
  "chapter1_28": "ch1_031",
  "chapter1_29": "ch1_032",
  "chapter1_30": "ch1_033",
  "chapter1_31": "ch1_034",
  "chapter1_32": "ch1_035",
  "chapter1_33": "ch1_028",
  "chapter1_34": "ch1_029",
  "chapter1_35": "ch1_030",
  "chapter1_36": "ch1_031",
  "chapter1_37": "ch1_032",
  "chapter1_38": "ch1_033",
  "chapter1_39": "ch1_034",
  "chapter1_40": "ch1_035",
  "chapter1_choice": "ch1_choice",
  "chapter1_41": "ch1_post_001",
  "chapter1_42": "ch1_post_002",
  "chapter1_43": "ch1_post_003",
  "chapter1_44": "ch1_post_004",
  "chapter1_45": "ch1_post_005",
  "chapter1_46": "ch1_post_006",
  "chapter1_47": "ch1_post_007",
  "chapter1_48": "ch1_post_008",
  "chapter1_49": "ch1_post_009",
  "chapter1_50": "ch1_post_010",
  "chapter1_51": "ch1_post_011",
  "chapter1_52": "ch1_dark_001",
  "chapter1_53": "ch1_dark_002",
  "chapter1_54": "ch1_dark_003",
  "chapter1_55": "ch1_dark_004",
  "chapter1_56": "ch1_dark_005",
  "chapter1_57": "ch1_dark_006",
  "chapter1_58": "ch1_dark_007",
  "chapter1_59": "ch1_dark_008",
  "chapter1_60": "ch1_dark_011",
  "chapter1_61": "ch1_dark_013",
  "chapter1_62": "ch1_dark_014",
  "chapter1_63": "ch1_dark_015",
  "chapter1_64": "ch1_dark_016",
  "chapter1_65": "ch1_dark_017",
  "chapter1_66": "ch1_dark_020",
  "chapter1_67": "ch1_dark_022",
  "chapter1_68": "ch1_dark_025",
  "chapter1_69": "ch1_dark_026",
  "chapter1_70": "ch1_dark_027",
  "chapter1_71": "ch1_dark_028",
  "chapter1_72": "ch1_dark_029",
  "chapter1_73": "ch1_dark_030",
  "chapter1_74": "ch1_dark_031",
  "chapter1_win_01": "ch1_win_001",
  "chapter1_win_02": "ch1_win_002",
  "chapter1_lose_01": "ch1_lose_001",
  "chapter1_lose_02": "ch1_lose_002",
  "chapter1_after_branch_01": "ch1_after_001",
  "chapter1_after_branch_02": "ch1_after_002",
  "chapter1_after_branch_03": "ch1_after_003",
  "chapter1_after_branch_04": "ch1_after_004",
  "chapter1_after_branch_05": "ch1_after_007",
  "chapter1_after_branch_06": "ch1_after_008",
  "chapter1_after_branch_07": "ch1_return_001",
  "chapter1_after_branch_08": "ch1_return_002",
  "chapter1_after_branch_09": "ch1_return_004",
  "chapter1_end": "chapter2_intro"
};

  const LEGACY_BGM_MAP = {
    "chapter1.mp3": "chapter1-music1.mp3",
    "arena.mp3": "chapter1-music2.mp3",
    "konig-cell.mp3": "chapter1-music3.mp3"
  };

  function migrateLegacyNodeId(saved) {
    const oldId = saved?.nodeId || STORY.startNode;
    const oldVersion = Number(saved?.version || 0);

    // V9.4 / V9.5 的“当前版本结束”节点，在 V10 已经有第三章可继续。
    // 旧存档如果正停在这里，自动接入第三章，而不是继续黑屏回标题。
    if (oldId === "current_version_end" && oldVersion < 3) {
      return "chapter3_intro";
    }

    // 当前版本本来就存在：不用迁移
    if (STORY.nodes[oldId]) return oldId;

    // 旧版下注分支曾经是一个空节点，需要根据玩家当时的选择跳转
    if (oldId === "chapter1_bet_branch") {
      return saved?.flags?.arenaBet === "lose"
        ? "ch1_lose_001"
        : "ch1_win_001";
    }

    const mapped = LEGACY_NODE_MAP[oldId];
    if (mapped && STORY.nodes[mapped]) return mapped;

    // 最后一层保险：
    // 如果以后某个旧节点没有登记，尝试用历史记录最后一句找到当前对应节点。
    const history = Array.isArray(saved?.history) ? saved.history : [];
    for (let i = history.length - 1; i >= 0; i -= 1) {
      const oldText = String(history[i]?.text || "").trim();
      if (!oldText) continue;

      for (const [nodeId, node] of Object.entries(STORY.nodes)) {
        const currentText = String(node?.text || "")
          .replaceAll("{{playerName}}", saved?.playerName || "你")
          .trim();

        if (!currentText) continue;

        if (
          currentText === oldText ||
          (currentText.length >= 10 && oldText.includes(currentText))
        ) {
          return nodeId;
        }
      }
    }

    // 真正无法识别时保留旧 ID，让程序明确报错，而不是偷偷重置玩家进度。
    return oldId;
  }

  function migrateHistory(history, saved) {
    if (!Array.isArray(history)) return [];

    return history.map((entry) => {
      if (!entry || typeof entry !== "object") return entry;

      const migratedId =
        entry.nodeId === "chapter1_bet_branch"
          ? (saved?.flags?.arenaBet === "lose" ? "ch1_lose_001" : "ch1_win_001")
          : (LEGACY_NODE_MAP[entry.nodeId] || entry.nodeId);

      return {
        ...entry,
        nodeId: migratedId
      };
    });
  }

  const STORAGE = {
    auto: "konig_otome_autosave_v1",
    slot: (n) => `konig_otome_save_${n}_v1`
  };

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
    const fresh = defaultState();
    const migratedNodeId = migrateLegacyNodeId(saved);
    const migratedBgm =
      LEGACY_BGM_MAP[saved?.bgm] || saved?.bgm || "";

    return {
      ...fresh,
      ...saved,
      version: SAVE_VERSION,
      nodeId: migratedNodeId,
      stats: {
        ...fresh.stats,
        ...(saved?.stats || {})
      },
      flags: {
        ...fresh.flags,
        ...(saved?.flags || {})
      },
      history: migrateHistory(saved?.history, saved),
      bgm: migratedBgm
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

    // 章节标题出现时保持黑屏；正式进入森林后再由第一节点切换森林音乐
    bgmAudio.pause();
    currentBgm = "";
    setBlackBackground();
    playChapterIntro("序章", "困兽", STORY.startNode);
  }

  function continueGame() {
    const saved = safeParse(localStorage.getItem(STORAGE.auto));
    if (!saved) {
      toast("还没有自动存档");
      return;
    }

    state = normalizeLoadedState(saved);

    // 读取旧自动存档后，立即把迁移后的新版节点写回浏览器，
    // 之后继续游戏和再次刷新都不会再卡在旧 ID。
    localStorage.setItem(STORAGE.auto, JSON.stringify(state));

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

    // 手动存档同样原地升级，不丢姓名、数值、选择或历史记录。
    localStorage.setItem(STORAGE.slot(slot), JSON.stringify(state));

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
        const preview = normalizeLoadedState(saved);
        const node = STORY.nodes[preview.nodeId];
        const chapterLabel = node?.chapter || "旧版存档";

        meta.textContent =
          `${saved.playerName || "未命名"} · ${chapterLabel} · ${formatDate(saved.lastSavedAt)}`;
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
