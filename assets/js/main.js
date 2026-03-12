const loaderTexts = [
  "正在把正经与整活调到合适比例……",
  "画卷正在展开，体面需要一点时间。",
  "竹叶已经出发，页面马上就来。",
  "请稍候，我先把今天的晴天挂上去。"
];

const heroQuotes = [
  "山高路远，我们顶峰相见。",
  "只有足够优秀，才能遇到优秀的人。",
  "生活不能没有仪式感，不然昨天和今天容易长一个样。",
  "天生我材必有用，千金散尽还复来。",
  "理想很浪漫，钱包还在赶路。"
];

const essayPages = [
  {
    title: "把生活过成一场像样的游园",
    text: "有人把日子过成待办清单，我更想过成一场像样的游园：有点仪式感，有点惊喜，最好再有点笑声。"
  },
  {
    title: "幽默是我给温柔穿的一层盔甲",
    text: "我常常先把人逗笑，再慢慢把心事说出来。表面像气氛组选手，内心其实也会偷偷开很多场小会。"
  },
  {
    title: "可爱和野心，并不冲突",
    text: "我想挣钱，也想保留一点可爱；想把眼前过好，也想把未来做大。要是两样都能成，那就更好了。"
  },
  {
    title: "如果山高路远，那就走得体面一点",
    text: "人生允许磕碰，但不妨碍我们把桌布铺平，把灯点亮，然后继续走自己的路。"
  },
  {
    title: "表面哈哈哈哈，心里其实很会想",
    text: "热闹是真的，敏感也是真的。只是我更愿意把温暖的一面先拿出来，再把复杂情绪自己慢慢消化。"
  }
];

const oracleLines = [
  "今日签语：继续长本事，不要长怨气。",
  "今日签语：天色很好，适合把想法往前推一步。",
  "今日签语：你不是没路，只是还差一点胆量。",
  "今日签语：先照顾好自己，再去拥抱更大的世界。",
  "今日签语：别急着否定自己，很多花开得本来就慢。",
  "今日签语：想做的事，别老在脑子里彩排。",
  "今日签语：温柔不是退让，是有分寸地发光。"
];

const posterThemes = [
  {
    subtitle: "会登山，也会登场；会整活，也有风骨。",
    intro: "生于 2003 年盛夏，常住杭州。爱黄昏散步、研究 AI 与商业，也把热闹、风骨和仪式感一并装进日常。",
    quote: "山高路远，我们顶峰相见。",
    hint: "若觉此卷顺眼，扫码来坐坐；不收门票，只收真诚。",
    tailNote: "此卷无广告，只有本人。"
  },
  {
    subtitle: "表面温润如玉，实际爬山不服输。",
    intro: "台上能演花旦，山顶也敢摆造型；认真起来有书生气，热闹起来又像自带气氛的少年。",
    quote: "生活不能没有仪式感，不然今天和昨天容易长一个样。",
    hint: "扫这个码，比飞鸽快，也比打听来得准。",
    tailNote: "此帖可传，不算显摆。"
  },
  {
    subtitle: "正经的时候像君子，热闹的时候像气氛组。",
    intro: "如果你也喜欢真诚、分寸和一点不油腻的幽默，这张雅帖多半不会让你白扫。",
    quote: "只有足够优秀，才能遇到优秀的人。",
    hint: "二维码已摆好，剩下就看你愿不愿意来坐坐。",
    tailNote: "这卷里不卖课，只卖本人。"
  }
];

const profileSummary = "蓝诗亦，字沐谦。生于2003年盛夏，常住杭州，ENFP，自由探索者。这里有园林诗意、山路风景、戏台反差，也有一个当代少年把幽默和风骨都认真活着。";

