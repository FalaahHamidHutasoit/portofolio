import Hero from "./components/Hero";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Komponen Hero diaktifkan di sini */}
      <Hero />
      <About/>
      <Certificates/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}