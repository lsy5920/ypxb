import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText, Quote, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "随笔集",
  description: "蓝诗亦的随笔集：关于生活、成长、表达与人与人之间的距离。",
};

export default function BlogPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="随笔集"
        title="这里收着我对生活、成长与关系的一些真实观察。"
        description="如果说首页是名帖，这里更像旁白。文字不追求夸张，只希望坦诚、清醒，偶尔保留一点轻松。"
        aside={
          <div className="space-y-3">
            <p>写作口味：真诚、温和、有分寸的幽默。</p>
            <p>内容范围：散步、成长、表达、关系与日常感受。</p>
            <p>阅读建议：慢一点读，会更接近真实的我。</p>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.05}>
            <TiltCard className="paper-panel h-full rounded-[1.9rem] p-6">
              <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                <BookOpenText className="size-4" />
                <span>{post.dateLabel}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm text-ink/55">{post.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-ink/68">{post.excerpt}</p>

              <div className="mt-4 rounded-[1.5rem] border border-white/60 bg-white/72 p-4">
                <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                  <Quote className="size-4" />
                  <span>摘一句</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink/68">“{post.quote}”</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/65 bg-white/70 px-3 py-1 text-xs text-ink/68"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between text-sm text-ink/55">
                <span>{post.readTime}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-emerald-950"
                >
                  阅读全文
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm text-emerald-900/80">
          <Sparkles className="size-4" />
          <span>写作声明</span>
        </div>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-ink/78">
          这些文字不是为了把自己包装得多特别，而是想把正在发生的思考留得更清楚一些。温柔、幽默、清醒，都是我想长期保留的部分。
        </p>
      </Reveal>
    </div>
  );
}
