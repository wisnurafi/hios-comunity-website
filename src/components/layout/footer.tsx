import Link from "next/link";
import { Zap, Heart } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { HalftoneBackground } from "@/components/brand/comic-fx";
import { GlowButton } from "@/components/ui/comic-loader";
import { MarqueeTicker } from "@/components/ui/motion-primitives";
import { HIOS_META, NAV_ITEMS, SOCIALS } from "@/lib/data";

export function Footer() {
  const tickerItems = [
    "HIOS",
    "SELAW SELALU",
    "OTAK PETIR",
    "HIMPUNAN ORANG SELAW",
    "UNDERGROUND GAMING",
    "SEJAK 2021",
    "JOIN THE HIVE",
  ];

  return (
    <footer
      className="relative mt-24 overflow-hidden border-t-4 border-hios-black bg-hios-black text-hios-cream"
      id="footer"
    >
      <HalftoneBackground variant="dark" />

      {/* Marquee strip */}
      <div className="relative z-10 border-y-4 border-hios-black bg-hios-yellow py-3 text-hios-black">
        <MarqueeTicker speed={24}>
          {tickerItems.map((txt, i) => (
            <div
              key={`${txt}-${i}`}
              className="flex items-center gap-6 px-6 font-heading text-xl font-black uppercase tracking-tight"
            >
              <span>{txt}</span>
              <Zap className="size-5" />
            </div>
          ))}
        </MarqueeTicker>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        {/* Brand column */}
        <div className="md:col-span-5">
          <div className="inline-flex items-center rounded-2xl border-comic-lg bg-hios-blue p-4 shadow-comic-lg">
            <Logo size={44} subtitle />
          </div>
          <p className="mt-6 max-w-sm font-medium text-hios-cream">
            {HIOS_META.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <GlowButton
              as="a"
              href={HIOS_META.discordUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              size="md"
            >
              <Zap className="size-4" /> MASUK SERVER
            </GlowButton>
            <span className="font-mono text-xs uppercase tracking-widest text-hios-cream/60">
              v.selaw.2026
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-3">
          <h4 className="font-heading text-sm font-black uppercase tracking-[0.3em] text-hios-yellow">
            Jelajah
          </h4>
          <ul className="mt-4 grid gap-2">
            {NAV_ITEMS.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="group inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-hios-cream transition-colors hover:text-hios-yellow"
                >
                  <span className="text-hios-blue-electric transition-transform group-hover:translate-x-1">
                    →
                  </span>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="md:col-span-4">
          <h4 className="font-heading text-sm font-black uppercase tracking-[0.3em] text-hios-yellow">
            Sinyal
          </h4>
          <ul className="mt-4 grid gap-2">
            {SOCIALS.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border-2 border-hios-cream/30 bg-hios-black/40 px-4 py-3 font-heading text-sm font-bold uppercase tracking-widest text-hios-cream transition-colors hover:border-hios-yellow hover:bg-hios-yellow hover:text-hios-black"
                >
                  <span className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-block size-2 rounded-full bg-hios-yellow group-hover:bg-hios-black"
                    />
                    {s.label}
                  </span>
                  <span className="font-mono text-xs font-semibold tracking-wide text-hios-cream/80 group-hover:text-hios-black/70">
                    {s.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="relative z-10 border-t-4 border-hios-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hios-cream/80">
            © {new Date().getFullYear()} HIOS — {HIOS_META.fullName} All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.25em] text-hios-cream/80">
            dibuat dengan <Heart className="size-3.5 text-hios-red" /> dan
            banyak lagi
          </p>
        </div>
      </div>
    </footer>
  );
}
