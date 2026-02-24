"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "EN" | "AR";

export const translations = {
  EN: {
    /* Navbar */
    nav: {
      products: "Products",
      whyUs: "Why Us",
      about: "About",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },

    /* Hero */
    hero: {
      badge: "Built for Saudi Healthcare • Made in the Kingdom",
      headline1: "Where Technology",
      headline2: "Enhances Human Care",
      headline3: "",
      subtext:
        "Born from the direct experience of healthcare providers building solutions for the patients they serve. We build AI that amplifies the compassion and expertise of Saudi clinicians.",
      cta: "Get Started",
      secondary: "Learn More",
    },

    /* Our Solution */
    ourSolution: {
      badge: "Products",
      title: "Meet",
      titleHighlight: "NobleMind",
      subtitle1: "PDPL-Ready Clinical Intelligence",
      subtitle2: "Built for Saudi Healthcare",
      description:
        "Noble Mind delivers Saudi-built AI solutions that enhance performance and elevate experiences in critical sectors. All platforms are developed and managed within the Kingdom, ensuring data sovereignty and full compliance from day one.",
      products: [
        {
          name: "Novera.MD",
          tagline: "Clinical Intelligence Platform",
          para1:
            "One of the world's first generative AI platforms in healthcare. Leverages cutting-edge AI technologies including intelligent agents and advanced capabilities to understand care language.",
          para2:
            "Redefines clinical efficiency by supporting the care journey from intelligent symptom assessment and direct referrals to optimal treatment decisions. Provides integrated health management while ensuring data sovereignty and full compliance with national regulations.",
          cta: "Schedule a Demo",
          ctaHref: "#contact",
        },
        {
          name: "ARWA",
          tagline: "Adaptive • Resourceful • Workflow • Assistant",
          para1:
            "An AI agent that works as an effective team member, 24/7, distinguished by adaptability, productivity, and workflow support.",
          para2:
            "Seamlessly integrates with existing systems to handle operational tasks, automate processes, and ensure compliance with policies. Sets a superior standard for enhancing efficiency in vital sectors like healthcare.",
          cta: "Schedule a Demo",
          ctaHref: "#contact",
        },
        {
          name: "Novera Workspace",
          tagline: "Smart Workspace",
          para1:
            "A secure alternative to public platforms like ChatGPT, operating within your organization with the same capabilities in search, document drafting, and information summarization.",
          para2:
            "All sensitive data remains within your infrastructure without external sharing. Helps teams enhance productivity while ensuring data sovereignty and information protection in sectors requiring the highest security standards.",
          cta: "Test Now at Noble.sa",
          ctaHref: "https://noble.sa",
        },
        {
          name: "Noble Retrieval",
          tagline: "Deep Document Intelligence",
          para1:
            "Advanced capability to understand documents by analyzing texts, tables, and graphs as one cohesive context while maintaining the original content structure.",
          para2:
            "Noble Mind was among the first globally to achieve this level of technology, announced at Global Health Exhibition 2024. Contributes to improving decision-making and enhancing operational efficiency.",
          cta: "Learn More",
          ctaHref: "#contact",
        },
      ],
    },

    /* How It Works */
    howItWorks: {
      badge: "How It Works",
      title: "Your board. Your rules.",
      titleHighlight: "Instant wisdom.",
      subtitle:
        "Three simple steps to unlock a world-class advisory board — available anytime, anywhere.",
      tabs: [
        {
          label: "Demo",
          description: "See the platform in action with a live walkthrough.",
          cards: [
            { title: "App Screenshot", sub: "Dashboard view", lines: ["Your screenshot here", "Replace with real image"] },
            { title: "Board Overview", sub: "Advisor panel", lines: ["See all your advisors", "At a glance"] },
            { title: "Live Chat", sub: "Real-time session", lines: ["Ask questions live", "Get instant answers"] },
            { title: "Insights", sub: "Analytics view", lines: ["Track your decisions", "Measure outcomes"] },
          ],
        },
        {
          label: "Build Your Board",
          description: "Hand-pick AI personas modeled after legendary strategists.",
          cards: [
            { title: "Steve Jobs", sub: "Product Visionary", lines: ["Think different. Simplify.", "Focus on what matters."] },
            { title: "Warren Buffett", sub: "Investment Sage", lines: ["Long-term value creation", "Margin of safety first"] },
            { title: "Elon Musk", sub: "Innovation Driver", lines: ["First principles thinking", "10x moonshot goals"] },
            { title: "Add Advisor", sub: "Customize your board", lines: ["Pick from 50+ personas", "Or create your own"] },
          ],
        },
        {
          label: "Ask Anything",
          description: "Pose any strategic question and get multi-perspective answers.",
          cards: [
            { title: "Market Entry", sub: "Strategic Question", lines: ["Should we expand to EU?", "3 advisors responding..."] },
            { title: "Pricing Strategy", sub: "Revenue Model", lines: ["Premium vs freemium?", "Competitive analysis"] },
            { title: "Team Scaling", sub: "Growth Planning", lines: ["When to hire a CTO?", "Remote vs in-office"] },
            { title: "Product Pivot", sub: "Decision Point", lines: ["B2B or B2C focus?", "Risk assessment ready"] },
          ],
        },
      ],
      starred: "Starred",
      sectionLabel: "Steps",
    },

    /* Features */
    features: {
      badge: "Features",
      title: "Everything you need to",
      titleHighlight: "lead with clarity.",
      subtitle:
        "Noble Mind gives you the tools to think bigger, decide faster, and lead with confidence.",
      tabs: [
        {
          label: "Your Council",
          headline: "Choose Who Sits At Your Table",
          text: "Add any thinker, executive, or domain expert to your virtual board. From Warren Buffett's financial wisdom to Elon Musk's engineering mindset — your council, your rules.",
        },
        {
          label: "Your Question",
          headline: "One Question. Every Perspective.",
          text: "Ask any strategic, financial, or operational question. Each board member responds in their own voice, their own logic, their own way of thinking.",
        },
        {
          label: "The Discussion",
          headline: "Coming Soon",
          text: "Content coming soon.",
        },
        {
          label: "Your Insight",
          headline: "Coming Soon",
          text: "Content coming soon.",
        },
      ],
      advisors: [
        { name: "Warren Buffett", role: "Investment Sage" },
        { name: "Steve Jobs", role: "Product Visionary" },
        { name: "Elon Musk", role: "Innovation Driver" },
        { name: "Indra Nooyi", role: "Strategic Leader" },
        { name: "Ray Dalio", role: "Macro Strategist" },
        { name: "Add New", role: "Your pick" },
      ],
      askPlaceholder: "Should we enter the European market in Q3?",
      askLabel: "Your Question",
      boardLabel: "Your Board",
      comingSoon: "Content coming soon",
    },

    /* Why Us */
    whyUs: {
      badge: "Why Us",
      title: "Why Choose",
      titleHighlight: "Noble Mind",
      subtitle: "Empowering Saudi healthcare with world-class intelligence.",
      tabs: [
        {
          label: "Medical Core",
          headline: "Expertise from the Heart of Healthcare",
          text: "Noble Mind was founded by Saudi doctors who deeply understand healthcare requirements because they worked within it. We innovate practical solutions that focus on empowering healthcare practitioners and improving patient treatment experiences.",
          visualTitle: "Developed by Medical Experts",
          visualSub: "Engineered for real-world clinical workflows and patient care."
        },
        {
          label: "Data Integrity",
          headline: "Absolute Data Sovereignty & Security",
          text: "Our solutions work within the healthcare facility's infrastructure without transferring data outside the Kingdom, ensuring full compliance with national regulations and privacy protection in highly sensitive sectors.",
          visualTitle: "100% Data Protection",
          visualSub: "Fully compliant with national regulations",
          visualBadge: "Verified",
          visualTitle2: "On-Premise Infrastructure",
          visualSub2: "Zero data transfer outside the facility",
        },
        {
          label: "Local Innovation",
          headline: "Technical Leadership Made in the Kingdom",
          text: "We are the first to develop a generative AI platform for healthcare in the Kingdom, supported by our technologies built at the forefront of innovation. World-class technology, developed completely locally.",
          visualTitle: "First in the Kingdom",
        },
      ]
    },

    /* About Us */
    aboutUs: {
      badge: "About",
      title: "Noble Mind",
      description: (
        <>
          In line with the objectives of the <span className="text-[#8874df] font-bold">Kingdom&apos;s Vision 2030</span> to develop the healthcare sector, <span className="text-[#8874df] font-bold">Noble Mind</span> was established in Riyadh in 2023 as a Saudi company specializing in <span className="text-[#8874df] font-semibold">generative artificial intelligence for the healthcare sector</span>. The company is led by elite <span className="text-[#8874df] font-semibold">Saudi doctors</span> who combine medical and technical expertise to bring about a qualitative shift in healthcare services and support local innovation.
        </>
      ),
      location: "Riyadh, Saudi Arabia",
      learnMore: "Contact Us",
    },

    /* Vision & Mission */
    visionSection: {
      badge: "Our Direction",
      title: "Our Vision &",
      titleHighlight: "Mission",
      subtitle: "Rooted in the Kingdom's values and driven by Vision 2030 — we are building a healthier tomorrow.",
      challengesBadge: "Challenges",
      challengesSubtitle: "We understand the real obstacles facing healthcare in Saudi Arabia — and we built Novera to solve them.",
      visionTitle: "Vision",
      visionText: "To be the fundamental pillar of the future healthcare AI ecosystem in the Kingdom, creating a new generation of medicine, made in the Kingdom.",
      ourVisionLabel: "Our Vision",
      missionTitle: "Mission",
      missionText: "To return time and control to the hands of healthcare practitioners and facilities in the Kingdom by building intelligent tools whose mission is to automate work, not care.",
      ourMissionLabel: "Our Mission",
      challengesTitle: "Challenges We Face with Confidence",
      challenges: [
        {
          title: "Accelerating Need for Advanced Care",
          text: "The Saudi healthcare sector is witnessing significant expansion in services and growing demand for innovative solutions that keep pace with the Kingdom's ambitions and ensure a distinguished care experience for citizens and residents.",
        },
        {
          title: "Higher Expectations and More Advanced Care Experiences",
          text: "Today's Saudi patient expects personalized, seamless, and integrated services, consistent with the advanced level the Kingdom has reached, enhancing patient trust in healthcare facilities and ensuring sustained excellence.",
        },
        {
          title: "Empowering Healthcare Practitioners to Focus on Their Most Important Role",
          text: "With the expansion of roles and tasks in the modern system, healthcare practitioners need intelligent tools that enhance their presence with patients and support their professional efficiency, directly reflecting on the quality of health outcomes.",
        },
        {
          title: "Health Data Privacy... A Sovereign Priority",
          text: "Preserving data sovereignty and ensuring its privacy represents a fundamental pillar in digital health transformation. This requires reliable solutions that operate within national borders and adhere to the highest standards of governance and security.",
        }
      ]
    },

    /* Partners */
    partners: {
      badge: "Partners",
      title: "International Trust",
      titleHighlight: "Supporting Our Journey",
      subtitle: "Powered by industry leaders to deliver secure, scalable, and intelligent healthcare solutions.",
      microsoft: "Cloud & AI Infrastructure",
      nvidia: "GPU & Deep Learning"
    },

    /* Quote Banner */
    quote: {
      text: "AI doesn't change the world alone...",
      highlight: "We reshape it with a human touch.",
    },

    /* Contact */
    requestDemo: {
      badge: "Contact",
      title: "Get in",
      titleHighlight: "Touch",
      subtitle: "Ready to see what AI can do for your healthcare organisation? We'd love to show you.",
      fullName: "Full Name",
      email: "Email Address",
      jobTitle: "Job Title / Role",
      message: "Message (optional)",
      submit: "Send Message",
      disclaimer: "No commitment required · We'll respond within 24 hours",
      successTitle: "Thank you!",
      successText: "Your message has been received. Our team will reach out within 24 hours.",
      successReset: "Send another message",
    },

    /* Footer */
    footer: {
      headline: "Where technology enhances human care.",
      subheadline: "",
      cta: "Get Started",
      tagline: "Where technology enhances human care.",
      copyright: "© 2026 Noble Mind. All rights reserved.",
      email: "Email",
      phone: "Phone",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  },

  AR: {
    /* Navbar */
    nav: {
      products: "المنتجات",
      whyUs: "لماذا نحن",
      about: "عن الشركة",
      contact: "تواصل معنا",
      getInTouch: "تواصل معنا",
    },

    /* Hero */
    hero: {
      badge: "بُني للرعاية الصحية السعودية • صُنع في المملكة",
      headline1: "حيث تعزز التكنولوجيا",
      headline2: "الرعاية الإنسانية",
      headline3: "",
      subtext:
        "من الخبرة المباشرة لمقدمي الرعاية الصحية الذين يبنون حلولاً لمرضاهم. نحن نبني ذكاءً اصطناعياً يعزز رحمة وخبرة الأطباء السعوديين.",
      cta: "ابدأ الآن",
      secondary: "تعرف على المزيد",
    },

    /* Our Solution */
    ourSolution: {
      badge: "المنتجات",
      title: "تعرّف على",
      titleHighlight: "NobleMind",
      subtitle1: "ذكاء سريري متوافق مع نظام PDPL",
      subtitle2: "مبني للرعاية الصحية السعودية",
      description:
        "نوبل مايند تقدم حلول ذكاء اصطناعي مبنية سعودياً تعزز الأداء وترفع مستوى التجربة في القطاعات الحيوية. جميع المنصات تُطوَّر وتُدار داخل المملكة، لضمان سيادة البيانات والامتثال الكامل منذ اليوم الأول.",
      products: [
        {
          name: "Novera.MD",
          tagline: "منصة الذكاء السريري",
          para1:
            "واحدة من أوائل منصات الذكاء الاصطناعي التوليدي في الرعاية الصحية عالمياً. تستفيد من أحدث تقنيات الذكاء الاصطناعي بما في ذلك الوكلاء الذكيين والقدرات المتقدمة لفهم لغة الرعاية.",
          para2:
            "تُعيد تعريف الكفاءة السريرية من خلال دعم رحلة الرعاية من التقييم الذكي للأعراض والإحالات المباشرة إلى قرارات العلاج المثلى. توفر إدارة صحية متكاملة مع ضمان سيادة البيانات والامتثال الكامل للوائح الوطنية.",
          cta: "جدولة عرض",
          ctaHref: "#contact",
        },
        {
          name: "ARWA",
          tagline: "مساعد • تكيفي • إنتاجي • لسير العمل",
          para1:
            "وكيل ذكاء اصطناعي يعمل كعضو فعّال في الفريق، على مدار الساعة، متميز بالتكيف والإنتاجية ودعم سير العمل.",
          para2:
            "يتكامل بسلاسة مع الأنظمة الموجودة للتعامل مع المهام التشغيلية وأتمتة العمليات وضمان الامتثال للسياسات. يضع معياراً متفوقاً لتعزيز الكفاءة في القطاعات الحيوية كالرعاية الصحية.",
          cta: "جدولة عرض",
          ctaHref: "#contact",
        },
        {
          name: "Novera Workspace",
          tagline: "بيئة عمل ذكية",
          para1:
            "بديل آمن للمنصات العامة كـ ChatGPT، يعمل داخل مؤسستك بنفس القدرات في البحث وصياغة المستندات وتلخيص المعلومات.",
          para2:
            "تبقى جميع البيانات الحساسة داخل بنيتك التحتية دون مشاركة خارجية. يساعد الفرق على تعزيز الإنتاجية مع ضمان سيادة البيانات وحماية المعلومات في القطاعات التي تتطلب أعلى معايير الأمان.",
          cta: "جرّبه الآن في Noble.sa",
          ctaHref: "https://noble.sa",
        },
        {
          name: "Noble Retrieval",
          tagline: "ذكاء عميق للمستندات",
          para1:
            "قدرة متقدمة لفهم المستندات من خلال تحليل النصوص والجداول والرسوم البيانية كسياق واحد متماسك مع الحفاظ على هيكل المحتوى الأصلي.",
          para2:
            "كانت نوبل مايند من بين الأوائل عالمياً في تحقيق هذا المستوى التقني، أُعلن عنه في المعرض العالمي للصحة 2024. يساهم في تحسين اتخاذ القرار وتعزيز الكفاءة التشغيلية.",
          cta: "اعرف المزيد",
          ctaHref: "#contact",
        },
      ],
    },

    /* How It Works */
    howItWorks: {
      badge: "كيف يعمل",
      title: "مجلسك. قواعدك.",
      titleHighlight: "حكمة فورية.",
      subtitle:
        "ثلاث خطوات بسيطة للوصول إلى مجلس استشاري عالمي المستوى — متاح في أي وقت وأي مكان.",
      tabs: [
        {
          label: "عرض توضيحي",
          description: "شاهد المنصة في العمل من خلال جولة تفاعلية مباشرة.",
          cards: [
            { title: "لقطة التطبيق", sub: "عرض لوحة التحكم", lines: ["لقطة شاشتك هنا", "استبدل بصورة حقيقية"] },
            { title: "نظرة عامة على المجلس", sub: "لوحة المستشارين", lines: ["شاهد جميع مستشاريك", "دفعة واحدة"] },
            { title: "محادثة مباشرة", sub: "جلسة فورية", lines: ["اطرح أسئلتك مباشرة", "احصل على إجابات فورية"] },
            { title: "رؤى تحليلية", sub: "عرض التحليلات", lines: ["تتبع قراراتك", "قِس النتائج"] },
          ],
        },
        {
          label: "ابنِ مجلسك",
          description: "اختر شخصيات ذكاء اصطناعي مستوحاة من أعظم الاستراتيجيين.",
          cards: [
            { title: "ستيف جوبز", sub: "رؤيوي المنتج", lines: ["فكّر بشكل مختلف. بسّط.", "ركّز على ما يهم."] },
            { title: "وارن بافيت", sub: "حكيم الاستثمار", lines: ["خلق قيمة طويلة الأمد", "هامش الأمان أولاً"] },
            { title: "إيلون ماسك", sub: "قائد الابتكار", lines: ["التفكير من المبادئ الأولى", "أهداف قفزة 10 أضعاف"] },
            { title: "أضف مستشاراً", sub: "خصّص مجلسك", lines: ["اختر من 50+ شخصية", "أو أنشئ شخصيتك"] },
          ],
        },
        {
          label: "اسأل أي شيء",
          description: "اطرح أي سؤال استراتيجي واحصل على إجابات متعددة الزوايا.",
          cards: [
            { title: "دخول السوق", sub: "سؤال استراتيجي", lines: ["هل نتوسع في أوروبا؟", "3 مستشارين يردّون..."] },
            { title: "استراتيجية التسعير", sub: "نموذج الإيرادات", lines: ["مميز أم مجاني؟", "تحليل تنافسي"] },
            { title: "توسيع الفريق", sub: "تخطيط النمو", lines: ["متى نوظف مديراً تقنياً؟", "عن بُعد أم في المكتب؟"] },
            { title: "تحويل المنتج", sub: "نقطة قرار", lines: ["B2B أم B2C؟", "تقييم المخاطر جاهز"] },
          ],
        },
      ],
      starred: "المفضلة",
      sectionLabel: "الخطوات",
    },

    /* Features */
    features: {
      badge: "المميزات",
      title: "كل ما تحتاجه",
      titleHighlight: "لتقود بوضوح.",
      subtitle:
        "Noble Mind يمنحك الأدوات لتفكير أوسع، وقرارات أسرع، وقيادة بثقة.",
      tabs: [
        {
          label: "مجلسك",
          headline: "اختر من يجلس على طاولتك",
          text: "أضف أي مفكر أو تنفيذي أو خبير متخصص إلى مجلسك الافتراضي. من حكمة وارن بافيت المالية إلى عقلية إيلون ماسك الهندسية — مجلسك، قواعدك.",
        },
        {
          label: "سؤالك",
          headline: "سؤال واحد. كل وجهات النظر.",
          text: "اطرح أي سؤال استراتيجي أو مالي أو تشغيلي. يردّ كل عضو في المجلس بصوته الخاص، ومنطقه الخاص، وطريقة تفكيره الخاصة.",
        },
        {
          label: "النقاش",
          headline: "قريباً",
          text: "المحتوى قادم قريباً.",
        },
        {
          label: "رؤيتك",
          headline: "قريباً",
          text: "المحتوى قادم قريباً.",
        },
      ],
      advisors: [
        { name: "وارن بافيت", role: "حكيم الاستثمار" },
        { name: "ستيف جوبز", role: "رؤيوي المنتج" },
        { name: "إيلون ماسك", role: "قائد الابتكار" },
        { name: "إندرا نوي", role: "القائدة الاستراتيجية" },
        { name: "راي داليو", role: "استراتيجي الاقتصاد الكلي" },
        { name: "أضف جديداً", role: "اختيارك" },
      ],
      askPlaceholder: "هل يجب أن ندخل السوق الأوروبية في الربع الثالث؟",
      askLabel: "سؤالك",
      boardLabel: "مجلسك",
      comingSoon: "المحتوى قادم قريباً",
    },

    /* Why Us */
    whyUs: {
      badge: "لماذا نحن",
      title: "لماذا تختار",
      titleHighlight: "نوبل مايند",
      subtitle: "تمكين الرعاية الصحية السعودية بذكاء عالمي المستوى.",
      tabs: [
        {
          label: "الأساس الطبي",
          headline: "خبرة من قلب الرعاية الصحية",
          text: "تأسست نوبل مايند على يد أطباء سعوديين يفهمون متطلبات الرعاية الصحية بعمق لأنهم عملوا فيها. نبتكر حلولاً عملية تركز على تمكين ممارسي الرعاية الصحية وتحسين تجارب علاج المرضى.",
          visualTitle: "مُطوَّر بواسطة خبراء طبيين",
          visualSub: "مصمم لسير العمل السريري الواقعي ورعاية المرضى."
        },
        {
          label: "نزاهة البيانات",
          headline: "السيادة المطلقة للبيانات والأمان",
          text: "تعمل حلولنا داخل البنية التحتية لمنشأة الرعاية الصحية دون نقل البيانات خارج المملكة، مما يضمن الامتثال الكامل للوائح الوطنية وحماية الخصوصية في القطاعات الحساسة.",
          visualTitle: "حماية البيانات بنسبة %100",
          visualSub: "متوافق بالكامل مع اللوائح الوطنية",
          visualBadge: "مُوثّق",
          visualTitle2: "بنية تحتية محلية",
          visualSub2: "لا يوجد نقل للبيانات خارج المنشأة",
        },
        {
          label: "ابتكار محلي",
          headline: "ريادة تقنية صُنعت في المملكة",
          text: "نحن أول من يطوّر منصة ذكاء اصطناعي توليدي للرعاية الصحية في المملكة، بدعم تقنياتنا المبنية في طليعة الابتكار. تقنية عالمية المستوى، تُطوَّر بالكامل محلياً.",
          visualTitle: "الأول في المملكة",
        },
      ]
    },

    /* About Us */
    aboutUs: {
      badge: "عن نوبل مايند",
      title: "من نحن",
      description: (
        <>
          تماشياً مع أهداف <span className="text-[#8874df] font-bold">رؤية المملكة 2030</span> لتطوير قطاع الرعاية الصحية، تأسست <span className="text-[#8874df] font-bold">نوبل مايند</span> في الرياض عام 2023 كشركة سعودية متخصصة في <span className="text-[#8874df] font-semibold">الذكاء الاصطناعي التوليدي لقطاع الرعاية الصحية</span>. تقود الشركة نخبة من <span className="text-[#8874df] font-semibold">الأطباء السعوديين</span> للجمع بين الخبرة الطبية والتقنية لإحداث نقلة نوعية في خدمات الرعاية الصحية ودعم الابتكار المحلي.
        </>
      ),
      location: "الرياض، المملكة العربية السعودية",
      learnMore: "تواصل معنا",
    },

    /* Vision & Mission */
    visionSection: {
      badge: "توجهنا",
      title: "رؤيتنا و",
      titleHighlight: "رسالتنا",
      subtitle: "انطلاقاً من قيم المملكة وبدافع رؤية 2030 — نبني مستقبلاً صحياً أفضل.",
      challengesBadge: "التحديات",
      challengesSubtitle: "نفهم التحديات الحقيقية التي تواجه الرعاية الصحية في المملكة — وبنينا نوفيرا لحلها.",
      visionTitle: "الرؤية",
      visionText: "لتكون الركيزة الأساسية لمستقبل منظومة الذكاء الاصطناعي في الرعاية الصحية بالمملكة، وخلق جيل جديد من الطب، صُنع في المملكة.",
      ourVisionLabel: "رؤيتنا",
      missionTitle: "المهمة",
      missionText: "إعادة الوقت والتحكم إلى أيدي الممارسين الصحيين والمنشآت في المملكة من خلال بناء أدوات ذكية مهمتها أتمتة العمل، وليس الرعاية.",
      ourMissionLabel: "رسالتنا",
      challengesTitle: "تحديات نواجهها بثقة",
      challenges: [
        {
          title: "الحاجة المتسارعة للرعاية المتقدمة",
          text: "يشهد قطاع الرعاية الصحية السعودي توسعاً كبيراً في الخدمات وطلباً متزايداً على الحلول المبتكرة التي تواكب طموحات المملكة وتضمن تجربة رعاية متميزة للمواطنين والمقيمين.",
        },
        {
          title: "توقعات أعلى وتجارب رعاية أكثر تقدماً",
          text: "يتوقع المريض السعودي اليوم خدمات مخصصة وسلسة ومتكاملة، تتماشى مع المستوى المتقدم الذي وصلت إليه المملكة، مما يعزز ثقة المرضى في المنشآت الصحية ويضمن التميز المستدام.",
        },
        {
          title: "تمكين الممارسين الصحيين للتركيز على دورهم الأهم",
          text: "مع توسع الأدوار والمهام في النظام الحديث، يحتاج الممارسون الصحيون إلى أدوات ذكية تعزز من تواجدهم مع المرضى وتدعم كفاءتهم المهنية، مما ينعكس مباشرة على جودة النتائج الصحية.",
        },
        {
          title: "خصوصية البيانات الصحية... أولوية سيادية",
          text: "يمثل الحفاظ على سيادة البيانات وضمان خصوصيتها ركيزة أساسية في التحول الرقمي الصحي. ويتطلب ذلك حلولاً موثوقة تعمل داخل الحدود الوطنية وتلتزم بأعلى معايير الحوكمة والأمن.",
        }
      ]
    },

    /* Partners */
    partners: {
      badge: "الشركاء",
      title: "ثقة دولية",
      titleHighlight: "تدعم رحلتنا",
      subtitle: "بدعم من قادة الصناعة لتقديم حلول رعاية صحية ذكية وقابلة للتطوير وآمنة.",
      microsoft: "البنية التحتية السحابية والذكاء الاصطناعي",
      nvidia: "معالجة الرسومات والالتعلم العميق"
    },

    /* Quote Banner */
    quote: {
      text: "الذكاء الاصطناعي لا يُغيّر العالم وحده ..",
      highlight: "نحن من يُعيد تشكيله بلمسةٍ إنسانية.",
    },

    /* Contact */
    requestDemo: {
      badge: "تواصل معنا",
      title: "ابدأ",
      titleHighlight: "التواصل",
      subtitle: "هل أنت مستعدّ لرؤية ما يمكن للذكاء الاصطناعي تحقيقه لمنظومتك الصحية؟ يسعدنا أن نعرض لك ذلك.",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      jobTitle: "المسمى الوظيفي / الدور",
      message: "رسالة (اختياري)",
      submit: "إرسال الرسالة",
      disclaimer: "لا التزام مطلوب · سنردّ خلال 24 ساعة",
      successTitle: "شكراً لك!",
      successText: "تم استلام رسالتك. سيتواصل معك فريقنا خلال 24 ساعة.",
      successReset: "إرسال رسالة أخرى",
    },

    /* Footer */
    footer: {
      headline: "ذكاء سريري مدعوم بالذكاء الاصطناعي لفرق الرعاية الصحية.",
      subheadline: "دع الذكاء الاصطناعي يتولى سير العمل — لتركز أنت على الرعاية.",
      cta: "ابدأ الآن",
      tagline: "حيث تعزز التكنولوجيا الرعاية الإنسانية.",
      copyright: "© 2026 Noble Mind. جميع الحقوق محفوظة.",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
  },
} as const;

export type Translations = typeof translations.EN;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("AR");

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.dir = l === "AR" ? "rtl" : "ltr";
    document.documentElement.lang = l === "AR" ? "ar" : "en";
  };

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "ar";
  }, []);

  const t = translations[lang] as Translations;
  const isRTL = lang === "AR";

  return (
    <I18nContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
