'use client';
import AboutMe from "@/components/AboutMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Help from "@/components/Help";
import HeroSection from "@/components/HeroSection";
import Range from "@/components/Range";
import Space from "@/components/Space";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef(null);
  const faqRef = useRef(null);
  const consultsRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToRefs = {
    homeRef,
    faqRef,
    consultsRef,
    aboutMeRef
  };

  return (
    <main>
      <Header scrollToRefs={scrollToRefs} />
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <Range />

      <div ref={consultsRef}>
        <Help />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <Space />F
      <Footer />
    </main>
  );
}
