import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Compass, Hammer, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { works } from "@/content/works";

export const metadata: Metadata = {
  title: "造物录",
  description: "蓝诗亦的项目与长期方向记录：已完成的实践、正在推进的计划，以及持续打磨的兴趣领域。",
};

export default function WorksPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="造物录"
        title="作品还在继续增加，但我希望每一项都说得清楚、站得住。"
        description="这里既放已经完成的内容，也放正在推进的方向。对外展示这件事，比“显得厉害”更重要的是清楚、真实、可验证。"
        aside={
          <div className="space-y-3">
            <p>当前已上线：这座国风个人主页本体。</p>
            <p>后续重点方向：AI 实验、表达企划、商业思考记录。</p>
            <p>整体标准：有判断、有完成度，也有继续打磨的空间。</p>
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
                查看项目详情
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
              先把问题想清楚，再把结构搭稳，最后才是体验和表达。能讲清楚的东西，才更有可能做扎实。
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Compass className="size-4" />
              <span>方向</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              比起追求“看起来厉害”，我更在意它是否真的有价值，是否值得被继续使用和记住。
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Sparkles className="size-4" />
              <span>态度</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              作品可以慢一点长大，但不能只是空壳。审美要成立，内容也要经得起细看。
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
