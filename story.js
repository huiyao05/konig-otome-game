// König 文游 V13 · 第五章《抉择》与四个终章
// 已发布的第一至四章节点 ID 均保持不变，save schema 不升级。
// 结局背景采用纯 CSS 抽象主题，无需结局专用 JPG。
window.GAME_CONFIG = {
  "titleBackground": "title.jpg",
  "titleBgm": "title.mp3",
  "showExactStats": true,
  "defaultVolume": 0.45
};

window.STORY = {
  "startNode": "opening_001",
  "nodes": {
    "prologue_001": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "今日是一年一度的皇家秋猎，落日森林中几乎聚集了全王都的大人物。",
      "next": "prologue_002",
      "bgm": "forest.mp3"
    },
    "prologue_002": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "十七岁的你也被父亲带了过来，他嘱咐你一定要和王储Leopold多多培养感情。",
      "next": "prologue_003"
    },
    "prologue_003": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "你看了看营帐中觥筹交错的大人们，你轻声叹了口气，带着贴身侍女悄悄溜了出去。",
      "next": "prologue_004"
    },
    "prologue_004": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "然而你还没在森林里走多久，一阵刺耳的哄笑声就打破了林间的宁静。",
      "next": "prologue_005"
    },
    "prologue_005": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“真搞不懂父王怎么会允许你这种怪人参加秋猎，简直是丢尽了王室的脸面！”",
      "next": "prologue_006"
    },
    "prologue_006": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你停下脚步，拨开了面前的灌木丛，眼前的景象让你微微蹙起了眉。",
      "next": "prologue_007"
    },
    "prologue_007": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "Leopold一改往日你所熟悉的温柔面目，指挥着簇拥着他的几个贵族少年把另一个红发少年按在地上。",
      "next": "prologue_008"
    },
    "prologue_008": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“怎么不说话？你不会真的是哑巴吧？”",
      "next": "prologue_009"
    },
    "prologue_009": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你的未婚夫得意地走到少年面前，穿着精致马靴的脚恶狠狠地踩在他的手背上。",
      "next": "prologue_010"
    },
    "prologue_010": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“你这种人怎么配和我流着一样的血！”",
      "next": "prologue_011"
    },
    "prologue_011": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "周围的哄笑声更大了。",
      "next": "prologue_012"
    },
    "prologue_012": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "König没有反抗。他只是死死地低着头，过长的额发遮住了他的眉眼，让你看不清他的神情。",
      "next": "prologue_013"
    },
    "prologue_013": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "但你清楚地看到，那只被王储踩在脚底的手，正死死地抠进泥土里。",
      "next": "prologue_014"
    },
    "prologue_014": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "他的指节因为极度的用力而泛出惨白的颜色，手背上的青筋暴突，仿佛是一头正被迫收起獠牙、隐忍蛰伏的幼兽。",
      "next": "prologue_015"
    },
    "prologue_015": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "一阵秋风吹过，卷起几片枯黄的落叶。在一片刺耳的嘲笑声中，他微微偏过了头，毫无预兆地穿过灌木丛，撞上了你的视线。",
      "next": "prologue_016"
    },
    "prologue_016": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "那是一双被整个世界抛弃、却又在黑暗中疯狂滋生着野心的眼睛。",
      "next": "prologue_choice"
    },
    "prologue_choice": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
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
          "text": "B. 你无法忍受这种恃强凌弱的事，直接冲出去指责王储有失风度，勒令他们放开Konig。",
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
          "next": "prologue_c_001"
        }
      ]
    },
    "ending_strangers": {
      "chapter": "BAD END",
      "bg": "bad-ending.jpg",
      "bgm": "bad-ending.mp3",
      "speaker": "",
      "text": "时光转瞬即逝。加冕典礼前夜，宫变突生。当高大的新王踹开你的房门时，他的眼中没有一丝留恋。你甚至没来得及求饶，冰冷的剑刃就划破了你的喉咙。在他眼里，你和当年那些霸凌他的人没有任何区别。",
      "ending": "陌路亡魂"
    },
    "ending_early_death": {
      "chapter": "BAD END",
      "bg": "bad-ending.jpg",
      "bgm": "bad-ending.mp3",
      "speaker": "",
      "text": "你愚蠢的善良和冲动给你和你的家族招来了祸患。王储记恨上了你，不久后，你的家族在政治斗争中被陷害，你甚至没能活到嫁入王室的那一天。",
      "ending": "早夭的花朵"
    },
    "prologue_c_001": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "bgm": "route-c.mp3",
      "speaker": "Leopold",
      "text": "“谁在那！”",
      "next": "prologue_c_002"
    },
    "prologue_c_002": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你带着侍女婷婷袅袅地走出去，微微屈膝行了一个优雅的贵族礼：",
      "next": "prologue_c_003"
    },
    "prologue_c_003": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，原来您在这里。正好父亲刚刚在和陛下讨论起您呢，想必您今日肯定又猎到了什么猛兽吧。”",
      "next": "prologue_c_004"
    },
    "prologue_c_004": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "在你这位出身高贵、且深得国王喜爱的未婚妻面前，Leopold显然不愿意暴露出过于粗鄙的一面。",
      "next": "prologue_c_005"
    },
    "prologue_c_005": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "他掩饰般地轻咳了一声，嫌恶地在草地上蹭了蹭靴底的泥水，换上了一副温文尔雅的虚伪笑容：",
      "next": "prologue_c_006"
    },
    "prologue_c_006": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "Leopold",
      "text": "“原来是你，{{playerName}}小姐。一些无伤大雅的玩笑罢了，既然父王找我，我们这便过去。”",
      "next": "prologue_c_007"
    },
    "prologue_c_007": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "临走前，他狠狠地瞪了泥潭中的König一眼，带着那群贵族子弟呼啦啦地离开了。",
      "next": "prologue_c_008"
    },
    "prologue_c_008": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "四周重新陷入死一般的寂静，只剩下风吹过树叶的沙沙声。",
      "next": "prologue_c_009"
    },
    "prologue_c_009": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你吩咐侍女在原地等候，自己则独自提着裙摆，一步步走向那个少年。",
      "next": "prologue_c_010"
    },
    "prologue_c_010": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "听到靠近的脚步声，他依然低着头，死死咬着牙，浑身的肌肉因为极度的紧绷而微微颤抖。",
      "next": "prologue_c_011"
    },
    "prologue_c_011": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "然而，预想中的讥讽并没有落下。",
      "next": "prologue_c_012"
    },
    "prologue_c_012": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你从袖中抽出了一方月白色的丝帕，边缘用银线精心绣着你家族——奥古斯都大公的鸢尾花纹章，上面还带着一丝属于你的、若有似无的冷香。",
      "next": "prologue_c_013"
    },
    "prologue_c_013": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "{{playerName}}",
      "text": "“擦擦吧。”",
      "next": "prologue_c_014"
    },
    "prologue_c_014": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "König他难以置信地抬起头。",
      "next": "prologue_c_015"
    },
    "prologue_c_015": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "见他不接，你轻叹了一口气，却还是没有放下手。",
      "next": "prologue_c_016"
    },
    "prologue_c_016": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你直视着他那双宛如困兽般的眼睛，语气平静，却带着不容置疑的力量：",
      "next": "prologue_c_017"
    },
    "prologue_c_017": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，不要用别人的愚蠢来惩罚自己。”",
      "next": "prologue_c_018"
    },
    "prologue_c_018": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "他终于伸出手，小心翼翼地没有碰到你的手，接过了你的丝帕。",
      "next": "prologue_c_019"
    },
    "prologue_c_019": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你这才转身离开。",
      "next": "prologue_c_020"
    },
    "prologue_c_020": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "你没有回头，自然也就没有看到——",
      "next": "prologue_c_021"
    },
    "prologue_c_021": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "少年僵硬地跪在原地，良久，他才小心翼翼地、用双手最干净的掌心部位，捧起了那方丝帕。他将它死死地按在胸口，深深地埋下头去，像是要把那一丝微弱的冷香融入血液。",
      "next": "prologue_c_022"
    },
    "prologue_c_022": {
      "chapter": "序章 · 困兽",
      "bg": "forest-path.jpg",
      "speaker": "",
      "text": "那双原本死寂幽暗的眼眸里，此刻正疯狂地翻涌着某种病态的渴望与执念。",
      "next": "chapter1_intro"
    },
    "chapter1_intro": {
      "speaker": "",
      "text": "",
      "chapterIntro": {
        "small": "第一章",
        "title": "角斗士",
        "next": "ch1_001"
      }
    },
    "ch1_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "bgm": "chapter1-music1.mp3",
      "speaker": "",
      "text": "秋猎结束后，父亲带着你和国王和王储道别，随后让你先乘马车回去。",
      "next": "ch1_002"
    },
    "ch1_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "回家后，你的贴身侍女压低了声音，一边替你整理裙摆，一边心有余悸地开口。",
      "next": "ch1_003"
    },
    "ch1_003": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“小姐，您刚才实在太冒险了。”",
      "next": "ch1_004"
    },
    "ch1_004": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“那可是二殿下……若是让王储殿下看见您把贴身的帕子给了他，恐怕会惹出大麻烦的。”",
      "next": "ch1_005"
    },
    "ch1_005": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“不过是递了一块帕子，有什么可担心的？”",
      "next": "ch1_006"
    },
    "ch1_006": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "侍女叹了口气，凑近了些，声音压得极低，仿佛生怕惊动了什么诅咒：",
      "next": "ch1_007"
    },
    "ch1_007": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“您是不知道……王室历代都是璀璨的金发与象征神圣的碧眼，唯独这位二殿下，生来就是一头扎眼的红发。在教廷的典籍里，那可是被魔鬼吻过的颜色，是不祥之兆啊。”",
      "next": "ch1_008"
    },
    "ch1_008": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你微微挑眉。脑海中浮现出刚才那个少年的身影——脏污之下确实隐约透出一抹暗沉的深红，像干涸的鲜血。",
      "next": "ch1_009"
    },
    "ch1_009": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“他的生母呢？”",
      "next": "ch1_010"
    },
    "ch1_010": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你顺势问道。",
      "next": "ch1_011"
    },
    "ch1_011": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“听说是个战败国送来的公主，因为一头红发长得妖异，勉强得了陛下几天欢心。生下二殿下没多久就病死了。死前还给他取名König，也就是我们陛下仁厚，没有与她计较，让二殿下保留了这个名字。”",
      "next": "ch1_012"
    },
    "ch1_012": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "侍女撇了撇嘴，语气里带着毫不掩饰的轻视。",
      "next": "ch1_013"
    },
    "ch1_013": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“没有母族庇护，又长着不祥的红发……”",
      "next": "ch1_014"
    },
    "ch1_014": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“再怎么说，他也是二皇子。”",
      "next": "ch1_015"
    },
    "ch1_015": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你轻轻地开口，却带着不容反驳的力量，制止了侍女继续说下去。",
      "next": "ch1_016"
    },
    "ch1_016": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "自从秋猎那日后，王储Leopold一而再，再而三得邀请你出游。",
      "next": "ch1_017"
    },
    "ch1_017": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "前两次，你尚能以身体不适为由婉拒。但事不过三，这一次，哪怕是再高傲的贵族小姐，也不好拂了王国储君的面子。",
      "next": "ch1_018"
    },
    "ch1_018": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你用纯银裁纸刀挑开那封印着王室火漆的信笺：",
      "next": "ch1_019"
    },
    "ch1_019": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "Leopold · 信笺",
      "text": "“亲爱的{{playerName}}小姐，自秋猎后，我无时无刻不在期盼着与您的重逢。不知今日，可否有幸邀请您与我一同前往斗兽场？—— 您忠诚的，Leopold”",
      "next": "ch1_020"
    },
    "ch1_020": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "斗兽场，你实在不知道这种野蛮血腥的地方有什么好去的。",
      "next": "ch1_021"
    },
    "ch1_021": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "侍女小心翼翼地探询：",
      "next": "ch1_022"
    },
    "ch1_022": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "侍女",
      "text": "“小姐，您打算赴约吗？还是像上次那样回绝王储殿下？”",
      "next": "ch1_023"
    },
    "ch1_023": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "{{playerName}}",
      "text": "“去吧，总归是躲不过的。”",
      "next": "ch1_024"
    },
    "ch1_024": {
      "chapter": "第一章 · 角斗士",
      "bg": "indoor.jpg",
      "speaker": "",
      "text": "你轻叹了一声，将信笺随意扔在天鹅绒的梳妆台上，",
      "next": "ch1_025"
    },
    "ch1_025": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "平心而论，在马车平稳驶向斗兽场的这一路上，他都完美地展现了一位储君应有的、令人如沐春风的风度。",
      "next": "ch1_026"
    },
    "ch1_026": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "直到马车在喧嚣且弥漫着铁锈味的斗兽场外停稳。",
      "next": "ch1_027"
    },
    "ch1_027": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "Leopold率先下车，转过身，自然地向你伸出手。甚至在你的指尖搭上来时，亲昵地虚扶住了你的腰肢，护着你走下马车。",
      "next": "ch1_028"
    },
    "ch1_028": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "就在你的鞋跟踩上粗糙石板的那一刻，一种仿佛被野兽死死盯住的、令人芒刺在背的战栗感瞬间攀上你的脊背。",
      "next": "ch1_029"
    },
    "ch1_029": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "你若有所觉地抬起头，越过拥挤的人群，却没找到视线的来源。",
      "next": "ch1_030"
    },
    "ch1_030": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena.jpg",
      "speaker": "",
      "text": "你们被恭敬地迎入了视野极佳的贵宾看台。",
      "next": "ch1_031"
    },
    "ch1_031": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "bgm": "chapter1-music2.mp3",
      "speaker": "",
      "text": "伴随着震耳欲聋的欢呼声，今日的压轴戏拉开了帷幕。",
      "next": "ch1_032"
    },
    "ch1_032": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "沉重的铁闸门缓缓升起，戴着厚重头盔的角斗士踏入沙地，迎上对面三位如山一般壮的对手。",
      "next": "ch1_033"
    },
    "ch1_033": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "而赌盘也在此刻开始。",
      "next": "ch1_034"
    },
    "ch1_034": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "再精彩的对决，再鲜活的生命，在这个斗兽场里，也不过是一场赌局。",
      "next": "ch1_035"
    },
    "ch1_035": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "Leopold",
      "text": "“听说他最近战无不胜。”",
      "next": "ch1_036"
    },
    "ch1_036": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "Leopold摇晃着杯中的红酒，带着一丝上位者独有的轻慢，向你靠拢了些。",
      "next": "ch1_037"
    },
    "ch1_037": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "Leopold",
      "text": "“亲爱的，不如我们来玩个小游戏？我出一百个金币，您来押注。押他赢，或者押他输，赚了全算您的，就当是博您一笑了。您觉得，这头大块头今天也能幸运地活着走出来吗？”",
      "next": "ch1_choice"
    },
    "ch1_choice": {
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
          "next": "ch1_post_001"
        },
        {
          "text": "B. “再厉害的人，面对三个强壮的对手，也无胜算。”",
          "effects": {
            "dark": 1
          },
          "setFlags": {
            "arenaBet": "lose"
          },
          "next": "ch1_post_001"
        }
      ]
    },
    "ch1_post_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "伴随着刺耳的铜锣声，沙地上的厮杀惨烈而短暂。",
      "next": "ch1_post_002"
    },
    "ch1_post_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "他仿佛被某种极端的暴戾所彻底驱使，面对那三名凶悍的对手，拔出重剑，利落地送他们见了上帝。",
      "next": "ch1_post_003"
    },
    "ch1_post_003": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "可能他们见不到上帝，因为下地狱了。",
      "next": "ch1_post_004"
    },
    "ch1_post_004": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "温热的鲜血如喷泉般溅上了他冰冷的黑铁头盔。",
      "next": "ch1_post_005"
    },
    "ch1_post_005": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "在满场震耳欲聋、几近疯狂的呐喊与尖叫声中，那个犹如移动铁塔般的男人微微仰起头。",
      "next": "ch1_post_006"
    },
    "ch1_post_006": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "隔着看台的重重防线，越过那些狂热的赌徒，他精准地看向了你所在的位置。",
      "next": "ch1_post_007"
    },
    "ch1_post_007": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "随后，他拖着带血的步伐，退入了漆黑的通道。",
      "next": "ch1_post_008"
    },
    "ch1_post_008": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "他那一眼看得你有些心神不宁。",
      "next": "ch1_post_009"
    },
    "ch1_post_009": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "你垂下眼睫，自然地微微蹙起眉头，用蕾丝绢帕掩住口鼻：",
      "next": "ch1_post_010"
    },
    "ch1_post_010": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，这儿的血腥味实在令人作呕，空气也浑浊得很。我想去外侧的露台透透风。”",
      "next": "ch1_post_011"
    },
    "ch1_post_011": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "Leopold正沉浸在兴奋中，点点头意思他知道了。",
      "next": "ch1_dark_001"
    },
    "ch1_dark_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "bgm": "chapter1-music3.mp3",
      "speaker": "",
      "text": "你随意找了个借口将侍女支开。随后，你独自顺着阴暗、潮湿、散发着铁锈味的石阶，悄无声息地向角斗士准备区走去。",
      "next": "ch1_dark_002"
    },
    "ch1_dark_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "这里的气味更加难闻，火把在墙壁上投下跳跃的暗影。",
      "next": "ch1_dark_003"
    },
    "ch1_dark_003": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "在走廊尽头一间半敞着铁门的囚室前，你停下了脚步。",
      "next": "ch1_dark_004"
    },
    "ch1_dark_004": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "那个角斗士正背对着你坐在石床上。听到你的脚步声，他并没有防备，而是平静地抬起手，摘下了那顶沾满鲜血的头盔。",
      "next": "ch1_dark_005"
    },
    "ch1_dark_005": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "一头暗红色的短发在昏暗的光线下暴露无遗。",
      "next": "ch1_dark_006"
    },
    "ch1_dark_006": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他转过身，深邃的眼眸径直对上了你站在门口的视线。",
      "next": "ch1_dark_007"
    },
    "ch1_dark_007": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他显然早就知道你会来，甚至没有一丝一毫想要隐藏身份的打算。",
      "next": "ch1_dark_008"
    },
    "ch1_dark_008": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "{{playerName}}",
      "text": "“二殿下？！”",
      "next": "ch1_dark_009"
    },
    "ch1_dark_009": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你的声音里带着难以掩饰的惊愕与颤抖。",
      "next": "ch1_dark_010"
    },
    "ch1_dark_010": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "{{playerName}}",
      "text": "“你知不知道你在干什么？堂堂帝国皇子，却在这做供人取乐的角斗士？”",
      "next": "ch1_dark_011"
    },
    "ch1_dark_011": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "在你的认知里，König一直是个在王宫中处处受人欺凌、只能在泥潭和风雪中隐忍求生的小可怜。",
      "next": "ch1_dark_012"
    },
    "ch1_dark_012": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "哪怕他似乎拥有反抗的力气，也只是个任由王储践踏的边缘人。",
      "next": "ch1_dark_013"
    },
    "ch1_dark_013": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "可现在，这个“小可怜”刚刚在沙地上结束了三个壮汉的生命。",
      "next": "ch1_dark_014"
    },
    "ch1_dark_014": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "König随手扯过一块脏污的破布，漫不经心地擦拭着指节上的血迹。",
      "next": "ch1_dark_015"
    },
    "ch1_dark_015": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他站了起来，朝你走近了两步，极具压迫感的血腥味瞬间将你笼罩。",
      "next": "ch1_dark_016"
    },
    "ch1_dark_016": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "这时你才发现，那天倒在地上的少年竟然比你高出这么多。",
      "next": "ch1_dark_017"
    },
    "ch1_dark_017": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“皇子？有谁真的把我当过皇子吗？”",
      "next": "ch1_dark_018"
    },
    "ch1_dark_018": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他低哑地嗤笑了一声。",
      "next": "ch1_dark_019"
    },
    "ch1_dark_019": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“{{playerName}}小姐不必紧张，我来这里，不过是为了‘放松’罢了。”",
      "next": "ch1_dark_020"
    },
    "ch1_dark_020": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "{{playerName}}",
      "text": "“放松？”",
      "next": "ch1_dark_021"
    },
    "ch1_dark_021": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你难以置信地重复着这个词。",
      "next": "ch1_dark_022"
    },
    "ch1_dark_022": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“是的，放松。”",
      "next": "ch1_dark_023"
    },
    "ch1_dark_023": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他直勾勾地盯着你。",
      "next": "ch1_dark_024"
    },
    "ch1_dark_024": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“宫廷里的规矩太多，压得人喘不过气。只有在这里，听着骨头断裂，血液喷溅的声音，我才能感觉到自己还活着。毕竟……这比挨打要痛快得多，您说对吗？”",
      "next": "ch1_dark_025"
    },
    "ch1_dark_025": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你下意识地后退了半步，后背抵上了冰冷的铁门。",
      "next": "ch1_dark_026"
    },
    "ch1_dark_026": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你突然意识到，你可能从未真正了解过这头你曾施以怜悯的野兽。",
      "next": "ch1_dark_027"
    },
    "ch1_dark_027": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "König注意到了你的防备，但他并没有退开，反而更近地逼迫上来。",
      "next": "ch1_dark_028"
    },
    "ch1_dark_028": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "突然他笑出了声：",
      "next": "ch1_dark_029"
    },
    "ch1_dark_029": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“真可爱。刚刚那些都是我骗您的，{{playerName}}小姐，请原谅我的不诚实。我确实有不得已的理由在这，但还不能告诉您。”",
      "next": "ch1_dark_030"
    },
    "ch1_dark_030": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他微微低下头，语气里透着某种令人战栗的亲昵：",
      "next": "ch1_dark_031"
    },
    "ch1_dark_031": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“刚才我听管事说，您为我下注了。”",
      "nextByFlag": {
        "key": "arenaBet",
        "cases": {
          "win": "ch1_win_001",
          "lose": "ch1_lose_001"
        },
        "fallback": "ch1_win_001"
      }
    },
    "ch1_win_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他沾着血污的手指缓缓抬起，虚虚地停在你脸颊侧边一寸的地方。",
      "next": "ch1_win_002"
    },
    "ch1_win_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“一百枚金币……您竟然押了我赢。在这个世上，应该只有您，这样信任我了。为了不辜负您的那份筹码，哪怕是对抗死神，我也会赢的。”",
      "next": "ch1_after_001"
    },
    "ch1_lose_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他扯动了一下嘴角，凑近你的耳畔，滚烫地鼻息让你忍不住想要逃走。",
      "next": "ch1_lose_002"
    },
    "ch1_lose_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“居然认为我会输吗，{{playerName}}小姐？您平日里眼光那么毒辣，这次却有些小瞧我了。您都还好好活着，我怎么舍得死在您看不见的角落呢？”",
      "next": "ch1_after_001"
    },
    "ch1_after_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "侍卫",
      "text": "“王储妃殿下？您在哪里？”",
      "next": "ch1_after_002"
    },
    "ch1_after_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "是Leopold贴身侍卫的声音，听起来已经有些急躁了。",
      "next": "ch1_after_003"
    },
    "ch1_after_003": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "König自然地收回了撑在墙上的手，向后退了半步，那股令人窒息的压迫感也随之消散。",
      "next": "ch1_after_004"
    },
    "ch1_after_004": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“您该回去了，{{playerName}}小姐。”",
      "next": "ch1_after_005"
    },
    "ch1_after_005": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "他绅士地微微欠身，语气重新变得谦卑而疏离，仿佛刚才那个暴徒只是一场幻影。",
      "next": "ch1_after_006"
    },
    "ch1_after_006": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“如果我那位尊贵的兄长，发现他完美无瑕的未婚妻，正和我待在同一个牢笼里……他可是会发疯的。”",
      "next": "ch1_after_007"
    },
    "ch1_after_007": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "",
      "text": "你深深地看了他一眼，将狂跳的心绪强行压下，提起裙摆，转身向着光亮处的阶梯走去。",
      "next": "ch1_after_008"
    },
    "ch1_after_008": {
      "chapter": "第一章 · 角斗士",
      "bg": "dark.jpg",
      "speaker": "König",
      "text": "“顺便，感谢您的探望。”",
      "next": "ch1_return_001"
    },
    "ch1_return_001": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "当你在走廊拐角处重新遇到侍卫，并编造了一个迷路的借口回到包厢时，Leopold正焦急地来回踱步。",
      "next": "ch1_return_002"
    },
    "ch1_return_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "Leopold",
      "text": "“哦，感谢上帝！亲爱的，你去哪里了？我还以为你在这肮脏的地方遇到了什么危险。”",
      "next": "ch1_return_003"
    },
    "ch1_return_003": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "Leopold急忙迎上来，心有余悸地亲吻了你的鬓发。",
      "next": "ch1_return_004"
    },
    "ch1_return_004": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "你垂下眼眸，任由未婚夫将你拥入怀中。",
      "next": "chapter2_intro"
    },
    "chapter2_intro": {
      "speaker": "",
      "text": "",
      "chapterIntro": {
        "small": "第二章",
        "title": "冬耀日",
        "next": "ch2_001"
      }
    },
    "ch2_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "bgm": "chapter2-music1.mp3",
      "speaker": "",
      "text": "今年初冬的第一场雪，比往年来的都更加猛烈。",
      "next": "ch2_002"
    },
    "ch2_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "沉闷悠长的钟声响起，又是一年“冬耀日”。",
      "next": "ch2_003"
    },
    "ch2_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "冬季，是神明沉睡，恶魔苏醒的季节。为了防止灾厄降临，“被太阳神赐福过”的王室成员会率领一众贵族前往大教堂祈求神明恩典。",
      "next": "ch2_004"
    },
    "ch2_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "教堂内殿燃烧着成百上千支羔羊皮蜡烛，地龙烧得滚烫。",
      "next": "ch2_005"
    },
    "ch2_005": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "伴随着唱诗班空灵的赞美诗，这里温暖明亮地犹如人间天国。",
      "next": "ch2_006"
    },
    "ch2_006": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "你身披着华贵的纯白狐裘，姿态优雅地踏入大门。",
      "next": "ch2_007"
    },
    "ch2_007": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "你的父亲，奥古斯都大公，正站在左侧贵族的最前面，慈爱的注视着你。",
      "next": "ch2_008"
    },
    "ch2_008": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "而你的未婚夫，Leopold王储，正站在右侧贵族的最前面，伸出手似是想把你拉到身边。",
      "next": "ch2_choice1"
    },
    "ch2_choice1": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 避开他的手，站到父亲身边",
          "effects": {
            "ambition": 1
          },
          "next": "ch2_a_001"
        },
        {
          "text": "B. 搭上他的手，站在未婚夫身边",
          "effects": {
            "dependence": 1,
            "dark": 1
          },
          "next": "ch2_b_001"
        }
      ]
    },
    "ch2_a_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "你微微屈膝向王储行李，却婉拒了他伸出的手。",
      "next": "ch2_a_002"
    },
    "ch2_a_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "{{playerName}}",
      "text": "“殿下，请允许我站在父亲身边，一同为王国和奥古斯都家族祈求神明庇佑。”",
      "next": "ch2_a_003"
    },
    "ch2_a_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "Leopold微笑着收回手，允许了你的请求。",
      "next": "ch2_a_004"
    },
    "ch2_a_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "而暗处的阴影里，有一双眼睛近乎贪婪得舔舐着你独立高傲的背影。",
      "next": "ch2_common1_001"
    },
    "ch2_b_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "你轻轻将手搭入Leopold的掌心，与他一同走向更靠近圣坛中心的位置。",
      "next": "ch2_b_002"
    },
    "ch2_b_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "身后的贵族纷纷低语，赞美着你们真是一对天定的完美伴侣。",
      "next": "ch2_b_003"
    },
    "ch2_b_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "而阴影中的二皇子殿下，看着你们的背影，像一根毒刺一样扎进了他的心里。",
      "next": "ch2_common1_001"
    },
    "ch2_common1_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "大主教开始了冗长而单调的祝祷。",
      "next": "ch2_common1_002"
    },
    "ch2_common1_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "内殿过分浓郁的熏香让你感到一丝气闷。",
      "next": "ch2_common1_003"
    },
    "ch2_common1_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "你微微偏过头去，却正好对上了一双深邃的眼睛。",
      "next": "ch2_common1_004"
    },
    "ch2_common1_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "他也许一直在注视着你，你没由来的想到。",
      "next": "ch2_common1_005"
    },
    "ch2_common1_005": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "“被恶魔诅咒过”的二皇子殿下，自然是无法像其他王室成员那样沐浴在光明之下的。",
      "next": "ch2_common1_006"
    },
    "ch2_common1_006": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "他只能站在侧门石柱边的阴影里。",
      "next": "ch2_common1_007"
    },
    "ch2_common1_007": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "这已经是王室和教会“开恩”后的结果了。",
      "next": "ch2_common1_008"
    },
    "ch2_common1_008": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "就在这时，一缕凛冬阳光，刚好穿透了穹顶的彩色玻璃，不偏不倚地落在了你胸前那枚切割完美的钻石胸针上。",
      "next": "ch2_common1_009"
    },
    "ch2_common1_009": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "光束在切面上折射出去，毫无预兆地投射进了那片死寂的阴影里。",
      "next": "ch2_common1_010"
    },
    "ch2_common1_010": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "光斑刚好打在König的脸上。",
      "next": "ch2_common1_011"
    },
    "ch2_common1_011": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "那点刺目的光，将他垂在额前的那缕红发，映照得如同在冰天雪地中静静燃烧的火焰。",
      "next": "ch2_common1_012"
    },
    "ch2_common1_012": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "你似是被火焰灼烧了双眼，猝然收回了视线。",
      "next": "ch2_common1_013"
    },
    "ch2_common1_013": {
      "chapter": "第二章 · 冬耀日",
      "bg": "church.jpg",
      "speaker": "",
      "text": "刚刚那一瞬间，你看清了他眼里不再隐藏的情绪——对权力的渴望，对王室的恨意，以及对你的……掠夺欲。",
      "next": "ch2_ball_001"
    },
    "ch2_ball_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "bgm": "chapter2-music2.mp3",
      "speaker": "",
      "text": "典礼结束的夜晚，是舞会的开始，王宫辉煌的水晶吊灯闪耀着，明亮如白昼。",
      "next": "ch2_ball_002"
    },
    "ch2_ball_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "衣香鬓影，筹光交错。作为今夜最耀眼的明珠，你穿着一袭点缀着碎钻的深蓝色丝绒长裙，站在宴会厅的高阶上，接受着贵族们虚伪而华丽的赞美。",
      "next": "ch2_ball_003"
    },
    "ch2_ball_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "而König，因为这种大型国宴必须彰显王室的“完整与仁慈”，此刻沉默地来到了宴会厅，却仍旧被排斥于权力中心之外。",
      "next": "ch2_ball_004"
    },
    "ch2_ball_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "按照帝国的传统，晚宴的开场舞，必须由王储与王储妃共同领舞。",
      "next": "ch2_ball_005"
    },
    "ch2_ball_005": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "Leopold",
      "text": "“亲爱的，到了我们惊艳全场的时候了。”",
      "next": "ch2_ball_006"
    },
    "ch2_ball_006": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "Leopold微笑着向你伸出手。",
      "next": "ch2_ball_007"
    },
    "ch2_ball_007": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你将手搭在他的臂弯，随着他一同走到舞池的最中央。",
      "next": "ch2_ball_008"
    },
    "ch2_ball_008": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "宫廷乐师们已经举起了琴弓。然而，就在乐曲即将奏响的前一秒，一名内廷侍卫神色慌张地穿过人群，附在Leopold耳边低声说了句什么。",
      "next": "ch2_ball_009"
    },
    "ch2_ball_009": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你敏锐地捕捉到了几个词：“北方……边境……陛下急召”。",
      "next": "ch2_ball_010"
    },
    "ch2_ball_010": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "Leopold的脸色瞬间变得很难看。在王权与未婚妻之间，他显然只能选择前者。",
      "next": "ch2_ball_011"
    },
    "ch2_ball_011": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "Leopold",
      "text": "“万分抱歉，我的挚爱。”",
      "next": "ch2_ball_012"
    },
    "ch2_ball_012": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他压低声音，语气急促。",
      "next": "ch2_ball_013"
    },
    "ch2_ball_013": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "Leopold",
      "text": "“父王急召，我必须立刻去一趟议事厅。”",
      "next": "ch2_ball_014"
    },
    "ch2_ball_014": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你维持着体面的微笑。",
      "next": "ch2_ball_015"
    },
    "ch2_ball_015": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他甚至来不及叫停乐队，便匆匆转身离去。",
      "next": "ch2_ball_016"
    },
    "ch2_ball_016": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "与此同时，宫廷乐长那根代表开场的指挥棒已经落下，悠扬而华丽的音乐在大厅内回荡开来。",
      "next": "ch2_ball_017"
    },
    "ch2_ball_017": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你被独自留在了舞池中央。",
      "next": "ch2_ball_018"
    },
    "ch2_ball_018": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "四周响起了压抑的窃窃私语声。",
      "next": "ch2_ball_019"
    },
    "ch2_ball_019": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "在讲究体面的帝国宫廷，把奥古斯都大公的女儿、未来的王储妃独自一人晾在宴会厅，是很严重的失礼，更是对你家族莫大的羞辱。",
      "next": "ch2_ball_020"
    },
    "ch2_ball_020": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "就在那些看好戏的目光如同针尖般朝你刺来时，一阵沉稳的军靴声，不疾不徐地踏入了舞池。",
      "next": "ch2_ball_021"
    },
    "ch2_ball_021": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "人群下意识地为来人让开了一条路。",
      "next": "ch2_ball_022"
    },
    "ch2_ball_022": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "是König。",
      "next": "ch2_ball_023"
    },
    "ch2_ball_023": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他穿着没有任何纹章的纯黑军礼服，走到了你面前。在全场贵族惊愕到几乎呆滞的目光中，标准地向你行了一个单膝礼。",
      "next": "ch2_ball_024"
    },
    "ch2_ball_024": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“按照帝国的礼法，奥古斯都家族的明珠，绝不能独自完成开场舞。”",
      "next": "ch2_ball_025"
    },
    "ch2_ball_025": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他缓缓抬起头，那双深邃的眼眸在灯光下闪烁着危险而迷人的暗芒，沙哑地开口：",
      "next": "ch2_ball_026"
    },
    "ch2_ball_026": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“既然王储殿下缺席，那么作为在此刻唯一流淌着王室血液的人……不知我是否有这个荣幸，替我的兄长履行这项职责，邀您共舞一曲？”",
      "next": "ch2_ball_027"
    },
    "ch2_ball_027": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他伸出了那只戴着黑色皮手套的宽大手掌。",
      "next": "ch2_ball_028"
    },
    "ch2_ball_028": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "所有人的目光都聚焦在你的身上，你必须做出你的选择。",
      "next": "ch2_choice2"
    },
    "ch2_choice2": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 接受他的邀请，掌控全局",
          "effects": {
            "ambition": 1,
            "redemption": 1
          },
          "next": "ch2_dance_a_001"
        },
        {
          "text": "B. 退后半步体面地拒绝他",
          "effects": {
            "dark": 1
          },
          "next": "ch2_dance_b_001"
        },
        {
          "text": "C. 不知所措，顺势答应他",
          "effects": {
            "dependence": 1,
            "redemption": 1
          },
          "next": "ch2_dance_c_001"
        }
      ]
    },
    "ch2_dance_a_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你高高在上地审视了他两秒，随后露出一个完美无瑕的微笑。",
      "next": "ch2_dance_a_002"
    },
    "ch2_dance_a_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“既然二殿下如此顾全王室与奥古斯都家族的体面，我自然没有拒绝的道理。”",
      "next": "ch2_dance_a_003"
    },
    "ch2_dance_a_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你将戴着丝绒长手套的手，矜持地搭入他的掌心。",
      "next": "ch2_dance_a_004"
    },
    "ch2_dance_a_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "König低声笑了笑，揽住你的腰，将你带入舞池中央。",
      "next": "ch2_dance_a_005"
    },
    "ch2_dance_a_005": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“边境的急报，来得真是时候，不是吗？”",
      "next": "ch2_dance_a_006"
    },
    "ch2_dance_a_006": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你在旋转的间隙，用只有你们两人能听见的声音说到。",
      "next": "ch2_dance_a_007"
    },
    "ch2_dance_a_007": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "König步伐丝毫不乱，还收紧了手臂，让你的身体更加贴近他。",
      "next": "ch2_dance_a_008"
    },
    "ch2_dance_a_008": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“是啊，这才让我有机会与您共舞一曲。我甚至有些感谢这个变故。”",
      "next": "ch2_dance_a_009"
    },
    "ch2_dance_a_009": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "一曲舞毕，他牵起你的手，在你的手背上轻轻落下一吻。",
      "next": "ch2_final"
    },
    "ch2_dance_b_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你看着他停留在半空的手，只是用羽毛扇轻轻放在左脸颊，微微退后了半步，拉开了一个礼貌却不可僭越的距离。",
      "next": "ch2_dance_b_002"
    },
    "ch2_dance_b_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“二殿下的好意，我心领了。”",
      "next": "ch2_dance_b_003"
    },
    "ch2_dance_b_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你的声音足够让周围的贵族都听得一清二楚。",
      "next": "ch2_dance_b_004"
    },
    "ch2_dance_b_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“但既然王储殿下因国事繁忙无法履约，这支只属于储君与储妃的开场舞，自然也该一并取消。”",
      "next": "ch2_dance_b_005"
    },
    "ch2_dance_b_005": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "说罢，你转身看向了站在不远处的奥古斯都大公，露出了今晚第一个真心的微笑。",
      "next": "ch2_dance_b_006"
    },
    "ch2_dance_b_006": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“父亲，不如由您来引领大家开启今夜的舞会吧？”",
      "next": "ch2_dance_b_007"
    },
    "ch2_dance_b_007": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "大公欣慰地大笑起来，走上前牵起了你的手。",
      "next": "ch2_dance_b_008"
    },
    "ch2_dance_b_008": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "随着公爵的入场，四周的贵族们纷纷寻找舞伴滑入舞池。",
      "next": "ch2_dance_b_009"
    },
    "ch2_dance_b_009": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "König慢慢地收回了那只空落落的手，站起身，却没有离开你的身边。",
      "next": "ch2_dance_b_010"
    },
    "ch2_dance_b_010": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“{{playerName}}小姐，您对我的兄长这般衷情，却对我如此绝情。”",
      "next": "ch2_dance_b_011"
    },
    "ch2_dance_b_011": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“您怎么就不能，再可怜可怜我呢？可怜我一颗心全部被您偷走。”",
      "next": "ch2_dance_b_012"
    },
    "ch2_dance_b_012": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“你别说了！”",
      "next": "ch2_dance_b_013"
    },
    "ch2_dance_b_013": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你低声喝止了他继续说下去。",
      "next": "ch2_dance_b_014"
    },
    "ch2_dance_b_014": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他笑笑，弯腰向你行了个绅士礼。",
      "next": "ch2_final"
    },
    "ch2_dance_c_001": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "Leopold为了权力可以随时将你丢下，而其他人都在等着看你的笑话。",
      "next": "ch2_dance_c_002"
    },
    "ch2_dance_c_002": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "你没有说话，只是顺从地将手搭在了他的掌心里。",
      "next": "ch2_dance_c_003"
    },
    "ch2_dance_c_003": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "König的大掌轻柔地包裹住你的手，仿佛拢住了一件易碎的无价之宝。",
      "next": "ch2_dance_c_004"
    },
    "ch2_dance_c_004": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他用一种可以说是虔诚的姿态，将你带入舞池。",
      "next": "ch2_dance_c_005"
    },
    "ch2_dance_c_005": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "他的胸膛宽阔而坚硬，将那些充满恶意的视线彻底替你挡在了外面。",
      "next": "ch2_dance_c_006"
    },
    "ch2_dance_c_006": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "{{playerName}}",
      "text": "“谢谢你来解围，König。”",
      "next": "ch2_dance_c_007"
    },
    "ch2_dance_c_007": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "似乎是很久没人这样叫他了，他怔愣了两秒才回话。",
      "next": "ch2_dance_c_008"
    },
    "ch2_dance_c_008": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“别怕。只要有我在，我绝不会让您陷入难堪。”",
      "next": "ch2_dance_c_009"
    },
    "ch2_dance_c_009": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "",
      "text": "随着你和他完美的一支舞结束，他再次单膝下跪，低头亲吻你的手背，献上他的忠诚。",
      "next": "ch2_final"
    },
    "ch2_final": {
      "chapter": "第二章 · 冬耀日",
      "bg": "ballroom.jpg",
      "speaker": "König",
      "text": "“{{playerName}}小姐，希望您度过一个愉快的夜晚。”",
      "next": "chapter3_intro"
    },
    "current_version_end": {
      "speaker": "",
      "text": "",
      "chapter": "第五章 · 抉择",
      "chapterIntro": {
        "small": "第五章",
        "title": "抉择",
        "next": "ch5_war_001"
      }
    },
    "opening_001": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "bgm": "forest.mp3",
      "speaker": "",
      "text": "作为奥古斯都大公唯一的嫡女，从你出生的那一刻起，你的人生轨迹就已经和家族命运紧紧捆绑在一起。",
      "next": "opening_002"
    },
    "opening_002": {
      "chapter": "序章 · 困兽",
      "bg": "forest-autumn.jpg",
      "speaker": "",
      "text": "{{playerName}}小姐，你是王都最耀眼的明珠，是注定要戴上后冠的女人。你的每一个选择都牵动着你的命运。",
      "next": "prologue_001"
    },
    "chapter3_intro": {
      "speaker": "",
      "text": "",
      "chapterIntro": {
        "small": "第三章",
        "title": "吻痕",
        "next": "ch3_001"
      }
    },
    "ch3_001": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "bgm": "chapter3.mp3",
      "speaker": "",
      "text": "晚宴结束后，由于北方边境的急报，国王连夜将奥古斯都大公也召入议事厅密谈。",
      "next": "ch3_002"
    },
    "ch3_002": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "作为大公的掌上明珠与未来的储妃，你被顺理成章地安置在王宫中最奢华的客房内留宿。",
      "next": "ch3_003"
    },
    "ch3_003": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "沉重的夜色伴随着风雪彻底笼罩了王城。",
      "next": "ch3_004"
    },
    "ch3_004": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "客房内，壁炉里的银炭烧得正旺，散发着安神的暖意。",
      "next": "ch3_005"
    },
    "ch3_005": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "晚宴上的步步为营与虚与委蛇，耗尽了你太多的精力。",
      "next": "ch3_006"
    },
    "ch3_006": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "当侍女为你褪去繁复的长裙，换上柔软的丝绸睡袍后，你没多久就陷入了沉沉的睡梦。",
      "next": "ch3_007"
    },
    "ch3_007": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "不知过了多久。",
      "next": "ch3_008"
    },
    "ch3_008": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "在迷迷糊糊的半梦半醒之间，你感觉到了一丝异样。",
      "next": "ch3_009"
    },
    "ch3_009": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "身侧柔软宽大的床榻，似乎轻微地凹陷了下去。",
      "next": "ch3_010"
    },
    "ch3_010": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "原本充斥着安神香的床幔里，不知何时侵入了一股极具侵略性的男性香水味。",
      "next": "ch3_011"
    },
    "ch3_011": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你实在太困了，眼皮沉重得像灌了铅。",
      "next": "ch3_012"
    },
    "ch3_012": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "但紧接着，一只宽大、带着粗糙老茧的手掌，悄无声息地抚上了你的脸颊，又轻柔地拨开散落在你脸上的碎发。",
      "next": "ch3_013"
    },
    "ch3_013": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "那手掌滚烫得吓人，带着某种极度压抑的贪婪，非常缓慢、近乎痴迷地下移，摩挲着你柔嫩的侧颈。",
      "next": "ch3_014"
    },
    "ch3_014": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "随后，一个压抑着浓重情潮的吻，落在了你的颈动脉上。",
      "next": "ch3_015"
    },
    "ch3_015": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "男人的呼吸粗重而急促，高挺的鼻骨轻轻蹭过你的下颌，滚烫的唇瓣沿着你的颈线缓缓上移，危险地停留在你的唇边，仿佛下一秒就要将你彻底吞噬。",
      "next": "ch3_016"
    },
    "ch3_016": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "熟悉的压迫感，让你惊觉——是König。",
      "next": "ch3_017"
    },
    "ch3_017": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他竟然胆大包天到夜闯你歇息的客房，爬上了未来王储妃的床榻。",
      "next": "ch3_018"
    },
    "ch3_018": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "意识在这一刻逐渐回笼，但你的身体依然维持着熟睡的姿态。",
      "next": "ch3_choice1"
    },
    "ch3_choice1": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 强撑着困意，睁开眼睛",
          "effects": {
            "ambition": 1
          },
          "setFlags": {
            "chapter3FirstChoice": "awake"
          },
          "next": "ch3_awake_001"
        },
        {
          "text": "B. 维持着假寐，不睁开眼睛",
          "effects": {
            "dark": 1,
            "dependence": 1
          },
          "setFlags": {
            "chapter3FirstChoice": "pretend"
          },
          "next": "ch3_pretend_001"
        }
      ]
    },
    "ch3_awake_001": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你强压下身体的绵软，在黑暗中睁开了双眼。",
      "next": "ch3_awake_002"
    },
    "ch3_awake_002": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "刚睁眼的几秒，你的眼睛还无法视物，身体更是瘫软无力。",
      "next": "ch3_awake_003"
    },
    "ch3_awake_003": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他轻笑一声，直直地吻了下来。",
      "next": "ch3_awake_004"
    },
    "ch3_awake_004": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你躲避不及，只能任由他强势地覆压下来。",
      "next": "ch3_awake_005"
    },
    "ch3_awake_005": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "这个吻毫无王室的绅士风度可言，充满了野兽般的凶狠与掠夺。",
      "next": "ch3_awake_006"
    },
    "ch3_awake_006": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他很轻易地用单手将你试图推拒的手腕死死钳制在枕侧，另一只宽大的手掌则托住你的后脑。他滚烫的唇舌霸道地撬开你的齿关，长驱直入，贪婪地汲取着你肺里稀薄的空气，仿佛要将你整个人吞吃入腹。",
      "next": "ch3_awake_007"
    },
    "ch3_awake_007": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "在绝对的力量悬殊下，你无法反制，但你骨子里的骄傲却绝不允许自己像个柔弱的猎物般被动承受。",
      "next": "ch3_awake_008"
    },
    "ch3_awake_008": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你狠下心，用力咬破了他的下唇。",
      "next": "ch3_awake_009"
    },
    "ch3_awake_009": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "浓重的铁锈味瞬间在你们的唇舌间蔓延开来。",
      "next": "ch3_awake_010"
    },
    "ch3_awake_010": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "吃痛之下，König终于停下了这个令人窒息的深吻，但他并没有拉开距离，反而更贴近了你柔软的身躯。",
      "next": "ch3_awake_011"
    },
    "ch3_awake_011": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "{{playerName}}",
      "text": "“你疯了吗！”",
      "next": "ch3_awake_012"
    },
    "ch3_awake_012": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你重获自由的手毫不留情地甩了他一巴掌，却因为力气不够而更像是情趣。",
      "next": "ch3_awake_013"
    },
    "ch3_awake_013": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "König不仅没有动怒，反而顺势抓住了你那只手的手腕，轻轻啄吻。",
      "next": "ch3_awake_014"
    },
    "ch3_awake_014": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“疯了？也许吧。”",
      "next": "ch3_awake_015"
    },
    "ch3_awake_015": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“现在，生杀大权在您手里了，{{playerName}}小姐。”",
      "next": "ch3_awake_016"
    },
    "ch3_awake_016": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他几乎贴着你的唇缝，语气里透着病态的痴迷。",
      "next": "ch3_awake_017"
    },
    "ch3_awake_017": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“门外不过二十步，就是大公的亲卫。您只需要叫一声，他们就会冲进来，也许明天，我就会被送上绞刑架。”",
      "next": "ch3_awake_018"
    },
    "ch3_awake_018": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他的手掌顺着你腰间丝滑的布料缓缓上移，带着让人战栗的温度。",
      "next": "ch3_awake_019"
    },
    "ch3_awake_019": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“但如果……如果您愿意，让我继续。”",
      "next": "ch3_awake_020"
    },
    "ch3_awake_020": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他停顿了一下，眼底闪过一丝危险的算计。",
      "next": "ch3_awake_021"
    },
    "ch3_awake_021": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“我会向您证明，我能给您的，远比我那个废物哥哥多得多。”",
      "next": "ch3_awake_022"
    },
    "ch3_awake_022": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你冷笑了一声，呼吸交错间毫不退让。",
      "next": "ch3_awake_023"
    },
    "ch3_awake_023": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "{{playerName}}",
      "text": "“就凭你？二殿下，需要我提醒你，你在王城是什么情况吗。”",
      "next": "ch3_awake_024"
    },
    "ch3_awake_024": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“多谢您的好意，但是不需要了。”",
      "next": "ch3_awake_025"
    },
    "ch3_awake_025": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他低下头，极具暗示性地吻了吻你的耳垂，声音轻得仿佛毒蛇吐信。",
      "next": "ch3_awake_026"
    },
    "ch3_awake_026": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“我既然敢说这种话，自然是有我自己的筹码。奥古斯都家族想要的王后的冠冕，我也能给您。”",
      "next": "ch3_choice2"
    },
    "ch3_choice2": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 顺水推舟，看看他葫芦里卖的什么药",
          "effects": {
            "ambition": 1,
            "redemption": 1
          },
          "setFlags": {
            "chapter3SecondChoice": "cooperate"
          },
          "next": "ch3_awake_a_001"
        },
        {
          "text": "B. 严词拒绝，不愿和他过多纠缠",
          "effects": {
            "dark": 1
          },
          "setFlags": {
            "chapter3SecondChoice": "reject"
          },
          "next": "ch3_awake_b_001"
        }
      ]
    },
    "ch3_awake_a_001": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你反手抓住了他胸前的衣襟，猛地往下一拽。",
      "next": "ch3_awake_a_002"
    },
    "ch3_awake_a_002": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "{{playerName}}",
      "text": "“大话谁都会说，König。想做我手里的刀，就得先证明你够不够锋利。如果你的能耐，只是半夜爬上女人的床榻……”",
      "next": "ch3_awake_a_003"
    },
    "ch3_awake_a_003": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你没有说下去，但轻蔑的意味不言而喻。",
      "next": "ch3_awake_a_004"
    },
    "ch3_awake_a_004": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "被你这样轻视，他却爆发出了一种极度兴奋的战栗。",
      "next": "ch3_awake_a_005"
    },
    "ch3_awake_a_005": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“您会看到的，我的能耐，您会看到的。”",
      "next": "ch3_awake_a_006"
    },
    "ch3_awake_a_006": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他反握住你的手，随后，他虔诚地低下头，试探着地含吻你的唇。",
      "next": "ch3_awake_a_007"
    },
    "ch3_awake_a_007": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "滚烫的指腹探入你的睡袍边缘，轻柔地揉捏你的大腿，像信徒侍奉神明般取悦着你。",
      "next": "ch3_awake_a_008"
    },
    "ch3_awake_a_008": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“今夜只是个定金，我的挚爱，我的宝贝……”",
      "next": "ch3_awake_a_009"
    },
    "ch3_awake_a_009": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他在你耳畔剧烈地喘息着。",
      "next": "ch3_awake_a_010"
    },
    "ch3_awake_a_010": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“等到加冕典礼那一天，我会让您看到我对您的忠诚。”",
      "next": "ch3_morning_001"
    },
    "ch3_awake_b_001": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你像触电般地甩开他的手。",
      "next": "ch3_awake_b_002"
    },
    "ch3_awake_b_002": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "{{playerName}}",
      "text": "“就凭你那点见不得光的小动作，也配来跟我谈条件？”",
      "next": "ch3_awake_b_003"
    },
    "ch3_awake_b_003": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你冷冷地抬起下巴。",
      "next": "ch3_awake_b_004"
    },
    "ch3_awake_b_004": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "{{playerName}}",
      "text": "“我最后说一次，从我的床榻上滚下去。如果三秒钟后你还在这个房间里，我会立刻叫亲卫进来，把你的头颅挂在城墙上。”",
      "next": "ch3_awake_b_005"
    },
    "ch3_awake_b_005": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "室内的温度仿佛瞬间降至冰点。",
      "next": "ch3_awake_b_006"
    },
    "ch3_awake_b_006": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "König死死地盯着你，手背上的青筋因为极度的忍耐而根根暴起。",
      "next": "ch3_awake_b_007"
    },
    "ch3_awake_b_007": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他泄愤一般在你的颈侧咬下去，反复吮吸出一个红色的印记。",
      "next": "ch3_awake_b_008"
    },
    "ch3_awake_b_008": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“您总是这么高高在上，残忍得令人着迷。”",
      "next": "ch3_awake_b_009"
    },
    "ch3_awake_b_009": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他缓缓站起身，退后了两步，声音里透着令人毛骨悚然的平静。",
      "next": "ch3_awake_b_010"
    },
    "ch3_awake_b_010": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“您可以拒绝我今夜的诚意。但很快，当您周围的一切倚靠都消失的时候，您会发现……”",
      "next": "ch3_awake_b_011"
    },
    "ch3_awake_b_011": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他深深地看了你最后一眼，转身隐入黑暗。",
      "next": "ch3_awake_b_012"
    },
    "ch3_awake_b_012": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“您只能属于我。”",
      "next": "ch3_awake_b_013"
    },
    "ch3_awake_b_013": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“除了我，您别无选择。”",
      "next": "ch3_morning_001"
    },
    "ch3_pretend_001": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你强压下如擂鼓般的心跳，放缓了呼吸，闭着双眼，任由自己继续沉浸在半梦半醒的假象中。",
      "next": "ch3_pretend_002"
    },
    "ch3_pretend_002": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "察觉到你依然毫无防备地“熟睡”着，这头一直死死压抑本性的野兽，终于在黑暗中露出了一丝病态的真面目。",
      "next": "ch3_pretend_003"
    },
    "ch3_pretend_003": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "那指腹带着令人战栗的滚烫温度，极具占有欲地抚上你的脸颊，一寸寸滑过你的眉骨、鼻梁，最终停留在你的下唇。",
      "next": "ch3_pretend_004"
    },
    "ch3_pretend_004": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他放肆地揉捏着那片柔软，甚至微微撬开你的齿关，探入半寸指尖，去感受你温热的呼吸。",
      "next": "ch3_pretend_005"
    },
    "ch3_pretend_005": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "这种充满亵渎意味的触碰，让你掩藏在被子下的双手不可抑制地攥紧了床单，但你依然死死维持着平稳的呼吸。",
      "next": "ch3_pretend_006"
    },
    "ch3_pretend_006": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“您真美……”",
      "next": "ch3_pretend_007"
    },
    "ch3_pretend_007": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他贴在你的耳畔，像是不可抑制般地发出谓叹。",
      "next": "ch3_pretend_008"
    },
    "ch3_pretend_008": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "男人的呼吸越来越粗重。他灼热的唇顺着你的下颌线一路向下，贪婪地嗅闻着你颈间散发的香气。",
      "next": "ch3_pretend_009"
    },
    "ch3_pretend_009": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "在你脆弱的颈侧，他忽然张开嘴，用尖锐的犬齿不轻不重地咬了下去。",
      "next": "ch3_pretend_010"
    },
    "ch3_pretend_010": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "这种尖锐的刺痛感伴随着酥麻瞬间传遍全身。你险些控制不住地倒抽一口凉气，身体本能地微微瑟缩了一下。",
      "next": "ch3_pretend_011"
    },
    "ch3_pretend_011": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "但你死死咬住了舌尖，硬生生将那声痛呼咽了回去，继续扮演着一个“睡美人”。",
      "next": "ch3_pretend_012"
    },
    "ch3_pretend_012": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他当然察觉到了你那细微的战栗，但他不仅没有停下，反而变本加厉地吮吸着那一小块皮肉，直到留下一个红色的印记。",
      "next": "ch3_pretend_013"
    },
    "ch3_pretend_013": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "König",
      "text": "“睡吧，我的爱人，做个美梦。”",
      "next": "ch3_morning_001"
    },
    "ch3_morning_001": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "第二天清晨，肆虐了整整一夜的大雪终于停歇。",
      "next": "ch3_morning_002"
    },
    "ch3_morning_002": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "惨白的冬日阳光透过巨大的落地窗，洒在奢华的羊毛地毯上。",
      "next": "ch3_morning_003"
    },
    "ch3_morning_003": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "当你的贴身侍女端着热水和换洗衣物推门而入时，你已经靠在天鹅绒的床头，神色晦暗地看着窗外。",
      "next": "ch3_morning_004"
    },
    "ch3_morning_004": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "侍女",
      "text": "“小姐，您昨夜睡得好吗？”",
      "next": "ch3_morning_005"
    },
    "ch3_morning_005": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "侍女一边轻声询问，一边伺候你起身梳洗。",
      "next": "ch3_morning_006"
    },
    "ch3_morning_006": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "然而，就在她为你褪去那件真丝睡袍，准备换上今日的宫廷常服时，她的动作突然顿住了。",
      "next": "ch3_morning_007"
    },
    "ch3_morning_007": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "明亮的梳妆镜里，在你白皙娇嫩的颈侧，赫然印着一个深红色的、甚至带着些许齿痕的刺目印记。",
      "next": "ch3_morning_008"
    },
    "ch3_morning_008": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "在周围洁白肌肤的衬托下，那痕迹显得极其狂野且充满暧昧意味——那是一个彻头彻尾属于男人的、带着浓烈占有欲的标记。",
      "next": "ch3_morning_009"
    },
    "ch3_morning_009": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "侍女的脸颊瞬间泛起了一阵红晕。她以为自己撞破了主人们隐秘的浪漫，声音压得极低，带着几分好奇试探道。",
      "next": "ch3_morning_010"
    },
    "ch3_morning_010": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "侍女",
      "text": "“小姐，您的脖子上……昨夜，是王储殿下来过吗？”",
      "next": "ch3_morning_011"
    },
    "ch3_morning_011": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你看着镜子里那个无法忽视的印记，指尖无意识地蜷缩了一下。",
      "next": "ch3_morning_012"
    },
    "ch3_morning_012": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "他留下的痕迹，像是在公然挑衅着这座王宫的规矩，更像是一条无形的荆棘，死死缠绕住了你的脖颈。",
      "next": "ch3_morning_013"
    },
    "ch3_morning_013": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "{{playerName}}",
      "text": "“这不是你该问的。如果你还想要你的舌头，就管好你的眼睛和嘴巴。去，给我拿那件高领的黑色丝绒长裙来。”",
      "next": "ch3_morning_014"
    },
    "ch3_morning_014": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "侍女吓得浑身一颤，立刻跪伏在地上，脸色煞白地连声谢罪。",
      "next": "ch3_morning_015"
    },
    "ch3_morning_015": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "你摆摆手，让她赶紧拿裙子来。",
      "next": "ch3_morning_016"
    },
    "ch3_morning_016": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "看着镜子中的自己，你抬起手，指尖轻轻抚过颈侧那个还在隐隐作痛的齿痕。",
      "next": "ch3_morning_017"
    },
    "ch3_morning_017": {
      "chapter": "第三章 · 吻痕",
      "bg": "chapter3.jpg",
      "speaker": "",
      "text": "随着太阳的升起，议事厅那扇沉重的橡木门即将打开。你知道，父亲和未婚夫很快就会带着关于北方边境的最终决议走出来。",
      "next": "chapter4_intro"
    },
    "chapter4_intro": {
      "speaker": "",
      "text": "",
      "chapterIntro": {
        "small": "第四章",
        "title": "斯卡兰",
        "next": "ch4_snow_001"
      }
    },
    "ch4_snow_001": {
      "speaker": "",
      "text": "北境的漫天风雪中，掩藏着一场蓄谋已久的杀戮。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "bgm": "chapter4-music1.mp3",
      "next": "ch4_snow_002"
    },
    "ch4_snow_002": {
      "speaker": "",
      "text": "这次边境的动乱，并非寻常游散部落的劫掠，而是由斯卡兰正式挑起的战火。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_003"
    },
    "ch4_snow_003": {
      "speaker": "",
      "text": "斯卡兰，那个以狼为图腾的国家，正是König生母的故乡。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_004"
    },
    "ch4_snow_004": {
      "speaker": "",
      "text": "当年斯卡兰战败，前任斯卡兰国王将自己最不重视的大女儿作为求和的礼物，送入了这座吃人的王城。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_005"
    },
    "ch4_snow_005": {
      "speaker": "",
      "text": "然而就在上个月，斯卡兰的政局经历了一场血洗。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_006"
    },
    "ch4_snow_006": {
      "speaker": "",
      "text": "前任国王在睡梦中被刺杀，拥有继承权的王室血脉几乎被屠戮殆尽，唯有一位曾经对König母亲施以微薄善意的公主活了下来。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_007"
    },
    "ch4_snow_007": {
      "speaker": "",
      "text": "取而代之的，是一位踩着尸山血海踏上王座的新王。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_008"
    },
    "ch4_snow_008": {
      "speaker": "",
      "text": "传闻中，这位新王总是戴着黑色面罩，无人知晓他的真实面容。任何胆敢质疑他的异心贵族，皆被毫不留情地斩草除根。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_009"
    },
    "ch4_snow_009": {
      "speaker": "",
      "text": "至此，斯卡兰再无人敢对这位铁血暴君吐露半个不字。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_010"
    },
    "ch4_snow_010": {
      "speaker": "",
      "text": "而这位新王登基后的第一道王令，便是挥军南下，直指帝国的北部边境。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_011"
    },
    "ch4_snow_011": {
      "speaker": "",
      "text": "议事厅内，那群傲慢的帝国重臣并未将这个刚刚经历内乱的附属国放在眼里。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_012"
    },
    "ch4_snow_012": {
      "speaker": "",
      "text": "经过商议，这次“北伐”顺理成章地交由Leopold王储作为主帅，以此来为他即将到来的加冕礼铺垫赫赫战功。而你，则代表着奥古斯都家族随军出征。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_013"
    },
    "ch4_snow_013": {
      "speaker": "",
      "text": "令你感到些许意外的是，König这次也会一同前往。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_014"
    },
    "ch4_snow_014": {
      "speaker": "",
      "text": "据说是Leopold亲自向国王进言的结果。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_015"
    },
    "ch4_snow_015": {
      "speaker": "",
      "text": "坐在颠簸的奢华马车里，你看着窗外逐渐肆虐的风雪，微不可闻地叹了口气。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_016"
    },
    "ch4_snow_016": {
      "speaker": "",
      "text": "Leopold满脑子只想着把那个拥有异族血统的弟弟带上战场当炮灰、做陪衬。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_snow_017"
    },
    "ch4_snow_017": {
      "speaker": "",
      "text": "但他绝不会想到，他这个决定有多么愚蠢。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-snow.jpg",
      "next": "ch4_tent_001"
    },
    "ch4_tent_001": {
      "speaker": "",
      "text": "最初的几天，战局出乎意料地顺利。Leopold率领的主力军轻易地击溃了几股斯卡兰的先锋军。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_002"
    },
    "ch4_tent_002": {
      "speaker": "",
      "text": "这接连的“捷报”让你的未婚夫春风得意，他甚至傲慢地宣称，根本用不了几天，他就能光鲜亮丽地班师回朝。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_003"
    },
    "ch4_tent_003": {
      "speaker": "",
      "text": "入夜，风雪大作。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_004"
    },
    "ch4_tent_004": {
      "speaker": "",
      "text": "你屏退了侍女，独自靠在主帐内铺着厚厚雪狐皮的贵妃榻上。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_005"
    },
    "ch4_tent_005": {
      "speaker": "",
      "text": "不出你所料的，门口响起敲门声。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_006"
    },
    "ch4_tent_006": {
      "speaker": "{{playerName}}",
      "text": "“进来。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_007"
    },
    "ch4_tent_007": {
      "speaker": "",
      "text": "是König，你早知道他要来。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_008"
    },
    "ch4_tent_008": {
      "speaker": "",
      "text": "今天早些时候，你和Leopold还有他一起吃晚餐。你吃完离开时，他偷偷勾住你的手，在你的掌心轻轻划了两下。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_009"
    },
    "ch4_tent_009": {
      "speaker": "",
      "text": "他在你身前半跪下，温驯地附身将头搁在你的大腿上。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_010"
    },
    "ch4_tent_010": {
      "speaker": "",
      "text": "他已褪去冰冷的战甲，但是他身上的血腥气并没有减少。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_011"
    },
    "ch4_tent_011": {
      "speaker": "",
      "text": "你微微蹙眉。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_012"
    },
    "ch4_tent_012": {
      "speaker": "",
      "text": "他却不知不觉似的，粗糙的大手顺着你的腰线，环住你，贪婪且痴迷地嗅闻着你真丝睡裙上散发的冷香。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_013"
    },
    "ch4_tent_013": {
      "speaker": "",
      "text": "你的手指漫不经心地穿插在他有些凌乱的红发间。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_014"
    },
    "ch4_tent_014": {
      "speaker": "{{playerName}}",
      "text": "“二皇子殿下，又夜访兄长未婚妻闺房，是有什么事吗？”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_015"
    },
    "ch4_tent_015": {
      "speaker": "König",
      "text": "“只是想见到您，这个理由够吗？”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_016"
    },
    "ch4_tent_016": {
      "speaker": "",
      "text": "就在这时，帐外突然传来脚步声，紧接着，是Leopold轻快、带着几分醉意的敲门声：",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_017"
    },
    "ch4_tent_017": {
      "speaker": "Leopold",
      "text": "“亲爱的，睡了吗？今天的战报太让人振奋了，我想和你一同庆祝，顺便聊聊我们回王城后的加冕礼。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_018"
    },
    "ch4_tent_018": {
      "speaker": "König",
      "text": "“您要让他进来吗？我是不是不该出现在这。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_tent_019"
    },
    "ch4_tent_019": {
      "speaker": "",
      "text": "König这样说着，却没有半分要走的动作。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_choice"
    },
    "ch4_choice": {
      "speaker": "",
      "text": "【请做出你的选择】",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "choices": [
        {
          "text": "A. 让他进来",
          "effects": {
            "ambition": 1,
            "dark": 1
          },
          "setFlags": {
            "chapter4TentChoice": "let_in"
          },
          "next": "ch4_a_001"
        },
        {
          "text": "B. 拒之门外",
          "effects": {
            "dependence": 1,
            "redemption": 1
          },
          "setFlags": {
            "chapter4TentChoice": "refuse"
          },
          "next": "ch4_b_001"
        }
      ]
    },
    "ch4_a_001": {
      "speaker": "",
      "text": "你眼底闪过一丝冷芒，一把揪住König的衣领，示意他躲进旁边那张铺着及地的重磅天鹅绒桌布的宽大书桌下。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_002"
    },
    "ch4_a_002": {
      "speaker": "",
      "text": "他顺从地钻了进去，却在彻底隐入阴影前的瞬间，骨节分明的大手猛地扣住你的手腕，带着不容抗拒的力道向下一拽，强行将你拉到了书桌前的高背椅上坐下。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_003"
    },
    "ch4_a_003": {
      "speaker": "",
      "text": "你瞪他一眼，无奈地整理好裙摆，调整呼吸，声音平稳无澜让Leopold进来。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_004"
    },
    "ch4_a_004": {
      "speaker": "{{playerName}}",
      "text": "“殿下，请进吧。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_005"
    },
    "ch4_a_005": {
      "speaker": "",
      "text": "Leopold掀开厚重的毡帘走进来，周身裹挟着室外的冷气与刺鼻的酒气。他显然醉得不轻，满面红光地在帐内来回踱步，最后直接将双手撑在你面前的书桌边缘，俯下身，向你喋喋不休地炫耀着他白天那些“英勇”战术。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_006"
    },
    "ch4_a_006": {
      "speaker": "",
      "text": "而在那张垂落的桌布底下，König庞大的身躯委屈地挤在逼仄狭小的空间。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_007"
    },
    "ch4_a_007": {
      "speaker": "",
      "text": "不知是为了报复你让Leopold进来，还是想要夺取你的关注，他滚烫的大掌顺着你微凉的脚踝一寸寸向上，最终撩开了你的真丝睡裙，大掌扣紧了你的大腿外侧。惩罚似的咬住了你大腿上敏感的软肉。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_008"
    },
    "ch4_a_008": {
      "speaker": "",
      "text": "突如其来的濡湿与酥麻顺着尾椎骨骤然窜起，激得你浑身微不可察地轻颤了一下。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_009"
    },
    "ch4_a_009": {
      "speaker": "",
      "text": "你垂在桌下的另一只手死死掐入掌心，强行压下喉间险些溢出的喘息。看着近在咫尺、口若悬河的未婚夫，你扯起唇角，露出一抹完美的假笑：",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_010"
    },
    "ch4_a_010": {
      "speaker": "{{playerName}}",
      "text": "“殿下真是……英勇不凡。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_011"
    },
    "ch4_a_011": {
      "speaker": "",
      "text": "他没有真正用力咬下去，而是带着几分漫不经心的恶劣与调情，上下齿尖轻轻拢住，左右来回细细地碾磨、叼扯着。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_a_012"
    },
    "ch4_a_012": {
      "speaker": "",
      "text": "听到这句称赞，桌底下的男人动作一顿，随即发出一声沉闷而恶劣的低笑。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_war_001"
    },
    "ch4_b_001": {
      "speaker": "",
      "text": "你正用指尖漫不经心地梳理、缠绕着König暗红色的发丝。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_002"
    },
    "ch4_b_002": {
      "speaker": "",
      "text": "听到Leopold的声音，你指尖的动作微微一顿。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_003"
    },
    "ch4_b_003": {
      "speaker": "",
      "text": "仅仅是这一瞬的停顿，便让趴在你腿上的男人感到了极度的不满。察觉到你的注意力被门外的未婚夫夺走，König眼底瞬间掠过一丝暴戾。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_004"
    },
    "ch4_b_004": {
      "speaker": "",
      "text": "他缓缓抬起头，原本只是虚虚环在你的腰间的大手用力收紧，仿佛在无声地抗议着你刚才的分心。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_005"
    },
    "ch4_b_005": {
      "speaker": "",
      "text": "看着他这个样子，你心底生出一丝连你自己都未曾察觉的纵容。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_006"
    },
    "ch4_b_006": {
      "speaker": "",
      "text": "你没有推开他，而是将指尖重新顺着他的发丝抚上他的侧脸，声音平稳、带着几分慵懒对外开口：",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_007"
    },
    "ch4_b_007": {
      "speaker": "{{playerName}}",
      "text": "“殿下，北境的风雪吹得我有些头痛。更何况您今夜也喝了不少酒，还是早些休息吧。有什么事，明日再说。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_008"
    },
    "ch4_b_008": {
      "speaker": "",
      "text": "门外的Leopold吃了个闭门羹，听出你语气里的倦意，只能悻悻地关心了几句，转身离去。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_009"
    },
    "ch4_b_009": {
      "speaker": "",
      "text": "确认那脚步声彻底走远后，紧紧勒在你腰间的大手才终于放松了几分。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_010"
    },
    "ch4_b_010": {
      "speaker": "",
      "text": "König眼底的阴郁与戾气瞬间一扫而空，取而代之的是一种愉悦、甚至透着几分病态的满足感。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_011"
    },
    "ch4_b_011": {
      "speaker": "König",
      "text": "“您为了我……把他赶走了。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_012"
    },
    "ch4_b_012": {
      "speaker": "",
      "text": "他将脸颊深深地依恋在你的掌心里蹭了蹭。他仰起头看着你，滚烫的唇瓣虔诚地吻过你的指尖，又顺着你的手腕、小臂一路向上吻去",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_013"
    },
    "ch4_b_013": {
      "speaker": "",
      "text": "他缓缓直起身，深邃的眼眸盯着你，似乎是在征求你的同意。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_014"
    },
    "ch4_b_014": {
      "speaker": "",
      "text": "你错开他热烈的眼神，抿了抿唇。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_015"
    },
    "ch4_b_015": {
      "speaker": "",
      "text": "他低笑一声。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_016"
    },
    "ch4_b_016": {
      "speaker": "König",
      "text": "“这是默许吗？”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_017"
    },
    "ch4_b_017": {
      "speaker": "",
      "text": "也不等你回答，他就低下头，重重地吻上了你的唇。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_018"
    },
    "ch4_b_018": {
      "speaker": "",
      "text": "起初，这只是一个带着试探与讨好意味的触碰，但感受到你隐隐的纵容时，这头压抑已久的野兽便彻底失控了。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_b_019"
    },
    "ch4_b_019": {
      "speaker": "König",
      "text": "“我不会再让他打扰我们了……”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-tent.jpg",
      "next": "ch4_war_001"
    },
    "ch4_war_001": {
      "speaker": "",
      "text": "第二天拂晓，凄厉的狼骨号角声，毫无预兆地撕裂了北境灰暗的天空。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "bgm": "chapter4-music2.mp3",
      "next": "ch4_war_002"
    },
    "ch4_war_002": {
      "speaker": "",
      "text": "根本没有什么溃败的游散部落。前几日的胜利，不过是引诱Leopold不断深入腹地的毒饵。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_003"
    },
    "ch4_war_003": {
      "speaker": "",
      "text": "如黑色潮水般的斯卡兰骑兵，裹挟着漫天风雪和震碎大地的马蹄声，突袭了毫无防备的帝国大营。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_004"
    },
    "ch4_war_004": {
      "speaker": "",
      "text": "火光冲天，浓烟滚滚。那些在王城里养尊处优的帝国士兵，在真正嗜血般的斯卡兰军队面前一触即溃。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_005"
    },
    "ch4_war_005": {
      "speaker": "",
      "text": "几名死忠重甲亲卫掩护着你，在一片混乱中走出了营帐。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_006"
    },
    "ch4_war_006": {
      "speaker": "",
      "text": "而不远处，那个昨夜还不可一世的Leopold王储，此刻正连滚带爬地跨上一匹快马。他英俊的面孔因极度的恐惧而彻底扭曲。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_007"
    },
    "ch4_war_007": {
      "speaker": "",
      "text": "他在混乱中看到了被斯卡兰军队逐渐包围的你。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_008"
    },
    "ch4_war_008": {
      "speaker": "",
      "text": "他的眼底闪过了一丝短暂的犹豫，但很快就被求生欲彻底淹没。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_009"
    },
    "ch4_war_009": {
      "speaker": "Leopold",
      "text": "“别，别怕！亲爱的！我马上叫援军来救你！”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_010"
    },
    "ch4_war_010": {
      "speaker": "",
      "text": "他毫不犹豫地调转马头，像条丧家之犬般疯狂向南逃窜，把你彻底抛弃在了这片死地。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_011"
    },
    "ch4_war_011": {
      "speaker": "",
      "text": "你只是冷漠地看着他落荒而逃的背影，平淡地接受了你的未婚夫是一个懦弱的草包。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_012"
    },
    "ch4_war_012": {
      "speaker": "",
      "text": "四周的斯卡兰大军如同绞肉机般推进，已经将你重重包围。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_013"
    },
    "ch4_war_013": {
      "speaker": "",
      "text": "这片营地，此时除了你，你的侍女和亲卫，竟无一人生还。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_014"
    },
    "ch4_war_014": {
      "speaker": "",
      "text": "然而，诡异的一幕发生了。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_015"
    },
    "ch4_war_015": {
      "speaker": "",
      "text": "那些凶神恶煞的异国战士，在距离你十步远的地方，都停下脚步，不再靠近。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_016"
    },
    "ch4_war_016": {
      "speaker": "",
      "text": "他们恭敬地退开，让出了一条宽阔的通道。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_017"
    },
    "ch4_war_017": {
      "speaker": "",
      "text": "风雪中，一个高大而熟悉的身影，踩着满地的鲜血与帝国的残旗，不疾不徐地朝你走来。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_018"
    },
    "ch4_war_018": {
      "speaker": "",
      "text": "他脱下了帝国的铁甲，戴上了黑色面罩，上面画着两道如血泪般的红色痕迹，披着斯卡兰王族最具威慑力的巨大黑狼皮大氅。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_019"
    },
    "ch4_war_019": {
      "speaker": "",
      "text": "你认出来了，是König。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_020"
    },
    "ch4_war_020": {
      "speaker": "",
      "text": "你心中大惊，面上却不显。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_021"
    },
    "ch4_war_021": {
      "speaker": "",
      "text": "所有的斯卡兰将士，在看到他走来的那一刻，齐刷刷地单膝重重跪在雪地里，右手握拳击打左胸，以示忠诚。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_022"
    },
    "ch4_war_022": {
      "speaker": "",
      "text": "König穿过跪伏的千军万马，走到你的面前。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_023"
    },
    "ch4_war_023": {
      "speaker": "",
      "text": "他不再是那个任人欺凌的帝国二皇子。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_024"
    },
    "ch4_war_024": {
      "speaker": "",
      "text": "他居高临下地注视着你，缓缓抬起那只戴着象征斯卡兰最高王权的狼骨扳指的手，极其轻柔、珍重地擦去你脸颊上溅到的一点血星。",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "ch4_war_025"
    },
    "ch4_war_025": {
      "speaker": "König",
      "text": "“啊……他把你丢下了。”",
      "chapter": "第四章 · 斯卡兰",
      "bg": "chapter4-war.jpg",
      "next": "chapter5_intro"
    },
    "chapter5_intro": {
      "chapter": "第五章 · 抉择",
      "chapterIntro": {
        "small": "第五章",
        "title": "抉择",
        "next": "ch5_war_001"
      }
    },
    "ch5_war_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "极致的死寂笼罩了这片刚刚经历过屠戮的雪原。",
      "bg": "chapter4-war.jpg",
      "bgm": "chapter5-music1.mp3",
      "next": "ch5_war_002"
    },
    "ch5_war_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "斯卡兰的将士如同石雕般单膝跪地，只余下风雪的呼啸与旌旗的猎猎作响。没有一个人敢抬起头，哪怕是多看一眼站在中央的你，以及他们那位如同杀神降世般的新王。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_003"
    },
    "ch5_war_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "在这般处境下，你心底的暗流剧烈翻涌。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_choice"
    },
    "ch5_war_choice": {
      "chapter": "第五章 · 抉择",
      "bg": "chapter4-war.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 感到一丝后怕，庆幸他爱上了你",
          "effects": {
            "dependence": 1
          },
          "setFlags": {
            "lastHeroineChoice": "dependence"
          },
          "next": "ch5_war_after_001"
        },
        {
          "text": "B. 感到一丝兴奋，觉得他可以为你所用",
          "effects": {
            "ambition": 1
          },
          "setFlags": {
            "lastHeroineChoice": "ambition"
          },
          "next": "ch5_war_after_001"
        }
      ]
    },
    "ch5_war_after_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "压下心中那些翻涌的复杂情绪，你维持着贵族千金的仪态，微微扬起下巴，抬眸直视着他。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_002"
    },
    "ch5_war_after_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“二殿下，怎么会是你？”",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_003"
    },
    "ch5_war_after_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他擦掉你脸颊上那点殷红的血迹后，并没有移开手，而是轻轻掐住了你的下巴。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_004"
    },
    "ch5_war_after_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“不要再叫我二殿下了。”",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_005"
    },
    "ch5_war_after_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他的声音低沉沙哑，带着一丝将旧日伪装彻底撕裂的快意。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_006"
    },
    "ch5_war_after_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“那，陛下？”",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_007"
    },
    "ch5_war_after_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他深邃的眼眸危险地暗了暗，掐住你下巴的手指稍稍收紧，不带一丝痛感，却透着不容拒绝的强硬：",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_008"
    },
    "ch5_war_after_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“叫我的名字。”",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_009"
    },
    "ch5_war_after_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“König……”",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_010"
    },
    "ch5_war_after_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你似乎还有些不适应这样直呼一位“敌国暴君”的名讳。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_011"
    },
    "ch5_war_after_011": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "这两个简短的音节从你舌尖滚落，在寒风中竟平添了几分缱绻。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_012"
    },
    "ch5_war_after_012": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König满意地松开了手，发出一阵低沉的轻笑。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_013"
    },
    "ch5_war_after_013": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他没有再征求你的意见，而是直接将那件宽大的黑狼皮大氅裹在你的身上，彻底掩盖了你身上象征帝国的华丽衣袍。",
      "bg": "chapter4-war.jpg",
      "next": "ch5_war_after_014"
    },
    "ch5_war_after_014": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“跟我回斯卡兰吧。”",
      "bg": "chapter4-war.jpg",
      "next": "ch5_palace_001"
    },
    "ch5_palace_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你并没有被扔进战俘营，而是被妥善安置在了这座北境权力最中心的地方——斯卡兰新王的宫殿。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_002"
    },
    "ch5_palace_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "沉重的鎏金橡木门被推开。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_003"
    },
    "ch5_palace_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König连身上的风雪都未完全拂去，便匆匆结束了军机会议赶回来看你。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_004"
    },
    "ch5_palace_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他看都没看旁边瑟瑟发抖侍奉着的侍女，不耐地挥了挥手，让他们全部退下。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_005"
    },
    "ch5_palace_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "寝殿内只剩下你们两人。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_006"
    },
    "ch5_palace_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他走到你坐着的贵妃榻前，居高临下地注视着你。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_007"
    },
    "ch5_palace_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“Leopold已经逃回了王城。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_008"
    },
    "ch5_palace_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König的嗓音里带着毫不掩饰的嘲弄与杀意。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_009"
    },
    "ch5_palace_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“为了掩盖他临阵脱逃和全军覆没的丑闻，他直接封锁了北境的消息，向议事厅谎报了一场‘惨烈但伟大的胜利’。他宣称先锋营与斯卡兰军队同归于尽，而你也在混乱中失踪。为了在谎言败露前彻底坐实他的权力，他已经迫不及待地宣布，要在半个月后提前举行加冕典礼。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_palace_010"
    },
    "ch5_palace_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "听闻此言，你心下已有决定。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_coop_choice"
    },
    "ch5_coop_choice": {
      "chapter": "第五章 · 抉择",
      "bg": "chapter5-palace.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. 主动提出与他合作，向那个丢下你的未婚夫和腐朽的帝国复仇",
          "effects": {
            "redemption": 1
          },
          "setFlags": {
            "ch5Cooperation": "yes"
          },
          "next": "ch5_cooperate_001"
        },
        {
          "text": "B. 虽然对未婚夫感到失望，但是也不愿和他一起对抗帝国",
          "effects": {
            "dark": 1
          },
          "setFlags": {
            "ch5Cooperation": "no"
          },
          "next": "ch5_refuse_001"
        }
      ]
    },
    "ch5_cooperate_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“既然他急着戴上那顶虚假的王冠，那我们就成全他。”",
      "bg": "chapter5-palace.jpg",
      "bgm": "chapter5-music2.mp3",
      "next": "ch5_cooperate_002"
    },
    "ch5_cooperate_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你抿了一口手中的红茶，平静地开口，就像讨论天气那样。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_003"
    },
    "ch5_cooperate_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“我有一个办法。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_004"
    },
    "ch5_cooperate_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他微微挑眉，示意你接着说下去。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_005"
    },
    "ch5_cooperate_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“把我送回去。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_006"
    },
    "ch5_cooperate_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你放下茶杯，声音平稳得没有一丝波澜。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_007"
    },
    "ch5_cooperate_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "此话一出，寝殿内的温度仿佛瞬间降至冰点。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_008"
    },
    "ch5_cooperate_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König脸上的神情寸寸破裂，他猛地俯下身，一把掐住你的手腕，将你强行拽向他。那双幽暗的眼眸里瞬间翻涌起极度危险的暴戾：",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_009"
    },
    "ch5_cooperate_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“你说什么？你就这么着急回到他身边？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_010"
    },
    "ch5_cooperate_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“冷静点。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_011"
    },
    "ch5_cooperate_011": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你另一只手安抚似的按住他青筋暴起的手背，语气带着一种令人信服的蛊惑。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_012"
    },
    "ch5_cooperate_012": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“Leopold现在最害怕的，就是奥古斯都家族因为我的失踪而向他发难。如果我‘九死一生’地逃回了王都，并且带回了斯卡兰‘致命’的兵力部署图，你猜，急于在加冕礼上得到我父亲支持的他，会不会把我当成救命稻草？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_013"
    },
    "ch5_cooperate_013": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König的呼吸微微一滞，他紧紧盯着你的眼睛，已经明白了你的意图。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_014"
    },
    "ch5_cooperate_014": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“加冕典礼的前夜，那是他们最警惕，也最松懈的时候。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_015"
    },
    "ch5_cooperate_015": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你眼底闪烁着政客的冷酷与野心。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_016"
    },
    "ch5_cooperate_016": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“你只需要率领精锐突袭王城。而我，我会动用奥古斯都家族的力量，从内部帮你打开城门。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_017"
    },
    "ch5_cooperate_017": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "里应外合，釜底抽薪。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_018"
    },
    "ch5_cooperate_018": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König看着眼前这个美丽、冷血又危险的女人，胸膛剧烈地起伏着。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_019"
    },
    "ch5_cooperate_019": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他不得不承认，这个计划是完美的。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_020"
    },
    "ch5_cooperate_020": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "也不得不承认，他完全为这样的你而着迷。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_021"
    },
    "ch5_cooperate_021": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他缓缓松开捏着你手腕的手，粗糙的指腹眷恋且危险地摩挲过你脖颈的大动脉：",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_022"
    },
    "ch5_cooperate_022": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“奥古斯都家族唯一的掌上明珠，果然是从不吃亏的执棋者。那么，告诉我……”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_023"
    },
    "ch5_cooperate_023": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他低下头，嘴唇几乎贴上你的耳廓。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_cooperate_024"
    },
    "ch5_cooperate_024": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“你冒着这么大的风险帮我，你想要从我这里，得到什么？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_reign_choice"
    },
    "ch5_reign_choice": {
      "chapter": "第五章 · 抉择",
      "bg": "chapter5-palace.jpg",
      "speaker": "",
      "text": "【请做出你的选择】",
      "choices": [
        {
          "text": "A. “你吞并帝国后，后位，是我的。”",
          "effects": {
            "dependence": 5
          },
          "setFlags": {
            "lastHeroineChoice": "dependence"
          },
          "next": "ch5_consort_offer_001"
        },
        {
          "text": "B. “我要你扶我坐上，帝国的王座。”",
          "effects": {
            "ambition": 5
          },
          "setFlags": {
            "lastHeroineChoice": "ambition"
          },
          "next": "ch5_queen_offer_001"
        }
      ]
    },
    "ch5_consort_offer_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你微微仰起头，将自己最脆弱的脖颈彻底展露在他的面前。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_002"
    },
    "ch5_consort_offer_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你见识过了帝国的腐朽，也见识过了眼前这个男人足以摧毁一切的力量与手腕。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_003"
    },
    "ch5_consort_offer_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "与其负隅顽抗，不如早早向他抛出筹码，以此保全整个奥古斯都家族的无上荣光。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_004"
    },
    "ch5_consort_offer_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "毕竟，奥古斯都家族只是需要一个王后，至于坐在王座上的国王是谁，根本无关紧要。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_005"
    },
    "ch5_consort_offer_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“帝国已经烂透了。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_006"
    },
    "ch5_consort_offer_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你伸出双臂，主动地环住了他的脖颈，声音轻柔却带着毋庸置疑的笃定。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_007"
    },
    "ch5_consort_offer_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“我要这片大陆上只飘扬斯卡兰的黑狼旗帜。而我，要在你的身旁。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_008"
    },
    "ch5_consort_offer_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König怔愣了一瞬。随即，他的手臂托住你的腿弯，用力将你整个人抱了起来，让你稳稳地坐在他结实的臂弯里。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_009"
    },
    "ch5_consort_offer_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "视线交错，此刻轮到你居高临下地俯视着这位不可一世的新王。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_010"
    },
    "ch5_consort_offer_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“你知道这意味什么吗？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_011"
    },
    "ch5_consort_offer_011": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他沙哑地呢喃，仰头看着你，眼底的狂热几乎要将你融化。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_012"
    },
    "ch5_consort_offer_012": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“怎么，你的后位难道还有其他人选？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_013"
    },
    "ch5_consort_offer_013": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你轻笑一声。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_014"
    },
    "ch5_consort_offer_014": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "听到你这句带着几分高傲的调侃，König笑了一声，把你往上颠了颠。他抱着你，稳步走向那张柔软的宽大床榻。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_015"
    },
    "ch5_consort_offer_015": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“没有别人。从来都只有你。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_016"
    },
    "ch5_consort_offer_016": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他将你珍重地放下，单膝跪在床沿，双手撑在你的身侧。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_017"
    },
    "ch5_consort_offer_017": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König低下头，吻落在你的唇上，带着虔诚与渴求。他耐心地描摹着你的唇线，直到你微微启唇，主动接纳了他的气息，这个吻才逐渐变得深沉而缠绵。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_018"
    },
    "ch5_consort_offer_018": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他的手指穿过你的长发，温柔地托住你的后脑，另一只手顺着你的腰际轻轻抚摸。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_019"
    },
    "ch5_consort_offer_019": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "房间里的温度在壁炉的烘烤下不断攀升。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_020"
    },
    "ch5_consort_offer_020": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你微凉的指尖顺着他的领口探入，触碰到了他胸膛上那些交错的旧疤，怜惜地顺着一条条伤痕划过。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_021"
    },
    "ch5_consort_offer_021": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "这个安抚般的动作，让König的呼吸瞬间变得有些急促。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_022"
    },
    "ch5_consort_offer_022": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他低喘了一声，滚烫的吻顺着你的唇角滑落至修长的颈项，留下温热湿润的触感。他动作利落却又无比轻柔地替你解开繁复的衣带，粗糙带有薄茧的掌心贴上你细腻的肌肤，激起阵阵难以抑制的酥麻与战栗。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_023"
    },
    "ch5_consort_offer_023": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他与你紧紧地十指相扣，一遍又一遍地向你确认，向你索取。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_consort_offer_024"
    },
    "ch5_consort_offer_024": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“我的王后……我爱你。”",
      "bg": "chapter5-palace.jpg",
      "nextByAxis": {
        "left": "ambition",
        "right": "dependence",
        "leftNext": "ending_iris_intro",
        "rightNext": "ending_joint_intro",
        "tieFlag": "lastHeroineChoice",
        "tieLeftValue": "ambition",
        "tieRightValue": "dependence",
        "fallback": "ending_joint_intro"
      }
    },
    "ch5_queen_offer_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你攥住他的衣领，将他一把拽向自己。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_002"
    },
    "ch5_queen_offer_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你们身体之间的距离被猛地拉近。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_003"
    },
    "ch5_queen_offer_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“帝国的王冠，从来不属于那个草包。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_004"
    },
    "ch5_queen_offer_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "此刻，你将自己的野心毫无保留地摊开在他的面前。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_005"
    },
    "ch5_queen_offer_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你看着他的眼睛，一字一顿地宣告：",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_006"
    },
    "ch5_queen_offer_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“我觉得，以我的才智与手腕，由我坐上那个王座，才是让帝国走向繁荣的唯一正解。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_007"
    },
    "ch5_queen_offer_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König深深地凝视着你。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_008"
    },
    "ch5_queen_offer_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "良久，他胸腔里震荡出一阵极度愉悦、低沉而疯狂的笑声。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_009"
    },
    "ch5_queen_offer_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“我就知道……你这具美丽的皮囊下，藏着比我还要贪婪的怪物。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_010"
    },
    "ch5_queen_offer_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他眼底的欣赏与爱慕几乎要满溢而出。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_011"
    },
    "ch5_queen_offer_011": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他并不介意被你当作登上王位的利刃，相反，只要能成为你手里最有价值的底牌，被你所需要，他就甘之如饴。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_012"
    },
    "ch5_queen_offer_012": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“但锋利的剑，是需要极其昂贵的保养费的。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_013"
    },
    "ch5_queen_offer_013": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他顺势倾身，双臂撑在你的身侧，将你抵在贵妃榻的边缘。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_014"
    },
    "ch5_queen_offer_014": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“你觉得我，付不起吗？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_015"
    },
    "ch5_queen_offer_015": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你毫不退让地挑眉，直接仰起头，重重地吻上他的唇。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_016"
    },
    "ch5_queen_offer_016": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "这个吻带着破釜沉舟的试探与暧昧的挑逗。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_017"
    },
    "ch5_queen_offer_017": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "在唇齿纠缠的间隙，你微微退开半寸，趁着换气的功夫，气息微喘地看着他：",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_018"
    },
    "ch5_queen_offer_018": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“你是答应，还是不答应？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_019"
    },
    "ch5_queen_offer_019": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König意犹未尽，欲求不满地盯着你水润的唇。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_020"
    },
    "ch5_queen_offer_020": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“……遵命，我的女王陛下。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_021"
    },
    "ch5_queen_offer_021": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "话音未落，他便反客为主，再次吻了下来。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_022"
    },
    "ch5_queen_offer_022": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "壁炉里的火光将室内的温度烘烤得极高。在急促而灼热的呼吸中，繁复的衣物成了最碍眼的阻碍。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_023"
    },
    "ch5_queen_offer_023": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你温凉的指尖灵巧地扯开他单衣的系带，掌心直接贴上他滚烫坚实、布满旧疤的胸膛。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_024"
    },
    "ch5_queen_offer_024": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你稍稍推开他的脑袋，在他的伤痕上落下一个接一个轻柔的吻。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_025"
    },
    "ch5_queen_offer_025": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他似乎有些没料到你的动作，愣了一下。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_026"
    },
    "ch5_queen_offer_026": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你滚烫的吻犹如细碎的火星，彻底点燃了他心底的欲火。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_027"
    },
    "ch5_queen_offer_027": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "肌肤相贴的瞬间，他像渴了很久的旅人终于找到绿洲一样，发出满足的谓叹。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_queen_offer_028"
    },
    "ch5_queen_offer_028": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“我会是您最锋利的剑，最忠实的信徒。”",
      "bg": "chapter5-palace.jpg",
      "nextByAxis": {
        "left": "ambition",
        "right": "dependence",
        "leftNext": "ending_iris_intro",
        "rightNext": "ending_joint_intro",
        "tieFlag": "lastHeroineChoice",
        "tieLeftValue": "ambition",
        "tieRightValue": "dependence",
        "fallback": "ending_joint_intro"
      }
    },
    "ch5_refuse_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你端坐在贵妃榻上，目光平静而坚决地迎上他的视线。你当然恨Leopold的懦弱与背叛，但你姓奥古斯都。你的家族、你的根基、你从小接受的贵族荣耀，全都深深扎根在帝国的疆土之上。让你对抗帝国——这绝无可能。",
      "bg": "chapter5-palace.jpg",
      "bgm": "chapter5-music3.mp3",
      "next": "ch5_refuse_002"
    },
    "ch5_refuse_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“Leopold是个无可救药的蠢货，他死不足惜。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_003"
    },
    "ch5_refuse_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你深吸了一口气，字字清晰地开口。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_004"
    },
    "ch5_refuse_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“但我不会和你一起对抗帝国。那里是我的故国，王城里有我的父亲，有奥古斯都家族世代守护的基业。König，如果你想利用我来摧毁帝国，那你找错人了。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_005"
    },
    "ch5_refuse_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "良久，他的喉咙里发出一阵压抑、低沉而危险的冷笑。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_006"
    },
    "ch5_refuse_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“为了你的父亲？为了你的家族？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_007"
    },
    "ch5_refuse_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他向前逼近了一步，那张俊美而充满野性的面孔在火光下显得格外骇人。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_008"
    },
    "ch5_refuse_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“别用这些冠冕堂皇的借口来敷衍我。你心里真正放不下的，是你那个完美的未婚夫，对吗？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_009"
    },
    "ch5_refuse_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“你胡说什么？我刚刚才说过他死不足惜！”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_010"
    },
    "ch5_refuse_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你被这突如其来的无端指控激怒，霍然起身。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_011"
    },
    "ch5_refuse_011": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König却听不进你的话。他的眼底翻涌着不再压抑的嫉妒与疯狂。他一把抓住你的手腕，力道极大，仿佛要将你整个人揉碎在掌心里。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_012"
    },
    "ch5_refuse_012": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“他已经丢下你了！只有我，只有我才是真正的爱你！”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_013"
    },
    "ch5_refuse_013": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“我守护的是奥古斯都家族的尊严，不是他！”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_014"
    },
    "ch5_refuse_014": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你用力想要甩开他的手，骨子里的傲慢让你不愿再退让半步。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_015"
    },
    "ch5_refuse_015": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“放手！我就算做不成帝国的皇后，也绝不会沦为你的政治筹码！”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_016"
    },
    "ch5_refuse_016": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "这句话，成了彻底点燃他愤怒的最后一点火星。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_017"
    },
    "ch5_refuse_017": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“不愿做筹码？”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_018"
    },
    "ch5_refuse_018": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他冷笑了一声，眼神彻底暗沉下来，像一潭深不见底的死水。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_019"
    },
    "ch5_refuse_019": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“那你就留在这里，做我的笼中雀。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_020"
    },
    "ch5_refuse_020": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "下一秒，他猛地将你拽入怀中，凶狠地吻住了你的唇。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_021"
    },
    "ch5_refuse_021": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "这更像是一场充斥着愤怒、嫉妒与疯狂的撕咬。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_022"
    },
    "ch5_refuse_022": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他野蛮地撬开你的齿关，长驱直入。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_023"
    },
    "ch5_refuse_023": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "“啪！”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_024"
    },
    "ch5_refuse_024": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你在极度的愤怒中挣脱出一只手，毫不留情地甩了他一个耳光。清脆的巴掌声在寝殿内回荡。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_025"
    },
    "ch5_refuse_025": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "König被打得偏过头去。但他非但没有停下，反而因为这个巴掌被激出了更疯狂的凶性。他舔去了被你咬破的唇角溢出的鲜血，转过头，深邃的眼底燃烧着足以将你焚毁的烈火。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_026"
    },
    "ch5_refuse_026": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他猛地将你扛起，大步走到那张宽大的床榻前，将你扔进柔软的被褥里。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_027"
    },
    "ch5_refuse_027": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "在你还没来得及起身的瞬间，他庞大的身躯已经极具压迫感地覆了上来，把你笼罩在他的阴影之下。他灼热的吻将你所有的反抗都卷入这场失控的情潮之中。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_028"
    },
    "ch5_refuse_028": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“我会让你看到的……”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_029"
    },
    "ch5_refuse_029": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他在唇齿交缠的间隙，发出犹如野兽般粗重的喘息，他的吻犹如暴雨般落在你的侧颈、锁骨、胸口，一路向下。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_030"
    },
    "ch5_refuse_030": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“我会踏平帝国的城墙，杀了那个废物，让你看到谁才是真正够格与你并肩的人。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_031"
    },
    "ch5_refuse_031": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“疯子……”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_032"
    },
    "ch5_refuse_032": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你胸口剧烈起伏着，双手死死抵住他，指关节都用力得微微泛白。你想要推开他，可身体却不可抑止地发颤。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_033"
    },
    "ch5_refuse_033": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“我是疯了。我早就疯了。”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_034"
    },
    "ch5_refuse_034": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "他有些粗暴地撕开你碍事的繁复衣裙，肌肤相亲的瞬间，他的理智几乎被烧为灰烬。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_035"
    },
    "ch5_refuse_035": {
      "chapter": "第五章 · 抉择",
      "speaker": "König",
      "text": "“你只能是我的……你永远都只能留在我身边！”",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_036"
    },
    "ch5_refuse_036": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "这一夜，是一场没有赢家的死斗。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_037"
    },
    "ch5_refuse_037": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你们像两头困在绝境里的野兽，用最原始的方式互相撕咬、抵死缠绵。极度的愤怒、不甘的爱慕交织在一起，让这场充斥着怒火的纠缠化作了一场极致的沉沦。",
      "bg": "chapter5-palace.jpg",
      "next": "ch5_refuse_day_001"
    },
    "ch5_refuse_day_001": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "第二天。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_002"
    },
    "ch5_refuse_day_002": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "当你在酸痛与疲惫中重新恢复意识时，寝殿里的壁炉已经只剩下微弱的余烬。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_003"
    },
    "ch5_refuse_day_003": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "阳光透过厚重的彩色琉璃窗，在地毯上投下斑驳的冷光。那张宽大的拔步床上，此刻只有你一个人。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_004"
    },
    "ch5_refuse_day_004": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "一丝强烈的不安涌上心头。你忍着浑身的酸痛，快步走到那扇沉重的鎏金橡木门前，用力拉了拉门把手。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_005"
    },
    "ch5_refuse_day_005": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "纹丝不动。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_006"
    },
    "ch5_refuse_day_006": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“开门！”",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_007"
    },
    "ch5_refuse_day_007": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你用力拍打着门板。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_008"
    },
    "ch5_refuse_day_008": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "门外传来轻微的金属碰撞声，紧接着，是一个斯卡兰守卫粗犷而恭敬的声音：",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_009"
    },
    "ch5_refuse_day_009": {
      "chapter": "第五章 · 抉择",
      "speaker": "斯卡兰守卫",
      "text": "“王后殿下，陛下有令，为了您的安全着想，在战事结束前，不得让您离开寝殿。”",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_010"
    },
    "ch5_refuse_day_010": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你微微一怔，一股彻骨的寒意瞬间从脚底直窜心头。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_011"
    },
    "ch5_refuse_day_011": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "软禁。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_012"
    },
    "ch5_refuse_day_012": {
      "chapter": "第五章 · 抉择",
      "speaker": "{{playerName}}",
      "text": "“你们陛下呢？”",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_013"
    },
    "ch5_refuse_day_013": {
      "chapter": "第五章 · 抉择",
      "speaker": "",
      "text": "你勉强找回来自己的声音，试探地问到。",
      "bg": "chapter5-palace-day.jpg",
      "next": "ch5_refuse_day_014"
    },
    "ch5_refuse_day_014": {
      "chapter": "第五章 · 抉择",
      "speaker": "斯卡兰守卫",
      "text": "“陛下已经率兵出征。王后殿下，请您安心在此等候陛下凯旋。”",
      "bg": "chapter5-palace-day.jpg",
      "nextByAxis": {
        "left": "ambition",
        "right": "dependence",
        "leftNext": "ending_thorn_intro",
        "rightNext": "ending_cage_intro",
        "tieFlag": "lastHeroineChoice",
        "tieLeftValue": "ambition",
        "tieRightValue": "dependence",
        "fallback": "ending_cage_intro"
      }
    },
    "ending_cage_001": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "被软禁在这座宫殿，时间的流逝变得模糊，唯有窗外呼啸的北风和偶尔掠过的飞雪，在丈量着日夜的交替。",
      "bgTheme": "cage",
      "bgm": "ending-cage.mp3",
      "next": "ending_cage_002"
    },
    "ending_cage_002": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "没有任何人敢对你不敬，所有人对你的态度，都恭顺得如同面对真正的神明。",
      "bgTheme": "cage",
      "next": "ending_cage_003"
    },
    "ending_cage_003": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "但唯独，那扇沉重的鎏金橡木门，再也没有为你从里面打开过。",
      "bgTheme": "cage",
      "next": "ending_cage_004"
    },
    "ending_cage_004": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "外界的战报，成了你在这座华丽牢笼里唯一能触碰到的“现实”。",
      "bgTheme": "cage",
      "next": "ending_cage_005"
    },
    "ending_cage_005": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "正如你所预料的那样，帝国那些早已被奢靡掏空了身体的贵族将领，在König率领的斯卡兰军队面前，简直不堪一击。他直接撕裂了帝国北部的防线，以一种令人胆寒的推进速度，直逼帝国的腹地。",
      "bgTheme": "cage",
      "next": "ending_cage_006"
    },
    "ending_cage_006": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你那位愚蠢的未婚夫Leopold，在王城里甚至还没来得及编造完他那套“惨烈胜利”的谎言，前线的溃败战报就已经像雪花一样飞回了议事厅。",
      "bgTheme": "cage",
      "next": "ending_cage_007"
    },
    "ending_cage_007": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "但Leopold已经骑虎难下。",
      "bgTheme": "cage",
      "next": "ending_cage_008"
    },
    "ending_cage_008": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "为了稳固濒临崩溃的军心，也为了拿到他心中最重要的王权，他疯狂地决定，加冕典礼如期举行。他要在神圣的教廷里戴上皇冠，以此来宣告他才是帝国正统的主宰。",
      "bgTheme": "cage",
      "next": "ending_cage_009"
    },
    "ending_cage_009": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "然而，那场加冕典礼，最终沦为了帝国历史上最荒诞、也最血腥的一场葬礼。",
      "bgTheme": "cage",
      "next": "ending_cage_010"
    },
    "ending_cage_010": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "当教皇那双枯槁的手颤抖着捧起皇冠，即将戴在Leopold头上的那一刻，König已经杀进了教堂。",
      "bgTheme": "cage",
      "next": "ending_cage_011"
    },
    "ending_cage_011": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "他并没有带面罩，暗红色的发丝被风吹动，露出那张属于帝国二皇子的脸。",
      "bgTheme": "cage",
      "next": "ending_cage_012"
    },
    "ending_cage_012": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "大殿内死寂得落针可闻。Leopold吓得瘫软在地上，连滚带爬地想要逃离，却被König手中的长矛精准地钉死在了他梦寐以求的皇冠前。",
      "bgTheme": "cage",
      "next": "ending_cage_013"
    },
    "ending_cage_013": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "不出半月，帝国的权柄彻底易主。那些曾经高高在上的贵族，此刻全都跪伏在这个拥有异族血统的暴君脚下瑟瑟发抖。而你的父亲，奥古斯都大公，在审时度势之后，为了保全家族的血脉与荣耀，清醒地交出了手里的兵权，选择了向新王俯首。",
      "bgTheme": "cage",
      "next": "ending_cage_014"
    },
    "ending_cage_014": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "这一切的消息传回北境时，你正靠在窗边，看着外面逐渐消融的冰雪。",
      "bgTheme": "cage",
      "next": "ending_cage_015"
    },
    "ending_cage_015": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你早就知道他会赢，只是没料到，他会把这个曾经不可一世的帝国，摧毁得如此彻底。",
      "bgTheme": "cage",
      "next": "ending_cage_016"
    },
    "ending_cage_016": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "沉重的大门发出“咔哒”一声闷响。",
      "bgTheme": "cage",
      "next": "ending_cage_017"
    },
    "ending_cage_017": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "König回来了。",
      "bgTheme": "cage",
      "next": "ending_cage_018"
    },
    "ending_cage_018": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "他身上还穿着那件象征着绝对权力的黑色重甲，肩膀上沾染着风雪与尘埃。但在踏入寝殿的那一刻，他却没有立刻走向你，而是站在门口，脱下了那身带着血腥味与寒气的冰冷铠甲，甚至用一旁的温水洗净了双手，才一步步朝你走来。",
      "bgTheme": "cage",
      "next": "ending_cage_019"
    },
    "ending_cage_019": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "他已然是这片大陆上真正的主宰。只要他一声令下，千军万马都会为他赴汤蹈火。",
      "bgTheme": "cage",
      "next": "ending_cage_020"
    },
    "ending_cage_020": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "然而，当他走到你的贵妃榻前时，他却自然地、没有任何犹豫地单膝跪在了你的脚边，把头轻轻搁在了你的膝上。",
      "bgTheme": "cage",
      "next": "ending_cage_021"
    },
    "ending_cage_021": {
      "chapter": "终章 · 笼中雀",
      "speaker": "König",
      "text": "“我回来了。”",
      "bgTheme": "cage",
      "next": "ending_cage_022"
    },
    "ending_cage_022": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "他的声音沙哑，透着连日征战的极度疲惫，但那双仰视着你的深邃眼眸里，却还是你熟悉的狂热爱意。",
      "bgTheme": "cage",
      "next": "ending_cage_023"
    },
    "ending_cage_023": {
      "chapter": "终章 · 笼中雀",
      "speaker": "König",
      "text": "“Leopold，还有老国王都死了。议事厅被我血洗了一半，剩下的，都是听话的。奥古斯都家族，包括你的父亲，都很安全。”",
      "bgTheme": "cage",
      "next": "ending_cage_024"
    },
    "ending_cage_024": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "König珍重地捧起你的手背，将炽热的吻烙印在你的指尖，仿佛在向他唯一的神明献上祭品：",
      "bgTheme": "cage",
      "next": "ending_cage_025"
    },
    "ending_cage_025": {
      "chapter": "终章 · 笼中雀",
      "speaker": "König",
      "text": "“我说过，我会把帝国的王座抢过来……”",
      "bgTheme": "cage",
      "next": "ending_cage_026"
    },
    "ending_cage_026": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "他起身，拿过放在一旁的精致镶金锦盒，缓缓打开，里面是耀眼夺目的帝国皇后的王冠。",
      "bgTheme": "cage",
      "next": "ending_cage_027"
    },
    "ending_cage_027": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你垂下眼眸，静静地看着跪在脚边的这个男人，又看了看那顶触手可及的帝国王冠。",
      "bgTheme": "cage",
      "next": "ending_cage_028"
    },
    "ending_cage_028": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "在这一刻，你终于彻底看清了这个名为“权力”的牢笼，究竟有多么华丽，又有多么令人窒息。",
      "bgTheme": "cage",
      "next": "ending_cage_029"
    },
    "ending_cage_029": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "他把你所有的退路、所有的依靠，全部碾碎。他毁掉了你的世界，然后为你重新铸造了一个只有他存在的帝国。",
      "bgTheme": "cage",
      "next": "ending_cage_030"
    },
    "ending_cage_030": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你依然是高高在上的奥古斯都大公唯一的女儿，你拥有了一切——除了离开他的自由。",
      "bgTheme": "cage",
      "next": "ending_cage_031"
    },
    "ending_cage_031": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你没有接那顶王冠，而是缓缓伸出手，带着一丝叹息般地抚上了他的脸庞。",
      "bgTheme": "cage",
      "next": "ending_cage_032"
    },
    "ending_cage_032": {
      "chapter": "终章 · 笼中雀",
      "speaker": "{{playerName}}",
      "text": "“你赢了，König。”",
      "bgTheme": "cage",
      "next": "ending_cage_033"
    },
    "ending_cage_033": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你的声音轻柔得仿佛一片落在雪地里的羽毛。",
      "bgTheme": "cage",
      "next": "ending_cage_034"
    },
    "ending_cage_034": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "但听到这句话的König却像是得到了神明的认可般激动。他死死地抱住你的腰，将脸深深地埋进你的衣裙里，发出了沉闷的喘息。",
      "bgTheme": "cage",
      "next": "ending_cage_035"
    },
    "ending_cage_035": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "半个月后，帝国迎来了新的主人。",
      "bgTheme": "cage",
      "next": "ending_cage_036"
    },
    "ending_cage_036": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "一场极其盛大、奢靡到足以载入史册的封后大典，在帝国宫殿内举行。",
      "bgTheme": "cage",
      "next": "ending_cage_037"
    },
    "ending_cage_037": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "你穿着那件由数百名工匠耗时半月赶制而成的华服，在万众瞩目下登场。",
      "bgTheme": "cage",
      "next": "ending_cage_038"
    },
    "ending_cage_038": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "König站在光里，温柔地牵起你的手，与你一同走向王座。",
      "bgTheme": "cage",
      "next": "ending_cage_039"
    },
    "ending_cage_039": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "沿途，所有的帝国旧贵族、教廷的主教、以及斯卡兰的悍将，全都恭敬地向你们跪伏。你的父亲站在最前方，用复杂却又夹杂着欣慰的目光看着你——因为你的存在，奥古斯都家族在这场改朝换代的血洗中，不仅毫发无损，反而登上了前所未有的权力巅峰。",
      "bgTheme": "cage",
      "next": "ending_cage_040"
    },
    "ending_cage_040": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "在教皇战战兢兢的祈祷声中，他没有让任何人插手，而是亲自拿起了那顶后冠，小心翼翼地戴在了你的头上。",
      "bgTheme": "cage",
      "next": "ending_cage_041"
    },
    "ending_cage_041": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "然后，等待着你，他的王后，他的神明，他的爱人，为他带上国王的冠冕。",
      "bgTheme": "cage",
      "next": "ending_cage_042"
    },
    "ending_cage_042": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "当他牵着你的手，与你一同转身俯视着这片广袤的疆土和臣服的臣民时，外界的所有人都以为，你不仅是帝国的皇后，更是与这位暴君平分秋色的共主。",
      "bgTheme": "cage",
      "next": "ending_cage_043"
    },
    "ending_cage_043": {
      "chapter": "终章 · 笼中雀",
      "speaker": "",
      "text": "但只有你知道，这顶后冠，就是他为你亲手锁上的、最华丽的镣铐。",
      "bgTheme": "cage",
      "next": "ending_cage_complete"
    },
    "ending_cage_complete": {
      "chapter": "终章 · 笼中雀",
      "bgTheme": "cage",
      "speaker": "",
      "text": "",
      "ending": "笼中雀"
    },
    "ending_cage_intro": {
      "chapter": "终章 · 笼中雀",
      "chapterIntro": {
        "small": "终章",
        "title": "笼中雀",
        "next": "ending_cage_001"
      }
    },
    "ending_thorn_001": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "{{playerName}}",
      "text": "“凯旋？”",
      "bgTheme": "thorn",
      "bgm": "ending-thorn.mp3",
      "next": "ending_thorn_002"
    },
    "ending_thorn_002": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你扯起唇角，无声地冷笑了一下。",
      "bgTheme": "thorn",
      "next": "ending_thorn_003"
    },
    "ending_thorn_003": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "作为奥古斯都家族的继承人，哪怕被关在笼子里，你也不会是柔弱的金丝雀，而是会咬人的鹰。",
      "bgTheme": "thorn",
      "next": "ending_thorn_004"
    },
    "ending_thorn_004": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "接下来的半个月，你在这座奢华的牢笼里，极其平静地等待着。",
      "bgTheme": "thorn",
      "next": "ending_thorn_005"
    },
    "ending_thorn_005": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "期间只提过一个要求，那就是每天都要有鲜花，花瓶要瓷的。",
      "bgTheme": "thorn",
      "next": "ending_thorn_006"
    },
    "ending_thorn_006": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "想到他们国王对你的态度，你提出的要求肯定要满足。马上就有侍女捧着插好花的花瓶走进来，放在了桌上。",
      "bgTheme": "thorn",
      "next": "ending_thorn_007"
    },
    "ending_thorn_007": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "直到那一天，鎏金橡木门被人从外面重重推开。",
      "bgTheme": "thorn",
      "next": "ending_thorn_008"
    },
    "ending_thorn_008": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "König站在门口，虽然已经卸下战甲，但战场的硝烟味和血腥味却没有散去。他犹如一头刚刚饱餐过血肉的凶兽，餍足却又不满地一步步走到你的面前。",
      "bgTheme": "thorn",
      "next": "ending_thorn_009"
    },
    "ending_thorn_009": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "“当啷——”",
      "bgTheme": "thorn",
      "next": "ending_thorn_010"
    },
    "ending_thorn_010": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "一顶沾着血迹、甚至已经微微变形的帝国皇冠，被他极其随意地扔在了你的脚边。",
      "bgTheme": "thorn",
      "next": "ending_thorn_011"
    },
    "ending_thorn_011": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“Leopold死了。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_012"
    },
    "ending_thorn_012": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "König居高临下地看着你，眼底闪烁着病态的狂热。",
      "bgTheme": "thorn",
      "next": "ending_thorn_013"
    },
    "ending_thorn_013": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“帝国，现在是我的了。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_014"
    },
    "ending_thorn_014": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他张开双臂，像是在等待着你因为失去一切而崩溃，等待着你别无选择地扑进他的怀里，彻底向他这个唯一的胜利者臣服。",
      "bgTheme": "thorn",
      "next": "ending_thorn_015"
    },
    "ending_thorn_015": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你垂下眼眸，看了一眼脚边那顶象征着帝国至高权力的王冠。",
      "bgTheme": "thorn",
      "next": "ending_thorn_016"
    },
    "ending_thorn_016": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "随后，你极其平淡地弯下腰，将那顶带血的王冠捡了起来，准备放在桌上。",
      "bgTheme": "thorn",
      "next": "ending_thorn_017"
    },
    "ending_thorn_017": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "就在这时，你状似不经意地碰倒了花瓶，瓷瓶立刻碎裂成很多片锋利的瓷片。",
      "bgTheme": "thorn",
      "next": "ending_thorn_018"
    },
    "ending_thorn_018": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他立刻担心地走过来，弯腰想查看你的手。",
      "bgTheme": "thorn",
      "next": "ending_thorn_019"
    },
    "ending_thorn_019": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你抬起头，冲他露出了一个美丽却令人毛骨悚然的微笑。",
      "bgTheme": "thorn",
      "next": "ending_thorn_020"
    },
    "ending_thorn_020": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "在他因为你的笑颜而微微怔愣的瞬间，你瞬间抓住一个瓷片精准且狠戾地抵住了他颈侧的大动脉。似乎只要你再稍微用力半寸，就能瞬间结束他的生命。",
      "bgTheme": "thorn",
      "next": "ending_thorn_021"
    },
    "ending_thorn_021": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "空气在这一刻彻底凝固。",
      "bgTheme": "thorn",
      "next": "ending_thorn_022"
    },
    "ending_thorn_022": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "König没有躲。他完全有能力在你出手前拧断你的手腕，但他甚至连眼睛都没有眨一下，只是任由你将瓷片死死压在他的脖颈上，压出了一道殷红的血痕。",
      "bgTheme": "thorn",
      "next": "ending_thorn_023"
    },
    "ending_thorn_023": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“你想杀我？”",
      "bgTheme": "thorn",
      "next": "ending_thorn_024"
    },
    "ending_thorn_024": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他垂眸看着你，非但没有动怒，喉咙里反而溢出一阵愉悦的低笑。",
      "bgTheme": "thorn",
      "next": "ending_thorn_025"
    },
    "ending_thorn_025": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“为了给那个废物报仇？还是为了所谓的帝国？”",
      "bgTheme": "thorn",
      "next": "ending_thorn_026"
    },
    "ending_thorn_026": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "{{playerName}}",
      "text": "“他们也配？”",
      "bgTheme": "thorn",
      "next": "ending_thorn_027"
    },
    "ending_thorn_027": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你毫不客气地冷嗤一声。",
      "bgTheme": "thorn",
      "next": "ending_thorn_028"
    },
    "ending_thorn_028": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "{{playerName}}",
      "text": "“听着，König，我从小被当作奥古斯都家族的继承人培养，你想要我乖乖做你的金丝雀，不可能。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_029"
    },
    "ending_thorn_029": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你直视着他的眼睛，野心在这一刻毫无保留地彻底爆发：",
      "bgTheme": "thorn",
      "next": "ending_thorn_030"
    },
    "ending_thorn_030": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "{{playerName}}",
      "text": "“我要权力。我要做帝国的女王。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_031"
    },
    "ending_thorn_031": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "König死死盯着你，胸腔因为极度的兴奋而剧烈起伏着。他能感觉到颈侧传来的尖锐刺痛，也能闻到你身上那种比任何催情药都要吸引他的，致命的野心与杀意。",
      "bgTheme": "thorn",
      "next": "ending_thorn_032"
    },
    "ending_thorn_032": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“如果我不答应呢？”",
      "bgTheme": "thorn",
      "next": "ending_thorn_033"
    },
    "ending_thorn_033": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他故意向前倾身，让刀刃更深地陷进自己的皮肉里，鲜血蜿蜒流下。",
      "bgTheme": "thorn",
      "next": "ending_thorn_034"
    },
    "ending_thorn_034": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“你要杀了我吗，{{playerName}}小姐？杀了我，你应该也活不过明天。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_035"
    },
    "ending_thorn_035": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你不仅没有退缩，反而傲慢地扬起下巴，眼神里的疯狂甚至超越了他：",
      "bgTheme": "thorn",
      "next": "ending_thorn_036"
    },
    "ending_thorn_036": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "{{playerName}}",
      "text": "“不要小看我啊，König。大不了，和你一起共赴黄泉地狱。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_037"
    },
    "ending_thorn_037": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你凑近他的耳畔，用最轻柔的声音，吐出最恶毒的挑衅：",
      "bgTheme": "thorn",
      "next": "ending_thorn_038"
    },
    "ending_thorn_038": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "{{playerName}}",
      "text": "“但是万一我活下来了，凭借奥古斯都家族的积累和我的能力，我仍然有信心当上天下霸主。”“至于男人……你以为你很不可替代吗？等我坐上那个位置，我可以养一百个，一千个比你听话、比你俊美的男宠。”",
      "bgTheme": "thorn",
      "next": "ending_thorn_039"
    },
    "ending_thorn_039": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他极其神经质地大笑起来。",
      "bgTheme": "thorn",
      "next": "ending_thorn_040"
    },
    "ending_thorn_040": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你爱上别人，才是他最不可以接受的未来。",
      "bgTheme": "thorn",
      "next": "ending_thorn_041"
    },
    "ending_thorn_041": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“好……真是太好了……”",
      "bgTheme": "thorn",
      "next": "ending_thorn_042"
    },
    "ending_thorn_042": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他不仅没有推开你手里的刀，反而极其强硬地一把扣住你的后脑勺，就着那把抵在自己大动脉上的致命凶器，猛地低头，极其凶狠地吻住了你。",
      "bgTheme": "thorn",
      "next": "ending_thorn_043"
    },
    "ending_thorn_043": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "这根本不是一个情人之间缠绵的吻。",
      "bgTheme": "thorn",
      "next": "ending_thorn_044"
    },
    "ending_thorn_044": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他粗暴地吮吸着你的唇，像是想要将你一口一口地吃掉，让你和他永远合为一体。",
      "bgTheme": "thorn",
      "next": "ending_thorn_045"
    },
    "ending_thorn_045": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“你想要权力？可以！”",
      "bgTheme": "thorn",
      "next": "ending_thorn_046"
    },
    "ending_thorn_046": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他在你唇边剧烈地喘息着，宛如一个彻底疯魔的信徒，压上他的所有去换取神明的一丝垂怜。",
      "bgTheme": "thorn",
      "next": "ending_thorn_047"
    },
    "ending_thorn_047": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“你想要的一切，我都可以给你。但你听清楚了——”",
      "bgTheme": "thorn",
      "next": "ending_thorn_048"
    },
    "ending_thorn_048": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他一把攥住你握刀的手，眼神偏执得令人战栗：",
      "bgTheme": "thorn",
      "next": "ending_thorn_049"
    },
    "ending_thorn_049": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "König",
      "text": "“这辈子，站在你身边的男人，你最锋利的剑，你最忠实的狗……永远只能有我一个！”",
      "bgTheme": "thorn",
      "next": "ending_thorn_050"
    },
    "ending_thorn_050": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "达成目的，你丢下瓷片，搂住他的脖子再次吻了上去。",
      "bgTheme": "thorn",
      "next": "ending_thorn_051"
    },
    "ending_thorn_051": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "心里却有些可惜，早知道就再多要点好处了。",
      "bgTheme": "thorn",
      "next": "ending_thorn_052"
    },
    "ending_thorn_052": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "他不爽你的走神，惩罚似的咬了你的下唇一口。拉回你的注意力。",
      "bgTheme": "thorn",
      "next": "ending_thorn_053"
    },
    "ending_thorn_053": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "这场“谈判”最后进行到了床上，你们不死不休般地折腾了一整晚。",
      "bgTheme": "thorn",
      "next": "ending_thorn_054"
    },
    "ending_thorn_054": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "第二日一早，König就吩咐了下去，你的加冕礼，他的加冕礼，还有你们的婚礼，都要在同一天举行。",
      "bgTheme": "thorn",
      "next": "ending_thorn_055"
    },
    "ending_thorn_055": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你们都不是什么善类。",
      "bgTheme": "thorn",
      "next": "ending_thorn_056"
    },
    "ending_thorn_056": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "在鲜血与白骨堆积的称王之路上，你们谁也无法真正驯服谁，却又谁也无法离开谁。",
      "bgTheme": "thorn",
      "next": "ending_thorn_057"
    },
    "ending_thorn_057": {
      "chapter": "终章 · 荆棘冠",
      "speaker": "",
      "text": "你们在无数个白日里争锋相对，又在无数个夜晚里相拥亲吻",
      "bgTheme": "thorn",
      "next": "ending_thorn_complete"
    },
    "ending_thorn_complete": {
      "chapter": "终章 · 荆棘冠",
      "bgTheme": "thorn",
      "speaker": "",
      "text": "",
      "ending": "荆棘冠"
    },
    "ending_thorn_intro": {
      "chapter": "终章 · 荆棘冠",
      "chapterIntro": {
        "small": "终章",
        "title": "荆棘冠",
        "next": "ending_thorn_001"
      }
    },
    "ending_joint_001": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "第一缕晨光照进寝殿时，König依然没有睡。他侧撑着头，深邃的眼眸一瞬不瞬地凝视着你沉睡的面容，粗糙的指腹克制、轻柔地描摹着你的眉眼。",
      "bgTheme": "joint",
      "bgm": "ending-joint1.mp3",
      "next": "ending_joint_002"
    },
    "ending_joint_002": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你微微睁开眼，慵懒地将脸颊贴进他宽大温暖的掌心里。",
      "bgTheme": "joint",
      "next": "ending_joint_003"
    },
    "ending_joint_003": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“不去整顿你的军队吗，陛下？”",
      "bgTheme": "joint",
      "next": "ending_joint_004"
    },
    "ending_joint_004": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König低声笑了，胸腔的震动透过相贴的肌肤传来。他低下头，虔诚地吻了吻你的额头。",
      "bgTheme": "joint",
      "next": "ending_joint_005"
    },
    "ending_joint_005": {
      "chapter": "终章 · 共王座",
      "speaker": "König",
      "text": "“我曾经以为，只有碾过帝国的城池，才能将你锁在我身边。”",
      "bgTheme": "joint",
      "next": "ending_joint_006"
    },
    "ending_joint_006": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你抬起手，微凉的指尖穿过他暗红色的发丝。",
      "bgTheme": "joint",
      "next": "ending_joint_007"
    },
    "ending_joint_007": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“你想错了。我会帮你坐上王座，但你得跟我保证，不准滥杀无辜，收起你的疯狗做派。”",
      "bgTheme": "joint",
      "next": "ending_joint_008"
    },
    "ending_joint_008": {
      "chapter": "终章 · 共王座",
      "speaker": "König",
      "text": "“如你所愿，我的爱人。我可以这样说了吗？”",
      "bgTheme": "joint",
      "next": "ending_joint_009"
    },
    "ending_joint_009": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "他将你的手拉到唇边，亲吻你的指尖。",
      "bgTheme": "joint",
      "next": "ending_joint_010"
    },
    "ending_joint_010": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“我说不可以，你就会不说吗？”",
      "bgTheme": "joint",
      "next": "ending_joint_011"
    },
    "ending_joint_011": {
      "chapter": "终章 · 共王座",
      "speaker": "König",
      "text": "“不会。既然你给了我机会，我就再也不会松手。”",
      "bgTheme": "joint",
      "next": "ending_joint_012"
    },
    "ending_joint_012": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "五日后，你穿着一身被荆棘划破、沾着干涸血迹的长裙，倒在了距离帝国边境哨塔不到半里的雪地里，被巡逻的士兵“奇迹般”地救回。",
      "bgTheme": "joint",
      "next": "ending_joint_013"
    },
    "ending_joint_013": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "消息传回王都，整个议事厅彻底沸腾。",
      "bgTheme": "joint",
      "next": "ending_joint_014"
    },
    "ending_joint_014": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "当你乘坐着带有奥古斯都家族家徽的马车，在一队重甲骑兵的护卫下驶入王城大门时，你透过车窗的缝隙，冷冷地注视着这座依然沉浸在虚假繁荣中的腐朽都城。",
      "bgTheme": "joint",
      "next": "ending_joint_015"
    },
    "ending_joint_015": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "最先赶来见你的，是你那位刚刚在议事厅里结束了一场争权夺利、满头大汗的未婚夫。",
      "bgTheme": "joint",
      "next": "ending_joint_016"
    },
    "ending_joint_016": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "当他看到你虚弱地靠在软榻上时，他脸上闪过一丝不明显的诧异，随即又换上了惊喜与深情的表情。",
      "bgTheme": "joint",
      "next": "ending_joint_017"
    },
    "ending_joint_017": {
      "chapter": "终章 · 共王座",
      "speaker": "Leopold",
      "text": "“神明保佑！我的挚爱，你竟然逃出来了！”",
      "bgTheme": "joint",
      "next": "ending_joint_018"
    },
    "ending_joint_018": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "他大步走上前来，想要握住你的手。",
      "bgTheme": "joint",
      "next": "ending_joint_019"
    },
    "ending_joint_019": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你躲了过去，用咳嗽掩饰了眼底深处的厌恶，避开了他的触碰。",
      "bgTheme": "joint",
      "next": "ending_joint_020"
    },
    "ending_joint_020": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“殿下……”",
      "bgTheme": "joint",
      "next": "ending_joint_021"
    },
    "ending_joint_021": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你垂下眼睫，用一种恰到好处的、带着劫后余生般颤抖的嗓音开口。",
      "bgTheme": "joint",
      "next": "ending_joint_022"
    },
    "ending_joint_022": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“我拼死逃回来，是为了将这个交给您。”",
      "bgTheme": "joint",
      "next": "ending_joint_023"
    },
    "ending_joint_023": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你从贴身的暗袋里，掏出了一份沾着血迹的羊皮卷，递了过去。",
      "bgTheme": "joint",
      "next": "ending_joint_024"
    },
    "ending_joint_024": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“这是斯卡兰主力的兵力部署图……”",
      "bgTheme": "joint",
      "next": "ending_joint_025"
    },
    "ending_joint_025": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "Leopold的眼睛瞬间亮得可怕。他甚至没有耐心听你说完，也完全不关心你是怎样拿到的，要付出什么样的代价。他只知道，有了这个，他一定能稳坐王位。",
      "bgTheme": "joint",
      "next": "ending_joint_026"
    },
    "ending_joint_026": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "他一把夺过那份羊皮卷，贪婪地扫视着。",
      "bgTheme": "joint",
      "next": "ending_joint_027"
    },
    "ending_joint_027": {
      "chapter": "终章 · 共王座",
      "speaker": "Leopold",
      "text": "“你简直是整个帝国最聪明勇敢的女人，是我最完美的皇后！”",
      "bgTheme": "joint",
      "next": "ending_joint_028"
    },
    "ending_joint_028": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "Leopold激动得浑身发抖，他将羊皮卷死死捏在手里，眼神狂热。",
      "bgTheme": "joint",
      "next": "ending_joint_029"
    },
    "ending_joint_029": {
      "chapter": "终章 · 共王座",
      "speaker": "Leopold",
      "text": "“有了这个，等我戴上皇冠，我立刻就派兵去把他们全部杀光！”",
      "bgTheme": "joint",
      "next": "ending_joint_030"
    },
    "ending_joint_030": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "看着他这副愚蠢而狂妄的嘴脸，你心底发出一声嗤笑，面上却依然维持着那副虚弱而忠诚的模样。",
      "bgTheme": "joint",
      "next": "ending_joint_031"
    },
    "ending_joint_031": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你很清楚，他根本不会去核实这份地图的真伪，因为他太渴望这场“胜利”了。",
      "bgTheme": "joint",
      "next": "ending_joint_032"
    },
    "ending_joint_032": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "应付完Leopold后，你终于有时间去见你真正在意的人——你的父亲，奥古斯都大公。",
      "bgTheme": "joint",
      "next": "ending_joint_033"
    },
    "ending_joint_033": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "在书房里，他屏退了所有仆从。这位在帝国政坛上屹立了数十年的男人，看着你毫发无损地站在他面前，那双锐利的眼眸里闪过一丝极深的审视。",
      "bgTheme": "joint",
      "next": "ending_joint_034"
    },
    "ending_joint_034": {
      "chapter": "终章 · 共王座",
      "speaker": "奥古斯都大公",
      "text": "“地图是假的。”",
      "bgTheme": "joint",
      "next": "ending_joint_035"
    },
    "ending_joint_035": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "大公看着你，语气笃定。",
      "bgTheme": "joint",
      "next": "ending_joint_036"
    },
    "ending_joint_036": {
      "chapter": "终章 · 共王座",
      "speaker": "奥古斯都大公",
      "text": "“斯卡兰现在的那个国王，不可能犯这种致命的错误。”",
      "bgTheme": "joint",
      "next": "ending_joint_037"
    },
    "ending_joint_037": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“是的，父亲。”",
      "bgTheme": "joint",
      "next": "ending_joint_038"
    },
    "ending_joint_038": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你不再伪装，脊背挺得笔直，眼神里满是奥古斯都家族继承人该有的深沉与野心。",
      "bgTheme": "joint",
      "next": "ending_joint_039"
    },
    "ending_joint_039": {
      "chapter": "终章 · 共王座",
      "speaker": "奥古斯都大公",
      "text": "“你和他达成了交易？”",
      "bgTheme": "joint",
      "next": "ending_joint_040"
    },
    "ending_joint_040": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你摇摇头。",
      "bgTheme": "joint",
      "next": "ending_joint_041"
    },
    "ending_joint_041": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“不是交易，是结盟。”",
      "bgTheme": "joint",
      "next": "ending_joint_042"
    },
    "ending_joint_042": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你向前两步，走到书桌前，直视着你的父亲。",
      "bgTheme": "joint",
      "next": "ending_joint_043"
    },
    "ending_joint_043": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“Leopold是个烂泥扶不上墙的蠢货，他能在战场上抛弃我，就能为了权力而针对奥古斯都家族。帝国已经从根上烂透了，我们需要一个真正能撑起这片大陆的国王。”",
      "bgTheme": "joint",
      "next": "ending_joint_044"
    },
    "ending_joint_044": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你将König的真实身份、他在北境那支不可战胜的军队、以及你们约定的计划，冷静地全盘托出。",
      "bgTheme": "joint",
      "next": "ending_joint_045"
    },
    "ending_joint_045": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“他答应我，奥古斯都的领地与兵权分毫不动，而我，将是这片大陆唯一的王后。”",
      "bgTheme": "joint",
      "next": "ending_joint_046"
    },
    "ending_joint_046": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你双手撑在桌面上，一字一顿地宣告。",
      "bgTheme": "joint",
      "next": "ending_joint_047"
    },
    "ending_joint_047": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“父亲，帝国的王座上换一个人，对我们来说没有任何损失。打开城门，奥古斯都家族将迎来前所未有的全盛时代。”",
      "bgTheme": "joint",
      "next": "ending_joint_048"
    },
    "ending_joint_048": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "他盯着你，良久，他突然发出一阵低沉的笑声。他看着自己亲手教导出来的女儿，眼底满是赞赏与骄傲。",
      "bgTheme": "joint",
      "next": "ending_joint_049"
    },
    "ending_joint_049": {
      "chapter": "终章 · 共王座",
      "speaker": "奥古斯都大公",
      "text": "“不愧是我的女儿。放手去做吧。奥古斯都家族的力量，全凭你调遣。”",
      "bgTheme": "joint",
      "next": "ending_joint_050"
    },
    "ending_joint_050": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "加冕礼前夜。",
      "bgTheme": "joint",
      "next": "ending_joint_051"
    },
    "ending_joint_051": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "午夜时分，你披上一件黑色斗篷，从奥古斯都府邸的侧门离开。",
      "bgTheme": "joint",
      "next": "ending_joint_052"
    },
    "ending_joint_052": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你赶往王都的主城门。今夜轮值的将领，来自奥古斯都家族。",
      "bgTheme": "joint",
      "next": "ending_joint_053"
    },
    "ending_joint_053": {
      "chapter": "终章 · 共王座",
      "speaker": "守城将领",
      "text": "“{{playerName}}小姐？”",
      "bgTheme": "joint",
      "next": "ending_joint_054"
    },
    "ending_joint_054": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "守城将领匆匆从塔楼下来，神色有些紧张。他看了一眼你身后空无一人的街道，又抬头看向漆黑的城外。",
      "bgTheme": "joint",
      "next": "ending_joint_055"
    },
    "ending_joint_055": {
      "chapter": "终章 · 共王座",
      "speaker": "守城将领",
      "text": "“您怎么来了？”",
      "bgTheme": "joint",
      "next": "ending_joint_056"
    },
    "ending_joint_056": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“父亲没有告诉你吗？”",
      "bgTheme": "joint",
      "next": "ending_joint_057"
    },
    "ending_joint_057": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "男人的脸色微微一变。片刻后，他低下头。",
      "bgTheme": "joint",
      "next": "ending_joint_058"
    },
    "ending_joint_058": {
      "chapter": "终章 · 共王座",
      "speaker": "守城将领",
      "text": "“公爵大人只告诉我，今晚无论您下达什么命令，都等同于他的命令。”",
      "bgTheme": "joint",
      "next": "ending_joint_059"
    },
    "ending_joint_059": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“很好。”",
      "bgTheme": "joint",
      "next": "ending_joint_060"
    },
    "ending_joint_060": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你抬起眼，看向那扇紧闭的城门。",
      "bgTheme": "joint",
      "next": "ending_joint_061"
    },
    "ending_joint_061": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“那就打开它。”",
      "bgTheme": "joint",
      "next": "ending_joint_062"
    },
    "ending_joint_062": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "他并未质疑你的命令，转身吩咐下去。沉重的锁链开始转动，齿轮发出令人牙酸的摩擦声，巨大的铁栓被一点点抽出。驻守在城墙上的士兵面面相觑，却没有一个人阻止。",
      "bgTheme": "joint",
      "next": "ending_joint_063"
    },
    "ending_joint_063": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "因为今夜负责看守城门的每一个军官，都来自奥古斯都的领地。",
      "bgTheme": "joint",
      "next": "ending_joint_064"
    },
    "ending_joint_064": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "厚重的城门缓缓向两侧开启，寒风裹着大雪灌入城内。",
      "bgTheme": "joint",
      "next": "ending_joint_065"
    },
    "ending_joint_065": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "城外漆黑一片，那支不久前让帝国军队溃败的斯卡兰军队，就站在那片黑暗里。",
      "bgTheme": "joint",
      "next": "ending_joint_066"
    },
    "ending_joint_066": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "而在最前方，你看见了那个熟悉的身影。",
      "bgTheme": "joint",
      "next": "ending_joint_067"
    },
    "ending_joint_067": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König骑在那匹黑色战马上，暗红色的长发被风吹得有些凌乱，半张脸隐没在夜色里。",
      "bgTheme": "joint",
      "next": "ending_joint_068"
    },
    "ending_joint_068": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "这一夜，可以说是没有发生真正意义上的战争，平民百姓们并不知道在他们睡梦时，这座王城已经换了主人。",
      "bgTheme": "joint",
      "next": "ending_joint_069"
    },
    "ending_joint_069": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "奥古斯都家族控制的军队率先倒戈。",
      "bgTheme": "joint",
      "next": "ending_joint_070"
    },
    "ending_joint_070": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "那些高高在上的贵族们，在得知斯卡兰军队已经进入王城时，一个比一个投降得快。",
      "bgTheme": "joint",
      "next": "ending_joint_071"
    },
    "ending_joint_071": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "毕竟自己的性命才是更重要的。",
      "bgTheme": "joint",
      "next": "ending_joint_072"
    },
    "ending_joint_072": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你并没有去见Leopold的最后一面，只是在大公府中等待着König的捷报。",
      "bgTheme": "joint",
      "next": "ending_joint_073"
    },
    "ending_joint_073": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "第二天清晨，王都的钟声依旧准时响起，只是等待加冕的人换了一个。",
      "bgTheme": "joint",
      "next": "ending_joint_074",
      "bgm": "ending-joint2.mp3"
    },
    "ending_joint_074": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "昨日还悬挂着皇室徽章的旗帜被全部撤下，取而代之的是斯卡兰的黑狼旗帜，以及奥古斯都家族的银白鸢尾纹章。",
      "bgTheme": "joint",
      "next": "ending_joint_075"
    },
    "ending_joint_075": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "教堂里坐满了人，全是已经倒向König的贵族们，一个个穿戴得比谁都正式。",
      "bgTheme": "joint",
      "next": "ending_joint_076"
    },
    "ending_joint_076": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "当沉重的大门打开时，整座教堂安静得落针可闻。",
      "bgTheme": "joint",
      "next": "ending_joint_077"
    },
    "ending_joint_077": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König牵着你的手，一步步走向主教。",
      "bgTheme": "joint",
      "next": "ending_joint_078"
    },
    "ending_joint_078": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "走到最后一级台阶前时，他停下脚步。",
      "bgTheme": "joint",
      "next": "ending_joint_079"
    },
    "ending_joint_079": {
      "chapter": "终章 · 共王座",
      "speaker": "König",
      "text": "“后悔吗？”",
      "bgTheme": "joint",
      "next": "ending_joint_080"
    },
    "ending_joint_080": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "偌大的教堂里站着许多人，可他的目光自始至终都只落在你一个人身上。",
      "bgTheme": "joint",
      "next": "ending_joint_081"
    },
    "ending_joint_081": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“我做决定从不后悔。”",
      "bgTheme": "joint",
      "next": "ending_joint_082"
    },
    "ending_joint_082": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "主教将那顶象征着整个帝国最高权力的王冠高高举起。",
      "bgTheme": "joint",
      "next": "ending_joint_083"
    },
    "ending_joint_083": {
      "chapter": "终章 · 共王座",
      "speaker": "主教",
      "text": "“以神明与这片土地的名义——”",
      "bgTheme": "joint",
      "next": "ending_joint_084"
    },
    "ending_joint_084": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "古老而冗长的祷词回荡在教堂穹顶。",
      "bgTheme": "joint",
      "next": "ending_joint_085"
    },
    "ending_joint_085": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König微微俯首，王冠缓缓落在他的头顶。",
      "bgTheme": "joint",
      "next": "ending_joint_086"
    },
    "ending_joint_086": {
      "chapter": "终章 · 共王座",
      "speaker": "主教",
      "text": "“我在此加冕你为这片土地唯一的君主。”",
      "bgTheme": "joint",
      "next": "ending_joint_087"
    },
    "ending_joint_087": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "钟声响起。所有贵族同时起身，随后跪下。",
      "bgTheme": "joint",
      "next": "ending_joint_088"
    },
    "ending_joint_088": {
      "chapter": "终章 · 共王座",
      "speaker": "众人",
      "text": "“吾王万岁——”",
      "bgTheme": "joint",
      "next": "ending_joint_089"
    },
    "ending_joint_089": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "声音一层层传出教堂，又从广场上传向整座王都。",
      "bgTheme": "joint",
      "next": "ending_joint_090"
    },
    "ending_joint_090": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König却并未走向属于他的王座，而是拿起了王后的冠冕。",
      "bgTheme": "joint",
      "next": "ending_joint_091"
    },
    "ending_joint_091": {
      "chapter": "终章 · 共王座",
      "speaker": "{{playerName}}",
      "text": "“这似乎不符合礼仪。”",
      "bgTheme": "joint",
      "next": "ending_joint_092"
    },
    "ending_joint_092": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "你也有些没想到。",
      "bgTheme": "joint",
      "next": "ending_joint_093"
    },
    "ending_joint_093": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "按照原本的仪式，王后应当半跪接受主教的加冕。",
      "bgTheme": "joint",
      "next": "ending_joint_094"
    },
    "ending_joint_094": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König笑了笑，径直走到你面前。然后，在所有人的注视下，他替你戴上后冠。",
      "bgTheme": "joint",
      "next": "ending_joint_095"
    },
    "ending_joint_095": {
      "chapter": "终章 · 共王座",
      "speaker": "König",
      "text": "“什么礼仪敢让你跪？”",
      "bgTheme": "joint",
      "next": "ending_joint_096"
    },
    "ending_joint_096": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "König再次牵住你的手，十指紧扣。随后，他带着你一起转身。",
      "bgTheme": "joint",
      "next": "ending_joint_097"
    },
    "ending_joint_097": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "教堂之下，贵族俯首。广场之外，万民跪拜。王都的钟声响彻云霄。",
      "bgTheme": "joint",
      "next": "ending_joint_098"
    },
    "ending_joint_098": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "很多年以后，史官用无数华丽的辞藻记录这个时代。",
      "bgTheme": "joint",
      "next": "ending_joint_099"
    },
    "ending_joint_099": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "他们会写旧帝国如何在一夜之间覆灭，写新王朝是如何走向鼎盛，写国王与他的王后是怎样恩爱。",
      "bgTheme": "joint",
      "next": "ending_joint_100"
    },
    "ending_joint_100": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "但他们永远不会知道，真正决定这个帝国命运的时刻，并不是王冠落在König头顶的那一刻。",
      "bgTheme": "joint",
      "next": "ending_joint_101"
    },
    "ending_joint_101": {
      "chapter": "终章 · 共王座",
      "speaker": "",
      "text": "而是当初你和他相遇的那一秒。",
      "bgTheme": "joint",
      "next": "ending_joint_complete"
    },
    "ending_joint_complete": {
      "chapter": "终章 · 共王座",
      "bgTheme": "joint",
      "speaker": "",
      "text": "",
      "ending": "共王座"
    },
    "ending_joint_intro": {
      "chapter": "终章 · 共王座",
      "chapterIntro": {
        "small": "终章",
        "title": "共王座",
        "next": "ending_joint_001"
      }
    },
    "ending_iris_001": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你睁开眼时，看到的就是König撑着脑袋盯着你。他暗红色的发丝凌乱地垂落在额前，充满爱意的眼神简直要把你盯出个洞来。昨夜被你亲吻过的那些旧伤，此刻还残留着若有似无的痕迹。",
      "bgTheme": "iris",
      "bgm": "ending-iris1.mp3",
      "next": "ending_iris_002"
    },
    "ending_iris_002": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你在他怀里睁开眼睛，伸手抚上他的脸。",
      "bgTheme": "iris",
      "next": "ending_iris_003"
    },
    "ending_iris_003": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“什么时候送我回去？”",
      "bgTheme": "iris",
      "next": "ending_iris_004"
    },
    "ending_iris_004": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König的动作顿了一下。",
      "bgTheme": "iris",
      "next": "ending_iris_005"
    },
    "ending_iris_005": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他显然并不喜欢听到这句话，哪怕昨晚已经同意了你的计划，环在你腰间的手臂还是下意识地收紧了几分。",
      "bgTheme": "iris",
      "next": "ending_iris_006"
    },
    "ending_iris_006": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“你要不要再考虑一下。”",
      "bgTheme": "iris",
      "next": "ending_iris_007"
    },
    "ending_iris_007": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他低下头，鼻尖轻轻蹭过你的额角。",
      "bgTheme": "iris",
      "next": "ending_iris_008"
    },
    "ending_iris_008": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“我直接带人杀进王都，也一样可以把王冠送到你手上。”",
      "bgTheme": "iris",
      "next": "ending_iris_009"
    },
    "ending_iris_009": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你抬起眼看他。",
      "bgTheme": "iris",
      "next": "ending_iris_010"
    },
    "ending_iris_010": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“然后呢？让全帝国的人都觉得我是靠斯卡兰军队扶上王座的傀儡？”",
      "bgTheme": "iris",
      "next": "ending_iris_011"
    },
    "ending_iris_011": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König没有说话。",
      "bgTheme": "iris",
      "next": "ending_iris_012"
    },
    "ending_iris_012": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你漫不经心地捏了捏他的下巴，又扯着他的嘴角，让他笑一笑。",
      "bgTheme": "iris",
      "next": "ending_iris_013"
    },
    "ending_iris_013": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“别丧着个脸。难道你不相信我吗？”",
      "bgTheme": "iris",
      "next": "ending_iris_014"
    },
    "ending_iris_014": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他沉默了片刻，最后低低地笑了一声，将你的手拉到唇边亲吻。",
      "bgTheme": "iris",
      "next": "ending_iris_015"
    },
    "ending_iris_015": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“怎么可能，我只是舍不得。但……一切都听您的。”",
      "bgTheme": "iris",
      "next": "ending_iris_016"
    },
    "ending_iris_016": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“我的女王陛下。”",
      "bgTheme": "iris",
      "next": "ending_iris_017"
    },
    "ending_iris_017": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "五日后，你穿着一身破破烂烂的长裙，倒在了距离帝国边境哨塔不到半里的雪地里，被巡逻的士兵“奇迹般”地救了回来。",
      "bgTheme": "iris",
      "next": "ending_iris_018",
      "bgm": "ending-iris2.mp3"
    },
    "ending_iris_018": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "消息传开以后，整个议事厅彻底沸腾。",
      "bgTheme": "iris",
      "next": "ending_iris_019"
    },
    "ending_iris_019": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "当印着奥古斯都家族银白鸢尾花纹章的马车驶入王城时，街道两侧挤满了闻讯赶来的民众。所有人都在惊叹你竟然能从那群北境蛮族手中死里逃生。",
      "bgTheme": "iris",
      "next": "ending_iris_020"
    },
    "ending_iris_020": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你稍稍探出头去，和百姓们微笑致意。毕竟，这以后可都是你的子民。",
      "bgTheme": "iris",
      "next": "ending_iris_021"
    },
    "ending_iris_021": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "最先赶来见你的，是Leopold。",
      "bgTheme": "iris",
      "next": "ending_iris_022"
    },
    "ending_iris_022": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "当他看到你虚弱地靠在软榻上时，脸上闪过一丝极淡的诧异，随后立刻换上了一副深情模样。",
      "bgTheme": "iris",
      "next": "ending_iris_023"
    },
    "ending_iris_023": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“神明保佑！我的挚爱，你竟然真的逃出来了！”",
      "bgTheme": "iris",
      "next": "ending_iris_024"
    },
    "ending_iris_024": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他说着便大步走上前，伸手想要握住你的手。",
      "bgTheme": "iris",
      "next": "ending_iris_025"
    },
    "ending_iris_025": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你低下头咳嗽了两声，不动声色地避开他的触碰，随后从贴身的暗袋里拿出那份羊皮卷。",
      "bgTheme": "iris",
      "next": "ending_iris_026"
    },
    "ending_iris_026": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“殿下，我拼死逃回来，是为了把这个交给您。”",
      "bgTheme": "iris",
      "next": "ending_iris_027"
    },
    "ending_iris_027": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "Leopold的目光落在那份地图上的瞬间，神情一下变了。",
      "bgTheme": "iris",
      "next": "ending_iris_028"
    },
    "ending_iris_028": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“这是……”",
      "bgTheme": "iris",
      "next": "ending_iris_029"
    },
    "ending_iris_029": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“斯卡兰主力的兵力部署图。”",
      "bgTheme": "iris",
      "next": "ending_iris_030"
    },
    "ending_iris_030": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你将羊皮卷递过去，声音依旧虚弱。",
      "bgTheme": "iris",
      "next": "ending_iris_031"
    },
    "ending_iris_031": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我被关押期间，趁他们守卫松懈的时候拿到的。”",
      "bgTheme": "iris",
      "next": "ending_iris_032"
    },
    "ending_iris_032": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "Leopold一把接了过去。",
      "bgTheme": "iris",
      "next": "ending_iris_033"
    },
    "ending_iris_033": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "如你所料，他根本没有怀疑。他没有问你是怎么逃出来的，也没有问你究竟受了多少伤，只是迫不及待地展开地图，贪婪地扫视着上面的标记。",
      "bgTheme": "iris",
      "next": "ending_iris_034"
    },
    "ending_iris_034": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“你简直是整个帝国最聪明勇敢的女人！”",
      "bgTheme": "iris",
      "next": "ending_iris_035"
    },
    "ending_iris_035": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他激动得满脸通红。",
      "bgTheme": "iris",
      "next": "ending_iris_036"
    },
    "ending_iris_036": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“有了这个，等我完成加冕，我立刻就能重新整顿军队。到时候，我一定亲自带兵踏平斯卡兰，把那些蛮族全部杀光！”",
      "bgTheme": "iris",
      "next": "ending_iris_037"
    },
    "ending_iris_037": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你安静地看着他。",
      "bgTheme": "iris",
      "next": "ending_iris_038"
    },
    "ending_iris_038": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "曾经你或许还会因为他的愚蠢而感到愤怒，但现在，你只是觉得可笑。",
      "bgTheme": "iris",
      "next": "ending_iris_039"
    },
    "ending_iris_039": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "这样一个人，竟然仅仅因为出生时是个男人，和所谓的血脉，就理所当然地被所有人认为，他可以统治这个国家。",
      "bgTheme": "iris",
      "next": "ending_iris_040"
    },
    "ending_iris_040": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“那就提前恭喜您了，殿下。”",
      "bgTheme": "iris",
      "next": "ending_iris_041"
    },
    "ending_iris_041": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你垂下眼睫，遮住眼底的冷意。",
      "bgTheme": "iris",
      "next": "ending_iris_042"
    },
    "ending_iris_042": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "应付完Leopold以后，你终于回到了奥古斯都府邸。",
      "bgTheme": "iris",
      "next": "ending_iris_043"
    },
    "ending_iris_043": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "书房的门刚刚关上，父亲便挥手让所有侍从退了出去。他坐在书桌后，沉默地看了你很久。",
      "bgTheme": "iris",
      "next": "ending_iris_044"
    },
    "ending_iris_044": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“地图是假的。斯卡兰的国王，不可能蠢到让真正的兵力部署图落到一个帝国俘虏手里。”",
      "bgTheme": "iris",
      "next": "ending_iris_045"
    },
    "ending_iris_045": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他的语气很笃定。",
      "bgTheme": "iris",
      "next": "ending_iris_046"
    },
    "ending_iris_046": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“是的，父亲。”",
      "bgTheme": "iris",
      "next": "ending_iris_047"
    },
    "ending_iris_047": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你没有隐瞒。",
      "bgTheme": "iris",
      "next": "ending_iris_048"
    },
    "ending_iris_048": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“所以传闻是真的。那个人是König。”",
      "bgTheme": "iris",
      "next": "ending_iris_049"
    },
    "ending_iris_049": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我不知道您从哪里得到的传闻。但是，斯卡兰国王确实是König。”",
      "bgTheme": "iris",
      "next": "ending_iris_050"
    },
    "ending_iris_050": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你微微挑眉，走到书桌前，直视着这个在帝国政坛上屹立了数十年的男人，你的父亲。",
      "bgTheme": "iris",
      "next": "ending_iris_051"
    },
    "ending_iris_051": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“所以，你准备扶他坐上帝国的王座？”",
      "bgTheme": "iris",
      "next": "ending_iris_052"
    },
    "ending_iris_052": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“不。”",
      "bgTheme": "iris",
      "next": "ending_iris_053"
    },
    "ending_iris_053": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你回答得没有一丝犹豫。",
      "bgTheme": "iris",
      "next": "ending_iris_054"
    },
    "ending_iris_054": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他的表情不再平静，显然没有理解你的意图。",
      "bgTheme": "iris",
      "next": "ending_iris_055"
    },
    "ending_iris_055": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“父亲，我从小接受和Leopold一样的教育。政治、财税、历史、外交，我没有任何一样比他差。”",
      "bgTheme": "iris",
      "next": "ending_iris_056"
    },
    "ending_iris_056": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“甚至因为我是未来的王储妃，我还必须比他更懂得贵族之间的利益关系，更擅长维护家族与王室之间的平衡。”",
      "bgTheme": "iris",
      "next": "ending_iris_057"
    },
    "ending_iris_057": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“可所有人都默认，我学这些东西，只是为了有朝一日成为一个合格的王后。”",
      "bgTheme": "iris",
      "next": "ending_iris_058"
    },
    "ending_iris_058": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你的手指轻轻划过书桌上的帝国地图，随即又将手掌整个压在上面。",
      "bgTheme": "iris",
      "next": "ending_iris_059"
    },
    "ending_iris_059": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“凭什么？”",
      "bgTheme": "iris",
      "next": "ending_iris_060"
    },
    "ending_iris_060": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“Leopold可以一出生就拥有整个帝国，而我明明比他聪明，比他清醒，却只能等待他赐给我一个后位。”",
      "bgTheme": "iris",
      "next": "ending_iris_061"
    },
    "ending_iris_061": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你冷冷地勾起嘴角。",
      "bgTheme": "iris",
      "next": "ending_iris_062"
    },
    "ending_iris_062": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我不接受。”",
      "bgTheme": "iris",
      "next": "ending_iris_063"
    },
    "ending_iris_063": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我要的从来都不是王后的冠冕。”",
      "bgTheme": "iris",
      "next": "ending_iris_064"
    },
    "ending_iris_064": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我要的是那个王座。”",
      "bgTheme": "iris",
      "next": "ending_iris_065"
    },
    "ending_iris_065": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "父亲久久没有说话。只剩壁炉里的木柴烧得噼啪作响。",
      "bgTheme": "iris",
      "next": "ending_iris_066"
    },
    "ending_iris_066": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“那König呢？”",
      "bgTheme": "iris",
      "next": "ending_iris_067"
    },
    "ending_iris_067": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他终于开口。",
      "bgTheme": "iris",
      "next": "ending_iris_068"
    },
    "ending_iris_068": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“他现在已经是斯卡兰的王，也有足以攻破王都的军队。他凭什么愿意把帝国交到你手里？”",
      "bgTheme": "iris",
      "next": "ending_iris_069"
    },
    "ending_iris_069": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你想到他，不自觉地稍微勾了一下唇角。",
      "bgTheme": "iris",
      "next": "ending_iris_070"
    },
    "ending_iris_070": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“因为这是我们的约定。”",
      "bgTheme": "iris",
      "next": "ending_iris_071"
    },
    "ending_iris_071": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“König会替我拿下王城，奥古斯都家族则从内部配合他。作为交换，斯卡兰与帝国之间持续多年的战争会彻底结束，这对他只有益处。”",
      "bgTheme": "iris",
      "next": "ending_iris_072"
    },
    "ending_iris_072": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你顿了顿。",
      "bgTheme": "iris",
      "next": "ending_iris_073"
    },
    "ending_iris_073": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“而他，会成为我手里最锋利的剑。我从不认为，借助他的力量是我软弱的表现。相反，能让他为我所用，是我的能力。”",
      "bgTheme": "iris",
      "next": "ending_iris_074"
    },
    "ending_iris_074": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "父亲敏锐地捕捉到了你刚才那一点细微的笑意。",
      "bgTheme": "iris",
      "next": "ending_iris_075"
    },
    "ending_iris_075": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“最锋利的剑？”",
      "bgTheme": "iris",
      "next": "ending_iris_076"
    },
    "ending_iris_076": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“父亲，这不是重点。”",
      "bgTheme": "iris",
      "next": "ending_iris_077"
    },
    "ending_iris_077": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他忽然哈哈大笑。他从书桌后站起来，走到你面前，他拍拍你的肩膀看着你。他的眼神很复杂，又像是父亲看着女儿，又像是政客看着他的接班人",
      "bgTheme": "iris",
      "next": "ending_iris_078"
    },
    "ending_iris_078": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“我一直以为，你最大的野心是成为这个帝国最有权势的王后。”",
      "bgTheme": "iris",
      "next": "ending_iris_079"
    },
    "ending_iris_079": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“看来，是我小看自己的女儿了。”",
      "bgTheme": "iris",
      "next": "ending_iris_080"
    },
    "ending_iris_080": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你微微扬起下巴。",
      "bgTheme": "iris",
      "next": "ending_iris_081"
    },
    "ending_iris_081": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“父亲，你不该小看我的。”",
      "bgTheme": "iris",
      "next": "ending_iris_082"
    },
    "ending_iris_082": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "奥古斯都大公",
      "text": "“放手去做吧。奥古斯都家族的军队、财富，还有这些年来经营下来的人脉，从今晚开始，全凭你调遣。”",
      "bgTheme": "iris",
      "next": "ending_iris_083"
    },
    "ending_iris_083": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "加冕典礼前的午夜时分，你披上一件黑色斗篷，从奥古斯都府邸的侧门离开。",
      "bgTheme": "iris",
      "next": "ending_iris_084"
    },
    "ending_iris_084": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你赶到主城门时，今夜轮值的将领已经在那里等候多时。",
      "bgTheme": "iris",
      "next": "ending_iris_085"
    },
    "ending_iris_085": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "守城将领",
      "text": "“{{playerName}}小姐。”",
      "bgTheme": "iris",
      "next": "ending_iris_086"
    },
    "ending_iris_086": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他匆匆从塔楼上下来。",
      "bgTheme": "iris",
      "next": "ending_iris_087"
    },
    "ending_iris_087": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "守城将领",
      "text": "“公爵大人已经通知我了，今晚无论您下达什么命令，都等同于他的命令。”",
      "bgTheme": "iris",
      "next": "ending_iris_088"
    },
    "ending_iris_088": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“很好。”",
      "bgTheme": "iris",
      "next": "ending_iris_089"
    },
    "ending_iris_089": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你抬起眼，看向那扇紧闭的城门。",
      "bgTheme": "iris",
      "next": "ending_iris_090"
    },
    "ending_iris_090": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“那就打开它。”",
      "bgTheme": "iris",
      "next": "ending_iris_091"
    },
    "ending_iris_091": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "沉重的锁链开始转动，巨大的铁栓被一点点抽出。驻守在城墙上的士兵面面相觑，却没有一个人阻止。",
      "bgTheme": "iris",
      "next": "ending_iris_092"
    },
    "ending_iris_092": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "因为今夜控制着这座城门的所有军官，都来自奥古斯都家族。",
      "bgTheme": "iris",
      "next": "ending_iris_093"
    },
    "ending_iris_093": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "随着厚重的城门缓缓向两侧开启，刺骨的寒风卷着大雪灌进城内。",
      "bgTheme": "iris",
      "next": "ending_iris_094"
    },
    "ending_iris_094": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "城外漆黑一片。",
      "bgTheme": "iris",
      "next": "ending_iris_095"
    },
    "ending_iris_095": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "下一秒，那片黑暗开始移动。",
      "bgTheme": "iris",
      "next": "ending_iris_096"
    },
    "ending_iris_096": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "无数披着黑色盔甲的斯卡兰骑兵静静地站在雪地里，而在最前方，你看见了那个熟悉的身影。",
      "bgTheme": "iris",
      "next": "ending_iris_097"
    },
    "ending_iris_097": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König翻身下马，朝你走来。",
      "bgTheme": "iris",
      "next": "ending_iris_098"
    },
    "ending_iris_098": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他暗红色的头发被风雪吹得有些凌乱。",
      "bgTheme": "iris",
      "next": "ending_iris_099"
    },
    "ending_iris_099": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“好久不见，{{playerName}}小姐。”",
      "bgTheme": "iris",
      "next": "ending_iris_100"
    },
    "ending_iris_100": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“才几天而已。”",
      "bgTheme": "iris",
      "next": "ending_iris_101"
    },
    "ending_iris_101": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“我太想您了。您真的不再考虑一下和我回斯卡兰吗？”",
      "bgTheme": "iris",
      "next": "ending_iris_102"
    },
    "ending_iris_102": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“然后做你的王后？”",
      "bgTheme": "iris",
      "next": "ending_iris_103"
    },
    "ending_iris_103": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König竟然真的认真思考了一下。",
      "bgTheme": "iris",
      "next": "ending_iris_104"
    },
    "ending_iris_104": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“如果您愿意的话。”",
      "bgTheme": "iris",
      "next": "ending_iris_105"
    },
    "ending_iris_105": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你冷笑了一声。",
      "bgTheme": "iris",
      "next": "ending_iris_106"
    },
    "ending_iris_106": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“做梦。”",
      "bgTheme": "iris",
      "next": "ending_iris_107"
    },
    "ending_iris_107": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“进城。”",
      "bgTheme": "iris",
      "next": "ending_iris_108"
    },
    "ending_iris_108": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König笑了下，握住你的手，低下头，在你的指节上落下一吻。",
      "bgTheme": "iris",
      "next": "ending_iris_109"
    },
    "ending_iris_109": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“遵命，我的女王陛下。”",
      "bgTheme": "iris",
      "next": "ending_iris_110"
    },
    "ending_iris_110": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "这一夜，并没有发生真正意义上的战争。",
      "bgTheme": "iris",
      "next": "ending_iris_111"
    },
    "ending_iris_111": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "奥古斯都家族控制的军队率先倒戈，王城的粮仓、军械库、议事厅与几处最重要的城防节点很快便全部落入你们手中。",
      "bgTheme": "iris",
      "next": "ending_iris_112"
    },
    "ending_iris_112": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "那些平日里最喜欢把忠诚挂在嘴边的贵族，在得知斯卡兰军队已经进入王城，而奥古斯都家族又明确倒戈后，一个比一个投降得快。",
      "bgTheme": "iris",
      "next": "ending_iris_113"
    },
    "ending_iris_113": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "最后，你们在王宫偏殿见到Leopold。",
      "bgTheme": "iris",
      "next": "ending_iris_114"
    },
    "ending_iris_114": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "昨日还在满心期待自己加冕典礼的王储，此刻衣冠凌乱地跪在地上，被两名斯卡兰士兵死死按住肩膀。",
      "bgTheme": "iris",
      "next": "ending_iris_115"
    },
    "ending_iris_115": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他看到你的那一刻，脸上的血色瞬间褪尽。",
      "bgTheme": "iris",
      "next": "ending_iris_116"
    },
    "ending_iris_116": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“你……”",
      "bgTheme": "iris",
      "next": "ending_iris_117"
    },
    "ending_iris_117": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "随后，他看见了站在你身边的König。",
      "bgTheme": "iris",
      "next": "ending_iris_118"
    },
    "ending_iris_118": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“是你？！”",
      "bgTheme": "iris",
      "next": "ending_iris_119"
    },
    "ending_iris_119": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König缓缓将手搭上剑柄。",
      "bgTheme": "iris",
      "next": "ending_iris_120"
    },
    "ending_iris_120": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你几乎立刻感觉到了他身上骤然翻涌起来的杀意。",
      "bgTheme": "iris",
      "next": "ending_iris_121"
    },
    "ending_iris_121": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他等待这一刻，大概已经等待了很多年。",
      "bgTheme": "iris",
      "next": "ending_iris_122"
    },
    "ending_iris_122": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "然而长剑真正出鞘之前，他却停下了动作。König偏过头，看向你，像是在等你的决定。",
      "bgTheme": "iris",
      "next": "ending_iris_123"
    },
    "ending_iris_123": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你安抚地拍拍他紧绷的手背。",
      "bgTheme": "iris",
      "next": "ending_iris_124"
    },
    "ending_iris_124": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“Leopold……”",
      "bgTheme": "iris",
      "next": "ending_iris_125"
    },
    "ending_iris_125": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“你背叛我！”",
      "bgTheme": "iris",
      "next": "ending_iris_126"
    },
    "ending_iris_126": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“背叛？“",
      "bgTheme": "iris",
      "next": "ending_iris_127"
    },
    "ending_iris_127": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你忍不住笑了。",
      "bgTheme": "iris",
      "next": "ending_iris_128"
    },
    "ending_iris_128": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“殿下是不是忘了，是谁在战场上把我丢下的？”",
      "bgTheme": "iris",
      "next": "ending_iris_129"
    },
    "ending_iris_129": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "Leopold张了张嘴。",
      "bgTheme": "iris",
      "next": "ending_iris_130"
    },
    "ending_iris_130": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "Leopold",
      "text": "“那只是为了帝国——”",
      "bgTheme": "iris",
      "next": "ending_iris_131"
    },
    "ending_iris_131": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“别说得这么好听。”",
      "bgTheme": "iris",
      "next": "ending_iris_132"
    },
    "ending_iris_132": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你打断了他。",
      "bgTheme": "iris",
      "next": "ending_iris_133"
    },
    "ending_iris_133": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“你以为我不知道吗？如果我死在斯卡兰手里，你既可以摆脱奥古斯都家族，又可以用我的死激怒父亲，让他替你继续打仗。”",
      "bgTheme": "iris",
      "next": "ending_iris_134"
    },
    "ending_iris_134": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“可惜。”",
      "bgTheme": "iris",
      "next": "ending_iris_135"
    },
    "ending_iris_135": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我活着回来了。”",
      "bgTheme": "iris",
      "next": "ending_iris_136"
    },
    "ending_iris_136": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他剧烈地挣扎，想甩开压着他的斯卡兰士兵的控制。",
      "bgTheme": "iris",
      "next": "ending_iris_137"
    },
    "ending_iris_137": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König直接拔出佩剑，架在了他的脖子上，他才安静下来。",
      "bgTheme": "iris",
      "next": "ending_iris_138"
    },
    "ending_iris_138": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你让König收回剑。",
      "bgTheme": "iris",
      "next": "ending_iris_139"
    },
    "ending_iris_139": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“北境战败、临阵脱逃、抛弃随军贵族，再把他以前那些挪用军费之类的旧账全部翻出来。”",
      "bgTheme": "iris",
      "next": "ending_iris_140"
    },
    "ending_iris_140": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“丢给审判庭吧。该怎么判，就怎么判。”",
      "bgTheme": "iris",
      "next": "ending_iris_141"
    },
    "ending_iris_141": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我们回去，嗯？”",
      "bgTheme": "iris",
      "next": "ending_iris_142"
    },
    "ending_iris_142": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König沉默了一会，最终，他松开了握着剑柄的手。",
      "bgTheme": "iris",
      "next": "ending_iris_143"
    },
    "ending_iris_143": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“听见了吗？”",
      "bgTheme": "iris",
      "next": "ending_iris_144"
    },
    "ending_iris_144": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他垂下眼，看着脸色惨白的Leopold。",
      "bgTheme": "iris",
      "next": "ending_iris_145"
    },
    "ending_iris_145": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“你最好感谢她。”",
      "bgTheme": "iris",
      "next": "ending_iris_146"
    },
    "ending_iris_146": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“如果今天做决定的人是我，你已经没有机会看见明天的太阳了。”",
      "bgTheme": "iris",
      "next": "ending_iris_147"
    },
    "ending_iris_147": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "士兵很快将挣扎咒骂的Leopold拖了出去。",
      "bgTheme": "iris",
      "next": "ending_iris_148"
    },
    "ending_iris_148": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你这才看向König。",
      "bgTheme": "iris",
      "next": "ending_iris_149"
    },
    "ending_iris_149": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他有些委屈地开口。",
      "bgTheme": "iris",
      "next": "ending_iris_150"
    },
    "ending_iris_150": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“你舍不得吗？”",
      "bgTheme": "iris",
      "next": "ending_iris_151"
    },
    "ending_iris_151": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你毫不犹豫地一巴掌拍在他脑门上。",
      "bgTheme": "iris",
      "next": "ending_iris_152"
    },
    "ending_iris_152": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“你在说什么鬼话。脑子清醒点，走了。”",
      "bgTheme": "iris",
      "next": "ending_iris_153"
    },
    "ending_iris_153": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你不等他，直接迈步离开。",
      "bgTheme": "iris",
      "next": "ending_iris_154"
    },
    "ending_iris_154": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König低笑了一声，跨步追上你，又偷偷伸手勾住你的手指，和你并肩一起走。",
      "bgTheme": "iris",
      "next": "ending_iris_155"
    },
    "ending_iris_155": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "第二日清晨，原本为Leopold准备的加冕典礼依旧如期举行。",
      "bgTheme": "iris",
      "next": "ending_iris_156",
      "bgm": "ending-iris3.mp3"
    },
    "ending_iris_156": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "当教堂沉重的大门打开时，坐在两侧的贵族几乎同时安静下来。",
      "bgTheme": "iris",
      "next": "ending_iris_157"
    },
    "ending_iris_157": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你没有穿那身早已为王储妃准备好的白色礼裙，而是换上了一袭庄重华丽的深色长裙。长长的裙摆上用银线绣着大片盛放的鸢尾花，胸前佩戴着奥古斯都家族的纹章。",
      "bgTheme": "iris",
      "next": "ending_iris_158"
    },
    "ending_iris_158": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König走在你的身后半步。",
      "bgTheme": "iris",
      "next": "ending_iris_159"
    },
    "ending_iris_159": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "再之后，是奥古斯都大公、斯卡兰的将领，以及昨夜已经向你宣誓效忠的帝国贵族。",
      "bgTheme": "iris",
      "next": "ending_iris_160"
    },
    "ending_iris_160": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "主教站在圣坛前，看着你一步一步向他走来，脸上的表情明显有些僵硬。",
      "bgTheme": "iris",
      "next": "ending_iris_161"
    },
    "ending_iris_161": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "主教",
      "text": "“{{playerName}}小姐，按照帝国历代的继承法，王位应当由拥有王室血统的男性……”",
      "bgTheme": "iris",
      "next": "ending_iris_162"
    },
    "ending_iris_162": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“帝国历代的继承法？”",
      "bgTheme": "iris",
      "next": "ending_iris_163"
    },
    "ending_iris_163": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你停下脚步。",
      "bgTheme": "iris",
      "next": "ending_iris_164"
    },
    "ending_iris_164": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“您说的是那个刚刚被赶下王位的旧王室制定的规矩吗？”",
      "bgTheme": "iris",
      "next": "ending_iris_165"
    },
    "ending_iris_165": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "主教一时哑口无言。",
      "bgTheme": "iris",
      "next": "ending_iris_166"
    },
    "ending_iris_166": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你继续向前一步，看向教堂里那些神色各异的贵族。",
      "bgTheme": "iris",
      "next": "ending_iris_167"
    },
    "ending_iris_167": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“北境战败，国库空虚，军队腐败。那个拥有所谓正统血脉的王储，在战场上抛弃自己的士兵和未婚妻独自逃命。”",
      "bgTheme": "iris",
      "next": "ending_iris_168"
    },
    "ending_iris_168": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“如果到了今天，还有人认为一条已经腐烂的血脉，比治理这个国家的能力更加重要……”",
      "bgTheme": "iris",
      "next": "ending_iris_169"
    },
    "ending_iris_169": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你微微扬起下巴。",
      "bgTheme": "iris",
      "next": "ending_iris_170"
    },
    "ending_iris_170": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“现在可以站出来。”",
      "bgTheme": "iris",
      "next": "ending_iris_171"
    },
    "ending_iris_171": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“不过我想，你们应该没有人会想和我作对。”",
      "bgTheme": "iris",
      "next": "ending_iris_172"
    },
    "ending_iris_172": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "偌大的教堂里，没有一个人说话。",
      "bgTheme": "iris",
      "next": "ending_iris_173"
    },
    "ending_iris_173": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "就在这片死一般的寂静中，你身后忽然传来了膝盖触碰大理石地面的声音。",
      "bgTheme": "iris",
      "next": "ending_iris_174"
    },
    "ending_iris_174": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König单膝跪在了你的身后。",
      "bgTheme": "iris",
      "next": "ending_iris_175"
    },
    "ending_iris_175": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“斯卡兰承认您的王权。”",
      "bgTheme": "iris",
      "next": "ending_iris_176"
    },
    "ending_iris_176": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他的声音沉稳地回荡在教堂穹顶之下。",
      "bgTheme": "iris",
      "next": "ending_iris_177"
    },
    "ending_iris_177": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“而我，以斯卡兰国王König的名义，向您宣誓效忠。”",
      "bgTheme": "iris",
      "next": "ending_iris_178"
    },
    "ending_iris_178": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "短暂的死寂过后，越来越多的人屈膝俯首，直到整座教堂只剩下你一个人站着。",
      "bgTheme": "iris",
      "next": "ending_iris_179"
    },
    "ending_iris_179": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "主教也没有再开口说些讨人厌的话。",
      "bgTheme": "iris",
      "next": "ending_iris_180"
    },
    "ending_iris_180": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他转过身，将那顶曾经只属于帝国男性继承人的王冠高高捧起。",
      "bgTheme": "iris",
      "next": "ending_iris_181"
    },
    "ending_iris_181": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "主教",
      "text": "“以神明与这片土地的名义——”",
      "bgTheme": "iris",
      "next": "ending_iris_182"
    },
    "ending_iris_182": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你没有低头，更没有下跪。",
      "bgTheme": "iris",
      "next": "ending_iris_183"
    },
    "ending_iris_183": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "于是主教微微一顿，直接将那顶王冠郑重地戴在你的头顶。",
      "bgTheme": "iris",
      "next": "ending_iris_184"
    },
    "ending_iris_184": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "主教",
      "text": "“我在此加冕您为帝国唯一的君主。”",
      "bgTheme": "iris",
      "next": "ending_iris_185"
    },
    "ending_iris_185": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "钟声在这一刻响彻王都。",
      "bgTheme": "iris",
      "next": "ending_iris_186"
    },
    "ending_iris_186": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "教堂里的所有人同时俯首，广场上山呼海啸般的声音随之传来。",
      "bgTheme": "iris",
      "next": "ending_iris_187"
    },
    "ending_iris_187": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "众人",
      "text": "“女王陛下万岁——”",
      "bgTheme": "iris",
      "next": "ending_iris_188"
    },
    "ending_iris_188": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你站在最高处，看着这个从出生起便一直被告诉“有朝一日会以王后的身份拥有”的帝国，如今真正臣服在你的脚下。",
      "bgTheme": "iris",
      "next": "ending_iris_189"
    },
    "ending_iris_189": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "而König依旧跪在距离你最近的位置。",
      "bgTheme": "iris",
      "next": "ending_iris_190"
    },
    "ending_iris_190": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你低头看了他片刻，随后朝他伸出手。",
      "bgTheme": "iris",
      "next": "ending_iris_191"
    },
    "ending_iris_191": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“起来。”",
      "bgTheme": "iris",
      "next": "ending_iris_192"
    },
    "ending_iris_192": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他抬起头。",
      "bgTheme": "iris",
      "next": "ending_iris_193"
    },
    "ending_iris_193": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你握住他的手，将他从地上拉起来。",
      "bgTheme": "iris",
      "next": "ending_iris_194"
    },
    "ending_iris_194": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“女王的王夫哪有跪着的道理。”",
      "bgTheme": "iris",
      "next": "ending_iris_195"
    },
    "ending_iris_195": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König怔了一瞬。随后，他低低地笑了起来。",
      "bgTheme": "iris",
      "next": "ending_iris_196"
    },
    "ending_iris_196": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他握紧你的手，站到了你的身边。",
      "bgTheme": "iris",
      "next": "ending_iris_197"
    },
    "ending_iris_197": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "很多年以后，史官用无数华丽的辞藻记录这个时代。",
      "bgTheme": "iris",
      "next": "ending_iris_198"
    },
    "ending_iris_198": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他们写旧王朝如何在一夜之间覆灭，写奥古斯都家的女儿如何成为帝国历史上第一位真正意义上的女王，也写那位曾经被视为不祥之子的斯卡兰国王，如何率领铁骑横扫北境，最终却心甘情愿地成为女王最可靠的盟友。",
      "bgTheme": "iris",
      "next": "ending_iris_199"
    },
    "ending_iris_199": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你的统治远比那些曾经质疑你的人想象中更加出色。",
      "bgTheme": "iris",
      "next": "ending_iris_200"
    },
    "ending_iris_200": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "许多旧王朝留下的腐朽制度被一点点废除，女性第一次可以独立继承爵位与领地，持续多年的边境战争也终于结束。",
      "bgTheme": "iris",
      "next": "ending_iris_201"
    },
    "ending_iris_201": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "至于König，他依旧是那个让敌人闻风丧胆的男人。",
      "bgTheme": "iris",
      "next": "ending_iris_202"
    },
    "ending_iris_202": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "只是在你的约束下，他也是有所收敛。",
      "bgTheme": "iris",
      "next": "ending_iris_203"
    },
    "ending_iris_203": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "某个深夜，你处理完最后一份奏报，疲惫地靠在椅背上揉了揉眉心。",
      "bgTheme": "iris",
      "next": "ending_iris_204"
    },
    "ending_iris_204": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "刚刚结束边境巡视的König甚至没有先回寝殿更衣，就匆匆回来。",
      "bgTheme": "iris",
      "next": "ending_iris_205"
    },
    "ending_iris_205": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“回来了？”",
      "bgTheme": "iris",
      "next": "ending_iris_206"
    },
    "ending_iris_206": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“嗯。”",
      "bgTheme": "iris",
      "next": "ending_iris_207"
    },
    "ending_iris_207": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他走到你的面前，像很多年前一样，半跪在你身前，将脑袋靠在你的大腿上。",
      "bgTheme": "iris",
      "next": "ending_iris_208"
    },
    "ending_iris_208": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你低头看了他一眼，手指习惯性地穿过他暗红色的发丝。",
      "bgTheme": "iris",
      "next": "ending_iris_209"
    },
    "ending_iris_209": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“今天有人在议会里说，你虐待战俘，像疯狗一样的到处咬人。”",
      "bgTheme": "iris",
      "next": "ending_iris_210"
    },
    "ending_iris_210": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König闭着眼睛，丝毫没有生气。",
      "bgTheme": "iris",
      "next": "ending_iris_211"
    },
    "ending_iris_211": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“他说得也不算完全错。虐待战俘绝对是没有的事。但，我确实算您忠实的狗。”",
      "bgTheme": "iris",
      "next": "ending_iris_212"
    },
    "ending_iris_212": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你轻轻扯了一下他的头发。",
      "bgTheme": "iris",
      "next": "ending_iris_213"
    },
    "ending_iris_213": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“我不养狗。”",
      "bgTheme": "iris",
      "next": "ending_iris_214"
    },
    "ending_iris_214": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他终于睁开眼睛看你。",
      "bgTheme": "iris",
      "next": "ending_iris_215"
    },
    "ending_iris_215": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "你状似头疼般皱眉。",
      "bgTheme": "iris",
      "next": "ending_iris_216"
    },
    "ending_iris_216": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "{{playerName}}",
      "text": "“王夫殿下总是不想当人怎么办？”",
      "bgTheme": "iris",
      "next": "ending_iris_217"
    },
    "ending_iris_217": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "König低低地笑出了声。",
      "bgTheme": "iris",
      "next": "ending_iris_218"
    },
    "ending_iris_218": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "",
      "text": "他抓住你的手腕，将你的掌心贴在自己的脸侧，像很多年前那个第一次从泥潭里接过你丝帕的少年一样，眷恋地蹭了蹭。",
      "bgTheme": "iris",
      "next": "ending_iris_219"
    },
    "ending_iris_219": {
      "chapter": "终章 · 鸢尾旗",
      "speaker": "König",
      "text": "“我爱你，不管是{{playerName}}小姐，还是{{playerName}}女王。我的爱，我的忠诚，始终如一。”",
      "bgTheme": "iris",
      "next": "ending_iris_complete"
    },
    "ending_iris_complete": {
      "chapter": "终章 · 鸢尾旗",
      "bgTheme": "iris",
      "speaker": "",
      "text": "",
      "ending": "鸢尾旗"
    },
    "ending_iris_intro": {
      "chapter": "终章 · 鸢尾旗",
      "chapterIntro": {
        "small": "终章",
        "title": "鸢尾旗",
        "next": "ending_iris_001"
      }
    }
  }
};
