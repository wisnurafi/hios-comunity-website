"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ComicLoader — pembuka halaman bergaya komik.
 * Otomatis hilang setelah delay tertentu (default 1200ms).
 */
export function ComicLoader({ duration = 1200 }: { duration?: number }) {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(t);
  }, [duration]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="hios-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-hios-blue"
          aria-hidden
        >
          <div className="absolute inset-0 bg-halftone text-hios-cream/70" />
          <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay" />

          <div className="relative flex flex-col items-center gap-6 px-6">
            <motion.div
              initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 14 }}
              className="font-heading text-7xl font-black uppercase text-hios-cream text-stroke-thick text-shadow-comic-lg sm:text-8xl md:text-9xl"
            >
              HIOS
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: duration / 1000 - 0.2, ease: "easeInOut" }}
              className="h-2 w-52 max-w-[60vw] border-2 border-hios-black bg-hios-yellow shadow-[3px_3px_0_var(--hios-black)]"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.4em] text-hios-cream/90"
            >
              menyalakan otak petir…
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/**
 * GlowButton — tombol utama bergaya komik dengan bayangan tebal dan animasi tekan.
 */
export function GlowButton({
  children,
  className,
  variant = "primary",
  size = "lg",
  as: As = "button",
  href,
  target,
  rel,
  ...rest
}: React.ComponentProps<"button"> & {
  variant?: "primary" | "accent" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const styles = {
    primary: "bg-hios-blue text-hios-cream",
    accent: "bg-hios-yellow text-hios-black",
    danger: "bg-hios-red text-hios-cream",
    ghost: "bg-hios-cream text-hios-black",
  }[variant];

  const sizing = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  }[size];

  return (
    <As
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "group relative inline-flex items-center gap-2 rounded-full border-comic-lg font-heading font-black uppercase tracking-wider shadow-comic hover-press",
        styles,
        sizing,
        className,
      )}
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-halftone opacity-30 mix-blend-multiply"
      />
    </As>
  );
}
