import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b1e] text-slate-200">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <BackToTop />
    </main>
  );
}
