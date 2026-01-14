import type { Card } from '../../types';

// Phase 1 Random Cards (C_007 - C_030)
// Rewritten with psychological impact: loss aversion, specific details, second-person address, guilt triggers

export const phase1Random: Card[] = [
    {
        id: 'C_007',
        type: 'RANDOM',
        phase: 1,
        speaker: '法肯豪森',
        title: '北方与上海',
        body: '德国顾问的手指在地图上停住。\n\n"你要把八万精锐押在上海。"\n\n他没有抬头：\n\n"他们的妻子、孩子、母亲——\n共四十七万人，\n正在等他们回家。\n\n你确定要把所有筹码\n押在聚光灯最亮的地方？"',
        choiceL: {
            title: '倾巢而出',
            description: '全部精锐开赴上海——让世界见证这场豪赌。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'INTL', value: 12 },
                    { stat: 'GERMAN_TRUST', value: -12 },
                    { stat: 'JAP_AGGRO', value: 6 },
                ],
            },
        },
        choiceR: {
            title: '保存实力',
            description: '留一手。让沃尔夫冈至少能带着"建议"回柏林。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 4 },
                    { stat: 'INTL', value: -8 },
                    { stat: 'GERMAN_TRUST', value: 8 },
                ],
                extraTimeDelay: -8,
            },
        },
        once: false,
    },
    {
        id: 'C_008',
        type: 'RANDOM',
        phase: 1,
        speaker: '高志航',
        title: '升空迎敌',
        body: '防空警报撕裂天空。\n\n跑道尽头的飞行员——\n年龄最大的二十七岁，\n最小的十九岁——\n在等你的一个字。\n\n可用的战斗机：九架。\n来袭敌机：三十二架。\n\n他们的最后一封家书，\n昨晚都已经写好。',
        choiceL: {
            title: '升空',
            description: '让他们迎击——九对三十二。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: 16 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'INTL', value: 3 },
                ],
            },
        },
        choiceR: {
            title: '保机避战',
            description: '让飞机留在地面。让城市承受轰炸。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'GERMAN_TRUST', value: -2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_009',
        type: 'RANDOM',
        phase: 1,
        speaker: '鱼雷艇长',
        title: '雾夜突袭出云',
        body: '江面起雾。艇长站在你面前。\n\n"给我一条艇。"\n\n他的声音很轻：\n\n"我有三个孩子。\n大的七岁，会帮妈妈烧饭了。\n\n我不保证能回来——\n但我保证能撞上它。"',
        choiceL: {
            title: '批准',
            description: '签字。让他去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'JAP_AGGRO', value: 4 },
                ],
                successProbability: 0.1,
                successFlag: 'IzumoSunk',
                successEffects: [
                    { stat: 'MORALE', value: 20 },
                    { stat: 'INTL', value: 15 },
                ],
            },
        },
        choiceR: {
            title: '按下',
            description: '把请战书压在桌上。让他回去陪孩子。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -4 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'INTL', value: -1 },
                    { stat: 'JAP_AGGRO', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_010',
        type: 'RANDOM',
        phase: 1,
        speaker: '俞鸿钧',
        title: '租界通道',
        body: '难民涌向租界的铁门。\n\n门外：三万七千人。\n其中儿童：约四千。\n\n打开它——\n军队的补给通道会瘫痪。\n\n不打开——\n你将看着他们死在铁门外。\n\n巡捕在等你的命令。',
        choiceL: {
            title: '开放通道',
            description: '让他们进去。让军车绕路。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'REFUGEE_CRISIS', value: 12 },
                    { stat: 'INTL', value: 3 },
                    { stat: 'SUPPLY', value: -3 },
                ],
            },
        },
        choiceR: {
            title: '维持封锁',
            description: '军事通道优先。告诉他们另寻出路。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'SUPPLY', value: 6 },
                    { stat: 'REFUGEE_CRISIS', value: 6 },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_011',
        type: 'RANDOM',
        phase: 1,
        speaker: '前线营长',
        title: '坦克支援',
        body: '电话那头的声音在发抖：\n\n"我刚清点完。\n一个连——一百一十二人——\n冲过去时是完整的。\n回来的：十七个。\n\n给我坦克，长官。\n不然我接下来\n只能继续给你报数字。"',
        choiceL: {
            title: '派出坦克',
            description: '调拨仅有的装甲支援——五辆威克斯。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'JAP_AGGRO', value: 4 },
                ],
                unlockCards: ['C_022'],
            },
        },
        choiceR: {
            title: '撤回步兵',
            description: '让他们退下来。让坦克留在后方。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
                extraTimeDelay: -2,
            },
        },
        once: false,
    },
    {
        id: 'C_012',
        type: 'RANDOM',
        phase: 1,
        speaker: '戴笠',
        title: '黄浚疑云',
        body: '戴笠在桌上放下一叠文件。\n\n"黄浚。\n行政院秘书。\n每次军事会议后两小时内，\n日本人就知道内容。"\n\n他的手指敲着照片：\n\n"这三周，\n因为泄密死掉的士兵——\n我数了数——\n超过两千。"',
        choiceL: {
            title: '立即逮捕',
            description: '今夜动手。让泄密停止。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -3 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'JAP_AGGRO', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
                flags: [{ flag: 'SpyCaught', value: true }],
            },
        },
        choiceR: {
            title: '继续监视',
            description: '让他继续。也许能钓出更大的网。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -4 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'INTL', value: 1 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_013',
        type: 'RANDOM',
        phase: 1,
        speaker: '陈诚',
        title: '江阴封锁',
        body: '要堵住长江，\n就得先把自己的船沉下去。\n\n"中山舰"——北伐的功臣。\n"永绩号"——服役二十三年。\n"建康号"——船员平均年龄二十四岁。\n\n你将亲手切断一条经济命脉，\n换一道军事屏障。\n\n这道命令，\n需要你的签字。',
        choiceL: {
            title: '沉船封江',
            description: '签字。让舰队成为水下的城墙。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -12 },
                    { stat: 'NANJING_DEFENSE', value: 10 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 4 },
                    { stat: 'INTL', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '暂缓执行',
            description: '把命令压住。再等等。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 4 },
                    { stat: 'NANJING_DEFENSE', value: -10 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'MORALE', value: -4 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_014',
        type: 'RANDOM',
        phase: 1,
        speaker: '顾维钧',
        title: '租界抗议',
        body: '英国领事的脸涨成猪肝色：\n\n"昨晚的流弹——\n落在公共租界的网球场。\n死了两个人。\n一个英国商人，\n一个法国修女。"\n\n他把照片拍在桌上：\n\n"如果你们继续这样，\n我们撤侨、断联、关门。"',
        choiceL: {
            title: '强硬回应',
            description: '战争没有安全区。告诉他们：搬走或者闭嘴。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -12 },
                    { stat: 'MORALE', value: 6 },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '外交安抚',
            description: '道歉。承诺调查。保住这条与外界连接的脐带。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 6 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_015',
        type: 'RANDOM',
        phase: 1,
        speaker: '杜月笙',
        title: '面具与黑市',
        body: '杜月笙把箱子打开。\n\n里面是防毒面具。\n三千个。\n每个能救一条命。\n\n他笑着说：\n"我知道你用什么眼光看我。\n但我的面具能让你的兵\n喘着气等死，\n而不是咳着血等死。\n\n价钱——你批条子，\n银行那边我来谈。"',
        choiceL: {
            title: '采购',
            description: '批条子。和魔鬼做交易。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -12 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'WARLORD_LOYALTY', value: 2 },
                ],
                flags: [{ flag: 'GasPrep', value: true }],
            },
        },
        choiceR: {
            title: '斥退',
            description: '把他赶出去。不沾这种钱。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 1 },
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_016',
        type: 'RANDOM',
        phase: 1,
        speaker: '炮兵',
        title: '租界边的目标',
        body: '望远镜里，\n敌军司令部的轮廓清晰可见。\n\n问题是——\n它的影子落在租界的边界上。\n\n炮兵连长在等你的命令：\n\n"一炮下去，\n能炸死他们至少三个参谋。\n但也可能炸死两个英国记者。"\n\n你说：',
        choiceL: {
            title: '开炮',
            description: '战争不认识边界。开火。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -12 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                ],
            },
        },
        choiceR: {
            title: '放弃',
            description: '让那个目标活着。外交的线比一条命更难修复。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -5, isBattleDamage: true },
                    { stat: 'INTL', value: 4 },
                    { stat: 'MORALE', value: -3 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_017',
        type: 'RANDOM',
        phase: 1,
        speaker: '龙云',
        title: '滇军是否入沪',
        body: '龙云的电报：\n\n"滇军第六十军已集结完毕。\n两万三千人。\n装备不如你的德械师，\n但我的兵不怕死。\n\n命令一到，\n三天以内可以上火车。"\n\n你知道——\n让他们来，上海多一层血肉。\n不让来，后方多一层屏障。',
        choiceL: {
            title: '调兵入沪',
            description: '让他们来。在上海，一起死或者一起赢。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -6 },
                    { stat: 'WARLORD_LOYALTY', value: 12 },
                    { stat: 'ELITE', value: 2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '留守后方',
            description: '让他们守住西南。战争需要纵深。',
            effects: {
                stats: [
                    { stat: 'WARLORD_LOYALTY', value: -6 },
                    { stat: 'SUPPLY', value: 2 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'NANJING_DEFENSE', value: 4 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_018',
        type: 'RANDOM',
        phase: 1,
        speaker: '88师士兵',
        title: '暗堡前',
        body: '暗堡像一只睁着的眼睛。\n\n子弹从黑洞里飞出来，\n士兵一排排倒下。\n\n营长的报告：\n"六次冲锋。\n倒下的人，我数不过来了。\n还能站着的——\n不到原来的三分之一。"\n\n他在等你的下一个命令。',
        choiceL: {
            title: '继续强攻',
            description: '再冲一次。总有人能冲进去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'MORALE', value: 6 },
                    { stat: 'JAP_AGGRO', value: 4 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '爆破突击',
            description: '派小队绕后。用巧劲换命。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -7, isBattleDamage: true },
                    { stat: 'SUPPLY', value: -2 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_019',
        type: 'RANDOM',
        phase: 1,
        speaker: '国际记者',
        title: '增援传言',
        body: '美国记者的镁光灯闪了三下。\n\n"将军，有消息说\n日军增援正在登陆。\n规模——据说是两个师团。"\n\n他的笔悬在本子上：\n\n"你们打算怎么办？\n全世界都在看着。"',
        choiceL: {
            title: '揭露真相',
            description: '告诉他们敌人有多强大。让世界知道我们面对的是什么。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 6 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '压住消息',
            description: '微笑。说"一切尽在掌握"。让谣言在沉默中死去。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 2 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_020',
        type: 'RANDOM',
        phase: 1,
        speaker: '宋子文',
        title: '法币发抖',
        body: '宋子文翻开账本：\n\n"战争开始以来，\n军费支出：每天一百二十万元。\n中央银行储备：还能撑四十七天。"\n\n他合上账本：\n\n"你有两个选择——\n向民间借债，\n或者直接印钞票。\n\n前者让人恨你，\n后者让人恨钱。"',
        choiceL: {
            title: '发行债券',
            description: '向民间借债。用未来的承诺换今天的子弹。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 16 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'SCORCHED_EARTH', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '加印钞票',
            description: '让印刷机转起来。通胀是以后的事。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 8 },
                    { stat: 'MORALE', value: -10 },
                    { stat: 'REFUGEE_CRISIS', value: 3 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_021',
        type: 'RANDOM',
        phase: 1,
        speaker: '学生',
        title: '送饭上前线',
        body: '一群大学生站在司令部门口。\n\n他们带着热馒头、\n咸菜、\n还有一面写满名字的旗。\n\n为首的女孩——\n大概二十岁——\n眼睛红红的：\n\n"让我们去前线。\n我们不怕死。\n我们只是想让他们知道——\n有人记得他们。"',
        choiceL: {
            title: '鼓励',
            description: '让他们去。让热血的温度传递到战壕里。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 12 },
                    { stat: 'REFUGEE_CRISIS', value: 4 },
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'COMMUNIST_INFL', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '劝回',
            description: '把他们拦住。战场不是课堂。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -3 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: -1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_022',
        type: 'RANDOM',
        phase: 1,
        speaker: '坦克车长',
        title: '弄堂火葬场',
        body: '坦克开进弄堂。\n\n车长的报告：\n\n"太窄了。\n步兵跟不上。\n敌人从窗户往下扔燃烧瓶——\n\n二号车起火了。\n车组四个人——\n三个烧死，一个跳出来被打死。\n\n我们还有三辆。\n你说——继续冲，还是停？"',
        choiceL: {
            title: '继续冲锋',
            description: '坦克就是用来挨打的。冲。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -16, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'JAP_AGGRO', value: 4 },
                    { stat: 'SUPPLY', value: -4 },
                ],
            },
        },
        choiceR: {
            title: '停车掩护',
            description: '让坦克变成固定火力点。等步兵跟上。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'MORALE', value: 3 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
                extraTimeDelay: 1,
            },
        },
        once: true,
        conditions: [{ type: 'cardPlayed', cardId: 'C_011' }],
    },
    {
        id: 'C_023',
        type: 'RANDOM',
        phase: 1,
        speaker: '租界巡捕',
        title: '败兵冲门',
        body: '一群溃兵冲向租界大门。\n\n印度巡捕用枪指着他们：\n"不许进！"\n\n溃兵跪下来：\n"求求你们。\n后面的日本人——\n他们不留俘虏的。"\n\n巡捕看向你：\n"他们是你们的人。\n你来决定。"',
        choiceL: {
            title: '缴械入界',
            description: '让他们放下枪，进去活着。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2 },
                    { stat: 'INTL', value: 6 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'WARLORD_LOYALTY', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '强闯',
            description: '让他们带着枪冲进去。死也要死成军人。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -14 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'JAP_AGGRO', value: 3 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_024',
        type: 'RANDOM',
        phase: 1,
        speaker: '白崇禧',
        title: '侧翼预感',
        body: '白崇禧指着地图上的杭州湾：\n\n"你把所有牌都拍在上海。\n但日本人——\n他们最会从你看不见的地方出现。"\n\n他划了一条线：\n\n"这里，没有人守。\n如果他们从这里登陆——\n上海的部队，\n就会被包饺子。"',
        choiceL: {
            title: '留一手',
            description: '分兵布防侧翼。宁可今天少赢，不要明天全输。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: 1 },
                    { stat: 'MORALE', value: -2 },
                    { stat: 'GERMAN_TRUST', value: 2 },
                ],
                extraTimeDelay: 6,
            },
        },
        choiceR: {
            title: '全押正面',
            description: '集中兵力。在敌人最强的地方，证明我们更强。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'JAP_AGGRO', value: 4 },
                ],
                extraTimeDelay: -6,
            },
        },
        once: false,
    },
    {
        id: 'C_025',
        type: 'RANDOM',
        phase: 1,
        speaker: '87师师长',
        title: '巷战缺火',
        body: '师长压低声音：\n\n"我们没有喷火器。\n没有手榴弹。\n只剩刺刀——\n和恐惧。"\n\n他看着你：\n\n"班长们在问——\n能不能用汽油做土制燃烧弹。\n\n能烧死敌人。\n也可能烧死平民。"',
        choiceL: {
            title: '土法火攻',
            description: '批准。让火焰去清理那些巷子。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -6, isBattleDamage: true },
                    { stat: 'SCORCHED_EARTH', value: 8 },
                    { stat: 'MORALE', value: -4 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '逐屋硬清',
            description: '一间一间地清。用人命换干净的巷子。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -10, isBattleDamage: true },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 2 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_026',
        type: 'RANDOM',
        phase: 1,
        speaker: '汪精卫',
        title: '灰色的声音',
        body: '汪精卫的话说得很轻：\n\n"这样打下去——\n每天两千人。\n一个月，就是六万。\n\n你打算杀光所有年轻人吗？"\n\n他看着窗外：\n\n"我不是说投降。\n我只是在问——\n有没有别的路？"',
        choiceL: {
            title: '厉声斥责',
            description: '用愤怒回应他。抗战到底——没有退路。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 6 },
                    { stat: 'INTL', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '沉默不语',
            description: '什么也不说。让沉默回答他。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'COMMUNIST_INFL', value: 4 },
                    { stat: 'WARLORD_LOYALTY', value: -2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_027',
        type: 'RANDOM',
        phase: 1,
        speaker: '记者',
        title: '要什么介入',
        body: '外国记者问：\n\n"你们希望国际社会怎么做？\n制裁日本？\n还是——直接出兵？"\n\n他的镜头对准你。\n全世界都在等你的答案。\n\n你知道——\n说"制裁"，很安全，但没用。\n说"出兵"，很危险，但真实。',
        choiceL: {
            title: '呼吁制裁',
            description: '让经济的刀去割侵略者。安全，但缓慢。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 6 },
                    { stat: 'JAP_AGGRO', value: 2 },
                    { stat: 'SUPPLY', value: -1 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '呼吁出兵',
            description: '让子弹来回答子弹。激进，但真实。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -6 },
                    { stat: 'MORALE', value: 2 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                    { stat: 'JAP_AGGRO', value: 4 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_028',
        type: 'RANDOM',
        phase: 1,
        speaker: '军医',
        title: '止痛已尽',
        body: '军医站在你面前，\n衣服上全是血：\n\n"止痛药用完了。\n吗啡、可待因——\n全部用完。\n\n现在做截肢手术——\n伤员是清醒的。\n听得见锯子的声音。\n\n我只剩下鸦片。\n你批不批？"',
        choiceL: {
            title: '鸦片替代',
            description: '批准。让他们至少能睡着。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -3 },
                    { stat: 'MORALE', value: -6 },
                    { stat: 'ELITE', value: 1 },
                    { stat: 'COMMUNIST_INFL', value: 1 },
                ],
            },
        },
        choiceR: {
            title: '硬扛',
            description: '不批。让他们清醒着承受。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -12 },
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                    { stat: 'GERMAN_TRUST', value: 1 },
                    { stat: 'REFUGEE_CRISIS', value: 1 },
                ],
            },
        },
        once: false,
    },
    {
        id: 'C_029',
        type: 'RANDOM',
        phase: 1,
        speaker: '商会',
        title: '机器内迁',
        body: '商会代表拿着一份清单：\n\n"上海的工厂——\n钢铁厂、纺织厂、军工厂——\n一共四百二十七家。\n\n拆掉机器，运往内地——\n需要两个月。\n\n问题是——\n这两个月，\n你就没有子弹了。"',
        choiceL: {
            title: '迁往后方',
            description: '拆。让机器在内地重新转动。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -12 },
                    { stat: 'NANJING_DEFENSE', value: 6 },
                    { stat: 'INTL', value: 2 },
                    { stat: 'SCORCHED_EARTH', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '留在原地',
            description: '让机器继续运转。也许战争比预想的短。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 6 },
                    { stat: 'INTL', value: -2 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_030',
        type: 'RANDOM',
        phase: 1,
        speaker: '水鬼',
        title: '凿沉运输船',
        body: '三个水鬼站在你面前。\n\n最年轻的：十九岁。\n最老的：二十三岁。\n\n他们说：\n\n"敌人的运输船——\n装满弹药，\n停在黄浦江。\n\n让我们游过去。\n凿沉它。\n\n我们不需要回来的命令。"',
        choiceL: {
            title: '批准',
            description: '签字。让他们去。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -2, isBattleDamage: true },
                    { stat: 'JAP_AGGRO', value: 3 },
                    { stat: 'MORALE', value: 3 },
                ],
                extraTimeDelay: 1,
            },
        },
        choiceR: {
            title: '取消',
            description: '把请战书压住。让他们活着回去。',
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
];
