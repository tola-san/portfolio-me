import { motion } from "motion/react";
import { 
  ReactIcon, 
  NextjsIcon, 
  TypescriptIcon, 
  TailwindIcon, 
  FramerIcon, 
  JsIcon, 
  HtmlIcon, 
  GitIcon 
} from "./Icons";

const skills = [
  { name: "React", icon: <ReactIcon />, radius: 160, speed: 20, direction: 1, color: "#61DAFB" },
  { name: "Next.js", icon: <NextjsIcon />, radius: 160, speed: 25, direction: -1, color: "#FFFFFF" },
  { name: "TypeScript", icon: <TypescriptIcon />, radius: 160, speed: 18, direction: 1, color: "#3178C6" },
  { name: "Tailwind", icon: <TailwindIcon />, radius: 160, speed: 22, direction: -1, color: "#06B6D4" },
  { name: "Framer", icon: <FramerIcon />, radius: 260, speed: 35, direction: 1, color: "#FF0055" },
  { name: "JavaScript", icon: <JsIcon />, radius: 260, speed: 30, direction: -1, color: "#F7DF1E" },
  { name: "HTML/CSS", icon: <HtmlIcon />, radius: 260, speed: 40, direction: 1, color: "#E34F26" },
  { name: "Git", icon: <GitIcon />, radius: 260, speed: 32, direction: -1, color: "#F05032" },
];

export default function SkillsOrbit() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Central Orb */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-40 h-40 rounded-full glass flex items-center justify-center text-center p-4 cyan-glow"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-accent/20 blur-xl animate-pulse" />
        <h3 className="text-xl font-heading font-bold text-cyan-accent text-glow">
          Tola San
          <span className="block text-xs font-sans font-medium text-white/70 mt-1">Junior Web Engineer</span>
        </h3>
      </motion.div>

      {/* Orbiting Rings */}
      <div className="absolute w-[320px] h-[320px] rounded-full border border-white/5" />
      <div className="absolute w-[520px] h-[520px] rounded-full border border-white/5" />

      {/* Orbiting Skills */}
      {skills.map((skill, index) => (
        <OrbitItem 
          key={skill.name} 
          skill={skill} 
          index={index} 
          total={skills.length} 
        />
      ))}
    </div>
  );
}

function OrbitItem({ skill, index, total }: { skill: any, index: number, total: number, key?: string | number }) {
  const initialAngle = (index * (360 / total)) * (Math.PI / 180);
  
  return (
    <motion.div
      animate={{
        rotate: skill.direction * 360,
      }}
      transition={{
        duration: skill.speed,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        width: skill.radius * 2,
        height: skill.radius * 2,
      }}
      className="flex items-center justify-center pointer-events-none"
    >
      <motion.div
        style={{
          transform: `translate(${skill.radius}px, 0)`,
        }}
        className="pointer-events-auto"
      >
        {/* Counter-rotate the content so the icon stays upright */}
        <motion.div
          animate={{
            rotate: -skill.direction * 360,
          }}
          transition={{
            duration: skill.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ 
            scale: 1.2, 
            y: -10,
            boxShadow: `0 0 25px ${skill.color}44`,
          }}
          className="group relative w-14 h-14 rounded-full glass flex items-center justify-center cursor-pointer transition-all duration-300"
          style={{
            borderColor: `${skill.color}33`,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full border transition-colors duration-300 group-hover:border-opacity-100" 
            style={{ 
              borderColor: skill.color,
              borderOpacity: 0.3
            } as any}
          />
          <div 
            className="transition-colors duration-300"
            style={{ color: 'white' }}
          >
            <div className="group-hover:scale-110 transition-transform duration-300" style={{ color: 'inherit' }}>
              {skill.icon}
            </div>
          </div>
          
          {/* Tooltip */}
          <div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-bold tracking-wide"
            style={{ color: skill.color }}
          >
            {skill.name}
          </div>

          {/* Glow Effect on Hover */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
            style={{ backgroundColor: skill.color }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
