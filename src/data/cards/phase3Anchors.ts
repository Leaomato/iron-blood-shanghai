import type { Card } from '../../types';

// Phase 3 锚点卡 - 心理学驱动重写
// 技巧：倒计时感、不可逆转、具体牺牲、内疚积累

export const phase3Anchors: Card[] = [
    {
        id: 'C_071',
        type: 'ANCHOR',
        phase: 3,
        date: '10.27',
        speaker: '作战处',
        title: '陷落',
        body: '大场失守了。\n\n电报只有四个字。没有细节。但你知道那四个字背后是什么——第五十一师全军覆没，师长抬回来的时候还在喘气，但只剩下半边脸。\n\n地图上，你画了一个叉。那是今天第三个叉了。\n\n墨水还没干，门外又有人敲门。又是电报。你不想看。',
        choiceL: {
            title: '反击',
            description: '不能让他们觉得我们软了。打回去。',
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
        body: '布鲁塞尔。九国公约缔约国正在开会。\n\n你的代表在会上把喉咙都喊哑了。摆数字，给照片，描述你亲眼看见的地狱。\n\n结果呢？\n\n"强烈谴责"。"深表遗憾"。"呼吁和平"。\n\n没有制裁。没有军援。没有任何实质行动。\n\n他们围坐在暖气房里，讨论如何用最礼貌的方式，告诉你：你们的死活，不值得我们冒险。',
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
        body: '杭州湾。金山卫。日军登陆。\n\n三万人。直接插到你后面。\n\n你盯着地图看了五秒钟，脑子一片空白。然后你听见自己说了一句话：\n\n"完了。"\n\n不是战役完了。是整个战略态势完了。你已经不是在打仗了。你在逃命。',
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
        body: '命令已经起草好了。就差你签字。\n\n"焦土抗战。不给敌人留下一砖一瓦。"\n\n你看了一眼窗外。那些高楼，那些工厂，那些祠堂，那些记忆——都会变成灰烬。\n\n还有那些来不及撤走的人。\n\n参谋说：这是战术需要。\n\n你知道这是什么。这是毁灭。你亲手签字的毁灭。',
        choiceL: {
            title: '签字',
            description: '敌人什么都得不到。哪怕我们的人也什么都剩不下。',
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
            title: '撕掉命令',
            description: '有些事做不得。活着的时候做不得，死后更没法解释。',
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
        body: '国府迁都重庆。\n\n公文写得很清楚：战略转移。持久抗战。以空间换时间。\n\n但老百姓听见的是：跑了。政府跑了。\n\n你看着那些收拾行李的官员，看着那些装船的文件，忽然觉得很累。\n\n你也要跑。但你还要装作不是在跑。',
        choiceL: {
            title: '稳定军心',
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
            description: '告诉他们真相。走还是留，让他们自己选。',
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
        body: '命令在凌晨三点下达。十七个字：\n\n全线撤退。保存实力。向南京靠拢。\n\n你写完最后一个字，笔掉在桌上。外面很安静。太安静了。炮声停了。或者你已经听不见了。\n\n三个月。二十五万人。一座城。\n\n现在，结束了。',
        choiceL: {
            title: '断后阻击',
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
            title: '快速脱离',
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
