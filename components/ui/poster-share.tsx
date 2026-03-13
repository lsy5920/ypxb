"use client";

/* eslint-disable @next/next/no-img-element */

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toPng } from "html-to-image";
import {
  Download,
  LoaderCircle,
  QrCode,
  Share2,
  Sparkles,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import QRCode from "qrcode";
import {
  posterFooterQuote,
  posterHighlights,
  posterScenes,
  profile,
} from "@/content/site";
import { withBasePath } from "@/lib/asset-path";

type PosterSceneKey = keyof typeof posterScenes;

function getSceneKey(pathname: string): PosterSceneKey {
  if (pathname.startsWith("/about")) {
    return "about";
  }

  if (pathname.startsWith("/works")) {
    return "works";
  }

  if (pathname.startsWith("/blog")) {
    return "blog";
  }

  if (pathname.startsWith("/gallery")) {
    return "gallery";
  }

  if (pathname.startsWith("/contact")) {
    return "contact";
  }

  return "home";
}

function getShareUrl() {
  if (typeof window === "undefined") {
    return "";
  }

  const currentUrl = new URL(window.location.href);
  currentUrl.hash = "";

  return currentUrl.toString();
}

async function waitForPosterReady(node: HTMLElement) {
  const images = Array.from(node.querySelectorAll("img"));

  // 导出前确保图片和字体都已完成加载，避免海报出现空白或字体回退。
  await Promise.all(
    images.map((image) => {
      if (image.complete && image.naturalWidth > 0) {
        return Promise.resolve();
      }

      return new Promise<void>((resolve) => {
        const done = () => {
          image.removeEventListener("load", done);
          image.removeEventListener("error", done);
          resolve();
        };

        image.addEventListener("load", done, { once: true });
        image.addEventListener("error", done, { once: true });
      });
    }),
  );

  if ("fonts" in document) {
    await document.fonts.ready;
  }
}

function getPosterFileName(sceneKey: PosterSceneKey) {
  return `lanyishi-poster-${sceneKey}.png`;
}

function getDisplayUrl(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.host}${parsed.pathname}`;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

export function PosterShare() {
  const pathname = usePathname();
  const posterRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [loadingQr, setLoadingQr] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sceneKey = useMemo(() => getSceneKey(pathname), [pathname]);
  const scene = posterScenes[sceneKey];

  useEffect(() => {
    if (!open) {
      return;
    }

    const nextShareUrl = getShareUrl();

    if (!nextShareUrl) {
      return;
    }

    setShareUrl(nextShareUrl);
    setLoadingQr(true);
    setError(null);

    // 二维码直接使用当前页面地址，分享出去后访问者能落到你此刻所在的页面。
    QRCode.toDataURL(nextShareUrl, {
      width: 240,
      margin: 1,
      color: {
        dark: "#234849",
        light: "#0000",
      },
    })
      .then((dataUrl: string) => {
        setQrDataUrl(dataUrl);
      })
      .catch(() => {
        setError("二维码生成失败，请稍后再试。");
      })
      .finally(() => {
        setLoadingQr(false);
      });
  }, [open, pathname]);

  const handleDownload = async () => {
    if (!posterRef.current) {
      return;
    }

    try {
      setDownloading(true);
      setError(null);

      await waitForPosterReady(posterRef.current);

      const width = posterRef.current.clientWidth;
      const height = posterRef.current.clientHeight;
      const dataUrl = await toPng(posterRef.current, {
        cacheBust: true,
        backgroundColor: "#f7f3ea",
        pixelRatio: 3,
        canvasWidth: width * 3,
        canvasHeight: height * 3,
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = getPosterFileName(sceneKey);
      link.click();
    } catch {
      setError("下载失败了，可以先长按海报预览图保存。");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="fixed bottom-4 left-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/86 px-4 py-3 text-sm text-ink shadow-[0_14px_32px_rgba(38,67,67,0.18)] backdrop-blur md:bottom-6 md:left-6"
      >
        <Share2 className="size-4 text-emerald-900" />
        <span>生成海报</span>
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(24,36,36,0.55)] px-4 py-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="paper-panel no-scrollbar relative flex max-h-[92vh] w-full max-w-6xl flex-col gap-6 overflow-y-auto rounded-[2rem] p-4 sm:p-6 lg:flex-row lg:items-start lg:gap-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full bg-white/78 text-ink shadow-[0_10px_24px_rgba(38,67,67,0.12)]"
                aria-label="关闭海报弹层"
              >
                <X className="size-5" />
              </button>

              <div className="flex-1">
                <div className="mb-5 max-w-2xl space-y-3 pr-12">
                  <p className="text-sm tracking-[0.28em] text-emerald-900/75 uppercase">
                    Share Poster
                  </p>
                  <h2 className="text-3xl font-semibold text-ink sm:text-4xl">
                    园林名帖式分享海报
                  </h2>
                  <p className="text-base leading-8 text-ink/70">
                    海报会自动读取当前页面地址生成二维码，适合直接分享到微信、朋友圈或社交平台。
                  </p>
                </div>

                <div className="mx-auto w-full max-w-[26rem]">
                  <PosterSheet
                    ref={posterRef}
                    qrDataUrl={qrDataUrl}
                    scene={scene}
                    shareUrl={shareUrl}
                    loadingQr={loadingQr}
                  />
                </div>
              </div>

              <div className="w-full max-w-xl space-y-4 lg:max-w-sm">
                <div className="rounded-[1.7rem] border border-white/60 bg-white/70 p-5">
                  <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                    <Sparkles className="size-4" />
                    <span>海报内容</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-ink/70">
                    <p>主图：个人主像</p>
                    <p>主题：白昼园林、宣纸名帖、轻印章感</p>
                    <p>二维码：直达当前页面</p>
                    <p>适配：移动端优先，适合长图分享</p>
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-white/60 bg-white/70 p-5">
                  <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                    <QrCode className="size-4" />
                    <span>下载说明</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-ink/70">
                    <p>海报尺寸按移动端分享比例设计，下载后可直接发给朋友或保存到相册。</p>
                    <p>如果下载失败，也可以直接长按预览图保存，这一招在部分浏览器里更稳。</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={downloading || loadingQr || !qrDataUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-100/90 px-5 py-3 text-sm font-medium text-emerald-950 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {downloading ? (
                      <LoaderCircle className="size-4 animate-spin" />
                    ) : (
                      <Download className="size-4" />
                    )}
                    {downloading ? "正在落款导出" : "下载 PNG 海报"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-5 py-3 text-sm text-ink/75"
                  >
                    先关上看看
                  </button>
                </div>

                {error ? (
                  <p className="rounded-[1.2rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm leading-7 text-rose-700">
                    {error}
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

type PosterSheetProps = {
  qrDataUrl: string;
  scene: (typeof posterScenes)[PosterSceneKey];
  shareUrl: string;
  loadingQr: boolean;
};

const PosterSheet = forwardRef<HTMLDivElement, PosterSheetProps>(
  function PosterSheet({ qrDataUrl, scene, shareUrl, loadingQr }, ref) {
    return (
      <div
        ref={ref}
        className="relative mx-auto flex aspect-[10/16] w-full max-w-[22rem] flex-col overflow-hidden rounded-[2rem] border border-[#dbe5dc] bg-[#f7f3ea] p-4 text-[#244849] shadow-[0_20px_60px_rgba(35,67,66,0.18)] sm:max-w-[23rem] sm:p-5"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_42%),radial-gradient(circle_at_bottom,rgba(231,196,192,0.28),transparent_34%),linear-gradient(180deg,#faf7f0_0%,#f5efe4_100%)]" />
        <div className="absolute left-3 top-16 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(169,208,187,0.2),transparent_68%)]" />
        <div className="absolute right-0 top-14 h-44 w-20 rounded-l-full border-l border-[#d6ddd7] bg-[linear-gradient(180deg,rgba(255,255,255,0.66),rgba(255,248,244,0.32))] px-2 py-5 text-center text-[11px] tracking-[0.22em] text-[#6b8780] [writing-mode:vertical-rl]">
          个人江湖名帖
        </div>

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] tracking-[0.32em] text-[#6a8980] uppercase">Share Poster</p>
            <h2 className="mt-2.5 font-display text-[3.1rem] leading-none text-[#224748] sm:text-[3.45rem]">
              {profile.name}
            </h2>
            <p className="mt-1.5 text-xs text-[#5d7c7a] sm:text-sm">字 {profile.courtesyName}</p>
          </div>

          <div className="rounded-[1.15rem] bg-[#b84f4c] px-3.5 py-3 text-center text-[#fff5ef] shadow-[0_12px_32px_rgba(141,58,58,0.22)]">
            <p className="font-display text-[2.4rem] leading-none">谦</p>
            <p className="mt-1 text-[10px] tracking-[0.2em] uppercase">Seal</p>
          </div>
        </div>

        <div className="relative mt-4 h-[11.8rem] shrink-0 overflow-hidden rounded-[1.55rem] border border-white/70 bg-white shadow-[0_18px_42px_rgba(35,67,66,0.12)] sm:h-[12.8rem]">
          <div className="absolute left-4 top-4 z-10 rounded-full bg-white/88 px-3 py-1 text-xs text-[#4e6d6b] shadow-[0_8px_20px_rgba(35,67,66,0.08)]">
            {scene.badge}
          </div>
          <img
            src={withBasePath("/photos/hero-portrait.png")}
            alt="蓝诗亦海报主视觉"
            className="h-full w-full object-cover object-center"
            crossOrigin="anonymous"
          />
        </div>

        <div className="relative mt-4 shrink-0 space-y-2.5">
          <h3 className="text-[1.28rem] font-semibold leading-[1.22] text-[#234849] sm:text-[1.42rem]">
            {scene.title}
          </h3>
          <p className="text-[13px] leading-6 text-[#5a7270]">{scene.quote}</p>
        </div>

        <div className="relative mt-3 shrink-0 grid grid-cols-3 gap-2">
          {posterHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#dbe7df] bg-white/86 px-2 py-2 text-center text-[11px] text-[#476664]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="relative mt-auto grid grid-cols-[1.18fr_0.82fr] gap-3 pt-3">
          <div className="rounded-[1.45rem] border border-[#dce5de] bg-white/84 p-3 shadow-[0_12px_28px_rgba(35,67,66,0.08)]">
            <p className="text-[11px] tracking-[0.24em] text-[#6b8780] uppercase">今日小注</p>
            <p className="mt-2.5 text-[13px] leading-6 text-[#516a68]">{scene.note}</p>
            <p className="mt-3 text-[11px] leading-5 text-[#7b8f8d]">{posterFooterQuote}</p>
            <p className="mt-2.5 truncate text-[10px] leading-5 text-[#8c9b9a]" title={shareUrl}>
              {shareUrl ? getDisplayUrl(shareUrl) : "正在读取当前页面地址..."}
            </p>
          </div>

          <div className="rounded-[1.45rem] border border-[#dce5de] bg-white/88 p-2.5 shadow-[0_12px_28px_rgba(35,67,66,0.08)]">
            <div className="flex h-full flex-col rounded-[1.05rem] bg-[linear-gradient(180deg,#f8fbf8_0%,#f4f1eb_100%)] p-2">
              <div className="flex min-h-[7.4rem] flex-1 items-center justify-center rounded-[0.95rem] border border-[#dbe6de] bg-white">
                {loadingQr ? (
                  <LoaderCircle className="size-8 animate-spin text-[#6a8980]" />
                ) : qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="网站分享二维码"
                    className="h-24 w-24"
                    crossOrigin="anonymous"
                  />
                ) : (
                  <QrCode className="size-10 text-[#6a8980]" />
                )}
              </div>
              <p className="mt-2.5 text-center text-[10px] leading-4 text-[#56706e]">
                长按识别
                <br />
                来我园子里坐坐
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-3 shrink-0 flex items-center justify-between text-[10px] text-[#667d7c]">
          <span>{scene.stamp}</span>
          <span>
            {profile.city} · {profile.role}
          </span>
        </div>
      </div>
    );
  },
);

PosterSheet.displayName = "PosterSheet";
