import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, Hammer, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { works } from "@/content/works";

export const metadata: Metadata = {
  title: "造物录",
  description: "蓝诗亦的作品与企划记录：已落地的页面、正在酝酿的灵感，以及未来的方向。",
};

export default function WorksPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="造物录"
        title="作品位暂时不是满汉全席，但至少每一道菜都想认真摆盘。"
        description="这里既放已经落地的项目，也诚实地摆出还在酝酿的企划。因为真正的成长，不是把草稿装成成就，而是让方向越写越清楚。"
        aside={
          <div className="space-y-3">
            <p>当前主力作品：这座国风个人主页本体。</p>
            <p>后续重点方向：AI 创意实验、情商表达企划、商业脑洞记录。</p>
            <p>风格关键词：有趣、清楚、靠谱、不空喊。 </p>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {works.map((work, index) => (
          <Reveal key={work.slug} delay={index * 0.05}>
            <TiltCard className="paper-panel h-full rounded-[1.9rem] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-emerald-100/85 px-3 py-1 text-xs text-emerald-950">
                  {work.status}
                </span>
                <span className="text-sm text-ink/55">{work.year}</span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold text-ink">{work.title}</h2>
              <p className="mt-3 text-base leading-8 text-ink/72">{work.summary}</p>

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

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {work.highlights.slice(0, 2).map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.3rem] border border-white/60 bg-white/72 p-4 text-sm leading-7 text-ink/68"
                  >
                    <div className="mb-2 flex items-center gap-2 text-emerald-900/80">
                      <BadgeCheck className="size-4" />
                      <span>亮点</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href={`/works/${work.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-950"
              >
                点开这页造物记录
                <ArrowRight className="size-4" />
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Hammer className="size-4" />
              <span>做法</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              想法先落成结构，再打磨成体验。能讲清楚的东西，才更有可能真的做出来。
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Compass className="size-4" />
              <span>方向</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              不想只做“看起来厉害”的东西，更想做“真有人愿意继续用”的东西。
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Sparkles className="size-4" />
              <span>态度</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              作品可以慢一点长大，但别长成空壳。好看要有，内容也要站得住。
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
