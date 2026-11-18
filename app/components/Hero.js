/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  const socials = [
    { icon: "fab fa-github", label: "GitHub", href: "https://github.com/FalaahHamidHutasoit" },
    { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/falaah-hamid-hutasoit-b21b29323/" },
  ];

  const stats = [
    { value: "6+", label: "Projects" },
    { value: "2", label: "Sertifikasi BNSP" },
    { value: "1", label: "Konferensi Internasional" },
  ];

  // Chip melayang di sekitar kartu foto — ditaruh di tepi bawah/samping,
  // bukan di area wajah (foto portrait, wajah di bagian atas).
  const floatingChips = [
    { label: "PHP", className: "top-1/2 -left-2 sm:-left-4", anim: "animate-float" },
    { label: "MySQL", className: "top-2/3 -right-2 sm:-right-4", anim: "animate-float-slow" },
    { label: "Next.js", className: "bottom-4 -left-3 sm:-left-5", anim: "animate-float" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-16 relative overflow-hidden bg-[#050b1e]">
      {/* Latar: dot grid halus + glow */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{ backgroundImage: "radial-gradient(rgba(148,163,184,0.35) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      ></div>
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] bg-blue-600/40 rounded-full filter blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] bg-cyan-500/25 rounded-full filter blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Label mono + status */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 sm:mb-6">
          <p className="font-mono text-xs sm:text-sm text-blue-400 tracking-wider">// portfolio — 2026</p>
          <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available to work
          </span>
        </div>

        {/* Headline raksasa selebar container */}
        <h1 className="font-extrabold tracking-tight leading-[0.95] text-slate-100 mb-10 sm:mb-14">
          <span className="block text-[11vw] sm:text-7xl lg:text-8xl">FALAAH HAMID</span>
          <span className="block text-[11vw] sm:text-7xl lg:text-8xl text-outline">HUTASOIT</span>
        </h1>

        {/* Baris 12 kolom: teks 7 — foto 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Kiri: peran, bio, tombol, sosial, statistik */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Web Developer
            </h2>

            <p className="text-slate-400 mb-8 max-w-xl leading-relaxed text-sm sm:text-base">
              Mahasiswa Manajemen Informatika yang suka membangun aplikasi web yang rapi, aman, dan nyaman dipakai,
              dari tampilan sampai database.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/40 hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-layer-group"></i> Lihat Project
              </a>
              <a
                href="/cv-falaah.pdf"
                download="CV-falaah.pdf"
                className="px-8 py-3.5 rounded-xl bg-[#0b1836] text-slate-100 font-semibold border border-white/10 hover:border-blue-500 hover:text-blue-300 transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
            </div>

            {/* Sosial + ajakan kontak */}
            <div className="flex items-center gap-4 mb-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-[#0b1836] border border-white/10 shadow-sm flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
              <a href="#contact" className="text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors">
                Atau langsung <span className="underline underline-offset-4">hubungi saya →</span>
              </a>
            </div>

            {/* Statistik — angka yang sama seperti di About */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 font-mono">
              {stats.map((s) => (
                <span key={s.label} className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-semibold text-slate-100">{s.value}</span>
                  <span className="text-xs sm:text-sm text-slate-400">{s.label}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Kanan: foto portrait (bukan lingkaran) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-sm lg:rotate-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-40 animate-pulse"></div>

              <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 p-1.5 shadow-2xl shadow-blue-500/30 group">
                <div className="relative rounded-[calc(1.5rem-6px)] bg-[#0b1836] overflow-hidden aspect-[3/4]">
                  <img
                    src="/falaah.jpg"
                    alt="Foto Falaah Hamid Hutasoit"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#050b1e]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-slate-100">Available to work</span>
                  </div>
                </div>
              </div>

              {/* Chip teknologi melayang */}
              {floatingChips.map((chip) => (
                <span
                  key={chip.label}
                  className={`absolute ${chip.className} ${chip.anim} z-10 px-3 py-1.5 rounded-full bg-[#0b1836]/90 backdrop-blur-md border border-blue-500/30 text-xs font-mono font-medium text-blue-300 shadow-lg shadow-blue-500/20`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Strip terminal — selebar container */}
        <div className="mt-12 sm:mt-16 text-left rounded-2xl bg-[#071022] border border-white/10 shadow-lg shadow-blue-500/10 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
            <span className="ml-2 font-mono text-[11px] text-slate-500">developer.js</span>
            <span className="ml-auto font-mono text-[11px] text-slate-500 hidden sm:block">$ npm run dev</span>
          </div>
          <pre className="px-4 py-3 font-mono text-[12px] sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto"><code><span className="text-blue-400">const</span> developer = {"{"}{"\n"}  stack: [<span className="text-cyan-300">&quot;PHP&quot;</span>, <span className="text-cyan-300">&quot;CodeIgniter 4&quot;</span>, <span className="text-cyan-300">&quot;MySQL&quot;</span>, <span className="text-cyan-300">&quot;Next.js&quot;</span>],{"\n"}  focus: <span className="text-cyan-300">&quot;web + database + security&quot;</span>{"\n"}{"}"};</code></pre>
        </div>
      </div>
    </section>
  );
}
