'use client';
import { useState } from "react";
import { motion } from "framer-motion";

// ====== EDIT BAGIAN INI SAJA ======
const EMAIL = "falaahhamidhutasoit@gmail.com"; // ganti kalau email kamu beda
const WA_NUMBER = "6281342102246";              // format internasional tanpa 0 / +
const LINKEDIN = "https://www.linkedin.com/in/falaah-hamid-hutasoit-b21b29323/";
const GITHUB = "https://github.com/FalaahHamidHutasoit";
// ===================================

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const buildText = () =>
    `Halo Falaah, saya ${form.name || "(nama)"}.\n\n` +
    `${form.subject ? `Topik: ${form.subject}\n\n` : ""}` +
    `${form.message || "Saya ingin ngobrol soal..."}`;

  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildText())}`, "_blank", "noopener,noreferrer");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const subject = form.subject || "Halo Falaah!";
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildText())}`;
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50";

  return (
    <section id="contact" className="relative bg-slate-50 overflow-hidden flex flex-col justify-between">
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"></div>

      <div className="relative z-10 pt-24 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Yuk, Ngobrol! </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Lagi cari developer buat proyek, magang, atau sekadar mau tukar pikiran soal coding? Sapa aja, santai kok.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* KIRI */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Punya ide? Kita wujudkan bareng </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                Aku suka banget ngulik <span className="font-semibold text-blue-600">web development</span>, dari tampilan sampai database, dan bikin
                sistem web yang rapi dan aman. Kalau kamu butuh teman diskusi atau tenaga tambahan buat proyekmu,
                kabarin aja. Biasanya aku balas dalam 1x24 jam.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</p>
                  <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors break-all">{EMAIL}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Falaah, aku lihat portofoliomu!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <i className="fab fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">WhatsApp</p>
                  <p className="font-bold text-slate-900 group-hover:text-green-600 transition-colors">Chat langsung di WhatsApp</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Lokasi</p>
                  <p className="font-bold text-slate-900">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-sm text-slate-500">Atau mampir ke:</span>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Falaah" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"><i className="fab fa-linkedin-in"></i></a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub Falaah" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"><i className="fab fa-github"></i></a>
            </div>
          </motion.div>

          {/* KANAN: Form */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-[1.5] bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-1">Tulis pesanmu di sini </h3>
            <p className="text-sm text-slate-500 mb-6">Isi singkat aja, nanti tinggal pilih mau kirim lewat WhatsApp atau email.</p>

            <form className="space-y-5" onSubmit={sendWhatsApp}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nama kamu</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} placeholder="Siapa nih yang mau ngobrol?" required />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Soal apa?</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} className={inputClass} placeholder="Tawaran proyek, magang, atau sekadar nyapa" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Pesan</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={inputClass} placeholder="Halo Falaah, aku mau cerita soal..." required></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="flex-1 bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-500/30">
                  <i className="fab fa-whatsapp mr-2"></i> Kirim via WhatsApp
                </button>
                <button type="button" onClick={sendEmail} className="flex-1 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
                  <i className="fas fa-paper-plane mr-2"></i> Kirim via Email
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <footer className="relative z-20 w-full bg-slate-900 py-8 border-t border-slate-800 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Dibuat oleh Falaah &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </section>
  );
}