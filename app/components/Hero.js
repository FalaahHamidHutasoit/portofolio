/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  const socials = [
    { icon: "fab fa-github", label: "GitHub", href: "https://github.com/FalaahHamidHutasoit" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/falaah-hamid-hutasoit-b21b29323/" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden">
      {/* Latar: dot grid halus + glow */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      ></div>
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] bg-blue-300/30 rounded-full filter blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] bg-indigo-300/20 rounded-full filter blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
          {/* Foto */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-600/20 scale-105"></div>

              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 shadow-2xl overflow-hidden group">
                <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="/falaah.jpg"
                    alt="Foto Falaah Hamid Hutasoit"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 bg-white/90 backdrop-blur-md border border-white px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] md:text-xs font-bold text-slate-800">Available to work</span>
              </div>
            </div>
          </div>

          {/* Teks */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs sm:text-sm mb-5">
              <span></span> Halo, saya
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-3">
              Falaah Hamid Hutasoit
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
              Web Developer
            </h2>

            <p className="text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base">
              Mahasiswa Manajemen Informatika yang suka membangun aplikasi web yang rapi, aman, dan nyaman dipakai,
              dari tampilan sampai database.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-layer-group"></i> Lihat Project
              </a>
              <a
                href="/cv-falaah.pdf"
                download="CV-falaah.pdf"
                className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>

            {/* Sosial + ajakan kontak */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
              <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Atau langsung <span className="underline underline-offset-4">hubungi saya →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}