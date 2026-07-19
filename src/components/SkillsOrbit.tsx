import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ReactIcon,
  VueIcon,
  TypescriptIcon,
  TailwindIcon,
  FramerIcon,
  JsIcon,
  HtmlIcon,
  GitIcon,
  NodeIcon,
  DbIcon,
  BootstrapIcon,
  PostManIcon,
} from "./Icons";

const skills = [
  {
    name: "React",
    icon: <ReactIcon />,
    radius: 160,
    speed: 20,
    direction: 1,
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.3)",
  },
  {
    name: "Vuejs",
    icon: <VueIcon />,
    radius: 160,
    speed: 25,
    direction: -1,
    color: "#009966",
    glowColor: "rgba(0, 153, 102, 0.3)",
  },
  {
    name: "TypeScript",
    icon: <TypescriptIcon />,
    radius: 160,
    speed: 18,
    direction: 1,
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.3)",
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon />,
    radius: 160,
    speed: 22,
    direction: -1,
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    name: "Framer",
    icon: <FramerIcon />,
    radius: 260,
    speed: 35,
    direction: 1,
    color: "#FF0055",
    glowColor: "rgba(255, 0, 85, 0.3)",
  },
  {
    name: "JavaScript",
    icon: <JsIcon />,
    radius: 260,
    speed: 30,
    direction: -1,
    color: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.3)",
  },
  {
    name: "HTML/CSS",
    icon: <HtmlIcon />,
    radius: 260,
    speed: 40,
    direction: 1,
    color: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.3)",
  },
  {
    name: "Git",
    icon: <GitIcon />,
    radius: 260,
    speed: 32,
    direction: -1,
    color: "#FFFF",
    glowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "NodeJs",
    icon: <NodeIcon />,
    radius: 260,
    speed: 36,
    direction: -1,
    color: "#00c950",
    glowColor: "rgba(0, 201, 80, 0.3)",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    radius: 260,
    speed: 36,
    direction: -1,
    color: "#7f22fe",
    glowColor: "rgba(127, 34, 254, 0.3)",
  },
  {
    name: "SQL",
    icon: <DbIcon />,
    radius: 260,
    speed: 36,
    direction: -1,
    color: "#155dfc",
    glowColor: "rgba(21, 93, 252, 0.3)",
  },
  {
    name: "PostMan",
    icon: <PostManIcon />,
    radius: 270,
    speed: 38,
    direction: -1,
    color: "#ff6900",
    glowColor: "rgba(255, 105, 0, 0.3)",
  },
];

