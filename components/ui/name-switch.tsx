"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { identityModes } from "@/content/site";

export function NameSwitch() {
  const [activeId, setActiveId] = useState<(typeof identityModes)[number]["id"]>(
    "modern",
  );

  const active = useMemo(
    () => identityModes.find((item) => item.id === activeId) ?? identityModes[0],
    [activeId],
  );

  return (
    <div className="paper-card rounded-[1.75rem] border border-white/60 p-4 shadow-[0_12px_40px_rgba(37,68,68,0.12)]">
      <div className="mb-4 flex flex-wrap gap-2">
        {identityModes.map((item) => {
          const isActive = item.id === activeId;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveId(item.id)}
              className={[
                "rounded-full border px-3 py-2 text-sm transition-all duration-300",
                isActive
                  ? "border-emerald-300 bg-emerald-100/80 text-emerald-900 shadow-[0_8px_24px_rgba(84,124,111,0.16)]"
                  : "border-[color:rgba(58,94,92,0.14)] bg-white/65 text-ink/70 hover:border-emerald-200 hover:text-ink",
              ].join(" ")}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-sm text-emerald-900/80">
            <Sparkles className="size-4" />
            <span>{active.subtitle}</span>
          </div>

          <div>
            <p className="font-display text-3xl text-ink">{active.label}</p>
            <p className="mt-2 text-base leading-7 text-ink/75">{active.quote}</p>
          </div>

          <p className="rounded-2xl bg-white/70 px-4 py-3 text-sm leading-6 text-ink/70">
            {active.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
