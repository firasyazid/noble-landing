"use client";

import { useState, useEffect, useCallback } from "react";
import { FadeUp } from "@/hooks/use-fade-up";
import { useI18n } from "@/context/i18n-context";

interface ReasonMeta {
    id: string;
    accent: string;
    icon: React.ReactNode;
}

interface ReasonTab extends ReasonMeta {
    label: string;
    headline: string;
    text: string;
    visualTitle?: string;
    visualSub?: string;
    visualBadge?: string;
    visualTitle2?: string;
    visualSub2?: string;
}

/* Data for Why Us */
const reasonsMeta: ReasonMeta[] = [
    {
        id: "expertise",
        accent: "#8874df",
        icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.99 21.408l-8.423-8.835c-2.088-2.19-2.088-5.741 0-7.931 2.088-2.19 5.474-2.19 7.562 0l.861.903.861-.903c2.088-2.19 5.474-2.19 7.562 0 2.088 2.19 2.088 5.741 0 7.931l-8.423 8.835z" />
                <path d="M12 8v4m-2-2h4" />
            </svg>
        ),
    },
    {
        id: "security",
        accent: "#a594f0",
        icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        id: "leadership",
        accent: "#c6b8ee",
        icon: (
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.731-2.732 4.486 4.486 0 00-4.312 1.761m3.338 0v-.115m-1.215-1.216l-.085-.085m1.3 1.3l.085.085" />
            </svg>
        ),
    },
];

