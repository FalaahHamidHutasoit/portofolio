/* eslint-disable @next/next/no-img-element */
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          {/* Teks Deskripsi */}
          <div className="w-full lg:w-1/2">
            <p className="text-blue-600 font-semibold tracking-wide mb-2 text-sm md:text-base uppercase">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Halo, Saya <br/>
              <span className="text-blue-600 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">Falaah Hamid Hutasoit</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-6">
              Backend Developer & Web Specialist
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg leading-relaxed">
              Saya adalah mahasiswa Manajemen Informatika yang memiliki minat besar dalam pengembangan aplikasi web, khususnya di bidang backend. Saya senang membangun sistem yang modern, aman, dan mudah dikembangkan, dengan fokus pada pengelolaan database, logika aplikasi, serta performa sistem yang optimal.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-3.5 bg-blue-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <i className="fas fa-layer-group"></i> Lihat Project
              </a>
              <a 
              href="/cv-falaah.pdf" 
              download="CV-falaah.pdf"
              className="px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-2">
              <i className="fas fa-download"></i> Download CV
            </a>
            </div>
          </div>

          {/* Frame Foto Profil */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border-2 border-blue-600/20 scale-105"></div>
              
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 shadow-2xl overflow-hidden group">
                <div className="w-full h-full rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
                  <img src="/falaah.jpg" alt="falaah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-4 right-4 bg-white/70 backdrop-blur-md border border-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-800">Available to work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}