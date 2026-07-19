"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Mail, Github, Linkedin, Send, Sparkles, ArrowDown } from "lucide-react";
import Navbar from "./components/Navbar";
import SkillsOrbit from "./components/SkillsOrbit";
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
      {/* Grid Pattern */}
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
      
      {/* Hover Glow Effect */}
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

      {/* Magnetic Grid Lines */}
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

      {/* Intersection Points */}
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
        {/* Grid Line Overlay */}
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
            className="inline-block mb-6 px-6 py-2.5 rounded-full glass border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-widest uppercase backdrop-blur-xl"
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
                className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-semibold rounded-full px-10 h-14 shadow-lg shadow-cyan-400/30 transition-all duration-300 group"
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
                className="glass border-white/20 hover:border-cyan-400/50 hover:bg-white/5 rounded-full px-10 h-14 font-semibold backdrop-blur-xl transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-xs tracking-widest text-white/40 z-20"
        >
          SCROLL TO EXPLORE
          <motion.div
            animate={{ height: [0, 80, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-cyan-400/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo Side */}
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

            {/* Text Side */}
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
                    className="p-4 rounded-2xl glass border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 backdrop-blur-xl"
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="relative z-10 py-32 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/5" />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee06_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee06_1px,transparent_1px)] 
               bg-[size:50px_50px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 inline-block">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                SKILLS
              </span>
            </h2>
            <p className="text-white/60 text-xl">Core technologies & expertise</p>
          </motion.div>
        </div>

        <SkillsOrbit />
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
              <Button variant="link" className="text-cyan-400 mt-4 md:mt-0 group">
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
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform">
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

              {/* Contact Form */}
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
                      className="glass border-white/10 h-12 focus:border-cyan-400/50 transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Input
                      placeholder="Email"
                      className="glass border-white/10 h-12 focus:border-cyan-400/50 transition-all duration-300"
                    />
                  </motion.div>
                </div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input
                    placeholder="Subject"
                    className="glass border-white/10 h-12 focus:border-cyan-400/50 transition-all duration-300"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Textarea
                    placeholder="Your Message"
                    className="glass border-white/10 min-h-40 focus:border-cyan-400/50 transition-all duration-300"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black h-14 rounded-2xl font-semibold flex items-center gap-3 shadow-lg shadow-cyan-400/20 transition-all duration-300">
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