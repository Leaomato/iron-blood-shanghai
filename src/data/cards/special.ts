import type { Card } from '../../types';

// Special Cards (C_116 - C_140)
// Rewritten with psychological impact: loss aversion, specific details, second-person address, guilt triggers

export const specialCards: Card[] = [
    {
        id: 'C_116',
        type: 'SPECIAL',
        phase: 'ALL',
        speaker: '美军',
        title: '帕奈号：火烧到别人的船',
        body: '日机炸沉美舰"帕奈号"。\n\n死亡人数：\n美国人——三人。\n英国人——一人。\n\n全世界的镜头——\n都对准了这片水域。\n\n这是一根"火柴"。\n\n你要不要——\n把它划着？',
        choiceL: {
            title: '大肆煽动',
            description: '让这颗火星燎原。把美国拖进这场战争。',
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
            title: '静观其变',
            description: '让他们自己决定。火烧不到别人头上，他们不会动。',
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
        body: '战场上——\n一只断手还握着手榴弹。\n\n手的主人——\n已经找不到了。\n\n只有这只手——\n还在"坚持"。\n\n士兵们看着它。\n你也看着它。',
        choiceL: {
            title: '敬礼',
            description: '向无名的勇气致敬。让士兵们看见英雄的样子。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '默默走过',
            description: '战争看太多这种画面了。继续前进。',
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
        body: '废墟的墙上——\n有人用血写了四个字：\n\n"还我河山"\n\n墨迹被雨打花了。\n但——\n仍然像刀刻的一样。',
        choiceL: {
            title: '重新描绘',
            description: '让这面墙成为宣言。让每个经过的人都看见。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '视而不见',
            description: '字会褪色，人会死。活着比口号重要。',
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
        title: '川岛芳子活动',
        body: '戴笠说：\n\n"川岛芳子——\n在城里。\n\n穿军装、\n说甜话、\n写名单。\n\n我可以抓——\n但她很会藏。\n可能抓不到。"',
        choiceL: {
            title: '抓捕行动',
            description: '追捕间谍。哪怕抓不到，也要让敌人不安。',
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
            title: '任其潜伏',
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
        body: '新兵站在你面前。\n\n瘦得像影子。\n有的——\n脸上还有菜色。\n\n征兵官说：\n\n"饥荒把他们先打了一遍。\n但——\n能拿得动枪。\n\n收不收？"',
        choiceL: {
            title: '接收',
            description: '多一个人多一份力。先填满编制。',
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
            title: '拒绝',
            description: '弱兵会拖累战斗力。让他们回去。',
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
        body: '墨索里尼公开站到日本那边。\n\n外交部的电报：\n\n"罗马——\n承认满洲国。\n并对日本的行动\n表示\'理解\'。"\n\n世界的天平——\n又倾斜了一点。',
        choiceL: {
            title: '抗议照会',
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
            description: '用行动表明立场。哪怕切断的是自己的路。',
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
        body: '士兵在听留声机。\n\n是京剧。\n《四郎探母》。\n\n唱到"叫小番"的时候——\n有人跟着哼起来。\n\n锣鼓声——\n像来自另一个时代。',
        choiceL: {
            title: '禁止',
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
            title: '允许',
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
        body: '三个士兵站在你面前。\n\n最大的二十岁。\n\n他们把炸药绑在身上：\n\n"我们——\n比炸药便宜。\n\n让我们去。"',
        choiceL: {
            title: '批准',
            description: '签字。让他们去。',
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
            title: '不忍',
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
        body: '上海商人来了。\n\n他说：\n\n"我捐一架飞机。\n型号——\n你们挑。\n\n名字——\n就叫\'上海号\'。"',
        choiceL: {
            title: '接收',
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
            title: '表彰婉拒',
            description: '给他荣誉，让他留着钱。以后可能更需要。',
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
        body: '一封贺电：\n\n"致蒋委员长——\n\n淞沪抗战，\n举国振奋。\n中共全党全军\n愿在委员长领导下\n共赴国难。"\n\n署名：毛泽东。',
        choiceL: {
            title: '阅存',
            description: '读一读，收起来。知己知彼。',
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
            title: '扔掉',
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
        body: '柏林来电：\n\n"根据德日协议——\n顾问团将在\n三十天内撤离。"\n\n法肯豪森站在你面前：\n\n"我很抱歉。\n同盟——\n也有保质期。"',
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
        body: '难民营的报告：\n\n"有人——\n吃人了。\n\n饿疯了。\n\n我们在街角发现——\n尸体的一部分。"\n\n这个消息——\n你怎么处理？',
        choiceL: {
            title: '镇压封口',
            description: '不让这种事传开。用恐惧压住恐惧。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'INTL', value: -4 },
                    { stat: 'REFUGEE_CRISIS', value: -6 },
                    { stat: 'COMMUNIST_INFL', value: 3 },
                ],
            },
        },
        choiceR: {
            title: '施粥救命',
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
        body: '戴笠送来一本密码本：\n\n"从黄浚那里搜到的。\n日军的通讯密码。\n\n如果能破译——\n就能知道他们的行动。"\n\n你怎么用？',
        choiceL: {
            title: '全力破译',
            description: '转化为战场优势。让敌人的秘密成为我们的武器。',
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
            title: '外交筹码',
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
        body: '出云的残骸——\n堵住了航道。\n\n钢铁沉下去后——\n仍在"作战"。\n\n日军的运输船——\n现在要绕路了。',
        choiceL: {
            title: '大肆宣传',
            description: '让全世界看见这一击。胜利需要被看见。',
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
            title: '航道阻滞',
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
        body: '杜月笙请求：\n\n"让我的儿子——\n去香港。\n\n我会继续留在上海。\n帮你们做事。\n\n但我儿子——\n不能死在这里。"',
        choiceL: {
            title: '准许',
            description: '放他走。关系网比公平更重要。',
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
            title: '拒绝',
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
        body: '一把缴获的军刀。\n\n刀上——\n还有血迹。\n\n握着它的人——\n已经不在了。\n\n你怎么处理？',
        choiceL: {
            title: '收藏',
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
            title: '毁掉',
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
        body: '梅兰芳蓄须了。\n\n他说：\n\n"只要日本人还在中国——\n我就不再登台。"\n\n这是文化的抵抗。\n用沉默——\n回应侵略。',
        choiceL: {
            title: '表态支持',
            description: '让全国知道：抵抗不只在战场。',
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
            title: '不置一词',
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
        body: '银行家请求：\n\n"让我把黄金——\n转移到香港。\n\n如果上海沦陷——\n这些黄金会落入敌手。"\n\n黄金数量：\n约合——三百万美元。',
        choiceL: {
            title: '扣留',
            description: '黄金留在国内。战争需要每一分钱。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 12 },
                    { stat: 'INTL', value: -6 },
                    { stat: 'MORALE', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '放行',
            description: '让他们走。信用比黄金更重要。',
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
        body: '缴获一辆敌军坦克。\n\n履带：完好。\n炮管：可用。\n\n问题是——\n没有油料，\n没有零件，\n没有会开的人。',
        choiceL: {
            title: '修复使用',
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
            title: '炸毁',
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
        body: '军医报告：\n\n"伤口——\n不对劲。\n\n不是普通子弹。\n是达姆弹——\n在体内会炸开。\n\n这是——\n国际法禁止的。"',
        choiceL: {
            title: '国际曝光',
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
            title: '以牙还牙',
            description: '用同样的方式回应。让他们尝尝自己的味道。',
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
        body: '罗斯福发表演说：\n\n"侵略者——\n应该被隔离。"\n\n话很漂亮。\n但——\n子弹还是没有。',
        choiceL: {
            title: '期待宣传',
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
            title: '怀疑克制',
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
        body: '传言——\n从沦陷区传来：\n\n"日军——\n在抓女人。\n\n很多女人——\n被带走后\n就再也没有回来。"',
        choiceL: {
            title: '调查取证',
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
            title: '激烈谴责',
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
        body: '运粮船沉了。\n\n粮食——\n漂在水面上。\n\n够五千人吃三天。\n现在——\n全没了。',
        choiceL: {
            title: '严格配给',
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
            title: '忍饥坚持',
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
        body: '缴获一份敌军地图。\n\n上面标注了——\n他们的进攻路线。\n\n信息——\n可能是真的。\n也可能是假的。',
        choiceL: {
            title: '利用作战',
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
            title: '上交存档',
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
        body: '街头——\n报童在卖"捷报"。\n\n"大捷！大捷！\n击毙敌军三千！"\n\n你知道——\n那是假的。\n\n真实的伤亡——\n是我们的三倍。',
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
