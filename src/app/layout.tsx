import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { ScrollToTop } from "@/components/scroll-to-top";
import { PageReveal } from "@/components/page-reveal";
import { I18nProvider } from "@/context/i18n-context";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const siteUrl = "https://noblemind.sa/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NobleMind – AI-Powered Healthcare Platform made in Saudi Arabia",
    template: "%s | NobleMind",
  },
  description:
    "NobleMind empowers Saudi healthcare providers with generative AI — from clinical intelligence (NobleMind.MD) to secure workspaces and deep document retrieval. Built in the Kingdom for Vision 2030.",
  keywords: [
    "AI healthcare Saudi Arabia",
    "generative AI healthcare",
    "NobleMind.MD",
    "ARWA AI agent",
    "Noble Retrieval",
    "healthcare AI platform",
    "Vision 2030 healthcare",
    "clinical AI",
    "Saudi health tech",
    "NobleMind",
  ],
  authors: [{ name: "NobleMind", url: siteUrl }],
  creator: "NobleMind",
  publisher: "NobleMind",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "NobleMind",
    title: "NobleMind – AI-Powered Healthcare Platform for Saudi Arabia",
    description:
      "Generative AI solutions purpose-built for Saudi healthcare. Empowering clinicians, protecting data sovereignty, driving Vision 2030.",
    images: [
      {
        url: "/screenshot.jpg",
        width: 1200,
        height: 630,
        alt: "Novera – AI Healthcare Platform",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NobleMind – AI-Powered Healthcare Platform for Saudi Arabia",
    description:
      "Generative AI solutions purpose-built for Saudi healthcare. Empowering clinicians, protecting data sovereignty.",
    images: ["/screenshot.jpg"],
    creator: "@noblemind_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/mini-logo.png",
    shortcut: "/mini-logo.png",
    apple: "/mini-logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Novera",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Novera is a Saudi company specializing in generative AI for the healthcare sector, helping clinicians and facilities leverage intelligent automation while preserving full data sovereignty.",
  foundingDate: "2023",
  foundingLocation: {
    "@type": "Place",
    name: "Riyadh, Saudi Arabia",
  },  
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${siteUrl}/#contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} font-sans antialiased`}
      >
        <I18nProvider>
          <PageReveal />
          <Navbar />
          {children}
          <ScrollToTop />
        </I18nProvider>
      </body>
    </html>
  );
}
