import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Help from "@/components/Help";
import HeroSection from "@/components/HeroSection";
import Range from "@/components/Range";

export default function Home() {
  return (
    <main>
      <Header id="inicio" />
      <HeroSection />
      <Range />
      <Help />
      <AboutMe />
    </main>
  );
}
