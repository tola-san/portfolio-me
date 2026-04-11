import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="glass glass-hover overflow-hidden h-full flex flex-col border-white/10">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-heading font-bold text-white group-hover:text-cyan-accent transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-white/60 line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-white/5 text-white/70 border-white/10 text-[10px] uppercase tracking-wider">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-4 pt-0">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-cyan-accent hover:text-cyan-accent/80 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-medium text-white/60 hover:text-white transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
