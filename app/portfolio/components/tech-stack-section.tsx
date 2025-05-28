"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers } from 'lucide-react';

type TechCategory = "Programming Languages" | "Frontend" | "Backend" | "Databases" | "Tools & Platforms";

interface Tech {
  name: string;
  level: number;
}

const techStack: Record<TechCategory, Tech[]> = {
    "Programming Languages": [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 90 },
    { name: "C/C++", level: 85 },
    { name: "HTML/CSS", level: 95 },
  ],
  "Frontend": [
    { name: "React", level: 70 },
    { name: "Next.js", level: 70 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Framer Motion", level: 80 },
  ],
  "Backend": [
    { name: "Django", level: 70 },
    { name: "REST APIs", level: 87 },
    { name: "Node.js", level: 60 },
  ],
  "Databases": [
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 65 },
    { name: "PostgreSQL", level: 50 },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "PyCharm", level: 85 },
    { name: "Vercel", level: 88 },
    { name: "Figma", level: 75 },
  ]
};


// Section component
const Section: React.FC<{ id: string; title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ id, title, icon, children }) => (
    <section id={id} className="py-16">
    <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
        {icon}
        <h2 className="text-3xl font-bold ml-3">{title}</h2>
        </div>
        {children}
    </div>
    </section>
);

export const TechStackSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TechCategory>('Frontend');

    return (
    <Section 
        id="tech" 
        title="Tech Stack" 
        icon={<Layers className="h-6 w-6 text-primary" />}
    >
        <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
            {Object.keys(techStack).map((category) => (
            <motion.button
                key={category}
                onClick={() => setActiveTab(category as TechCategory)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === category 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-muted hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
                }`}
            >
                {category}
            </motion.button>
            ))}
        </div>
        
        <AnimatePresence mode="wait">
            <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
            {techStack[activeTab].map((tech: Tech, i: number) => (
                <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.2 }
                }}
                className="bg-background p-5 rounded-lg border shadow-sm"
                >
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                    key={`${activeTab}-${tech.name}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full relative"
                    >
                    {/* Add a subtle shine animation */}
                    <motion.div 
                        animate={{ 
                        x: ["100%", "-100%"],
                        }} 
                        transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "easeInOut",
                        repeatDelay: 1
                        }}
                        className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    ></motion.div>
                    </motion.div>
                </div>
                </motion.div>
            ))}
            </motion.div>
        </AnimatePresence>
        </div>
    </Section>
    );
};

export default TechStackSection;