/* Custom Mockup Visuals for Each Tab */
function ReasonVisual({ type, textObj }: { type: string, accent: string, textObj: ReasonTab }) {
    if (type === "expertise") {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white/80 to-transparent z-10 pointer-events-none" />
                <div className="relative flex items-center justify-center w-48 h-48">
                    {/* Concentric pulsing circles for "Heart of Healthcare" */}
                    <div className="absolute w-48 h-48 rounded-full border border-[#8874df]/10 bg-[#8874df]/[0.02] animate-[ping_4s_ease-out_infinite]" />
                    <div className="absolute w-36 h-36 rounded-full border border-[#8874df]/20 bg-[#8874df]/[0.04] animate-[ping_4s_ease-out_infinite_1s]" />
                    <div className="absolute w-24 h-24 rounded-full border border-[#8874df]/30 bg-[#8874df]/[0.06] animate-[ping_4s_ease-out_infinite_2s]" />
                    <div className="absolute w-16 h-16 rounded-2xl bg-linear-to-br from-[#8874df] to-[#a594f0] shadow-[0_0_40px_rgba(136,116,223,0.5)] flex items-center justify-center text-white z-20 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m-2-2h4m5.6 4.4A9 9 0 1112 3a9 9 0 015.6 15.4z" />
                        </svg>
                    </div>
                </div>
                <div className="mt-10 z-20 bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/50 shadow-sm">
                    <p className="text-[15px] font-bold tracking-wide text-gray-900 uppercase font-sans">{textObj.visualTitle}</p>
                    <p className="mt-1.5 max-w-[220px] text-[13px] text-gray-500 leading-relaxed">{textObj.visualSub}</p>
                </div>
            </div>
        );
    }

    if (type === "security") {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center p-8 relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white/80 to-transparent z-10 pointer-events-none" />
                {/* Lock and Shield UI representing Sovereignty */}
                <div className="relative z-20 flex w-full max-w-sm flex-col gap-5">
                    <div className="rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl flex items-center justify-between transform hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 shadow-inner border border-green-100/50">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-bold text-gray-900">{textObj.visualTitle}</p>
                                <p className="text-[13px] text-gray-500 mt-0.5">{textObj.visualSub}</p>
                            </div>
                        </div>
                        <div className="text-[11px] font-bold text-green-600 uppercase tracking-wider bg-green-100/80 px-2.5 py-1.5 rounded-lg border border-green-200/50">{textObj.visualBadge}</div>
                    </div>
                    <div className="rounded-2xl border border-white/60 bg-white/50 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] backdrop-blur-xl flex items-center justify-between ml-8 opacity-90 transform hover:-translate-y-1 transition-transform duration-500 delay-75">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#a594f0]/10 text-[#a594f0] shadow-inner border border-[#a594f0]/20">
                                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-bold text-gray-900">{textObj.visualTitle2}</p>
                                <p className="text-[13px] text-gray-500 mt-0.5">{textObj.visualSub2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "leadership") {
        return (
            <div className="flex h-full w-full flex-col items-center justify-center p-8 relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-white/80 to-transparent z-10 pointer-events-none" />
                <div className="relative flex flex-col items-center z-20 w-full max-w-xs">
                    <div className="relative flex h-32 w-full overflow-hidden items-end justify-center rounded-t-[2.5rem] border-t border-l border-r border-[#c6b8ee]/40 bg-linear-to-b from-[#c6b8ee]/15 to-transparent p-6">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#c6b8ee20_1px,transparent_1px),linear-gradient(to_bottom,#c6b8ee20_1px,transparent_1px)] bg-[size:16px_16px]" />
                        <svg className="w-14 h-14 text-[#a594f0] mb-2 relative z-10 drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                    </div>
                    <div className="mt-6 text-center bg-white/80 backdrop-blur-xl px-8 py-4 border border-white/60 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] w-full transform hover:scale-[1.02] transition-transform duration-500">
                        <h4 className="text-[16px] font-bold text-gray-900">{textObj.visualTitle}</h4>
                        <div className="mt-3 flex justify-center gap-1.5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-1.5 w-8 rounded-full bg-[#c6b8ee]/30 overflow-hidden">
                                    <div className="h-full bg-[#a594f0] rounded-full w-full animate-[pulse_2s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}

/* Icon Helper */
function StepIcon({ icon, active }: { icon: React.ReactNode; active: boolean; accent: string }) {
    return (
        <div
            className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
                active 
                ? "bg-linear-to-br from-[#8874df] to-[#a594f0] text-white shadow-lg shadow-[#8874df]/30 scale-110" 
                : "bg-white text-gray-400 border border-gray-100 shadow-sm group-hover:scale-105 group-hover:text-[#8874df] group-hover:border-[#8874df]/20"
            }`}
        >
            {icon}
        </div>
    );
}

export function WhySection() {
    const { t } = useI18n();
    const [activeIdx, setActiveIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [fadeKey, setFadeKey] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const reasons = t.whyUs.tabs.map((tab: Record<string, any>, i: number) => ({ ...tab, ...reasonsMeta[i] } as ReasonTab));

    const TAB_DURATION = 12000;
    const progressInterval = 30;

    const switchTab = useCallback((idx: number) => {
        if (idx === activeIdx) return;
        setActiveIdx(idx);
        setProgress(0);
        setFadeKey((prev) => prev + 1);
    }, [activeIdx]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    const next = (activeIdx + 1) % reasons.length;
                    setActiveIdx(next);
                    setFadeKey((k) => k + 1);
                    return 0;
                }
                return prev + (progressInterval / TAB_DURATION) * 100;
            });
        }, progressInterval);
        return () => clearInterval(interval);
    }, [activeIdx, reasons.length]);

    return (
        <section id="why-us" className="relative overflow-hidden py-24 mx-auto w-full lg:py-32"
            style={{
                background:
                    "linear-gradient(180deg, #f8f6ff 0%, #f0ecff 30%, #ede9ff 55%, #f0ecff 80%, #f8f6ff 100%)",
            }}>
            {/* Background Subtle Highlights */}
            <div className="pointer-events-none absolute inset-0 z-0 flex justify-center items-center opacity-30" aria-hidden>
                <div className="absolute left-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(136,116,223,0.1)_0%,transparent_70%)] blur-[80px]" />
                <div className="absolute right-[5%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,184,238,0.1)_0%,transparent_70%)] blur-[80px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Heading Badge */}
                <FadeUp>
                    <div className="mb-4 flex justify-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200/60 bg-white/50 px-5 py-2 shadow-sm backdrop-blur-xl backdrop-saturate-[2]">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df]" />
                            </span>
                            <span className="text-[13px] font-semibold tracking-wide text-[#8874df] uppercase">
                                {t.whyUs.badge}
                            </span>
                        </div>
                    </div>
                </FadeUp>

                <FadeUp delay={80}>
                    <h2 className="mx-auto max-w-2xl text-center font-serif text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight text-gray-900">
                        {t.whyUs.title}{" "}
                        <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
                            {t.whyUs.titleHighlight}
                        </span>
                    </h2>
                </FadeUp>

                <FadeUp delay={140}>
                    <p className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-gray-500 md:text-lg">
                        {t.whyUs.subtitle}
                    </p>
                </FadeUp>

                {/* Main Tabbed Showcase */}
                <FadeUp delay={220}>
                    <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14 xl:gap-20">

                        {/* LEFT: Auto-playing navigation tabs */}
                        <div className="flex flex-col gap-3">
                            {reasons.map((feat, i) => {
                                const isActive = i === activeIdx;
                                return (
                                    <button
                                        key={feat.id}
                                        onClick={() => switchTab(i)}
                                        className={`group relative flex items-start gap-5 rounded-3xl border px-6 py-6 text-left transition-all duration-500 ${isActive
                                            ? "border-[#8874df]/20 bg-white/95 shadow-[0_20px_40px_-15px_rgba(136,116,223,0.15)] scale-[1.02]"
                                            : "border-transparent bg-transparent hover:bg-white/60 hover:shadow-sm"
                                            }`}
                                    >
                                        <StepIcon icon={feat.icon} active={isActive} accent={feat.accent} />

                                        <div className="min-w-0 flex-1 pt-1">
                                            <p className={`text-[12px] font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-[#8874df]" : "text-gray-400 group-hover:text-gray-500"}`}>
                                                {feat.label}
                                            </p>
                                            <p className={`mt-1.5 text-[20px] font-bold leading-snug transition-colors duration-300 ${isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"}`}>
                                                {feat.headline}
                                            </p>
                                            <div className={`grid transition-all duration-500 ease-[cubic-bezier(.25,.1,.25,1)] overflow-hidden ${isActive ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                                                <p className="text-[14.5px] leading-relaxed text-gray-500 min-h-0">
                                                    {feat.text}
                                                </p>
                                            </div>

                                            {/* Progress bar line */}
                                            {isActive && (
                                                <div className="mt-6 h-[4px] w-full overflow-hidden rounded-full bg-gray-100">
                                                    <div
                                                        className="h-full rounded-full bg-linear-to-r from-[#8874df] to-[#a594f0] shadow-[0_0_10px_rgba(136,116,223,0.5)]"
                                                        style={{ width: `${progress}%`, transition: "width 100ms linear" }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* RIGHT: Minimalist graphic panel */}
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(136,116,223,0.15),0_0_0_1px_rgba(255,255,255,0.5)_inset] border border-white/40">
                            {/* Thin solid accent bar at top */}
                            <div
                                className="h-[6px] w-full transition-all duration-700 ease-in-out"
                                style={{ background: `linear-gradient(90deg, ${reasons[activeIdx].accent}, ${reasons[activeIdx].accent}80)` }}
                            />

                            <div className="relative h-[28rem] lg:h-full min-h-[450px] flex items-center justify-center">
                                {/* Subtle radial accent glow based on the active tab */}
                                <div
                                    className="pointer-events-none absolute inset-0 transition-all duration-1000 ease-in-out"
                                    style={{ background: `radial-gradient(circle at 50% 50%, ${reasons[activeIdx].accent}15 0%, transparent 70%)` }}
                                />
                                
                                {/* Decorative background grid inside the panel */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

                                {/* Fade transition for visuals */}
                                <div
                                    key={fadeKey}
                                    className="relative z-10 h-full w-full animate-[fadeUp_0.6s_cubic-bezier(0.16,1,0.3,1)_both]"
                                >
                                    <ReasonVisual
                                        type={reasons[activeIdx].id}
                                        accent={reasons[activeIdx].accent}
                                        textObj={reasons[activeIdx]}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </FadeUp>
            </div>

            <style jsx>{`
               @keyframes fadeUp {
                 from { opacity: 0; transform: translateY(20px) scale(0.98); }
                 to { opacity: 1; transform: translateY(0) scale(1); }
               }
               @keyframes ping {
                 0% { transform: scale(0.8); opacity: 0.8; }
                 80%, 100% { transform: scale(2.5); opacity: 0; }
               }
            `}</style>
        </section>
    );
}
