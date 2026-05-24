"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Users, Gamepad2 } from "lucide-react";
import { LogoMark } from "@/components/brand/logo";
import {
  HalftoneBackground,
  LightningBolt,
  SpeechBubble,
} from "@/components/brand/comic-fx";
import { ComicChip } from "@/components/brand/comic-panel";
import { GlowButton } from "@/components/ui/comic-loader";
import { MarqueeTicker } from "@/components/ui/motion-primitives";
import { HIOS_META, STATS } from "@/lib/data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-10 pb-20 sm:pt-16 md:pt-20"
    >
      <HalftoneBackground variant="blue" />

      {/* floating stickers */}
      <motion.div
        aria-hidden
        initial={{ y: -10, rotate: -12 }}
        animate={{ y: [-10, 6, -10], rotate: [-12, -6, -12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-24 hidden lg:block"
      >
        <LightningBolt size={64} />
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ y: 0, rotate: 18 }}
        animate={{ y: [0, 14, 0], rotate: [18, 12, 18] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[4%] top-36 hidden lg:block"
      >
        <LightningBolt size={80} className="opacity-90" />
      </motion.div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-12 md:items-center">
        {/* Copy */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2"
          >
            <ComicChip accent="yellow">
              <Zap aria-hidden className="size-3.5" /> COMMUNITY ONLINE
            </ComicChip>
            <ComicChip accent="red">UNDERGROUND</ComicChip>
            <ComicChip accent="cream">EST. {HIOS_META.founded}</ComicChip>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-heading text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.85] tracking-tighter text-hios-cream text-stroke-thick text-shadow-comic-lg"
          >
            <span className="block">HIOS</span>
            <span className="block text-hios-yellow">SELAW</span>
            <span className="block text-hios-cream">SQUAD.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl rounded-2xl border-2 border-hios-black/30 bg-hios-black/25 p-4 font-medium text-hios-cream backdrop-blur-sm sm:text-lg"
          >
            {HIOS_META.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <GlowButton
              as="a"
              href={HIOS_META.discordUrl}
              target="_blank"
              rel="noreferrer"
              variant="accent"
              size="lg"
              className="glow-pulse"
            >
              <Zap className="size-5" /> MASUK DISCORD <ArrowRight className="size-4" />
            </GlowButton>
            <GlowButton as="a" href="#about" variant="ghost" size="lg">
              <Users className="size-4" /> LIHAT KOMUNITAS
            </GlowButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border-comic-lg bg-hios-cream px-4 py-3 text-hios-black shadow-comic hover-lift"
              >
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-hios-black/60">
                  {stat.label}
                </div>
                <div className="font-heading text-3xl font-black leading-none">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-hios-red">
                  {stat.caption}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo mark */}
        <div className="relative md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto"
          >
            <div className="relative mx-auto w-full max-w-sm">
              <LogoMark size={420} className="drop-shadow-[10px_10px_0_var(--hios-black)]" />
              <motion.div
                aria-hidden
                animate={{ rotate: [0, 4, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-6 hidden md:block"
              >
                <div className="-rotate-6 rounded-2xl border-comic-lg bg-hios-yellow px-3 py-1.5 font-heading text-xs font-black uppercase tracking-widest text-hios-black shadow-comic">
                  otak petir ⚡
                </div>
              </motion.div>

              <motion.div
                aria-hidden
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-10 -left-4 hidden w-56 md:block"
              >
                <SpeechBubble tail="top-left" className="rotate-[-3deg]">
                  <span className="block">&ldquo;{HIOS_META.tagline}.&rdquo;</span>
                  <span className="mt-1 block font-mono text-[10px] uppercase tracking-widest text-hios-red">
                    — motto resmi
                  </span>
                </SpeechBubble>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* underground ticker */}
      <div className="relative z-10 mt-16 border-y-4 border-hios-black bg-hios-cream py-3">
        <MarqueeTicker speed={30}>
          {[
            { t: "DISCORD 24/7", i: <Gamepad2 className="size-4" /> },
            { t: "RANKED GRIND", i: <Zap className="size-4" /> },
            { t: "MEME FACTORY", i: <Gamepad2 className="size-4" /> },
            { t: "SELAW MODE", i: <Zap className="size-4" /> },
            { t: "TURNAMEN INTERNAL", i: <Gamepad2 className="size-4" /> },
            { t: "GAME NIGHT", i: <Zap className="size-4" /> },
          ].map((x, i) => (
            <div
              key={`${x.t}-${i}`}
              className="flex items-center gap-3 px-6 font-heading text-base font-black uppercase tracking-tight text-hios-black"
            >
              {x.i}
              <span>{x.t}</span>
              <span className="text-hios-blue">//</span>
            </div>
          ))}
        </MarqueeTicker>
      </div>
    </section>
  );
}
