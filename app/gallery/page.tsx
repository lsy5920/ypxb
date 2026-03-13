import type { Metadata } from "next";
import Image from "next/image";
import { ImageIcon, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { galleryEntries } from "@/content/site";

export const metadata: Metadata = {
  title: "照片簿",
  description: "蓝诗亦的照片簿占位页：在真人照补齐前，先用国风意境图把气质立住。",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="照片簿"
        title="真人照暂未登场，先让氛围感把门面守住。"
        description="你明确说了想先展示照片和简介，但现在暂时没有素材。所以这页采用“可直接替换”的国风占位图方式：排版先定型，后面把 SVG 换成你的真实照片即可。"
        aside={
          <div className="space-y-3">
            <p>当前素材：4 张可替换插画占位图。</p>
            <p>后续更新：直接替换 `public/` 内同名图片即可。</p>
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
                  src={item.image}
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
          <span>后续补图提示</span>
        </div>
        <p className="mt-4 text-lg leading-8 text-ink/78">
          如果你后面补上真实照片，这一页会从“意境占位”立刻升级为“本人亲自镇场”。目前的布局、动效和卡片比例都已经按正式展示页配置好了。
        </p>
        <p className="mt-4 text-sm leading-7 text-ink/66">
          小声说一句：照片还没来，但气质已经先把门撑住了，这波不亏。
        </p>
      </Reveal>
    </div>
  );
}
