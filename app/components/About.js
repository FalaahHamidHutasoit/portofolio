export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50">
      
      {/* 1. Subtle Dot/Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{ 
          backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      {/* 2. Ambient Glow (Gradient Blobs) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0 translate-x-[-20%] translate-y-[-20%]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 z-0 translate-x-[20%] translate-y-[20%]"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Tentang Saya</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Glassmorphism Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Pengembang Sistem Backend
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Sebagai mahasiswa Manajemen Informatika Di Politeknik LP3I Jakarta, saya memiliki minat yang kuat di bidang Backend Development. Saya senang membangun logika aplikasi yang terstruktur, mengelola database, dan mengembangkan sistem yang efisien serta aman. Bagi saya, backend bukan hanya tentang menulis kode, tetapi juga menciptakan fondasi yang kuat agar sebuah aplikasi dapat berjalan dengan baik dan memberikan pengalaman terbaik bagi penggunanya.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                {/* Info 1: Education */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <i className="fas fa-graduation-cap text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">Pendidikan</p>
                    <p className="font-semibold text-slate-900">Manajemen Informatika</p>
                  </div>
                </div>

                {/* Info 2: Location */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-0.5">Lokasi</p>
                    <p className="font-semibold text-slate-900">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Illustration Graphic */}
            <div className="hidden lg:flex justify-center items-center py-8 lg:py-0">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Bottom Graphic Box (Purple/Blue) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-3xl transform rotate-6 scale-105 shadow-lg transition-transform duration-500 hover:rotate-12"></div>
                
                {/* Top Graphic Box (White with Icon) */}
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl flex items-center justify-center transform -rotate-3 transition-transform duration-500 hover:rotate-0 border border-slate-50">
                  <div className="text-blue-500 text-6xl md:text-7xl">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
}