// ===============================
// 剧情文件：以后主要改这里
// ===============================
//
// 可用字段：
// chapter: 顶部章节名
// bg: 背景图文件名（放在 assets/backgrounds/）
// bgPosition: 可选，例如 "center 30%"
// bgm: 背景音乐文件名（放在 assets/audio/），例如 "forest.mp3"
// speaker: 角色名；留空即旁白
// text: 正文；{{playerName}} 会自动替换成玩家输入的姓名
// next: 点击后前往的下一个节点
// choices: 选项数组
// effects: 数值变化，例如 { redemption: 2, ambition: 1 }
// ending: 是否为结局节点
//
// 四个数值键：
// dark = 黑化值
// redemption = 救赎值
// ambition = 野心值
// dependence = 依附值

window.GAME_CONFIG = {
  titleBackground: "title.jpg",
  titleBgm: "title.mp3",
  showExactStats: true,
  defaultVolume: 0.45
};

window.STORY = {
  startNode: "prologue_01",

  nodes: {
    prologue_01: {
      chapter: "序章 · 困兽",
      bg: "forest-autumn.jpg",
      bgm: "forest.mp3",
      speaker: "",
      text: "作为奥古斯都大公唯一的嫡女，从你出生的那一刻起，你的人生轨迹就已经和家族命运紧紧捆绑在一起。",
      next: "prologue_03"
    },

    prologue_03: {
      chapter: "序章 · 困兽",
      bg: "forest-autumn.jpg",
      speaker: "",
      text: "「{{playerName}}」小姐，你是王都最耀眼的明珠，是注定要戴上后冠的女人。\n\n你的每一个选择，都牵动着你的命运。",
      next: "hunt_01"
    },

    hunt_01: {
      chapter: "序章 · 困兽",
      bg: "forest-autumn.jpg",
      speaker: "",
      text: "今日是一年一度的皇家秋猎，落日森林中几乎聚集了全王都的大人物。",
      next: "hunt_02"
    },

    hunt_02: {
      chapter: "序章 · 困兽",
      bg: "forest-autumn.jpg",
      speaker: "",
      text: "就连年仅十岁的你都被父亲带了过来，他嘱咐你一定要和王储 Leopold 多多培养感情。",
      next: "hunt_03"
    },

    hunt_03: {
      chapter: "序章 · 困兽",
      bg: "forest-autumn.jpg",
      speaker: "",
      text: "你看了看营帐中觥筹交错的大人们，轻声叹了口气，带着贴身侍女悄悄溜了出去。",
      next: "hunt_04"
    },

    hunt_04: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "然而你还没在森林里走多久，一阵刺耳的哄笑声就打破了林间的宁静。",
      next: "hunt_05"
    },

    hunt_05: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "Leopold",
      text: "“真搞不懂父王怎么会允许你这种怪人参加秋猎，简直是丢尽了王室的脸面！”",
      next: "hunt_06"
    },

    hunt_06: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你停下脚步，拨开了面前的灌木丛，眼前的景象让你微微蹙起了眉。",
      next: "hunt_07"
    },

    hunt_07: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "Leopold 一改往日你所熟悉的温柔面目，指挥着簇拥着他的几个贵族少年，把另一个红发少年按在地上。",
      next: "hunt_08"
    },

    hunt_08: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "Leopold",
      text: "“怎么不说话？你不会真的是哑巴吧？”",
      next: "hunt_09"
    },

    hunt_09: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你的未婚夫得意地走到少年面前，穿着精致马靴的脚恶狠狠地踩在他的手背上。",
      next: "hunt_10"
    },

    hunt_10: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "Leopold",
      text: "“你这种人怎么配和我流着一样的血！”",
      next: "hunt_11"
    },

    hunt_11: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "周围的哄笑声更大了。\n\nKönig 没有反抗。他只是死死地低着头，过长的额发遮住了他的眉眼，让你看不清他的神情。",
      next: "hunt_12"
    },

    hunt_12: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "但你清楚地看到，那只被王储踩在脚底的手，正死死地抠进泥土里。",
      next: "hunt_13"
    },

    hunt_13: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "他的指节因为极度的用力而泛出惨白的颜色，手背上的青筋暴突，仿佛是一头正被迫收起獠牙、隐忍蛰伏的幼兽。",
      next: "hunt_14"
    },

    hunt_14: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "一阵秋风吹过，卷起几片枯黄的落叶。在一片刺耳的嘲笑声中，他微微偏过了头，毫无预兆地穿过灌木丛，撞上了你的视线。",
      next: "hunt_15"
    },

    hunt_15: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "那是一双被整个世界抛弃、却又在黑暗中疯狂滋生着野心的眼睛。",
      next: "choice_01"
    },

    choice_01: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      bgm: "forest.mp3",
      speaker: "",
      text: "【请做出你的选择】",
      choices: [
        {
          text: "A. 这不关你的事，你不想惹火上身。你只是冷漠地移开眼，带着侍女悄然转身离开。",
          effects: { dark: 2 },
          next: "ending_strangers"
        },
        {
          text: "B. 你无法忍受这种恃强凌弱的事，直接冲出去指责王储有失风度，勒令他们放开 König。",
          effects: { redemption: 1 },
          next: "ending_early_death"
        },
        {
          text: "C. 你深知现在得罪 Leopold 并非明智之举，故意踩断地上的树枝发出声响，装作不经意间路过。",
          effects: { redemption: 2, ambition: 1 },
          next: "route_c_01"
        }
      ]
    },

    ending_strangers: {
      chapter: "BAD END",
      bg: "bad-ending.jpg",
      bgm: "bad-ending.mp3",
      speaker: "",
      ending: "陌路亡魂",
      text: "十年的时光转瞬即逝。加冕典礼前夜，宫变突生。\n\n当高大的新王踹开你的房门时，他的眼中没有一丝留恋。你甚至没来得及求饶，冰冷的剑刃就划破了你的喉咙。\n\n在他眼里，你和当年那些霸凌他的人没有任何区别。"
    },

    ending_early_death: {
      chapter: "BAD END",
      bg: "bad-ending.jpg",
      bgm: "bad-ending.mp3",
      speaker: "",
      ending: "早夭的花朵",
      text: "你愚蠢的善良和冲动给你和你的家族招来了祸患。\n\n王储记恨上了你，不久后，你的家族在政治斗争中被陷害，你甚至没能活到成年嫁入王室的那一天。"
    },

    route_c_01: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      bgm: "route-c.mp3",
      speaker: "Leopold",
      text: "“谁在那！”",
      next: "route_c_02"
    },

    route_c_02: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你带着侍女婷婷袅袅地走出去，微微屈膝行了一个优雅的贵族礼。",
      next: "route_c_03"
    },

    route_c_03: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "{{playerName}}",
      text: "“殿下，原来您在这里。正好父亲刚刚在和陛下讨论起您呢，想必您今日肯定又猎到了什么猛兽吧。”",
      next: "route_c_04"
    },

    route_c_04: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "在你这位出身高贵、且深得国王喜爱的未婚妻面前，Leopold 显然不愿意暴露出过于粗鄙的一面。",
      next: "route_c_05"
    },

    route_c_05: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "他掩饰般地轻咳了一声，嫌恶地在草地上蹭了蹭靴底的泥水，换上了一副温文尔雅的虚伪笑容。",
      next: "route_c_06"
    },

    route_c_06: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "Leopold",
      text: "“原来是你，{{playerName}}小姐。一些无伤大雅的玩笑罢了，既然父王找我，我们这便过去。”",
      next: "route_c_07"
    },

    route_c_07: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "临走前，他狠狠地瞪了泥潭中的 König 一眼，带着那群贵族子弟呼啦啦地离开了。",
      next: "route_c_08"
    },

    route_c_08: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "四周重新陷入死一般的寂静，只剩下风吹过树叶的沙沙声。",
      next: "route_c_09"
    },

    route_c_09: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你吩咐侍女在原地等候，自己则独自提着裙摆，一步步走向那个少年。",
      next: "route_c_10"
    },

    route_c_10: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "听到靠近的脚步声，他依然低着头，死死咬着牙，浑身的肌肉因为极度的紧绷而微微颤抖。",
      next: "route_c_11"
    },

    route_c_11: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "然而，预想中的讥讽并没有落下。",
      next: "route_c_12"
    },

    route_c_12: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你从袖中抽出了一方月白色的丝帕，边缘用银线精心绣着你家族——奥古斯都大公的鸢尾花纹章，上面还带着一丝属于你的、若有似无的冷香。",
      next: "route_c_13"
    },

    route_c_13: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "{{playerName}}",
      text: "“擦擦吧。”",
      next: "route_c_14"
    },

    route_c_14: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "König 难以置信地抬起头。",
      next: "route_c_15"
    },

    route_c_15: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "见他不接，你轻叹了一口气，却还是没有放下手。",
      next: "route_c_16"
    },

    route_c_16: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你直视着他那双宛如困兽般的眼睛，语气平静，却带着不容置疑的力量。",
      next: "route_c_17"
    },

    route_c_17: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "{{playerName}}",
      text: "“殿下，不要用别人的愚蠢来惩罚自己。”",
      next: "route_c_18"
    },

    route_c_18: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "他终于伸出手，小心翼翼地没有碰到你的手，接过了你的丝帕。",
      next: "route_c_19"
    },

    route_c_19: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你这才转身离开。",
      next: "route_c_20"
    },

    route_c_20: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "你没有回头，自然也就没有看到——",
      next: "route_c_21"
    },

    route_c_21: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "少年僵硬地跪在原地，良久，他才小心翼翼地、用双手最干净的掌心部位，捧起了那方丝帕。",
      next: "route_c_22"
    },

    route_c_22: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "他将它死死地按在胸口，深深地埋下头去，像是要把那一丝微弱的冷香融入血液。",
      next: "route_c_23"
    },

    route_c_23: {
      chapter: "序章 · 困兽",
      bg: "forest-path.jpg",
      speaker: "",
      text: "那双原本死寂幽暗的眼眸里，此刻正疯狂地翻涌着某种病态的渴望与执念。",
      next: "prologue_end"
    },

    prologue_end: {
      chapter: "序章 · 困兽",
      bg: "forest-autumn.jpg",
      speaker: "",
      ending: "序章完成",
      text: "十年前的落日森林里，一方丝帕悄无声息地改变了两个人的命运。\n\n—— 序章 · 困兽 完 ——"
    }
  }
};
