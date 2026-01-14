import type { Card } from '../../types';

// Phase 1 锚点卡

export const phase1Anchors: Card[] = [
    {
        id: 'C_001',
        type: 'ANCHOR',
        phase: 1,
        date: '08.09',
        speaker: '张治中',
        title: '虹桥',
        body: '日军中尉大山勇夫的尸体还在虹桥机场。血还没干透。\n\n三千士兵在营房里等着。他们的母亲在三千个村庄里，梦见儿子回家。\n\n电话那头是南京。南京在等一个字。\n\n说"打"，那三千个梦就要碎了。',
        choiceL: {
            title: '开火',
            description: '让第一颗子弹从我们这边射出去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -5, isBattleDamage: true },
                    { stat: 'MORALE', value: 10 },
                    { stat: 'INTL', value: -5 },
                    { stat: 'JAP_AGGRO', value: 20 },
                ],
                flags: [{ flag: 'PreemptiveStrike', value: true }],
            },
        },
        choiceR: {
            title: '等命令',
            description: '让南京来决定谁先死。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -5 },
                    { stat: 'INTL', value: 5 },
                    { stat: 'JAP_AGGRO', value: 10 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_002',
        type: 'ANCHOR',
        phase: 1,
        date: '08.11',
        speaker: '蒋中正',
        title: '决心',
        body: '电报只有五个字：可否全面战。\n\n窗外是上海的夜。三百万人睡着了。他们不知道明天太阳升起时，炮弹会落在他们的屋顶上。\n\n笔尖悬在纸上。写下去，就没有回头路。\n\n可怜无定河边骨。',
        choiceL: {
            title: '写"可"',
            description: '让战火烧起来。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 15 },
                    { stat: 'INTL', value: -10 },
                    { stat: 'JAP_AGGRO', value: 25 },
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                ],
                flags: [{ flag: 'FullWar', value: true }],
            },
        },
        choiceR: {
            title: '放下笔',
            description: '再等一天。再等一天。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -10 },
                    { stat: 'INTL', value: 10 },
                    { stat: 'JAP_AGGRO', value: 5 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_003',
        type: 'ANCHOR',
        phase: 1,
        date: '08.13',
        speaker: '前线',
        title: '八一三',
        body: '凌晨五点。第一声炮响。\n\n87师先头排长刘志远，二十三岁，新婚三个月。他老婆肚子里有了孩子。\n\n两小时后他会死在北站。他的孩子永远不会知道父亲长什么样。\n\n但现在，他在等你的命令。',
        choiceL: {
            title: '猛攻',
            description: '不惜一切代价冲上去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: 10 },
                    { stat: 'TIME_DELAY', value: 3 },
                ],
                conditionalEffects: [{
                    condition: { flag: 'PreemptiveStrike', flagValue: true },
                    thenEffects: [{ stat: 'ELITE', value: 5 }],
                    elseEffects: [],
                }],
            },
        },
        choiceR: {
            title: '稳进',
            description: '一步一步来。死慢一点。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                    { stat: 'TIME_DELAY', value: 1 },
                    { stat: 'SUPPLY', value: -5 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_004',
        type: 'ANCHOR',
        phase: 1,
        date: '08.14',
        speaker: '空军',
        title: '误炸',
        body: '炸弹没落在日舰上。落在南京路上。\n\n七百二十九人。\n\n其中三十七个孩子。最小的四岁。他在等妈妈买糖回来。\n\n飞行员二十一岁。他在隔壁房间一直在吐。\n\n电话响了半小时了。你不敢接。',
        choiceL: {
            title: '道歉',
            description: '承认错误。我们杀了自己人。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -15 },
                    { stat: 'SUPPLY', value: -10 },
                    { stat: 'MORALE', value: -5 },
                ],
            },
        },
        choiceR: {
            title: '嫁祸',
            description: '说是日军防空炮。用谎言埋葬孩子。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -5 },
                ],
                conditionalEffects: [{
                    condition: { stat: 'INTL', comparison: 'gt', value: 50 },
                    thenEffects: [{ stat: 'INTL', value: 5 }],
                    elseEffects: [{ stat: 'INTL', value: -10 }],
                }],
            },
        },
        once: true,
    },
    {
        id: 'C_005',
        type: 'ANCHOR',
        phase: 1,
        date: '08.17',
        speaker: '情报处',
        title: '名单',
        body: '十七个名字。\n\n戴笠说有八个确凿。剩下九个，可能是，可能不是。\n\n第三个名字你认识。外交部的。你们一起吃过饭，他给你看过他女儿的照片。\n\n抓错一个人，一家人完。不抓一个人，一个营没。\n\n他女儿今年六岁。',
        choiceL: {
            title: '全抓',
            description: '宁可冤枉。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -10 },
                    { stat: 'ELITE', value: 5 },
                ],
                flags: [{ flag: 'SpyCaught', value: true }],
            },
        },
        choiceR: {
            title: '只抓确凿',
            description: '放过那九个人。也许其中有无辜的。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 5 },
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_006',
        type: 'ANCHOR',
        phase: 1,
        date: '08.22',
        speaker: '德国顾问',
        title: '方案',
        body: '法肯豪森不看你。他看地图。\n\n"按我的方案，三成赢面。不按，一成都没有。"\n\n他是对的。你知道他是对的。\n\n但你的将军们不会听一个外国人的话。他们宁可输，也要输得有面子。\n\n面子。用多少条命换？',
        choiceL: {
            title: '用他的',
            description: '咽下骄傲。让外国人救中国人。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 5 },
                    { stat: 'GERMAN_TRUST', value: 15 },
                    { stat: 'MORALE', value: -5 },
                ],
            },
        },
        choiceR: {
            title: '用自己的',
            description: '中国人的仗，中国人打。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 10 },
                    { stat: 'GERMAN_TRUST', value: -15 },
                    { stat: 'ELITE', value: -5, isBattleDamage: true },
                ],
            },
        },
        once: true,
    },
];
