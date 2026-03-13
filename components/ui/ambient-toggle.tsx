"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { ambientHints } from "@/content/site";

export function AmbientToggle() {
  const [enabled, setEnabled] = useState(false);
  const [tip, setTip] = useState(ambientHints[0]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  const notes = useMemo(() => [220, 247, 294, 330], []);

  const stopAmbient = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const playChime = () => {
    const context = audioContextRef.current;

    if (!context) {
      return;
    }

    const now = context.currentTime;
    const gain = context.createGain();
    gain.connect(context.destination);
    gain.gain.setValueAtTime(0.0001, now);

    notes.forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      oscillator.type = index % 2 === 0 ? "sine" : "triangle";
      oscillator.frequency.setValueAtTime(frequency, now);
      oscillator.connect(gain);

      const startAt = now + index * 0.12;
      const endAt = startAt + 1.2;

      oscillator.start(startAt);
      oscillator.stop(endAt);
      gain.gain.linearRampToValueAtTime(0.018, startAt + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, endAt);
    });
  };

  const handleToggle = async () => {
    if (enabled) {
      stopAmbient();
      setEnabled(false);
      setTip("园林环境声已歇业，风景还在。");
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    await audioContextRef.current.resume();
    playChime();
    timerRef.current = window.setInterval(playChime, 5200);
    setEnabled(true);
    setTip(ambientHints[Math.floor(Math.random() * ambientHints.length)]);
  };

  useEffect(() => {
    return () => {
      stopAmbient();
      void audioContextRef.current?.close();
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-[0_12px_32px_rgba(38,67,67,0.16)] backdrop-blur md:bottom-6 md:right-6">
      <div className="hidden items-center gap-2 text-sm text-ink/70 sm:flex">
        <Music2 className="size-4 text-emerald-900/80" />
        <span>{tip}</span>
      </div>
      <button
        type="button"
        onClick={handleToggle}
        className="inline-flex size-10 items-center justify-center rounded-full bg-emerald-100/80 text-emerald-950 transition-transform duration-300 hover:-translate-y-0.5"
        aria-label={enabled ? "关闭园林环境声" : "开启园林环境声"}
      >
        {enabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
      </button>
    </div>
  );
}
