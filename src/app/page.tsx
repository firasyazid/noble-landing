import { HeroSection } from "@/components/hero-section";
import { OurSolution } from "@/components/our-solution";
import { WhySection } from "@/components/why-section";
import { AboutSection } from "@/components/about-section";
import { VisionSection } from "@/components/vision-section";
import { PartnersSection } from "@/components/partners-section";
import { QuoteBanner } from "@/components/quote-banner";
import { RequestDemo } from "@/components/request-demo";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection />

      {/* Our Solution */}
      <OurSolution />

      

      {/* Why Choose Us */}
      <WhySection />

      {/* About Section */}
      <AboutSection />

      {/* Vision & Mission */}
      <VisionSection />

      {/* Partners */}
      <PartnersSection />

      {/* Quote Banner */}
      <QuoteBanner />

      {/* Request Demo */}
      <RequestDemo />

      {/* Footer */}
      <Footer />
    </main>
  );
}
