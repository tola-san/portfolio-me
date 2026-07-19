import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Github, Sparkles, ArrowUpRight, Eye } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useState, useRef } from "react";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
  key?: string | number;
}

export default function ProjectCard({ title, description, image, tags, liveUrl, githubUrl, index }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping: 25, stiffness: 200 });
  const springY = useSpring(y, { damping: 25, stiffness: 200 });

  const rotateX = useTransform(springY, [-100, 100], [8, -8]);
  const rotateY = useTransform(springX, [-100, 100], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="group h-full"
    >
      <Card className="relative overflow-hidden h-full flex flex-col backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl shadow-black/20 transition-all duration-300"
        style={{
          background: isHovered 
            ? "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))"
            : "linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
        }}
      >
        {/* iOS Style Glass Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Animated Gradient Border */}
        <motion.div
          className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: isHovered 
              ? [
                  "conic-gradient(from 0deg, transparent, rgba(34,211,238,0.3), transparent, rgba(99,102,241,0.3), transparent)",
                  "conic-gradient(from 360deg, transparent, rgba(34,211,238,0.3), transparent, rgba(99,102,241,0.3), transparent)",
                ]
              : "conic-gradient(from 0deg, transparent, transparent)",
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ borderRadius: "16px" }}
        />

        {/* Image Container with iOS Style */}
        <div className="relative h-52 overflow-hidden rounded-t-2xl">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "scale(1.08)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            referrerPolicy="no-referrer"
          />
          
          {/* iOS Style Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70" />
          
          {/* Live Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-4 right-4"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-[10px] font-medium text-white/80 tracking-wider">LIVE</span>
            </div>
          </motion.div>

          {/* Quick View Button - iOS Style */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-white text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors"
          >
            <Eye size={16} />
            Quick View
          </motion.button>
        </div>
        
        <CardHeader className="pb-2 pt-5 px-5">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {title}
            </CardTitle>
            <motion.div
              animate={{ 
                rotate: isHovered ? 45 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
            >
              <ArrowUpRight size={14} className="text-white/40" />
            </motion.div>
          </div>
          <CardDescription className="text-white/50 text-sm leading-relaxed line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow px-5">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 + 0.2 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-white/5 text-white/60 border-white/10 text-[10px] uppercase tracking-wider px-3 py-1 rounded-full hover:bg-white/10 transition-colors"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex items-center justify-between pt-4 pb-5 px-5 border-t border-white/5">
          <div className="flex gap-3">
            <motion.a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
              Live Demo
            </motion.a>
            <motion.a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors"
            >
              <Github size={14} />
              GitHub
            </motion.a>
          </div>

          {/* iOS Style Indicator */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0.3,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
              <span className="text-[10px] text-white/30 font-mono tracking-wider">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </CardFooter>

        {/* iOS Style Haptic Feedback */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.3)"
              : "inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 30px rgba(0,0,0,0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}