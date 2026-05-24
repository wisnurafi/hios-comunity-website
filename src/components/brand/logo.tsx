import { cn } from "@/lib/utils";

type LogoProps = {
  size?: number;
  className?: string;
  subtitle?: boolean;
};

/**
 * HIOS brand logo — versi SVG yang terinspirasi dari logo otak petir.
 * Tidak membutuhkan aset eksternal, sehingga selalu crisp di segala ukuran.
 */
export function Logo({ size = 56, className, subtitle = false }: LogoProps) {
  return (
    <div
      className={cn("inline-flex items-center gap-3", className)}
      aria-label="HIOS logo"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="10"
          fill="var(--hios-blue)"
          stroke="var(--hios-black)"
          strokeWidth="3"
        />
        {/* halftone dots */}
        <g opacity="0.45" fill="var(--hios-cream)">
          {Array.from({ length: 5 }).map((_, r) =>
            Array.from({ length: 5 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={10 + c * 11}
                cy={10 + r * 11}
                r="1.1"
              />
            )),
          )}
        </g>
        {/* brain blob */}
        <path
          d="M18 36c0-6 4-10 10-10 2-4 8-5 12-2 5-1 10 3 10 8 2 2 2 6 0 8-1 4-5 6-9 5-3 3-9 3-12 0-5 1-10-3-11-7-1-2 0-2 0-2z"
          fill="var(--hios-red)"
          stroke="var(--hios-black)"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M26 30c2 2 3 4 2 7M34 26c1 3 0 6-2 8M40 30c1 3 1 6-1 8"
          stroke="var(--hios-cream)"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
        {/* lightning bolts */}
        <path
          d="M14 20l5-8-2 6 5-3-6 10 2-5-4 0z"
          fill="var(--hios-yellow)"
          stroke="var(--hios-black)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M50 48l5-8-2 6 5-3-6 10 2-5-4 0z"
          fill="var(--hios-yellow)"
          stroke="var(--hios-black)"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <div className="leading-none">
        <span className="block font-heading text-xl font-black tracking-tight text-hios-black dark:text-hios-cream">
          HIOS
        </span>
        {subtitle && (
          <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-hios-black/70 dark:text-hios-cream/70">
            Orang Selaw
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Logo versi besar untuk hero (mark + subtitle terpisah).
 * Berbentuk kotak biru halftone dengan otak & petir — mirip logo utama.
 */
export function LogoMark({
  size = 320,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block", className)}
      aria-label="HIOS mark"
    >
      <defs>
        <pattern
          id="halftone-lg"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.6" fill="var(--hios-cream)" opacity="0.55" />
        </pattern>
      </defs>
      <rect
        x="8"
        y="8"
        width="304"
        height="304"
        rx="20"
        fill="var(--hios-blue)"
        stroke="var(--hios-black)"
        strokeWidth="6"
      />
      <rect
        x="8"
        y="8"
        width="304"
        height="304"
        rx="20"
        fill="url(#halftone-lg)"
      />
      {/* HIOS text */}
      <text
        x="160"
        y="92"
        textAnchor="middle"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="84"
        fontWeight="900"
        fill="var(--hios-cream)"
        stroke="var(--hios-black)"
        strokeWidth="5"
        paintOrder="stroke fill"
        letterSpacing="-2"
      >
        HIOS
      </text>
      {/* brain */}
      <g transform="translate(72 110)">
        <path
          d="M20 70c0-20 16-34 38-34 8-14 30-18 46-8 18-4 40 8 40 28 8 6 8 22 0 28-4 14-22 22-38 18-10 10-34 10-46 0-20 4-38-10-42-24-2-4 0-6 2-8z"
          fill="var(--hios-red)"
          stroke="var(--hios-black)"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M50 52c6 4 10 14 6 24M82 42c6 10 4 22-6 30M116 48c6 10 6 22-4 30M60 82c10 4 22 2 30-4"
          stroke="var(--hios-cream)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      {/* bolts */}
      <path
        d="M44 64l18-28-8 22 16-10-20 34 6-16-12 -2z"
        fill="var(--hios-yellow)"
        stroke="var(--hios-black)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M260 222l18-28-8 22 16-10-20 34 6-16-12 -2z"
        fill="var(--hios-yellow)"
        stroke="var(--hios-black)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M250 92l16-24-8 20 14-8-18 28 6-14-10-2z"
        fill="var(--hios-yellow)"
        stroke="var(--hios-black)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
