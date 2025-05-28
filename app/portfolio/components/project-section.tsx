'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ChevronRight } from 'lucide-react';

// Define types
interface Project {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
}

// Section component
const Section: React.FC<{ 
    id: string; 
    title: string; 
    icon: React.ReactNode; 
    children: React.ReactNode 
}> = ({ id, title, icon, children }) => (
    <section id={id} className="py-20">
    <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {children}
    </div>
    </section>
);

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
    opacity: 1,
    transition: {
        staggerChildren: 0.1
    }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

// FEATURED PROJECTS WITH ADDITIONAL DETAILS
const projects = [
    {
        name: "Innovexa",
        description: "A tech community platform with features like Member Spotlight, Freelance Gigs, Polls, and Challenges.",
        technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
        features: ["Member Profiles", "Discussion Forum", "Project Showcase", "Job Board"],
        image: "community.webp",
        link: "https://innovexa.vercel.app",
    },
    {
        name: "Portfolio Website",
        description: "Modern, responsive portfolio showcasing my projects, skills, and experience with interactive animations.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        features: ["Animated UI Elements", "Responsive Design", "Dark/Light Mode", "Interactive Sections"],
        image: "/Portfolio_logo.webp",
        link: "/",
    },
    {
            name: "Website Timer Extension",
        description: "Chrome extension tracking time spent on websites with beautiful UI, usage history, and keyword tracking.",
        technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
        features: ["Daily Usage Analytics", "Category Filtering", "Productivity Insights", "Export Data"],
        image: ".png",
        link: "#",
    },
];

export const ProjectSection: React.FC = () => {
    return (
    <Section 
        id="projects" 
        title="Featured Projects" 
        icon={<Rocket className="h-6 w-6 text-primary" />}
    >
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
        {projects.map((project: Project, index: number) => (
            <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="bg-background rounded-xl border shadow-sm overflow-hidden flex flex-col relative group"
            >
            {/* Decorative background elements */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
            />
            
            <div className="relative w-full aspect-square p-6 sm:p-8 max-w-[300px] mx-auto overflow-hidden">
                {/* Subtle background animation */}
                <motion.div
                initial={{ scale: 0.9, opacity: 0.3 }}
                animate={{ 
                    scale: [0.9, 1.05, 0.9],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl z-0"
                style={{ 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)' 
                }}
                />
                
                {/* Project image with elegant animations */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative z-10 h-full flex items-center justify-center"
                >
                <motion.img 
                    initial={{ scale: 0.8, filter: "blur(5px)" }}
                    whileInView={{ scale: 1, filter: "blur(0px)" }}
                    whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 2, -2, 0],
                    transition: { scale: { duration: 0.4 }, rotate: { duration: 0.7, ease: "easeInOut" } }
                    }}
                    transition={{ duration: 0.7 }}
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                />
                </motion.div>
                
                {/* Shine effect overlay */}
                <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none"
                animate={{ 
                    left: ['-100%', '200%'],
                }}
                transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3
                }}
                />
            </div>
            
            <div className="p-5 flex flex-col flex-grow relative z-10 bg-background/80 backdrop-blur-sm">
                <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="text-xl font-semibold mb-2"
                >
                {project.name}
                </motion.h3>
                
                <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                className="text-muted-foreground text-sm mb-4 flex-grow"
                >
                {project.description}
                </motion.p>
                
                <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="flex flex-wrap gap-2 mb-4"
                >
                {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                    <motion.span 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + (i * 0.1) }}
                    whileHover={{ 
                        backgroundColor: "rgba(59, 130, 246, 0.15)",
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                    className="text-xs px-2 py-1 bg-secondary rounded-md"
                    >
                    {tech}
                    </motion.span>
                ))}
                {project.technologies.length > 3 && (
                    <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                    className="text-xs px-2 py-1 bg-secondary rounded-md"
                    >
                    +{project.technologies.length - 3}
                    </motion.span>
                )}
                </motion.div>
                
                <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                whileHover={{ 
                    x: 5, 
                    color: "#3b82f6",
                    transition: { duration: 0.2 } 
                }}
                href={project.link}
                className="inline-flex items-center text-primary text-sm font-medium group"
                >
                View Project 
                <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                    }}
                >
                    <ChevronRight className="h-4 w-4 ml-1" />
                </motion.div>
                </motion.a>
            </div>
            </motion.div>
        ))}
        </motion.div>
    </Section>
    );
};

export default ProjectSection;