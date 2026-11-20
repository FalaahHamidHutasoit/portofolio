'use client';
import { useState } from "react";
import { motion } from "framer-motion";

// ====== EDIT BAGIAN INI SAJA ======
const EMAIL = "falaahhamidhutasoit@gmail.com"; // ganti kalau email kamu beda
const WA_NUMBER = "6281342102246";              // format internasional tanpa 0 / +
const LINKEDIN = "https://www.linkedin.com/in/falaah-hamid-hutasoit-b21b29323/";
const GITHUB = "https://github.com/FalaahHamidHutasoit";
// ===================================

// Topik tinggal ketuk — ngisi subject + pembuka pesan otomatis,
// jadi orang nggak bingung mau nulis apa dulu.
const TOPICS = [
  { label: "Magang", subject: "Tawaran magang", starter: "Halo Falaah, aku mau nawarin kesempatan magang. " },
  { label: "Proyek / Freelance", subject: "Tawaran proyek", starter: "Halo Falaah, aku punya proyek dan mau diskusi dulu. " },
  { label: "Kolaborasi", subject: "Kolaborasi", starter: "Halo Falaah, aku mau ajak kolaborasi. " },
  { label: "Sekadar nyapa", subject: "Sekadar nyapa", starter: "Halo Falaah, aku lihat portofoliomu dan mau nyapa aja. " },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Pesan pembuka boleh diganti tiap ganti topik — tapi kalau user sudah
  // ngetik pesannya sendiri, jangan ditimpa. Pembuka dikenali karena isinya
  // persis salah satu starter di TOPICS.
  const isStarter = (msg) => !msg || TOPICS.some((t) => t.starter === msg);

  const pickTopic = (topic) => {
    setForm((prev) => ({
      ...prev,
      subject: topic.subject,
      message: isStarter(prev.message) ? topic.starter : prev.message,
    }));
  };

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
    "w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#071022] text-slate-100 placeholder:text-slate-500";

  return (
    <section id="contact" className="relative bg-[#050b1e] overflow-hidden flex flex-col justify-between">
      <div className="absolute top-20 left-[-10%] w-[500px] h-[500px] bg-blue-600/25 rounded-full filter blur-3xl opacity-70 z-0 pointer-events-none"></div>

      <div className="relative z-10 pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow w-full">
        {/* Header — rata kiri, bukan template tengah, bahasanya kayak ngomong */}
        <div className="mb-12 lg:mb-16 max-w-3xl">
          <p className="font-mono text-xs sm:text-sm text-blue-400 tracking-wider mb-3">hubungi saya</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 leading-[1.05] tracking-tight mb-4">
            Ngobrol dulu,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              nggak harus jadi proyek.
            </span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Punya tawaran magang, ide proyek, atau sekadar mau nanya soal code? Chat aja — nggak ada
            kewajiban, nggak ada formalitas. Kalau cocok baru lanjut, kalau nggak ya udah, tetap kenalan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* KIRI (5 kolom): kontak langsung — WA gede di atas, bukan form dulu */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Tombol WhatsApp besar */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Falaah, aku lihat portofoliomu!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-emerald-500 hover:bg-emerald-600 rounded-3xl p-6 sm:p-7 text-white shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] tracking-wider text-emerald-100/80 mb-1">PALING CEPAT DIBALAS</p>
                  <p className="text-2xl font-extrabold leading-tight">Chat di WhatsApp</p>
                  <p className="text-emerald-100 text-sm mt-1">Biasanya dibalas &lt; 24 jam • WIB (Jakarta)</p>
                </div>
                <span className="w-12 h-12 shrink-0 rounded-full bg-white/15 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <i className="fab fa-whatsapp"></i>
                </span>
              </div>
              <p className="mt-4 font-mono text-sm text-emerald-100/90">+62 813-4210-2246 →</p>
            </a>

            {/* Email + lokasi, ringkas */}
            <div className="bg-[#0b1836] border border-white/10 rounded-3xl p-6 space-y-4">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-semibold">Email — kalau mau yang formal</p>
                  <p className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors break-all text-sm sm:text-base">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold">Lokasi</p>
                  <p className="font-bold text-slate-100 text-sm sm:text-base">Jakarta, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <span className="text-sm text-slate-400">Mampir juga ke:</span>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Falaah" className="w-10 h-10 rounded-full bg-[#071022] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all"><i className="fab fa-linkedin-in"></i></a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub Falaah" className="w-10 h-10 rounded-full bg-[#071022] border border-white/10 flex items-center justify-center text-slate-300 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-100 transition-all"><i className="fab fa-github"></i></a>
              </div>
            </div>

            {/* Setelah lu chat, terus gimana? */}
            <div className="px-1">
              <p className="font-mono text-[11px] tracking-wider text-slate-500 mb-3">SETELAH LU CHAT:</p>
              <ol className="space-y-2 text-sm text-slate-300">
                <li className="flex gap-3"><span className="font-mono text-blue-400 font-bold">01</span> Lu kirim pesan — lewat WA atau form di sebelah.</li>
                <li className="flex gap-3"><span className="font-mono text-blue-400 font-bold">02</span> Gua balas, biasanya &lt; 24 jam.</li>
                <li className="flex gap-3"><span className="font-mono text-blue-400 font-bold">03</span> Ngobrol santai dulu, lanjut kalau cocok.</li>
              </ol>
            </div>
          </motion.div>

          {/* KANAN (7 kolom): form yang disederhanakan — cuma nama + pesan, topik tinggal ketuk */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#0b1836] p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] border border-white/10"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-1">Atau tulis di sini, gua yang samperin</h3>
            <p className="text-sm text-slate-400 mb-6">Pilih topiknya dulu, pesannya keisi sendiri — tinggal kirim.</p>

            {/* Chip topik */}
            <div className="flex flex-wrap gap-2 mb-6">
              {TOPICS.map((topic) => (
                <button
                  key={topic.label}
                  type="button"
                  onClick={() => pickTopic(topic)}
                  aria-pressed={form.subject === topic.subject}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                    form.subject === topic.subject
                      ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-[#071022] border-white/10 text-slate-300 hover:border-blue-500 hover:text-blue-300"
                  }`}
                >
                  {topic.label}
                </button>
              ))}
            </div>
            {form.subject && (
              <p className="font-mono text-xs text-blue-400 mb-6">Topik: {form.subject}</p>
            )}

            <form className="space-y-5" onSubmit={sendWhatsApp}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nama kamu</label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={inputClass} placeholder="Siapa nih yang mau ngobrol?" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
                <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} className={inputClass} placeholder="Halo Falaah, aku mau cerita soal..." required></textarea>
              </div>
              <p className="text-xs text-slate-500">Pesanmu nggak disimpan di mana-mana — langsung kebuka WhatsApp / email lu.</p>

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

      <footer className="relative z-20 w-full bg-[#03081a] py-8 border-t border-white/10 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-medium tracking-wide">
            Falaah Hamid Hutasoit &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </section>
  );
}
