"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring, useAnimation } from "framer-motion";
import { Mail, Github, Linkedin, Send, Sparkles, ArrowDown, Zap } from "lucide-react";
import Navbar from "./components/Navbar";
import SkillsMarquee from "./components/SkillsMarquee";
import ProjectCard from "./components/ProjectCard";
import FloatingOrbs from "./components/FloatingOrbs";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "EcoTrack Dashboard",
    description:
      "A real-time environmental monitoring dashboard with interactive data visualizations and predictive analytics.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["React", "D3.js", "Tailwind", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Nexus Social Engine",
    description:
      "A high-performance social networking platform focused on developer communities and real-time collaboration.",
    image: "https://picsum.photos/seed/social/800/600",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Lumina E-Commerce",
    description:
      "A premium minimalist shopping experience with smooth transitions and a custom-built checkout flow.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Framer Motion", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Aura Meditation App",
    description:
      "An immersive meditation experience with generative ambient sounds and atmospheric UI elements.",
    image: "https://picsum.photos/seed/meditation/800/600",
    tags: ["React Native", "Web Audio API", "Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

// Antigravity Particle System
const AntiGravityParticles = () => {
  const particles = useRef<Array<{ 
    x: number, 
    y: number, 
    vx: number, 
    vy: number, 
    size: number,
    life: number,
    maxLife: number,
    color: string
  }>>([]);
  
  const [particlePositions, setParticlePositions] = useState<Array<{x: number, y: number, size: number, color: string, opacity: number}>>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Initialize particles
    const colors = [
      'rgba(34, 211, 238, 0.8)',
      'rgba(99, 102, 241, 0.8)',
      'rgba(168, 85, 247, 0.8)',
      'rgba(6, 182, 212, 0.8)',
      'rgba(236, 72, 153, 0.8)',
    ];

    for (let i = 0; i < 50; i++) {
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.2,
        size: Math.random() * 4 + 2,
        life: Math.random() * 100,
        maxLife: Math.random() * 150 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mousePos = { x: mouseX.get(), y: mouseY.get() };
      
      particles.current = particles.current.map(p => {
        // Physics: Antigravity - particles float upward
        p.vy += -0.01;
        
        // Mouse interaction - repulsion force
        const dx = p.x - mousePos.x;
        const dy = p.y - mousePos.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 300) {
          const force = (300 - dist) / 300 * 0.5;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 0.1;
          p.vy += Math.sin(angle) * force * 0.1;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Boundary with antigravity effect
        if (p.y < -50) {
          p.y = height + 50;
          p.vy = -Math.random() * 0.5;
        }
        if (p.y > height + 50) {
          p.y = -50;
          p.vy = Math.random() * 0.5;
        }
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;

        // Life cycle
        p.life += 1;
        if (p.life > p.maxLife) {
          p.life = 0;
          p.maxLife = Math.random() * 150 + 100;
          p.x = Math.random() * width;
          p.y = height + 20;
          p.vx = (Math.random() - 0.5) * 0.5;
          p.vy = -Math.random() * 0.5 - 0.2;
        }

        return p;
      });

      setParticlePositions(particles.current.map(p => ({
        x: p.x,
        y: p.y,
        size: p.size,
        color: p.color,
        opacity: 0.3 + (p.life / p.maxLife) * 0.7,
      })));

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-5">
      {particlePositions.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size * 2,
            background: p.color,
            opacity: p.opacity,
            filter: `blur(${p.size / 3}px)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Floating Elements with Physics
const FloatingElement = ({ 
  children, 
  delay = 0,
  amplitude = 20,
  duration = 4,
  xRange = 20,
}: { 
  children: React.ReactNode, 
  delay?: number,
  amplitude?: number,
  duration?: number,
  xRange?: number,
}) => {
  const y = useMotionValue(0);
  const x = useMotionValue(0);
  
  useEffect(() => {
    const startY = -amplitude;
    const endY = amplitude;
    const startX = -xRange;
    const endX = xRange;

    const animate = () => {
      const time = Date.now() / 1000 + delay;
      y.set(Math.sin(time * (2 * Math.PI / duration)) * amplitude);
      x.set(Math.sin(time * (2 * Math.PI / duration) * 0.7 + 1) * xRange);
      requestAnimationFrame(animate);
    };

    animate();
  }, [amplitude, duration, xRange, delay]);

  return (
    <motion.div
      style={{ y, x }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Cursor Grid Component
const CursorGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const element = gridRef.current;
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
  }, []);

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 z-10 pointer-events-auto overflow-hidden"
      style={{
        background: `
          radial-gradient(
            circle 200px at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(34, 211, 238, ${isHovering ? 0.15 : 0.05}),
            transparent 70%
          )
        `,
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 211, 238, ${isHovering ? 0.08 : 0.03}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, ${isHovering ? 0.08 : 0.03}) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transition: 'all 0.3s ease',
        }}
      />
      
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `
            radial-gradient(
              circle at center,
              rgba(34, 211, 238, ${isHovering ? 0.15 : 0.02}),
              transparent 70%
            )
          `,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s ease-out',
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(
              circle 300px at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(34, 211, 238, ${isHovering ? 0.1 : 0.02}) 0%,
              transparent 100%
            )
          `,
          transition: 'all 0.3s ease',
        }}
      />

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(
              circle 2px at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(34, 211, 238, ${isHovering ? 0.6 : 0.2}),
              transparent 100%
            )
          `,
          backgroundSize: '60px 60px',
          transition: 'all 0.2s ease',
        }}
      />
    </div>
  );
};

export default function Portfolio() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-black">
      <Navbar />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee06_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee06_1px,transparent_1px)] 
               bg-[size:16px_16px] pointer-events-none"
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden"
      >
        {/* AntiGravity Particles */}
        <AntiGravityParticles />

        {/* Cursor Grid Pattern */}
        <CursorGrid />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <FloatingOrbs />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-20 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2.5 rounded-lg glass border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-widest uppercase backdrop-blur-xl"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles size={12} className="animate-pulse" />
              Available for New Opportunities
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 leading-[0.9]"
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
              Tola
            </span>
            <span className="text-cyan-400"> San</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Junior Web Developer passionate about crafting clean, interactive, 
            and{" "}
            <span className="text-cyan-400 font-medium">
              visually stunning
            </span>{" "}
            web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-semibold rounded-lg px-10 h-14 shadow-lg shadow-cyan-400/30 transition-all duration-300 group"
              >
                View My Projects
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="glass border-white/20 hover:border-cyan-400/50 hover:bg-white/5 rounded-lg px-10 h-14 font-semibold backdrop-blur-xl transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements - Antigravity Style */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <FloatingElement delay={0} amplitude={30} duration={5} xRange={25}>
            <div className="absolute top-[15%] left-[8%] w-24 h-24 rounded-full bg-cyan-400/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={1} amplitude={25} duration={6} xRange={20}>
            <div className="absolute top-[25%] right-[10%] w-32 h-32 rounded-full bg-indigo-400/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={2} amplitude={35} duration={7} xRange={30}>
            <div className="absolute bottom-[30%] left-[15%] w-28 h-28 rounded-full bg-purple-400/10 blur-3xl" />
          </FloatingElement>
          <FloatingElement delay={0.5} amplitude={20} duration={4.5} xRange={15}>
            <div className="absolute bottom-[20%] right-[12%] w-20 h-20 rounded-full bg-pink-400/10 blur-3xl" />
          </FloatingElement>
        </div>

        {/* Scroll Indicator with Antigravity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-xs tracking-widest text-white/40 z-20"
        >
          SCROLL TO EXPLORE
          <motion.div
            animate={{ 
              height: [0, 80, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
          />
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-cyan-400/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section - Now using Marquee */}
      <section
        id="skills"
        className="relative z-10 py-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5" />
        <SkillsMarquee />
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative perspective-1000"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-3xl blur-2xl -rotate-2" />
                <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-400/10 to-indigo-400/10 rounded-3xl rotate-1" />
                <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-2 backdrop-blur-xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src="https://iili.io/BMRhbdG.png"
                    alt="Tola San"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-8"
              >
                About{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Me
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/70 leading-relaxed mb-6"
              >
                I am a Junior Web Engineer who loves learning modern
                technologies and pushing the boundaries of what's possible on
                the web.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-white/70 leading-relaxed mb-10"
              >
                I focus on creating seamless user experiences through clean
                code, thoughtful animations, and glassmorphic designs that
                captivate and engage.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                {[
                  { icon: Github, href: "https://github.com/tola-illuminate" },
                  { icon: Linkedin, href: "www.linkedin.com/in/tola-san" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    className="p-4 rounded-lg glass border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 backdrop-blur-xl"
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-3">
                Featured{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-white/60 max-w-md">
                Selected works that showcase my skills and passion
              </p>
            </div>
            <motion.div whileHover={{ x: 5 }}>
              <Button variant="link" className="text-cyan-400 mt-4 md:mt-0 group rounded-lg">
                View All Projects
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="h-full"
              >
                <ProjectCard {...project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="absolute inset-0 bg-cyan-400/5 blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee06_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee06_1px,transparent_1px)] 
               bg-[size:50px_50px] pointer-events-none"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass backdrop-blur-3xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-5xl font-bold mb-6">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    Connect
                  </span>
                </h2>
                <p className="text-white/70 mb-10">
                  I'm always excited to discuss new projects, ideas, or
                  opportunities.
                </p>

                <div className="space-y-8">
                  {[
                    { icon: Mail, label: "Email", value: "tolasan369369@gmail.com" },
                    { icon: Linkedin, label: "LinkedIn", value: "www.linkedin.com/in/tola-san" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="w-12 h-12 rounded-lg glass flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <div className="uppercase text-xs tracking-widest text-white/40">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Input
                      placeholder="Your Name"
                      className="glass border-white/10 h-12 focus:border-cyan-400/50 transition-all duration-300 rounded-lg"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Input
                      placeholder="Email"
                      className="glass border-white/10 h-12 focus:border-cyan-400/50 transition-all duration-300 rounded-lg"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input
                    placeholder="Subject"
                    className="glass border-white/10 h-12 focus:border-cyan-400/50 transition-all duration-300 rounded-lg"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Textarea
                    placeholder="Your Message"
                    className="glass border-white/10 min-h-40 focus:border-cyan-400/50 transition-all duration-300 rounded-lg"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black h-14 rounded-lg font-semibold flex items-center gap-3 shadow-lg shadow-cyan-400/20 transition-all duration-300">
                    <Send size={20} />
                    Send Message
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 border-t border-white/5 text-center text-sm text-white/60">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-2xl mb-3"
          >
            Tola <span className="text-cyan-400">San</span>
          </motion.div>
          <p>© 2026 Tola San • Built with passion, glass, and motion</p>
        </div>
      </footer>
    </div>
  );
}