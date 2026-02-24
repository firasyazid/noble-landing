"use client";

import { useI18n } from "@/context/i18n-context";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function AboutFadeUp({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                transition: "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${delay}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(22px)",
            }}
        >
            {children}
        </div>
    );
}

export function AboutSection() {
    const { t, isRTL } = useI18n();

    return (
        <section id="about" className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #f8f6ff 0%, #f0ecff 30%, #ede9ff 55%, #f0ecff 80%, #f8f6ff 100%)" }}>
            {/* Background decorations matching the existing site style */}
            <div className="pointer-events-none absolute inset-0 z-0 flex justify-center items-center opacity-30" aria-hidden>
                <div className="absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(136,116,223,0.1)_0%,transparent_70%)] blur-[80px]" />
                <div className="absolute right-[5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(198,184,238,0.1)_0%,transparent_70%)] blur-[80px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6">
                <AboutFadeUp delay={0}>
                    <div className="mb-6 flex justify-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/40 px-5 py-2 shadow-sm backdrop-blur-xl">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7c5cbf] opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7c5cbf]" />
                            </span>
                            <span className="text-[13px] font-semibold tracking-wide text-[#7c5cbf] uppercase">
                                {t.aboutUs.badge}
                            </span>
                        </div>
                    </div>
                </AboutFadeUp>

                <AboutFadeUp delay={80}>
                    <div className="mx-auto max-w-2xl flex justify-center mb-12">
                        <Image
                            src="/logo.png"
                            alt="Noble Mind"
                            width={300}
                            height={80}
                            className="h-auto w-[250px] sm:w-[350px] object-contain drop-shadow-sm"
                            unoptimized
                        />
                    </div>
                </AboutFadeUp>

                {/* macOS style glass card */}
                <AboutFadeUp delay={160}>
                    <div 
                        className="group relative overflow-hidden p-10 sm:p-14 transition-all duration-500"
                        style={{
                            background: "rgba(220, 215, 230, 0.25)",
                            backdropFilter: "blur(32px) saturate(160%)",
                            WebkitBackdropFilter: "blur(32px) saturate(160%)",
                            borderRadius: "24px",
                            border: "1px solid rgba(255, 255, 255, 0.55)",
                            borderTop: "1px solid rgba(255, 255, 255, 0.80)",
                            boxShadow: "0 20px 60px rgba(124, 92, 191, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
                        }}
                    >

                        {/* Content block */}
                        <div className="relative z-10 mx-auto max-w-4xl text-center md:text-left">
                            <p className="text-[22px] sm:text-2xl font-serif text-[#1a1a2e] leading-[1.75] tracking-tight mb-10 text-justify" style={{ textAlignLast: isRTL ? 'right' : 'left' }}>
                                {t.aboutUs.description}
                            </p>

                            {/* Bottom bar with location and learn more */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/30 mt-10">
                                <div className="flex items-center gap-3 text-[rgba(80,60,120,0.55)]">
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span className="text-[0.68rem] font-medium tracking-wide">Riyadh, Saudi Arabia</span>
                                </div>
                                <div className="flex items-center">
                                    <a href="#contact" className={`group/link flex items-center gap-2 text-sm font-bold text-[#8874df] hover:text-[#7a63d1] transition-colors ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                                        <span>{t.aboutUs.learnMore}</span>
                                        <span className={`transition-transform duration-300 ${isRTL ? "group-hover/link:-translate-x-1" : "group-hover/link:translate-x-1"}`}>
                                            {isRTL ? "←" : "→"}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </AboutFadeUp>
            </div>
        </section>
    );
}
