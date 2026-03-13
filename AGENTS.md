# AGENTS.md

## 目的

- 本文件给会在本仓库内工作的智能体编码代理使用。
- 目标是让代理先理解项目约束，再动手改代码。
- 本仓库是一个以内容驱动为主的 `Next.js 15` 静态导出站点。
- UI 方向不是通用企业站，而是有明确气质的国风个人主页。

## 外部规则检查结果

- 未发现 `.cursorrules`。
- 未发现 `.cursor/rules/` 目录。
- 未发现 `.github/copilot-instructions.md`。
- 因此当前没有额外的 Cursor / Copilot 仓库级规则需要合并。
- 如果后续新增这些规则，修改本文件时必须同步吸收进去。

## 技术栈概览

- `Next.js 15`，使用 `App Router`。
- `React 19`。
- `TypeScript 5`，`strict: true`。
- `Tailwind CSS 4`，并在 `app/globals.css` 中维护主题变量。
- `Framer Motion` 用于入场和轻交互动画。
- `lucide-react` 用于图标。
- 部署目标是 `GitHub Pages` 静态导出。

## 重要目录

- `app/`：路由页面与布局。
- `components/layout/`：站点级头部、底部等结构组件。
- `components/ui/`：动画、卡片、交互等可复用 UI。
- `content/`：站点主文案、作品、随笔等结构化内容。
- `public/`：静态资源与占位图。
- `.github/workflows/deploy.yml`：Pages 构建与部署流程。

## 项目架构要点

- 页面主要由 `content/*.ts` 中的数据驱动，而不是远程接口。
- 默认使用服务端组件；只有需要 Hooks、浏览器 API、动画状态时才使用客户端组件。
- 动态详情页使用 `generateStaticParams()` 预渲染，并设置 `dynamicParams = false`。
- 缺失内容时使用 `notFound()`，不要返回随意的空壳页面。
- `next.config.ts` 已开启 `output: "export"`，改动时必须保证静态导出能力不被破坏。
- `basePath` 会按 GitHub Pages 仓库路径自动处理，避免手动写死。

## 安装与启动命令

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 生产构建：`npm run build`
- 本地预览静态导出结果：`npm run start`
- 全量 lint：`npm run lint`
- 全量类型检查：`node ./node_modules/typescript/bin/tsc --noEmit`

## 测试与校验现状

- 当前仓库没有 `test` 脚本。
- 当前仓库没有 `vitest`、`jest`、`playwright`、`cypress` 等测试框架依赖。
- 当前仓库也没有 `*.test.*` 或 `*.spec.*` 文件。
- 结论：现在不存在“运行单个测试”的真实仓库命令。
- 如果任务要求“跑单测”，应明确说明本仓库尚未配置测试体系。
- 在没有测试框架时，最接近的验证组合是：`npm run lint` + `node ./node_modules/typescript/bin/tsc --noEmit` + `npm run build`。

## 单文件 / 定向检查命令

- 定向 lint 单文件：`node ./node_modules/eslint/bin/eslint.js app/page.tsx`
- 定向 lint 多文件：`node ./node_modules/eslint/bin/eslint.js app components content`
- 定向类型检查没有单文件脚本；优先运行全量 `tsc --noEmit`。
- 若未来引入测试框架，再把“单测命令”和“单 case 命令”补到本文件。

## 已验证命令状态（以当前仓库为准）

- `npm run lint`：可运行。
- `node ./node_modules/typescript/bin/tsc --noEmit`：可运行。
- `npm run build`：当前失败。
- 失败症状：导出 `/404` 时抛出 `'<Html> should not be imported outside of pages/_document'`。
- 因此代理在提交结果时，不应声称当前仓库主干构建已经通过。
- 如果你的修改与该问题无关，请在结果中说明“构建失败为仓库现有问题”。

## 导入规则

- 导入顺序遵循当前仓库惯例：`React / Next` -> 第三方库 -> `@/` 别名模块 -> 相对样式或相对文件。
- 类型导入优先使用 `import type`。
- 仓库已配置 `@/*` 路径别名；跨目录引用优先使用 `@/`，不要堆积很深的相对路径。
- 内部导航使用 `next/link`。
- 图片资源优先使用 `next/image`，并补齐清晰的 `alt`。
- 客户端组件文件里，`"use client"` 必须放在首行。

## 格式化规则

- 使用 2 空格缩进。
- 使用双引号，不使用单引号。
- 语句末尾保留分号。
- 多行对象、数组、函数参数保留尾随逗号。
- JSX 较长属性按多行拆分，保持可读性。
- 不要为了“短”而把复杂三元表达式压成难读的一行。
- 现有代码未接入 Prettier；提交前以仓库现有风格为准，保持手工一致性。

## TypeScript 规则

