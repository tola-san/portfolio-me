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
    description: "A real-time environmental monitoring dashboard with interactive data visualizations and predictive analytics.",
    image: "https://picsum.photos/seed/dashboard/800/600",
    tags: ["React", "D3.js", "Tailwind", "Firebase"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Nexus Social Engine",
    description: "A high-performance social networking platform focused on developer communities and real-time collaboration.",
    image: "https://picsum.photos/seed/social/800/600",
    tags: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Lumina E-Commerce",
    description: "A premium minimalist shopping experience with smooth transitions and a custom-built checkout flow.",
    image: "https://picsum.photos/seed/shop/800/600",
    tags: ["React", "Framer Motion", "Stripe", "Redux"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Aura Meditation App",
    description: "An immersive meditation experience with generative ambient sounds and atmospheric UI elements.",
    image: "https://picsum.photos/seed/meditation/800/600",
    tags: ["React Native", "Web Audio API", "Motion"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-accent/30 selection:text-cyan-accent">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <FloatingOrbs />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full glass border-cyan-accent/20 text-cyan-accent text-xs font-bold tracking-widest uppercase"
          >
            Available for New Opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-6"
          >
            Tola <span className="text-cyan-accent text-glow">San</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 font-medium mb-10 max-w-2xl mx-auto"
          >
            Junior Web Engineer passionate about building <span className="text-white">clean</span> and <span className="text-white">interactive</span> web experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-cyan-accent text-black hover:bg-cyan-accent/90 rounded-full px-8 font-bold text-base h-14 shadow-[0_0_20px_rgba(34,240,255,0.4)]">
              View My Projects
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/10 hover:bg-white/5 rounded-full px-8 font-bold text-base h-14">
              Contact Me
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-accent/50 to-transparent" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 glass rounded-3xl -rotate-3 opacity-50" />
              <div className="relative aspect-square rounded-3xl overflow-hidden glass border-white/10 p-2">
                <img 
                  src="https://picsum.photos/seed/tola/800/800" 
                  alt="Tola San" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-2xl flex items-center justify-center p-4 text-center border-cyan-accent/20"
              >
                <div className="text-cyan-accent font-heading font-bold text-2xl">1+</div>
                <div className="text-[10px] uppercase font-bold text-white/50 leading-tight ml-2">Years of Learning</div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold mb-8">
                About <span className="text-cyan-accent">Me</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-6">
                I am a Junior Web Engineer who loves learning modern technologies and pushing the boundaries of what's possible on the web. My journey started with a fascination for interactive design, which led me to master the React ecosystem.
              </p>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                I focus on creating seamless user experiences through clean code and thoughtful animations. I believe that the best web applications are not just functional, but also delightful to use.
              </p>
              <div className="flex gap-6">
                <a href="#" className="p-3 rounded-full glass border-white/10 hover:text-cyan-accent transition-colors">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 rounded-full glass border-white/10 hover:text-cyan-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 rounded-full glass border-white/10 hover:text-cyan-accent transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-heading font-bold mb-4">Skills in <span className="text-cyan-accent">Orbit</span></h2>
          <p className="text-white/50">Hover over the icons to see my core tech stack in action.</p>
        </div>
        <SkillsOrbit />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-4">Featured <span className="text-cyan-accent">Projects</span></h2>
              <p className="text-white/50 max-w-xl">A selection of my recent work, ranging from complex dashboards to immersive creative experiences.</p>
            </div>
            <Button variant="link" className="text-cyan-accent p-0 h-auto font-bold text-sm uppercase tracking-widest">
              View All Projects →
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.title} 
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                index={i} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[2rem] border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-heading font-bold mb-6">Let's <span className="text-cyan-accent">Connect</span></h2>
                <p className="text-white/60 mb-8">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-accent">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Me</div>
                      <div className="text-white font-medium">tolasan369369@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan-accent">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest">LinkedIn</div>
                      <div className="text-white font-medium">linkedin.com/in/tolasan</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Name" className="glass border-white/10 h-12 rounded-xl focus:border-cyan-accent/50 transition-colors" />
                  <Input placeholder="Email" className="glass border-white/10 h-12 rounded-xl focus:border-cyan-accent/50 transition-colors" />
                </div>
                <Input placeholder="Subject" className="glass border-white/10 h-12 rounded-xl focus:border-cyan-accent/50 transition-colors" />
                <Textarea placeholder="Message" className="glass border-white/10 min-h-[150px] rounded-xl focus:border-cyan-accent/50 transition-colors" />
                <Button className="w-full bg-cyan-accent text-black hover:bg-cyan-accent/90 rounded-xl h-12 font-bold flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="font-heading font-bold text-xl mb-4">Tola <span className="text-cyan-accent">San</span></div>
          <p className="text-white/40 text-sm mb-8">© 2026 Tola San. Built with passion and code.</p>
          <div className="flex justify-center gap-6 text-white/40">
            <a href="#" className="hover:text-cyan-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
