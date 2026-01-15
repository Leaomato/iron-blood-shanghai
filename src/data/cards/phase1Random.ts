import type { Card } from '../../types';

// Phase 1 Random Cards (C_007 - C_030)

export const phase1Random: Card[] = [
    {
        id: 'C_007',
        type: 'RANDOM',
        phase: 1,
        speaker: '法肯豪森',
        title: '北方与上海',
        body: '"你要把八万精锐押在上海。"\n\n德国人的手指在地图上停住。\n\n"他们有妻子。有母亲。有孩子。你想让他们死在聚光灯下？"',
        choiceL: {
            title: '倾巢而出',
            description: '把所有筹码压在上海。',
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
            description: '留一手。以后还要打。',
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
        body: '九架。对三十二架。\n\n飞行员最大的二十七，最小的十九。昨晚他们都写了遗书。\n\n"让我们上去。"高志航说。\n\n他没说"让我们回来"。',
        choiceL: {
            title: '升空',
            description: '九对三十二。',
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
            title: '保机',
            description: '让城市挨炸。让飞机留着。',
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
        title: '雾夜突袭',
        body: '艇长有三个孩子。大的七岁。\n\n"给我一条艇。我撞上去。"\n\n他没说能回来。\n\n他妻子在宁波等他。锅里的粥还热着。',
        choiceL: {
            title: '批准',
            description: '让他去。',
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
            title: '压住',
            description: '不批。他还有三个孩子。',
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
        body: '铁门外面是难民。三万七千人。四千个孩子。\n\n开门，军车就过不去了。\n\n不开门，他们就死在门外面。\n\n有个女孩在哭。她大概五岁。她不知道发生了什么。',
        choiceL: {
            title: '开门',
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
            title: '封锁',
            description: '军事优先。让他们自己想办法。',
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
        body: '"一个连冲上去。一百一十二人。回来十七个。"\n\n电话那头哭了。\n\n"给我坦克。不然我只能继续给你报数字。"',
        choiceL: {
            title: '派坦克',
            description: '调最后的五辆威克斯过去。',
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
            title: '撤步兵',
            description: '让他们退下来。坦克留后方。',
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
        title: '疑云',
        body: '"每次军事会议后两小时，日本人就知道内容。"\n\n戴笠敲着照片。\n\n"因为他，这三周死了两千多人。"\n\n你认识他。你们一起吃过饭。',
        choiceL: {
            title: '抓',
            description: '今夜动手。',
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
            title: '盯着',
            description: '让他继续。钓更大的鱼。',
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
        body: '要堵住长江，就得沉掉自己的船。\n\n中山舰。北伐老功臣。永绩号。服役二十三年。\n\n沉下去之后，上海的棺材就运不出去了。',
        choiceL: {
            title: '沉船',
            description: '让军舰变成水下的城墙。',
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
            title: '暂缓',
            description: '再等等。还没到那一步。',
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
        body: '英国领事脸涨得通红。\n\n"流弹落在网球场。死了一个英国商人，一个法国修女。"\n\n他把照片拍桌上。\n\n"再这样，我们撤侨断联。"',
        choiceL: {
            title: '硬顶',
            description: '战争没有安全区。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -6 },
                    { stat: 'MORALE', value: 6 },
                    { stat: 'SUPPLY', value: -4 },
                    { stat: 'JAP_AGGRO', value: 2 },
                ],
            },
        },
        choiceR: {
            title: '安抚',
            description: '道歉。承诺调查。保住这条线。',
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
        title: '防毒面具',
        body: '杜月笙打开箱子。三千个防毒面具。\n\n"你用什么眼光看我都行。但我这东西能让你的兵喘着气死，不是咳着血死。"\n\n价钱不便宜。',
        choiceL: {
            title: '买',
            description: '和魔鬼做交易。',
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
            title: '赶走',
            description: '不沾这种钱。',
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
        body: '望远镜里，敌军司令部的轮廓清清楚楚。\n\n但它的影子落在租界边界上。\n\n"一炮下去，能炸死三个参谋。也可能炸死两个英国记者。"',
        choiceL: {
            title: '开炮',
            description: '战争不认边界。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -6 },
                    { stat: 'JAP_AGGRO', value: 6 },
                    { stat: 'MORALE', value: 4 },
                    { stat: 'ELITE', value: -3, isBattleDamage: true },
                ],
            },
        },
        choiceR: {
            title: '放弃',
            description: '外交的线比一条命更难修。',
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
        title: '滇军入沪',
        body: '龙云的电报：\n\n"六十军集结完毕。两万三千人。装备差一点。但我的兵不怕死。"\n\n让他们来，上海多一层血肉。不来，后方多一层屏障。',
        choiceL: {
            title: '调来',
            description: '在上海一起死或者一起赢。',
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
            title: '留着',
            description: '守住西南。战争需要纵深。',
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
        body: '暗堡像一只黑眼睛。\n\n"六次冲锋。倒下的人数不过来了。还能站着的不到三分之一。"\n\n营长的声音在发抖。',
        choiceL: {
            title: '继续冲',
            description: '总有人能冲进去。',
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
            title: '绕后爆破',
            description: '派小队绕。用人命换巧劲。',
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
        body: '美国记者的镁光灯闪了三下。\n\n"有消息说日军增援正在登陆。两个师团。你们怎么办？"\n\n全世界都在看着。你说什么，明天就是报纸头条。',
        choiceL: {
            title: '说实话',
            description: '告诉他们敌人有多强。',
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
            title: '压住',
            description: '微笑。说一切尽在掌握。',
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
        body: '"军费每天一百二十万。储备还能撑四十七天。"\n\n宋子文合上账本。\n\n"向民间借债，或者直接印钞票。前者让人恨你，后者让人恨钱。"',
        choiceL: {
            title: '发债',
            description: '用未来的承诺换今天的子弹。',
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
            title: '印钱',
            description: '让印刷机转。通胀是以后的事。',
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
        body: '一群大学生站在门口。带着热馒头，咸菜，一面写满名字的旗。\n\n为首的女孩大概二十岁。眼眶红红的。\n\n"让我们去前线。让他们知道有人记得他们。"',
        choiceL: {
            title: '让她去',
            description: '让热血的温度传到战壕里。',
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
            title: '拦住',
            description: '战场不是课堂。',
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
        title: '弄堂',
        body: '坦克开进弄堂。太窄了。\n\n"二号车起火。四个人，三个烧死，一个跳出来被打死。"\n\n还有三辆。',
        choiceL: {
            title: '继续',
            description: '坦克就是用来挨打的。',
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
            title: '停',
            description: '变成固定火力点。等步兵。',
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
        body: '溃兵跪在租界门口。\n\n"求求你们。后面日本人不留俘虏。"\n\n印度巡捕用枪指着他们。\n\n"他们是你们的人。"',
        choiceL: {
            title: '缴械入界',
            description: '放下枪，进去活着。',
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
            description: '带着枪冲进去。死也要死成军人。',
            effects: {
                stats: [
                    { stat: 'INTL', value: -8 },
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
        body: '白崇禧指着杭州湾。\n\n"这里没人守。要是他们从这儿上来，上海就是饺子馅。"\n\n你把所有牌都拍在上海了。他说的对。但你没有兵了。',
        choiceL: {
            title: '分兵',
            description: '布防侧翼。今天少赢，明天不输。',
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
            title: '全押',
            description: '在敌人最强的地方证明我们更强。',
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
        body: '"没有喷火器。没有手榴弹。只剩刺刀和恐惧。"\n\n师长压低声音：\n\n"班长问能不能用汽油做燃烧弹。能烧死敌人。也可能烧死平民。"',
        choiceL: {
            title: '批准',
            description: '让火焰清理那些巷子。',
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
            title: '逐屋清',
            description: '一间一间清。用人命换干净。',
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
        body: '汪精卫说得很轻：\n\n"每天两千人。一个月六万。你打算杀光所有年轻人吗？"\n\n他看着窗外。\n\n"有没有别的路？"',
        choiceL: {
            title: '斥责',
            description: '抗战到底。没有退路。',
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
            title: '沉默',
            description: '什么也不说。',
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
        title: '国际介入',
        body: '外国记者问：\n\n"你们希望国际社会怎么做？制裁还是出兵？"\n\n镜头对准你。全世界在等。',
        choiceL: {
            title: '制裁',
            description: '让经济的刀去割。',
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
            title: '出兵',
            description: '让子弹回答子弹。',
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
        body: '军医浑身是血。\n\n"止痛药用完了。截肢的时候伤员是清醒的。听得见锯子的声音。"\n\n他的手很稳，但他的声音在抖\n"只剩鸦片了。"',
        choiceL: {
            title: '批',
            description: '让他们至少能睡着。',
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
            title: '不批',
            description: '让他们清醒着承受。',
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
        body: '"上海的工厂，四百二十七家。拆掉机器运往内地要两个月。"\n\n商会代表看着你。\n\n"这两个月，你就没子弹了。"',
        choiceL: {
            title: '迁',
            description: '让机器在内地重新转。',
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
            title: '留',
            description: '让机器继续转。也许战争比预想的短。',
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
        body: '三个水鬼。最小的十九岁。\n\n"敌人运输船停在黄浦江。让我们游过去凿沉它。"\n\n他们没说"回来"。',
        choiceL: {
            title: '批',
            description: '让他们去。',
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
            title: '压住',
            description: '让他们活着回去。',
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
