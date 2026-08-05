'use client';
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-50 overflow-hidden flex flex-col justify-between min-h-screen">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"></div>

      {/* Main Content Container */}
      <div className="relative z-10 pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Hubungi Kami</h2>
          <p className="text-slate-600">Punya rencana proyek atau sekadar ingin menyapa? Jangan ragu untuk menghubungi kami!</p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* KIRI: Info Kontak & Deskripsi */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Mari Berkolaborasi!</h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                Saya selalu terbuka untuk mendiskusikan peluang baru, terutama yang berkaitan dengan arsitektur <span className="font-semibold text-blue-600">Backend Development</span>, optimasi database, atau sekadar berbagi <i>insight</i> tentang keamanan sistem web.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-slate-200">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Me</p>
                  <p className="font-bold text-slate-900">falaahhamidhutasoit@email.com</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <i className="fab fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">WhatsApp</p>
                  <p className="font-bold text-slate-900">0813-4210-2246</p>
                </div>
              </div>

              {/* Location (Tambahan biar seimbang) */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</p>
                  <p className="font-bold text-slate-900">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a href="https://www.linkedin.com/in/falaah-hamid-hutasoit-b21b29323/" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/FalaahHamidHutasoit/portofolio" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"><i className="fab fa-github"></i></a>
            </div>
          </motion.div>

          {/* KANAN: Form (Tetap sama, hanya tambah shadow sedikit) */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.5] bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50" placeholder="" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50" placeholder="" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50" placeholder="Project Inquiry" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50" placeholder="Hello Falaah, I would like to..."></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                Send Message <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* FOOTER GELAP DI PALING BAWAH */}
      <footer className="relative z-20 w-full bg-slate-900 py-8 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Falaah Hamid Hutasoit. All rights reserved.
          </p>
        </div>
      </footer>

    </section>
  );
}