export default function SkillsOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) / 20;
        const y = (e.clientY - centerY) / 20;
        mouseX.set(x);
        mouseY.set(y);
        setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [mouseX, mouseY]);

  // Parallax rotation effect
  const rotateX = useTransform(springY, [-10, 10], [5, -5]);
  const rotateY = useTransform(springX, [-10, 10], [-5, 5]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[700px] flex items-center justify-center overflow-hidden cursor-pointer"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-indigo-500/5" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/20"
            initial={{
              x: Math.random() * 600 - 300,
              y: Math.random() * 600 - 300,
              scale: 0,
            }}
            animate={{
              x: Math.random() * 600 - 300,
              y: Math.random() * 600 - 300,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Central Orb with Parallax */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          rotateX,
          rotateY,
        }}
        className="relative z-20"
      >
        <motion.div
          animate={{
            boxShadow: isHovering 
              ? ["0 0 60px rgba(34, 211, 238, 0.4)", "0 0 100px rgba(34, 211, 238, 0.6)", "0 0 60px rgba(34, 211, 238, 0.4)"]
              : "0 0 40px rgba(34, 211, 238, 0.2)",
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="relative w-44 h-44 rounded-full glass flex items-center justify-center text-center p-4 backdrop-blur-xl border border-cyan-400/30"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 animate-pulse" />
          <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-cyan-400/30 via-indigo-400/30 to-cyan-400/30 animate-spin-slow" />
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-spin-slow-reverse" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Tech Stacks
            </h3>
            <div className="mt-2 text-xs text-cyan-400/60 font-mono tracking-wider">
              {skills.length} Technologies
            </div>
          </div>

          {/* Floating particles around center */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              animate={{
                x: [0, Math.cos(i * 60 * Math.PI / 180) * 60, 0],
                y: [0, Math.sin(i * 60 * Math.PI / 180) * 60, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Orbiting Rings with Glow */}
      <motion.div
        animate={{
          rotate: isHovering ? 360 : 0,
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[450px] h-[450px] rounded-full"
      >
        <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse" />
        <div className="absolute inset-[-20px] rounded-full border border-indigo-400/10 opacity-50" />
        <div className="absolute inset-[-40px] rounded-full border border-cyan-400/5" />
      </motion.div>

      <motion.div
        animate={{
          rotate: isHovering ? -360 : 0,
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full"
      >
        <div className="absolute inset-0 rounded-full border border-indigo-500/20" />
        <div className="absolute inset-[-30px] rounded-full border border-cyan-400/5" />
      </motion.div>

      <motion.div
        animate={{
          rotate: isHovering ? 360 : 0,
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full"
      >
        <div className="absolute inset-0 rounded-full border border-orange-500/20" />
      </motion.div>

      {/* Orbiting Skills with Parallax */}
      {skills.map((skill, index) => (
        <OrbitItem
          key={skill.name}
          skill={skill}
          index={index}
          total={skills.length}
          mouseX={springX}
          mouseY={springY}
          isHovering={isHovering}
        />
      ))}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}

function OrbitItem({
  skill,
  index,
  total,
  mouseX,
  mouseY,
  isHovering,
}: {
  skill: any;
  index: number;
  total: number;
  mouseX: any;
  mouseY: any;
  isHovering: boolean;
  key?: string | number;
}) {
  const initialAngle = index * (360 / total) * (Math.PI / 180);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  // Parallax offset for each item
  const itemOffsetX = useTransform(mouseX, (x) => x * (0.5 + (index % 3) * 0.1));
  const itemOffsetY = useTransform(mouseY, (y) => y * (0.5 + (index % 3) * 0.1));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{
        position: "absolute",
        width: skill.radius * 2,
        height: skill.radius * 2,
        x: itemOffsetX,
        y: itemOffsetY,
      }}
      className="flex items-center justify-center"
    >
      <motion.div
        animate={{
          rotate: skill.direction * 360,
        }}
        transition={{
          duration: skill.speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-full h-full flex items-center justify-center"
      >
        <motion.div
          style={{
            transform: `translate(${skill.radius}px, 0)`,
          }}
          className="relative"
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
              scale: 1.4,
              y: -15,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="group relative w-16 h-16 rounded-full glass flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-opacity-100"
            style={{
              borderColor: `${skill.color}33`,
              boxShadow: isHovering ? `0 0 30px ${skill.glowColor}` : "none",
            }}
          >
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-[-3px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                border: `2px solid ${skill.color}`,
                boxShadow: `0 0 20px ${skill.color}`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div
              className="absolute inset-0 rounded-full transition-colors duration-300 group-hover:bg-opacity-20"
              style={{
                backgroundColor: skill.color,
                opacity: 0.1,
              }}
            />

            <div
              className="relative z-10 transition-all duration-300"
              style={{ color: "white" }}
            >
              <div
                className="group-hover:scale-110 transition-transform duration-300"
                style={{ color: "inherit" }}
              >
                {skill.icon}
              </div>
            </div>

            {/* Glow Effect on Hover */}
            <div
              className="absolute inset-[-20px] rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
              style={{ backgroundColor: skill.color }}
            />

            {/* Tooltip with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold tracking-wide pointer-events-none"
              style={{ color: skill.color }}
            >
              <span className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                {skill.name}
              </span>
            </motion.div>

            {/* Orbital Trail */}
            <motion.div
              className="absolute inset-[-40px] rounded-full pointer-events-none"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1,
              }}
              style={{
                border: `1px solid ${skill.color}`,
                opacity: 0.1,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}