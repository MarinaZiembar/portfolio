import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Works from "@/components/Works";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { marqueeWords } from "@/data/content";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee words={marqueeWords} />
        <Works />
        <Experience />
        <Marquee words={["Diseño", "Código", "Tipografía", "Movimiento", "Composición", "Detalle"]} tone="ink" baseSpeed={0.45} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
