import Link from "next/link";
import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto mt-16 w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
      <div className="paper-panel rounded-[2rem] px-6 py-6 text-sm leading-7 text-ink/70 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl text-ink">{profile.courtesyName}</p>
            <p>
              愿你今天也顺风顺水。如果恰好被这张名帖逗笑了一下，那我就算没白忙。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/contact" className="rounded-full bg-emerald-100/80 px-4 py-2 text-emerald-950">
              去投帖处坐坐
            </Link>
            <span>© {new Date().getFullYear()} 蓝诗亦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
