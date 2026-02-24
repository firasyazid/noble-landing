"use client";

import { FadeUp } from "@/hooks/use-fade-up";
import { useI18n } from "@/context/i18n-context";

export function VisionSection() {
    const { t } = useI18n();

    return (
        <section id="vision" className="relative overflow-hidden py-24 mx-auto w-full lg:py-32 bg-[#f7f5ff]">
            {/* Background Soft Orbs for Glass Refraction */}
            <div className="pointer-events-none absolute inset-0 z-0 flex justify-center items-center overflow-hidden" aria-hidden>
                <div className="absolute left-[10%] top-[10%] h-[600px] w-[600px] rounded-full bg-[#8874df] mix-blend-multiply filter blur-[100px] opacity-40 animate-[float_8s_ease-in-out_infinite]" />
                <div className="absolute right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#4facfe] mix-blend-multiply filter blur-[100px] opacity-30 animate-[float_10s_ease-in-out_infinite_reverse]" />
                <div className="absolute left-[40%] top-[40%] h-[500px] w-[500px] rounded-full bg-[#4facfe] mix-blend-multiply filter blur-[100px] opacity-20 animate-[float_12s_ease-in-out_infinite]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Section Heading Badge for Vision & Mission */}
                <FadeUp delay={50}>
                    <div className="mb-4 flex justify-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/30 px-5 py-2 shadow-[0_8px_32px_rgba(136,116,223,0.15),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-[2]">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df] shadow-[0_0_8px_rgba(136,116,223,0.8)]" />
                            </span>
                            <span className="text-[13px] font-semibold uppercase tracking-wide text-[#8874df]">
                                {t.visionSection.badge}
                            </span>
                        </div>
                    </div>
                </FadeUp>

                <FadeUp delay={100}>
                    <h2 className="mx-auto max-w-2xl text-center font-serif text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight text-gray-900 mb-3">
                        {t.visionSection.title}{" "}
                        <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
                            {t.visionSection.titleHighlight}
                        </span>
                    </h2>
                </FadeUp>

                <FadeUp delay={160}>
                    <p className="mx-auto mt-3 mb-12 max-w-xl text-center text-base leading-relaxed text-gray-500 md:text-lg">
                        {t.visionSection.subtitle}
                    </p>
                </FadeUp>

                {/* Vision & Mission Apple Vision Pro Glass Panels */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24 relative z-10 perspective-[2000px]">
                    
                    {/* Mission Panel (Left) */}
                    <FadeUp delay={100} className="md:col-span-1">
                        <div className="animate-[float_4s_ease-in-out_infinite]" style={{ perspective: "2000px" }}>
                            <div className="group relative flex flex-col justify-between overflow-hidden h-[28rem] lg:h-[32rem] transition-transform duration-700 ease-out [transform:rotateY(8deg)_rotateX(2deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)]"
                                style={{
                                    background: "rgba(180, 165, 220, 0.28)",
                                    backdropFilter: "blur(32px) saturate(160%)",
                                    WebkitBackdropFilter: "blur(32px) saturate(160%)",
                                    borderRadius: "24px",
                                    border: "1px solid rgba(255, 255, 255, 0.55)",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.80)",
                                    boxShadow: "0 20px 60px rgba(124, 92, 191, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
                                    transformStyle: "preserve-3d"
                                }}>
                                
                                <div className="relative z-20 p-8 lg:p-10 flex flex-col h-full">
                                    {/* Top row: Back button + Label */}
                                    <div className="flex items-center gap-2 mb-8 w-max rounded-full border border-white/50 bg-white/35 px-3 py-1.5 backdrop-blur-md">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(80, 60, 120, 0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                        <span className="text-[0.72rem] font-medium text-[rgba(80,60,120,0.6)] tracking-wide">{t.visionSection.ourMissionLabel}</span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-20 max-w-[90%]">
                                        <h3 className="text-[1.8rem] font-bold text-[#1a1a2e] mb-4 leading-tight">{t.visionSection.missionTitle}</h3>
                                        <p className="text-[#2d1f4e] font-medium leading-[1.75] text-[15px] lg:text-base">
                                            {t.visionSection.missionText}
                                        </p>
                                    </div>

                                    {/* Bottom row: Tag */}
                                    <div className="mt-auto pt-6 border-t border-white/30 relative z-20">
                                        <span className="text-[0.68rem] font-medium text-[rgba(80,60,120,0.55)] tracking-wide">2023 · Riyadh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Vision Panel (Right) */}
                    <FadeUp delay={200} className="md:col-span-1">
                        <div className="animate-[float_4s_ease-in-out_infinite]" style={{ perspective: "2000px", animationDelay: "2s" }}>
                            <div className="group relative flex flex-col justify-between overflow-hidden h-[28rem] lg:h-[32rem] transition-transform duration-700 ease-out [transform:rotateY(-8deg)_rotateX(2deg)] hover:[transform:rotateY(0deg)_rotateX(0deg)]"
                                style={{
                                    background: "rgba(220, 215, 230, 0.25)",
                                    backdropFilter: "blur(32px) saturate(160%)",
                                    WebkitBackdropFilter: "blur(32px) saturate(160%)",
                                    borderRadius: "24px",
                                    border: "1px solid rgba(255, 255, 255, 0.55)",
                                    borderTop: "1px solid rgba(255, 255, 255, 0.80)",
                                    boxShadow: "0 20px 60px rgba(124, 92, 191, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
                                    transformStyle: "preserve-3d"
                                }}>
                                
                                <div className="relative z-20 p-8 lg:p-10 flex flex-col h-full">
                                    {/* Top row: Back button + Label */}
                                    <div className="flex items-center gap-2 mb-8 w-max rounded-full border border-white/50 bg-white/35 px-3 py-1.5 backdrop-blur-md">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(80, 60, 120, 0.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 18l-6-6 6-6" />
                                        </svg>
                                        <span className="text-[0.72rem] font-medium text-[rgba(80,60,120,0.6)] tracking-wide">{t.visionSection.ourVisionLabel}</span>
                                    </div>

                                    {/* Text Content */}
                                    <div className="relative z-20 max-w-[90%]">
                                        <h3 className="text-[1.8rem] font-bold text-[#1a1a2e] mb-4 leading-tight">{t.visionSection.visionTitle}</h3>
                                        <p className="text-[#2d1f4e] font-medium leading-[1.75] text-[15px] lg:text-base">
                                            {t.visionSection.visionText}
                                        </p>
                                    </div>

                                    {/* Bottom row: Tag */}
                                    <div className="mt-auto pt-6 border-t border-white/30 relative z-20">
                                        <span className="text-[0.68rem] font-medium text-[rgba(80,60,120,0.55)] tracking-wide">Vision 2030 · KSA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* Section Heading Badge for Challenges */}
                <FadeUp delay={300}>
                    <div className="mb-4 flex justify-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/30 px-5 py-2 shadow-[0_8px_32px_rgba(136,116,223,0.15),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-[2]">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df] shadow-[0_0_8px_rgba(136,116,223,0.8)]" />
                            </span>
                            <span className="text-[13px] font-semibold uppercase tracking-wide text-[#8874df]">
                                {t.visionSection.challengesBadge || "Challenges"}
                            </span>
                        </div>
                    </div>
                </FadeUp>

                <FadeUp delay={400}>
                    <h2 className="mx-auto max-w-2xl text-center font-serif text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight text-gray-900 mb-4">
                        {t.visionSection.challengesTitle}
                    </h2>
                </FadeUp>

                <FadeUp delay={460}>
                    <p className="mx-auto mb-12 max-w-xl text-center text-base leading-relaxed text-gray-500 md:text-lg">
                        {t.visionSection.challengesSubtitle}
                    </p>
                </FadeUp>

                {/* ─── Premium Magic UI Showcase ─── */}
                <FadeUp delay={450}>
                    <div
                        className="relative mt-12 group flex w-full flex-col items-center justify-center overflow-hidden py-10"
                        style={{ maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)" }}
                    >
                        <div className="flex w-max min-w-full shrink-0 animate-[marquee_45s_linear_infinite] hover:animate-[marquee_45s_linear_infinite_paused] flex-row items-center gap-6 md:gap-8 px-4" dir="ltr">
                            {[...t.visionSection.challenges, ...t.visionSection.challenges, ...t.visionSection.challenges].map((challenge: { title: string; text: string }, idx: number) => {
                                // Rotate through our brand gradients and accents
                                const theme = [
                                    { bg: "from-[#8874df]/10 to-[#8874df]/5", line: "bg-[#8874df]", iconBg: "bg-[#8874df]/10", iconCol: "text-[#8874df]" },
                                    { bg: "from-[#a594f0]/10 to-[#a594f0]/5", line: "bg-[#a594f0]", iconBg: "bg-[#a594f0]/10", iconCol: "text-[#a594f0]" },
                                    { bg: "from-[#c6b8ee]/20 to-[#c6b8ee]/5", line: "bg-[#c6b8ee]", iconBg: "bg-[#c6b8ee]/20", iconCol: "text-[#c6b8ee]" },
                                    { bg: "from-[#f5f3ff] to-[#f5f3ff]/50", line: "bg-[#8874df]", iconBg: "bg-white", iconCol: "text-[#8874df]" }
                                ][idx % 4];

                                return (
                                    <div key={idx} className="group/card relative flex flex-col items-center justify-center w-[300px] sm:w-[380px] md:w-[480px] shrink-0 transition-transform duration-700 hover:scale-[1.02] cursor-grab active:cursor-grabbing">

                                        {/* Outer Card / Desk background */}
                                        <div className={`w-full rounded-[2rem] bg-gradient-to-br ${theme.bg} p-4 sm:p-5 md:p-6 border border-gray-100 shadow-[0_8px_30px_rgba(136,116,223,0.04)]`}>

                                            {/* Browser mockup container */}
                                            <div className="relative flex h-[420px] sm:h-[460px] md:h-[480px] w-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_40px_rgba(0,0,0,0.05)] border border-gray-100/80 transition-shadow duration-500 group-hover/card:shadow-[0_20px_50px_rgba(136,116,223,0.12)]">

                                                {/* Browser Top Bar */}
                                                <div className="flex items-center gap-2 border-b border-gray-100/80 bg-gray-50/50 px-4 py-3" dir="ltr">
                                                    <div className="flex gap-1.5">
                                                        <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                                                        <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                                                        <div className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                                                    </div>
                                                    <div className="mx-auto h-1.5 w-1/3 rounded-full bg-gray-100" />
                                                </div>

                                                {/* Thin accent line right under the browser bar */}
                                                <div className={`h-px w-full ${theme.line} opacity-30`} />

                                                {/* Browser Inner Content */}
                                                <div className="relative flex flex-1 flex-col items-center justify-center p-6 sm:p-8 text-center bg-white" dir={t.visionSection.challengesTitle === "Challenges We Face with Confidence" ? "ltr" : "rtl"}>
                                                    {/* Background blur/glow inside the browser */}
                                                    <div className={`absolute top-0 w-full h-32 bg-gradient-to-b ${theme.bg} opacity-30`} />

                                                    <div className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconCol} ring-1 ring-inset ring-black/5 transform transition-transform duration-500 group-hover/card:-translate-y-2`}>
                                                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                                            {idx % 4 === 0 && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />}
                                                            {idx % 4 === 1 && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />}
                                                            {idx % 4 === 2 && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /></>}
                                                            {idx % 4 === 3 && <><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></>}
                                                        </svg>
                                                    </div>

                                                    <h4 className="relative text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3 leading-snug">
                                                        {challenge.title}
                                                    </h4>

                                                    <p className="relative text-[14.5px] sm:text-[15.5px] text-gray-500 leading-relaxed max-w-[90%]">
                                                        {challenge.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </FadeUp>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes marquee {
                        0% { transform: translateX(0%); }
                        100% { transform: translateX(calc(-33.333333% - 8px)); }
                    }
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                    }
                `}} />

            </div>
        </section>
    );
}
