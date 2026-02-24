"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useI18n } from "@/context/i18n-context";
import { FadeUp } from "@/hooks/use-fade-up";
import Image from "next/image";

const productIcons = [
  /* Novera.MD — stethoscope / clinical */
  <svg key="novera-md" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8874df" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>,
  /* ARWA — agent/robot */
  <svg key="arwa" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8874df" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="12" rx="2" />
    <path d="M12 2v6" />
    <circle cx="12" cy="2" r="1" />
    <path d="M7 13h.01M17 13h.01M7 17h10" />
  </svg>,
  /* Novera Workspace — shield/lock */
  <svg key="workspace" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8874df" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l8 3v7c0 5-4 8.5-8 10C8 20.5 4 17 4 12V5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  /* Noble Retrieval — document search */
  <svg key="retrieval" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8874df" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <circle cx="11" cy="15" r="2" />
    <path d="M13 17l2 2" />
  </svg>,
];

type Product = {
  name: string;
  tagline: string;
  para1: string;
  para2: string;
  cta: string;
  ctaHref: string;
};

export function OurSolution() {
  const { t, lang } = useI18n();
  const s = t.ourSolution;
  const isRTL = lang === "AR";

  const [activeIdx, setActiveIdx] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const products = s.products as unknown as Product[];

  /*  move the active pill indicator to exact button position ---- */
  const moveIndicator = useCallback(() => {
    const btn = tabRefs.current[activeIdx];
    const rail = indicatorRef.current;
    const nav = navRef.current;
    if (!btn || !rail || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    rail.style.transform = `translateY(${btnRect.top - navRect.top}px)`;
    rail.style.height = `${btnRect.height}px`;
    rail.style.width = `${btnRect.width}px`;
  }, [activeIdx]);

  useEffect(() => {
    moveIndicator();
    // small delay to account for layout shifts
    const raf = requestAnimationFrame(moveIndicator);
    window.addEventListener("resize", moveIndicator);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", moveIndicator);
    };
  }, [moveIndicator]);

  const switchTab = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
    setFadeKey((k) => k + 1);
  };

  return (
    <section
      id="products"
      className="relative overflow-hidden py-28 lg:py-36"
      style={{
        background: "linear-gradient(180deg, #f8f6ff 0%, #f0ecff 30%, #ede9ff 55%, #f0ecff 80%, #f8f6ff 100%)",
      }}
    >
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Subtle dot grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sol-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="#8874df" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sol-dots)" />
        </svg>
      </div>
      {/* Color orbs — positioned behind the window card only, strong enough to show through glass */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute right-[5%] top-[20%] h-[480px] w-[480px] rounded-full bg-[rgba(124,92,191,0.38)] blur-[80px]" />
        <div className="absolute bottom-[10%] left-[5%] h-[360px] w-[360px] rounded-full bg-[rgba(167,110,230,0.32)] blur-[70px]" />
        <div className="absolute left-[38%] top-[35%] h-[280px] w-[280px] rounded-full bg-[rgba(196,160,255,0.25)] blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Badge */}
        <FadeUp>
          <div className="mb-5 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/30 px-5 py-2 shadow-[0_8px_32px_rgba(136,116,223,0.15),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-[2]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df] shadow-[0_0_8px_rgba(136,116,223,0.8)]" />
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-wide text-[#8874df]">
                {s.badge}
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={80}>
          <h2 className="mx-auto max-w-3xl text-center text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight text-gray-900">
            {s.title}{" "}
            <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
              {s.titleHighlight}
            </span>
          </h2>
        </FadeUp>

        {/* Subtitles */}
        <FadeUp delay={130}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-[#8874df]/20 bg-[#8874df]/8 px-4 py-1.5 text-[13px] font-semibold text-[#8874df]">
              {s.subtitle1}
            </span>
            <span className="rounded-full border border-[#a594f0]/20 bg-[#a594f0]/8 px-4 py-1.5 text-[13px] font-semibold text-[#7a63d1]">
              {s.subtitle2}
            </span>
          </div>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[17px] leading-relaxed text-gray-500">
            {s.description}
          </p>
        </FadeUp>

        {/* tabbed showcase */}
        <FadeUp delay={220}>
           <div
            className="relative mt-16 overflow-hidden"
            style={{
              background: "rgba(245, 240, 255, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.80)",
              borderRadius: "20px",
              boxShadow:
                "0 32px 80px rgba(100, 60, 180, 0.20)," +
                "0 8px 32px rgba(124, 92, 191, 0.12)," +
                "inset 0 1px 0 rgba(255,255,255,0.95)," +
                "inset 0 -1px 0 rgba(124,92,191,0.06)",
            }}
          >
            {/* Specular top-edge highlight — the "glass rim" */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 30%, white 50%, rgba(255,255,255,0.9) 70%, transparent 100%)" }}
            />

            {/* ── macOS title bar ── */}
            <div
              className="relative z-20 flex items-center px-5 py-3.5"
              style={{
                background: "rgba(255, 255, 255, 0.55)",
                backdropFilter: "blur(24px) saturate(220%)",
                WebkitBackdropFilter: "blur(24px) saturate(220%)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.65)",
              }}
            >
              {/* Traffic lights group */}
              <div className="flex items-center gap-[6px]">
                <span className="relative h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.18),0_0_0_0.5px_rgba(220,60,50,0.25)]" />
                <span className="relative h-3 w-3 rounded-full bg-[#fdbc40] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.18),0_0_0_0.5px_rgba(200,150,0,0.25)]" />
                <span className="relative h-3 w-3 rounded-full bg-[#28c840] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.18),0_0_0_0.5px_rgba(0,160,40,0.25)]" />
              </div>

              {/* Centered window title */}
              <span
                className="absolute left-1/2 -translate-x-1/2 text-[12px] font-medium tracking-wide select-none"
                style={{ color: "rgba(100, 95, 120, 0.65)" }}
              >
                Products — Noble Mind
              </span>
            </div>

            {/* ── window body ── */}
            <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">

              {/* ── LEFT: frosted sidebar ── */}
              <nav
                ref={navRef}
                className="relative flex flex-row gap-1 p-2 lg:flex-col lg:gap-0 lg:px-3 lg:py-5"
                style={{
                  background: "rgba(236, 228, 255, 0.40)",
                  backdropFilter: "blur(20px) saturate(200%)",
                  WebkitBackdropFilter: "blur(20px) saturate(200%)",
                  borderRight: "1px solid rgba(255, 255, 255, 0.55)",
                }}
              >
                {/* "PRODUCTS" section label */}
                <span
                  className="mb-2 hidden px-3.5 text-[9.5px] font-bold uppercase lg:block"
                  style={{ color: "rgba(124, 92, 191, 0.55)", letterSpacing: "0.15em" }}
                >
                  {s.badge}
                </span>

                {/* Sliding active-item glass card */}
                <div
                  ref={indicatorRef}
                  className="pointer-events-none absolute left-0 top-0 hidden transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)] lg:block"
                  style={{
                    height: 0,
                    marginLeft: "10px",
                    background: "rgba(255, 255, 255, 0.70)",
                    border: "1px solid rgba(255, 255, 255, 0.90)",
                    borderRadius: "14px",
                    boxShadow:
                      "0 4px 20px rgba(124, 92, 191, 0.10)," +
                      "inset 0 1px 0 rgba(255,255,255,1)",
                    backdropFilter: "blur(12px)",
                  }}
                />

                {products.map((product, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={i}
                      ref={(el) => { tabRefs.current[i] = el; }}
                      onClick={() => switchTab(i)}
                      className={`group relative z-10 flex flex-1 items-center gap-3 rounded-[12px] px-3 py-4 text-left transition-all duration-200 ease-out lg:flex-auto lg:py-4 ${isActive
                          ? ""
                          : "opacity-55 hover:opacity-90 hover:bg-[rgba(255,255,255,0.40)]"
                        }`}
                    >
                      {/* Icon box */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] transition-all duration-300 ${isActive
                            ? "text-white shadow-[0_4px_14px_rgba(124,92,191,0.35)]"
                            : "text-[#8874df]"
                          }`}
                        style={
                          isActive
                            ? { background: "linear-gradient(135deg, #7c5cbf, #a78de0)" }
                            : { background: "rgba(255,255,255,0.45)", backdropFilter: "blur(8px)" }
                        }
                      >
                        {productIcons[i]}
                      </span>

                      {/* Label + tagline */}
                      <div className="hidden min-w-0 lg:block">
                        <p className={`text-[13px] font-semibold leading-snug transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-600"}`}>
                          {product.name}
                        </p>
                        <p className={`text-[11px] leading-relaxed transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)] ${isActive ? "mt-1 max-h-16 opacity-100 text-gray-500" : "mt-0 max-h-0 overflow-hidden opacity-0"}`}>
                          {product.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </nav>

              {/* ── RIGHT: content panel ── */}
              <div
                className="relative flex min-h-[380px] flex-col p-6 lg:min-h-[500px] lg:p-10"
                style={{
                  background: "rgba(250, 247, 255, 0.30)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                }}
              >
                {/* Top highlight seam */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                {/* Ambient purple glow */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 65% 35%, rgba(136,116,223,0.07) 0%, transparent 65%)" }}
                />

                {/* Animated content */}
                <div key={fadeKey} className="relative z-10 flex h-full flex-col animate-[fadeUp_0.45s_ease-out_both]">
                  <div className="mb-6">
                    <h3 className="text-[22px] font-bold tracking-tight text-[#1a1a2e]">
                      {products[activeIdx].name}
                    </h3>
                  </div>

                  <div className={`grid flex-1 grid-cols-1 gap-8 ${activeIdx === 0 || activeIdx === 1 || activeIdx === 2 || activeIdx === 3 ? "lg:grid-cols-[1.8fr_1fr]" : "lg:grid-cols-[1fr_280px]"}`}>
                    {/* Demo UI / Image placeholder */}
                    {activeIdx === 0 ? (
                      <div
                        className="group relative flex min-h-[360px] w-full flex-col overflow-hidden transition-all duration-300"
                        style={{
                          background: "#ffffff",
                          border: "1px solid rgba(124, 92, 191, 0.20)",
                          borderRadius: "16px",
                          boxShadow: "0 8px 32px rgba(124,92,191,0.08)",
                        }}
                      >
                        {/* Top bar inside the demo */}
                        <div className="relative z-10 flex w-full items-center justify-between border-b border-gray-100 bg-gray-50/80 px-4 py-3 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#8874df]/15 text-[#8874df]">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" /><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" /><circle cx="20" cy="10" r="2" />
                              </svg>
                            </div>
                            <span className="text-[13px] font-bold text-gray-800">Novera.MD</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            <span className="text-[12px] font-medium text-gray-700">Ahmad Al-Rashidi · 45M</span>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6" /></svg>
                          </div>

                          <div className="flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-purple-700 border border-purple-100/50">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                            </span>
                            <span className="text-[11px] font-semibold animate-pulse">AI Analyzing...</span>
                          </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="relative flex flex-1 flex-col overflow-hidden bg-[#faf9ff] p-3 text-left">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-300/10 rounded-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none"></div>

                          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-3 h-full">
                            {/* Left Column: Vitals & History */}
                            <div className="flex flex-col gap-2">
                              <div className="rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm">
                                <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Vitals</h4>
                                <div className="space-y-2">
                                  <div className="flex justify-between items-end border-b border-gray-50 pb-1.5">
                                    <span className="text-[11px] font-medium text-gray-500">Heart Rate</span>
                                    <span className="text-[12px] font-bold text-gray-900">82 <span className="text-[9px] text-gray-400 font-medium tracking-normal">bpm</span></span>
                                  </div>
                                  <div className="flex justify-between items-end border-b border-gray-50 pb-1.5">
                                    <span className="text-[11px] font-medium text-gray-500">Blood Pressure</span>
                                    <span className="text-[12px] font-bold text-gray-900">120/80</span>
                                  </div>
                                  <div className="flex justify-between items-end">
                                    <span className="text-[11px] font-medium text-gray-500">Temperature</span>
                                    <span className="text-[12px] font-bold text-gray-900">37.2 <span className="text-[9px] text-gray-400 font-medium tracking-normal">°C</span></span>
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm flex-1">
                                <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">History</h4>
                                <ul className="text-[11px] font-medium text-gray-700 space-y-1.5">
                                  <li className="flex items-start gap-1.5">
                                    <svg width="12" height="12" className="mt-0.5 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    Type 2 Diabetes (2018)
                                  </li>
                                  <li className="flex items-start gap-1.5">
                                    <svg width="12" height="12" className="mt-0.5 shrink-0 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    Hypertension (2020)
                                  </li>
                                </ul>
                              </div>
                            </div>

                            {/* Right Column: AI Summary & Actions */}
                            <div className="flex flex-col gap-2">
                              <div className="relative overflow-hidden rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50 to-[#f5f3ff] p-3 shadow-sm">
                                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-purple-200/50 blur-2xl"></div>
                                <div className="absolute right-10 bottom-0 h-16 w-16 rounded-full bg-[#a594f0]/20 blur-xl"></div>

                                <h4 className="relative z-10 mb-1.5 flex items-center gap-1.5 text-[11px] font-bold text-purple-900">
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path d="M7 4v16" /></svg>
                                  AI Clinical Summary
                                </h4>
                                <p className="relative z-10 text-[11.5px] leading-[1.5] text-purple-900/80">
                                  Patient presents with mild fatigue and increased thirst over the past 2 weeks. Recent lab results indicate elevated HbA1c (7.2%). Blood pressure remains stable on current medication. No acute distress observed.
                                </p>
                              </div>

                              <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm flex-1">
                                <h4 className="mb-2 flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
                                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                  Recommended Actions
                                </h4>
                                <div className="space-y-2">
                                  <div className="group flex items-start gap-2.5 rounded-lg border border-transparent bg-gray-50 p-2 transition-colors hover:border-purple-100 hover:bg-purple-50/50">
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-blue-100 text-blue-600">
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m10 17 4-4-4-4" /></svg>
                                    </div>
                                    <div>
                                      <h5 className="text-[11.5px] font-semibold text-gray-900">Adjust Metformin Dosage</h5>
                                      <p className="mt-0.5 text-[10.5px] leading-relaxed text-gray-500">Consider increasing to 1000mg BID based on recent HbA1c trend.</p>
                                    </div>
                                  </div>
                                  <div className="group flex items-start gap-2.5 rounded-lg border border-transparent bg-gray-50 p-2 transition-colors hover:border-purple-100 hover:bg-purple-50/50">
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-orange-100 text-orange-600">
                                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                    </div>
                                    <div>
                                      <h5 className="text-[11.5px] font-semibold text-gray-900">Schedule Follow-up Lab</h5>
                                      <p className="mt-0.5 text-[10.5px] leading-relaxed text-gray-500">Order BMP and lipid panel in 3 months.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeIdx === 1 ? (
                      <div
                        className="group relative flex min-h-[360px] w-full flex-col overflow-hidden transition-all duration-300"
                        style={{
                          background: "#ffffff",
                          border: "1px solid rgba(124, 92, 191, 0.20)",
                          borderRadius: "16px",
                          boxShadow: "0 8px 32px rgba(124,92,191,0.08)",
                        }}
                      >
                        {/* Top bar inside the demo */}
                        <div className="relative z-10 flex w-full items-center justify-between border-b border-gray-100 bg-gray-50/80 px-4 py-3 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#8874df]/15 text-[#8874df]">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="8" width="18" height="12" rx="2" />
                                <path d="M12 2v6" />
                                <circle cx="12" cy="2" r="1" />
                                <path d="M7 13h.01M17 13h.01M7 17h10" />
                              </svg>
                            </div>
                            <span className="text-[13px] font-bold text-gray-800">ARWA Agent</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                            <span className="text-[12px] font-medium text-gray-700">Active Call · +966 50 123 4567</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-blue-700 border border-blue-100/50">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                              <line x1="12" x2="12" y1="19" y2="22" />
                            </svg>
                            <span className="text-[11px] font-semibold">Listening...</span>
                          </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="relative flex flex-1 flex-col overflow-hidden bg-[#faf9ff] p-4 text-left">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none"></div>

                          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-4 h-full">
                            {/* Left Column: Caller Info & Intent */}
                            <div className="flex flex-col gap-3">
                              <div className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Caller Profile</h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between items-end border-b border-gray-50 pb-2">
                                    <span className="text-[12px] font-medium text-gray-500">Name</span>
                                    <span className="text-[13px] font-bold text-gray-900">Sarah Al-Otaibi</span>
                                  </div>
                                  <div className="flex justify-between items-end border-b border-gray-50 pb-2">
                                    <span className="text-[12px] font-medium text-gray-500">Language</span>
                                    <span className="text-[13px] font-bold text-gray-900">Arabic (Saudi)</span>
                                  </div>
                                  <div className="flex justify-between items-end">
                                    <span className="text-[12px] font-medium text-gray-500">Sentiment</span>
                                    <span className="text-[13px] font-bold text-green-600">Positive (0.85)</span>
                                  </div>
                                </div>
                              </div>
                              <div className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm flex-1">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Detected Intent</h4>
                                <div className="flex flex-col gap-2">
                                  <div className="flex items-center justify-between rounded-lg bg-blue-50 px-3 py-2 border border-blue-100">
                                    <span className="text-[12px] font-semibold text-blue-900">Appointment Booking</span>
                                    <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">98%</span>
                                  </div>
                                  <div className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 border border-gray-100">
                                    <span className="text-[12px] font-medium text-gray-600">General Inquiry</span>
                                    <span className="text-[10px] font-bold text-gray-400 bg-gray-200 px-2 py-0.5 rounded">12%</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Right Column: Live Transcript & Actions */}
                            <div className="flex flex-col gap-3">
                              <div className="relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-[#f5f9ff] p-4 shadow-sm flex-1">
                                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-200/50 blur-2xl"></div>
                                
                                <h4 className="relative z-10 mb-3 flex items-center gap-1.5 text-[12px] font-bold text-blue-900">
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                  Live Transcript
                                </h4>
                                <div className="relative z-10 space-y-3">
                                  <div className="flex gap-2">
                                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-600">S</div>
                                    <div className="rounded-2xl rounded-tl-none bg-white p-2.5 shadow-sm border border-gray-100">
                                      <p className="text-[12px] text-gray-700" dir="rtl">مرحباً، أريد حجز موعد مع دكتور الأسنان يوم الخميس.</p>
                                    </div>
                                  </div>
                                  <div className="flex gap-2 flex-row-reverse">
                                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-[9px] font-bold text-white">A</div>
                                    <div className="rounded-2xl rounded-tr-none bg-blue-500 p-2.5 shadow-sm">
                                      <p className="text-[12px] text-white" dir="rtl">أهلاً بك سارة. دكتور أحمد متاح يوم الخميس الساعة 4 مساءً أو 6 مساءً. أيهما يناسبك؟</p>
                                    </div>
                                  </div>
                                  <div className="flex gap-2">
                                    <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-gray-200 flex items-center justify-center text-[9px] font-bold text-gray-600">S</div>
                                    <div className="rounded-2xl rounded-tl-none bg-white p-2.5 shadow-sm border border-gray-100 flex items-center gap-1.5">
                                      <span className="flex gap-0.5">
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <div className="flex h-7 w-7 items-center justify-center rounded bg-green-100 text-green-600">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                    </div>
                                    <div>
                                      <h5 className="text-[12px] font-bold text-gray-900">Auto-Scheduling</h5>
                                      <p className="text-[10px] text-gray-500">Checking Dr. Ahmad&apos;s calendar...</p>
                                    </div>
                                  </div>
                                  <button className="rounded-md bg-gray-50 px-3 py-1.5 text-[11px] font-semibold text-gray-600 border border-gray-200 hover:bg-gray-100 transition-colors">
                                    Override
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeIdx === 2 ? (
                      <div
                        className="group relative flex min-h-[360px] w-full flex-col overflow-hidden transition-all duration-300"
                        style={{
                          background: "#ffffff",
                          border: "1px solid rgba(124, 92, 191, 0.20)",
                          borderRadius: "16px",
                          boxShadow: "0 8px 32px rgba(124,92,191,0.08)",
                        }}
                      >
                        {/* Top bar inside the demo */}
                        <div className="relative z-10 flex w-full items-center justify-between border-b border-gray-100 bg-gray-50/80 px-4 py-3 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#8874df]/15 text-[#8874df]">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2l8 3v7c0 5-4 8.5-8 10C8 20.5 4 17 4 12V5z" />
                                <path d="M9 12l2 2 4-4" />
                              </svg>
                            </div>
                            <span className="text-[13px] font-bold text-gray-800">Novera Workspace</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span className="text-[12px] font-medium text-gray-700">On-Premise Secure</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-gray-600 border border-gray-200">
                            <span className="text-[11px] font-semibold">Internal Network Only</span>
                          </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="relative flex flex-1 flex-col overflow-hidden bg-[#faf9ff] p-3 text-left">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none"></div>

                          <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-3 h-full">
                            {/* Left Column: Sidebar / Folders */}
                            <div className="flex flex-col gap-2">
                              <div className="rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm h-full">
                                <button className="w-full mb-3 flex items-center justify-center gap-2 rounded-lg bg-[#8874df] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm hover:bg-[#7c5cbf] transition-colors">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                  New Chat
                                </button>
                                
                                <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Recent Workspaces</h4>
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2 rounded-md bg-purple-50 px-2 py-1 text-purple-900 cursor-pointer">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" y2="3" /></svg>
                                    <span className="text-[10.5px] font-medium truncate">Q3 Financial Report</span>
                                  </div>
                                  <div className="flex items-center gap-2 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50 cursor-pointer">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                    <span className="text-[10.5px] font-medium truncate">HR Policy Draft</span>
                                  </div>
                                  <div className="flex items-center gap-2 rounded-md px-2 py-1 text-gray-600 hover:bg-gray-50 cursor-pointer">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                                    <span className="text-[10.5px] font-medium truncate">Meeting Summary</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Right Column: Chat Interface */}
                            <div className="flex flex-col gap-2">
                              <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm flex-1">
                                {/* Chat History */}
                                <div className="flex-1 overflow-y-auto p-3 space-y-3">
                                  <div className="flex gap-2.5">
                                    <div className="mt-0.5 h-5 w-5 shrink-0 rounded bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-600">You</div>
                                    <div>
                                      <p className="text-[11.5px] text-gray-800 font-medium">Summarize the key findings from the uploaded Q3 Financial Report and draft an email to the board.</p>
                                      <div className="mt-1.5 flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-1 w-fit">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15v-4" /><path d="M12 15v-3" /><path d="M15 15v-2" /></svg>
                                        <span className="text-[10px] font-medium text-gray-600">Q3_Financials_Internal.pdf</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="flex gap-2.5">
                                    <div className="mt-0.5 h-5 w-5 shrink-0 rounded bg-[#8874df] flex items-center justify-center text-white">
                                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v7c0 5-4 8.5-8 10C8 20.5 4 17 4 12V5z" /></svg>
                                    </div>
                                    <div className="flex-1">
                                      <div className="rounded-lg bg-purple-50/50 border border-purple-100/50 p-2.5">
                                        <p className="text-[11.5px] text-gray-800 leading-relaxed mb-2">
                                          Based on the internal document, here are the key findings:
                                          <br/>• Revenue increased by 14% YoY.
                                          <br/>• Operating costs were reduced by 5% due to new AI automation initiatives.
                                          <br/>• Net profit margin stands at 22%.
                                        </p>
                                        <div className="rounded border border-gray-200 bg-white p-1.5">
                                          <p className="text-[9.5px] text-gray-600 font-mono leading-relaxed">
                                            Subject: Q3 Financial Results - Strong Growth & Efficiency<br/><br/>
                                            Dear Board Members,<br/><br/>
                                            I am pleased to share our Q3 results. We saw a 14% YoY revenue increase while reducing operating costs by 5%...
                                          </p>
                                        </div>
                                      </div>
                                      <div className="mt-1.5 flex items-center gap-2">
                                        <span className="flex items-center gap-1 text-[9px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">
                                          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                          Data kept on-premise
                                        </span>
                                        <div className="flex gap-1">
                                          <button className="text-gray-400 hover:text-gray-600"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Input Area */}
                                <div className="border-t border-gray-100 p-2 bg-gray-50/50">
                                  <div className="relative flex items-center rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 shadow-sm focus-within:border-[#8874df] focus-within:ring-1 focus-within:ring-[#8874df]">
                                    <button className="text-gray-400 hover:text-[#8874df] mr-1.5">
                                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                                    </button>
                                    <input type="text" placeholder="Ask anything about your internal data..." className="flex-1 bg-transparent text-[11.5px] outline-none placeholder:text-gray-400" />
                                    <button className="ml-1.5 rounded bg-[#8874df] p-1 text-white hover:bg-[#7c5cbf]">
                                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : activeIdx === 3 ? (
                      <div
                        className="group relative flex min-h-[360px] w-full flex-col overflow-hidden transition-all duration-300"
                        style={{
                          background: "#ffffff",
                          border: "1px solid rgba(124, 92, 191, 0.20)",
                          borderRadius: "16px",
                          boxShadow: "0 8px 32px rgba(124,92,191,0.08)",
                        }}
                      >
                        {/* Top bar inside the demo */}
                        <div className="relative z-10 flex w-full items-center justify-between border-b border-gray-100 bg-gray-50/80 px-4 py-3 backdrop-blur-md">
                          <div className="flex items-center gap-2">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-teal-500/15 text-teal-600">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" />
                              </svg>
                            </div>
                            <span className="text-[13px] font-bold text-gray-800">Noble Retrieval</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" y2="15" /></svg>
                            <span className="text-[12px] font-medium text-gray-700">Upload Document</span>
                          </div>

                          <div className="flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-teal-700 border border-teal-100/50">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                            </span>
                            <span className="text-[11px] font-semibold animate-pulse">Processing...</span>
                          </div>
                        </div>

                        {/* Dashboard Body */}
                        <div className="relative flex flex-1 flex-col overflow-hidden bg-[#faf9ff] p-3 text-left">
                          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-300/10 rounded-full blur-3xl -translate-y-20 translate-x-20 pointer-events-none"></div>

                          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-3 h-full">
                            {/* Left Column: Document Preview */}
                            <div className="flex flex-col gap-2">
                              <div className="rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm h-full flex flex-col">
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Source Document</h4>
                                  <span className="text-[9px] font-medium text-gray-400">Page 1 of 12</span>
                                </div>
                                
                                <div className="flex-1 rounded border border-gray-100 bg-gray-50 p-3 overflow-hidden relative">
                                  {/* Fake Document Content */}
                                  <div className="space-y-3 opacity-60">
                                    <div className="h-3 w-3/4 bg-gray-300 rounded"></div>
                                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                                    <div className="h-2 w-5/6 bg-gray-200 rounded"></div>
                                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                                    
                                    {/* Highlighted Table Area */}
                                    <div className="mt-4 border-2 border-teal-400/50 bg-teal-50/30 rounded p-2 relative">
                                      <div className="absolute -top-2 -right-2 bg-teal-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">Table Extracted</div>
                                      <div className="grid grid-cols-3 gap-2 mb-2 border-b border-gray-300 pb-1">
                                        <div className="h-1.5 bg-gray-400 rounded"></div>
                                        <div className="h-1.5 bg-gray-400 rounded"></div>
                                        <div className="h-1.5 bg-gray-400 rounded"></div>
                                      </div>
                                      <div className="grid grid-cols-3 gap-2 mb-1">
                                        <div className="h-1.5 bg-gray-300 rounded"></div>
                                        <div className="h-1.5 bg-gray-300 rounded"></div>
                                        <div className="h-1.5 bg-gray-300 rounded"></div>
                                      </div>
                                      <div className="grid grid-cols-3 gap-2">
                                        <div className="h-1.5 bg-gray-300 rounded"></div>
                                        <div className="h-1.5 bg-gray-300 rounded"></div>
                                        <div className="h-1.5 bg-gray-300 rounded"></div>
                                      </div>
                                    </div>

                                    <div className="h-2 w-4/5 bg-gray-200 rounded mt-4"></div>
                                    <div className="h-2 w-full bg-gray-200 rounded"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Right Column: Extracted Data & Analysis */}
                            <div className="flex flex-col gap-2">
                              <div className="relative flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm flex-1 p-3">
                                <h4 className="mb-3 flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                  Structured Output
                                </h4>
                                
                                <div className="space-y-3 flex-1 overflow-y-auto">
                                  {/* Extracted Text Block */}
                                  <div className="rounded-lg border border-gray-100 bg-gray-50 p-2.5">
                                    <div className="flex items-center justify-between mb-1.5">
                                      <span className="text-[9px] font-bold text-gray-500 uppercase">Key Entities</span>
                                      <span className="text-[9px] font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">98% Confidence</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                      <span className="text-[10px] font-medium bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Patient: John Doe</span>
                                      <span className="text-[10px] font-medium bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">DOB: 1980-05-14</span>
                                      <span className="text-[10px] font-medium bg-white border border-gray-200 px-2 py-0.5 rounded text-gray-700">Diagnosis: Hypertension</span>
                                    </div>
                                  </div>

                                  {/* Extracted Table Block */}
                                  <div className="rounded-lg border border-teal-100 bg-teal-50/30 p-2.5">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-[9px] font-bold text-teal-700 uppercase flex items-center gap-1">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="3" x2="21" y1="15" y2="15" /><line x1="9" x2="9" y1="9" y2="21" /><line x1="15" x2="15" y1="9" y2="21" /></svg>
                                        Extracted Lab Results
                                      </span>
                                      <button className="text-[9px] font-medium text-teal-600 hover:text-teal-800 flex items-center gap-0.5">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" y2="3" /></svg>
                                        Export CSV
                                      </button>
                                    </div>
                                    <table className="w-full text-left text-[10px]">
                                      <thead>
                                        <tr className="border-b border-teal-200 text-teal-800">
                                          <th className="pb-1 font-semibold">Test</th>
                                          <th className="pb-1 font-semibold">Result</th>
                                          <th className="pb-1 font-semibold">Reference</th>
                                        </tr>
                                      </thead>
                                      <tbody className="text-gray-700">
                                        <tr className="border-b border-teal-100/50">
                                          <td className="py-1.5">Cholesterol</td>
                                          <td className="py-1.5 font-medium text-red-600">240 mg/dL</td>
                                          <td className="py-1.5 text-gray-500">&lt; 200 mg/dL</td>
                                        </tr>
                                        <tr>
                                          <td className="py-1.5">Glucose</td>
                                          <td className="py-1.5 font-medium">95 mg/dL</td>
                                          <td className="py-1.5 text-gray-500">70-99 mg/dL</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="group relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden transition-all duration-300"
                        style={{
                          background: "rgba(255, 255, 255, 0.50)",
                          border: "1.5px dashed rgba(124, 92, 191, 0.20)",
                          borderRadius: "16px",
                          backdropFilter: "blur(8px)",
                          WebkitBackdropFilter: "blur(8px)",
                        }}
                      >
                        <div
                          className="mb-3 flex h-14 w-14 items-center justify-center rounded-full text-[#8874df] transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: "rgba(255,255,255,0.65)",
                            boxShadow: "0 4px 16px rgba(124,92,191,0.10), inset 0 1px 0 rgba(255,255,255,0.9)",
                          }}
                        >
                          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                        <p className="text-[13px] font-medium text-gray-500">Product Image</p>
                        <p className="mt-0.5 text-[11px] text-gray-400">Replace with actual screenshot</p>
                      </div>
                    )}

                    {/* Description + CTA */}
                    <div className="flex flex-col justify-center gap-5">
                      {activeIdx === 0 ? (
                        <div className="space-y-5">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#8874df] shadow-[0_4px_12px_rgba(136,116,223,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "ذكاء سريري متقدم" : "Advanced Clinical Intelligence"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para1}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-[#8874df] shadow-[0_4px_12px_rgba(136,116,223,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "دعم موثوق لرحلة الرعاية" : "Reliable Care Journey Support"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para2}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : activeIdx === 1 ? (
                        <div className="space-y-5">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-blue-500 shadow-[0_4px_12px_rgba(59,130,246,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "تفاعل صوتي طبيعي" : "Natural Voice Interaction"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para1}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-blue-500 shadow-[0_4px_12px_rgba(59,130,246,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "أتمتة المهام الذكية" : "Intelligent Task Automation"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para2}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : activeIdx === 2 ? (
                        <div className="space-y-5">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-indigo-500 shadow-[0_4px_12px_rgba(99,102,241,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 3v7c0 5-4 8.5-8 10C8 20.5 4 17 4 12V5z" /><path d="M9 12l2 2 4-4" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "بيئة عمل آمنة" : "Secure Workspace"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para1}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-indigo-500 shadow-[0_4px_12px_rgba(99,102,241,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "سيادة البيانات" : "Data Sovereignty"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para2}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : activeIdx === 3 ? (
                        <div className="space-y-5">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-teal-500 shadow-[0_4px_12px_rgba(20,184,166,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "فهم عميق للمستندات" : "Deep Document Intelligence"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para1}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-teal-500 shadow-[0_4px_12px_rgba(20,184,166,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "كفاءة تشغيلية" : "Operational Efficiency"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para2}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : activeIdx === 3 ? (
                        <div className="space-y-5">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-teal-500 shadow-[0_4px_12px_rgba(20,184,166,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "فهم عميق للمستندات" : "Deep Document Intelligence"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para1}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-start gap-4">
                            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-teal-500 shadow-[0_4px_12px_rgba(20,184,166,0.12),_inset_0_1px_0_rgba(255,255,255,1)]">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-gray-900">{isRTL ? "كفاءة تشغيلية" : "Operational Efficiency"}</h4>
                              <p className="mt-1.5 text-[13.5px] leading-[1.6] text-gray-600">
                                {products[activeIdx].para2}
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3.5">
                          <p className="text-[15px] leading-relaxed" style={{ color: "rgba(30, 20, 60, 0.70)" }}>
                            {products[activeIdx].para1}
                          </p>
                          <p className="text-[15px] leading-relaxed" style={{ color: "rgba(30, 20, 60, 0.70)" }}>
                            {products[activeIdx].para2}
                          </p>
                        </div>
                      )}

                      <a
                        href={products[activeIdx].ctaHref}
                        className="group/btn inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#7c5cbf] transition-all duration-300 hover:-translate-y-0.5"
                        style={{
                          padding: "10px 22px",
                          background: "rgba(255, 255, 255, 0.65)",
                          border: "1px solid rgba(255, 255, 255, 0.85)",
                          borderRadius: "100px",
                          backdropFilter: "blur(12px)",
                          WebkitBackdropFilter: "blur(12px)",
                          boxShadow: "0 4px 16px rgba(124,92,191,0.12), inset 0 1px 0 rgba(255,255,255,1)",
                        }}
                      >
                        {products[activeIdx].cta}
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
                          <path d="M2.5 6h7M6.5 3.5L9 6l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeUp>
      </div>

      {/* Background Animated Logo (Left side) */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] z-0 flex h-[200px] w-[200px] items-center justify-center lg:left-[8%] lg:top-[10%] opacity-[0.4] mix-blend-multiply">
        {/* Expanding network rings */}
        <div className="absolute inset-0 m-auto h-[150px] w-[150px] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-[#8874df]/30" />
        <div className="absolute inset-0 m-auto h-[150px] w-[150px] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_1s] rounded-full border border-[#a594f0]/20" />
        <div className="absolute inset-0 m-auto h-[150px] w-[150px] animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite_2s] rounded-full border border-[#c6b8ee]/10" />

        {/* Core logo container (no background) */}
        <div className="relative flex h-[120px] w-[120px] items-center justify-center animate-[float_6s_ease-in-out_infinite]">
          <Image
            src="/mini-logo.png"
            alt="NobleMind Background"
            width={80}
            height={80}
            className="w-[80px] object-contain opacity-80"
            unoptimized
          />
        </div>
      </div>

      {/* bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-white to-transparent" />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(3deg); }
          66% { transform: translateY(12px) rotate(-2deg); }
        }
      `}} />
    </section>
  );
}
