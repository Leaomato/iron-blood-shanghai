import type { Card } from '../../types';

// Special Cards (C_116 - C_140)

export const specialCards: Card[] = [
    {
        id: 'C_116',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '美军',
        title: '帕奈号',
        body: '日机炸沉美舰"帕奈号"。死了三个美国人一个英国人。\n\n全世界的镜头都对准了这片水域。\n\n这是一根火柴。你要不要把它划着？',
        choiceL: {
            title: '煽动',
            description: '让火星燎原。把美国拖进来。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 20 },
                    { stat: 'JAP_AGGRO', value: 6 },
                ],
                extraTimeDelay: 2,
                flags: [{ flag: 'PanayProvoked', value: true }],
            },
        },
        choiceR: {
            title: '静观',
            description: '让他们自己决定。火烧不到头上他们不会动。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 2 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        conditions: [
            { type: 'stat', stat: 'INTL', comparison: 'gt', value: 70 },
        ],
        once: true,
    },
    {
        id: 'C_117',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '战场',
        title: '断手的手榴弹',
        body: '战场上一只断手还握着手榴弹。\n\n手的主人已经找不到了。只有这只手还在坚持。\n\n士兵们看着它。你也看着它。',
        choiceL: {
            title: '敬礼',
            description: '向无名的勇气致敬。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '走过',
            description: '战争看太多这种画面了。继续走。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_118',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '墙',
        title: '墙上的字',
        body: '废墟墙上有人用血写了四个字：\n\n还我河山。\n\n墨迹被雨打花了。但仍然像刀刻的一样。',
        choiceL: {
            title: '重描',
            description: '让这面墙成为宣言。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '不管',
            description: '字会褪色人会死。活着比口号重要。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -1 },
                    { stat: 'SUPPLY', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
    {
        id: 'C_119',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '情报',
        title: '川岛芳子',
        body: '戴笠说：\n\n"川岛芳子在城里。穿军装说甜话写名单。我可以抓，但她很会藏。"',
        choiceL: {
            title: '抓',
            description: '追捕间谍。哪怕抓不到也要让敌人不安。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'INTL', value: 3 },
                    { stat: 'JAP_AGGRO', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '不追',
            description: '没精力追影子。专注眼前的战斗。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -4 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'JAP_AGGRO', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_120',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '新兵',
        title: '兵源羸弱',
        body: '新兵瘦得像影子。有的脸上还有菜色。\n\n征兵官说："饥荒把他们先打了一遍。但能拿得动枪。收不收？"',
        choiceL: {
            title: '收',
            description: '多一个人多一份力。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -3 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'WARLORD_LOYALTY', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '拒',
            description: '弱兵会拖累战斗力。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 1 },
                    { stat: 'MORALE', value: -3 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
                extraTimeDelay: -1,
            },
        },
        once: false,
    },
    {
        id: 'C_121',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '外交',
        title: '意大利撑日',
        body: '墨索里尼站到日本那边。罗马承认满洲国，对日本的行动表示"理解"。\n\n世界的天平又倾斜了一点。',
        choiceL: {
            title: '抗议',
            description: '用外交语言表达愤怒。虽然没人在听。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 1 },
                    { stat: 'MORALE', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '断交',
            description: '用行动表明立场。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 3 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'GERMAN_TRUST', value: -1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_122',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '士兵',
        title: '戏声',
        body: '士兵在听留声机。京剧。《四郎探母》。\n\n唱到"叫小番"的时候有人跟着哼。锣鼓声像来自另一个时代。',
        choiceL: {
            title: '禁',
            description: '战争没有娱乐。保持紧张。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -3 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '允',
            description: '让他们放松片刻。人不能绷太紧。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                    { stat: 'ELITE', value: -1 },
                    { stat: 'INTL', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_123',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '敢死队',
        title: '敢死爆破',
        body: '三个士兵把炸药绑在身上。最大的二十岁。\n\n"我们比炸药便宜。让我们去。"',
        choiceL: {
            title: '批',
            description: '让他们去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'JAP_AGGRO', value: -4 },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '不批',
            description: '把请战书压住。命不是弹药。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -2 },
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_124',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '商人',
        title: '商人捐机',
        body: '上海商人来了。\n\n"我捐一架飞机。型号你们挑。名字就叫上海号。"',
        choiceL: {
            title: '收',
            description: '收下飞机。让它飞上天空。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 3 },
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'WARLORD_LOYALTY', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '婉拒',
            description: '给他荣誉让他留着钱。以后可能更需要。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'SUPPLY', value: -1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_125',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '延安',
        title: '延安贺电',
        body: '一封贺电：\n\n"致蒋委员长。淞沪抗战举国振奋。中共全党全军愿在委员长领导下共赴国难。"\n\n署名：毛泽东。',
        choiceL: {
            title: '阅存',
            description: '读一读收起来。知己知彼。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 6 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'GERMAN_TRUST', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '扔',
            description: '这种示好不需要。保持距离。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -1 },
                    { stat: 'COMMUNIST_INFL', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'WARLORD_LOYALTY', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_126',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '柏林',
        title: '顾问团召回',
        body: '柏林来电：顾问团将在三十天内撤离。\n\n法肯豪森站在你面前："我很抱歉。同盟也有保质期。"',
        choiceL: {
            title: '挽留',
            description: '再留一阵。哪怕只是多一点时间。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'MORALE', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '送行',
            description: '让他们走。我们自己来。',
            effects: {
                stats: [
                    { stat: 'GERMAN_TRUST', value: -6 },
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'INTL', value: -1 },
                ],
            },
        },
        conditions: [
            { type: 'stat', stat: 'GERMAN_TRUST', comparison: 'lt', value: 30 },
        ],
        once: true,
    },
    {
        id: 'C_127',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '难民',
        title: '人吃人',
        body: '难民营的报告：\n\n"有人吃人了。饿疯了。街角发现尸体的一部分。"',
        choiceL: {
            title: '镇压封口',
            description: '不让这种事传开。用恐惧压住恐惧。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'REFUGEE_CRISIS', value: -6 },
                    { stat: 'COMMUNIST_INFL', value: 3 },
                ],
            },
        },
        choiceR: {
            title: '施粥',
            description: '用食物代替子弹。让人活得像人。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -8 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: -10 },
                    { stat: 'INTL', value: 2 },
                ],
            },
        },
        conditions: [
            { type: 'stat', stat: 'REFUGEE_CRISIS', comparison: 'gt', value: 80 },
        ],
        once: true,
    },
    {
        id: 'C_128',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '情报',
        title: '缴获密码本',
        body: '戴笠送来一本密码本。从黄浚那里搜到的。日军的通讯密码。',
        choiceL: {
            title: '破译',
            description: '转化为战场优势。让敌人的秘密成为武器。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 6 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'JAP_AGGRO', value: -2 },
                ],
            },
        },
        choiceR: {
            title: '分享',
            description: '分享给盟友。用情报换支持。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 2 },
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        conditions: [
            { type: 'flag', flag: 'SpyCaught', flagValue: true },
        ],
        once: true,
    },
    {
        id: 'C_129',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '黄浦江',
        title: '残骸堵航道',
        body: '出云的残骸堵住了航道。钢铁沉下去后仍在"作战"。\n\n日军运输船现在要绕路了。',
        choiceL: {
            title: '宣传',
            description: '让全世界看见这一击。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 12 },
                    { stat: 'INTL', value: 6 },
                    { stat: 'JAP_AGGRO', value: 4 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '阻滞',
            description: '让残骸成为障碍。用沉船换时间。',
            effects: {
                stats: [
                    { stat: 'JAP_AGGRO', value: -2 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'MORALE', value: 2 },
                ],
                extraTimeDelay: 3,
            },
        },
        conditions: [
            { type: 'flag', flag: 'IzumoSunk', flagValue: true },
        ],
        once: true,
    },
    {
        id: 'C_130',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '杜月笙',
        title: '送子去港',
        body: '杜月笙请求：\n\n"让我儿子去香港。我会继续留在上海帮你们做事。但我儿子不能死在这里。"',
        choiceL: {
            title: '准',
            description: '放他走。关系网比公平重要。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 3 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'WARLORD_LOYALTY', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '拒',
            description: '所有人都一样。谁都不能先走。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 1 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'WARLORD_LOYALTY', value: -1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_131',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '战利品',
        title: '日本军刀',
        body: '缴获一把军刀。刀上还有血迹。\n\n握着它的人已经不在了。',
        choiceL: {
            title: '留',
            description: '留着它。让士兵们看见敌人也会死。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '毁',
            description: '砸碎它。不留任何他们存在的证据。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 1 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_132',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '梅兰芳',
        title: '蓄须明志',
        body: '梅兰芳蓄须了。\n\n"只要日本人还在中国我就不再登台。"\n\n这是文化的抵抗。用沉默回应侵略。',
        choiceL: {
            title: '支持',
            description: '让全国知道。抵抗不只在战场。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'SUPPLY', value: -1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '不管',
            description: '文化的事让文化人自己处理。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -2 },
                    { stat: 'SUPPLY', value: 1 },
                    { stat: 'INTL', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_133',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '银行家',
        title: '转移黄金',
        body: '银行家请求：\n\n"让我把黄金转移到香港。如果上海沦陷这些黄金会落入敌手。"\n\n约合三百万美元。',
        choiceL: {
            title: '扣',
            description: '黄金留在国内。战争需要每一分钱。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 12 },
                    { stat: 'INTL', value: -3 },
                    { stat: 'MORALE', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '放',
            description: '让他们走。信用比黄金重要。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'WARLORD_LOYALTY', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_134',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '缴获',
        title: '缴获坦克',
        body: '缴获一辆敌军坦克。履带完好炮管可用。\n\n问题是没有油，没有零件\n也没有会开的人。',
        choiceL: {
            title: '修',
            description: '让敌人的武器对准敌人。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 3 },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '炸',
            description: '不给敌人拿回去的机会。',
            effects: {
                stats: [
                    { stat: 'SCORCHED_EARTH', value: 4 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'MORALE', value: -1 },
                    { stat: 'NANJING_DEFENSE', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_135',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '证据',
        title: '达姆弹',
        body: '军医报告：\n\n"伤口不对劲。不是普通子弹。是达姆弹，在体内会炸开。这是国际法禁止的。"',
        choiceL: {
            title: '曝光',
            description: '让世界看见他们的野蛮。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 6 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '还牙',
            description: '用同样的方式回应。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'INTL', value: -6 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_136',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '罗斯福',
        title: '隔离演说',
        body: '罗斯福发表演说：\n\n"侵略者应该被隔离。"\n\n话很漂亮。但子弹还是没有。',
        choiceL: {
            title: '放大',
            description: '把希望放大。让全国知道世界在关注。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 4 },
                    { stat: 'MORALE', value: 3 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '克制',
            description: '不要给民众太多幻想。靠自己更现实。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 1 },
                    { stat: 'MORALE', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: true,
    },
    {
        id: 'C_137',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '传言',
        title: '慰安妇传闻',
        body: '传言从沦陷区传来：\n\n"日军在抓女人。很多女人被带走后就再也没有回来。"',
        choiceL: {
            title: '取证',
            description: '记录下来。真相是未来的武器。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 3 },
                    { stat: 'MORALE', value: -1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '谴责',
            description: '用愤怒代替调查。让情绪成为动力。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_138',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '补给',
        title: '运粮船沉没',
        body: '运粮船沉了。粮食漂在水面上。\n\n够五千人吃三天。现在全没了。',
        choiceL: {
            title: '配给',
            description: '计划分配。让每个人都有一口。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'REFUGEE_CRISIS', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '忍',
            description: '让军队优先。百姓再想办法。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'REFUGEE_CRISIS', value: 3 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
    {
        id: 'C_139',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '情报',
        title: '敌军地图',
        body: '缴获一份敌军地图。上面标注了他们的进攻路线。\n\n可能是真的。也可能是假的。',
        choiceL: {
            title: '利用',
            description: '把情报转化为战场优势。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: 4 },
                    { stat: 'JAP_AGGRO', value: -1 },
                    { stat: 'SUPPLY', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '存档',
            description: '让更多人研究。长期价值更大。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                    { stat: 'SUPPLY', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
    {
        id: 'C_140',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '街头',
        title: '报童卖捷报',
        body: '街头报童在卖"捷报"。\n\n"大捷！击毙敌军三千！"\n\n你知道那是假的。',
        choiceL: {
            title: '买下压住',
            description: '买光它们。不让假消息扩散太快。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                    { stat: 'INTL', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '叹息走过',
            description: '让他们卖吧。有些幻觉是必要的。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
];
