"use client";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Sertifikat", id: "certificates" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Tandai menu aktif sesuai section yang sedang terlihat
  useEffect(() => {
    const ids = [...menuItems.map((m) => m.id), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Bayangan navbar hanya muncul setelah di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id) =>
    `relative font-medium transition-colors text-sm uppercase tracking-wide pb-1 ${
      active === id ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" aria-label="Kembali ke atas" className="flex-shrink-0 font-extrabold text-2xl text-blue-600 tracking-wider">
            F<span className="text-slate-800">H.</span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
                {item.name}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-5 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow-md shadow-blue-500/30 hover:bg-blue-700 transition-all"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Hamburger HP */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={isOpen}
              className="text-slate-600 hover:text-blue-600 focus:outline-none text-2xl w-10 h-10 flex items-center justify-center"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown HP */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all ${
                  active === item.id ? "text-blue-600 bg-blue-50" : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center mt-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}