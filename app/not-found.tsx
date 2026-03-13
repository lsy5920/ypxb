import Link from "next/link";
import { ArrowLeft, Compass, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[78vh] w-full max-w-5xl items-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <Reveal className="paper-panel w-full rounded-[2.2rem] p-8 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/65 bg-[linear-gradient(180deg,rgba(223,237,244,0.7),rgba(255,245,248,0.6))] p-8 text-center shadow-[0_14px_40px_rgba(37,68,68,0.1)]">
            <p className="font-display text-7xl text-ink sm:text-8xl">404</p>
            <p className="mt-4 text-base leading-8 text-ink/70">
              这页像是趁你不注意，悄悄溜去散步了。
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Compass className="size-4" />
              <span>迷路提示</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-[0.04em] text-ink sm:text-5xl">
              这条路暂时没有人值守，但风景还在。
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-ink/72">
              可能是链接写错了，也可能是这页还没排上我的更新日程。总之别慌，江湖虽然大，回家的路我还是给你留好了。
            </p>

            <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5 text-sm leading-7 text-ink/68">
              <div className="mb-3 flex items-center gap-2 text-emerald-900/80">
                <Sparkles className="size-4" />
                <span>一句安慰</span>
              </div>
              山高路远，我们顶峰相见；要是中途迷了路，也没关系，先回首页喝口茶。
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-100/85 px-5 py-3 text-sm font-medium text-emerald-950"
              >
                <ArrowLeft className="size-4" />
                回首页
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/72 px-5 py-3 text-sm text-ink/72"
              >
                去翻翻随笔
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/72 px-5 py-3 text-sm text-ink/72"
              >
                去看造物录
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
