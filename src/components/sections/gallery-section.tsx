import Image from "next/image";
import { Camera, Sparkles, Trophy, Image as ImageIcon } from "lucide-react";
import {
  ComicPanel,
  ComicChip,
  SectionHeading,
} from "@/components/brand/comic-panel";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/motion-primitives";
import { GALLERY, type GalleryItem } from "@/lib/data";

const tagIcon: Record<string, React.ElementType> = {
  EVENT: Sparkles,
  AWARD: Trophy,
  ART: ImageIcon,
  IRL: Camera,
  ESPORT: Trophy,
  CLIP: Camera,
};

export function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            eyebrow="GALERI KOMUNITAS"
            title="ARSIP SELAW."
            variant="light"
            description="Kilas balik event, meme, kopdar, dan momen-momen yang tidak akan kami lupakan (bahkan setelah berusaha)."
          />
        </MotionReveal>

        <MotionStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <MotionStaggerItem key={item.title}>
              <GalleryCard item={item} index={i} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const Icon = tagIcon[item.tag] ?? Sparkles;

  return (
    <ComicPanel
      accent={item.accent}
      halftone
      tilt={item.tilt === "none" ? undefined : item.tilt}
      className="group relative overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1 hover:-rotate-0 hover:shadow-comic-lg"
    >
      {/* Faux polaroid photo */}
      <div
        className="relative aspect-[4/3] overflow-hidden border-b-4 border-hios-black bg-hios-black"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={index < 2}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-hios-black/70 via-hios-black/20 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-halftone text-hios-black/70 opacity-20 mix-blend-multiply"
        />
        {/* decorative composition */}
        <div className="absolute inset-4 rounded-xl border-2 border-dashed border-hios-cream/60" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <ComicChip
            accent={item.accent === "yellow" ? "red" : "yellow"}
            className="text-[10px]"
          >
            <Icon className="size-3" /> {item.tag}
          </ComicChip>
          <span className="font-mono text-[10px] uppercase tracking-widest text-hios-cream/80">
            #{String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="font-heading text-2xl font-black uppercase leading-none text-hios-cream text-stroke-thick text-shadow-comic">
            {item.title}
          </div>
        </div>
        {/* scanlines overlay */}
        <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />
      </div>

      {/* caption bar */}
      <div className="flex items-center justify-between gap-3 p-4">
        <p className="text-sm font-medium leading-snug">&ldquo;{item.caption}&rdquo;</p>
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest opacity-70">
          / {item.tag.toLowerCase()}
        </span>
      </div>
    </ComicPanel>
  );
}
