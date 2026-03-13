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
  href?: string;
};

export type FortuneReply = {
  title: string;
  text: string;
  hint: string;
};

export type PosterScene = {
  badge: string;
  title: string;
  quote: string;
  note: string;
  stamp: string;
};

export const profile = {
  name: "蓝诗亦",
  courtesyName: "沐谦",
  city: "杭州",
  role: "自由探索者",
  mbti: "ENFP",
  heroTitle: "把温柔、幽默与分寸感写进日常的国风少年",
  heroDescription:
    "03 年夏天出厂，常驻杭州。关注 AI 与商业，也认真经营生活里的散步、表达，以及人与人之间舒服而真诚的相处方式。",
  tagline: "气质温和，表达有趣，做事尽量靠谱。",
  opening: "你好，我是蓝诗亦，字沐谦。希望别人认识我时，先感受到真诚，再慢慢发现我身上的幽默与温度。",
  outro: "山高路远，我们顶峰相见。愿我始终保持清醒、温暖，也保留一点让人会心一笑的轻松。",
};

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "首页",
    short: "名帖",
    description: "先见气质，再读其人。",
  },
  {
    href: "/about",
    label: "小传",
    short: "小传",
    description: "了解性格、经历与处世观。",
  },
  {
    href: "/works",
    label: "造物录",
    short: "造物",
    description: "看我在做什么，也看我想把什么做好。",
  },
  {
    href: "/blog",
    label: "随笔集",
    short: "随笔",
    description: "写给生活，也写给认真看世界的人。",
  },
  {
    href: "/gallery",
    label: "照片簿",
    short: "照片",
    description: "山野、戏台与日常，一起拼成更真实的我。",
  },
  {
    href: "/contact",
    label: "投帖处",
    short: "投帖",
    description: "如果你也真诚，欢迎来聊一聊。",
  },
];

export const identityModes = [
  {
    id: "modern",
    label: "蓝诗亦",
    subtitle: "现代版名帖",
    quote: "温和、会聊天，也愿意把事情做踏实。",
    description: "更接近日常状态里的我：有亲和力，也有自己的节奏、边界和做事方式。",
  },
  {
    id: "ancient",
    label: "沐谦",
    subtitle: "古风版称号",
    quote: "有书生气，也有一点不失锋芒的清醒。",
    description: "像这个称号想表达的那样：温润、正直、克制，但从不把有趣关在门外。",
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
    description: "这座城市的文艺与从容，慢慢也成了我的一部分。",
  },
  {
    label: "人格底色",
    value: "ENFP",
    description: "外向、好奇、反应快，但做事并不随意。",
  },
  {
    label: "出没时段",
    value: "17:00 - 22:00",
    description: "傍晚到夜里，是我最松弛、也最清醒的时候。",
  },
  {
    label: "研究方向",
    value: "AI + 商业",
    description: "关注效率，也在意想法怎样真正落地。",
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
    text: "还在成长，也越来越明白自己想成为什么样的人。",
    accent: "夏日晴光",
  },
  {
    title: "杭州生活样本",
    text: "喜欢这座城市的清朗、文艺和不慌不忙，也喜欢它给人的呼吸感。",
    accent: "园林诗意",
  },
  {
    title: "热闹局常驻嘉宾",
    text: "在朋友堆里能组织、能接话，也愿意在热闹里照顾别人的感受。",
    accent: "气氛组组长",
  },
  {
    title: "20 岁生日派对主理人",
    text: "把想法变成现实，是我理解仪式感最具体的一次实践。",
    accent: "仪式感选手",
  },
  {
    title: "直接离职那天",
    text: "学会在重要节点替自己做决定，是成熟里很关键的一课。",
    accent: "有骨气",
  },
  {
    title: "创业念头一直在线",
    text: "比起只谈稳定，我更想认真思考长期的可能，也愿意为此持续积累。",
    accent: "野心不吵闹",
  },
];

export const principles: PrincipleCard[] = [
  {
    title: "玩笑归玩笑",
    summary: "幽默是表达方式，不会拿原则和分寸去换效果。",
    detail: "轻松可以有，轻浮不必有；真正站得住的，还是做人的底色。",
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
    summary: "认真对待日常，是我理解生活感的一种方式。",
    detail: "它不一定昂贵，但应该真诚；不一定盛大，但应该用心。",
  },
  {
    title: "阳光不是没烦恼",
    summary: "乐观不是没情绪，而是学会把情绪安顿好。",
    detail: "我不回避起伏，但会尽量把自己整理好，再继续把日子过亮一点。",
  },
  {
    title: "人可以可爱，三观不能歪",
    summary: "人可以有趣，但价值观必须端正。",
    detail: "礼貌、分寸、正直，是我理解“君子感”最重要的三个词。",
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
    note: "这件小事很能说明，我喜欢让日常里保留一点轻松感。",
  },
  {
    category: "心里压轴独白",
    item: "磕磕碰碰，奇奇怪怪，可可爱爱",
    note: "希望一直保有阳光、可爱和向上生长的劲头。",
  },
];

