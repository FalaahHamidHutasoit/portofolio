"use client";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 font-extrabold text-2xl text-blue-600 tracking-wider">
            F<span className="text-slate-800">H.</span>
          </div>

          {/* Menu Desktop (Sembunyi di HP) */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a key={index} href={item.link} className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide">
                {item.name}
              </a>
            ))}
          </div>

          {/* Tombol Hamburger HP */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-slate-600 hover:text-blue-600 focus:outline-none text-2xl transition-transform"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu HP */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}