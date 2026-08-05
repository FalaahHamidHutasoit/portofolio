'use client';
import { motion } from "framer-motion";

export default function Certificates() {
  const certificatesList = [
    {
      id: 1,
      title: "Sertifikasi Database Administrator",
      issuer: "Lembaga Sertifikasi / BNSP", // Silakan ganti dengan nama lembaga penerbitnya
      date: "2025", // Silakan ganti tahunnya
      icon: "fas fa-database",
      bgColor: "bg-blue-50 text-blue-600 border-blue-100",
      description: "Sertifikasi profesional yang memvalidasi kompetensi dalam merancang arsitektur database, optimasi query, manajemen penyimpanan, serta memastikan keamanan data sistem backend."
    },
    {
      id: 2,
      title: "Sertifikat TOK (Tenaga Operator Komputer)",
      issuer: "Lembaga Sertifikasi / BNSP", // Silakan ganti dengan nama lembaga penerbitnya
      date: "2025", // Silakan ganti tahunnya
      icon: "fas fa-laptop-house",
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
      description: "Sertifikasi kompetensi yang membuktikan keahlian teknis dalam pengoperasian sistem komputer, manajemen berkas, efisiensi kerja digital, dan pemecahan masalah dasar pada perangkat keras & lunak."
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-white relative overflow-hidden">
      
      {/* Aksesori Background */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Licenses & Certifications</h2>
          <p className="text-slate-600">Kredensial profesional untuk memvalidasi keahlian dan kompetensi teknis.</p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificatesList.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: cert.id * 0.1 }}
              className="bg-slate-50/60 rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Atas: Icon & Badge Tahun */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${cert.bgColor} border flex items-center justify-center text-2xl shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                    <i className={cert.icon}></i>
                  </div>
                  <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-500 tracking-wide">
                    {cert.date}
                  </span>
                </div>

                {/* Tengah: Judul & Penerbit */}
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-4 flex items-center gap-1.5">
                  <i className="fas fa-award text-xs"></i> {cert.issuer}
                </p>

                {/* Bawah: Deskripsi */}
                <p className="text-slate-600 leading-relaxed text-[14px]">
                  {cert.description}
                </p>
              </div>

              {/* Hiasan Kecil Link/Lihat Kredensial jika suatu saat mau ditambah foto sertifikat */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex justify-end">
                <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer">
                  Verified Credential <i className="fas fa-check-circle text-emerald-500"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}