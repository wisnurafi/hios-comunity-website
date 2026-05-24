import {
  ComicPanel,
  ComicChip,
  SectionHeading,
} from "@/components/brand/comic-panel";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/motion-primitives";
import { LightningBolt } from "@/components/brand/comic-fx";
import { STORY } from "@/lib/data";

export function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            eyebrow="GARIS WAKTU / KISAH"
            title="DARI TEMPAT TONGKRONGAN KE JAGAT MAYA."
            variant="light"
            description="Lima tahun lebih berjalan, banyak yang datang dan pergi. Ini ringkasan perjalanan HIOS yang (hampir) selalu diiringi suara mecha keyboard."
          />
        </MotionReveal>

        <MotionStagger className="relative mt-16">
          {/* vertical spine */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[22px] top-0 bottom-0 w-1 rounded-full bg-hios-black md:left-1/2 md:-translate-x-1/2"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-3 left-[14px] md:left-1/2 md:-translate-x-1/2"
          >
            <LightningBolt size={34} />
          </div>

          <ul className="space-y-10">
            {STORY.map((ev, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              return (
                <MotionStaggerItem key={ev.year}>
                  <li className="relative pl-16 md:pl-0">
                    <div
                      className={`grid items-center gap-8 md:grid-cols-2 ${
                        side === "right" ? "md:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Card */}
                      <div
                        className={`${side === "left" ? "md:pr-12" : "md:pl-12"}`}
                      >
                        <ComicPanel
                          accent={i === STORY.length - 1 ? "yellow" : "cream"}
                          halftone
                          tilt={side === "left" ? "left" : "right"}
                          className="p-6 hover-lift"
                        >
                          <div className="flex items-center justify-between">
                            <ComicChip accent="red">{ev.tag}</ComicChip>
                            <span className="font-heading text-3xl font-black text-hios-blue">
                              {ev.year}
                            </span>
                          </div>
                          <h3 className="mt-3 font-heading text-2xl font-black uppercase leading-tight tracking-tight">
                            {ev.title}
                          </h3>
                          <p className="mt-3 text-sm font-medium leading-relaxed">
                            {ev.description}
                          </p>
                        </ComicPanel>
                      </div>

                      {/* Spacer for opposite side on desktop */}
                      <div className="hidden md:block" aria-hidden />
                    </div>

                    {/* Node */}
                    <div
                      aria-hidden
                      className="absolute left-[6px] top-8 flex size-10 items-center justify-center rounded-full border-comic-lg bg-hios-yellow font-heading text-sm font-black text-hios-black shadow-comic md:left-1/2 md:-translate-x-1/2"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </li>
                </MotionStaggerItem>
              );
            })}
          </ul>
        </MotionStagger>
      </div>
    </section>
  );
}