const bioModes = {
  serious: {
    title: "一个阳光、温暖、幽默，但并不轻飘的人",
    lead: "我常住杭州，喜欢这座城市的文艺、松弛和适合散步的分寸感。",
    body: "小时候爱皮，读书时是气氛组，长大后依旧喜欢热闹，只是学会了把礼貌、边界和靠谱放在前面。有人夸我心态好、脾气好，也有人说我可爱得有点过分。都成立。毕竟我想做的，不只是一个会说笑的人，而是一个能把事接住的人。"
  },
  jianghu: {
    title: "晴天挂在脸上，风骨收在袖中",
    lead: "若把我写成江湖人物，大概是温润书生、嘴贫侠客与清醒隐士轮流上线。",
    body: "白日爱散步，入夜喜欢朋友局；表面负责逗笑众人，心里却常常另开小剧场。若有误会，我偏不玩清者自清那一套——能说清的事，就痛痛快快说明白。做人要有趣，做事要靠谱，这是我的规矩。"
  }
};

const loader = document.getElementById("loader");
const loaderText = document.getElementById("loaderText");
const scrollProgress = document.getElementById("scrollProgress");
const heroQuote = document.getElementById("heroQuote");
const shuffleQuoteButton = document.getElementById("shuffleQuote");
const heroFortuneButton = document.getElementById("heroFortuneButton");
const drawOracleButton = document.getElementById("drawOracle");
const oracleDisplay = document.getElementById("oracleDisplay");
const essayTitle = document.getElementById("essayTitle");
const essaySnippet = document.getElementById("essaySnippet");
const shuffleEssayButton = document.getElementById("shuffleEssay");
const copyCardButton = document.getElementById("copyCard");
const copyProfileButton = document.getElementById("copyProfile");
const copySiteLinkButton = document.getElementById("copySiteLink");
const soundToggle = document.getElementById("soundToggle");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const toast = document.getElementById("toast");
const petalField = document.getElementById("petalField");
const cursorAura = document.getElementById("cursorAura");
const heroSection = document.querySelector(".hero");
const saveNoteButton = document.getElementById("saveNote");
const clearNoteButton = document.getElementById("clearNote");
const selfNote = document.getElementById("selfNote");
const savedNote = document.getElementById("savedNote");
const lightbox = document.getElementById("lightbox");
const lightboxBackdrop = document.getElementById("lightboxBackdrop");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const bioTitle = document.getElementById("bioTitle");
const bioLead = document.getElementById("bioLead");
const bioBody = document.getElementById("bioBody");
const metaOgUrl = document.getElementById("metaOgUrl");
const canonicalLink = document.getElementById("canonicalLink");

const posterSection = document.getElementById("yatie");
const posterPaper = document.getElementById("posterPaper");
const posterQrCanvas = document.getElementById("posterQrCanvas");
const posterSubtitle = document.getElementById("posterSubtitle");
const posterIntro = document.getElementById("posterIntro");
const posterQuote = document.getElementById("posterQuote");
const posterHint = document.getElementById("posterHint");
const posterTailNote = document.getElementById("posterTailNote");
const posterUrlText = document.getElementById("posterUrlText");
const downloadPosterButton = document.getElementById("downloadPoster");
const copyPosterLinkButton = document.getElementById("copyPosterLink");
const copyPosterLinkSecondaryButton = document.getElementById("copyPosterLinkSecondary");
const refreshPosterButton = document.getElementById("refreshPoster");
const openPosterSecondaryButton = document.getElementById("openPosterSecondary");
const openPosterButtons = document.querySelectorAll("[data-open-poster]");
const copyValueButtons = document.querySelectorAll("[data-copy-value]");

const bioModeButtons = document.querySelectorAll("[data-bio-mode]");
const revealNodes = document.querySelectorAll("[data-reveal]");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

let toastTimer = null;
let currentQuote = heroQuotes[0];
let currentEssay = essayPages[0];
let currentPosterTheme = posterThemes[0];
let html2canvasPromise = null;

const audioState = {
  ctx: null,
  filter: null,
  master: null,
  voices: [],
  interval: null,
  enabled: false
};

function currentSiteUrl() {
  const url = new URL(window.location.href);
  url.searchParams.delete("poster");
  url.hash = "";
  return url.toString();
}

async function ensureHtml2Canvas() {
  if (typeof window.html2canvas === "function") {
    return window.html2canvas;
  }

  if (!html2canvasPromise) {
    html2canvasPromise = import("./assets/vendor/html2canvas.min.js?v=2")
      .then((module) => module.default || window.html2canvas || module.html2canvas || null)
      .catch(() => null);
  }

  const lib = await html2canvasPromise;

  if (typeof lib === "function") {
    window.html2canvas = lib;
    return lib;
  }

  if (typeof window.html2canvas === "function") {
    return window.html2canvas;
  }

  return null;
}

