"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FadeUp } from "@/hooks/use-fade-up";
import { useI18n } from "@/context/i18n-context";
import Image from "next/image";


/*  Tab data                                                           */

const tabs = [
  {
    id: "demo",
    label: "Demo",
    description: "See the platform in action with a live walkthrough.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    accent: "#6c63ff",
    cards: [
      { title: "App Screenshot", sub: "Dashboard view", color: "#ede9fe", border: "#8874df", lines: ["Your screenshot here", "Replace with real image"] },
      { title: "Board Overview", sub: "Advisor panel", color: "#f0f9ff", border: "#7dd3fc", lines: ["See all your advisors", "At a glance"] },
      { title: "Live Chat", sub: "Real-time session", color: "#fef3c7", border: "#fbbf24", lines: ["Ask questions live", "Get instant answers"] },
      { title: "Insights", sub: "Analytics view", color: "#dcfce7", border: "#86efac", lines: ["Track your decisions", "Measure outcomes"] },
    ],
  },
  {
    id: "build",
    label: "Build Your Board",
    description: "Hand-pick AI personas modeled after legendary strategists.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M17.5 14v7M14 17.5h7" />
      </svg>
    ),
    accent: "#8874df",
    cards: [
      { title: "Steve Jobs", sub: "Product Visionary", color: "#f3e8ff", border: "#c6b8ee", lines: ["Think different. Simplify.", "Focus on what matters."] },
      { title: "Warren Buffett", sub: "Investment Sage", color: "#fef3c7", border: "#fbbf24", lines: ["Long-term value creation", "Margin of safety first"] },
      { title: "Elon Musk", sub: "Innovation Driver", color: "#dbeafe", border: "#60a5fa", lines: ["First principles thinking", "10x moonshot goals"] },
      { title: "Add Advisor", sub: "Customize your board", color: "#f0fdf4", border: "#86efac", lines: ["Pick from 50+ personas", "Or create your own"] },
    ],
  },
  {
    id: "consult",
    label: "Ask Anything",
    description: "Pose any strategic question and get multi-perspective answers.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
    accent: "#a594f0",
    cards: [
      { title: "Market Entry", sub: "Strategic Question", color: "#fce7f3", border: "#f9a8d4", lines: ["Should we expand to EU?", "3 advisors responding..."] },
      { title: "Pricing Strategy", sub: "Revenue Model", color: "#fff7ed", border: "#fdba74", lines: ["Premium vs freemium?", "Competitive analysis"] },
      { title: "Team Scaling", sub: "Growth Planning", color: "#f0f9ff", border: "#7dd3fc", lines: ["When to hire a CTO?", "Remote vs in-office"] },
      { title: "Product Pivot", sub: "Decision Point", color: "#f5f3ff", border: "#a78bfa", lines: ["B2B or B2C focus?", "Risk assessment ready"] },
    ],
  },
];


