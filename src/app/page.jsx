import AboutMe from "@/components/AboutMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import HeroSection from "@/components/HeroSection";
import Range from "@/components/Range";
import Space from "@/components/Space";

export default function Home() {

  return (
    <main>
      <Header />
      <HeroSection />
      <Range />
      <Help />
      <AboutMe />
      <FAQ />
      <Space />
      <Footer />
    </main>
  );
}
