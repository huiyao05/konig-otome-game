// ===============================
// 剧情文件：V8
// 序章《困兽》 + 第一章《角斗士》
// 第一章背景/音乐严格按用户最新剧本标注
// ===============================
//
// 第一章素材：
// indoor.jpg + chapter1-music1.mp3
// arena.jpg
// arena-stand.jpg + chapter1-music2.mp3
// dark.jpg + chapter1-music3.mp3
//
// 最后返回 arena-stand.jpg，但音乐3继续播放。
// ===============================

window.GAME_CONFIG = {
  "titleBackground": "title.jpg",
  "titleBgm": "title.mp3",
  "showExactStats": true,
  "defaultVolume": 0.45
};

window.STORY = {
  "startNode": "prologue_01",
  "nodes": {
    "prologue_01": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "bgm": "forest.mp3",
      "speaker": "",
      "text": "作为奥古斯都大公唯一的嫡女，从你出生的那一刻起，你的人生轨迹就已经和家族命运紧紧捆绑在一起。",
      "next": "prologue_03"
    },
    "prologue_03": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "「{{playerName}}」小姐，你是王都最耀眼的明珠，是注定要戴上后冠的女人。你的每一个选择都牵动着你的命运。",
      "next": "hunt_01"
    },
    "hunt_01": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "今日是一年一度的皇家秋猎，落日森林中几乎聚集了全王都的大人物。",
      "next": "hunt_02"
    },
    "hunt_02": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "十七岁的你也被父亲带了过来，他嘱咐你一定要和王储Leopold多多培养感情。",
      "next": "hunt_03"
    },
    "hunt_03": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "你看了看营帐中觥筹交错的大人们，你轻声叹了口气，带着贴身侍女悄悄溜了出去。",
      "next": "hunt_04"
    },
    "hunt_04": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "然而你还没在森林里走多久，一阵刺耳的哄笑声就打破了林间的宁静。",
      "next": "hunt_05"
    },
    "hunt_05": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“真搞不懂父王怎么会允许你这种怪人参加秋猎，简直是丢尽了王室的脸面！”",
      "next": "hunt_06"
    },
    "hunt_06": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你停下脚步，拨开了面前的灌木丛，眼前的景象让你微微蹙起了眉。",
      "next": "hunt_07"
    },
    "hunt_07": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "Leopold一改往日你所熟悉的温柔面目，指挥着簇拥着他的几个贵族少年把另一个红发少年按在地上。",
      "next": "hunt_08"
    },
    "hunt_08": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“怎么不说话？你不会真的是哑巴吧？”",
      "next": "hunt_09"
    },
    "hunt_09": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你的未婚夫得意地走到少年面前，穿着精致马靴的脚恶狠狠地踩在他的手背上。",
      "next": "hunt_10"
    },
    "hunt_10": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“你这种人怎么配和我流着一样的血！”",
      "next": "hunt_11"
    },
    "hunt_11": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "周围的哄笑声更大了。",
      "next": "hunt_12"
    },
    "hunt_12": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "König没有反抗。他只是死死地低着头，过长的额发遮住了他的眉眼，让你看不清他的神情。",
      "next": "hunt_13"
    },
    "hunt_13": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "但你清楚地看到，那只被王储踩在脚底的手，正死死地抠进泥土里。",
      "next": "hunt_14"
    },
    "hunt_14": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "他的指节因为极度的用力而泛出惨白的颜色，手背上的青筋暴突，仿佛是一头正被迫收起獠牙、隐忍蛰伏的幼兽。",
      "next": "hunt_15"
    },
    "hunt_15": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "一阵秋风吹过，卷起几片枯黄的落叶。在一片刺耳的嘲笑声中，他微微偏过了头，毫无预兆地穿过灌木丛，撞上了你的视线。",
      "next": "hunt_16"
    },
    "hunt_16": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "那是一双被整个世界抛弃、却又在黑暗中疯狂滋生着野心的眼睛。",
      "next": "choice_01"
    },
    "choice_01": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "bgm": "forest.mp3",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 这不关你的事，你不想惹火上身。你只是冷漠地移开眼，带着侍女悄然转身离开。",
          "effects": {
            "dark": 2
          },
          "next": "ending_strangers"
        },
        {
          "text": "B. 你无法忍受这种恃强凌弱的事，直接冲出去指责王储有失风度，勒令他们放开König。",
          "effects": {
            "redemption": 1
          },
          "next": "ending_early_death"
        },
        {
          "text": "C. 你深知现在得罪Leopold并非明智之举，故意踩断地上的树枝发出声响，装作不经意间路过。",
          "effects": {
            "redemption": 2,
            "ambition": 1
          },
          "next": "route_c_01"
        }
      ]
    },
    "ending_strangers": {
      "chapter": "BAD END",
      "bg": "bad-ending.jpg",
      "bgm": "bad-ending.mp3",
      "speaker": "",
      "text": "十年的时光转瞬即逝。加冕典礼前夜，宫变突生。当高大的新王踹开你的房门时，他的眼中没有一丝留恋。你甚至没来得及求饶，冰冷的剑刃就划破了你的喉咙。在他眼里，你和当年那些霸凌他的人没有任何区别。",
      "ending": "陌路亡魂"
    },
    "ending_early_death": {
      "chapter": "BAD END",
      "bg": "bad-ending.jpg",
      "bgm": "bad-ending.mp3",
      "speaker": "",
      "text": "你愚蠢的善良和冲动给你和你的家族招来了祸患。王储记恨上了你，不久后，你的家族在政治斗争中被陷害，你甚至没能活到成年嫁入王室的那一天。",
      "ending": "早夭的花朵"
    },
    "route_c_01": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "bgm": "route-c.mp3",
      "speaker": "Leopold",
      "text": "“谁在那！”",
      "next": "route_c_02"
    },
    "route_c_02": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你带着侍女婷婷袅袅地走出去，微微屈膝行了一个优雅的贵族礼：",
      "next": "route_c_03"
    },
    "route_c_03": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，原来您在这里。正好父亲刚刚在和陛下讨论起您呢，想必您今日肯定又猎到了什么猛兽吧。”",
      "next": "route_c_04"
    },
    "route_c_04": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "在你这位出身高贵、且深得国王喜爱的未婚妻面前，Leopold显然不愿意暴露出过于粗鄙的一面。",
      "next": "route_c_05"
    },
    "route_c_05": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "他掩饰般地轻咳了一声，嫌恶地在草地上蹭了蹭靴底的泥水，换上了一副温文尔雅的虚伪笑容：",
      "next": "route_c_06"
    },
    "route_c_06": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“原来是你，{{playerName}}小姐。一些无伤大雅的玩笑罢了，既然父王找我，我们这便过去。”",
      "next": "route_c_07"
    },
    "route_c_07": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "临走前，他狠狠地瞪了泥潭中的König一眼，带着那群贵族子弟呼啦啦地离开了。",
      "next": "route_c_08"
    },
    "route_c_08": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "四周重新陷入死一般的寂静，只剩下风吹过树叶的沙沙声。",
      "next": "route_c_09"
    },
    "route_c_09": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你吩咐侍女在原地等候，自己则独自提着裙摆，一步步走向那个少年。",
      "next": "route_c_10"
    },
    "route_c_10": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "听到靠近的脚步声，他依然低着头，死死咬着牙，浑身的肌肉因为极度的紧绷而微微颤抖。",
      "next": "route_c_11"
    },
    "route_c_11": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "然而，预想中的讥讽并没有落下。",
      "next": "route_c_12"
    },
    "route_c_12": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你从袖中抽出了一方月白色的丝帕，边缘用银线精心绣着你家族——奥古斯都大公的鸢尾花纹章，上面还带着一丝属于你的、若有似无的冷香。",
      "next": "route_c_13"
    },
    "route_c_13": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "{{playerName}}",
      "text": "“擦擦吧。”",
      "next": "route_c_14"
    },
    "route_c_14": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "König他难以置信地抬起头。",
      "next": "route_c_15"
    },
    "route_c_15": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "见他不接，你轻叹了一口气，却还是没有放下手。",
      "next": "route_c_16"
    },
    "route_c_16": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你直视着他那双宛如困兽般的眼睛，语气平静，却带着不容置疑的力量：",
      "next": "route_c_17"
    },
    "route_c_17": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，不要用别人的愚蠢来惩罚自己。”",
      "next": "route_c_18"
    },
    "route_c_18": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "他终于伸出手，小心翼翼地没有碰到你的手，接过了你的丝帕。",
      "next": "route_c_19"
    },
    "route_c_19": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你这才转身离开。",
      "next": "route_c_20"
    },
    "route_c_20": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你没有回头，自然也就没有看到——",
      "next": "route_c_21"
    },
    "route_c_21": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "少年僵硬地跪在原地，良久，他才小心翼翼地、用双手最干净的掌心部位，捧起了那方丝帕。他将它死死地按在胸口，深深地埋下头去，像是要把那一丝微弱的冷香融入血液。",
      "next": "route_c_22"
    },
    "route_c_22": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "那双原本死寂幽暗的眼眸里，此刻正疯狂地翻涌着某种病态的渴望与执念。",
      "next": "prologue_end"
    },
    "prologue_end": {
      "speaker": "",
      "text": "",
      "chapterIntro": {
        "small": "第一章",
        "title": "角斗士",
        "next": "chapter1_01"
      }
    },
    "chapter1_01": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "bgm": "chapter1-music1.mp3",
      "speaker": "",
      "text": "秋猎结束后，父亲带着你和国王和王储道别，随后让你先乘马车回去。",
      "next": "chapter1_02"
    },
    "chapter1_02": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "回家后，你的贴身侍女压低了声音，一边替你整理裙摆，一边心有余悸地开口。",
      "next": "chapter1_03"
    },
    "chapter1_03": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“小姐，您刚才实在太冒险了。”",
      "next": "chapter1_04"
    },
    "chapter1_04": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“那可是二殿下……若是让王储殿下看见您把贴身的帕子给了他，恐怕会惹出大麻烦的。”",
      "next": "chapter1_05"
    },
    "chapter1_05": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“不过是递了一块帕子，有什么可担心的？”",
      "next": "chapter1_06"
    },
    "chapter1_06": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "侍女叹了口气，凑近了些，声音压得极低，仿佛生怕惊动了什么诅咒：",
      "next": "chapter1_07"
    },
    "chapter1_07": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“您是不知道……王室历代都是璀璨的金发与象征神圣的碧眼，唯独这位二殿下，生来就是一头扎眼的红发。在教廷的典籍里，那可是被魔鬼吻过的颜色，是不祥之兆啊。”",
      "next": "chapter1_08"
    },
    "chapter1_08": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你微微挑眉。脑海中浮现出刚才那个少年的身影——脏污之下确实隐约透出一抹暗沉的深红，像干涸的鲜血。",
      "next": "chapter1_09"
    },
    "chapter1_09": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“他的生母呢？”你顺势问道。",
      "next": "chapter1_10"
    },
    "chapter1_10": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“听说是个战败国送来的公主，因为一头红发长得妖异，勉强得了陛下几天欢心。生下二殿下没多久就病死了。死前还给他取名König，也就是我们陛下仁厚，没有与她计较，让二殿下保留了这个名字。”",
      "next": "chapter1_11"
    },
    "chapter1_11": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "侍女撇了撇嘴，语气里带着毫不掩饰的轻视。",
      "next": "chapter1_12"
    },
    "chapter1_12": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“没有母族庇护，又长着不祥的红发……”",
      "next": "chapter1_13"
    },
    "chapter1_13": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“再怎么说，他也是二皇子。”",
      "next": "chapter1_14"
    },
    "chapter1_14": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你轻轻地开口，却带着不容反驳的力量，制止了侍女继续说下去。",
      "next": "chapter1_15"
    },
    "chapter1_15": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "自从秋猎那日后，王储Leopold一而再，再而三得邀请你出游。",
      "next": "chapter1_16"
    },
    "chapter1_16": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "前两次，你尚能以身体不适为由婉拒。但事不过三，这一次，哪怕是再高傲的贵族小姐，也不好拂了王国储君的面子。",
      "next": "chapter1_17"
    },
    "chapter1_17": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你用纯银裁纸刀挑开那封印着王室火漆的信笺：",
      "next": "chapter1_18"
    },
    "chapter1_18": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "Leopold · 信笺",
      "text": "“亲爱的{{playerName}}小姐，自秋猎后，我无时无刻不在期盼着与您的重逢。不知今日，可否有幸邀请您与我一同前往斗兽场？—— 您忠诚的，Leopold”",
      "next": "chapter1_19"
    },
    "chapter1_19": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "斗兽场，你实在不知道这种野蛮血腥的地方有什么好去的。",
      "next": "chapter1_20"
    },
    "chapter1_20": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“小姐，您打算赴约吗？还是像上次那样回绝王储殿下？”",
      "next": "chapter1_21"
    },
    "chapter1_21": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“去吧，”你轻叹了一声，将信笺随意扔在天鹅绒的梳妆台上，“总归是躲不过的。”",
      "next": "chapter1_22"
    },
    "chapter1_22": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "平心而论，在马车平稳驶向斗兽场的这一路上，他都完美地展现了一位储君应有的、令人如沐春风的风度。",
      "next": "chapter1_23"
    },
    "chapter1_23": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "直到马车在喧嚣且弥漫着铁锈味的斗兽场外停稳。",
      "next": "chapter1_24"
    },
    "chapter1_24": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "Leopold率先下车，转过身，极其自然地向你伸出手。甚至在你的指尖搭上来时，亲昵地虚扶住了你的腰肢，护着你走下马车。",
      "next": "chapter1_25"
    },
    "chapter1_25": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "就在你的鞋跟踩上粗糙石板的那一刻，一种仿佛被野兽死死盯住的、令人芒刺在背的战栗感瞬间攀上你的脊背。",
      "next": "chapter1_26"
    },
    "chapter1_26": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "你若有所觉地抬起头，越过拥挤的人群，却没找到视线的来源。",
      "next": "chapter1_27"
    },
    "chapter1_27": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "你们被恭敬地迎入了视野极佳的贵宾看台。",
      "next": "chapter1_28"
    },
    "chapter1_28": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "伴随着震耳欲聋的欢呼声，今日的压轴戏拉开了帷幕。",
      "next": "chapter1_29",
      "bgm": "chapter1-music2.mp3"
    },
    "chapter1_29": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "沉重的铁闸门缓缓升起，戴着厚重头盔的角斗士踏入沙地，迎上对面三位如山一般壮的对手。",
      "next": "chapter1_30"
    },
    "chapter1_30": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "而赌盘也在此刻开始。",
      "next": "chapter1_31"
    },
    "chapter1_31": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "再精彩的对决，再鲜活的生命，在这个斗兽场里，也不过是一场赌局。",
      "next": "chapter1_32"
    },
    "chapter1_32": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "Leopold",
      "text": "“听说他最近战无不胜。”Leopold摇晃着杯中的红酒，带着一丝上位者独有的轻慢，向你靠拢了些，“亲爱的，不如我们来玩个小游戏？我出一百个金币，您来押注。押他赢，或者押他输，赚了全算您的，就当是博您一笑了。您觉得，这头大块头今天也能幸运地活着走出来吗？”",
      "next": "chapter1_choice"
    },
    "chapter1_33": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "就在你的鞋跟踩上粗糙石板的那一刻，一种仿佛被野兽死死盯住的、令人芒刺在背的战栗感瞬间攀上你的脊背。",
      "next": "chapter1_34"
    },
    "chapter1_34": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你若有所觉地抬起头，越过拥挤的人群，却没找到视线的来源。",
      "next": "chapter1_35"
    },
    "chapter1_35": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你们被恭敬地迎入了视野极佳的贵宾包厢。",
      "next": "chapter1_36"
    },
    "chapter1_36": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "伴随着震耳欲聋的欢呼声，今日的压轴戏拉开了帷幕。",
      "next": "chapter1_37"
    },
    "chapter1_37": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "沉重的铁闸门缓缓升起，戴着厚重头盔的角斗士踏入沙地，迎上对面三位如山一般壮的对手。",
      "next": "chapter1_38"
    },
    "chapter1_38": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "而赌盘也在此刻开始。",
      "next": "chapter1_39"
    },
    "chapter1_39": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "再精彩的对决，再鲜活的生命，在这个斗兽场里，也不过是一场赌局。",
      "next": "chapter1_40"
    },
    "chapter1_40": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "Leopold",
      "text": "“听说他最近战无不胜。”Leopold摇晃着杯中的红酒，带着一丝上位者独有的轻慢，向你靠拢了些，“亲爱的，不如我们来玩个小游戏？我出一百个金币，您来押注。押他赢，或者押他输，赚了全算您的，就当是博您一笑了。您觉得，这头大块头今天也能幸运地活着走出来吗？”",
      "next": "chapter1_choice"
    },
    "chapter1_choice": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. “我相信他能赢。”",
          "effects": {
            "redemption": 1
          },
          "setFlags": {
            "arenaBet": "win"
          },
          "next": "chapter1_41"
        },
        {
          "text": "B. “再厉害的人，面对三个强壮的对手，也无胜算。”",
          "effects": {
            "dark": 1
          },
          "setFlags": {
            "arenaBet": "lose"
          },
          "next": "chapter1_41"
        }
      ]
    },
    "chapter1_41": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "伴随着刺耳的铜锣声，沙地上的厮杀惨烈而极其短暂。",
      "next": "chapter1_42"
    },
    "chapter1_42": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "他仿佛被某种极其极端的暴戾所彻底驱使，面对那三名凶悍的对手，拔出重剑，利落地送他们见了上帝。",
      "next": "chapter1_43"
    },
    "chapter1_43": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "可能他们见不到上帝，因为下地狱了。",
      "next": "chapter1_44"
    },
    "chapter1_44": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "温热的鲜血如喷泉般溅上了他冰冷的黑铁头盔。",
      "next": "chapter1_45"
    },
    "chapter1_45": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "在满场震耳欲聋、几近疯狂的呐喊与尖叫声中，他微微仰起头。",
      "next": "chapter1_46"
    },
    "chapter1_46": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "隔着看台的重重防线，越过那些狂热的赌徒，他极其精准地看向了你所在的位置。",
      "next": "chapter1_47"
    },
    "chapter1_47": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "随后，他拖着带血的步伐，退入了漆黑的通道。",
      "next": "chapter1_48"
    },
    "chapter1_48": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "他那一眼看得你有些心神不宁。",
      "next": "chapter1_49"
    },
    "chapter1_49": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "你垂下眼睫，极其自然地微微蹙起眉头，用蕾丝绢帕掩住口鼻：",
      "next": "chapter1_50"
    },
    "chapter1_50": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，这儿的血腥味实在令人作呕，空气也浑浊得很。我想去外侧的露台透透风。”",
      "next": "chapter1_51"
    },
    "chapter1_51": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "Leopold正沉浸在兴奋中，点点头意思他知道了。",
      "next": "chapter1_52"
    },
    "chapter1_52": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你随意找了个借口将侍女支开。随后，你独自顺着阴暗、潮湿、散发着铁锈味的石阶，悄无声息地向角斗士准备区走去。",
      "next": "chapter1_53",
      "bgm": "chapter1-music3.mp3"
    },
    "chapter1_53": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "这里的气味更加难闻，火把在墙壁上投下跳跃的暗影。",
      "next": "chapter1_54"
    },
    "chapter1_54": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "在走廊尽头一间半敞着铁门的囚室前，你停下了脚步。",
      "next": "chapter1_55"
    },
    "chapter1_55": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "那个角斗士正背对着你坐在石床上。听到你的脚步声，他并没有防备，而是极其平静地抬起手，摘下了那顶沾满鲜血的头盔。",
      "next": "chapter1_56"
    },
    "chapter1_56": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "一头暗红色的短发在昏暗的光线下暴露无遗。",
      "next": "chapter1_57"
    },
    "chapter1_57": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他转过身，深邃的眼眸径直对上了你站在门口的视线。",
      "next": "chapter1_58"
    },
    "chapter1_58": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他显然早就知道你会来，甚至没有一丝一毫想要隐藏身份的打算。",
      "next": "chapter1_59"
    },
    "chapter1_59": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "{{playerName}}",
      "text": "“二殿下。”你的声音里带着难以掩饰的惊愕与颤抖，“你知不知道你在干什么？堂堂帝国皇子，却在这做供人取乐的角斗士？”",
      "next": "chapter1_60"
    },
    "chapter1_60": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "在你的认知里，König一直是个在王宫中处处受人欺凌、只能在泥潭和风雪中隐忍求生的小可怜。哪怕他似乎拥有反抗的力气，也只是个任由王储践踏的边缘人。",
      "next": "chapter1_61"
    },
    "chapter1_61": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "可现在，这个“小可怜”刚刚在沙地上结束了三个壮汉的生命。",
      "next": "chapter1_62"
    },
    "chapter1_62": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "König随手扯过一块脏污的破布，漫不经心地擦拭着指节上的血迹。",
      "next": "chapter1_63"
    },
    "chapter1_63": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他站了起来，朝你走近了两步，极具压迫感的血腥味瞬间将你笼罩。",
      "next": "chapter1_64"
    },
    "chapter1_64": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "这时你才发现，那天倒在地上的少年竟然比你高出这么多。",
      "next": "chapter1_65"
    },
    "chapter1_65": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“皇子？有谁真的把我当过皇子吗？”他低哑地嗤笑了一声，“{{playerName}}小姐不必紧张，我来这里，不过是为了‘放松’罢了。”",
      "next": "chapter1_66"
    },
    "chapter1_66": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "{{playerName}}",
      "text": "“放松？”你难以置信地重复着这个词。",
      "next": "chapter1_67"
    },
    "chapter1_67": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“是的，放松。”他直勾勾地盯着你，“宫廷里的规矩太多，压得人喘不过气。只有在这里，听着骨头断裂，血液喷溅的声音，我才能感觉到自己还活着。毕竟……这比挨打要痛快得多，您说对吗？”",
      "next": "chapter1_68"
    },
    "chapter1_68": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你下意识地后退了半步，后背抵上了冰冷的铁门。",
      "next": "chapter1_69"
    },
    "chapter1_69": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你突然意识到，你可能从未真正了解过这头你曾施以怜悯的野兽。",
      "next": "chapter1_70"
    },
    "chapter1_70": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "König注意到了你的防备，但他并没有退开，反而更近地逼迫上来。",
      "next": "chapter1_71"
    },
    "chapter1_71": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "突然他笑出了声：",
      "next": "chapter1_72"
    },
    "chapter1_72": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“真可爱。刚刚那些都是我骗您的，{{playerName}}小姐，请原谅我的不诚实。我确实有不得已的理由在这，但还不能告诉您。”",
      "next": "chapter1_73"
    },
    "chapter1_73": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他微微低下头，语气里透着某种令人战栗的亲昵：",
      "next": "chapter1_74"
    },
    "chapter1_74": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“刚才我听管事说，您为我下注了。”",
      "next": "chapter1_bet_branch"
    },
    "chapter1_bet_branch": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "",
      "nextByFlag": {
        "key": "arenaBet",
        "cases": {
          "win": "chapter1_win_01",
          "lose": "chapter1_lose_01"
        },
        "fallback": "chapter1_win_01"
      }
    },
    "chapter1_win_01": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他沾着血污的手指缓缓抬起，虚虚地停在你脸颊侧边一寸的地方。",
      "next": "chapter1_win_02"
    },
    "chapter1_win_02": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“一百枚金币……您竟然押了我赢。在这个世上，应该只有您，这样信任我了。为了不辜负您的那份筹码，哪怕是对抗死神，我也会赢的。”",
      "next": "chapter1_after_branch_01"
    },
    "chapter1_lose_01": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他扯动了一下嘴角，凑近你的耳畔，滚烫地鼻息让你忍不住想要逃走。",
      "next": "chapter1_lose_02"
    },
    "chapter1_lose_02": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“居然认为我会输吗，{{playerName}}小姐？您平日里眼光那么毒辣，这次却有些小瞧我了。您都还好好活着，我怎么舍得死在您看不见的角落呢？”",
      "next": "chapter1_after_branch_01"
    },
    "chapter1_after_branch_01": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "侍卫",
      "text": "“王储妃殿下？您在哪里？”",
      "next": "chapter1_after_branch_02"
    },
    "chapter1_after_branch_02": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "是Leopold贴身侍卫的声音，听起来已经有些急躁了。",
      "next": "chapter1_after_branch_03"
    },
    "chapter1_after_branch_03": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "König极其自然地收回了撑在墙上的手，向后退了半步，那股令人窒息的压迫感也随之消散。",
      "next": "chapter1_after_branch_04"
    },
    "chapter1_after_branch_04": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“您该回去了，{{playerName}}小姐。”他极其绅士地微微欠身，语气重新变得谦卑而疏离，仿佛刚才那个暴徒只是一场幻影，“如果我那位尊贵的兄长，发现他完美无瑕的未婚妻，正和我待在同一个牢笼里……他可是会发疯的。”",
      "next": "chapter1_after_branch_05"
    },
    "chapter1_after_branch_05": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你深深地看了他一眼，将狂跳的心绪强行压下，提起裙摆，转身向着光亮处的阶梯走去。",
      "next": "chapter1_after_branch_06"
    },
    "chapter1_after_branch_06": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“顺便，感谢您的探望。”",
      "next": "chapter1_after_branch_07"
    },
    "chapter1_after_branch_07": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "当你在走廊拐角处重新遇到侍卫，并编造了一个迷路的借口回到包厢时，Leopold正焦急地来回踱步。",
      "next": "chapter1_after_branch_08"
    },
    "chapter1_after_branch_08": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "Leopold",
      "text": "“哦，感谢上帝！亲爱的，你去哪里了？我还以为你在这肮脏的地方遇到了什么危险。”Leopold急忙迎上来，心有余悸地亲吻了你的鬓发。",
      "next": "chapter1_after_branch_09"
    },
    "chapter1_after_branch_09": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "你垂下眼眸，任由未婚夫将你拥入怀中。",
      "next": "chapter1_end"
    },
    "chapter1_end": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "—— 第一章 · 角斗士 完 ——",
      "chapterComplete": true
    }
  }
};
