import type { Card } from '../../types';

// Phase 3 锚点卡

export const phase3Anchors: Card[] = [
    {
        id: 'C_071',
        type: 'ANCHOR',
        phase: 3,
        date: '10.27',
        speaker: '作战处',
        title: '陷落',
        body: '大场失守。\n\n电报只有四个字。第五十一师全军覆没。师长抬回来时还在喘气，只剩半边脸。\n\n你在地图上画了一个叉。今天第三个叉了。\n\n墨水还没干，门外又有人敲门。',
        choiceL: {
            title: '反击',
            description: '打回去。不能让他们觉得我们软了。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -15, isBattleDamage: true },
                    { stat: 'TIME_DELAY', value: 3 },
                    { stat: 'MORALE', value: 5 },
                ],
                conditionalEffects: [{
                    condition: { stat: 'ELITE', comparison: 'gt', value: 50 },
                    thenEffects: [{ stat: 'ELITE', value: 5 }],
                    elseEffects: [{ stat: 'MORALE', value: -10 }],
                }],
            },
        },
        choiceR: {
            title: '收缩',
            description: '认清现实。退到下一条线。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -5 },
                    { stat: 'MORALE', value: -15 },
                    { stat: 'NANJING_DEFENSE', value: -10 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_072',
        type: 'ANCHOR',
        phase: 3,
        date: '11.05',
        speaker: '外交部',
        title: '公约',
        body: '布鲁塞尔的会议结束了。\n\n结果：强烈谴责，深表遗憾，呼吁和平。\n\n没有制裁。没有军援。\n\n他们在暖气房里用最礼貌的方式告诉你：你们的死活不值得他们冒险。',
        choiceL: {
            title: '继续呼吁',
            description: '不放弃。总有人会听见。也许。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 10 },
                    { stat: 'SUPPLY', value: -5 },
                ],
            },
        },
        choiceR: {
            title: '靠自己',
            description: '不指望任何人了。只有自己救自己。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 10 },
                    { stat: 'INTL', value: -10 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_073',
        type: 'ANCHOR',
        phase: 3,
        date: '11.08',
        speaker: '金山卫',
        title: '后背',
        body: '杭州湾。金山卫。三万日军登陆。直接插到你后面。\n\n你盯着地图看了五秒钟。脑子一片空白。\n\n然后你听见自己说：完了。\n\n不是战役完了。是整个态势完了。你在逃命了。',
        choiceL: {
            title: '分兵阻击',
            description: '派人去堵。哪怕只堵一天。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'TIME_DELAY', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '全线撤退',
            description: '跑。能跑多快跑多快。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -15 },
                    { stat: 'ELITE', value: 5 },
                    { stat: 'NANJING_DEFENSE', value: -15 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_074',
        type: 'ANCHOR',
        phase: 3,
        date: '11.12',
        speaker: '参谋长',
        title: '火',
        body: '命令起草好了。就差签字。\n\n"焦土抗战。不给敌人留一砖一瓦。"\n\n窗外是高楼，工厂，祠堂，记忆。还有来不及撤走的人。\n\n签下去就是毁灭。你亲手签字的毁灭。',
        choiceL: {
            title: '签',
            description: '敌人什么都得不到。哪怕我们也什么都剩不下。',
            effects: {
                stats: [
                    { stat: 'SCORCHED_EARTH', value: 30 },
                    { stat: 'MORALE', value: -10 },
                    { stat: 'TIME_DELAY', value: 5 },
                    { stat: 'REFUGEE_CRISIS', value: 20 },
                ],
                flags: [{ flag: 'ScorchedEarth', value: true }],
            },
        },
        choiceR: {
            title: '撕掉',
            description: '有些事做不得。活着时做不得，死后更没法解释。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 5 },
                    { stat: 'SUPPLY', value: -10 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_075',
        type: 'ANCHOR',
        phase: 3,
        date: '11.20',
        speaker: '南京',
        title: '迁都',
        body: '国府迁都重庆。\n\n公文写得很清楚：战略转移，持久抗战，以空间换时间。\n\n但老百姓听见的是：跑了。政府跑了。\n\n你也要跑。但你还要装作不是在跑。',
        choiceL: {
            title: '稳军心',
            description: '骗他们。说这是战略。有时候谎话是必须的。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 10 },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                ],
            },
        },
        choiceR: {
            title: '说实话',
            description: '告诉他们真相。走还是留让他们自己选。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -15 },
                    { stat: 'NANJING_DEFENSE', value: -5 },
                    { stat: 'REFUGEE_CRISIS', value: 15 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_076',
        type: 'ANCHOR',
        phase: 3,
        date: '11.26',
        speaker: '蒋中正',
        title: '撤',
        body: '命令在凌晨三点下达。十三个字：\n\n全线撤退。保存实力。向南京靠拢。\n\n写完最后一个字，笔掉在桌上。外面很安静。太安静了。\n\n三个月。二十五万人。一座城。\n\n结束了。',
        choiceL: {
            title: '断后',
            description: '精锐殿后。给大部队争取时间。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -15, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: 15 },
                    { stat: 'TIME_DELAY', value: 5 },
                ],
            },
        },
        choiceR: {
            title: '快跑',
            description: '跑。都跑。活一个是一个。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 5 },
                    { stat: 'MORALE', value: -15 },
                    { stat: 'NANJING_DEFENSE', value: -10 },
                ],
            },
        },
        once: true,
    },
];
