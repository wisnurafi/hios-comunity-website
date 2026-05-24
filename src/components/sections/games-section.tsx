import { Gamepad2, Target, Users, Sparkles } from "lucide-react";
import {
  ComicPanel,
  ComicChip,
  SectionHeading,
} from "@/components/brand/comic-panel";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/ui/motion-primitives";
import { GAMES, type Game } from "@/lib/data";

const accentMap: Record<Game["accent"], string> = {
  blue: "bg-hios-blue text-hios-cream",
  red: "bg-hios-red text-hios-cream",
  yellow: "bg-hios-yellow text-hios-black",
};

export function GamesSection() {
  return (
    <section id="games" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <MotionReveal>
          <SectionHeading
            eyebrow="GAME YANG KAMI MAINKAN"
            title="ARSENAL SELAW."
            variant="light"
            description="Dari FPS sampai sandbox, dari ranked grind sampai silly mode. Ini game-game yang paling sering bikin Discord ribut."
          />
        </MotionReveal>

        <MotionStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAMES.map((g, i) => (
            <MotionStaggerItem key={g.title}>
              <GameCard game={g} index={i} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}

function GameCard({ game, index }: { game: Game; index: number }) {
  return (
    <ComicPanel
      accent="cream"
      className="group relative overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-comic-lg"
    >
      {/* Poster */}
      <div
        className={`relative h-40 overflow-hidden border-b-4 border-hios-black ${accentMap[game.accent]}`}
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-halftone text-hios-black/60 opacity-50"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-cyber opacity-25 mix-blend-overlay"
        />
        <div className="absolute -right-6 -top-6 size-28 rotate-12 rounded-3xl border-comic bg-hios-cream/10 backdrop-blur-sm" />
        <div className="relative flex h-full flex-col justify-between p-5">
          <div className="flex items-center justify-between">
            <ComicChip
              accent={game.accent === "yellow" ? "blue" : "yellow"}
              className="text-[10px]"
            >
              #{String(index + 1).padStart(2, "0")}
            </ComicChip>
            <Sparkles className="size-5 opacity-90" aria-hidden />
          </div>
          <h3 className="font-heading text-3xl font-black uppercase tracking-tight leading-none text-hios-cream text-stroke-thick text-shadow-comic">
            {game.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
          <span className="inline-flex items-center gap-1 rounded-full border-2 border-hios-black bg-hios-black/5 px-2 py-0.5">
            <Gamepad2 className="size-3" /> {game.genre}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border-2 border-hios-black bg-hios-black/5 px-2 py-0.5">
            <Users className="size-3" /> {game.players}
          </span>
        </div>
        <p className="text-sm font-medium text-hios-black/85">
          <span className="mr-1 inline-flex items-center gap-1 font-heading text-xs font-black uppercase tracking-widest text-hios-red">
            <Target className="size-3" /> vibe:
          </span>
          {game.vibe}
        </p>
      </div>
    </ComicPanel>
  );
}
