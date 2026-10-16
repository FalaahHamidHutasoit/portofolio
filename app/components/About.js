export default function About() {
  const stats = [
    { value: "6", label: "Project", icon: "fas fa-layer-group" },
    { value: "2", label: "Sertifikasi BNSP", icon: "fas fa-award" },
    { value: "1", label: "Konferensi Internasional", icon: "fas fa-microphone-alt" },
  ];

  // Urutan dari yang terbaru
  const timeline = [
    { year: "Juli 2026", title: "Presenter, IC-BESTS International Conference", desc: "Politeknik LP3I Jakarta", color: "bg-emerald-500" },
    { year: "2025", title: "Sertifikasi Database Administrator", desc: "Sertifikasi kompetensi BNSP", color: "bg-blue-500" },
    { year: "2024", title: "Sertifikat TOK (Tenaga Operator Komputer)", desc: "Sertifikasi kompetensi BNSP", color: "bg-indigo-500" },
    { year: "Saat ini", title: "Manajemen Informatika", desc: "Politeknik LP3I Jakarta", color: "bg-slate-400" },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50">
      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      ></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0 translate-x-[-20%] translate-y-[-20%]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0 translate-x-[20%] translate-y-[20%]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Tentang Saya</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Kiri: teks */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Web Developer</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Sebagai mahasiswa Manajemen Informatika di Politeknik LP3I Jakarta, saya memiliki minat yang kuat di bidang
                Web Development. Saya senang membangun aplikasi web dari tampilan hingga database: merancang antarmuka yang
                nyaman dipakai, menyusun logika aplikasi yang terstruktur, dan mengembangkan sistem yang efisien serta aman.
                Bagi saya, web yang bagus bukan hanya tentang menulis kode, tetapi juga memberikan pengalaman terbaik bagi
                penggunanya.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <i className="fas fa-graduation-cap text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">Pendidikan</p>
                    <p className="font-semibold text-slate-900">Manajemen Informatika</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">Lokasi</p>
                    <p className="font-semibold text-slate-900">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kanan: statistik + timeline */}
            <div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-4 text-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <i className={`${s.icon} text-blue-500 mb-2`}></i>
                    <p className="text-3xl font-extrabold text-slate-900 leading-none mb-1">{s.value}</p>
                    <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">Perjalanan & Pencapaian</h4>
              <ol className="relative border-l-2 border-slate-100 ml-2 space-y-6">
                {timeline.map((t) => (
                  <li key={t.title} className="pl-6 relative">
                    <span className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ring-4 ring-white ${t.color}`}></span>
                    <p className="text-xs font-semibold text-blue-600 mb-0.5">{t.year}</p>
                    <p className="font-semibold text-slate-900 text-[15px] leading-snug">{t.title}</p>
                    <p className="text-sm text-slate-500">{t.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}