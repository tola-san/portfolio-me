import { motion } from "motion/react";

export default function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full glass border-white/5"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${10 + i * 20}%`,
            top: `${20 + i * 15}%`,
            opacity: 0.1,
            filter: "blur(40px)",
          }}
        />
      ))}
    </div>
  );
}
