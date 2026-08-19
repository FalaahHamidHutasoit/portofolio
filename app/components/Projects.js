"use client";
import { useState } from 'react';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  const projectList = [
    {
      id: 1,
      coverText: "Futsal Booking System",
      title: "Futsal Field Booking System",
      bgGradient: "from-blue-600 to-blue-900",
      techs: [
        { name: "React", color: "bg-blue-100 text-blue-600" },
        { name: "Next.js", color: "bg-red-100 text-red-600" },
        { name: "Prisma ORM", color: "bg-slate-100 text-slate-700" },
        { name: "MySQL", color: "bg-blue-100 text-slate-700" }
      ],
      description: "Sistem manajemen komprehensif untuk pemesanan lapangan futsal, pengelolaan jadwal, dan pemrosesan pembayaran secara aman.",
      links: {
        demo: "#",
        github: "https://github.com/FalaahHamidHutasoit/Futsal-Web"
      }
    },
    {
      id: 2,
      coverText: "E-Commerce RELASKA", // Judul cover dibikin lebih singkat
      title: "Sistem Katalog & E-Commerce Sparepart", // Judul detail dibikin lebih teknis
      bgGradient: "from-cyan-500 to-blue-500",
      techs: [
        { name: "CodeIgniter 4", color: "bg-red-100 text-red-600" }, // Diubah dari Laravel ke CI4
        { name: "MySQL", color: "bg-slate-100 text-slate-700" }
      ],
      description: "Platform e-commerce yang dirancang khusus untuk penjualan dan manajemen katalog sparepart komputer. Dilengkapi dengan fitur pengelolaan inventaris yang efisien, sistem pencarian produk dinamis, dan struktur database yang teroptimasi untuk performa tinggi.",
      links: {
        demo: "https://relaska.my.id/",
        github: "https://github.com/FalaahHamidHutasoit/relaska-computer"
      }
    },
    {
      id: 3,
      coverText: "Sistem Plotting Akademik",
      title: "Sistem Plotting Akademik Dosen dan Mahasiswa",
      bgGradient: "from-cyan-500 to-blue-500",
      techs: [
        { name: "PHP Native", color: "bg-blue-100 text-blue-600" },
        { name: "MySQL", color: "bg-slate-100 text-slate-700" }
      ],
      description: "Sistem informasi akademik berbasis web untuk mengotomatisasi proses pemetaan (plotting) dosen pembimbing dengan mahasiswa. Dibangun menggunakan PHP Native, sistem ini menonjolkan efisiensi manipulasi database relasional dan logika pengelolaan data yang terstruktur.",
      links: {
        demo: "#",
        github: "#"
      }
    }, 
    {
      id: 4,
      coverText: "Portal Berita",
      title: "Sistem Informasi Berita",
      bgGradient: "from-cyan-500 to-blue-500",
      techs: [
        { name: "PHP Native", color: "bg-blue-100 text-blue-600" },
        { name: "MySQL", color: "bg-slate-100 text-slate-700" }
      ],
      description: "Platform portal berita berbasis web. Sistem ini memungkinkan pengelolaan artikel (CRUD), kategorisasi konten, dan manajemen media secara efisien melalui dashboard admin yang terintegrasi.",
      links: {
        demo: "#",
        github: "https://github.com/FalaahHamidHutasoit/Portal-Berita"
      }
    }
  ];

  // LOGIKA PENTING: Jika showAll true, tampilkan semua. Jika false, potong ambil 2 teratas saja.
  const displayedProjects = showAll ? projectList : projectList.slice(0, 2);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Projects</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          {/* Tombol yang sudah diperbaiki fungsinya */}
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2 group transition-colors cursor-pointer"
          >
            {showAll ? "Show Less" : "View All Projects"} 
            <i className={`fas fa-arrow-right transform transition-transform ${showAll ? '-scale-x-100' : 'group-hover:translate-x-1'}`}></i>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Mapping sekarang menggunakan displayedProjects, bukan projectList */}
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 transition-transform duration-300 hover:-translate-y-2 group"
            >
              {/* Top Cover */}
              <div className={`relative h-64 sm:h-80 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center p-6`}>
                <h3 className="text-3xl sm:text-4xl font-bold text-white/90 text-center tracking-wide">
                  {project.coverText}
                </h3>

                {/* Action Buttons */}
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {project.links.demo !== "#" && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-link"></i>
                    </a>
                  )}
                  {project.links.github !== "#" && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 sm:p-10">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  {project.techs.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide ${tech.color}`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                
                {/* Title & Description */}
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h4>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}