function shortSiteUrl(url) {
  try {
    const parsed = new URL(url);
    return `${parsed.host}${parsed.pathname}`.replace(/\/$/, "") || parsed.host;
  } catch {
    return url;
  }
}

function pickRandom(pool, current) {
  if (pool.length === 1) {
    return pool[0];
  }

  let next = current;
  while (next === current) {
    next = pool[Math.floor(Math.random() * pool.length)];
  }
  return next;
}

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2600);

  playChime();
}

function updateQuote() {
  currentQuote = pickRandom(heroQuotes, currentQuote);
  heroQuote.textContent = currentQuote;
}

function updateEssay() {
  currentEssay = pickRandom(essayPages, currentEssay);
  essayTitle.textContent = currentEssay.title;
  essaySnippet.textContent = currentEssay.text;
}

function drawOracle() {
  const line = oracleLines[Math.floor(Math.random() * oracleLines.length)];
  oracleDisplay.textContent = line;
  return line;
}

function copyText(text, successMessage) {
  const legacyCopy = () => {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "true");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    helper.style.pointerEvents = "none";
    document.body.appendChild(helper);
    helper.focus();
    helper.select();
    helper.setSelectionRange(0, helper.value.length);

    let ok = false;

    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }

    helper.remove();
    return ok;
  };

  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast(successMessage);
        return true;
      })
      .catch(() => {
        const ok = legacyCopy();
        showToast(ok ? successMessage : "复制失败了，可能是浏览器在闹脾气。");
        return ok;
      });
  }

  const ok = legacyCopy();
  showToast(ok ? successMessage : "复制失败了，可能是浏览器在闹脾气。");
  return Promise.resolve(ok);
}

function setShareMeta() {
  const url = currentSiteUrl();

  if (canonicalLink) {
    canonicalLink.href = url;
  }

  if (metaOgUrl) {
    metaOgUrl.content = url;
  }
}

function saveLocalNote() {
  const value = selfNote.value.trim();

  if (!value) {
    showToast("留字之前，先写一句真心话。");
    return;
  }

  localStorage.setItem("muqian-note", value);
  renderSavedNote();
  showToast("已封存。希望未来的你别装作不认识这句话。");
}

function clearLocalNote() {
  localStorage.removeItem("muqian-note");
  selfNote.value = "";
  renderSavedNote();
  showToast("上一条已清空，风也替你保密了。");
}

function renderSavedNote() {
  const value = localStorage.getItem("muqian-note");
  if (value) {
    savedNote.textContent = `上次留下的话：${value}`;
  } else {
    savedNote.textContent = "还没有留字。你先写一句，风会替你记着。";
  }
}

function setBioMode(mode) {
  const profile = bioModes[mode];
  if (!profile) {
    return;
  }

  bioTitle.textContent = profile.title;
  bioLead.textContent = profile.lead;
  bioBody.textContent = profile.body;

  bioModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.bioMode === mode);
  });
}

function createPetals() {
  if (!petalField) {
    return;
  }

  const total = 16;
  for (let i = 0; i < total; i += 1) {
    const petal = document.createElement("span");
    petal.style.setProperty("--left", `${Math.random() * 100}%`);
    petal.style.setProperty("--size", `${10 + Math.random() * 14}px`);
    petal.style.setProperty("--opacity", `${0.22 + Math.random() * 0.48}`);
    petal.style.setProperty("--rotate", `${Math.random() * 180}deg`);
    petal.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    petal.style.setProperty("--duration", `${14 + Math.random() * 12}s`);
    petal.style.setProperty("--delay", `${Math.random() * 12}s`);
    petalField.appendChild(petal);
  }
}

function revealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -7% 0px"
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function updateScrollState() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? scrollTop / docHeight : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;

  let activeId = "#top";
  sections.forEach((section) => {
    if (scrollTop >= section.offsetTop - window.innerHeight * 0.3) {
      activeId = `#${section.id}`;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === activeId);
  });
}

function setupMenu() {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "收起目录" : "展开目录";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "展开目录";
    });
  });
}

