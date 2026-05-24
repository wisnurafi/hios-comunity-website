import { Hash, Volume2, Megaphone, Zap, Send } from "lucide-react";
import {
  ComicPanel,
  ComicChip,
  SectionHeading,
  accentBg,
} from "@/components/brand/comic-panel";
import { HalftoneBackground } from "@/components/brand/comic-fx";
import { GlowButton } from "@/components/ui/comic-loader";
import { MotionReveal } from "@/components/ui/motion-primitives";
import {
  DISCORD_CHANNELS,
  DISCORD_MESSAGES,
  HIOS_META,
  type DiscordChannel,
} from "@/lib/data";

const channelIcon = {
  text: Hash,
  voice: Volume2,
  announcement: Megaphone,
} as const;

export function DiscordSection() {
  return (
    <section
      id="discord"
      className="relative isolate overflow-hidden py-24 text-hios-cream"
    >
      <HalftoneBackground variant="dark" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            eyebrow="PRATINJAU DISCORD"
            title="LIHAT DAPUR KAMI."
            variant="dark"
            description="Snapshot aktivitas server Discord HIOS. Voice channel 24 jam, meme dump tak ada habis, dan moderator yang tak pernah tidur."
          />
        </MotionReveal>

        <MotionReveal delay={0.15} className="mt-14">
          <ComicPanel accent="cream" className="overflow-hidden p-0">
            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
              {/* Sidebar */}
              <aside className="relative border-b-4 border-hios-black bg-hios-blue p-5 text-hios-cream md:border-b-0 md:border-r-4">
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-xl border-comic bg-hios-yellow text-hios-black shadow-[3px_3px_0_var(--hios-black)]">
                    <div className="flex size-full items-center justify-center font-heading text-lg font-black">
                      H
                    </div>
                  </div>
                  <div className="leading-tight">
                    <div className="font-heading text-base font-black uppercase">
                      HIOS SERVER
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-hios-cream/70">
                      {HIOS_META.activeCount} online
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <ChannelGroup
                    label="TEXT"
                    items={DISCORD_CHANNELS.filter((c) => c.type !== "voice")}
                  />
                  <ChannelGroup
                    label="VOICE"
                    items={DISCORD_CHANNELS.filter((c) => c.type === "voice")}
                  />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-halftone text-hios-cream/30 opacity-30"
                />
              </aside>

              {/* Chat */}
              <div className="bg-hios-cream p-5 text-hios-black">
                <div className="flex items-center justify-between border-b-2 border-dashed border-hios-black/40 pb-3">
                  <div className="flex items-center gap-2 font-heading text-sm font-black uppercase tracking-widest">
                    <Hash className="size-4" /> general
                    <ComicChip accent="red" className="ml-2">
                      LIVE
                    </ComicChip>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-hios-black/60">
                    {DISCORD_MESSAGES.length} pesan terakhir
                  </span>
                </div>

                <ul className="mt-4 space-y-4">
                  {DISCORD_MESSAGES.map((msg, i) => (
                    <li
                      key={`${msg.author}-${i}`}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border-comic font-heading text-sm font-black shadow-[2px_2px_0_var(--hios-black)] ${accentBg[msg.accent]}`}
                      >
                        {msg.avatar}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span className="font-heading text-sm font-black">
                            {msg.author}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-hios-black/50">
                            {msg.time}
                          </span>
                        </div>
                        <p className="mt-0.5 text-sm font-medium text-hios-black/90">
                          {msg.content}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* faux composer */}
                <div className="mt-6 flex items-center gap-2 rounded-full border-comic bg-white p-1.5 shadow-[3px_3px_0_var(--hios-black)]">
                  <span className="px-3 font-mono text-xs uppercase tracking-widest text-hios-black/50">
                    #general
                  </span>
                  <input
                    aria-label="Pesan demo"
                    placeholder="Ketik #hadir buat ikut game night..."
                    className="min-w-0 flex-1 bg-transparent py-1.5 font-mono text-xs tracking-wider outline-none placeholder:text-hios-black/40"
                    readOnly
                  />
                  <button
                    type="button"
                    className="inline-flex size-9 items-center justify-center rounded-full border-comic bg-hios-yellow text-hios-black shadow-[2px_2px_0_var(--hios-black)] transition hover-press"
                    aria-label="Kirim pesan demo"
                  >
                    <Send className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </ComicPanel>
        </MotionReveal>

        <MotionReveal
          delay={0.25}
          className="mt-10 flex flex-col items-center gap-4 text-center"
        >
          <p className="max-w-xl rounded-2xl border-2 border-hios-cream/25 bg-hios-black/40 px-5 py-3 font-medium text-hios-cream">
            Server publik. Tidak ada verifikasi panjang. Cukup klik tombol, baca
            rules, dan mulai ribut.
          </p>
          <GlowButton
            as="a"
            href={HIOS_META.discordUrl}
            target="_blank"
            rel="noreferrer"
            variant="accent"
            size="lg"
            className="glow-pulse"
          >
            <Zap className="size-5" /> JOIN {HIOS_META.discordUrl.replace("https://", "")}
          </GlowButton>
        </MotionReveal>
      </div>
    </section>
  );
}

function ChannelGroup({
  label,
  items,
}: {
  label: string;
  items: DiscordChannel[];
}) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-hios-cream/60">
        {label}
      </div>
      <ul className="space-y-1">
        {items.map((c) => {
          const Icon = channelIcon[c.type];
          return (
            <li key={c.name}>
              <div className="flex items-center justify-between rounded-xl border-2 border-transparent px-2 py-1.5 transition-colors hover:border-hios-cream/30 hover:bg-hios-black/30">
                <div className="flex min-w-0 items-center gap-2">
                  <Icon className="size-3.5 shrink-0 text-hios-cream/70" />
                  <span className="truncate font-mono text-xs tracking-wider">
                    {c.name}
                  </span>
                </div>
                {c.unread ? (
                  <span className="rounded-full border border-hios-black bg-hios-red px-1.5 py-0.5 font-mono text-[9px] font-black text-hios-cream">
                    {c.unread}
                  </span>
                ) : c.listeners ? (
                  <span className="rounded-full border border-hios-black bg-hios-yellow px-1.5 py-0.5 font-mono text-[9px] font-black text-hios-black">
                    {c.listeners}
                  </span>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
