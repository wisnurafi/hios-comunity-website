"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Shuffle } from "lucide-react";
import {
  ComicPanel,
  ComicChip,
  SectionHeading,
  accentBg,
} from "@/components/brand/comic-panel";
import { HalftoneBackground } from "@/components/brand/comic-fx";
import { MotionReveal } from "@/components/ui/motion-primitives";
import { QUOTES, type AccentKey } from "@/lib/data";

const accents: AccentKey[] = ["blue", "red", "yellow", "cream"];

export function QuotesSection() {
  const [idx, setIdx] = React.useState(0);

  // auto rotate every 6s
  React.useEffect(() => {
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % QUOTES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const q = QUOTES[idx];
  const accent = accents[idx % accents.length];

  return (
    <section
      id="quotes"
      className="relative isolate overflow-hidden py-24 text-hios-cream"
    >
      <HalftoneBackground variant="blue" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            align="center"
            eyebrow="KUTIPAN ACAK"
            title="VOICE CHAT MEMORIES."
            variant="dark"
            description="Potongan kalimat legendaris dari penghuni HIOS. Sebagian bijak, sebagian nyeleneh, semuanya nyata."
          />
        </MotionReveal>

        <MotionReveal delay={0.15} className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -20, rotate: 2 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <ComicPanel accent={accent} halftone className="p-10 text-left md:p-14">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 rounded-2xl border-comic-lg bg-hios-black p-3 text-hios-yellow shadow-[4px_4px_0_var(--hios-yellow)]">
                    <Quote className="size-6" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl font-black uppercase leading-snug tracking-tight sm:text-3xl md:text-4xl">
                      &ldquo;{q.text}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div
                        className={`flex size-10 items-center justify-center rounded-full border-comic font-heading text-sm font-black shadow-comic ${accentBg[accent === "cream" ? "blue" : "cream"]}`}
                      >
                        {q.author.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-heading text-sm font-black uppercase tracking-widest">
                          {q.author}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                          anggota HIOS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ComicPanel>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {QUOTES.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Kutipan ${i + 1}`}
                  className={`size-3 rounded-full border-2 border-hios-black transition-all ${
                    i === idx ? "scale-125 bg-hios-yellow" : "bg-hios-cream/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ComicChip accent="yellow">
                {String(idx + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
              </ComicChip>
              <button
                type="button"
                onClick={() =>
                  setIdx((prev) => {
                    let next = Math.floor(Math.random() * QUOTES.length);
                    if (next === prev) next = (next + 1) % QUOTES.length;
                    return next;
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border-comic-lg bg-hios-yellow px-4 py-2 font-heading text-xs font-black uppercase tracking-widest text-hios-black shadow-comic hover-press"
              >
                <Shuffle className="size-4" /> acak
              </button>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
