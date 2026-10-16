/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

// Badge teknologi: satu gaya netral supaya konsisten
const badge = "bg-slate-100 text-slate-700 border border-slate-200";

const projectList = [
  {
    id: 1,
    icon: "fas fa-store",
    coverText: "E-Commerce RELASKA",
    title: "Sistem Katalog & E-Commerce Sparepart",
    bgGradient: "from-cyan-500 to-blue-600",
    image: "", // contoh: "/projects/relaska.png" (taruh screenshot di folder public)
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
    image: "",
    techs: ["PHP Native", "MySQL"],
    description:
      "Portal berita berbasis web dengan pengelolaan artikel (CRUD), kategorisasi konten, dan manajemen media melalui dashboard admin yang terintegrasi.",
    links: { demo: "#", github: "https://github.com/FalaahHamidHutasoit/Portal-Berita" },
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectList : projectList.slice(0, 2);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Projects</h2>
            <p className="text-slate-600 mb-4 max-w-xl">Beberapa sistem yang pernah aku bangun, dari e-commerce sampai aplikasi kasir.</p>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group transition-colors cursor-pointer"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua (${projectList.length})`}
            <i className={`fas fa-arrow-right transform transition-transform ${showAll ? "-scale-x-100" : "group-hover:translate-x-1"}`}></i>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project) => {
            const hasDemo = project.links.demo !== "#";
            const hasGithub = project.links.github !== "#";

            return (
              <article
                key={project.id}
                className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Cover: screenshot kalau ada, kalau tidak ikon besar di atas gradient */}
                <div className={`relative h-56 sm:h-64 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}>
                  {project.image ? (
                    <img src={project.image} alt={`Screenshot ${project.title}`} className="w-full h-full object-cover object-top" />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                      ></div>
                      <i className={`${project.icon} absolute -right-4 -bottom-6 text-[9rem] text-white/15`}></i>
                      <div className="relative text-center px-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-3xl">
                          <i className={project.icon}></i>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">{project.coverText}</h3>
                      </div>
                    </>
                  )}
                  {hasDemo && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-emerald-600 text-xs font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live
                    </span>
                  )}
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

                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">{project.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-[15px] mb-8">{project.description}</p>

                  {/* Tombol berlabel */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    {hasDemo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <i className="fas fa-external-link-alt text-xs"></i> Live Demo
                      </a>
                    )}
                    {hasGithub && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-white text-slate-800 text-sm font-semibold border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2"
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