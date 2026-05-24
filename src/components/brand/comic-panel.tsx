import { cn } from "@/lib/utils";
import type { AccentKey } from "@/lib/data";

export const accentBg: Record<AccentKey, string> = {
  blue: "bg-hios-blue text-hios-cream",
  red: "bg-hios-red text-hios-cream",
  yellow: "bg-hios-yellow text-hios-black",
  cream: "bg-hios-cream text-hios-black",
};

/**
 * ComicPanel — kartu dengan border hitam tebal, bayangan offset, dan halftone opsional.
 */
export function ComicPanel({
  children,
  className,
  accent = "cream",
  halftone = false,
  tilt,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: AccentKey;
  halftone?: boolean;
  tilt?: "left" | "right";
  as?: React.ElementType;
}) {
  return (
    <As
      className={cn(
        "relative rounded-3xl border-comic-lg shadow-comic",
        accentBg[accent],
        tilt === "left" && "tilt-left",
        tilt === "right" && "tilt-right",
        className,
      )}
    >
      {halftone && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[calc(1.5rem-4px)] bg-halftone opacity-40 mix-blend-multiply",
            accent === "blue" ? "text-hios-cream/70" : "text-hios-black/60",
          )}
        />
      )}
      <div className="relative">{children}</div>
    </As>
  );
}

/**
 * ComicChip — badge kecil gaya komik.
 */
export function ComicChip({
  children,
  className,
  accent = "yellow",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: AccentKey;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-comic px-3 py-1 font-heading text-[11px] font-black uppercase tracking-widest shadow-[3px_3px_0_var(--hios-black)]",
        accentBg[accent],
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * SectionHeading — judul besar gaya komik.
 * variant="light" untuk background terang (cream/kuning), "dark" untuk background gelap/biru.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  variant = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  className?: string;
}) {
  const titleColor =
    variant === "dark" ? "text-hios-cream" : "text-hios-blue";
  const descColor =
    variant === "dark" ? "text-hios-cream/90" : "text-hios-black/80";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow && (
        <ComicChip accent="yellow" className="shake-hover">
          <span aria-hidden>⚡</span> {eyebrow}
        </ComicChip>
      )}
      <h2
        className={cn(
          "font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl",
          "text-stroke-thick text-shadow-comic",
          titleColor,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base font-medium sm:text-lg",
            descColor,
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
      <div
        aria-hidden
        className={cn(
          "h-2 w-32 rounded-full border-2 border-hios-black bg-hios-yellow shadow-[3px_3px_0_var(--hios-black)]",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}

/**
 * StatusDot — titik status (online/idle/dnd/offline) gaya Discord.
 */
export function StatusDot({
  status,
  className,
}: {
  status: "online" | "idle" | "dnd" | "offline";
  className?: string;
}) {
  const color = {
    online: "bg-emerald-400",
    idle: "bg-yellow-400",
    dnd: "bg-hios-red",
    offline: "bg-zinc-400",
  }[status];

  return (
    <span
      className={cn(
        "inline-block size-2.5 rounded-full border-2 border-hios-black",
        color,
        status === "online" && "shadow-[0_0_0_2px_rgba(16,185,129,0.35)]",
        className,
      )}
      aria-label={`status ${status}`}
    />
  );
}
