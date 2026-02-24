"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/context/i18n-context";

/* ── tiny hook: fade-in on scroll ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function Footer() {
  const { ref, visible } = useReveal();
  const { t, lang } = useI18n();

  return (
    <footer className="bg-white px-4 pb-4 pt-12 sm:px-6 lg:px-8">
      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#f7f5ff] px-8 py-12 text-gray-900 transition-all duration-1000 sm:px-12 sm:py-16 lg:px-16 lg:py-20 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Subtle background glow/texture if desired */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#8874df]/10 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#a594f0]/20 blur-[100px]" aria-hidden />

        {/* ── Top Section: Headline & CTA ── */}
        <div className="relative z-10 mb-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.25rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight text-gray-900">
              {t.footer.headline}
            </h2>
            {t.footer.subheadline && (
              <p className="mt-6 text-lg text-gray-600 sm:text-xl">
                {t.footer.subheadline}
              </p>
            )}
          </div>
          <div className="shrink-0 pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8874df] px-8 py-4 text-[16px] font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {t.footer.cta}
            </Link>
          </div>
        </div>

        {/* ── Middle Section: Logo, Nav, Socials ── */}
        <div className="relative z-10 mb-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo.png"
              alt="NobleMind"
              width={140}
              height={40}
              unoptimized
              className="h-8 w-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <Link href="#products" className="text-[15px] font-medium text-gray-600 transition-colors hover:text-[#8874df]">
              {t.nav.products}
            </Link>
            <Link href="#why-us" className="text-[15px] font-medium text-gray-600 transition-colors hover:text-[#8874df]">
              {t.nav.whyUs}
            </Link>
            <Link href="#about" className="text-[15px] font-medium text-gray-600 transition-colors hover:text-[#8874df]">
              {t.nav.about}
            </Link>
            <Link href="#contact" className="text-[15px] font-medium text-gray-600 transition-colors hover:text-[#8874df]">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Socials */}
          <div className="flex shrink-0 items-center gap-5">
            <a
              href="https://twitter.com/NobleMindCo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#8874df]"
              aria-label="Twitter"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/company/NobleMindsa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-[#8874df]"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="relative z-10 mb-8 h-px w-full bg-gray-200" />

        {/* ── Bottom Section: Copyright & Built-in badge ── */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-[13px] text-gray-500 sm:flex-row">
          <p>{t.footer.copyright}</p>

          {/* Built in Saudi Arabia badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#8874df]/15 bg-white/70 px-4 py-2 shadow-[0_2px_12px_rgba(124,92,191,0.08)] backdrop-blur-sm">
            <span className="text-base leading-none" role="img" aria-label="Saudi Arabia flag">🇸🇦</span>
            <span className="text-[12.5px] font-medium text-gray-600">
              {lang === "AR" ? "صُنع في المملكة العربية السعودية" : "Built in Saudi Arabia"}
            </span>
            <span className="h-3.5 w-px bg-gray-300" />
            <span className="text-[12px] font-semibold text-[#8874df]">Noble Mind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
