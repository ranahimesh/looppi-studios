import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Community from "@/components/Community";
import Careers from "@/components/Careers";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />

        <Community />

        <Careers />

        <News />

        <Contact />
      </main>

      <Footer />
    </>
  );
}