"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { ambientHints, ambientTrack } from "@/content/site";
import { withBasePath } from "@/lib/asset-path";

export function AmbientToggle() {
  const [enabled, setEnabled] = useState(false);
  const [tip, setTip] = useState(`当前曲目：${ambientTrack.title} · ${ambientTrack.artist}`);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (enabled) {
      audio.pause();
      setEnabled(false);
      setTip("背景音乐已暂停，园林的风景还在。");
      return;
    }

    try {
      // 真实音频播放器会保留当前位置暂停/继续，比之前的合成提示音更适合作为背景音乐。
      await audio.play();
      setEnabled(true);
      setTip(ambientHints[Math.floor(Math.random() * ambientHints.length)]);
    } catch {
      setTip("浏览器拦住了自动播放，请再点一次按钮试试。");
    }
  };

  useEffect(() => {
    const audio = new Audio(withBasePath(ambientTrack.file));
    audio.loop = true;
    audio.preload = "metadata";
    audio.volume = 0.42;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
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
        aria-label={enabled ? `暂停 ${ambientTrack.title}` : `播放 ${ambientTrack.title}`}
      >
        {enabled ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
      </button>
    </div>
  );
}
