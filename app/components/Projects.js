/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

// Badge teknologi: satu gaya netral supaya konsisten
const badge = "bg-[#071022] text-slate-300 border border-white/10";

const projectList = [
  {
    id: 1,
    icon: "fas fa-store",
    coverText: "E-Commerce RELASKA",
    title: "Sistem Katalog & E-Commerce Sparepart",
    bgGradient: "from-cyan-500 to-blue-600",
    image: "/projects/relaska.jpg", // screenshot homepage RELASKA (toko), 1917x910
    techs: ["CodeIgniter 4", "MySQL"],
    description:
      "Platform e-commerce yang dirancang khusus untuk penjualan dan manajemen katalog sparepart komputer. Dilengkapi pengelolaan inventaris yang efisien, pencarian produk dinamis, dan struktur database yang teroptimasi untuk performa tinggi.",
    links: { demo: "https://relaska.my.id/", github: "https://github.com/FalaahHamidHutasoit/relaska-computer" },
  },
  {
    id: 2,
    icon: "fas fa-futbol",
    coverText: "Futsal Booking System",
    title: "Futsal Field Booking System",
    bgGradient: "from-blue-600 to-indigo-800",
    image: "",
    techs: ["React", "Next.js", "Prisma ORM", "MySQL"],
    description:
      "Sistem manajemen komprehensif untuk pemesanan lapangan futsal, pengelolaan jadwal, dan pemrosesan pembayaran secara aman.",
    links: { demo: "#", github: "https://github.com/FalaahHamidHutasoit/Futsal-Web" },
  },
  {
    id: 3,
    icon: "fas fa-cash-register",
    coverText: "Sistem POS",
    title: "Sistem Point of Sale (POS)",
    bgGradient: "from-orange-500 to-amber-500",
    image: "",
    techs: ["CodeIgniter 4", "MySQL"],
    description:
      "Aplikasi Point of Sale dan manajemen inventaris untuk operasional. Dilengkapi penanganan transaksi kasir, cetak struk otomatis, serta modul stock opname untuk melacak ketersediaan bahan baku dan riwayat keluar-masuk barang secara real-time.",
    links: { demo: "#", github: "https://github.com/FalaahHamidHutasoit/Point-Of-Sale-System" },
  },
  {
    id: 4,
    icon: "fas fa-wallet",
    coverText: "Finance Tracker",
    title: "Sistem Manajemen Kas & Keuangan",
    bgGradient: "from-emerald-500 to-green-600",
    image: "",
    techs: ["CodeIgniter 4", "MySQL"],
    description:
      "Aplikasi web cash management untuk mencatat pemasukan, melacak pengeluaran, dan menghitung saldo secara presisi. Mengimplementasikan struktur aplikasi yang solid dengan pelaporan transaksi komprehensif untuk memantau arus kas.",
    links: { demo: "#", github: "https://github.com/FalaahHamidHutasoit/Finance-Tracker" },
  },
  {
    id: 5,
    icon: "fas fa-user-graduate",
    coverText: "Sistem Plotting Akademik",
    title: "Sistem Plotting Akademik Dosen dan Mahasiswa",
    bgGradient: "from-violet-500 to-indigo-600",
    image: "",
    techs: ["PHP Native", "MySQL"],
    description:
      "Sistem informasi akademik berbasis web untuk mengotomatisasi pemetaan dosen pembimbing dengan mahasiswa. Menonjolkan efisiensi manipulasi database relasional dan pengelolaan data yang terstruktur.",
    links: { demo: "#", github: "https://github.com/FalaahHamidHutasoit/Ploting-Dosen" },
  },
  {
    id: 6,
    icon: "fas fa-newspaper",
    coverText: "Portal Berita",
    title: "Sistem Informasi Berita",
    bgGradient: "from-slate-600 to-slate-800",
    image: "/projects/portal-berita.jpg",
    techs: ["PHP Native", "MySQL"],
    description:
      "Portal berita berbasis web dengan pengelolaan artikel (CRUD), kategorisasi konten, dan manajemen media melalui dashboard admin yang terintegrasi.",
    links: { demo: "#", github: "https://github.com/FalaahHamidHutasoit/Portal-Berita" },
  },
];

