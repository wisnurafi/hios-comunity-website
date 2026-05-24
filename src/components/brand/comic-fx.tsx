import { cn } from "@/lib/utils";

/**
 * HalftoneBackground — layer absolute untuk section hero / panel.
 * Gabungan halftone, grid, dan vignette gradient.
 */
export function HalftoneBackground({
  className,
  variant = "blue",
}: {
  className?: string;
  variant?: "blue" | "cream" | "dark" | "red";
}) {
  const bg = {
    blue: "bg-hios-blue",
    cream: "bg-hios-cream",
    dark: "bg-hios-black",
    red: "bg-hios-red",
  }[variant];

  const dotColor = {
    blue: "text-hios-cream/70",
    cream: "text-hios-black/30",
    dark: "text-hios-blue-electric/25",
    red: "text-hios-black/40",
  }[variant];

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        bg,
        className,
      )}
    >
      <div className={cn("absolute inset-0 bg-halftone", dotColor)} />
      <div className="absolute inset-0 bg-grid-cyber opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}

/**
 * LightningBolt — SVG petir kecil reusable untuk accent.
 */
export function LightningBolt({
  className,
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 50 70"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("drop-shadow-[4px_4px_0_var(--hios-black)]", className)}
      aria-hidden="true"
    >
      <path
        d="M30 2 L8 38 L22 38 L16 68 L42 28 L28 28 Z"
        fill="var(--hios-yellow)"
        stroke="var(--hios-black)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Starburst — poligon bintang komik untuk CTA / stiker.
 */
export function Starburst({
  children,
  className,
  rotate = -8,
}: {
  children?: React.ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="absolute inset-0 bg-hios-black clip-starburst" />
      <div className="absolute inset-[3px] bg-hios-yellow clip-starburst" />
      <div className="relative px-5 py-4 text-center font-heading text-sm font-black uppercase tracking-tight text-hios-black">
        {children}
      </div>
    </div>
  );
}

/**
 * SpeechBubble — gelembung ucapan komik dengan ekor segitiga.
 */
export function SpeechBubble({
  children,
  className,
  tail = "bottom-left",
}: {
  children: React.ReactNode;
  className?: string;
  tail?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border-comic-lg bg-hios-cream p-4 font-heading text-sm font-bold text-hios-black shadow-comic",
        className,
      )}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "absolute h-5 w-5 rotate-45 border-comic-lg bg-hios-cream",
          tail === "bottom-left" && "-bottom-3 left-6",
          tail === "bottom-right" && "-bottom-3 right-6",
          tail === "top-left" && "-top-3 left-6",
          tail === "top-right" && "-top-3 right-6",
        )}
      />
    </div>
  );
}
