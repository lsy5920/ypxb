import type { Metadata } from "next";
import { Feather, HeartHandshake, Laugh, Mail, Sparkles } from "lucide-react";
import { PageBanner } from "@/components/ui/page-banner";
import { Reveal } from "@/components/ui/reveal";
import { contactCards } from "@/content/site";

export const metadata: Metadata = {
  title: "投帖处",
  description: "蓝诗亦的联系与互动页面：先把话头抛过来，剩下的交给真诚和一点风趣。",
};

const topics = [
  "AI、创意工具、网页表达",
  "商业脑洞、创业想法、合作灵感",
  "日常散步、生活仪式感、情绪交流",
  "如果你只是想认真夸一句“这页挺好看”，也欢迎",
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <PageBanner
        eyebrow="投帖处"
        title="如果你也真诚、也有趣，那这页就是给你留的座位。"
        description="现在还没有把真实联系方式填上去，所以先把交流气氛和入口位留好。你后续只要补上邮箱、微信或 GitHub，这里就能直接上岗。"
        aside={
          <div className="space-y-3">
            <p>当前策略：先预留展示位，不乱编联系方式。</p>
            <p>适合聊的内容：想法、合作、日常、情绪、成长。</p>
            <p>推荐语气：直接、真诚、别只发“在吗”。</p>
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
              <h2 className="mt-4 text-xl font-semibold text-ink">{card.value}</h2>
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
                “最近有没有什么想做但还没做出来的点子？我这里正好也有一个。”
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
              <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                <Laugh className="size-4" />
                <span>温柔提醒</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/68">
                别一上来只发“在吗”。这三个字像敲门以后站门口不说话，多少有点让人替你着急。
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/65 bg-white/72 p-5">
              <div className="flex items-center gap-2 text-sm text-emerald-900/80">
                <Feather className="size-4" />
                <span>补充说明</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-ink/68">
                等你后续把真实联系方式补进内容文件，这里就能从“预留投帖处”升级成真正可直达的联系页。
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