function setupCursorAura() {
  if (!cursorAura || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursorAura.classList.add("is-active");
    },
    { passive: true }
  );

  window.addEventListener("pointerleave", () => {
    cursorAura.classList.remove("is-active");
  });

  const animate = () => {
    currentX += (targetX - currentX) * 0.16;
    currentY += (targetY - currentY) * 0.16;
    cursorAura.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animate);
  };

  animate();
}

function setupHeroParallax() {
  if (!heroSection || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  heroSection.addEventListener("pointermove", (event) => {
    const rect = heroSection.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroSection.style.setProperty("--mx", x.toFixed(3));
    heroSection.style.setProperty("--my", y.toFixed(3));
  });

  heroSection.addEventListener("pointerleave", () => {
    heroSection.style.setProperty("--mx", "0");
    heroSection.style.setProperty("--my", "0");
  });
}

function setupEggs() {
  document.querySelectorAll(".egg").forEach((node) => {
    node.addEventListener("click", () => {
      const message = node.dataset.egg || "轻轻一碰，会有小惊喜。";
      showToast(message);
    });
  });
}

function openLightbox(node) {
  if (!lightbox || !lightboxImage || !lightboxCaption) {
    return;
  }

  const src = node.dataset.lightboxSrc;
  const alt = node.dataset.lightboxAlt || "";
  const caption = node.dataset.lightboxCaption || "";

  if (!src) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeLightbox() {
  if (!lightbox || !lightboxImage) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  window.setTimeout(() => {
    if (!lightbox.classList.contains("is-open")) {
      lightboxImage.removeAttribute("src");
    }
  }, 240);
}

function setupLightbox() {
  const triggers = document.querySelectorAll("[data-lightbox-src]");
  if (!triggers.length || !lightbox) {
    return;
  }

  triggers.forEach((node) => {
    node.addEventListener("click", () => openLightbox(node));
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(node);
      }
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
}

function renderPosterTheme(forceNext = false) {
  if (forceNext) {
    currentPosterTheme = pickRandom(posterThemes, currentPosterTheme);
  }

  if (!posterSubtitle || !posterIntro || !posterQuote || !posterHint || !posterTailNote || !posterUrlText) {
    return;
  }

  posterSubtitle.textContent = currentPosterTheme.subtitle;
  posterIntro.textContent = currentPosterTheme.intro;
  posterQuote.textContent = currentPosterTheme.quote;
  posterHint.textContent = currentPosterTheme.hint;
  posterTailNote.textContent = currentPosterTheme.tailNote;
  posterUrlText.textContent = shortSiteUrl(currentSiteUrl());
}

function drawPosterQr() {
  if (!posterQrCanvas || typeof window.QRCode !== "function") {
    return false;
  }

  posterQrCanvas.innerHTML = "";

  new window.QRCode(posterQrCanvas, {
    text: currentSiteUrl(),
    width: 146,
    height: 146,
    colorDark: "#213127",
    colorLight: "#fffaf3",
    correctLevel: window.QRCode.CorrectLevel ? window.QRCode.CorrectLevel.H : 0
  });

  return true;
}

function waitForPosterAssets() {
  if (!posterPaper) {
    return Promise.resolve();
  }

  const images = [...posterPaper.querySelectorAll("img")];

  return Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve();
            return;
          }

          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        })
    )
  );
}

function downloadCanvas(canvas) {
  const filename = `lanyishi-yatie-${Date.now()}.png`;

  if (canvas.toBlob) {
    canvas.toBlob((blob) => {
      if (!blob) {
        showToast("海报导出失败了，换个姿势再试一次。");
        return;
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 300);
      showToast("雅帖已装袋，拿去分享吧。");
    }, "image/png");
    return;
  }

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("雅帖已装袋，拿去分享吧。");
}