- `strict` 已开启，默认按严格模式写代码。
- 不要引入 `any`，除非有明确理由且无法避免。
- 优先为导出的数据结构、组件 props、工具函数参数声明类型。
- 本仓库更常用 `type`，不是 `interface`；新增内容优先延续 `type` 风格。
- 简单局部常量可依赖类型推断，导出 API 不要过度依赖隐式推断。
- `content/` 中的结构化数据要与对应 `type` 显式对齐。
- 需要只读 children 时，沿用 `Readonly<{ children: React.ReactNode }>` 这类写法。

## 命名约定

- 组件名使用 `PascalCase`。
- 工具函数、局部变量、导出常量使用 `camelCase`。
- 路由段与组件文件名使用 `kebab-case`，与现有文件保持一致。
- 数据数组通常使用复数名，如 `blogPosts`、`galleryEntries`、`contactCards`。
- slug 使用全小写 `kebab-case`。
- 不要发明模糊命名，如 `data`, `info`, `temp`, `item2`，除非上下文极短且含义明显。

## React / Next.js 约定

- 默认优先写服务端组件，只有在确实需要交互时才加 `"use client"`。
- 需要浏览器对象时必须放进客户端组件，例如 `window`、`AudioContext`、动画状态、事件监听。
- 内容详情页沿用当前模式：`generateStaticParams()` + `generateMetadata()` + `notFound()`。
- 页面元信息通过 `Metadata` 生成，不要散落到组件内部手写 `<head>`。
- 交互动画应封装在小型 UI 组件里，不要让页面文件塞满状态机逻辑。
- 修改任何页面时，都要兼顾桌面端和移动端布局。

## 样式与视觉规则

- 先复用 `app/globals.css` 中的主题变量与公共类：`paper-panel`、`paper-card`、`section-anchor`、`no-scrollbar`。
- Tailwind class 以现有顺序书写：布局 -> 尺寸 -> 间距 -> 边框/背景 -> 文本 -> 阴影/动画。
- 视觉方向必须延续现有“白昼园林、宣纸、青绿、浅粉、湖蓝”的气质。
- 不要把页面改成通用 SaaS 风、纯黑暗模式、紫色默认模板或过于工业化的配色。
- 动效应轻量且有意图，保持 `Framer Motion` 当前的柔和节奏。
- 新增全局样式前，先判断能否复用现有 token 或 Tailwind 工具类。
- 新增插画或图像占位时，文案口吻要和现有站点一致。

## 内容层规则

- 文案和结构化内容优先放在 `content/`，不要把长段中文直接硬编码到多个页面里。
- 需要新增栏目时，先补 `type`，再补数据，再接页面。
- 保持当前内容语气：温暖、清醒、幽默，但不过度油滑。
- 不要无依据伪造真实联系方式、真人照片、履历或外部成就。
- 如用户未提供真实信息，应继续使用占位内容或显式说明待补充。
- 中文文案允许有风格，但不能影响信息可读性。

## 错误处理与健壮性

- 优先使用守卫式返回，减少深层嵌套。
- 缺失 slug 数据时直接 `notFound()`。
- 客户端副作用必须清理资源，例如 `setInterval`、音频上下文、事件监听。
- 不要静默吞掉异常；至少提供可理解的降级行为或注释说明。
- 异步逻辑若可能失败，先考虑用户是否需要看到可恢复的状态提示。
- 修改浏览器 API 相关逻辑时，注意 SSR / CSR 边界。

## 注释规则

- 仅在“非显然逻辑”处添加简洁中文注释。
- 现有仓库已经接受少量中文注释；新增注释请保持同样克制。
- 不要写解释 JSX 结构的流水账注释。
- 不要用注释掩盖糟糕命名；优先把命名改清楚。

## 代理工作流程建议

- 改文案前，先检查 `content/site.ts`、`content/blog.ts`、`content/works.ts` 是否已存在对应数据位。
- 改路由前，确认是否会影响静态导出和 `basePath`。
- 改交互前，优先看相近组件是否已有可复用模式，例如 `Reveal`、`TiltCard`、`OraclePanel`。
- 改样式前，优先在 `app/globals.css` 和现有 Tailwind class 中寻找可复用表达。
- 完成改动后，至少运行 `npm run lint` 和 `node ./node_modules/typescript/bin/tsc --noEmit`。
- 若 `npm run build` 仍失败，先判断是否是你的改动造成；如果不是，要在结果里明确说明。

## 文档维护

- 本仓库 `README.md` 是中文文档，功能、结构或协作方式变化后应同步更新。
- 如果后续引入测试框架、格式化工具、Cursor 规则或 Copilot 规则，必须同步更新 `AGENTS.md`。
- 如果修复了当前构建问题，也要把本文件中的“已验证命令状态”改成最新结论。
