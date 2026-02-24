"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/context/i18n-context";

type Phase = "appearing" | "lifting" | "done";

export function PageReveal() {
  const { t } = useI18n();
  const [phase, setPhase] = useState<Phase>("appearing");

  /* ── Phase sequencing ── */
  useEffect(() => {
    const t = setTimeout(() => setPhase("lifting"), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== "lifting") return;
    // Lift transition duration
    const t = setTimeout(() => setPhase("done"), 1000);
    return () => clearTimeout(t);
  }, [phase]);

  /* ── Lock scroll while overlay covers content ── */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (phase === "done") document.body.style.overflow = "";
  }, [phase]);

  if (phase === "done") return null;

  const isLifting = phase === "lifting";

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f7f5ff]"
      style={{
        transform: isLifting ? "translateY(-100%)" : "translateY(0)",
        transition: isLifting ? "transform 1000ms cubic-bezier(0.76, 0, 0.24, 1)" : "none",
      }}
    >
      {/* ── Ambient glow behind logo ── */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(136,116,223,0.08)_0%,transparent_70%)] blur-[60px]"
        style={{
          opacity: isLifting ? 0 : 1,
          transition: "opacity 600ms ease",
        }}
      />

      {/* ── The Logo & Slogan Container ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center opacity-0"
        style={{
          animation: "revealLogo 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        }}
      >
        <Image
          src="/logo.png"
          alt="Noble Mind"
          width={400}
          height={120}
          className="h-auto w-[200px] sm:w-[280px] object-contain drop-shadow-sm mb-6"
          unoptimized
          priority
        />

        {/* Dynamic Tagline from translations */}
        <p
          className="text-[13px] sm:text-[15px] font-medium tracking-wide text-[#8874df]/80 uppercase"
          style={{
            animation: "revealSlogan 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards",
            opacity: 0,
          }}
        >
          {t.footer.tagline}
        </p>
      </div>

      {/* ── Keyframes ── */}
      <style jsx global>{`
        @keyframes revealLogo {
          0% { opacity: 0; transform: translateY(24px) scale(0.96); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
        }
        @keyframes revealSlogan {
          0% { opacity: 0; transform: translateY(12px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
      `}</style>
    </div>
  );
}
