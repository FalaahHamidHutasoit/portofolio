'use client';
import { motion } from "framer-motion";

export default function Skills() {
  // Kita tulis full nama class Tailwind-nya di sini biar gak di-purge
  const categories = [
    {
      title: "Web Development",
      icon: "fas fa-code",
      theme: {
        line: "bg-blue-500",
        iconBase: "bg-blue-50 text-blue-600",
        iconHover: "group-hover:bg-blue-600",
        listItemHover: "group-hover/item:bg-blue-50 group-hover/item:border-blue-200",
        listCheckHover: "group-hover/item:text-blue-500"
      },
      items: ["PHP", "CodeIgniter 4 (MVC)", "Next.js & React", "Tailwind CSS"]
    },
    {
      title: "Databases & Storage",
      icon: "fas fa-database",
      theme: {
        line: "bg-indigo-500",
        iconBase: "bg-indigo-50 text-indigo-600",
        iconHover: "group-hover:bg-indigo-600",
        listItemHover: "group-hover/item:bg-indigo-50 group-hover/item:border-indigo-200",
        listCheckHover: "group-hover/item:text-indigo-500"
      },
      items: ["MySQL", "Database Design", "Query Optimization", "CRUD Architecture"]
    },
    {
      title: "Cyber Security & Tools",
      icon: "fas fa-shield-alt",
      theme: {
        line: "bg-emerald-500",
        iconBase: "bg-emerald-50 text-emerald-600",
        iconHover: "group-hover:bg-emerald-600",
        listItemHover: "group-hover/item:bg-emerald-50 group-hover/item:border-emerald-200",
        listCheckHover: "group-hover/item:text-emerald-500"
      },
      items: ["Network Security", "Vulnerability Assessment", "Wireshark Monitoring", "Git & GitHub"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Skill & Expertise</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Efek Garis Atas */}
              <div className={`absolute top-0 left-0 w-full h-1 ${cat.theme.line} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

              {/* Header Card */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 rounded-2xl ${cat.theme.iconBase} flex items-center justify-center text-2xl ${cat.theme.iconHover} group-hover:text-white transition-colors duration-300 shadow-sm`}>
                  <i className={cat.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{cat.title}</h3>
              </div>
              
              {/* Skill Items */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item, i) => (
                  <span
                    key={i}
                    className={`px-3.5 py-2 rounded-full text-sm font-medium ${cat.theme.iconBase} hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200 cursor-default`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}