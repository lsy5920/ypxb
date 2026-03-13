import type { Metadata } from "next";
import { Compass, HeartHandshake, MapPinned, Sparkles, SunMedium } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { TiltCard } from "@/components/ui/tilt-card";
import { favorites, heroBadges, principles, profile, storyCards } from "@/content/site";

export const metadata: Metadata = {
  title: "小传",
  description: "蓝诗亦 / 沐谦的个人小传：性格、习惯、原则与成长片段。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="小传"
        title="如果要用几个词概括我，大概是温和、清醒、幽默，也愿意把事情做踏实。"
        description="这里不做夸张设定，只把我如何生活、如何做决定、如何理解人与人之间的相处，认真地说给你听。"
        aside={
          <div className="space-y-3">
            <p>{profile.name}，字 {profile.courtesyName}，常驻 {profile.city}。</p>
            <p>平时研究 AI、学习商业、喜欢散步，也喜欢让身边的人跟我待在一起时能松一口气。</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white/70 px-3 py-1 text-xs text-ink/70"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <section>
        <SectionTitle
          eyebrow="成长片段"
          title="我的经历未必轰轰烈烈，但每一步都在让我更像自己"
          description="没有刻意包装的传奇故事，只有一些真实发生过，也真实塑造了我的时刻。"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {storyCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <TiltCard className="paper-panel h-full rounded-[1.85rem] p-5">
                <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                  <Sparkles className="size-4" />
                  <span>{card.accent}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{card.text}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="生活偏爱"
          title="我喜欢的很多东西，都藏在这些平常的小细节里"
          description="稳定的偏好往往比热闹的标签更能说明一个人，这里也最接近日常状态里的我。"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {favorites.map((item, index) => (
            <Reveal key={item.category} delay={index * 0.05}>
              <div className="paper-card h-full rounded-[1.75rem] border border-white/65 p-5 shadow-[0_12px_32px_rgba(37,68,68,0.08)]">
                <div className="flex items-center gap-2 text-sm text-emerald-900/78">
                  <SunMedium className="size-4" />
                  <span>{item.category}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-ink">{item.item}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="处世观"
          title="君子感不是装出来的，是很多小决定慢慢攒出来的"
          description="我理解的君子，不是端着，而是三观正、懂礼貌、有分寸、知道什么时候该认真。"
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <TiltCard className="paper-panel h-full rounded-[1.85rem] p-5">
                <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                  <Compass className="size-4" />
                  <span>{item.title}</span>
                </div>
                <p className="mt-4 text-lg leading-8 text-ink/84">{item.summary}</p>
                <p className="mt-3 text-sm leading-7 text-ink/68">{item.detail}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <HeartHandshake className="size-4" />
              <span>朋友会怎么说</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              阳光、心态稳、相处轻松，也愿意在热闹里照顾他人的感受。总结起来就是：和我待在一起，通常不会太有压力。
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <MapPinned className="size-4" />
              <span>我最怕的误解</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              最不希望被看成轻浮或不靠谱。所以即使表达可以有趣，做事也一定要稳，态度也一定要真诚。
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Sparkles className="size-4" />
              <span>十年后的感谢信</span>
            </div>
            <p className="mt-4 text-lg leading-8 text-ink/82">
              我希望十年后的自己会感谢现在的我：仍然保有温度，也没有停下继续成长的脚步。
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
