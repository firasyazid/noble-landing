"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/context/i18n-context";

/*  Nav-link icon set  */
const navIcons = [
  <svg key="products" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><path d="M17.5 14v7M14 17.5h7" />
  </svg>,
  <svg key="why" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>,
  <svg key="about" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
  </svg>,
  <svg key="contact" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />
  </svg>,
];

/*  Main component  */
export function Navbar() {
  const { lang, setLang, t, isRTL } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const navLinks = [
    { label: t.nav.products, href: "#products" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* Scroll listener + progress */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Animated pill indicator */
  const movePill = (href: string | null) => {
    const pill = pillRef.current;
    const container = navContainerRef.current;
    if (!pill || !container) return;
    if (!href || !linkRefs.current[href]) {
      pill.style.opacity = "0";
      return;
    }
    const el = linkRefs.current[href]!;
    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    pill.style.opacity = "1";
    pill.style.width = `${elRect.width}px`;
    pill.style.height = `${elRect.height}px`;
    pill.style.transform = `translateX(${elRect.left - containerRect.left}px)`;
  };

  useEffect(() => { movePill(activeLink); }, [activeLink]); // eslint-disable-line

  return (
    <>
      {/* ============================================================ */}
      {/*  Header                                                       */}
      {/* ============================================================ */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 pointer-events-none ${scrolled ? "pt-4 px-4 sm:px-6" : "pt-0 px-0"
          }`}
      >
        {/* ── Scroll progress bar ───────────────────────────────── */}
        <div className={`absolute inset-x-0 top-0 h-[2px] overflow-hidden opacity-90 transition-opacity duration-300 pointer-events-none ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div
            className="h-full bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] transition-[width] duration-100 ease-linear"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div
          className={`pointer-events-auto relative mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
            ? "h-16 lg:h-[68px] max-w-5xl rounded-full bg-white/45 border border-white/60 shadow-[0_12px_40px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(255,255,255,0.3)] backdrop-blur-[60px] backdrop-saturate-[2.5] px-4 sm:px-6"
            : "h-18 lg:h-[72px] max-w-[1400px] bg-transparent px-5 sm:px-8 lg:px-12 border-transparent shadow-none"
            }`}
        >
          {/* macOS Noise Overlay for authentic glass effect */}
          {scrolled && (
            <div
              className="absolute inset-0 rounded-full pointer-events-none opacity-[0.035] mix-blend-overlay"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'
              }}
            />
          )}

          {/* ── Logo ─────────────────────────────── */}
          <div className="flex items-center relative z-60 shrink-0">

            <Link href="/" className="relative flex items-center z-10 transition-transform duration-300 hover:scale-105">
              <Image
                src="/logo.png"
                alt="NobleMind"
                width={100}
                height={34}
                unoptimized
                className="h-7 w-auto lg:h-8 drop-shadow-sm"
                priority
              />
            </Link>
          </div>

          {/* ── Center: Desktop nav ──────────────────────────────── */}
          <nav
            ref={navContainerRef}
            className={`relative hidden items-center rounded-full px-1.5 py-1 lg:flex transition-all duration-500 ${scrolled ? "bg-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_0_12px_rgba(0,0,0,0.02)] border border-white/40 backdrop-blur-md" : ""
              }`}
            onMouseLeave={() => setActiveLink(null)}
            style={scrolled ? {} : {
              background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(136,116,223,0.25), rgba(165,148,240,0.12), rgba(198,184,238,0.20)) border-box",
              border: "1px solid transparent",
              boxShadow: "0 2px 24px rgba(136,116,223,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            {/* Mac OS Window Controls inside Navbar */}
            <div className={`flex items-center gap-1.5 transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${scrolled ? 'opacity-100 px-3 pl-2.5 mr-1 border-r border-[#8874df]/15 w-[70px] scale-100' : 'opacity-0 w-0 px-0 mr-0 border-r-0 scale-95 overflow-hidden pointer-events-none'
              }`}>
              <div className="w-3 h-3 shrink-0 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-[inset_0_1px_4px_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.1)] group relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                <svg className="opacity-0 group-hover:opacity-100 w-2 h-2 text-black/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </div>
              <div className="w-3 h-3 shrink-0 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-[inset_0_1px_4px_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.1)] group relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                <svg className="opacity-0 group-hover:opacity-100 w-2 h-2 text-black/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </div>
              <div className="w-3 h-3 shrink-0 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-[inset_0_1px_4px_rgba(255,255,255,0.5),0_1px_2px_rgba(0,0,0,0.1)] group relative flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
                <svg className="opacity-0 group-hover:opacity-100 w-2 h-2 text-black/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
            </div>

            {/* Animated hover pill */}
            <div
              ref={pillRef}
              className="pointer-events-none absolute left-0 top-1 rounded-full opacity-0 transition-all duration-250 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 10px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.5)",
              }}
            />

            {navLinks.map((link, i) => (
              <span key={link.href} className="contents">
                {i > 0 && (
                  <span
                    aria-hidden
                  className="select-none text-[11px] text-gray-400/50 font-light"
                    style={{ letterSpacing: 0 }}
                  >
                    |
                  </span>
                )}
                <a
                  href={link.href}
                  ref={(el) => { linkRefs.current[link.href] = el; }}
                  onMouseEnter={() => setActiveLink(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative z-10 rounded-full px-5 py-2 text-[13.5px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer ${activeLink === link.href ? "text-[#8874df]" : "text-gray-500 hover:text-gray-700"
                    }`}
                >
                  {link.label}
                </a>
              </span>
            ))}
          </nav>

          {/* ── Right: Desktop actions ───────────────────────────── */}
          <div className="hidden items-center gap-2.5 lg:flex">

            {/* Language toggle */}
            <div
              className="relative flex items-center rounded-full p-0.75"
              dir="ltr"
              style={scrolled ? {} : {
                background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgba(136,116,223,0.2), rgba(165,148,240,0.1)) border-box",
                border: "1px solid transparent",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className={`absolute top-0.75 h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-full bg-linear-to-r from-[#8874df] to-[#a594f0] shadow-[0_2px_10px_rgba(136,116,223,0.30)] transition-all duration-300 ease-out ${lang === "EN" ? "left-0.75" : "left-[calc(50%+1.5px)]"
                  }`}
              />
              <button
                onClick={() => setLang("EN")}
                className={`relative z-10 rounded-full px-3.5 py-1.5 text-[12px] font-bold tracking-wider transition-colors duration-300 ${lang === "EN" ? "text-white" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("AR")}
                className={`relative z-10 rounded-full px-3.5 py-1.5 text-[12px] font-bold tracking-wider transition-colors duration-300 ${lang === "AR" ? "text-white" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                AR
              </button>
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-200/70" />

            {/* CTA */}
            <Link
              href="#contact"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-[#8874df] to-[#a594f0] py-2.5 pl-5 pr-3.5 text-[13.5px] font-semibold text-white shadow-[0_4px_20px_rgba(136,116,223,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(136,116,223,0.45),inset_0_1px_0_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-full" />
              <span className="relative z-10">{t.nav.getInTouch}</span>
              {/* Arrow circle */}
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/30 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" strokeWidth="1.5">
                  <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          {/* ── Mobile hamburger ─────────────────────────────────── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-60 flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-1.25">
              <span className={`block h-0.5 w-5 rounded-full origin-center bg-gray-800 transition-all duration-300 ${mobileOpen ? "translate-y-1.75 rotate-45" : ""}`} />
              <span className={`block h-0.5 rounded-full bg-gray-800 transition-all duration-300 ${mobileOpen ? "w-5 opacity-0" : "w-3.5"}`} />
              <span className={`block h-0.5 w-5 rounded-full origin-center bg-gray-800 transition-all duration-300 ${mobileOpen ? "-translate-y-1.75 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </header>

      {/*  Mobile Sidebar – dark glass panel                           */}

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[55] transition-all duration-400 lg:hidden ${mobileOpen
          ? "bg-black/40 opacity-100 backdrop-blur-sm"
          : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 z-[58] flex h-full w-[82%] max-w-80 flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${isRTL ? "right-0" : "left-0"
          } ${mobileOpen
            ? "translate-x-0"
            : isRTL ? "translate-x-full" : "-translate-x-full"
          }`}
        style={{
          background: "linear-gradient(170deg, #f7f5ff 0%, #ede9ff 50%, #f0ecff 100%)",
          backdropFilter: "blur(60px) saturate(1.8)",
          WebkitBackdropFilter: "blur(60px) saturate(1.8)",
          boxShadow: "4px 0 60px rgba(136,116,223,0.10), inset -1px 0 0 rgba(136,116,223,0.08)",
        }}
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {/* Glow orbs */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#8874df]/10 blur-[100px]" />
          <div className="absolute bottom-20 -right-16 h-48 w-48 rounded-full bg-[#a594f0]/8 blur-[80px]" />
          {/* Dot pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sidebar-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#8874df" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sidebar-dots)" />
          </svg>
          {/* Inner border highlight */}
          <div className={`absolute inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-px bg-linear-to-b from-[#8874df]/15 via-[#8874df]/6 to-transparent`} />
          {/* Top shimmer line */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#8874df]/30 to-transparent" />
        </div>

        {/* Logo area */}
        <div className="relative flex items-center px-6 pt-6 pb-1">
          <Image
            src="/logo.png"
            alt="NobleMind"
            width={48}
            height={26}
            unoptimized
            className="h-6 w-auto"
          />
        </div>

        {/* Separator */}
        <div className="mx-6 my-5 h-px bg-linear-to-r from-[#8874df]/20 via-[#8874df]/10 to-transparent" />

        {/* Navigation */}
        <nav className="relative flex-1 space-y-0.5 overflow-y-auto px-3">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#8874df]/40">
            Navigation
          </p>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { handleNavClick(e, link.href); setMobileOpen(false); }}
              className="group flex items-center gap-3.5 rounded-xl px-3 py-3.5 transition-all duration-300 hover:bg-white/60 hover:shadow-[0_2px_12px_rgba(136,116,223,0.08)] cursor-pointer"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/50 text-[#8874df]/50 ring-1 ring-[#8874df]/10 transition-all duration-300 group-hover:bg-[#8874df]/10 group-hover:text-[#8874df] group-hover:ring-[#8874df]/20 group-hover:shadow-[0_0_16px_rgba(136,116,223,0.12)]">
                {navIcons[i]}
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#8874df]">
                  {link.label}
                </p>
              </div>
              {/* Arrow on hover */}
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`ml-auto text-[#8874df]/0 transition-all duration-300 group-hover:text-[#8874df]/40 ${isRTL ? 'rotate-180' : ''}`}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="relative shrink-0 px-4 pb-7">
          <div className="mb-4 h-px bg-linear-to-r from-transparent via-[#8874df]/15 to-transparent" />

          {/* Language toggle */}
          <div className="mb-4 flex justify-center">
            <div className="relative flex items-center rounded-full border border-[#8874df]/15 bg-white/60 p-0.75 shadow-[0_1px_8px_rgba(136,116,223,0.06)]" dir="ltr">
              <div
                className={`absolute top-0.75 h-[calc(100%-6px)] w-[calc(50%-3px)] rounded-full bg-linear-to-r from-[#8874df] to-[#a594f0] shadow-[0_2px_12px_rgba(136,116,223,0.35)] transition-all duration-300 ease-out ${lang === "EN" ? "left-0.75" : "left-[calc(50%+1.5px)]"
                  }`}
              />
              <button
                onClick={() => setLang("EN")}
                className={`relative z-10 rounded-full px-5 py-2 text-[12px] font-bold tracking-wider transition-colors duration-300 ${lang === "EN" ? "text-white" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("AR")}
                className={`relative z-10 rounded-full px-5 py-2 text-[12px] font-bold tracking-wider transition-colors duration-300 ${lang === "AR" ? "text-white" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                AR
              </button>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-[#8874df] to-[#a594f0] py-3.5 text-[13.5px] font-semibold text-white shadow-[0_4px_20px_rgba(136,116,223,0.28)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(136,116,223,0.42)]"
          >
            <span className="relative z-10">{t.nav.getInTouch}</span>
            <span className="relative z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/15 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>

          <p className="mt-5 text-center text-[10px] tracking-wide text-gray-400/60">
            © 2026 Noble Mind. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