async function downloadPoster(triggerButton = downloadPosterButton) {
  if (!posterPaper) {
    return;
  }

  const html2canvasLib = await ensureHtml2Canvas();

  if (typeof html2canvasLib !== "function") {
    showToast("作画工具还没到位，先复制链接也不失礼。");
    return;
  }

  renderPosterTheme();
  drawPosterQr();
  await waitForPosterAssets();

  const activeButton = triggerButton instanceof HTMLElement ? triggerButton : downloadPosterButton;
  const originalText = activeButton ? activeButton.textContent : "保存海报";

  if (activeButton) {
    activeButton.disabled = true;
    activeButton.textContent = "正在成卷";
  }

  try {
    const canvas = await html2canvasLib(posterPaper, {
      backgroundColor: null,
      scale: Math.min(window.devicePixelRatio || 1, 2) * 2,
      useCORS: true,
      logging: false,
      imageTimeout: 0
    });

    downloadCanvas(canvas);
  } catch {
    showToast("海报导出时手滑了一下，稍后再试。");
  } finally {
    if (activeButton) {
      activeButton.disabled = false;
      activeButton.textContent = originalText;
    }
  }
}

function setupPosterSection() {
  if (!posterPaper) {
    return;
  }

  renderPosterTheme();
  drawPosterQr();

  const scrollToPoster = () => {
    if (!posterSection) {
      return;
    }

    posterSection.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  };

  openPosterButtons.forEach((button) => {
    button.addEventListener("click", scrollToPoster);
  });

  if (openPosterSecondaryButton) {
    openPosterSecondaryButton.addEventListener("click", () => downloadPoster(openPosterSecondaryButton));
  }

  if (downloadPosterButton) {
    downloadPosterButton.addEventListener("click", () => downloadPoster(downloadPosterButton));
  }

  refreshPosterButton.addEventListener("click", () => {
    renderPosterTheme(true);
    drawPosterQr();
    showToast("题签已换，新的一句更适合出门见人。");
  });

  const copyLink = () => copyText(currentSiteUrl(), "网站链接已复制，转发这一下很体面。");

  if (copyPosterLinkButton) {
    copyPosterLinkButton.addEventListener("click", copyLink);
  }

  if (copyPosterLinkSecondaryButton) {
    copyPosterLinkSecondaryButton.addEventListener("click", copyLink);
  }
}

function setupCopyButtons() {
  copyValueButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.copyValue;
      const success = button.dataset.copySuccess || "已复制。";
      copyText(value, success);
    });
  });

  if (copySiteLinkButton) {
    copySiteLinkButton.addEventListener("click", () => {
      copyText(currentSiteUrl(), "网站链接已复制，发给朋友刚刚好。");
    });
  }
}

function createVoice(type, frequency) {
  const osc = audioState.ctx.createOscillator();
  const gain = audioState.ctx.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = 0.0001;
  osc.connect(gain).connect(audioState.filter);
  osc.start();
  return { osc, gain };
}

function playAmbientStep() {
  if (!audioState.ctx || !audioState.master) {
    return;
  }

  const notes = [196, 220, 246.94, 293.66, 329.63, 392];
  const root = notes[Math.floor(Math.random() * notes.length)];
  const now = audioState.ctx.currentTime;

  audioState.voices[0].osc.frequency.setTargetAtTime(root, now, 0.8);
  audioState.voices[1].osc.frequency.setTargetAtTime(root * 1.5, now, 0.8);
  audioState.voices[2].osc.frequency.setTargetAtTime(root / 2, now, 0.8);

  audioState.voices.forEach((voice, index) => {
    const peak = index === 0 ? 0.018 : index === 1 ? 0.012 : 0.009;
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
    voice.gain.gain.linearRampToValueAtTime(peak, now + 1.4);
    voice.gain.gain.linearRampToValueAtTime(peak * 0.45, now + 4.2);
  });
}

function startAmbient() {
  if (audioState.enabled) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    showToast("这个浏览器不太想配合环境音。");
    return;
  }

  audioState.ctx = new AudioContextClass();
  audioState.filter = audioState.ctx.createBiquadFilter();
  audioState.filter.type = "lowpass";
  audioState.filter.frequency.value = 1200;
  audioState.master = audioState.ctx.createGain();
  audioState.master.gain.value = 0.024;
  audioState.filter.connect(audioState.master).connect(audioState.ctx.destination);

  audioState.voices = [
    createVoice("triangle", 196),
    createVoice("sine", 293.66),
    createVoice("sine", 98)
  ];

  playAmbientStep();
  audioState.interval = window.setInterval(playAmbientStep, 4200);
  audioState.enabled = true;
  soundToggle.textContent = "停一停";
  soundToggle.classList.add("is-on");
  showToast("松风清音已起，可边逛边听。");
}

