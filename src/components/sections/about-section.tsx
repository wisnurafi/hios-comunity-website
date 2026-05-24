import { BrainCircuit, Flame, UsersRound, Shield } from "lucide-react";
import { ComicPanel, ComicChip, SectionHeading } from "@/components/brand/comic-panel";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/motion-primitives";
import { HalftoneBackground } from "@/components/brand/comic-fx";
import { HIOS_META } from "@/lib/data";

const pillars = [
  {
    icon: BrainCircuit,
    title: "OTAK PETIR",
    text: "Kekuatan berasal dari pengetahuan itu sendiri. Gagasan liar, riset game, strategi aneh—semua dihargai di sini.",
    accent: "blue" as const,
  },
  {
    icon: Flame,
    title: "SELAW TAPI GRIND",
    text: "Santai bukan berarti lembek. Kami main serius, ketawa keras, dan tetap bisa tidur cukup (kadang-kadang).",
    accent: "red" as const,
  },
  {
    icon: UsersRound,
    title: "UNDERGROUND FAMILY",
    text: "Tidak ada elitisme rank. Mau pro, casual, atau baru install, semua duduk di voice channel yang sama.",
    accent: "yellow" as const,
  },
  {
    icon: Shield,
    title: "ZERO TOXIC",
    text: "Jujur boleh, rasis tidak. Moderasi aktif, rules jelas. Kami jaga ruang ini dengan serius.",
    accent: "cream" as const,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            eyebrow="TENTANG KOMUNITAS"
            title="KAMI BUKAN SERVER DISCORD BIASA."
            variant="light"
            description="HIOS adalah kumpulan orang selaw yang terlalu banyak main game dan terlalu sedikit tidur. Kami tumbuh dari kamar kos, sekarang jadi salah satu komunitas gaming underground paling hidup di Indonesia."
          />
        </MotionReveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Manifesto panel */}
          <MotionReveal className="lg:col-span-5">
            <ComicPanel accent="blue" halftone tilt="left" className="p-8">
              <ComicChip accent="yellow" className="mb-4">
                MANIFESTO
              </ComicChip>
              <p className="font-heading text-3xl font-black uppercase leading-tight text-hios-cream text-stroke-thin">
                &ldquo;{HIOS_META.subTagline}&rdquo;
              </p>
              <p className="mt-6 font-medium text-hios-cream/85">
                Kami percaya pertumbuhan datang dari keberanian turun ke dasar.
                Mencoba build aneh. Grind rank subuh. Bikin meme yang tidak ada
                yang suruh. Itu HIOS.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                <Stat label="ANGGOTA" value={HIOS_META.memberCount} />
                <Stat label="AKTIF" value={HIOS_META.activeCount} />
                <Stat label="BERDIRI" value={HIOS_META.founded} />
              </div>
            </ComicPanel>
          </MotionReveal>

          {/* Pillars grid */}
          <div className="lg:col-span-7">
            <MotionStagger className="grid gap-5 sm:grid-cols-2">
              {pillars.map((p) => (
                <MotionStaggerItem key={p.title}>
                  <ComicPanel
                    accent={p.accent}
                    className="h-full p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-comic-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="inline-flex size-11 items-center justify-center rounded-xl border-comic bg-hios-black text-hios-yellow shadow-[3px_3px_0_var(--hios-cream)]">
                        <p.icon className="size-5" />
                      </div>
                      <h3 className="font-heading text-xl font-black uppercase tracking-tight">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm font-medium leading-relaxed">
                      {p.text}
                    </p>
                  </ComicPanel>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </div>

      <HalftoneBackground variant="cream" className="-z-10 opacity-40" />
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border-2 border-hios-cream/30 bg-hios-black/30 p-3 text-center">
      <div className="font-heading text-2xl font-black text-hios-yellow">
        {value}
      </div>
      <div className="mt-0.5 font-mono text-[9px] uppercase tracking-widest text-hios-cream/70">
        {label}
      </div>
    </div>
  );
}
