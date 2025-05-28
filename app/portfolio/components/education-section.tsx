import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import {Section} from '@/components/ui/section';

interface Education {
    institution: string;
    duration: string;
    degree: string;
    field: string;
    affiliation: string;
}

const education = [
  {
        institution: "Inderprastha Engineering College",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    duration: "2024 - 2028",
    location: "Ghaziabad, India",
    affiliation: "Dr. A.P.J Abdul Kalam Technical University (AKTU)"
  }
];

export default function EducationSection() {
    return (
        <Section 
            id="education" 
            title="Education" 
            icon={<GraduationCap className="h-6 w-6 text-primary" />}
        >
            <div className="max-w-3xl mx-auto">
                {education.map((edu: Education, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative pl-10 pb-10 last:pb-0"
                    >
                        {/* Timeline */}
                        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
                        <div className="absolute left-0 top-1 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
                        
                        <div className="bg-muted/50 p-6 rounded-xl">
                            <div className="flex flex-wrap justify-between gap-4 mb-2">
                                <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                                <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                                    {edu.duration}
                                </span>
                            </div>
                            <p className="text-lg font-medium text-foreground">{edu.degree} in {edu.field}</p>
                            <p className="text-sm text-muted-foreground mt-1">Affiliated with {edu.affiliation}</p>
                            <div className="mt-4 pt-4 border-t border-border/50">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>Focused on web technologies, data structures, and algorithms</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>Participated in coding clubs and technical events</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                    <span>Completed capstone project on community-driven development platforms</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}