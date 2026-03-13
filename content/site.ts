export type NavLink = {
  href: string;
  label: string;
  short: string;
  description: string;
};

export type FactCard = {
  label: string;
  value: string;
  description: string;
};

export type StoryCard = {
  title: string;
  text: string;
  accent: string;
};

export type PrincipleCard = {
  title: string;
  summary: string;
  detail: string;
};

export type FavoriteCard = {
  category: string;
  item: string;
  note: string;
};

export type GalleryEntry = {
  title: string;
  image: string;
  tag: string;
  caption: string;
};

export type ContactCard = {
  title: string;
  value: string;
  note: string;
};

export type FortuneReply = {
  title: string;
  text: string;
  hint: string;
};

export const profile = {
  name: "蓝诗亦",
  courtesyName: "沐谦",
  city: "杭州",
  role: "自由探索者",
  mbti: "ENFP",
  heroTitle: "一个把生活过成半本诗、半本段子的国风少年",
  heroDescription:
    "03 年夏天出厂，常驻杭州。研究 AI、学习商业、喜欢散步，也擅长在朋友情绪快没电时递上一颗温柔充电宝。",
  tagline: "半认真半整活，主打一个好看、好玩、还挺靠谱。",
  opening: "你好，我是蓝诗亦，字沐谦。一个阳光、温暖、幽默，偶尔嘴贫但原则从不打折的人。",
  outro: "山高路远，我们顶峰相见。要是路上还能顺手讲两个笑话，那就更圆满了。",
};

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "首页",
    short: "名帖",
    description: "先看气质，再看来路。",
  },
  {
    href: "/about",
    label: "小传",
    short: "小传",
    description: "把性格、习惯与原则摊开讲。",
  },
  {
    href: "/works",
    label: "造物录",
    short: "造物",
    description: "作品不多，但野心很饱满。",
  },
  {
    href: "/blog",
    label: "随笔集",
    short: "随笔",
    description: "有诗意，也有嘴贫。",
  },
  {
    href: "/gallery",
    label: "照片簿",
    short: "照片",
    description: "主像、山野和戏台都已经到场。",
  },
  {
    href: "/contact",
    label: "投帖处",
    short: "投帖",
    description: "若你也真诚，欢迎递个话头。",
  },
];

export const identityModes = [
  {
    id: "modern",
    label: "蓝诗亦",
    subtitle: "现代版名帖",
    quote: "今天走温柔又会抖包袱的路线。",
    description: "比较像一个会陪你散步、聊天、顺手给生活加一点仪式感的人。",
  },
  {
    id: "ancient",
    label: "沐谦",
    subtitle: "古风版称号",
    quote: "正经的时候像君子，嘴贫的时候像侠客。",
    description: "偏向温润书生与清醒隐士的结合体，适合在竹影和风声里出场。",
  },
] as const;

export const heroBadges = [
  "阳光",
  "温暖",
  "幽默",
  "正直",
  "自由探索者",
  "杭州常驻",
];

export const quickFacts: FactCard[] = [
  {
    label: "常驻城市",
    value: "杭州",
    description: "文艺的那一面，几乎长在空气里。",
  },
  {
    label: "人格底色",
    value: "ENFP",
    description: "热闹、好奇、会整活，但不是胡来。",
  },
  {
    label: "出没时段",
    value: "17:00 - 22:00",
    description: "最适合散步、聚会、和人间重新和解。",
  },
  {
    label: "研究方向",
    value: "AI + 商业",
    description: "嘴上说灵感，手上想落地。",
  },
];

export const signaturePhrases = [
  "山高路远，我们顶峰相见。",
  "只有足够优秀，才能遇到优秀的人。",
  "生活不能没有仪式感，就像西方不能没有耶路撒冷。",
  "天生我材必有用，千金散尽还复来。",
];

export const storyCards: StoryCard[] = [
  {
    title: "03 年夏天出厂",
    text: "目前处在人生剧本的热血修订期，成熟了一点，可爱这项配置还没删。",
    accent: "夏日晴光",
  },
  {
    title: "杭州生活样本",
    text: "喜欢城市里的文艺与从容，也喜欢风一吹就像能把烦心事吹薄一点。",
    accent: "园林诗意",
  },
  {
    title: "热闹局常驻嘉宾",
    text: "朋友堆里能组织、能捧哏、能倾听，也能冷不丁来一句神评论。",
    accent: "气氛组组长",
  },
  {
    title: "20 岁生日派对主理人",
    text: "我最骄傲的一次兑现，是把想象中的仪式感，真的办成了。",
    accent: "仪式感选手",
  },
  {
    title: "直接离职那天",
    text: "做过最勇敢的决定之一，是不让自己困在不喜欢的节奏里。",
    accent: "有骨气",
  },
  {
    title: "创业念头一直在线",
    text: "有人提醒过我：一辈子只想着打工挣更多钱，那一辈子都在打工。于是我开始认真想更大的可能。",
    accent: "野心不吵闹",
  },
];