function stopAmbient() {
  if (!audioState.enabled || !audioState.ctx) {
    return;
  }

  const now = audioState.ctx.currentTime;
  audioState.voices.forEach((voice) => {
    voice.gain.gain.cancelScheduledValues(now);
    voice.gain.gain.setValueAtTime(voice.gain.gain.value, now);
    voice.gain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
    voice.osc.stop(now + 0.9);
  });

  clearInterval(audioState.interval);
  setTimeout(() => {
    if (audioState.ctx) {
      audioState.ctx.close();
    }

    audioState.ctx = null;
    audioState.voices = [];
    audioState.interval = null;
    audioState.filter = null;
    audioState.master = null;
  }, 1000);

  audioState.enabled = false;
  soundToggle.textContent = "启一曲";
  soundToggle.classList.remove("is-on");
  showToast("风声先歇会儿，页面继续陪你。");
}

function playChime() {
  if (!audioState.enabled || !audioState.ctx) {
    return;
  }

  const osc = audioState.ctx.createOscillator();
  const gain = audioState.ctx.createGain();
  const now = audioState.ctx.currentTime;

  osc.type = "sine";
  osc.frequency.value = 659.25;
  gain.gain.value = 0.0001;
  osc.connect(gain).connect(audioState.master);
  gain.gain.linearRampToValueAtTime(0.02, now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);
  osc.start(now);
  osc.stop(now + 0.74);
}

function setupAudio() {
  soundToggle.addEventListener("click", () => {
    if (audioState.enabled) {
      stopAmbient();
    } else {
      startAmbient();
    }
  });
}

function setupLoader() {
  if (loaderText) {
    loaderText.textContent = loaderTexts[Math.floor(Math.random() * loaderTexts.length)];
  }

  const finish = () => {
    window.setTimeout(() => {
      document.body.classList.remove("is-loading");
      loader.classList.add("is-hidden");
    }, 1100);
  };

  if (document.readyState === "complete") {
    finish();
  } else {
    window.addEventListener("load", finish, { once: true });
  }
}

function setupGlobalEscape() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    if (lightbox && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function setupDebugView() {
  const params = new URLSearchParams(window.location.search);

  if (params.get("poster") === "1") {
    window.setTimeout(() => {
      if (posterSection) {
        posterSection.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }, 900);
  }
}

function init() {
  setShareMeta();
  setupLoader();
  createPetals();
  revealOnScroll();
  setupMenu();
  setupCursorAura();
  setupHeroParallax();
  setupEggs();
  setupLightbox();
  setupPosterSection();
  setupCopyButtons();
  setupAudio();
  setupGlobalEscape();
  setupDebugView();
  renderSavedNote();
  renderPosterTheme();
  updateScrollState();

  window.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", () => {
    updateScrollState();
    drawPosterQr();
  });

  if (shuffleQuoteButton) {
    shuffleQuoteButton.addEventListener("click", updateQuote);
  }

  if (heroFortuneButton) {
    heroFortuneButton.addEventListener("click", () => {
      const line = drawOracle();
      showToast(line);
    });
  }

  if (shuffleEssayButton) {
    shuffleEssayButton.addEventListener("click", updateEssay);
  }

  if (drawOracleButton) {
    drawOracleButton.addEventListener("click", () => showToast(drawOracle()));
  }

  if (copyCardButton) {
    copyCardButton.addEventListener("click", () => copyText(profileSummary, "本站摘要已经替你抄好了。"));
  }

  if (copyProfileButton) {
    copyProfileButton.addEventListener("click", () => copyText(profileSummary, "本站简介已复制，拿去体面转发。"));
  }

  if (saveNoteButton) {
    saveNoteButton.addEventListener("click", saveLocalNote);
  }

  if (clearNoteButton) {
    clearNoteButton.addEventListener("click", clearLocalNote);
  }

  bioModeButtons.forEach((button) => {
    button.addEventListener("click", () => setBioMode(button.dataset.bioMode));
  });
}

init();
