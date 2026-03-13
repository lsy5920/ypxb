import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BadgeCheck, ScrollText } from "lucide-react";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { getWork, works } from "@/content/works";

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);

  return {
    title: work?.title ?? "作品未找到",
    description: work?.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="作品详情"
        title={work.title}
        description={work.summary}
        aside={
          <div className="space-y-3">
            <p>状态：{work.status}</p>
            <p>时间：{work.year}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/70 px-3 py-1 text-xs text-ink/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-emerald-900/80">
            <ScrollText className="size-4" />
            <span>项目前言</span>
          </div>
          <p className="text-lg leading-8 text-ink/78">{work.intro}</p>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-ink">这个项目想表达什么</h2>
          <div className="mt-5 space-y-4">
            {work.details.map((detail) => (
              <p key={detail} className="text-base leading-8 text-ink/72">
                {detail}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="paper-panel rounded-[2rem] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-ink">亮点摘录</h2>
          <div className="mt-5 space-y-3">
            {work.highlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/65 bg-white/72 p-4"
              >
                <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                  <BadgeCheck className="size-4" />
                  <span>重点</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Link
        href="/works"
        className="inline-flex items-center gap-2 text-sm text-ink/70"
      >
        <ArrowLeft className="size-4" />
        返回造物录
      </Link>
    </div>
  );
}
