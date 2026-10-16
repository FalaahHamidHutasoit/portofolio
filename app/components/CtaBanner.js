export default function CtaBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-12 sm:px-14 text-center shadow-xl shadow-blue-500/20">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          ></div>
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-2xl"></div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Tertarik bekerja sama? 🤝</h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8 text-sm sm:text-base">
              Lagi cari web developer untuk magang, proyek, atau kolaborasi? Cerita aja kebutuhanmu, nanti kita cari solusinya bareng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:-translate-y-1 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-comments"></i> Ayo Ngobrol
              </a>
              <a
                href="/cv-falaah.pdf"
                download="CV-falaah.pdf"
                className="px-8 py-3.5 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                <i className="fas fa-download"></i> Unduh CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
