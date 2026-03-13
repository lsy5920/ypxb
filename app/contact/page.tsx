import type { Metadata } from "next";
import { Feather, HeartHandshake, Laugh, Mail, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { contactCards } from "@/content/site";

export const metadata: Metadata = {
  title: "投帖处",
  description: "蓝诗亦的联系页：欢迎围绕创意、合作与真诚交流展开对话。",
};

const topics = [
  "AI、网页表达与内容创作",
  "商业想法、项目合作与灵感交换",
  "生活观察、散步、仪式感与日常交流",
  "如果你只是想认真说一句“这页挺好看”，也欢迎",
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="投帖处"
        title="如果你愿意交流，这里有我正式对外开放的联系方式。"
        description="邮箱和微信已经放好。无论是合作沟通、灵感交换，还是认真打个招呼，都欢迎联系。"
        aside={
          <div className="space-y-3">
            <p>当前状态：联系入口已启用，可直接通过邮箱或微信找到我。</p>
            <p>适合聊的内容：创意、合作、日常、成长与表达。</p>
            <p>推荐方式：带一句自我介绍或来意，会更高效也更舒服。</p>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 0.05}>
            <div className="paper-panel h-full rounded-[1.85rem] p-5">
              <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                <Mail className="size-4" />
                <span>{card.title}</span>
              </div>
              {card.href ? (
                <a
                  href={card.href}
                  className="mt-4 block text-xl font-semibold text-ink underline decoration-emerald-200 underline-offset-4"
                >
                  {card.value}
                </a>
              ) : (
                <h2 className="mt-4 text-xl font-semibold text-ink">{card.value}</h2>
              )}
              <p className="mt-3 text-sm leading-7 text-ink/68">{card.note}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal className="paper-panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm text-emerald-900/80">
            <HeartHandshake className="size-4" />
            <span>你可以跟我聊什么</span>
          </div>

          <div className="mt-5 space-y-3">
            {topics.map((topic) => (
              <div
                key={topic}
                className="rounded-[1.4rem] border border-white/65 bg-white/72 px-4 py-3 text-sm leading-7 text-ink/68"
              >
                {topic}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="paper-panel rounded-[2rem] p-6 sm:p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-emerald-900/80">
              <Sparkles className="size-4" />
              <span>推荐开场白</span>
            </div>

            <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
              <p className="text-lg leading-8 text-ink/82">
                “最近在做什么有意思的事？如果你愿意，我也想和你交换一个想法。”
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
              <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                <Laugh className="size-4" />
                <span>温柔提醒</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/68">
                如果方便的话，可以带一句简单的自我介绍或来意。这样我会更容易快速进入状态，也更能认真回应你。
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
              <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                <Feather className="size-4" />
                <span>补充说明</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/68">
                现在这里已经是正式可用的联系入口。后续如果增加 GitHub、社交账号或更多合作方式，也会继续放在这一页。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
