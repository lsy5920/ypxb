import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Quote } from "lucide-react";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts, getBlogPost } from "@/content/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  return {
    title: post?.title ?? "随笔未找到",
    description: post?.excerpt,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="随笔详情"
        title={post.title}
        description={post.subtitle}
        aside={
          <div className="space-y-3">
            <p>{post.dateLabel}</p>
            <p>预计阅读：{post.readTime}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.map((tag) => (
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
        <div className="flex items-center gap-2 text-sm text-emerald-900/80">
          <Quote className="size-4" />
          <span>这一页的题眼</span>
        </div>
        <p className="mt-4 text-lg leading-8 text-ink/78">“{post.quote}”</p>
      </Reveal>

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
        <article className="space-y-6">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-9 text-ink/76">
              {paragraph}
            </p>
          ))}
        </article>
      </Reveal>

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-ink/70"
      >
        <ArrowLeft className="size-4" />
        返回随笔集
      </Link>
    </div>
  );
}
