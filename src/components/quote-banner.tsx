"use client";

import { useRef, useEffect, useState } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

export function QuoteBanner() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-[#f7f5ff] py-20 sm:py-28">
      {/* very subtle top/bottom borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-200/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gray-200/80 to-transparent" />

      <div className="mx-auto max-w-5xl px-6">
        {/* frosted glass card */}
        <div
          ref={ref}
          className={`relative rounded-[24px] border border-white/55 px-8 py-16 shadow-[0_20px_60px_rgba(124,92,191,0.12),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-[32px] backdrop-saturate-[1.6] transition-all duration-1000 ease-out sm:px-16 sm:py-20 border-t-[1px] border-t-white/80
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            background: "rgba(220, 215, 230, 0.25)",
          }}
        >
          {/* opening quote mark */}
          <div
            className={`mb-8 flex justify-center transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <svg
              width="36"
              height="28"
              viewBox="0 0 36 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M0 28V17.6C0 12.587 1.493 8.427 4.48 5.12C7.467 1.707 11.627 0 16.96 0v4.48C14.08 4.48 11.84 5.44 10.24 7.36 8.64 9.173 7.84 11.52 7.84 14.4H14.4V28H0ZM21.6 28V17.6c0-5.013 1.493-9.173 4.48-12.48C29.067 1.707 33.227 0 38.56 0v4.48c-2.88 0-5.12.96-6.72 2.88-1.6 1.813-2.4 4.16-2.4 7.04H36V28H21.6Z"
                fill="#8874df"
                fillOpacity="0.18"
              />
            </svg>
          </div>

          {/* Arabic quote */}
          <p
            className={`relative z-10 text-center font-serif text-2xl font-bold leading-snug tracking-tight text-[#1a1a2e] transition-all duration-700 sm:text-3xl lg:text-4xl ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            dir="rtl"
            style={{ transitionDelay: "300ms" }}
          >
            الذكاء الاصطناعي لا يُغيّر العالم وحده ..{" "}
            <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
              نحن من يُعيد تشكيله بلمسةٍ إنسانية.
            </span>
          </p>

          {/* Divider */}
          <div
            className={`my-6 flex justify-center transition-all duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <div className="h-px w-16 rounded-full bg-linear-to-r from-transparent via-[#a594f0]/40 to-transparent" />
          </div>

          {/* English quote */}
          <p
            className={`relative z-10 text-center font-serif text-xl font-medium leading-snug tracking-tight text-[rgba(30,20,60,0.72)] transition-all duration-700 sm:text-2xl lg:text-3xl ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            dir="ltr"
            style={{ transitionDelay: "550ms" }}
          >
            &ldquo;AI doesn&rsquo;t change the world alone...{" "}
            <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
              We reshape it with a human touch.
            </span>
            &rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
