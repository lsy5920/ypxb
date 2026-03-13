import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Compass,
  Feather,
  Flower2,
  ImageIcon,
  MapPinned,
  NotebookPen,
  Quote,
  ScrollText,
  Sparkles,
  SunMedium,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { NameSwitch } from "@/components/ui/name-switch";
import { OraclePanel } from "@/components/ui/oracle-panel";
import { SectionTitle } from "@/components/ui/section-title";
import { blogPosts } from "@/content/blog";
import {
  contactCards,
  galleryEntries,
  heroBadges,
  principles,
  profile,
  quickFacts,
  signaturePhrases,
  storyCards,
} from "@/content/site";
import { works } from "@/content/works";

const featuredWorks = works.slice(0, 3);
const featuredPosts = blogPosts.slice(0, 3);
const featuredGallery = galleryEntries.slice(0, 3);

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <section className="section-anchor grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/70 bg-white/75 px-3 py-1 text-sm text-ink/70"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <p className="font-display text-4xl text-ink sm:text-5xl">{profile.courtesyName}</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[0.04em] text-ink sm:text-5xl lg:text-6xl">
                {profile.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-ink/72">
                {profile.opening}
              </p>
              <p className="max-w-2xl text-base leading-8 text-ink/68">
                {profile.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#intro"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-100/85 px-5 py-3 text-sm font-medium text-emerald-950 shadow-[0_14px_30px_rgba(84,124,111,0.18)]"
              >
                翻开名帖
                <ArrowRight className="size-4" />
              </a>
              <a
                href="#oracle"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/70 px-5 py-3 text-sm text-ink/75"
              >
                去抽一支签
                <Sparkles className="size-4" />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="paper-card rounded-[1.5rem] border border-white/65 p-4 shadow-[0_12px_32px_rgba(37,68,68,0.08)]"
                >
                  <p className="text-sm text-ink/55">{fact.label}</p>
                  <p className="mt-2 text-xl font-semibold text-ink">{fact.value}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/68">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-4">
          <TiltCard className="paper-panel rounded-[2rem] p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-[linear-gradient(180deg,rgba(245,252,251,0.8),rgba(255,244,247,0.78))] p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_62%)]" />
              <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs text-ink/70">
                主像本人已到场，春风和樱花负责捧场
              </div>
              <div className="relative">
                <Image
                  src="/photos/hero-portrait.png"
                  alt="蓝诗亦在樱花树下身着青色古风服装的主视觉照片"
                  width={1600}
                  height={1600}
                  className="h-auto w-full rounded-[1.4rem]"
                  priority
                />
              </div>
              <div className="absolute bottom-4 right-4 rounded-full bg-emerald-100/90 px-3 py-1 text-xs text-emerald-950">
                {profile.city} · 白昼游园模式
              </div>
            </div>
          </TiltCard>

          <NameSwitch />
        </Reveal>
      </section>

      <section id="intro" className="section-anchor">
        <SectionTitle
          eyebrow="江湖小传"
          title="这位少年，主打一个温柔靠谱，顺手还能把气氛抬起来"
          description="如果把这张个人主页看成一张江湖名帖，那么这里就是落款之前最重要的自我说明。"
        />

        <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
          <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sm text-emerald-900/80">
                <ScrollText className="size-4" />
                <span>写给第一次来访的人</span>
              </div>

              <p className="text-lg leading-8 text-ink/75">{profile.tagline}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {signaturePhrases.map((line) => (
                  <div
                    key={line}
                    className="paper-card rounded-[1.5rem] border border-white/65 p-4"
                  >
                    <div className="mb-3 flex items-center gap-2 text-sm text-emerald-900/75">
                      <Quote className="size-4" />
                      <span>签语摘录</span>
                    </div>
                    <p className="leading-7 text-ink/72">{line}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {storyCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <TiltCard className="paper-card h-full rounded-[1.7rem] border border-white/65 p-5 shadow-[0_12px_32px_rgba(37,68,68,0.08)]">
                  <p className="text-sm text-emerald-900/78">{card.accent}</p>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/68">{card.text}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section-anchor">
        <SectionTitle
          eyebrow="君子守则"
          title="好笑归好笑，底线和分寸感必须站着"
          description="你欣赏的“君子感”里，正直最重要。所以这一页不会只卖氛围，也要把靠谱明明白白摆出来。"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <TiltCard className="paper-panel h-full rounded-[1.8rem] p-5">
                <div className="flex items-center gap-2 text-sm text-emerald-900/78">
                  <BadgeCheck className="size-4" />
                  <span>{item.title}</span>
                </div>
                <p className="mt-4 text-lg leading-8 text-ink/85">{item.summary}</p>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item.detail}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="works" className="section-anchor">
        <SectionTitle
          eyebrow="造物录"
          title="作品暂时不算满堂彩，但每个坑位都带着认真和野心"
          description="现在最重要的作品，就是这张会呼吸的名帖。其他项目也已经排队等出场，不装成熟，但很想把东西做漂亮。"
          action={
            <Link
              href="/works"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-2 text-sm text-ink/75"
            >
              查看全部造物
              <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {featuredWorks.map((work, index) => (
            <Reveal key={work.slug} delay={index * 0.05}>
              <TiltCard className="paper-panel h-full rounded-[1.85rem] p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-emerald-100/85 px-3 py-1 text-xs text-emerald-950">
                    {work.status}
                  </span>
                  <span className="text-sm text-ink/55">{work.year}</span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-ink">{work.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{work.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/65 bg-white/70 px-3 py-1 text-xs text-ink/68"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/works/${work.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-950"
                >
                  点开看看这页怎么写的
                  <ArrowRight className="size-4" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="blog" className="section-anchor">
        <SectionTitle
          eyebrow="随笔集"
          title="照片已经到位，句子也继续认真营业"
          description="你最想让别人先看到简介和随笔，所以这里继续把情绪、清醒和幽默写成可点击的诗页。"
          action={
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-2 text-sm text-ink/75"
            >
              去翻整本诗集
              <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <TiltCard className="paper-card h-full rounded-[1.75rem] border border-white/65 p-5 shadow-[0_12px_32px_rgba(37,68,68,0.08)]">
                <div className="flex items-center gap-2 text-sm text-emerald-900/75">
                  <NotebookPen className="size-4" />
                  <span>{post.dateLabel}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{post.excerpt}</p>
                <p className="mt-4 rounded-2xl bg-white/80 px-4 py-3 text-sm leading-7 text-ink/72">
                  “{post.quote}”
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-emerald-950"
                >
                  翻到这一页
                  <ArrowRight className="size-4" />
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="section-anchor">
        <SectionTitle
          eyebrow="照片簿"
          title="照片已经到场，山野、花影和戏台一起证明气质在线"
          description="主像放在首屏，其他三张收进照片簿：一张顶峰，一张山野，一张戏台，刚好把温柔、少年和反差感都拼完整。"
          action={
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-4 py-2 text-sm text-ink/75"
            >
              看完整照片簿
              <ArrowRight className="size-4" />
            </Link>
          }
        />

        <div className="grid gap-4 md:grid-cols-3">
          {featuredGallery.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <TiltCard className="paper-panel h-full rounded-[1.8rem] p-4">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/65 bg-white/65">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={720}
                    height={880}
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <span className="rounded-full bg-emerald-100/85 px-3 py-1 text-xs text-emerald-950">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item.caption}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="oracle" className="section-anchor grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Compass className="size-4" />
              <span>互动区</span>
            </div>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              和我互动，比只看一眼简介更容易记住我
            </h2>
            <p className="text-base leading-8 text-ink/70">
              你说过网站更像“和我互动”。所以这里特意留了一处可玩的入口：可以抽签，可以看小提示，也可以顺便去投帖处坐坐。
            </p>

            <div className="grid gap-3">
              {contactCards.slice(1, 4).map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.35rem] border border-white/65 bg-white/72 p-4"
                >
                  <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                    <Flower2 className="size-4" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-3 text-lg text-ink">{item.value}</p>
                  <p className="mt-2 text-sm leading-7 text-ink/66">{item.note}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100/85 px-5 py-3 text-sm font-medium text-emerald-950"
            >
              去投帖处递个话头
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <OraclePanel />
        </Reveal>
      </section>

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-emerald-900/78">
              <SunMedium className="size-4" />
              <span>收个尾</span>
            </div>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
              山高路远，我们顶峰相见；要是路上还能笑出声，那就更好了。
            </h2>
            <p className="max-w-3xl text-base leading-8 text-ink/70">{profile.outro}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/72 px-5 py-3 text-sm text-ink/75"
            >
              <MapPinned className="size-4" />
              看完整小传
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/72 px-5 py-3 text-sm text-ink/75"
            >
              <ImageIcon className="size-4" />
              去照片簿占坑
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/72 px-5 py-3 text-sm text-ink/75"
            >
              <BookOpenText className="size-4" />
              去看随笔
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-100/85 px-5 py-3 text-sm font-medium text-emerald-950"
            >
              <Feather className="size-4" />
              递个话头
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
