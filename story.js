// =========================================
// V9.3 修正版
// 第二章最后一句之后：黑屏短暂停留 -> 自动返回标题
// 不显示“返回标题”按钮，也不把第二章当作正式完结。
// =========================================

window.GAME_CONFIG = {
  "titleBackground": "title.jpg",
  "titleBgm": "title.mp3",
  "showExactStats": true,
  "defaultVolume": 0.45
};

window.STORY = {
  "startNode": "prologue_001",
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
          "next": "prologue_c_001"
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
      "text": "Leopold率先下车，转过身，极其自然地向你伸出手。甚至在你的指尖搭上来时，亲昵地虚扶住了你的腰肢，护着你走下马车。",
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
      "text": "伴随着刺耳的铜锣声，沙地上的厮杀惨烈而极其短暂。",
      "next": "ch1_post_002"
    },
    "ch1_post_002": {
      "chapter": "第一章 · 角斗士",
      "bg": "arena-stand.jpg",
      "speaker": "",
      "text": "他仿佛被某种极其极端的暴戾所彻底驱使，面对那三名凶悍的对手，拔出重剑，利落地送他们见了上帝。",
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
      "text": "隔着看台的重重防线，越过那些狂热的赌徒，他极其精准地看向了你所在的位置。",
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
      "text": "你垂下眼睫，极其自然地微微蹙起眉头，用蕾丝绢帕掩住口鼻：",
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
      "text": "那个角斗士正背对着你坐在石床上。听到你的脚步声，他并没有防备，而是极其平静地抬起手，摘下了那顶沾满鲜血的头盔。",
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
      "text": "König极其自然地收回了撑在墙上的手，向后退了半步，那股令人窒息的压迫感也随之消散。",
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
      "text": "他极其绅士地微微欠身，语气重新变得谦卑而疏离，仿佛刚才那个暴徒只是一场幻影。",
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
      "text": "你身披着极其华贵的纯白狐裘，姿态优雅地踏入大门。",
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
      "text": "Leopold的脸色瞬间变得极其难看。在王权与未婚妻之间，他显然只能选择前者。",
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
      "text": "在极其讲究体面的帝国宫廷，把奥古斯都大公的女儿、未来的王储妃独自一人晾在宴会厅，是极其严重的失礼，更是对你家族莫大的羞辱。",
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
      "text": "他穿着没有任何纹章的纯黑军礼服，走到了你面前。在全场贵族惊愕到几乎呆滞的目光中，极其标准地向你行了一个单膝礼。",
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
      "text": "你看着他停留在半空的手，只是极其自然地用羽毛扇轻轻放在左脸颊，微微退后了半步，拉开了一个礼貌却不可僭越的距离。",
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
      "next": "current_version_end"
    },
    "current_version_end": {
      "speaker": "",
      "text": "",
      "currentVersionEnd": true
    }
  }
};
