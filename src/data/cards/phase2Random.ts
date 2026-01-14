import type { Card } from '../../types';

// Phase 2 Random Cards (C_037 - C_070)
// Rewritten with psychological impact: loss aversion, specific details, second-person address, guilt triggers

export const phase2Random: Card[] = [
    {
        id: 'C_037',
        type: 'RANDOM',
        phase: 2,
        speaker: '罗店守军',
        title: '罗店磨坊',
        body: '前线电话：\n\n"报告伤亡。\n今天——八百二十三人。\n昨天——九百一十一人。\n前天——七百六十七人。"\n\n他的声音很平静：\n\n"连长们平均年龄二十四岁。\n现在——已经换到第五批了。\n\n请问——\n明天还继续填吗？"',
        choiceL: {
            title: '继续填人',
            description: '用血肉换时间。每一具尸体都是谈判筹码。',
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
            title: '夜袭破局',
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
        body: '碉堡的门像一只闭着的眼睛。\n\n工兵班长：\n\n"钥匙丢了。\n我们有两个选择——\n炸开它，需要二十公斤TNT；\n挖坑埋掉它，需要三天。"\n\n他看着门外等着进去的伤员：\n\n"伤员们——\n大概还能撑两天。"',
        choiceL: {
            title: '爆破',
            description: '用炸药开路。昂贵，但迅速。',
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
            title: '围困挖掘',
            description: '慢慢挖。看谁撑得更久。',
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
        body: '火车门打开。\n\n他们穿着草鞋，\n背着汉阳造，\n有些人的枪比自己还老。\n\n为首的团长——\n三十二岁，\n黑瘦，\n眼睛很亮：\n\n"我们从四川来。\n走了十八天。\n能打仗。\n\n只是——\n装备差了点。"',
        choiceL: {
            title: '换装德械',
            description: '把最好的装备给他们。让草鞋军变成钢铁军。',
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
            title: '直接上阵',
            description: '没时间换装。让他们用手里的武器证明自己。',
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
        body: '昨晚——\n有人在城里打信号弹。\n今早——\n炮弹精准地落在医院上。\n\n死亡人数：\n医生七人，\n护士十二人，\n伤员一百零三人。\n\n杜月笙说：\n"我的人已经查到是谁了。\n你要走法律程序——\n还是让他消失？"',
        choiceL: {
            title: '黑道处理',
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
            title: '司法处理',
            description: '走正规程序。慢，但留下制度。',
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
        body: '德国顾问指着沙盘：\n\n"你们在正面挨炮。\n每天损失一个营。\n\n把阵地藏到山背后——\n敌人的炮火就会打空。"\n\n他叹了口气：\n\n"这不是勇敢不勇敢的问题。\n这是——\n你想让多少人活着回家的问题。"',
        choiceL: {
            title: '采纳战术',
            description: '听从顾问。用智慧代替血肉。',
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
            title: '坚持原计划',
            description: '你的战场，你做主。外国人不懂中国的战法。',
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
        body: '画家张乐平站在你面前：\n\n"让我画一个故事——\n让士兵们笑一笑。\n让他们知道，\n就算死，\n也有人会记得他们。"\n\n他手里拿着草稿——\n一个瘦小的"三毛"，\n穿着太大的军装。',
        choiceL: {
            title: '资助创作',
            description: '让画笔成为武器。士气也是战斗力。',
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
            title: '按下不表',
            description: '战争不是画报。让画家去后方。',
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
        title: '把希望押在会议',
        body: '朱绍良看着日历：\n\n"十一月三日——\n九国公约会议。\n\n撑到那天，\n列强也许会干预。\n\n距离那天——\n还有十六天。\n\n按现在的伤亡速度——\n还需要填进去一万两千人。"\n\n他问你：\n"值得吗？"',
        choiceL: {
            title: '继续硬撑',
            description: '为了那张会议桌，再多流一点血。',
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
            title: '认清现实',
            description: '不再对外部抱有幻想。自己的仗，自己打。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -8 },
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
        body: '电话那头的声音很累：\n\n"36师——\n开战时：一万一千人。\n现在：四千七百人。\n\n连长以上军官——\n阵亡或重伤：百分之七十三。\n\n请求轮换。\n请求——\n让我们喘口气。"',
        choiceL: {
            title: '拒绝轮换',
            description: '告诉他们：后方没有替补，只有你们。',
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
            title: '批准轮换',
            description: '让他们撤下来。活着才能继续战斗。',
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
        body: '军医站在你面前，\n眼圈发黑：\n\n"磺胺用完了。\n绷带用完了。\n能用的——只剩下锯子。\n\n今天截了三十七条腿。\n明天——\n如果不来药的话——\n大概还要截更多。"\n\n他问：\n"还有办法吗？"',
        choiceL: {
            title: '截肢保命',
            description: '切掉腐烂的部分，让人活着回家。',
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
            title: '草药土法',
            description: '试试老办法。也许运气会帮忙。',
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
        body: '戴笠拿着一份口供：\n\n"俘虏供认——\n日军第十军，\n正在向杭州湾集结。\n\n如果他们从那里登陆——\n上海的部队，\n会被包饺子。"\n\n他看着你：\n\n"这情报——\n你信，还是不信？"',
        choiceL: {
            title: '重视并准备',
            description: '宁可信其有。分兵布防杭州湾。',
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
            title: '当作佯动',
            description: '不上当。他们想让你分兵，你偏不。',
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
        title: '游击与联合',
        body: '一封建议书送到案头。\n\n八路军代表：\n\n"我们可以在敌后——\n破坏铁路，\n骚扰补给线，\n让他们睡不好觉。\n\n条件很简单——\n给我们合法的名义。"\n\n你知道——\n借来的刀，早晚要还。',
        choiceL: {
            title: '允许合作',
            description: '敌人的敌人，暂时可以是朋友。',
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
            title: '严防渗透',
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
        body: '一群孩子站在门口。\n\n最大的十四岁，\n最小的十一岁。\n\n他们拿着自己叠的绷带、\n家里凑的钱、\n和一面写满名字的旗：\n\n"让我们去前线。\n让他们知道——\n有人在想着他们。"',
        choiceL: {
            title: '允许慰问',
            description: '让他们去。让希望的种子落在绝望的土地上。',
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
            title: '劝回',
            description: '战场不是课外活动。让他们回家。',
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
        body: '军需官的报告：\n\n"弹药储备——\n平均每人：五发。\n\n按目前消耗速度——\n还能撑——两天。\n\n在那之后——\n只剩刺刀。"',
        choiceL: {
            title: '白刃战',
            description: '省下子弹。让刺刀说话。',
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
            title: '放弃阵地',
            description: '退到有弹药的地方再打。阵地可以让，人不能死光。',
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
        body: '法肯豪森不再委婉：\n\n"德械师——\n你还有多少？\n\n87师：剩百分之三十五。\n88师：剩百分之四十一。\n36师：剩百分之二十八。\n\n再不撤——\n他们会在上海绝种。\n\n你要一座城的面子——\n还是一支军的命？"',
        choiceL: {
            title: '有序后撤',
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
            title: '死守给会议看',
            description: '让全世界看见我们流血。哪怕死也要死在聚光灯下。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -20, isBattleDamage: true },
                    { stat: 'INTL', value: 6 },
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
        body: '老人指着自己的房子：\n\n"这房子——\n我爷爷盖的。\n三代人住在这里。\n\n日本人过来后——\n他们会住进去。\n会笑。\n\n你们能不能——\n先把它烧掉？\n\n让他们什么也得不到。"',
        choiceL: {
            title: '烧',
            description: '让火焰成为最后的抵抗。什么都不留给敌人。',
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
            description: '留下房子。也许他们还能回来。',
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
        body: '师长请求：\n\n"把指挥所设在租界边界线旁。\n日本人不敢炸——\n怕打到英国人。"\n\n这是拿别人的规矩当盾牌。\n\n风险是——\n如果英国人抗议，\n你会失去更多。',
        choiceL: {
            title: '批准',
            description: '让规则成为武器。保住指挥核心。',
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
            title: '拒绝',
            description: '自己的阵地，自己守。不玩擦边球。',
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
        speaker: '国际友人',
        title: '侦察气球',
        body: '气球在天空漂浮。\n\n今天——\n它看见了什么，\n明天——\n炮弹就会落在那里。\n\n高射炮长问：\n\n"打还是不打？\n我们只有三发炮弹了。"',
        choiceL: {
            title: '击落',
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
            title: '伪装欺骗',
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
        body: '电影明星请求进战区：\n\n"让我给他们唱首歌。\n让他们——\n在死之前——\n能看见一点美好的东西。"\n\n随行的还有记者。\n镜头能把惨烈变成传奇。\n也能把传奇变成笑话。',
        choiceL: {
            title: '欢迎',
            description: '让美丽成为士气。镜头也是武器。',
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
            description: '战场不是舞台。让她在后方等消息。',
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
        body: '工兵班长站在你面前：\n\n"桥没炸掉。\n引线断了。\n\n现在——\n敌人的坦克正在过桥。\n\n只有一个办法——\n让一个人抱着炸药\n游过去\n用人工点火。\n\n他——回不来。"',
        choiceL: {
            title: '人肉爆破',
            description: '问问谁愿意去。',
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
            title: '炮火覆盖',
            description: '用炮弹轰桥。昂贵，但没人需要死在爆炸里。',
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
        body: '德国大使陶德曼来了：\n\n"日本人——\n托我传话。\n他们说——\n愿意谈条件。"\n\n他看着你：\n\n"只是——接触。\n听听他们想要什么。\n\n谈判不等于投降。"',
        choiceL: {
            title: '听听条件',
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
            title: '拒绝接触',
            description: '没什么好谈的。抵抗是唯一的语言。',
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
        body: '川军的将领很愤怒：\n\n"凭什么——\n我们冲锋，\n中央军督战？\n\n我的人——\n装备最差，\n死得最多。\n\n凭什么？"',
        choiceL: {
            title: '安抚解释',
            description: '用话语弥合裂缝。但话语从来都不够。',
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
            title: '调整部署',
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
        body: '电报：\n\n"罗团长阵亡。\n年三十四岁。\n妻子在重庆，\n儿子八岁。"\n\n你盯着这四行字——\n像盯着一条裂缝。\n\n怎么处理这个消息？',
        choiceL: {
            title: '追晋宣传',
            description: '让英雄的名字响彻全国。用死亡点燃士气。',
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
            title: '压下消息',
            description: '让悲伤慢慢流。不给前线更多的恐惧。',
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
        body: '连续下了七天雨。\n\n战壕变成河。\n士兵的脚泡在水里——\n开始腐烂。\n\n军医报告：\n"烂脚病——\n今天新增一百二十三例。\n再这样下去——\n他们走不了路了。"',
        choiceL: {
            title: '排水防病',
            description: '先保住人的脚，再保住阵地。',
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
            title: '忍受坚持',
            description: '让他们在泥水里继续战斗。阵地比脚重要。',
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
        body: '杜月笙送来一箱奎宁：\n\n"疟疾会杀人。\n这一箱——\n够救三百个。"\n\n他看着你：\n\n"你要分给谁？\n前线的大头兵——\n还是后方的军官？"',
        choiceL: {
            title: '分发基层',
            description: '让每一个士兵都知道：你没有被遗忘。',
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
        body: '国联来电：\n\n"对日军行为表示——\n谴责、关切、遗憾。"\n\n顾维钧把电报放在桌上：\n\n"就这些。\n三个形容词。\n\n没有制裁，\n没有禁运，\n没有出兵。\n\n他们——\n只会说话。"',
        choiceL: {
            title: '不再寄望',
            description: '放弃幻想。国联只是远方的观众。',
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
            title: '继续等待',
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
        body: '三十七个年轻人站在你面前。\n\n最大的二十三岁，\n最小的十七岁。\n\n他们请求：\n\n"让我们组成敢死队。\n绑着炸药——\n冲进敌人的坦克。\n\n我们——\n不需要回来。"',
        choiceL: {
            title: '批准',
            description: '签字。让他们去燃烧。',
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
            title: '驳回',
            description: '把请战书压住。不需要英雄，需要活着的战士。',
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
        body: '昨天——\n三百多个士兵喝了井水。\n今天——\n七十二个人死了。\n\n验尸结果：砒霜。\n\n有人在井里下毒。\n\n杜月笙说：\n"我的人可以帮你抓——\n但抓错一个，\n就会多十个仇人。"',
        choiceL: {
            title: '封井消杀',
            description: '先处理水源，再追究责任。',
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
            title: '大搜捕',
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
        body: '苏联代表说：\n\n"我们可以给你——\n飞机、飞行员、教练。\n\n条件是——\n你承认我们的存在。\n\n翅膀上会有红星。"',
        choiceL: {
            title: '接受援助',
            description: '先度过眼前的难关。政治的账以后再算。',
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
            title: '婉言谢绝',
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
        body: '商务印书馆被炸了。\n\n纸灰像雪一样飘落。\n\n馆长说：\n\n"里面有——\n宋版古籍三百二十七册，\n孤本——无法计算。\n\n能抢救一些吗？\n让文明——\n在战火中\n活下来一点？"',
        choiceL: {
            title: '抢救古籍',
            description: '派人去。让文明的碎片在战火中活下来。',
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
            description: '让书烧掉。活人比死字更重要。',
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
        body: '狙击手的报告：\n\n"击毙一名敌军将官。\n少将军衔。\n\n一颗子弹——\n换来敌人阵地\n两小时的混乱。"\n\n你怎么处理这个消息？',
        choiceL: {
            title: '嘉奖宣传',
            description: '让这颗子弹响彻全国。英雄需要舞台。',
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
            title: '低调处理',
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
        body: '有人提起"迁都"。\n\n这两个字——\n像是在地图上\n提前写下"失守"。\n\n但——\n不写，\n城市也不会\n因此坚固。',
        choiceL: {
            title: '早做准备',
            description: '未雨绸缪。承认最坏的可能，才能准备最好的结果。',
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
        body: '缴获的日记：\n\n"第三天——\n我很害怕。\n中国人不怕死。\n\n今天小队长死了。\n我想回家。\n我不想死在这里。"\n\n你怎么处理这本日记？',
        choiceL: {
            title: '公开鼓舞',
            description: '让士兵们知道：敌人也是血肉之躯，也在害怕。',
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
            title: '情报利用',
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
        body: '一批慰劳品送到前线：\n\n香烟、罐头、糖果。\n\n军需官问：\n\n"分发——\n还是卖掉换子弹？\n\n士气是战斗力。\n弹药也是战斗力。\n\n你选哪个？"',
        choiceL: {
            title: '分发',
            description: '让他们享用。让他们知道自己还活着。',
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
            title: '换钱',
            description: '卖掉，买弹药。活下去比快乐更重要。',
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
        body: '你盯着伤亡表。\n\n德械师——\n原来：三万七千人。\n现在：一万一千四百人。\n\n这些人——\n花了十年培养，\n花了无数钱装备。\n\n现在——\n三个月就快打光了。\n\n"为了国际视听"——\n值得吗？',
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
            title: '心痛收缩',
            description: '保存精锐。没有军队，就没有国家。',
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
