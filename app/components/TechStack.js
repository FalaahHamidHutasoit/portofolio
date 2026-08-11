export default function TechStack() {
  // Daftar teknologi andalanmu
  const techList = [
    { name: "PHP", icon: "fab fa-php", color: "text-indigo-500" },
    { name: "MySQL", icon: "fas fa-database", color: "text-blue-500" },
    { name: "CodeIgniter4", icon: "fas fa-fire", color: "text-red-500" },
    { name: "Next.js", icon: "fab fa-react", color: "text-cyan-500" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-sky-400" },
    { name: "Git & GitHub", icon: "fab fa-github", color: "text-slate-700" },
  ];

  // Trik Rahasia: Gandakan array agar animasinya memutar tanpa ada ruang kosong
  const marqueeItems = [...techList, ...techList];

  return (
    <section className="w-full bg-slate-50 py-8 border-y border-slate-200 overflow-hidden">
      <div className="animate-marquee">
        {marqueeItems.map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-6 py-3 mx-4 bg-white shadow-sm border border-slate-100 rounded-full hover:shadow-md transition-shadow cursor-default"
          >
            <i className={`${tech.icon} ${tech.color} text-2xl`}></i>
            <span className="font-semibold text-slate-700">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}