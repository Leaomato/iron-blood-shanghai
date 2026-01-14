import type { Card } from '../../types';

// Phase 2 锚点卡 - 心理学驱动重写
// 技巧：损失框架、具体数字、二人称直击、内疚触发

export const phase2Anchors: Card[] = [
    {
        id: 'C_031',
        type: 'ANCHOR',
        phase: 2,
        date: '08.23',
        speaker: '侦察兵',
        title: '登陆',
        body: '吴淞口。日军登陆。\n\n你用望远镜数了一遍。二十三艘运兵船。每艘一千五百人。再数一遍。还是二十三艘。\n\n你手下还剩多少人？一万八千。\n\n你把望远镜放下，揉了揉眼睛。外面的炮声越来越近了。',
        choiceL: {
            title: '滩头阻击',
            description: '把他们堵在海里。哪怕十个换一个。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'TIME_DELAY', value: 4 },
                    { stat: 'MORALE', value: 5 },
                ],
            },
        },
        choiceR: {
            title: '收缩防线',
            description: '保存实力。滩头是绞肉机。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -3 },
                    { stat: 'TIME_DELAY', value: 1 },
                    { stat: 'MORALE', value: -10 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_032',
        type: 'ANCHOR',
        phase: 2,
        date: '09.01',
        speaker: '后勤部',
        title: '断路',
        body: '京沪铁路被炸断了。\n\n第一批伤员卡在半路。三百七十二个人，躺在铁皮车厢里，没有医生，没有药，只有苍蝇。\n\n军需官说：再等两天，弹药就断供了。\n\n你看了一眼窗外。外面的伤员还在不停地被抬进来。越抬越多。',
        choiceL: {
            title: '抢修铁路',
            description: '派工兵去。抢一天是一天。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 10 },
                    { stat: 'ELITE', value: -5, isBattleDamage: true },
                    { stat: 'TIME_DELAY', value: -1 },
                ],
            },
        },
        choiceR: {
            title: '改走公路',
            description: '绕路。慢，但稳。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: -10 },
                    { stat: 'TIME_DELAY', value: 2 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_033',
        type: 'ANCHOR',
        phase: 2,
        date: '09.15',
        speaker: '德国大使',
        title: '停战',
        body: '陶德曼放下茶杯。他的表情很职业——不同情，也不冷漠。\n\n信封里是东京的条件。你打开看了三遍。\n\n华北自治。上海非军事化。赔款。\n\n你的参谋在旁边站着，不敢呼吸。他们知道你接下来的决定，会决定接下来二十万人的生死。\n\n还有历史的走向。',
        choiceL: {
            title: '接受调停',
            description: '咽下去。活着比什么都重要。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -20 },
                    { stat: 'INTL', value: 10 },
                ],
                flags: [{ flag: 'TrautmannAccepted', value: true }],
                triggerEnding: 'E_08',
            },
        },
        choiceR: {
            title: '拒绝',
            description: '有些东西不能卖。即便代价是死。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 10 },
                    { stat: 'JAP_AGGRO', value: 15 },
                    { stat: 'INTL', value: -5 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_034',
        type: 'ANCHOR',
        phase: 2,
        date: '10.01',
        speaker: '租界巡捕',
        title: '边界',
        body: '租界的铁栅栏那边，一个女人抱着孩子在敲门。\n\n孩子烧得脸通红。女人在哭。巡捕站在那里不动——他的命令是不开门。\n\n你站在远处看着这一切。你可以让人开门。但开一次门，后面还有一万个人在等。\n\n孩子的哭声越来越小了。',
        choiceL: {
            title: '利用租界',
            description: '私下打通关节。灰色地带，灰色手段。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 15 },
                    { stat: 'INTL', value: -10 },
                ],
            },
        },
        choiceR: {
            title: '保持距离',
            description: '不给列强借口。有些命，救不了。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 10 },
                    { stat: 'SUPPLY', value: -5 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_035',
        type: 'ANCHOR',
        phase: 2,
        date: '10.15',
        speaker: '美国记者',
        title: '镜头',
        body: '埃德加·斯诺举着相机站在战壕边。\n\n"让我去最危险的地方。"\n\n你的警卫说不行。太危险了。外国人死了，麻烦更大。\n\n但斯诺看着你的眼睛说："真相需要被看见。你们死了这么多人，不应该只是一个数字。"\n\n你想起昨天的战况。战壕里还有没来得及抬走的尸体。',
        choiceL: {
            title: '让他去',
            description: '让世界看见。包括最丑陋的部分。',
            effects: {
                stats: [
                    { stat: 'INTL', value: 15 },
                    { stat: 'MORALE', value: -5 },
                ],
                flags: [{ flag: 'ForeignPress', value: true }],
            },
        },
        choiceR: {
            title: '拒绝',
            description: '我们的痛苦，不需要围观。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: 10 },
                    { stat: 'INTL', value: -5 },
                ],
            },
        },
        once: true,
    },
    {
        id: 'C_036',
        type: 'ANCHOR',
        phase: 2,
        date: '10.26',
        speaker: '谢晋元',
        title: '仓库',
        body: '四行仓库。四百二十人。四面都是敌人。\n\n谢晋元在电话里问你：守到什么时候？\n\n你没有答案。你知道他们不可能活着出来。你也知道，如果他们不守，防线就绝对守不住。\n\n苏州河对岸，租界的窗户后面，有人在看。有人在拍照。有人在赌他们能活几天。\n\n你说：能守多久，守多久。\n\n然后你挂了电话。你没有说再见。',
        choiceL: {
            title: '死守',
            description: '他们会成为传奇。即便传奇的代价是死亡。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -8, isBattleDamage: true },
                    { stat: 'MORALE', value: 15 },
                    { stat: 'INTL', value: 15 },
                    { stat: 'TIME_DELAY', value: 3 },
                ],
                flags: [{ flag: 'WarehouseHeld', value: true }],
            },
        },
        choiceR: {
            title: '撤入租界',
            description: '活着。哪怕是缴械被关。',
            effects: {
                stats: [
                    { stat: 'MORALE', value: -10 },
                    { stat: 'INTL', value: 5 },
                ],
            },
        },
        once: true,
    },
];