export const principles: PrincipleCard[] = [
  {
    title: "玩笑归玩笑",
    summary: "我可以抖包袱，但做事不会拿原则开玩笑。",
    detail: "幽默感是温度，不是油滑；正直才是底色。",
  },
  {
    title: "真诚要落地",
    summary: "喜欢能把话说清楚的人，不爱全靠猜。",
    detail: "遇到误解更愿意解释清楚，因为关系值得被认真对待。",
  },
  {
    title: "靠谱是日常习惯",
    summary: "眼里有活，手上有数，答应的事尽量不打折。",
    detail: "不是硬装成熟，而是希望自己配得上别人给的信任。",
  },
  {
    title: "仪式感要有烟火气",
    summary: "生活当然可以朴素，但不能一直敷衍自己。",
    detail: "会认真过生日，也会认真对待一次普通散步。",
  },
  {
    title: "阳光不是没烦恼",
    summary: "更多时候是哈哈哈哈，偶尔也会在心里偷偷演八百集。",
    detail: "但我愿意把情绪收拾好，再继续把日子过亮一点。",
  },
  {
    title: "人可以可爱，三观不能歪",
    summary: "我最想守住的底线，是三观正。",
    detail: "礼貌、分寸、正直，是我对“君子”二字最朴素的理解。",
  },
];

export const favorites: FavoriteCard[] = [
  {
    category: "最像我的天气",
    item: "晴天",
    note: "最好是下午五点以后，风不急，人也不赶。",
  },
  {
    category: "续命法宝",
    item: "水果",
    note: "心情不太行的时候，至少先让嘴巴过得去。",
  },
  {
    category: "稳定爱好",
    item: "散步",
    note: "一边走，一边把脑子里打架的念头劝和。",
  },
  {
    category: "理想周末",
    item: "朋友 + 散步 + 聚会 + DIY",
    note: "热闹大概占八成，剩下两成留给发呆。",
  },
  {
    category: "桌面暴露人格",
    item: "可爱壁纸",
    note: "君子也可以很萌，这两件事并不冲突。",
  },
  {
    category: "心里压轴独白",
    item: "磕磕碰碰，奇奇怪怪，可可爱爱",
    note: "阳光，要是再有钱一点就更好了。",
  },
];

export const galleryEntries: GalleryEntry[] = [
  {
    title: "樱树下的主像",
    image: "/photos/hero-portrait.png",
    tag: "封面席",
    caption: "首屏主视觉本人已到场。樱花、晚霞、青衣和玫瑰，把温柔与君子感一次讲明白。",
  },
  {
    title: "泰山日出",
    image: "/photos/mount-taishan-sunrise.jpg",
    tag: "顶峰见",
    caption: "“山高路远，我们顶峰相见”这句话终于有了现场照片，而且还是日出限定版。",
  },
  {
    title: "武功山定格",
    image: "/photos/wugong-mountain.jpg",
    tag: "少年气",
    caption: "云雾、冲锋衣、一本正经摆 pose。清醒隐士和热血少年在这张里短暂联名。",
  },
  {
    title: "花旦时刻",
    image: "/photos/huadan-performance.png",
    tag: "反差彩蛋",
    caption: "学校里的花旦表演照，很适合证明：我不止会整活，戏台上的温柔和分寸感也接得住。",
  },
];

export const contactCards: ContactCard[] = [
  {
    title: "线上投帖",
    value: "联系方式待你补充",
    note: "这个坑位已经留好，后续可改成邮箱、微信、GitHub 或社交账号。",
  },
  {
    title: "聊天偏好",
    value: "真诚、成熟、阳光",
    note: "会聊天的人，和晚风一样让人舒服。",
  },
  {
    title: "最佳开场白",
    value: "“最近有没有什么好玩的想法？”",
    note: "比起“在吗”，我更喜欢能直接点亮灵感的话头。",
  },
  {
    title: "线下偶遇指南",
    value: "杭州傍晚散步路线",
    note: "如果你也喜欢走路和聊天，我们大概能聊到月亮出来。",
  },
];

export const fortuneReplies: FortuneReply[] = [
  {
    title: "上上签",
    text: "今日宜认真发光，忌假装高冷。你本来就挺暖，别把自己演成空调外机。",
    hint: "建议：笑着把正事做好，顺手再讲两个笑话。",
  },
  {
    title: "园林签",
    text: "近期心绪像湖面微波，看着温柔，底下其实全是灵感。别急，慢慢捞。",
    hint: "建议：散个步，再回来做决定。",
  },
  {
    title: "侠客签",
    text: "你可以嘴贫，但别怀疑自己的锋芒。该出手时出手，该温柔时也别忘记。",
    hint: "建议：今天适合把想法落地一小步。",
  },
  {
    title: "晴天签",
    text: "表面哈哈哈哈也没关系，真正厉害的人，本来就知道怎么边笑边长大。",
    hint: "建议：给自己一点仪式感，哪怕只是买一杯喜欢的饮料。",
  },
  {
    title: "富贵签",
    text: "天生我材必有用，千金散尽还复来。重点不是散尽，是你迟早还会再赚回来。",
    hint: "建议：继续学商业，继续研究能挣钱的浪漫。",
  },
];

export const ambientHints = [
  "园林风声已开张，请轻拿轻放你的烦心事。",
  "耳边长出一点点诗意，不会吵，只会轻轻飘。",
  "这不是背景音乐，这是今天的松弛许可证。",
];
