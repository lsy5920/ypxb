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

const POSTER_WIDTH = 840;
const POSTER_HEIGHT = 1344;

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
  const exportPosterRef = useRef<HTMLDivElement | null>(null);
  const previewFrameRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [loadingQr, setLoadingQr] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewScale, setPreviewScale] = useState(0.4);

  const sceneKey = useMemo(() => getSceneKey(pathname), [pathname]);
  const scene = posterScenes[sceneKey];

  useEffect(() => {
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
  }, [pathname]);

  useEffect(() => {
    if (!open || !previewFrameRef.current) {
      return;
    }

    const frame = previewFrameRef.current;

    const updateScale = () => {
      const nextScale = frame.clientWidth / POSTER_WIDTH;
      setPreviewScale(nextScale || 0.4);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(frame);

    return () => {
      observer.disconnect();
    };
  }, [open]);

  const handleDownload = async () => {
    if (!exportPosterRef.current) {
      return;
    }

    try {
      setDownloading(true);
      setError(null);

      await waitForPosterReady(exportPosterRef.current);

      // 这里只提高输出像素密度，不再额外改写画布尺寸；
      // 否则 html-to-image 会把布局再缩放一次，导致预览正常但导出错位。
      const dataUrl = await toPng(exportPosterRef.current, {
        cacheBust: true,
        backgroundColor: "#f7f3ea",
        pixelRatio: 3,
        width: POSTER_WIDTH,
        height: POSTER_HEIGHT,
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

                <div
                  ref={previewFrameRef}
                  className="mx-auto w-full max-w-[18.5rem] overflow-hidden rounded-[2rem]"
                  style={{ height: `${POSTER_HEIGHT * previewScale}px` }}
                >
                  <div
                    style={{
                      width: `${POSTER_WIDTH}px`,
                      height: `${POSTER_HEIGHT}px`,
                      transform: `scale(${previewScale})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <PosterSheet
                      qrDataUrl={qrDataUrl}
                      scene={scene}
                      shareUrl={shareUrl}
                      loadingQr={loadingQr}
                    />
                  </div>
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

      <div className="pointer-events-none fixed left-[-10000px] top-0 opacity-0">
        <PosterSheet
          ref={exportPosterRef}
          qrDataUrl={qrDataUrl}
          scene={scene}
          shareUrl={shareUrl}
          loadingQr={loadingQr}
        />
      </div>
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
        className="relative overflow-hidden rounded-[44px] border border-[#dbe5dc] bg-[#f7f3ea] text-[#244849] shadow-[0_20px_60px_rgba(35,67,66,0.18)]"
        style={{ width: `${POSTER_WIDTH}px`, height: `${POSTER_HEIGHT}px` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.78),transparent_42%),radial-gradient(circle_at_bottom,rgba(231,196,192,0.28),transparent_34%),linear-gradient(180deg,#faf7f0_0%,#f5efe4_100%)]" />
        <div className="absolute left-[46px] top-[54px] h-[130px] w-[130px] rounded-full bg-[radial-gradient(circle,rgba(169,208,187,0.2),transparent_68%)]" />
        <div className="absolute bottom-[112px] right-[-86px] h-[286px] w-[286px] rounded-full border border-[#d7e0d9] bg-[radial-gradient(circle,rgba(255,255,255,0.42),rgba(255,250,246,0.18)_58%,transparent_70%)]" />

        <div className="relative z-10 grid h-full px-[54px] pb-[46px] pt-[42px]" style={{ gridTemplateRows: "100px 566px 92px 170px 68px 1fr" }}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[24px] tracking-[0.32em] text-[#6a8980] uppercase">Share Poster</p>
              <p className="mt-[18px] text-[18px] text-[#5d7c7a]">园林名帖式分享海报</p>
            </div>

            <div className="rounded-[36px] bg-[#b84f4c] px-[34px] py-[30px] text-center text-[#fff5ef] shadow-[0_12px_32px_rgba(141,58,58,0.22)]">
              <p className="font-display text-[82px] leading-none">谦</p>
              <p className="mt-[8px] text-[22px] tracking-[0.16em] uppercase">Seal</p>
            </div>
          </div>

          <div className="rounded-[46px] border border-white/70 bg-[linear-gradient(180deg,rgba(231,242,239,0.82),rgba(255,247,243,0.72))] p-[18px] shadow-[0_18px_42px_rgba(35,67,66,0.12)]">
            <div className="relative h-full overflow-hidden rounded-[34px] border border-white/70 bg-white/70">
              <div className="absolute left-[18px] top-[18px] z-10 rounded-full bg-white/88 px-[28px] py-[12px] text-[22px] text-[#4e6d6b] shadow-[0_8px_20px_rgba(35,67,66,0.08)]">
                {scene.badge}
              </div>
              <div className="absolute right-[18px] top-[18px] z-10 rounded-full border border-white/70 bg-white/78 px-[24px] py-[12px] text-[20px] text-[#587673]">
                白昼园林模式
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_46%)]" />
              <img
                src={withBasePath("/photos/hero-portrait.png")}
                alt="蓝诗亦海报主视觉"
                className="h-full w-full object-cover object-center"
                crossOrigin="anonymous"
              />
            </div>
          </div>

          <div className="flex items-end justify-between gap-[22px] pt-[18px]">
            <div>
              <p className="font-display text-[96px] leading-none text-[#224748]">{profile.name}</p>
              <p className="mt-[10px] text-[24px] text-[#5d7c7a]">
                字 {profile.courtesyName} · {profile.city}
              </p>
            </div>
            <span className="rounded-full bg-emerald-100/90 px-[26px] py-[12px] text-[22px] text-emerald-950">
              {scene.stamp}
            </span>
          </div>

          <div className="pt-[12px]">
            <h3 className="text-[58px] font-semibold leading-[1.24] text-[#234849]">{scene.title}</h3>
            <p className="mt-[22px] text-[24px] leading-[1.7] text-[#5a7270]">{scene.quote}</p>
          </div>

          <div className="grid grid-cols-3 gap-[14px] pt-[4px]">
            {posterHighlights.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#dbe7df] bg-white/86 px-[20px] py-[16px] text-center text-[22px] text-[#476664]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid items-stretch gap-[18px] pt-[20px]" style={{ gridTemplateColumns: "1fr 236px" }}>
            <div className="rounded-[34px] border border-[#dce5de] bg-white/84 p-[24px] shadow-[0_12px_28px_rgba(35,67,66,0.08)]">
              <p className="text-[18px] tracking-[0.24em] text-[#6b8780] uppercase">今日小注</p>
              <p className="mt-[18px] text-[28px] leading-[1.8] text-[#516a68]">{scene.note}</p>
              <p className="mt-[16px] text-[18px] leading-[1.7] text-[#7b8f8d]">{posterFooterQuote}</p>
            </div>

            <div className="rounded-[34px] border border-[#dce5de] bg-white/88 p-[18px] shadow-[0_12px_28px_rgba(35,67,66,0.08)]">
              <div className="flex h-full flex-col rounded-[26px] bg-[linear-gradient(180deg,#f8fbf8_0%,#f4f1eb_100%)] p-[16px]">
                <div className="flex min-h-[184px] flex-1 items-center justify-center rounded-[20px] border border-[#dbe6de] bg-white">
                  {loadingQr ? (
                    <LoaderCircle className="size-16 animate-spin text-[#6a8980]" />
                  ) : qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="网站分享二维码"
                      className="h-[176px] w-[176px]"
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <QrCode className="size-16 text-[#6a8980]" />
                  )}
                </div>
                <p className="mt-[14px] text-center text-[18px] leading-[1.5] text-[#56706e]">
                  长按识别
                  <br />
                  来我园子里坐坐
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

PosterSheet.displayName = "PosterSheet";
