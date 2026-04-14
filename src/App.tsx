"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import Navbar from "./components/Navbar";
import SkillsOrbit from "./components/SkillsOrbit";
import ProjectCard from "./components/ProjectCard";
import FloatingOrbs from "./components/FloatingOrbs";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

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

export default function Portfolio() {
  return (
    <div className="min-h-screen  text-white overflow-x-hidden ">
      <Navbar />

      {/* Grid Line Overlay */}
      <div
        className="absolute z-10 inset-0 bg-[linear-gradient(to_right,#22d3ee08_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee08_1px,transparent_1px)] 
               bg-[size:16px_16px] pointer-events-none"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-br from-black to-cyan-900/80">
        <FloatingOrbs />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-cyan-400/20 text-cyan-400 text-xs font-bold tracking-widest uppercase"
          >
            Available for New Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-6"
          >
            Tola <span className="text-cyan-400">San</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 font-medium mb-12 max-w-2xl mx-auto"
          >
            Junior Web Developer passionate about building clean and interactive
            web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold rounded-full px-10 h-14 shadow-lg shadow-cyan-400/40 transition-all"
            >
              View My Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 hover:bg-white/5 rounded-full px-10 h-14 font-semibold"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest text-white/40"
        >
          SCROLL TO EXPLORE
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-white/5 backdrop-blur-3xl rounded-3xl -rotate-2" />
              <div className="relative rounded-3xl overflow-hidden glass border border-white/10 p-3">
                <img
                  src="https://iili.io/BMRhbdG.png"
                  alt="Tola San"
                  className="w-full aspect-square object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-8">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                I am a Junior Web Engineer who loves learning modern
                technologies and pushing the boundaries of what's possible on
                the web.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                I focus on creating seamless user experiences through clean
                code, thoughtful animations, and glassmorphic designs.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/tola-illuminate"
                  className="p-4 rounded-2xl glass border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  <Github size={22} />
                </a>
                <a
                  href="www.linkedin.com/in/tola-san"
                  className="p-4 rounded-2xl glass border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-32 px-6 relative overflow-hidden
             bg-gradient-to-b from-black/80 border border-t-white/10 to-cyan-500/30"
      >
        {/* Grid Line Overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee08_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee08_1px,transparent_1px)] 
               bg-[size:50px_50px] pointer-events-none"
        />
        {/* Optional subtle gradient overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

        <div className=" w-75 mx-auto text-center mb-16 relative z-10 ">
          <h2 className="text-5xl text-uppercase font-bold mb-4 text-cyan-400 backdrop-blur-3xl border border-cyan-700 rounded-full bg-cyan-400/10">
            SKILLS
          </h2>
          <p className="text-white/60 text-xl">Core technologies</p>
        </div>

        <SkillsOrbit />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-5xl font-bold mb-3">Featured Projects</h2>
              <p className="text-white/60 max-w-md">
                Selected works that showcase my skills and passion
              </p>
            </div>
            <Button variant="link" className="text-cyan-400 mt-4 md:mt-0">
              View All Projects →
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] pointer-events-none" />

        {/* Grid Line Overlay */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee08_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee08_1px,transparent_1px)] 
               bg-[size:50px_50px] pointer-events-none"
        />

        <div className="max-w-5xl mx-auto relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100/5 backdrop-blur-3xl p-10 md:p-16 rounded-xl border border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-12 ">
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  Let's <span className="text-cyan-400">Connect</span>
                </h2>
                <p className="text-white/70 mb-10">
                  I'm always excited to discuss new projects, ideas, or
                  opportunities.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="uppercase text-xs tracking-widest text-white/40">
                        Email
                      </div>
                      <div className="font-medium">tolasan369369@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <div className="uppercase text-xs tracking-widest text-white/40">
                        LinkedIn
                      </div>
                      <div className="font-medium">
                        www.linkedin.com/in/tola-san
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    className="glass border-white/10 h-12"
                  />
                  <Input
                    placeholder="Email"
                    className="glass border-white/10 h-12"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="glass border-white/10 h-12"
                />
                <Textarea
                  placeholder="Your Message"
                  className="glass border-white/10 min-h-40"
                />
                <Button className="w-full bg-cyan-500 hover:bg-cyan-300 text-black h-14 rounded-2xl font-semibold flex items-center gap-3">
                  <Send size={20} />
                  Send Message
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/30 text-center text-sm text-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="font-bold text-2xl mb-3">
            Tola <span className="text-cyan-400">San</span>
          </div>
          <p>© 2026 Tola San • Built with passion, glass, and motion</p>
        </div>
      </footer>
    </div>
  );
}
