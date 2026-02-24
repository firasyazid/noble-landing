"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/context/i18n-context";

/* fade-in on scroll  */
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
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

/*  floating label input  */
function FloatingField({
  label,
  name,
  type = "text",
  required = true,
  textarea = false,
  delay = 0,
  visible = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  delay?: number;
  visible?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const active = focused || hasValue;

  const baseWrapper = `relative transition-all duration-700 ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`;

  const inputClasses = `peer w-full rounded-2xl border bg-white/60 px-5 pt-6 pb-3 text-[15px] font-medium text-gray-900 outline-none backdrop-blur-sm transition-all duration-300 placeholder-transparent
    ${
      focused
        ? "border-[#8874df]/50 ring-4 ring-[#8874df]/8 shadow-[0_0_0_1px_rgba(136,116,223,0.15),0_4px_20px_rgba(136,116,223,0.08)]"
        : "border-gray-200/80 hover:border-gray-300/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    }`;

  const labelClasses = `pointer-events-none absolute left-5 transition-all duration-300 ease-out
    ${
      active
        ? "top-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#8874df]"
        : "top-1/2 -translate-y-1/2 text-[15px] text-gray-400"
    }`;

  const textareaLabelClasses = `pointer-events-none absolute left-5 transition-all duration-300 ease-out
    ${
      active
        ? "top-2.5 text-[11px] font-semibold tracking-wider uppercase text-[#8874df]"
        : "top-5 text-[15px] text-gray-400"
    }`;

  return (
    <div className={baseWrapper} style={{ transitionDelay: `${delay}ms` }}>
      {textarea ? (
        <>
          <textarea
            name={name}
            required={required}
            rows={4}
            placeholder={label}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              setFocused(false);
              setHasValue(e.target.value.length > 0);
            }}
            className={`${inputClasses} resize-none`}
          />
          <label className={textareaLabelClasses}>{label}</label>
        </>
      ) : (
        <>
          <input
            type={type}
            name={name}
            required={required}
            placeholder={label}
            onFocus={() => setFocused(true)}
            onBlur={(e) => {
              setFocused(false);
              setHasValue(e.target.value.length > 0);
            }}
            className={inputClasses}
          />
          <label className={labelClasses}>{label}</label>
        </>
      )}
    </div>
  );
}

export function RequestDemo() {
  const { ref, visible } = useReveal();
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8f6ff 30%, #f0ecff 60%, #f7f5ff 80%, #ffffff 100%)",
      }}
    >
      {/*background decoration*/}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* top-left warm blob */}
        <div className="absolute -left-32 -top-20 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(198,184,238,0.18)_0%,transparent_70%)] blur-2xl" />
        {/* center-right lavender blob */}
        <div className="absolute right-[-10%] top-[30%] h-150 w-150 rounded-full bg-[radial-gradient(circle,rgba(136,116,223,0.10)_0%,transparent_65%)] blur-[60px]" />
        {/* bottom-left peach blob */}
        <div className="absolute -bottom-20 left-[15%] h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.06)_0%,transparent_70%)] blur-[50px]" />
        {/* subtle dot pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="demo-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#8874df" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demo-dots)" />
        </svg>
        {/* top edge fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white to-transparent" />
        {/* bottom edge fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white to-transparent" />
      </div>

      <img
        src="/mini-logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[8%] z-[1] w-[180px] select-none"
        style={{
          opacity: 0.14,
          animation: "logoWatermark 22s ease-in-out infinite 2s",
          filter: "saturate(1.4) hue-rotate(-5deg) brightness(0.9)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border border-[#c6b8ee]/40 bg-white/80 px-4 py-1.5 shadow-[0_2px_12px_rgba(136,116,223,0.08)] backdrop-blur-md transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8874df] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#8874df]" />
            </span>
            <span className="text-[12px] font-medium tracking-wide text-gray-500">
              {t.requestDemo.badge}
            </span>
          </div>

          <h2
            className={`font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "80ms" }}
          >
            {t.requestDemo.title}{" "}
            <span className="bg-linear-to-r from-[#8874df] via-[#a594f0] to-[#c6b8ee] bg-clip-text text-transparent">
              {t.requestDemo.titleHighlight}
            </span>
          </h2>

          <p
            className={`mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-gray-500 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            {t.requestDemo.subtitle}
          </p>

          {/* Contact info row */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            <a
              href="mailto:info@NobleMind.sa"
              className="group flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8874df]/30 hover:shadow-[0_8px_24px_rgba(136,116,223,0.12)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#8874df]/10 text-[#8874df] transition-colors duration-300 group-hover:bg-[#8874df] group-hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Email</p>
                <p className="text-[13.5px] font-semibold text-gray-800 transition-colors duration-200 group-hover:text-[#8874df]">info@NobleMind.sa</p>
              </div>
            </a>

            <span className="hidden sm:block h-8 w-px bg-gray-200" aria-hidden />

            <a
              href="tel:+966553388029"
              className="group flex items-center gap-3 rounded-2xl border border-gray-200/80 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8874df]/30 hover:shadow-[0_8px_24px_rgba(136,116,223,0.12)]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#8874df]/10 text-[#8874df] transition-colors duration-300 group-hover:bg-[#8874df] group-hover:text-white">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.07 6.07l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              </span>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Phone</p>
                <p className="text-[13.5px] font-semibold text-gray-800 transition-colors duration-200 group-hover:text-[#8874df]">+966 55 338 8029</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form Card  */}
        <div
          className={`rounded-3xl border border-gray-200/60 bg-white/70 p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:p-10 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <FloatingField
                label={t.requestDemo.fullName}
                name="fullName"
                delay={280}
                visible={visible}
              />
              <FloatingField
                label={t.requestDemo.email}
                name="email"
                type="email"
                delay={360}
                visible={visible}
              />
              <FloatingField
                label={t.requestDemo.jobTitle}
                name="jobTitle"
                delay={440}
                visible={visible}
              />
              <FloatingField
                label={t.requestDemo.message}
                name="message"
                required={false}
                textarea
                delay={520}
                visible={visible}
              />

              {/* Submit */}
              <div
                className={`pt-2 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <button
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-[#8874df] via-[#9580e6] to-[#a594f0] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_4px_20px_rgba(136,116,223,0.3)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(136,116,223,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_12px_rgba(136,116,223,0.3)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {t.requestDemo.submit}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  {/* hover shimmer */}
                  <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </div>

              <p
                className={`text-center text-[12px] text-gray-400 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "680ms" }}
              >
                {t.requestDemo.disclaimer}
              </p>
            </form>
          ) : (
            /*  Success state  */
            <div className="flex flex-col items-center py-8 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#8874df]/10">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8874df"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t.requestDemo.successTitle}
              </h3>
              <p className="mt-2 max-w-xs text-[14px] leading-relaxed text-gray-500">
                {t.requestDemo.successText}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-[13px] font-medium text-[#8874df] transition-colors duration-200 hover:text-[#7060c9]"
              >
                {t.requestDemo.successReset}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
