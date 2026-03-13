"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { navLinks, profile } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 mx-auto w-[min(1120px,calc(100%-1rem))]">
      <div className="paper-panel flex flex-col gap-3 rounded-[2rem] px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:rounded-full sm:px-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 px-1"
        >
          <div className="flex size-11 items-center justify-center rounded-full bg-emerald-100/80 text-xl text-emerald-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
            兰
          </div>
          <div className="min-w-0">
            <p className="text-xs text-ink/55 sm:text-sm">个人江湖名帖</p>
            <p className="truncate text-sm font-semibold tracking-[0.08em] text-ink sm:text-base">
              {profile.name} · {profile.courtesyName}
            </p>
          </div>
        </Link>

        <nav className="no-scrollbar flex min-w-0 items-center gap-2 overflow-x-auto px-1 pb-1 sm:flex-1 sm:justify-end sm:px-0 sm:pb-0">
          {navLinks.map((item) => {
            const isActive = item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-center text-sm transition-all duration-300 sm:min-w-0",
                  isActive
                    ? "bg-emerald-100/85 text-emerald-950 shadow-[0_10px_24px_rgba(84,124,111,0.16)]"
                    : "text-ink/70 hover:bg-white/70 hover:text-ink",
                ].join(" ")}
                title={item.description}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.short}</span>
                {isActive ? (
                  <Sparkles className="absolute -right-1 -top-1 size-3 text-emerald-700" />
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
