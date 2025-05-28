import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { Section } from "@/components/ui/section"; // Adjust import path as needed

// Define types for the data structures
interface Experience {
    role: string;
    company: string;
    program?: string;
    duration: string;
    description: string;
    skills: string[];
}

interface Hackathon {
    name: string;
    date: string;
    organizer: string;
    achievement: string;
    description: string;
    technologies: string[];
}


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


// EXPERIENCE DATA
const experiences = [
  {
        role: "Student Intern",
        company: "Scaler School of Technology",
    program: "YIIP Program",
    duration: "Summer 2023",
    description: "Participated in Young Innovator Internship Program focused on full-stack development using modern technologies. Collaborated with senior developers to build educational tech platforms.",
    skills: ["No-Code Development", "Extension Development", "Artificial Intelligence", "Team Collaboration"]
  }
];

// HACKATHON DATA
const hackathons = [
        {
        name: "HackSpire Hackathon", 
        organizer: "Inderprastha Engineering College",
        date: "December 2024", 
        achievement: "Top 15 Finalist - Only App Development Project",
        description: "Developed an Android application for patient appointment management, doctor schedule viewing, and on-device lung cancer prediction from X-ray images using Kotlin, XML, and TensorFlow Lite.",
        technologies: ["XML", "Kotlin", "TensorFlow Lite", "Firebase Firestore", "Firebase Auth", "Google Cloud Healthcare API"]
    },
    {
        name: "Python Park - The Hackathon",
        organizer: "Compunnel Inc.",
        date: "June 2024",
        achievement: "Top 10 Finalist - My Very First Hackathon",
        description: "Developed a resume extractor using Python and libraries like PDFPlumber and regular expressions to parse and extract information from PDF and DOCX files.",
        technologies: ["Python", "PDFPlumber", "python-docx", "re"]
    },
    {
        name: "Bharat Shiksha Expo 2024 Hackathon",
        organizer: "Bharat Shiksha Expo",
        date: "November 2024",
        achievement: "Top 20 Finalist - Praised for Good Presentation",
        description: "Developed a platform where users can build a basic landing page and generate a QR code. This helps individuals and small businesses like bakeries and kirana shops to go online in this era of the internet.",
        technologies: ["React", "HTML", "CSS", "JavaScript"]
    }
];


export function ExperienceSection() {
    return (
        <Section 
            id="experience" 
            title="Experience" 
            icon={<Briefcase className="h-6 w-6 text-primary" />}
        >
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Work Experience */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="bg-background rounded-xl p-6 border shadow-sm mb-6 relative overflow-hidden"
                            whileHover={{ 
                                boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.2)",
                                y: -5,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Background gradient */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full filter blur-2xl -mr-20 -mt-20 opacity-70 pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="flex flex-wrap gap-4 sm:gap-0 justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                                        <p className="text-primary font-medium mt-1">{exp.company}</p>
                                        {exp.program && (
                                            <p className="text-sm text-muted-foreground mt-1">
                                                {exp.program}
                                            </p>
                                        )}
                                    </div>
                                    <div className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-medium">
                                        {exp.duration}
                                    </div>
                                </div>
                                
                                <p className="text-muted-foreground mb-4">{exp.description}</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span 
                                            key={i}
                                            className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
                {/* Hackathon Experience */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        <span>Hackathon Experience</span>
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        {hackathons.map((hackathon, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -5, 
                                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-background rounded-xl border overflow-hidden shadow relative"
                            >
                                <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
                                <div className="p-5">
                                    <div className="mb-3 flex items-start justify-between">
                                        <h4 className="font-semibold text-lg">{hackathon.name}</h4>
                                        <span className="text-xs text-muted-foreground">{hackathon.date}</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mb-2">{hackathon.organizer}</p>
                                    <div className="mb-3 inline-block px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                                        {hackathon.achievement}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">{hackathon.description}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {hackathon.technologies.slice(0, 3).map((tech, j) => (
                                            <span key={j} className="text-xs px-2 py-0.5 bg-secondary rounded">
                                                {tech}
                                            </span>
                                        ))}
                                        {hackathon.technologies.length > 3 && (
                                            <span className="text-xs px-2 py-0.5 bg-secondary rounded">
                                                +{hackathon.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}