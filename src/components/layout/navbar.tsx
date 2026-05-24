"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, HIOS_META } from "@/lib/data";
import { Logo } from "@/components/brand/logo";
import { GlowButton } from "@/components/ui/comic-loader";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Desktop / mobile bar */}
        <div
          className={cn(
            "flex w-full items-center justify-between rounded-full border-comic-lg bg-hios-cream px-3 py-2 shadow-comic transition-all",
            scrolled && "bg-hios-cream/95 backdrop-blur",
          )}
        >
          <Link
            href="#home"
            className="flex items-center gap-2 pl-2 pr-4 shake-hover"
            aria-label="Ke beranda HIOS"
          >
            <Logo size={36} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Utama">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-full px-3 py-1.5 font-heading text-xs font-black uppercase tracking-widest text-hios-black transition-colors hover:text-hios-blue"
              >
                {item.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-hios-blue transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <GlowButton
              as="a"
              href={HIOS_META.discordUrl}
              target="_blank"
              rel="noreferrer"
              size="sm"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              <Zap className="size-4" /> JOIN DISCORD
            </GlowButton>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border-comic bg-hios-yellow text-hios-black shadow-[3px_3px_0_var(--hios-black)] transition hover-press lg:hidden"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:hidden"
          >
            <div className="rounded-3xl border-comic-lg bg-hios-cream p-3 shadow-comic-lg">
              <ul className="grid gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl border-2 border-transparent px-4 py-3 font-heading text-sm font-black uppercase tracking-widest text-hios-black transition-colors hover:border-hios-black hover:bg-hios-yellow"
                    >
                      <span>{item.label}</span>
                      <span aria-hidden className="text-hios-blue">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <GlowButton
                as="a"
                href={HIOS_META.discordUrl}
                target="_blank"
                rel="noreferrer"
                size="md"
                variant="primary"
                className="mt-3 w-full justify-center"
              >
                <Zap className="size-4" /> JOIN DISCORD
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
