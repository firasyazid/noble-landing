"use client";

import Image from "next/image";
import { FadeUp } from "@/hooks/use-fade-up";
import { useI18n } from "@/context/i18n-context";

export function PartnersSection() {
    const { t } = useI18n();
    return (
        <section className="relative overflow-hidden border-y border-gray-200/50 py-24 lg:py-32" style={{ background: "linear-gradient(180deg, #f8f6ff 0%, #f0ecff 30%, #ede9ff 55%, #f0ecff 80%, #f8f6ff 100%)" }}>
            {/* Background blobs for the frosted glass to distort, adding to the Apple aesthetic */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden mix-blend-multiply opacity-20" aria-hidden>
                <div className="absolute left-1/4 h-80 w-80 rounded-full bg-[#8874df] blur-[100px]" />
                <div className="absolute right-1/4 h-80 w-80 rounded-full bg-[#a594f0] blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6">

                {/* heading badge */}
                <FadeUp>
                    <div className="mb-4 flex justify-center">
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/30 px-5 py-2 shadow-[0_8px_32px_rgba(136,116,223,0.15),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-[2]">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df] shadow-[0_0_8px_rgba(136,116,223,0.8)]" />
                            </span>
                            <span className="text-[13px] font-semibold tracking-wide text-[#8874df] uppercase">
                                {t.partners.badge}
                            </span>
                        </div>
                    </div>
                </FadeUp>

                {/* Gradient Title */}
                <FadeUp delay={80}>
                    <h2 className="mx-auto max-w-2xl text-center font-serif text-[clamp(1.7rem,3.5vw,2.8rem)] font-bold leading-tight tracking-tight text-gray-900">
                        {t.partners.title}{" "}
                        <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
                            {t.partners.titleHighlight}
                        </span>
                    </h2>
                </FadeUp>

                {/* Optional Subtitle */}
                <FadeUp delay={160}>
                    <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-gray-500 md:text-base">
                        {t.partners.subtitle}
                    </p>
                </FadeUp>

                {/* macOS inspired Dock / Pill container */}
                <FadeUp delay={240}>
                    <div className="mx-auto mt-16 flex max-w-[800px] flex-col items-center justify-center gap-2 rounded-[2.5rem] border border-white/60 bg-white/40 p-2 shadow-[0_8px_32px_rgba(136,116,223,0.06),inset_0_1px_0_rgba(255,255,255,1),inset_0_0_20px_rgba(255,255,255,0.5)] backdrop-blur-[40px] backdrop-saturate-[1.5] sm:flex-row sm:gap-4 md:p-3 relative overflow-hidden">

                        {/* Inner shimmer or reflection */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/30 to-transparent" />

                        {/* Microsoft */}
                        <div className="group/item relative flex w-full flex-col items-center justify-center rounded-[2rem] px-8 py-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/70 hover:shadow-[0_4px_30px_rgba(0,164,239,0.1),inset_0_1px_0_rgba(255,255,255,1)] sm:w-1/2 sm:p-14 cursor-default">
                            <div className="relative flex h-[50px] w-full items-center justify-center sm:h-[60px]">
                                <Image
                                    src="/microsoft.png"
                                    alt="Microsoft Partner"
                                    fill
                                    className="object-contain filter grayscale opacity-60 transition-all duration-500 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-105"
                                    unoptimized
                                />
                            </div>
                            <p className="absolute bottom-5 text-[11px] font-bold tracking-widest text-[#00A4EF] opacity-0 transition-all duration-500 translate-y-3 group-hover/item:translate-y-0 group-hover/item:opacity-100 uppercase">
                                {t.partners.microsoft}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] w-[80%] bg-gray-300/40 sm:h-[100px] sm:w-[1px]" />

                        {/* NVIDIA */}
                        <div className="group/item relative flex w-full flex-col items-center justify-center rounded-[2rem] px-8 py-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-white/70 hover:shadow-[0_4px_30px_rgba(118,185,0,0.1),inset_0_1px_0_rgba(255,255,255,1)] sm:w-1/2 sm:p-14 cursor-default">
                            <div className="relative flex h-[50px] w-full items-center justify-center sm:h-[60px]">
                                <Image
                                    src="/nvidia.png"
                                    alt="NVIDIA Partner"
                                    fill
                                    className="object-contain filter grayscale opacity-60 transition-all duration-500 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-hover/item:scale-105"
                                    unoptimized
                                />
                            </div>
                            <p className="absolute bottom-5 text-[11px] font-bold tracking-widest text-[#76B900] opacity-0 transition-all duration-500 translate-y-3 group-hover/item:translate-y-0 group-hover/item:opacity-100 uppercase">
                                {t.partners.nvidia}
                            </p>
                        </div>

                    </div>
                </FadeUp>

            </div>
        </section>
    );
}