export const galleryEntries: GalleryEntry[] = [
  {
    title: "樱树下的主像",
    image: "/photos/hero-portrait.png",
    tag: "封面席",
    caption: "樱花、晚霞、青衣与玫瑰放在一起，刚好把温柔、分寸和少年气讲清楚。",
  },
  {
    title: "泰山日出",
    image: "/photos/mount-taishan-sunrise.jpg",
    tag: "顶峰见",
    caption: "把“顶峰相见”从一句话，走成了一次真实的经历，而且是日出限定版。",
  },
  {
    title: "武功山定格",
    image: "/photos/wugong-mountain.jpg",
    tag: "少年气",
    caption: "山顶的风景和姿态里，都有一点热血少年的样子，也保留着清醒和松弛。",
  },
  {
    title: "花旦时刻",
    image: "/photos/huadan-performance.png",
    tag: "反差彩蛋",
    caption: "这张照片很适合说明：我喜欢表达，也愿意认真对待舞台、呈现和每一次投入。",
  },
];

export const contactCards: ContactCard[] = [
  {
    title: "联系邮箱",
    value: "3199912548@qq.com",
    note: "适合合作沟通、认真交流或正式联系，来信时带一句来意会更高效。",
    href: "mailto:3199912548@qq.com",
  },
  {
    title: "微信",
    value: "ykxklmyt0611",
    note: "如果通过微信联系，建议简单备注一下来意，方便我更快认出你。",
  },
  {
    title: "聊天偏好",
    value: "真诚、成熟、坦率",
    note: "舒服的交流，往往来自清楚、尊重与恰到好处的分寸感。",
  },
  {
    title: "推荐开场白",
    value: "“最近在做什么有意思的事？”",
    note: "比起客套寒暄，我更喜欢直接进入真实、具体的话题。",
  },
];

export const posterHighlights = [
  "阳光",
  "温暖",
  "幽默",
  "正直",
  "杭州",
  "ENFP",
];

export const posterScenes: Record<string, PosterScene> = {
  home: {
    badge: "当前页 · 首页",
    title: "把温柔、幽默与分寸感写进日常",
    quote: "扫一扫，比我做一整段自我介绍更快。",
    note: "先看气质，再慢慢了解来路。",
    stamp: "欢迎串门",
  },
  about: {
    badge: "当前页 · 小传",
    title: "如果要认识一个人，不妨从他的原则与日常开始",
    quote: "没有夸张设定，只有一些真实塑造了我的片段。",
    note: "比起标签，我更希望别人从表达与处世里看见我。",
    stamp: "慢慢认识",
  },
  works: {
    badge: "当前页 · 造物录",
    title: "想法要有去处，表达也要有完成度",
    quote: "作品可以慢一点长大，但不想只停在“看起来不错”。",
    note: "这里放的是已完成的内容和正在推进的方向。",
    stamp: "认真打磨",
  },
  blog: {
    badge: "当前页 · 随笔集",
    title: "写给生活，也写给认真看世界的人",
    quote: "把散步、成长、关系和微妙心绪，写成能慢慢读下去的文字。",
    note: "如果你也偏爱有温度的表达，也许会在这里读到一些共鸣。",
    stamp: "今日可读",
  },
  gallery: {
    badge: "当前页 · 照片簿",
    title: "山野、戏台与日常，一起拼成更真实的我",
    quote: "照片不是摆拍说明书，更像是一些时刻的现场记录。",
    note: "主像、山顶、戏台，合起来才更像完整的我。",
    stamp: "请看图说话",
  },
  contact: {
    badge: "当前页 · 投帖处",
    title: "带着想法来，也欢迎带着真诚来",
    quote: "邮箱和微信已经备好，如果你也有想法，不妨来聊一聊。",
    note: "合作、交流，或者认真打个招呼，这里都欢迎。",
    stamp: "等你来信",
  },
};

export const posterFooterQuote = "人还算靠谱，审美尽量在线。";

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
