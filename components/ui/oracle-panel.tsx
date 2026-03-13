"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCcw, WandSparkles } from "lucide-react";
import { fortuneReplies } from "@/content/site";

function getRandomIndex(current: number) {
  const next = Math.floor(Math.random() * fortuneReplies.length);
  return next === current ? (next + 1) % fortuneReplies.length : next;
}

export function OraclePanel() {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(1);

  const card = useMemo(() => fortuneReplies[current], [current]);

  const shuffle = () => {
    setCurrent((prev) => getRandomIndex(prev));
    setCount((prev) => prev + 1);
  };

  return (
    <div className="paper-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
      <div className="absolute inset-x-6 top-0 h-24 rounded-b-full bg-[radial-gradient(circle,rgba(255,255,255,0.42),transparent_72%)]" />

      <div className="relative space-y-6">
        <div className="flex items-center gap-2 text-sm text-emerald-900/80">
          <WandSparkles className="size-4" />
          <span>今日抽签处</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${card.title}-${count}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-emerald-100/80 px-3 py-1 text-sm text-emerald-950">
                {card.title}
              </span>
              <span className="text-sm text-ink/55">
                本机今日已胡言乱语 {count} 次
              </span>
            </div>

            <p className="font-display text-4xl text-ink sm:text-5xl">签语</p>
            <p className="text-lg leading-8 text-ink/90">{card.text}</p>
            <p className="rounded-2xl border border-emerald-200/60 bg-white/75 px-4 py-3 text-sm leading-6 text-ink/70">
              {card.hint}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={shuffle}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/70 bg-emerald-100/80 px-5 py-3 text-sm font-medium text-emerald-950 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <RefreshCcw className="size-4" />
          再抽一支，看看今天的风往哪边吹
        </button>
      </div>
    </div>
  );
}
