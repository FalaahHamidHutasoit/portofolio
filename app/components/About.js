export default function About() {
  // Urutan dari yang terbaru — tiap item dikasih konteks, bukan cuma judul + tahun.
  const timeline = [
    { year: "Juli 2026", title: "Presenter, IC-BESTS International Conference", desc: "Presentasi di konferensi internasional, Politeknik LP3I Jakarta", color: "bg-emerald-500" },
    { year: "2025", title: "Sertifikasi Database Administrator", desc: "Sertifikasi kompetensi BNSP — database yang gua pakai di semua 6 proyek", color: "bg-blue-500" },
    { year: "2024", title: "Sertifikat TOK (Tenaga Operator Komputer)", desc: "Sertifikasi kompetensi BNSP", color: "bg-indigo-500" },
    { year: "Saat ini", title: "Manajemen Informatika", desc: "Politeknik LP3I Jakarta", color: "bg-slate-400" },
  ];

  const blocks = [
    {
      kicker: "KENAPA WEB + DATABASE",
      text: "Gua paling betah di web karena hasilnya kelihatan langsung — tampilannya bisa dipakai orang, datanya rapi di belakang. Makanya 6 proyek gua semuanya begitu: PHP / CodeIgniter 4 di belakang, MySQL di bawahnya, dari tampilan sampai database satu sistem yang utuh.",
    },
    {
      kicker: "CARA GUA KERJA",
      text: "Gua mulai dari yang dipakai orang dulu: tampilannya enak dilihat, alurnya jelas. Baru ke belakangnya — logika aplikasi yang terstruktur, database yang rapi, dan sistem yang efisien serta aman. Web yang bagus buat gua bukan cuma kodenya jalan, tapi orang yang makai nggak bingung.",
    },
    {
      kicker: "LAGI FOKUS KE APA",
      text: "Sekarang gua mahasiswa Manajemen Informatika di Politeknik LP3I Jakarta, lagi mendalami web development dan database. Terbuka buat magang, proyek, atau kolaborasi — yang penting bisa belajar dan hasilnya kepakai beneran.",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0a1730]">
      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgba(148,163,184,0.25) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      ></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full filter blur-3xl opacity-60 z-0 translate-x-[-20%] translate-y-[-20%]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/25 rounded-full filter blur-3xl opacity-60 z-0 translate-x-[20%] translate-y-[20%]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header rata kiri, bukan template tengah */}
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-xs sm:text-sm text-blue-400 tracking-wider mb-3">tentang saya</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-[1.05] tracking-tight mb-4">
            Developer yang suka
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              ngulik sampai ke database-nya.
            </span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Bukan cuma tampilan. Gua ngurusin sistemnya dari depan sampai belakang — dan itu yang bikin gua betah.
          </p>
        </div>

        <div className="bg-[#0b1836]/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 hover:border-blue-500/30 transition-colors">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Kiri: 3 blok cerita pendek, bukan satu paragraf CV */}
            <div className="lg:col-span-7 space-y-9">
              {blocks.map((b) => (
                <div key={b.kicker}>
                  <p className="font-mono text-[11px] tracking-wider text-blue-400 mb-2">{b.kicker}</p>
                  <p className="text-slate-300 leading-relaxed text-[15px]">{b.text}</p>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <i className="fas fa-graduation-cap text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-0.5">Pendidikan</p>
                    <p className="font-semibold text-slate-100">Manajemen Informatika</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-0.5">Lokasi</p>
                    <p className="font-semibold text-slate-100">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kanan: sekarang + timeline berkonten */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-5 mb-8">
                <p className="font-mono text-[11px] tracking-wider text-blue-400 mb-1">SEKARANG</p>
                <p className="font-bold text-slate-100">Mahasiswa MI — Politeknik LP3I Jakarta</p>
                <p className="text-sm text-slate-400 mt-1">Terbuka buat magang, proyek, dan kolaborasi.</p>
              </div>

              <h4 className="text-sm font-bold text-slate-100 uppercase tracking-wider mb-5">Perjalanan & Pencapaian</h4>
              <ol className="relative border-l-2 border-white/10 ml-2 space-y-6">
                {timeline.map((t) => (
                  <li key={t.title} className="pl-6 relative">
                    <span className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ring-4 ring-[#0b1836] ${t.color}`}></span>
                    <p className="text-xs font-semibold text-blue-400 mb-0.5">{t.year}</p>
                    <p className="font-semibold text-slate-100 text-[15px] leading-snug">{t.title}</p>
                    <p className="text-sm text-slate-400">{t.desc}</p>
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
