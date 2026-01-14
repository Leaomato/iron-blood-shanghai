import type { Ending } from '../types';

// ===== 结局文案 - 心理学驱动重写 =====
// 原则：损失厌恶、具体细节、二人称直击、内疚转嫁

export const endings: Ending[] = [
    {
        id: 'E_01',
        title: '溃',
        body: '第88师的名册还在你桌上。三千七百个名字。你认识其中十二个。\n\n现在，名册上每一个名字都划了横线。\n\n"全员阵亡"四个字很容易写。但你写不下去。因为你记得那个叫李根生的排长，他来自山东，他跟你说过他老婆刚生了儿子，他想给儿子取名叫"胜"。\n\n他儿子这辈子都不会知道父亲长什么样。\n\n而这，是你签的字。',
        conditions: [
            { type: 'stat', stat: 'ELITE', comparison: 'lte', value: 0 },
        ],
        priority: 1,
        buttonText: '合上名册',
    },
    {
        id: 'E_02',
        title: '空',
        body: '军需官站在你面前，双手空空。\n\n"没有了。"\n\n没有子弹。没有绷带。没有粮食。没有药品。一个叫王守义的伤兵今天早上咬着木棍死去，因为止痛药三天前就用完了。他疼了七十二个小时。\n\n你本可以早点撤退。你本可以少打一场仗。你本可以不那么贪功。\n\n可你没有。\n\n现在，你的士兵正在用石头砸开储藏室的门——里面只有发霉的稻草。',
        conditions: [
            { type: 'stat', stat: 'SUPPLY', comparison: 'lte', value: 0 },
        ],
        priority: 2,
        buttonText: '无话可说',
    },
    {
        id: 'E_03',
        title: '沉默',
        body: '日内瓦的电报间沉默了。\n\n你的代表在走廊里截住了一个英国人。"我们死了二十万人。""是的，很遗憾。"英国人整理了一下袖口，"但我们的利益……"\n\n他没说完。他不需要说完。\n\n你曾经相信国际正义，相信《九国公约》，相信有人会站出来替弱者说话。现在你知道了：没有人替穷人说话，除非穷人的血溅到他们的鞋上。\n\n你的血，溅到他们的窗帘上，但窗帘可以换一块新的。',
        conditions: [
            { type: 'stat', stat: 'INTL', comparison: 'lte', value: 0 },
        ],
        priority: 3,
        buttonText: '关闭电台',
    },
    {
        id: 'E_04',
        title: '散',
        body: '第一批逃兵出现在凌晨三点。\n\n没有人追。没有人喊。就像一滴墨落进水里，看着它扩散，然后染黑整杯水。天亮的时候，防线上只剩下一半人。中午，四分之一。\n\n你的参谋跪在地上痛哭。"他们不是懦夫！他们扛了三个月了！是我们没有给够他们子弹、吃的、希望……"\n\n他没有说"是你"。但你听见了。\n\n是你没有给够他们希望。\n\n而没有希望的人，没有理由留下送死。',
        conditions: [
            { type: 'stat', stat: 'MORALE', comparison: 'lte', value: 0 },
        ],
        priority: 4,
        buttonText: '他们没有错',
    },
    {
        id: 'E_08',
        title: '墨',
        body: '你签了字。\n\n德国大使把条约卷起来的时候，你听见自己的呼吸声很响。整个房间都安静得像座坟。\n\n条约上写着：停战。但你知道这两个字的真正意思：投降。跪下。认输。承认你死了二十万人、守了三个月，最后什么都没换到。\n\n走出房间的时候，外面下着雨。你没有打伞。\n\n雨水从脸上流下来。没有人知道那是雨还是别的什么。',
        conditions: [
            { type: 'flag', flag: 'TrautmannAccepted', flagValue: true },
        ],
        priority: 5,
        buttonText: '走进雨里',
    },
    {
        id: 'E_10',
        title: '火',
        body: '出云号在燃烧。\n\n你站在江边看了很久。火光把你的脸照得忽明忽暗。你知道这改变不了任何事。你知道明天日本人会派来更多的船。你知道这场战争你还是会输。\n\n但就这一刻——\n\n就这一刻，你允许自己觉得：我们扳回来一点了。就一点点。然后你转身回到指挥部，继续签那些送人去死的命令。\n\n因为还没输完。因为还有血可以流。',
        conditions: [
            { type: 'flag', flag: 'IzumoSunk', flagValue: true },
        ],
        priority: 6,
        buttonText: '还没输完',
    },
    {
        id: 'E_13',
        title: '灰',
        body: '你烧了这座城市。\n\n命令是你签的。汽油是你批的。每一栋燃烧的建筑，每一个被困在火里的老人和孩子，都是你没来得及疏散的。\n\n"战术需要。"你这样告诉自己。"敌人什么都得不到。"这话你说了很多遍，直到自己差点相信。\n\n但你知道：你烧的不只是房子。你烧掉了他们的记忆，他们的生活，他们活下去的理由。\n\n有些人跳进了苏州河。有些人干脆站在原地等火烧过来。\n\n他们恨敌人。但他们更恨下令放火的人。',
        conditions: [
            { type: 'stat', stat: 'SCORCHED_EARTH', comparison: 'gt', value: 80 },
        ],
        priority: 7,
        buttonText: '无法辩解',
    },
    {
        id: 'E_12',
        title: '红',
        body: '他们来了。你请来的。\n\n那些穿灰布军装的人，眼睛亮得吓人。他们不怕死。他们不要军饷。他们相信一些你听不懂的东西。\n\n你用他们挡住了日本人。但你也打开了一扇门。那扇门通向你看不清的地方。\n\n十二年后的某一天，你会站在另一艘船上，望着这片土地变成不属于你的颜色。那时候你会想起来：这颗种子，是你亲手埋下的。',
        conditions: [
            { type: 'stat', stat: 'COMMUNIST_INFL', comparison: 'gt', value: 70 },
        ],
        priority: 8,
        buttonText: '历史的账',
    },
    {
        id: 'E_14',
        title: '别',
        body: '他把最后一份地图叠好，放进皮箱。\n\n"法肯豪森先生……"\n\n他摇了摇头。他不看你的脸。你知道他在想什么：如果你听我的，事情不会变成这样。\n\n明天他就要登船回德国。那个真正懂现代战争的人，你赶走了。或者说，你傲慢地放弃了。\n\n从此以后，没有人会再告诉你实话。他们只会告诉你想听的话。\n\n而你将孤独地犯下一个又一个错误，直到输掉一切。',
        conditions: [
            { type: 'stat', stat: 'GERMAN_TRUST', comparison: 'lt', value: 20 },
        ],
        priority: 9,
        buttonText: '目送他离开',
    },
    {
        id: 'E_15',
        title: '裂',
        body: '他们来"共商国是"的时候，你知道自己已经输了。\n\n嫡系打光了。德械师没了。那些和你一起从黄埔出来的人，现在躺在上海的每一条战壕里。\n\n剩下的是什么？滇系、桂系、川军、晋绥军……他们坐在你的会议室里，笑着谈论"团结抗日"。\n\n你知道他们在想什么。他们在想：你手里没兵了，你不得不用我们的价格。\n\n抗日？他们关心的从来不是抗日。',
        conditions: [
            { type: 'stat', stat: 'WARLORD_LOYALTY', comparison: 'gt', value: 80 },
            { type: 'stat', stat: 'ELITE', comparison: 'lt', value: 10 },
        ],
        priority: 10,
        buttonText: '政治的代价',
    },
    {
        id: 'E_06',
        title: '门',
        body: '南京城门还开着。\n\n难民从四面八方涌进来。从上海，从苏州，从昆山，从无锡。他们以为城墙能挡住坦克。他们以为首都是安全的。\n\n你知道真相。但你没有告诉他们。因为告诉他们又能怎样？他们能去哪里？\n\n六周后，这座城市将经历人类历史上最黑暗的浩劫。三十万人——具体数字至今争议——将死在你来不及布置的防线里。\n\n你活着撤出去了。他们没有。',
        conditions: [
            { type: 'stat', stat: 'NANJING_DEFENSE', comparison: 'lt', value: 40 },
            { type: 'date', afterDate: '1937-11-26' },
        ],
        priority: 11,
        buttonText: '这是你的责任',
    },
    {
        id: 'E_07',
        title: '撤',
        body: '命令在凌晨三点下达。很短，十七个字：全线撤退，保存实力，向南京靠拢。\n\n你最后站在地图前，看了一眼上海。三个月前，你发誓要守住这里。三个月后，你签字放弃它。\n\n但你没有全输。你的部队还剩两万。你的弹药还够打三场仗。你的德国顾问还在。\n\n这不是胜利。这是喘息。你用二十万条命，换来几十天的喘息。\n\n够吗？不够。\n\n但这是你唯一能做的了。',
        conditions: [
            { type: 'stat', stat: 'ELITE', comparison: 'gt', value: 50 },
            { type: 'stat', stat: 'GERMAN_TRUST', comparison: 'gt', value: 80 },
            { type: 'date', afterDate: '1937-11-26' },
        ],
        priority: 12,
        buttonText: '且战且退',
    },
    {
        id: 'E_09',
        title: '舰',
        body: '帕奈号沉了。美国人死了。华盛顿炸锅了。\n\n这不是正义觉醒，这是利益边界被触碰。美国人不在乎你死多少人，但他们在乎自己死几个。\n\n突然之间，那些沉默的门打开了。钱开始流进来，武器开始流进来，谴责开始对准东京。\n\n你用别人的血，换来了自己的筹码。这很可耻。但你没有别的办法。\n\n弱者的正义，永远需要强者的利益来买单。',
        conditions: [
            { type: 'stat', stat: 'INTL', comparison: 'gte', value: 90 },
            { type: 'flag', flag: 'PanayProvoked', flagValue: true },
        ],
        priority: 13,
        buttonText: '代价与收获',
    },
    {
        id: 'E_05',
        title: '烬',
        body: '战役结束了。上海以一种破碎的姿态，落入敌人手中。\n\n你没有守住。但你也没有在两周内崩溃。你的士兵死得很惨，但他们也让敌人付出了代价。\n\n某种意义上，这就是胜利——不是打赢，而是打不死。证明这个国家还没烂到骨子里。\n\n但这种胜利的代价太高了。你知道。\n\n那些死去士兵的家人不会原谅你。他们会问：为什么是我丈夫？为什么是我儿子？为什么？\n\n你没有答案。你永远不会有答案。',
        conditions: [
            { type: 'date', afterDate: '1937-11-26' },
        ],
        priority: 100,
        buttonText: '翻过这一页',
    },
    {
        id: 'E_11',
        title: '梦',
        body: '你醒了。\n\n枕头是湿的。窗外很安静。没有炮声，没有警报，没有燃烧的天空。\n\n1937年已经过去很久了。你还活着，而他们没有。\n\n你有时候想：如果当时我做了不同的选择呢？如果我早点撤退，晚点进攻，多派一个师，少死一万人……\n\n但历史没有如果。你做了你能做的。或者你以为你做了你能做的。\n\n现在你只剩下记忆，和记忆带来的东西。\n\n多年后，当有人问起那场战争，你只会说一句话：太惨了。\n\n然后沉默。',
        conditions: [],
        priority: 999,
        buttonText: '这只是游戏',
        isLocked: true,
    },
];

export const endingMap: Map<string, Ending> = new Map(
    endings.map(ending => [ending.id, ending])
);
