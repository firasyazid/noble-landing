"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FadeUp } from "@/hooks/use-fade-up";
import { useI18n } from "@/context/i18n-context";

export function HeroSection() {
  const { t, isRTL } = useI18n();

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // @ts-expect-error -- webgl-fluid has no TypeScript type declarations
      import("webgl-fluid").then(({ default: WebGLFluid }) => {
        if (!canvasRef.current) return;

        // Check WebGL support before initialising — some mobile browsers don't expose it
        const testCtx =
          canvasRef.current.getContext("webgl") ||
          canvasRef.current.getContext("experimental-webgl");
        if (!testCtx) return;

        try {
          WebGLFluid(canvasRef.current as HTMLCanvasElement, {
            IMMEDIATE: true,
            TRIGGER: "hover",
            SIM_RESOLUTION: 128,
            DYE_RESOLUTION: 1024,
            DENSITY_DISSIPATION: 3,
            VELOCITY_DISSIPATION: 1.2,
            PRESSURE: 0.1,
            SPLAT_RADIUS: 0.1,
            SPLAT_FORCE: 4000,
            SHADING: true,
            COLORFUL: true,
            COLOR_UPDATE_SPEED: 10,
            PAUSED: false,
            BACK_COLOR: { r: 247, g: 245, b: 255 },
            TRANSPARENT: true,
            BLOOM: false,
          });
        } catch {
          // WebGL not available in this environment — silently skip the animation
        }
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f5ff]">

      <div
        className="absolute inset-0 z-0 h-full w-full pointer-events-none mix-blend-multiply overflow-hidden"
        style={{ maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" }}
      >
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-20 pointer-events-none md:pointer-events-auto"
          style={{
            width: "100vw",
            height: "100vh",
            /* Force to soft lilac/purple/brand spectrum */
            filter: "sepia(100%) hue-rotate(200deg) saturate(1.8) brightness(1.1) blur(2px)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <svg className="absolute inset-0 h-full w-full opacity-[0.14]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="#8874df" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        <div className="absolute -top-48 -right-48 h-180 w-180 animate-[drift_20s_ease-in-out_infinite] rounded-full bg-linear-to-bl from-[#a594f0]/30 via-[#c6b8ee]/18 to-transparent blur-[100px]" />
        <div className="absolute -bottom-60 -left-48 h-155 w-155 animate-[drift_26s_ease-in-out_infinite_reverse] rounded-full bg-linear-to-tr from-[#8874df]/22 via-[#a594f0]/14 to-transparent blur-[90px]" />
        <div className="absolute top-1/2 left-1/2 h-120 w-120 -translate-x-1/2 -translate-y-1/2 animate-[drift_18s_ease-in-out_infinite_alternate] rounded-full bg-linear-to-r from-[#c6b8ee]/14 via-[#a594f0]/10 to-transparent blur-[80px]" />

        <div className="absolute top-[12%] left-[8%] h-60 w-60 animate-[float_14s_ease-in-out_infinite] rounded-full border border-[#8874df]/10 shadow-[inset_0_0_40px_rgba(136,116,223,0.06)]" />
        <div className="absolute right-[10%] bottom-[18%] h-44 w-44 animate-[float_18s_ease-in-out_infinite_reverse] rounded-full border border-[#a594f0]/12 shadow-[inset_0_0_30px_rgba(165,148,240,0.05)]" />
        <div className="absolute top-[40%] right-[15%] h-24 w-24 animate-[float_10s_ease-in-out_infinite_alternate] rounded-full border border-[#c6b8ee]/15" />

        <div className="absolute inset-0 animate-[sweep_8s_ease-in-out_infinite] bg-linear-to-tr from-transparent via-[#8874df]/4 to-transparent opacity-60" />
        <div className="absolute top-1/2 left-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(136,116,223,0.08)_0%,transparent_70%)]" />

        <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-[#ede9ff]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-white/70 to-transparent" />
      </div>

      {/* Background Animated Logo (Top Right) */}
      <div className="pointer-events-none absolute right-[5%] top-[15%] z-0 flex h-[200px] w-[200px] items-center justify-center lg:right-[10%] lg:top-[10%] opacity-[0.4] mix-blend-multiply">
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

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-screen max-w-275 flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
        <FadeUp delay={0}>
          <div className="mb-8 inline-flex flex-col items-center gap-1.5 rounded-3xl border border-white/60 bg-white/30 px-5 py-3 shadow-[0_8px_32px_rgba(136,116,223,0.15),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_20px_rgba(255,255,255,0.4)] backdrop-blur-2xl backdrop-saturate-[2] sm:flex-row sm:gap-2.5 sm:rounded-full sm:py-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8874df] shadow-[0_0_8px_rgba(136,116,223,0.8)]" />
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-[#8874df]">
                {t.hero.badge}
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <h1 className="max-w-250 text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight text-gray-900 text-left">
            {t.hero.headline1}
            <br />
            <span className="relative inline-block">
              <span className="text-[#8874df] font-serif italic pr-2">
                {t.hero.headline2}
              </span>
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="mt-8 max-w-145 text-lg leading-relaxed text-gray-500 md:text-xl">
            {t.hero.subtext}
          </p>
        </FadeUp>

        <FadeUp delay={320}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="pointer-events-auto group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-linear-to-r from-[#8874df] to-[#a594f0] py-3.5 pl-8 pr-6 text-[15px] font-semibold text-white shadow-[0_4px_24px_rgba(136,116,223,0.4)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(136,116,223,0.55)] hover:brightness-110"
            >
              <span className="relative z-10">{t.hero.cta}</span>
              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5">
                <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-white/0 via-white/20 to-white/0 transition-transform duration-500 group-hover:translate-x-full" />
            </button>
            <button
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="pointer-events-auto group flex items-center gap-2 rounded-full border border-[#c6b8ee]/40 bg-white/80 px-8 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-[#8874df]/40 hover:text-[#8874df] hover:shadow-[0_4px_16px_rgba(136,116,223,0.12)]"
            >
              {t.hero.secondary}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-y-0.5">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </FadeUp>

      </div>

      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -20px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(15px, 10px) scale(1.02); }
        }
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.6; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(3deg); }
          66% { transform: translateY(12px) rotate(-2deg); }
        }
        @keyframes sweep {
          0%, 100% { opacity: 0; transform: translateX(-100%) skewX(-15deg); }
          50% { opacity: 0.6; transform: translateX(100%) skewX(-15deg); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}