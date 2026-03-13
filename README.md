# 蓝诗亦的江湖名帖

一座基于 `Next.js 15 + Tailwind CSS` 打造的国风个人主页。

整体定位不是传统简历站，而是“个人江湖名帖”：

- 园林诗意、白昼清朗、古籍气质
- 半认真半整活，幽默但不轻浮
- 首页强调照片位、简介、随笔与互动感
- 支持静态导出，便于部署到 GitHub Pages

## 技术栈

- `Next.js 15`（App Router）
- `Tailwind CSS 4`
- `Framer Motion`
- `Lucide React`

## 已实现内容

- 首页沉浸式名帖布局
- `蓝诗亦 / 沐谦` 双身份切换互动
- 真人照片主视觉与照片簿页面
- 随笔列表页与文章详情页
- 作品列表页与作品详情页
- 投帖处（联系页）
- 鼠标光晕、卡片倾斜、随机签语、可选环境声
- GitHub Pages 静态导出配置

## 本地启动

```bash
npm install
npm run dev
```

默认访问：`http://localhost:3000`

## 常用命令

```bash
npm run dev
npm run build
```

## 项目结构

```text
app/
  about/                # 小传页
  blog/                 # 随笔列表与详情
  contact/              # 投帖处
  gallery/              # 照片簿
  works/                # 作品列表与详情
  layout.tsx            # 全站布局
  page.tsx              # 首页
components/
  layout/               # 头部、底部
  ui/                   # 动画与交互组件
content/
  site.ts               # 站点主信息、照片簿、联系信息等
  blog.ts               # 随笔数据
  works.ts              # 作品数据
public/
  photos/
```

## 后续如何替换成你的真实内容

### 1. 替换照片

当前真实照片放在 `public/photos/`：

- `public/photos/hero-portrait.png`
- `public/photos/mount-taishan-sunrise.jpg`
- `public/photos/wugong-mountain.jpg`
- `public/photos/huadan-performance.png`

如果你后续要换图，可以直接替换这些文件，或者修改 `content/site.ts` 里的 `galleryEntries` 路径。

### 2. 修改文案

主要内容数据集中在：

- `content/site.ts`
- `content/blog.ts`
- `content/works.ts`

后续如果你要补充真实联系方式、更新随笔、增加作品，优先改这些文件即可。

### 3. 补充联系信息

当前联系页已接入真实联系方式，相关内容集中在 `content/site.ts` 的 `contactCards`。

你后续可以继续在这里补充或替换：

- 邮箱
- 微信
- GitHub
- 小红书 / 其他社交账号

## GitHub Pages 部署

本项目已按静态站方式配置：

- `next.config.ts` 开启了 `output: "export"`
- 图片使用 `unoptimized`，适配静态托管
- 自动处理 GitHub Pages 仓库子路径场景

构建命令：

```bash
npm run build
```

构建产物输出到 `out/`。

如果你推送到 GitHub，并启用 Pages，本仓库中的工作流会自动部署。

## 设计说明

- 主色：浅蓝、青绿、粉色、宣纸米白
- 视觉：园林诗意、窗棂、竹影、卷页、白昼感
- 气质：阳光、温暖、幽默、正直、清醒
- 文案：现代口语 + 轻古风嘴贫

## 备注

- 当前首页和照片簿已经接入真实图片素材
- 当前联系页已接入真实邮箱与微信
- 如果后续你继续优化、增删页面或补充真实内容，记得同步更新这份 `README.md`

## 更新日志

- `2026-03-13`：优化 GitHub Pages 子路径静态资源前缀；将整站文案调整为更适合对外展示的平衡版语气，强化可信度与成熟感；接入真实邮箱与微信联系方式。
