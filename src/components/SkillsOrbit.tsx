import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.3)",
  },
  {
    name: "Vuejs",
    icon: <VueIcon />,
    color: "#009966",
    glowColor: "rgba(0, 153, 102, 0.3)",
  },
  {
    name: "TypeScript",
    icon: <TypescriptIcon />,
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.3)",
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon />,
    color: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    name: "Framer",
    icon: <FramerIcon />,
    color: "#FF0055",
    glowColor: "rgba(255, 0, 85, 0.3)",
  },
  {
    name: "JavaScript",
    icon: <JsIcon />,
    color: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.3)",
  },
  {
    name: "HTML/CSS",
    icon: <HtmlIcon />,
    color: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.3)",
  },
  {
    name: "Git",
    icon: <GitIcon />,
    color: "#FFFF",
    glowColor: "rgba(255, 255, 255, 0.2)",
  },
  {
    name: "NodeJs",
    icon: <NodeIcon />,
    color: "#00c950",
    glowColor: "rgba(0, 201, 80, 0.3)",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    color: "#7f22fe",
    glowColor: "rgba(127, 34, 254, 0.3)",
  },
  {
    name: "SQL",
    icon: <DbIcon />,
    color: "#155dfc",
    glowColor: "rgba(21, 93, 252, 0.3)",
  },
  {
    name: "PostMan",
    icon: <PostManIcon />,
    color: "#ff6900",
    glowColor: "rgba(255, 105, 0, 0.3)",
  },
];

// Duplicate skills for seamless marquee
const marqueeSkills = [...skills, ...skills, ...skills];

export default function SkillsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const x = (e.clientX - centerX) / 50;
        mouseX.set(x);
      }
    };

    const element = containerRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX]);

  // Parallax offset for rows
  const row1Offset = useTransform(springX, [-10, 10], [-30, 30]);
  const row2Offset = useTransform(springX, [-10, 10], [30, -30]);
  const row3Offset = useTransform(springX, [-10, 10], [-20, 20]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-400/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p className="text-white/40 text-sm tracking-widest uppercase">
          {skills.length} Technologies • Hover to slow down
        </p>
      </motion.div>

      {/* Row 1 - Right to Left */}
      <motion.div
        style={{ x: row1Offset }}
        className="relative z-10 flex items-center gap-8 mb-6"
      >
        <MarqueeRow 
          skills={marqueeSkills}
          direction={-1}
          duration={35}
          isHovering={isHovering}
          speed={scrollSpeed}
          row={1}
        />
      </motion.div>

      {/* Row 2 - Left to Right */}
      <motion.div
        style={{ x: row2Offset }}
        className="relative z-10 flex items-center gap-8 mb-6"
      >
        <MarqueeRow 
          skills={marqueeSkills}
          direction={1}
          duration={45}
          isHovering={isHovering}
          speed={scrollSpeed}
          row={2}
        />
      </motion.div>

      {/* Row 3 - Right to Left (Slower) */}
      <motion.div
        style={{ x: row3Offset }}
        className="relative z-10 flex items-center gap-8"
      >
        <MarqueeRow 
          skills={marqueeSkills}
          direction={-1}
          duration={55}
          isHovering={isHovering}
          speed={scrollSpeed}
          row={3}
        />
      </motion.div>

      {/* Gradient Overlay Controls */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />

      {/* Speed Control Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full glass border border-white/10 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span className="tracking-wider">HOVERING</span>
          <div className="flex gap-1">
            <div className={`w-1 h-1 rounded-full bg-cyan-400/60 transition-all ${isHovering ? 'scale-150' : ''}`} />
            <div className={`w-1 h-1 rounded-full bg-cyan-400/40 transition-all ${isHovering ? 'scale-150' : ''}`} />
            <div className={`w-1 h-1 rounded-full bg-cyan-400/20 transition-all ${isHovering ? 'scale-150' : ''}`} />
          </div>
          <span className="tracking-wider">{isHovering ? 'PAUSED' : 'SCROLLING'}</span>
        </div>
      </motion.div>
    </div>
  );
}

function MarqueeRow({ 
  skills, 
  direction, 
  duration, 
  isHovering,
  speed,
  row
}: { 
  skills: any[], 
  direction: number, 
  duration: number,
  isHovering: boolean,
  speed: number,
  row: number
}) {
  const [width, setWidth] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rowRef.current) {
      setWidth(rowRef.current.scrollWidth / 3);
    }
  }, []);

  // Different scale for each row
  const getScale = () => {
    switch(row) {
      case 1: return 1.2;
      case 2: return 1;
      case 3: return 0.8;
      default: return 1;
    }
  };

  // Different opacity for each row
  const getOpacity = () => {
    switch(row) {
      case 1: return 1;
      case 2: return 0.8;
      case 3: return 0.6;
      default: return 1;
    }
  };

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        ref={rowRef}
        className="flex gap-8 py-2"
        animate={{
          x: direction === 1 ? [0, -width] : [-width, 0],
        }}
        transition={{
          duration: isHovering ? duration * 3 : duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          scale: getScale(),
          opacity: getOpacity(),
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            whileHover={{
              scale: 1.3,
              y: -10,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            className="group relative flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-2xl glass backdrop-blur-xl border border-white/5 hover:border-opacity-100 transition-all duration-300 cursor-pointer"
            style={{
              borderColor: `${skill.color}33`,
            }}
          >
            {/* Glow Effect on Hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at center, ${skill.glowColor}, transparent 70%)`,
                filter: "blur(20px)",
              }}
            />

            {/* Icon Container */}
            <div className="relative z-10">
              <div
                className="transition-all duration-300 group-hover:scale-110"
                style={{ color: "white" }}
              >
                {skill.icon}
              </div>
            </div>

            {/* Skill Name */}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="relative z-10 text-sm font-medium text-white/0 group-hover:text-white transition-all duration-300"
              style={{ color: skill.color }}
            >
              {skill.name}
            </motion.span>

            {/* Animated Border Ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                boxShadow: [
                  `inset 0 0 0 0px ${skill.color}`,
                  `inset 0 0 20px 0px ${skill.color}33`,
                  `inset 0 0 0 0px ${skill.color}`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Status Dot */}
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400/0 group-hover:bg-emerald-400/60 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}