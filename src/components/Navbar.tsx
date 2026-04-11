import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cyan-accent flex items-center justify-center font-heading font-bold text-black text-sm">
            TS
          </div>
          <span className="font-heading font-bold text-lg tracking-tight hidden sm:block">
            Tola San
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-cyan-accent transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-cyan-accent text-black px-5 py-1.5 rounded-full text-sm font-bold hover:bg-cyan-accent/90 transition-colors shadow-[0_0_15px_rgba(34,240,255,0.3)]"
        >
          Resume
        </motion.button>
      </div>
    </motion.nav>
  );
}
