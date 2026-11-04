import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee, { MarqueeDesign } from "@/components/Marquee";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import About, { Background } from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { marqueeWords } from "@/data/content";
import { LanguageProvider } from "@/i18n/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee words={marqueeWords} />
        <About />
        <Works />
        <Experience />
        <MarqueeDesign />
        <Background />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
