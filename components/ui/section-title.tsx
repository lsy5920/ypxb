import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  action,
}: SectionTitleProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl space-y-3">
        <p className="text-sm tracking-[0.28em] text-emerald-900/75 uppercase">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold tracking-[0.04em] text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-ink/70 sm:text-lg">{description}</p>
      </div>
      {action}
    </div>
  );
}
