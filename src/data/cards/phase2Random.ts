import type { Card } from '../../types';

// Phase 2 Random Cards (C_037 - C_070)

export const phase2Random: Card[] = [
    {
        id: 'C_037',
        type: 'RANDOM',
        phase: 2,
        speaker: '罗店守军',
        title: '罗店磨坊',
        body: '"今天八百二十三人。昨天九百一十一人。前天七百六十七人。"\n\n电话那头很平静。\n\n"连长平均年龄二十四岁。换到第五批了。明天还填吗？"',
        choiceL: {
            title: '填',
            description: '用血肉换时间。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -16, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
                extraTimeDelay: 6,
            },
        },
        choiceR: {
            title: '夜袭',
            description: '趁夜反击。用诡计换人命。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -8, isBattleDamage: true },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
                extraTimeDelay: 2,
            },
        },
        once: false,
    },
    {
        id: 'C_038',
        type: 'RANDOM',
        phase: 2,
        speaker: '工兵',
        title: '碉堡钥匙',
        body: '碉堡门锁着。钥匙丢了。\n\n"炸开要二十公斤TNT。挖掉要三天。"\n\n门外伤员大概还能撑两天。',
        choiceL: {
            title: '炸',
            description: '用炸药开路。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -3 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '挖',
            description: '慢慢挖。看谁先撑不住。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
    {
        id: 'C_039',
        type: 'RANDOM',
        phase: 2,
        speaker: '川军',
        title: '草鞋到沪',
        body: '火车门开了。草鞋，汉阳造，有些枪比人还老。\n\n团长三十二岁，黑瘦，眼睛亮：\n\n"我们从四川来。走了十八天。能打。装备差点。"',
        choiceL: {
            title: '换装',
            description: '把最好的装备给他们。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -16 },
                    { stat: 'ELITE', value: 6 },
                    { stat: 'WARLORD_LOYALTY', value: 10 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '直接上',
            description: '没时间换。用手里的武器证明自己。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: 12 },
                    { stat: 'WARLORD_LOYALTY', value: 4 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_040',
        type: 'RANDOM',
        phase: 2,
        speaker: '杜月笙',
        title: '信号弹',
        body: '昨晚有人打信号弹。今早炮弹精准地落在医院上。\n\n医生七人。护士十二人。伤员一百零三人。\n\n杜月笙说："我的人查到了。走法律还是让他消失？"',
        choiceL: {
            title: '消失',
            description: '让他消失。让秘密保密。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: -4 },
                    { stat: 'JAP_AGGRO', value: -2 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '法办',
            description: '走程序。慢但留制度。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 2 },
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_041',
        type: 'RANDOM',
        phase: 2,
        speaker: '法肯豪森',
        title: '反斜面',
        body: '"你们在正面挨炮。每天损失一个营。"\n\n德国人指着沙盘：\n\n"把阵地藏到山背后。这不是勇敢不勇敢的问题。是你想让多少人活着回家。"',
        choiceL: {
            title: '采纳',
            description: '听顾问的。用脑子换血肉。',
            effects: {
                stats: [
                    { stat: 'GERMAN_TRUST', value: 12 },
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -1 },
                ],
                extraTimeDelay: 3,
            },
        },
        choiceR: {
            title: '坚持',
            description: '你的战场你做主。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -16, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'GERMAN_TRUST', value: -10 },
                    { stat: 'JAP_AGGRO', value: 3 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_042',
        type: 'RANDOM',
        phase: 2,
        speaker: '张乐平',
        title: '三毛从军',
        body: '画家站在你面前。手稿上是穿太大军装的瘦小"三毛"。\n\n"让我画一个故事。让士兵笑一笑。让他们知道就算死也有人记得。"',
        choiceL: {
            title: '资助',
            description: '让画笔成为武器。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -3 },
                    { stat: 'MORALE', value: 12 },
                    { stat: 'INTL', value: 3 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '不批',
            description: '战争不是画报。让他去后方。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -4 },
                    { stat: 'SUPPLY', value: 1 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_043',
        type: 'RANDOM',
        phase: 2,
        speaker: '朱绍良',
        title: '押注会议',
        body: '"十一月三日。九国公约会议。还有十六天。"\n\n朱绍良看着日历。\n\n"按现在伤亡速度还要填进去一万两千人。值得吗？"',
        choiceL: {
            title: '撑',
            description: '为了那张会议桌再流一点血。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'INTL', value: 6 },
                    { stat: 'MORALE', value: -2 },
                ],
                extraTimeDelay: 3,
            },
        },
        choiceR: {
            title: '认清',
            description: '不对外部抱幻想。自己的仗自己打。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -4 },
                    { stat: 'GERMAN_TRUST', value: 3 },
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_044',
        type: 'RANDOM',
        phase: 2,
        speaker: '36师',
        title: '请求轮换',
        body: '"开战一万一千人。现在四千七百。连长以上阵亡重伤百分之七十三。"\n\n电话那头很累。\n\n"请求轮换。让我们喘口气。"',
        choiceL: {
            title: '拒绝',
            description: '没有替补。只有你们。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'GERMAN_TRUST', value: -4 },
                ],
            },
        },
        choiceR: {
            title: '批准',
            description: '让他们撤下来。活着才能继续打。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'WARLORD_LOYALTY', value: 2 },
                ],
                extraTimeDelay: -2,
            },
        },
        once: false,
    },
    {
        id: 'C_045',
        type: 'RANDOM',
        phase: 2,
        speaker: '战地医生',
        title: '药尽',
        body: '军医眼圈发黑。\n\n"磺胺没了。绷带没了。只剩锯子。今天截了三十七条腿。明天更多。"\n\n他问："还有办法吗？"',
        choiceL: {
            title: '截肢保命',
            description: '切掉腐烂的部分。让人活着回家。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '土法',
            description: '试试老办法。也许运气帮忙。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: -3 },
                    { stat: 'SUPPLY', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_046',
        type: 'RANDOM',
        phase: 2,
        speaker: '军统',
        title: '杭州湾情报',
        body: '戴笠拿着口供：\n\n"俘虏说日军第十军正在向杭州湾集结。从那里登陆的话，上海会被包饺子。"\n\n他看着你："这情报你信不信？"',
        choiceL: {
            title: '信',
            description: '分兵布防杭州湾。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'GERMAN_TRUST', value: 3 },
                    { stat: 'JAP_AGGRO', value: -1 },
                ],
                flags: [{ flag: 'JinshanweiPrep', value: true }],
            },
        },
        choiceR: {
            title: '不信',
            description: '佯动。他们想让你分兵你偏不。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: -12 },
                    { stat: 'JAP_AGGRO', value: 4 },
                    { stat: 'GERMAN_TRUST', value: -4 },
                ],
                extraTimeDelay: 2,
            },
        },
        once: true,
    },
    {
        id: 'C_047',
        type: 'RANDOM',
        phase: 2,
        speaker: '共产党',
        title: '游击联合',
        body: '八路军代表的建议书：\n\n"我们可以在敌后破坏铁路骚扰补给线。条件很简单：给我们合法的名义。"\n\n借来的刀早晚要还。',
        choiceL: {
            title: '合作',
            description: '敌人的敌人暂时可以是朋友。',
            effects: {
                stats: [
                    { stat: 'COMMUNIST_INFL', value: 12 },
                    { stat: 'JAP_AGGRO', value: -3 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'INTL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '拒绝',
            description: '保持距离。红色的帮助太危险。',
            effects: {
                stats: [
                    { stat: 'COMMUNIST_INFL', value: -1 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_048',
        type: 'RANDOM',
        phase: 2,
        speaker: '童子军',
        title: '慰问',
        body: '一群孩子站在门口。最大的十四岁，最小的十一岁。\n\n他们拿着自己叠的绷带、家里凑的钱、一面写满名字的旗：\n\n"让我们去前线。让他们知道有人想着他们。"',
        choiceL: {
            title: '让他们去',
            description: '让希望的种子落在绝望的土地上。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'ELITE', value: -1, isBattleDamage: true },
                ],
            },
        },
        choiceR: {
            title: '拦回去',
            description: '战场不是课外活动。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -1 },
                    { stat: 'INTL', value: -1 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_049',
        type: 'RANDOM',
        phase: 2,
        speaker: '军需官',
        title: '每人五发',
        body: '"弹药储备平均每人五发。按目前消耗速度还能撑两天。"\n\n军需官报告。\n\n"之后只剩刺刀。"',
        choiceL: {
            title: '白刃',
            description: '省子弹。让刺刀说话。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: 6 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '撤',
            description: '退到有弹药的地方再打。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 2 },
                    { stat: 'MORALE', value: -10 },
                    { stat: 'INTL', value: -2 },
                ],
                extraTimeDelay: -4,
            },
        },
        once: false,
    },
    {
        id: 'C_050',
        type: 'RANDOM',
        phase: 2,
        speaker: '法肯豪森',
        title: '撤到吴福线',
        body: '德国人不委婉了：\n\n"87师剩百分之三十五。88师百分之四十一。36师百分之二十八。再不撤他们会在上海绝种。"\n\n"你要面子还是命？"',
        choiceL: {
            title: '撤',
            description: '保存实力。用空间换时间。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 6 },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'GERMAN_TRUST', value: 8 },
                ],
            },
        },
        choiceR: {
            title: '守',
            description: '死也要死在聚光灯下。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -20, isBattleDamage: true },
                    { stat: 'INTL', value: 8 },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'GERMAN_TRUST', value: -8 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_051',
        type: 'RANDOM',
        phase: 2,
        speaker: '难民',
        title: '烧房子吗',
        body: '老人指着自己的房子。\n\n"我爷爷盖的。三代人住这里。日本人来了会住进去然后笑。你们能不能先烧掉？让他们什么都得不到。"',
        choiceL: {
            title: '烧',
            description: '让火焰成为最后的抵抗。',
            effects: {
                stats: [
                    { stat: 'SCORCHED_EARTH', value: 12 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'SUPPLY', value: -2 },
                ],
            },
        },
        choiceR: {
            title: '留',
            description: '留着。也许他们还能回来。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_052',
        type: 'RANDOM',
        phase: 2,
        speaker: '88师',
        title: '师部靠租界',
        body: '师长请求：\n\n"把指挥所设在租界边界旁。日本人不敢炸怕打到英国人。"\n\n这是拿别人的规矩当盾牌。',
        choiceL: {
            title: '批',
            description: '让规则成为武器。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 1 },
                    { stat: 'INTL', value: -4 },
                    { stat: 'MORALE', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '拒',
            description: '自己的阵地自己守。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'INTL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_053',
        type: 'RANDOM',
        phase: 2,
        speaker: '高射炮长',
        title: '侦察气球',
        body: '气球在天上飘。它今天看见什么明天炮弹就落在那里。\n\n"打还是不打？我们只有三发炮弹了。"',
        choiceL: {
            title: '打',
            description: '让气球和视线一起坠落。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'INTL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '骗',
            description: '让假阵地吸引真炮弹。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'ELITE', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
    {
        id: 'C_054',
        type: 'RANDOM',
        phase: 2,
        speaker: '电影明星',
        title: '劳军',
        body: '电影明星请求进战区：\n\n"让我给他们唱首歌。让他们在死之前能看见一点美好的东西。"\n\n随行还有记者。镜头能把惨烈变成传奇，也能变成笑话。',
        choiceL: {
            title: '欢迎',
            description: '让美丽成为士气。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: 3 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '婉拒',
            description: '战场不是舞台。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -2 },
                    { stat: 'INTL', value: -1 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_055',
        type: 'RANDOM',
        phase: 2,
        speaker: '工兵',
        title: '桥没炸',
        body: '"桥没炸掉。引线断了。敌人坦克正在过桥。"\n\n工兵班长：\n\n"只有一个办法。让一个人抱着炸药游过去用人工点火。他回不来。"',
        choiceL: {
            title: '问谁愿意',
            description: '问问谁愿意去死。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: 6 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '炮轰',
            description: '用炮弹炸桥。没人需要死在爆炸里。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -10 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_056',
        type: 'RANDOM',
        phase: 2,
        speaker: '陶德曼',
        title: '私下接触',
        body: '德国大使来了：\n\n"日本人托我传话。他们愿意谈条件。"\n\n他看着你："只是接触。听听他们想要什么。谈判不等于投降。"',
        choiceL: {
            title: '听听',
            description: '知道底线在哪里。也许能争取时间。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -6 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'JAP_AGGRO', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '不谈',
            description: '没什么好谈的。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 4 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'GERMAN_TRUST', value: -2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_057',
        type: 'RANDOM',
        phase: 2,
        speaker: '何应钦',
        title: '杂牌抱怨',
        body: '川军将领很愤怒：\n\n"凭什么我们冲锋中央军督战？我的人装备最差死得最多。凭什么？"',
        choiceL: {
            title: '安抚',
            description: '用话弥合裂缝。但话从来都不够。',
            effects: {
                stats: [
                    { stat: 'WARLORD_LOYALTY', value: -6 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '调整',
            description: '把中央军推到前面。让血肉证明公平。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'WARLORD_LOYALTY', value: 8 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'SUPPLY', value: -2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_058',
        type: 'RANDOM',
        phase: 2,
        speaker: '18军',
        title: '阵亡消息',
        body: '电报四行：\n\n"罗团长阵亡。年三十四。妻子在重庆。儿子八岁。"\n\n你盯着这四行字。像盯着一条裂缝。',
        choiceL: {
            title: '追晋宣传',
            description: '让英雄的名字响彻全国。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 4 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '压住',
            description: '让悲伤慢慢流。不给前线更多恐惧。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -4 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'INTL', value: -1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_059',
        type: 'RANDOM',
        phase: 2,
        speaker: '雨季',
        title: '战壕积水',
        body: '连续下了七天雨。战壕变成河。士兵的脚泡在水里开始腐烂。\n\n"烂脚病今天新增一百二十三例。再这样他们走不了路了。"',
        choiceL: {
            title: '排水',
            description: '先保住脚再保住阵地。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'ELITE', value: 2 },
                    { stat: 'MORALE', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '忍',
            description: '在泥水里继续打。阵地比脚重要。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_060',
        type: 'RANDOM',
        phase: 2,
        speaker: '杜月笙',
        title: '奎宁',
        body: '杜月笙送来一箱奎宁。\n\n"疟疾会杀人。这一箱够救三百个。你要分给谁？前线大头兵还是后方军官？"',
        choiceL: {
            title: '分给士兵',
            description: '让每个士兵知道他没被遗忘。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 3 },
                    { stat: 'MORALE', value: 3 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'WARLORD_LOYALTY', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '留给军官',
            description: '优先保住指挥层。蛇无头不行。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 1 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'WARLORD_LOYALTY', value: -2 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_061',
        type: 'RANDOM',
        phase: 2,
        speaker: '顾维钧',
        title: '国联空话',
        body: '国联来电：\n\n"对日军行为表示谴责、关切、遗憾。"\n\n顾维钧把电报放桌上：\n\n"就这些。三个形容词。没有制裁，没有禁运，没有出兵。"',
        choiceL: {
            title: '放弃幻想',
            description: '国联只是远方的观众。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 1 },
                    { stat: 'INTL', value: -6 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '继续等',
            description: '也许下一封电报会不一样。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 2 },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
                extraTimeDelay: 2,
            },
        },
        once: false,
    },
    {
        id: 'C_062',
        type: 'RANDOM',
        phase: 2,
        speaker: '敢死队',
        title: '铁血团',
        body: '三十七个年轻人站在你面前。最大的二十三岁，最小的十七岁。\n\n"让我们组成敢死队。绑着炸药冲进敌人的坦克。我们不需要回来。"',
        choiceL: {
            title: '批',
            description: '让他们去燃烧。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '驳',
            description: '把请战书压住。不需要英雄需要活着的战士。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -3 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_063',
        type: 'RANDOM',
        phase: 2,
        speaker: '汉奸',
        title: '投毒',
        body: '昨天三百多士兵喝了井水。今天七十二个死了。砒霜。\n\n杜月笙说："我的人可以帮你抓。但抓错一个就多十个仇人。"',
        choiceL: {
            title: '封井',
            description: '先处理水源再追责任。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -3 },
                    { stat: 'REFUGEE_CRISIS', value: -2 },
                    { stat: 'MORALE', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '大搜',
            description: '揪出叛徒。用恐惧回应恐惧。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                    { stat: 'JAP_AGGRO', value: -1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_064',
        type: 'RANDOM',
        phase: 2,
        speaker: '苏联',
        title: '志愿航空队',
        body: '苏联代表说：\n\n"我们可以给你飞机、飞行员、教练。条件是你承认我们的存在。翅膀上会有红星。"',
        choiceL: {
            title: '接受',
            description: '先过眼前的难关。政治的账以后算。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 8 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '谢绝',
            description: '不欠这个人情。红星太刺眼。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'INTL', value: -2 },
                    { stat: 'COMMUNIST_INFL', value: -1 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_065',
        type: 'RANDOM',
        phase: 2,
        speaker: '商务印书馆',
        title: '书与火',
        body: '商务印书馆被炸了。纸灰像雪一样飘。\n\n"里面有宋版古籍三百二十七册，孤本无法计算。能抢救一些吗？让文明在战火中活一点？"',
        choiceL: {
            title: '抢救',
            description: '让文明的碎片活下来。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'MORALE', value: 3 },
                    { stat: 'INTL', value: 2 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '放弃',
            description: '活人比死字重要。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -6 },
                    { stat: 'SUPPLY', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_066',
        type: 'RANDOM',
        phase: 2,
        speaker: '狙击手',
        title: '击毙将官',
        body: '狙击手报告：\n\n"击毙一名敌军少将。一颗子弹换来敌人阵地两小时混乱。"\n\n怎么处理这个消息？',
        choiceL: {
            title: '宣传',
            description: '让这颗子弹响彻全国。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'JAP_AGGRO', value: 4 },
                    { stat: 'ELITE', value: -1, isBattleDamage: true },
                ],
            },
        },
        choiceR: {
            title: '低调',
            description: '让敌人慢慢发现。混乱是最好的礼物。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: false,
    },
    {
        id: 'C_067',
        type: 'RANDOM',
        phase: 2,
        speaker: '内部',
        title: '迁都准备',
        body: '有人提起"迁都"。\n\n这两个字像是在地图上提前写下"失守"。\n\n但不写城市也不会因此坚固。',
        choiceL: {
            title: '准备',
            description: '未雨绸缪。承认最坏的可能。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -6 },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '禁止讨论',
            description: '封住这个话题。动摇从嘴开始。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: -8 },
                    { stat: 'REFUGEE_CRISIS', value: 3 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_068',
        type: 'RANDOM',
        phase: 2,
        speaker: '战地',
        title: '敌军日记',
        body: '缴获的日记：\n\n"第三天。我很害怕。中国人不怕死。今天小队长死了。我想回家。"\n\n怎么处理？',
        choiceL: {
            title: '公开',
            description: '让士兵知道敌人也在害怕。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '分析',
            description: '让分析员去读。恐惧也有战术价值。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 3 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                    { stat: 'JAP_AGGRO', value: -1 },
                    { stat: 'MORALE', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_069',
        type: 'RANDOM',
        phase: 2,
        speaker: '粤军',
        title: '慰劳品',
        body: '一批慰劳品送到前线。香烟、罐头、糖果。\n\n军需官问："分发还是卖掉换子弹？士气是战斗力。弹药也是。"',
        choiceL: {
            title: '分',
            description: '让他们知道自己还活着。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 4 },
                    { stat: 'WARLORD_LOYALTY', value: 2 },
                    { stat: 'SUPPLY', value: -1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '卖',
            description: '换弹药。活下去比快乐重要。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 4 },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_070',
        type: 'RANDOM',
        phase: 2,
        speaker: '蒋介石',
        title: '精锐将尽',
        body: '你盯着伤亡表。\n\n德械师原来三万七千人。现在一万一千四。花十年培养，花无数钱装备。三个月快打光了。\n\n"为了国际视听"值得吗？',
        choiceL: {
            title: '值得',
            description: '让世界看见中国在流血。这血不能白流。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 6 },
                    { stat: 'ELITE', value: -8, isBattleDamage: true },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '心痛',
            description: '保存精锐。没有军队就没有国家。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 2 },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
                extraTimeDelay: -2,
            },
        },
        once: false,
    },
];