/*  Craft-style content cards                                          */
function MockupScreen({ tab }: { tab: (typeof tabs)[number] }) {
  /*  Special demo layout: image/video placeholders  */
  if (tab.id === "demo") {
    return (
      <div className="flex h-full w-full flex-col p-5 lg:p-8">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-[15px] font-semibold text-gray-700">Demo</h3>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-[1fr_280px]">
          {/* Main video placeholder */}
          <div
            className="group relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#8874df]/25 transition-all duration-300 hover:border-[#8874df]/40"
            style={{
              background: "linear-gradient(145deg, rgba(136,116,223,0.06) 0%, rgba(165,148,240,0.03) 100%)",
            }}
          >
            {/* Play button */}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8874df]/10 text-[#8874df] shadow-[0_4px_20px_rgba(136,116,223,0.15)] transition-transform duration-300 group-hover:scale-110">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-500">Product Video</p>
            <p className="mt-1 text-[11px] text-gray-400">Click to play demo walkthrough</p>

            {/* Corner badge */}
            <span className="absolute right-3 top-3 rounded-md bg-[#8874df]/10 px-2 py-0.5 text-[10px] font-semibold text-[#8874df]">
              VIDEO
            </span>
          </div>

          {/* Right column: stacked image placeholders */}
          <div className="flex flex-col gap-3">
            {["Dashboard View", "Advisor Panel", "Chat Session"].map((label, i) => (
              <div
                key={i}
                className="group flex flex-1 flex-col items-center justify-center rounded-xl border border-gray-200/50 transition-all duration-300 hover:border-[#8874df]/30 hover:shadow-sm"
                style={{
                  background: i === 0
                    ? "linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%)"
                    : i === 1
                      ? "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
                      : "linear-gradient(135deg, #fef3c7 0%, #fef9c3 100%)",
                  minHeight: "80px",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="mb-1.5 text-gray-400">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-[11px] font-medium text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /*  Default card layout for other tabs  */
  return (
    <div className="flex h-full w-full flex-col p-5 lg:p-8">
      {/* Title bar with view toggles */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-gray-700">{tab.label}</h3>
        <div className="flex items-center gap-1.5">
          {/* Grid / List toggle icons */}
          <div className="flex items-center gap-0.5 rounded-lg border border-gray-200/60 bg-white/60 p-1 backdrop-blur-sm">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#8874df]/10 text-[#8874df]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-md text-gray-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" /></svg>
            </span>
          </div>
        </div>
      </div>

      {/* Card grid */}
      <div className="grid flex-1 auto-rows-min grid-cols-2 gap-3.5 lg:grid-cols-4">
        {tab.cards.map((card, i) => (
          <div
            key={i}
            className="group relative flex flex-col overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            style={{
              borderColor: `${card.border}50`,
              background: card.color,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}
          >
            {/* Colored top accent bar */}
            <div
              className="h-1 w-full"
              style={{ background: card.border }}
            />

            <div className="flex flex-1 flex-col p-4">
              <p className="text-[13px] font-bold text-gray-800">{card.title}</p>
              <p className="mt-0.5 text-[11px] font-medium text-gray-400">{card.sub}</p>

              <div className="mt-3 space-y-1.5">
                {card.lines.map((line, j) => (
                  <p key={j} className="text-[11px] leading-relaxed text-gray-500">
                    {line}
                  </p>
                ))}
              </div>

              {/* fake progress / status */}
              <div className="mt-auto pt-3">
                <div className="h-1 w-full overflow-hidden rounded-full bg-black/4">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${60 + i * 12}%`,
                      background: card.border,
                      opacity: 0.5,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


/*  Main component                                                     */

export function HowItWorks() {
  const { t } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const localTabs = tabs.map((tab, i) => ({
    ...tab,
    label: t.howItWorks.tabs[i]?.label ?? tab.label,
    description: t.howItWorks.tabs[i]?.description ?? tab.description,
    cards: tab.cards.map((card, j) => ({
      ...card,
      title: t.howItWorks.tabs[i]?.cards[j]?.title ?? card.title,
      sub: t.howItWorks.tabs[i]?.cards[j]?.sub ?? card.sub,
      lines: [...(t.howItWorks.tabs[i]?.cards[j]?.lines ?? card.lines)] as string[],
    })),
  }));

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
      id="how-it-works"
      className="relative overflow-hidden py-28 lg:py-36"
      style={{
        background:
          "linear-gradient(180deg, #f8f6ff 0%, #f0ecff 30%, #ede9ff 55%, #f0ecff 80%, #f8f6ff 100%)",
      }}
    >
      {/* rich background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* top-right warm blob */}
        <div className="absolute -right-32 -top-20 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(198,184,238,0.18)_0%,transparent_70%)] blur-2xl" />
        {/* center-left lavender blob */}
        <div className="absolute left-[-10%] top-[30%] h-150 w-150 rounded-full bg-[radial-gradient(circle,rgba(136,116,223,0.10)_0%,transparent_65%)] blur-[60px]" />
        {/* bottom-right peach blob */}
        <div className="absolute -bottom-20 right-[15%] h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06)_0%,transparent_70%)] blur-[50px]" />
        {/* subtle dot pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="how-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#8874df" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#how-dots)" />
        </svg>
        {/* top edge fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white to-transparent" />
        {/* bottom edge fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent" />
      </div>

      {/* Background Animated Logo (Top Right) */}
      <div className="pointer-events-none absolute right-[5%] top-[8%] z-0 flex h-[200px] w-[200px] items-center justify-center lg:right-[10%] lg:top-[10%] opacity-[0.4] mix-blend-multiply">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading badge */}
        <FadeUp>
          <div className="mb-4 flex justify-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/30 px-5 py-2 shadow-[0_8px_32px_rgba(136,116,223,0.15),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-[2]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df] shadow-[0_0_8px_rgba(136,116,223,0.8)]" />
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-[#8874df] uppercase">
                {t.howItWorks.badge}
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <h2 className="mx-auto max-w-2xl text-center text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight text-gray-900">
            {t.howItWorks.title}{" "}
            <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
              {t.howItWorks.titleHighlight}
            </span>
          </h2>
        </FadeUp>

        <FadeUp delay={140}>
          <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-gray-500 md:text-lg">
            {t.howItWorks.subtitle}
          </p>
        </FadeUp>

        {/* tabbed showcase */}
        <FadeUp delay={220}>
          <div
            className="relative mt-16 overflow-hidden rounded-2xl border border-white/60 shadow-[0_16px_80px_rgba(136,116,223,0.12),0_2px_4px_rgba(0,0,0,0.03)] ring-1 ring-black/3"
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(247,245,255,0.60) 100%)",
              backdropFilter: "blur(50px) saturate(1.8)",
              WebkitBackdropFilter: "blur(50px) saturate(1.8)",
            }}
          >
            {/* macOS title-bar */}
            <div
              className="flex items-center gap-2 border-b border-black/5 px-5 py-3"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.60) 100%)",
                backdropFilter: "blur(20px)",
              }}
            >
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.15)]" />
              <span className="h-3 w-3 rounded-full bg-[#fdbc40] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.15)]" />
              <span className="h-3 w-3 rounded-full bg-[#33c748] shadow-[inset_0_-0.5px_1px_rgba(0,0,0,0.15)]" />
              <span className="mx-auto pr-14 text-[12px] font-medium text-gray-400/70 select-none">
                Board — Noble Mind
              </span>
            </div>

            {/* window body */}
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
              {/*LEFT: frosted sidebar*/}
              <nav
                ref={navRef}
                className="relative flex flex-row gap-1 border-b border-black/5 p-2 lg:flex-col lg:gap-0 lg:border-b-0 lg:border-r lg:border-black/5 lg:px-3 lg:py-4"
                style={{
                  background: "linear-gradient(180deg, rgba(248,246,255,0.65) 0%, rgba(255,255,255,0.40) 100%)",
                  backdropFilter: "blur(30px) saturate(1.5)",
                  WebkitBackdropFilter: "blur(30px) saturate(1.5)",
                }}
              >
                {/* section label (desktop) */}
                <span className="mb-1 hidden px-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400/60 lg:block">
                  {t.howItWorks.sectionLabel}
                </span>

                {/* sliding indicator pill */}
                <div
                  ref={indicatorRef}
                  className="pointer-events-none absolute left-0 top-0 hidden rounded-[10px] transition-all duration-550 ease-[cubic-bezier(.25,.1,.25,1)] lg:block"
                  style={{
                    height: 0,
                    marginLeft: "10px",
                    background: "linear-gradient(135deg, rgba(136,116,223,0.10) 0%, rgba(165,148,240,0.06) 100%)",
                    boxShadow: "inset 0 0.5px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(136,116,223,0.06)",
                    border: "1px solid rgba(136,116,223,0.07)",
                  }}
                />

                {localTabs.map((tab, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={tab.id}
                      ref={(el) => { tabRefs.current[i] = el; }}
                      onClick={() => switchTab(i)}
                      className={`group relative z-10 flex flex-1 items-center gap-3 rounded-[10px] px-3 py-4 text-left transition-all duration-300 lg:flex-auto lg:py-4.5 ${isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                      {/* icon */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] transition-all duration-300 ${isActive
                          ? "bg-[#8874df] text-white shadow-[0_3px_10px_rgba(136,116,223,0.30)]"
                          : "bg-white/60 text-gray-400 shadow-[0_0.5px_2px_rgba(0,0,0,0.04)] group-hover:bg-white/80"
                          }`}
                        style={{ backdropFilter: "blur(8px)" }}
                      >
                        {tab.icon}
                      </span>

                      {/* label & description */}
                      <div className="hidden min-w-0 lg:block">
                        <p
                          className={`text-[13px] font-semibold leading-snug transition-colors duration-300 ${isActive ? "text-gray-800" : "text-gray-500"
                            }`}
                        >
                          {tab.label}
                        </p>
                        <p
                          className={`text-[11px] leading-relaxed text-gray-400 transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)] ${isActive
                            ? "mt-1 max-h-16 opacity-100"
                            : "mt-0 max-h-0 overflow-hidden opacity-0"
                            }`}
                        >
                          {tab.description}
                        </p>
                      </div>
                    </button>
                  );
                })}

                {/* Divider + Starred section */}
                <div className="mt-3 hidden border-t border-black/4 pt-3 lg:block">
                  <span className="px-3.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400/60">
                    {t.howItWorks.starred}
                  </span>
                  <div className="mt-2 space-y-0.5">
                    {["Strategy Docs", "Meeting Notes"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-gray-400"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        <span className="text-[12px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </nav>

              {/* RIGHT: content showcase */}
              <div
                className="relative min-h-95 lg:min-h-125"
                style={{
                  background: "linear-gradient(160deg, rgba(255,255,255,0.50) 0%, rgba(247,245,255,0.30) 100%)",
                }}
              >
                {/* dynamic accent glow */}
                <div
                  className="pointer-events-none absolute inset-0 transition-all duration-700"
                  style={{
                    background: `radial-gradient(ellipse at 60% 40%, ${localTabs[activeIdx].accent}0E 0%, transparent 60%)`,
                  }}
                />

                {/* subtle grain overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg viewBox=%270 0 200 200%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23n)%27/%3E%3C/svg%3E")',
                    backgroundSize: "150px",
                  }}
                />

                {/* inner glass highlight line at top */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

                {/* fade-transitioning content */}
                <div
                  key={fadeKey}
                  className="relative z-10 h-full animate-[fadeUp_0.5s_ease-out_both]"
                >
                  <MockupScreen tab={localTabs[activeIdx]} />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(3deg); }
          66% { transform: translateY(12px) rotate(-2deg); }
        }
      `}</style>
    </section>
  );
}
