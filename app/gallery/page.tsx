import type { Metadata } from "next";
import Image from "next/image";
import { ImageIcon, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { galleryEntries } from "@/content/site";
import { withBasePath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "照片簿",
  description: "蓝诗亦的真实照片簿：主像、泰山日出、武功山留影与花旦表演。",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="照片簿"
        title="照片已经到场，山野、晚霞和戏台都替我作证。"
        description="这页现在不再是占位图，而是真人照片正式上场：首屏主像、山顶记忆、少年感留影、花旦表演，一起把温柔、风骨和反差感拼完整。"
        aside={
          <div className="space-y-3">
            <p>当前素材：4 张真实照片，已经全部接进页面。</p>
            <p>首页主像已联动，照片簿也同步替换完成。</p>
            <p>视觉方向：白昼园林、清朗、轻戏剧感。</p>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {galleryEntries.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <TiltCard className="paper-panel h-full rounded-[1.85rem] p-4">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/65 bg-white/65">
                <Image
                  src={withBasePath(item.image)}
                  alt={item.title}
                  width={720}
                  height={880}
                  className="h-auto w-full"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                <span className="rounded-full bg-emerald-100/85 px-3 py-1 text-xs text-emerald-950">
                  {item.tag}
                </span>
              </div>

              <p className="mt-3 text-sm leading-7 text-ink/68">{item.caption}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex items-center gap-2 text-sm text-emerald-900/80">
          <ImageIcon className="size-4" />
          <span>照片更新说明</span>
        </div>
        <p className="mt-4 text-lg leading-8 text-ink/78">
          这页现在已经是正式照片簿了。后续如果你继续补图，只要沿着 `public/photos/` 和 `content/site.ts` 的结构往里加，就能继续扩展。
        </p>
        <p className="mt-4 text-sm leading-7 text-ink/66">
          小声说一句：这次不是意境代班，是本人亲自镇场，效果明显更能打。
        </p>
      </Reveal>
    </div>
  );
}
