import type { Card } from '../../types';

// Phase 1 锚点卡 - 心理学驱动重写
// 技巧：具体人名、二人称直击、损失框架、内疚触发

export const phase1Anchors: Card[] = [
    {
        id: 'C_001',
        type: 'ANCHOR',
        phase: 1,
        date: '08.09',
        speaker: '张治中',
        title: '虹桥',
        body: '日本军官死了。虹桥机场。尸体还热着。\n\n你的参谋站在门口等命令。外面，三千名士兵正在等你告诉他们：是打，还是等。他们每个人身后都有一个家。\n\n你手里的电话筒很沉。南京在另一头说话，但你只听见自己的心跳。',
        choiceL: {
            title: '开火',
            description: '先开枪的人，往往先死。但先死也是死，后死也是死。',
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
            description: '遵守程序。即使程序的代价是主动权。',
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
        body: '电报只有七个字：可否全面作战？\n\n你盯着这七个字看了四十分钟。外面上海的灯火还亮着。那些灯光背后，三百万人还不知道明天早上，他们的世界会塌下来。\n\n你的笔尖悬在纸上。一旦落下，就没有回头路了。',
        choiceL: {
            title: '写下"可"',
            description: '战争会死很多人。但有些东西，比命更重。',
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
            description: '再等等。也许还有别的办法。（你知道没有。）',
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
        body: '黎明五点三十二分。第一声炮响。\n\n87师的先头部队已经出发了。排长刘志远今年二十三岁，刚结婚三个月。他走在最前面。\n\n两小时后，你会收到第一份伤亡报告。刘志远的名字会在第一页，第三行。\n\n但现在，他还活着。他在等你的命令。',
        choiceL: {
            title: '全力猛攻',
            description: '不惜代价。日本人要明白，我们不是软柿子。',
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
            title: '稳步推进',
            description: '一步一脚印。这场仗还长。',
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
        body: '炸弹落偏了。\n\n不是落在日本军舰上。是落在租界里。落在法国人开的百货公司门口。落在一群排队买面包的人身上。\n\n三百七十九人。当场死亡。其中包括十一个孩子。\n\n电话铃已经响了半个小时了。你知道那头是谁——各国领事，报社记者，愤怒的政客。\n\n你的飞行员在隔壁哭。他二十岁。',
        choiceL: {
            title: '道歉赔偿',
            description: '我们错了。认错，然后继续打。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -15 },
                    { stat: 'SUPPLY', value: -10 },
                    { stat: 'MORALE', value: -5 },
                ],
            },
        },
        choiceR: {
            title: '嫁祸敌人',
            description: '说是日本人的防空炮。谎话可能争取一点时间。',
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
        body: '戴笠放下一份名单。十七个名字。\n\n"都是间谍。证据确凿的有八个，可疑的有九个。"\n\n你看了一眼名单。第三个名字你认识——黄浚，外交部的，你们一起吃过饭。\n\n"如果抓错呢？"\n\n戴笠不说话。他不需要说。抓错一个人，一个家庭完了。不抓一个人，千百个家庭可能完。',
        choiceL: {
            title: '全部逮捕',
            description: '宁可冤枉，不可放过。战争没有冤枉。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -10 },
                    { stat: 'ELITE', value: 5 },
                ],
                flags: [{ flag: 'SpyCaught', value: true }],
            },
        },
        choiceR: {
            title: '只抓确凿的',
            description: '法治还在。人权还在。哪怕战争。',
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
        body: '法肯豪森站在地图前。他的手指划过等高线，说话的时候不看你。\n\n"按我的方案，三成胜算。"\n\n"不按呢？"\n\n沉默。他没必要回答。你们都知道答案。\n\n他是对的。但他是个外国人。他不需要和你的军官解释，为什么要听一个德国人的话。',
        choiceL: {
            title: '用他的方案',
            description: '吞下骄傲。活着的人比面子重要。',
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
            description: '中国的仗，中国人打。外国人不会懂。',
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
