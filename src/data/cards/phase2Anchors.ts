import type { Card } from '../../types';

// Phase 2 锚点卡

export const phase2Anchors: Card[] = [
    {
        id: 'C_031',
        type: 'ANCHOR',
        phase: 2,
        date: '08.23',
        speaker: '侦察兵',
        title: '登陆',
        body: '吴淞口。二十三艘运兵船。每艘一千五百人。\n\n你用望远镜数了两遍。还是二十三艘。\n\n你手下还剩一万八千人。\n\n炮声越来越近了。',
        choiceL: {
            title: '滩头阻击',
            description: '把他们堵在海里。十个换一个。',
            effects: {
                stats: [
                    { stat: 'ELITE', value: -12, isBattleDamage: true },
                    { stat: 'TIME_DELAY', value: 4 },
                    { stat: 'MORALE', value: 5 },
                ],
            },
        },
        choiceR: {
            title: '收缩',
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
        body: '京沪铁路被炸断了。\n\n三百七十二个伤员卡在半路。没有医生，没有药，只有苍蝇。\n\n再等两天弹药就断了。\n\n窗外还在不停地抬人进来。',
        choiceL: {
            title: '抢修',
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
            title: '绕路',
            description: '走公路。慢，但稳。',
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
        body: '陶德曼放下茶杯。信封里是东京的条件。\n\n华北自治。上海非军事化。赔款。\n\n你看了三遍。\n\n你的决定会决定二十万人的生死。还有虚无的未来。',
        choiceL: {
            title: '接受',
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
        body: '铁栅栏外面一个女人抱着孩子敲门。孩子烧得脸通红。\n\n巡捕不开门。命令是不开。\n\n开一次门后面还有一万个人在等。\n\n孩子的哭声越来越小了。',
        choiceL: {
            title: '打通关节',
            description: '灰色手段走灰色地带。',
            effects: {
                stats: [
                    { stat: 'SUPPLY', value: 15 },
                    { stat: 'INTL', value: -10 },
                ],
            },
        },
        choiceR: {
            title: '保持距离',
            description: '不给列强借口。有些命救不了。',
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
        body: '斯诺举着相机站在战壕边。\n\n"让我去最危险的地方。"\n\n警卫说不行。外国人死了麻烦更大。\n\n斯诺说："你们死了这么多人，不应该只是一个数字。"\n\n战壕里还有没抬走的尸体。',
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
            description: '我们的痛苦不需要围观。',
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
        body: '四行仓库。四百二十人。四面都是敌人。\n\n谢晋元电话里问：守到什么时候？\n\n你没有答案。你知道他们不可能活着出来。\n\n苏州河对岸有人在赌他们能活几天。',
        choiceL: {
            title: '死守',
            description: '让他们成为传奇。代价是死亡。',
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
            description: '活着。哪怕缴械被关。',
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
