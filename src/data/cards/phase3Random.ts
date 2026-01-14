import type { Card } from '../../types';

// Phase 3 Random Cards (C_077 - C_100)
// Rewritten with psychological impact: loss aversion, specific details, second-person address, guilt triggers

export const phase3Random: Card[] = [
    {
        id: 'C_077',
        type: 'RANDOM',
        phase: 3,
        speaker: '杨惠敏',
        title: '送旗',
        body: '女孩站在你面前。\n\n十八岁。\n童子军。\n\n她说：\n\n"让我游过去。\n把这面旗——\n送给仓库的四百人。\n\n河水很凉。\n但——\n那边的人更需要温暖。"',
        choiceL: {
            title: '升旗',
            description: '让她去。让旗帜在炮火中升起。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 32 },
                    { stat: 'INTL', value: 6 },
                    { stat: 'JAP_AGGRO', value: 10 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                ],
            },
        },
        choiceR: {
            title: '藏旗',
            description: '把旗收好。象征可以等，命不能等。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 8 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'ELITE', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_078',
        type: 'RANDOM',
        phase: 3,
        speaker: '白崇禧',
        title: '撤退堵塞',
        body: '公路报告：\n\n"堵死了。\n\n军车、难民、牛车——\n全挤在一起。\n\n天上的飞机——\n每隔二十分钟来一次。\n\n每次——\n地上多几十具尸体。"\n\n你怎么撤？',
        choiceL: {
            title: '分散突围',
            description: '化整为零。各自求生。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: 12 },
                    { stat: 'MORALE', value: -4 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '维持秩序',
            description: '坚持建制。军队就是军队，不是人群。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: -6 },
                    { stat: 'INTL', value: -1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_079',
        type: 'RANDOM',
        phase: 3,
        speaker: '溃兵',
        title: '想回家',
        body: '一个士兵跪在你面前。\n\n二十一岁。\n湖南人。\n入伍七个月。\n\n他说：\n\n"我想回家。\n我妈只有我一个儿子。\n\n求求你——\n放我走吧。"',
        choiceL: {
            title: '枪毙',
            description: '军法如山。让恐惧压住更大的恐惧。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -6 },
                    { stat: 'ELITE', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                    { stat: 'INTL', value: -2 },
                ],
            },
        },
        choiceR: {
            title: '放走',
            description: '让他走。也许他能活着回家。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'WARLORD_LOYALTY', value: -2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_080',
        type: 'RANDOM',
        phase: 3,
        speaker: '军需',
        title: '带不走的物资',
        body: '仓库在身后。\n\n里面：\n步枪弹药：三十万发。\n粮食：够五千人吃一个月。\n\n卡车：只剩两辆。\n\n你带不走。\n\n炸掉——是割肉。\n留下——是给敌人添肉。',
        choiceL: {
            title: '炸毁',
            description: '什么都不留。火焰是最后的拒绝。',
            effects: {
                stats: [
                    { stat: 'SCORCHED_EARTH', value: 22 },
                    { stat: 'SUPPLY', value: -12 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'MORALE', value: -4 },
                ],
            },
        },
        choiceR: {
            title: '留下',
            description: '也许能回来。也许百姓能用。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 4 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: -8 },
                    { stat: 'MORALE', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_081',
        type: 'RANDOM',
        phase: 3,
        speaker: '难民',
        title: '带我们走',
        body: '人群抓着卡车的边缘。\n\n有老人、\n有孩子、\n有抱着婴儿的女人。\n\n"带我们走！\n日本人来了——\n他们会杀光我们的！"\n\n卡车已经超载了。\n再加人——\n会更慢。',
        choiceL: {
            title: '带走',
            description: '挤一挤。人命比速度重要。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'REFUGEE_CRISIS', value: -6 },
                    { stat: 'NANJING_DEFENSE', value: -4 },
                ],
            },
        },
        choiceR: {
            title: '拒绝',
            description: '军车只载军人。活下来才能救更多人。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -22 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'COMMUNIST_INFL', value: 4 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_082',
        type: 'RANDOM',
        phase: 3,
        speaker: '36师',
        title: '只剩三成',
        body: '36师从前线撤下来。\n\n开战时：一万一千人。\n现在：三千三百人。\n\n师长的眼睛红红的：\n\n"给我补充——\n哪怕是新兵也行。\n\n我不想让番号——\n就这么断掉。"',
        choiceL: {
            title: '整编补充',
            description: '把新兵塞进去。让番号活下来。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6 },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'NANJING_DEFENSE', value: 8 },
                    { stat: 'WARLORD_LOYALTY', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '休整后撤',
            description: '让老兵休息。质量比数量重要。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 6 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: -6 },
                ],
                extraTimeDelay: -1,
            },
        },
        once: false,
    },
    {
        id: 'C_083',
        type: 'RANDOM',
        phase: 3,
        speaker: '大雨',
        title: '追击受阻',
        body: '大雨把路变成河。\n\n日军的坦克——\n陷在泥里。\n\n你有两个选择：\n\n趁机喘口气；\n或者——\n趁他们动不了，\n反咬一口。',
        choiceL: {
            title: '稳步撤离',
            description: '让雨成为掩护。安全比荣耀重要。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'MORALE', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '反击',
            description: '他们也陷在泥里。趁机咬回去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'JAP_AGGRO', value: 4 },
                ],
                extraTimeDelay: 2,
            },
        },
        once: false,
    },
    {
        id: 'C_084',
        type: 'RANDOM',
        phase: 3,
        speaker: '后卫',
        title: '谁断后',
        body: '需要一支队伍留下来——\n挡住追兵。\n\n这支队伍——\n大概率回不来了。\n\n老兵断后——\n挡得更久，\n但老兵更难补充。\n\n新兵断后——\n死得更快，\n但新兵还能再征。',
        choiceL: {
            title: '老兵断后',
            description: '让经验守住最后一道线。他们知道怎么死。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: 12 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '新兵断后',
            description: '给新兵一个"证明自己"的机会。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: -10 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'WARLORD_LOYALTY', value: -2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_085',
        type: 'RANDOM',
        phase: 3,
        speaker: '日谍',
        title: '便衣混入',
        body: '撤退人群里——\n有便衣。\n\n他们穿着百姓的衣服，\n说着中国话，\n但眼神不对。\n\n严查会慢。\n不查——\n他们会从背后开枪。',
        choiceL: {
            title: '严查甄别',
            description: '逐个筛查。宁可慢，不能让内鬼活着。',
            effects: {
                stats: [
                    { stat: 'NANJING_DEFENSE', value: 8 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'INTL', value: 1 },
                ],
                extraTimeDelay: -2,
            },
        },
        choiceR: {
            title: '不管快走',
            description: '速度就是生命。让间谍追在后面。',
            effects: {
                stats: [
                    { stat: 'NANJING_DEFENSE', value: -10 },
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_086',
        type: 'RANDOM',
        phase: 3,
        speaker: '记者',
        title: '撤退照片',
        body: '记者想拍一张照片：\n\n撤退的背影、\n燃烧的城市、\n抱着孩子哭泣的女人。\n\n"让世界看见真相。\n哪怕——\n真相是一场溃败。"',
        choiceL: {
            title: '允许拍摄',
            description: '让世界看见。让他们知道我们经历了什么。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 4 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '拒绝',
            description: '不让他们拍耻辱。有些画面不该被记住。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -2 },
                    { stat: 'MORALE', value: 1 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_087',
        type: 'RANDOM',
        phase: 3,
        speaker: '军阀',
        title: '要补充',
        body: '桂军将领站在你面前：\n\n"我的部队——\n打光了。\n\n你要我继续听命——\n就得给我枪、给我钱。\n\n这不是忠诚。\n这是交易。"',
        choiceL: {
            title: '补给',
            description: '给他资源。换他的枪继续指向敌人。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -8 },
                    { stat: 'WARLORD_LOYALTY', value: 14 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'NANJING_DEFENSE', value: 4 },
                ],
            },
        },
        choiceR: {
            title: '推托',
            description: '告诉他没有。让他自己想办法。',
            effects: {
                stats: [
                    { stat: 'WARLORD_LOYALTY', value: -14 },
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_088',
        type: 'RANDOM',
        phase: 3,
        speaker: '铁路',
        title: '先运兵还是设备',
        body: '最后一列火车。\n\n只能装一样东西：\n\n士兵——\n三百二十人，\n能打仗的人。\n\n或者——\n机器，\n能造枪的设备。\n\n你选哪个？',
        choiceL: {
            title: '先运兵',
            description: '人先走。没有兵，机器也是废铁。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'SUPPLY', value: -4 },
                ],
                extraTimeDelay: -1,
            },
        },
        choiceR: {
            title: '先运设备',
            description: '设备是长期战争的基础。人可以走路。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 6 },
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: -6 },
                    { stat: 'SCORCHED_EARTH', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_089',
        type: 'RANDOM',
        phase: 3,
        speaker: '坦克',
        title: '没油了',
        body: '坦克停在路边。\n\n油箱：空的。\n履带：完好。\n炮弹：还有七发。\n\n但它——\n动不了了。\n\n炸掉——\n是割肉。\n\n丢下——\n是给敌人送礼。',
        choiceL: {
            title: '炸毁',
            description: '什么都不留。让它变成废铁。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2 },
                    { stat: 'SCORCHED_EARTH', value: 6 },
                    { stat: 'NANJING_DEFENSE', value: 4 },
                    { stat: 'MORALE', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '丢弃',
            description: '没时间了。跑。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 1 },
                    { stat: 'NANJING_DEFENSE', value: -6 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'MORALE', value: -2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_090',
        type: 'RANDOM',
        phase: 3,
        speaker: '法肯豪森',
        title: '告别',
        body: '法肯豪森站在你面前。\n\n他的行李已经打包好了。\n\n"柏林的命令。\n我——必须走了。"\n\n他看着你：\n\n"你们打得像英雄。\n但——\n英雄不能当补给。\n\n多保重。"',
        choiceL: {
            title: '挽留',
            description: '再帮我们一程。战争还没结束。',
            effects: {
                stats: [
                    { stat: 'GERMAN_TRUST', value: 10 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'MORALE', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '送别',
            description: '谢谢你。我们自己来。',
            effects: {
                stats: [
                    { stat: 'GERMAN_TRUST', value: -6 },
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'INTL', value: -1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_091',
        type: 'RANDOM',
        phase: 3,
        speaker: '汉奸',
        title: '劝降风',
        body: '有人拿着"和平"来敲门：\n\n"日本人说——\n只要放弃抵抗，\n可以保证你们的安全。"\n\n他笑得很假：\n\n"考虑一下？\n继续打下去——\n没有意义。"',
        choiceL: {
            title: '处置',
            description: '让叛徒消失。用血回答背叛。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 4 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '说服挽回',
            description: '也许他只是怕死。试试用话拉回来。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -2 },
                    { stat: 'WARLORD_LOYALTY', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_092',
        type: 'RANDOM',
        phase: 3,
        speaker: '孤儿',
        title: '路上的孩子',
        body: '孩子跟着队伍走。\n\n不哭。\n不闹。\n只是——\n用那种眼神看着你。\n\n大的——\n大概七八岁。\n小的——\n还在流鼻涕。\n\n"叔叔——\n带我们走吧。"',
        choiceL: {
            title: '收容',
            description: '把孩子带上。他们是这场战争里最无辜的人。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'REFUGEE_CRISIS', value: -4 },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'INTL', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '无视',
            description: '军队不是孤儿院。管不了那么多。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -6 },
                    { stat: 'REFUGEE_CRISIS', value: 4 },
                    { stat: 'SUPPLY', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_093',
        type: 'RANDOM',
        phase: 3,
        speaker: '地雷',
        title: '埋雷阻敌',
        body: '工兵问：\n\n"埋地雷——\n能让追兵慢三天。\n\n但——\n这条路以后还要走。\n难民——\n也会踩到。\n\n埋不埋？"',
        choiceL: {
            title: '埋雷',
            description: '让土地变成武器。每一步都是代价。',
            effects: {
                stats: [
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'SCORCHED_EARTH', value: 4 },
                ],
                extraTimeDelay: 3,
            },
        },
        choiceR: {
            title: '不埋',
            description: '那条路以后还要走。不能对自己人设陷阱。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: -4 },
                    { stat: 'INTL', value: 1 },
                ],
                extraTimeDelay: -1,
            },
        },
        once: false,
    },
    {
        id: 'C_094',
        type: 'RANDOM',
        phase: 3,
        speaker: '密码',
        title: '敌更换密码',
        body: '密电科报告：\n\n"敌人换密码了。\n我们——\n听不懂他们在说什么了。\n\n重新破译——\n需要时间和人力。"\n\n你还有多少时间？',
        choiceL: {
            title: '全力破译',
            description: '知己知彼。情报比子弹更重要。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '放弃',
            description: '没时间了。用眼睛代替耳朵。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 1 },
                    { stat: 'NANJING_DEFENSE', value: -8 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_095',
        type: 'RANDOM',
        phase: 3,
        speaker: '霍乱',
        title: '撤退疫病',
        body: '军医报告：\n\n"霍乱。\n已确诊：四十七人。\n疑似：两百多人。\n\n如果和大部队一起撤——\n会传染更多人。\n\n如果留下——\n他们会死。"',
        choiceL: {
            title: '隔离',
            description: '把病人留下。让健康的人先走。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'REFUGEE_CRISIS', value: -6 },
                    { stat: 'INTL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '一起走',
            description: '不抛弃任何人。哪怕病着也要一起。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -22, isBattleDamage: true },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'REFUGEE_CRISIS', value: 6 },
                    { stat: 'NANJING_DEFENSE', value: -6 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_096',
        type: 'RANDOM',
        phase: 3,
        speaker: '苏联',
        title: '空军去向',
        body: '苏援飞机到了。\n\n飞行员问：\n\n"去哪儿？\n\n南京——\n保卫首都。\n\n还是后方——\n保护交通线？"',
        choiceL: {
            title: '去南京',
            description: '首都需要保护。把最好的放在最重要的地方。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 6 },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'COMMUNIST_INFL', value: 6 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '去后方',
            description: '保护后方交通线。南京守不守得住另说。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                    { stat: 'NANJING_DEFENSE', value: -6 },
                    { stat: 'MORALE', value: -2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_097',
        type: 'RANDOM',
        phase: 3,
        speaker: '内部',
        title: '倒卖军火',
        body: '有人把枪变成钱，\n把钱变成逃路。\n\n已经查到：\n三个军需官，\n两个连长。\n\n如果不杀一儆百——\n这支军队会从内部烂掉。',
        choiceL: {
            title: '严查处决',
            description: '枪毙。让所有人看见背叛的代价。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 8 },
                    { stat: 'MORALE', value: 1 },
                    { stat: 'INTL', value: -1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '睁一只眼',
            description: '现在没时间清算。先活过今天。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -10 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'WARLORD_LOYALTY', value: -2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_098',
        type: 'RANDOM',
        phase: 3,
        speaker: '遗书',
        title: '成堆的信',
        body: '遗书堆成山。\n\n有的写给妻子，\n有的写给母亲，\n有的——\n写给还不会说话的孩子。\n\n通讯员问：\n\n"寄回去——\n还是烧掉？\n\n寄回去——\n会让更多人心碎。\n\n烧掉——\n会让他们死得更干净。"',
        choiceL: {
            title: '寄回家',
            description: '让家人知道。死亡也是一种告别。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'SUPPLY', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '烧掉',
            description: '让死亡保持沉默。不给后方更多的悲伤。',
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
        id: 'C_099',
        type: 'RANDOM',
        phase: 3,
        speaker: '张发奎',
        title: '杭州湾防线崩',
        body: '电话那头——\n张发奎的声音在发抖：\n\n"杭州湾——\n突破了。\n\n两个师——\n十分钟就垮了。\n\n敌人正在向南京方向\n快速推进。"\n\n你怎么办？',
        choiceL: {
            title: '快撤南京',
            description: '速度就是生命。先保住主力。',
            effects: {
                stats: [
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'ELITE', value: -4, isBattleDamage: true },
                    { stat: 'MORALE', value: -4 },
                ],
                extraTimeDelay: -1,
            },
        },
        choiceR: {
            title: '节节阻击',
            description: '用战斗换时间。每一步都让敌人付出代价。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
                extraTimeDelay: 3,
            },
        },
        once: false,
    },
    {
        id: 'C_100',
        type: 'RANDOM',
        phase: 3,
        speaker: '伤兵',
        title: '别丢下我们',
        body: '伤兵躺在路边。\n\n有的没有腿，\n有的没有眼睛，\n有的——\n只剩一口气。\n\n他们伸出手：\n\n"别丢下我们。\n求求你——\n别丢下我们。"',
        choiceL: {
            title: '尽量带走',
            description: '能救一个是一个。战友不能丢在路上。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 4 },
                    { stat: 'ELITE', value: -8, isBattleDamage: true },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'NANJING_DEFENSE', value: -4 },
                ],
            },
        },
        choiceR: {
            title: '留下补偿',
            description: '给他们钱和药。让他们自己想办法。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        once: false,
    },
];
