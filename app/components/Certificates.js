'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Certificates() {
  // State untuk menyimpan data sertifikat yang sedang diklik (dibuka)
  const [selectedCert, setSelectedCert] = useState(null);

  const certificatesList = [
    {
      id: 1,
      title: "Sertifikasi Database Administrator",
      issuer: "Lembaga Sertifikasi / BNSP",
      date: "2025",
      icon: "fas fa-database",
      bgColor: "bg-blue-50 text-blue-600 border-blue-100",
      description: "Sertifikasi profesional yang memvalidasi kompetensi dalam merancang arsitektur database, optimasi query, manajemen penyimpanan, serta memastikan keamanan data sistem backend.",
      image: "/cert-db.jpg" // 👈 Pastikan nama file ini sesuai dengan yang ada di folder public
    },
    {
      id: 2,
      title: "Sertifikat TOK (Tenaga Operator Komputer)",
      issuer: "Lembaga Sertifikasi",
      date: "2024",
      icon: "fas fa-laptop-house",
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
      description: "Sertifikasi kompetensi yang membuktikan keahlian teknis dalam pengoperasian sistem komputer, manajemen berkas, efisiensi kerja digital, dan pemecahan masalah dasar pada perangkat keras & lunak.",
      image: "/sertifikat TOK.jpg" // 👈 Pastikan nama file ini sesuai dengan yang ada di folder public
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Licenses & Certifications</h2>
          <p className="text-slate-600">Kredensial profesional untuk memvalidasi keahlian dan kompetensi teknis.</p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesList.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cert.id * 0.1 }}
              className="bg-slate-50/60 rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedCert(cert)} // 👈 Aksi ketika card diklik
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${cert.bgColor} border flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    <i className={cert.icon}></i>
                  </div>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500 tracking-wide">
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-4 flex items-center gap-1.5">
                  <i className="fas fa-award text-xs"></i> {cert.issuer}
                </p>

                <p className="text-slate-600 leading-relaxed text-[14px]">
                  {cert.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/60 flex justify-end">
                <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                  Klik untuk lihat <i className="fas fa-external-link-alt text-emerald-500 ml-1"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BAGIAN MODAL POP-UP --- */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)} // Tutup modal jika area luar diklik
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.6 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Supaya kalau gambarnya diklik, modal nggak tertutup
            >
              {/* Tombol Close (X) */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <i className="fas fa-times text-lg"></i>
              </button>

              {/* Tempat Gambar Sertifikat */}
              <div className="w-full h-auto max-h-[80vh] overflow-y-auto p-2 bg-slate-100 flex items-center justify-center">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title} 
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
              
              {/* Keterangan di bawah gambar */}
              <div className="p-4 bg-white border-t border-slate-100 text-center">
                <h4 className="text-lg font-bold text-slate-800">{selectedCert.title}</h4>
                <p className="text-sm text-slate-500">{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}