// Layout bento per proyek (grid 12 kolom di lg):
// baris 1: RELASKA 8 (horizontal) + Futsal 4 (tinggi)
// baris 2: POS 4 + Finance 4 + Plotting 4
// baris 3: Portal Berita 12 (horizontal penuh)
const bentoLayout = {
  1: { span: "md:col-span-2 lg:col-span-8", horizontal: false, coverWidth: "", tall: false },
  2: { span: "lg:col-span-4", horizontal: false, coverWidth: "", tall: false },
  3: { span: "lg:col-span-4", horizontal: false, coverWidth: "", tall: false },
  4: { span: "lg:col-span-4", horizontal: false, coverWidth: "", tall: false },
  5: { span: "lg:col-span-4", horizontal: false, coverWidth: "", tall: false },
  6: { span: "md:col-span-2 lg:col-span-12", horizontal: true, coverWidth: "lg:w-3/5", tall: false },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  // Tampilan awal: RELASKA + 2 kartu bento berikutnya; semua 6 saat dibuka
  const displayedProjects = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-[#0a1730]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <p className="font-mono text-xs sm:text-sm text-blue-400 tracking-wider mb-2">selected work</p>
            <h2 className="text-4xl font-extrabold text-slate-100 mb-3">Projects</h2>
            <p className="text-slate-400 mb-4 max-w-xl">Beberapa sistem yang pernah aku bangun, dari e-commerce sampai aplikasi kasir.</p>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-2 group transition-colors cursor-pointer"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua (${projectList.length})`}
            <i className={`fas fa-arrow-right transform transition-transform ${showAll ? "-scale-x-100" : "group-hover:translate-x-1"}`}></i>
          </button>
        </div>

        {/* Grid bento 12 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {displayedProjects.map((project) => {
            const hasDemo = project.links.demo !== "#";
            const hasGithub = project.links.github !== "#";
            const layout = bentoLayout[project.id];
            const index = String(project.id).padStart(2, "0");
            const chromeUrl = hasDemo
              ? project.links.demo.replace(/^https?:\/\//, "")
              : project.links.github.replace(/^https?:\/\//, "");

            return (
              <article
                key={project.id}
                className={`flex flex-col bg-[#0b1836] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.45)] ${layout.span} ${
                  layout.horizontal ? "lg:flex-row" : ""
                }`}
              >
                {/* Browser chrome bar + cover */}
                <div className={`flex flex-col ${layout.horizontal ? layout.coverWidth + " lg:shrink-0" : ""}`}>
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-[#071022] border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shrink-0"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 shrink-0"></span>
                    <span className="ml-1 font-mono text-[11px] text-slate-400 truncate">{chromeUrl}</span>
                  </div>

                  {/* Cover: persegi panjang landscape 16:9, bukan memanjang ke bawah.
                      Kalau horizontal (Portal Berita, tanpa gambar), cover mengisi penuh sisi kiri. */}
                  <div
                    className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${project.bgGradient} ${
                      layout.horizontal ? "h-52 sm:h-60 lg:h-full lg:flex-1 lg:min-h-[280px]" : "w-full aspect-[16/9]"
                    }`}
                  >
                    {project.image ? (
                      <img src={project.image} alt={`Screenshot ${project.title}`} className="absolute inset-0 w-full h-full object-cover object-top" />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                        ></div>
                        <i className={`${project.icon} absolute -right-4 -bottom-6 text-[9rem] text-white/15`}></i>
                        <div className="relative text-center px-6 py-8">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-3xl">
                            <i className={project.icon}></i>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">{project.coverText}</h3>
                        </div>
                      </>
                    )}
                    {/* Nomor indeks bento */}
                    <span className="absolute top-3 right-4 font-mono text-4xl font-bold text-white/25 select-none">{index}</span>
                    {hasDemo && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071022]/90 text-emerald-400 text-xs font-bold flex items-center gap-1.5 border border-emerald-500/30">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-7 sm:p-9">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-xs font-semibold ${badge}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3">{project.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-[15px] mb-8">{project.description}</p>

                  {/* Tombol berlabel */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    {hasDemo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/30"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i> Live Demo
                      </a>
                    )}
                    {hasGithub && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#071022] text-slate-100 text-sm font-semibold border border-white/10 hover:border-blue-500 hover:text-blue-300 transition-all flex items-center gap-2"
                      >
                        <i className="fab fa-github"></i> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
