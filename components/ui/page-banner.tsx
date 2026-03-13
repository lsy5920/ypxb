import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
};

export function PageBanner({
  eyebrow,
  title,
  description,
  aside,
}: PageBannerProps) {
  return (
    <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm tracking-[0.32em] text-emerald-900/75 uppercase">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-[0.04em] text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-ink/70">{description}</p>
        </div>

        <div className="rounded-[1.75rem] border border-white/60 bg-white/55 p-5 text-sm leading-7 text-ink/70 shadow-[0_12px_32px_rgba(37,68,68,0.12)]">
          {aside}
        </div>
      </div>
    </Reveal>
  );
}
