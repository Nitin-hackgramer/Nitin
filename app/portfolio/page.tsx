// "use client";
// import React, { useState, useEffect } from "react";
// import { 
//   BadgeCheck, 
//   Users, 
//   Code, 
//   Database, 
//   Github, 
//   Layers, 
//   Rocket, 
//   GraduationCap,
//   Award,
//   Briefcase,
//   ChevronRight,
//   Coffee,
//   Cpu
// } from "lucide-react";
// import { motion } from "framer-motion";

// // TECH STACK ORGANIZED BY CATEGORY
// type TechCategory = "Programming Languages" | "Frontend" | "Backend" | "Databases" | "Tools & Platforms";

// type Tech = { name: string; level: number };

// const techStack: Record<TechCategory, Tech[]> = {
//   "Programming Languages": [
//     { name: "JavaScript", level: 90 },
//     { name: "Python", level: 85 },
//     { name: "C/C++", level: 75 },
//     { name: "HTML/CSS", level: 95 },
//   ],
//   "Frontend": [
//     { name: "React", level: 88 },
//     { name: "Next.js", level: 85 },
//     { name: "Tailwind CSS", level: 92 },
//     { name: "Framer Motion", level: 80 },
//   ],
//   "Backend": [
//     { name: "Django", level: 82 },
//     { name: "REST APIs", level: 87 },
//     { name: "Node.js", level: 70 },
//   ],
//   "Databases": [
//     { name: "SQL", level: 80 },
//     { name: "MongoDB", level: 65 },
//     { name: "PostgreSQL", level: 75 },
//   ],
//   "Tools & Platforms": [
//     { name: "Git & GitHub", level: 90 },
//     { name: "VS Code", level: 95 },
//     { name: "PyCharm", level: 85 },
//     { name: "Vercel", level: 88 },
//     { name: "Figma", level: 75 },
//   ]
// };

// // EDUCATION DATA
// const education = [
//   {
//     institution: "Inderprastha Engineering College",
//     degree: "Bachelor of Technology",
//     field: "Computer Science & Engineering",
//     duration: "2024 - 2028",
//     location: "Ghaziabad, India",
//     affiliation: "Dr. A.P.J Abdul Kalam Technical University (AKTU)"
//   }
// ];

// // EXPERIENCE DATA
// const experiences = [
//   {
//     role: "Student Intern",
//     company: "Scaler School of Technology",
//     program: "YIIP Program",
//     duration: "Summer 2023",
//     description: "Participated in Young Innovator Internship Program focused on full-stack development using modern technologies. Collaborated with senior developers to build educational tech platforms.",
//     skills: ["Next.js", "Django", "Team Collaboration"]
//   }
// ];

// // HACKATHON DATA
// const hackathons = [
//   {
//     name: "Helping Hands Hackathon",
//     organizer: "TechForGood",
//     date: "March 2023",
//     achievement: "1st Place Winner",
//     description: "Developed a platform connecting elders and children with trusted assistants through location-based matching and verification systems.",
//     technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"]
//   },
//   {
//     name: "CodeFest 2023",
//     organizer: "University Tech Alliance",
//     date: "October 2023",
//     achievement: "Top 5 Finalist",
//     description: "Built a real-time collaborative coding platform with live debugging capabilities.",
//     technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
//   },
//   {
//     name: "DevHack 2024",
//     organizer: "Developer Community Network",
//     date: "February 2024",
//     achievement: "Best UI/UX Award",
//     description: "Created an AI-powered accessibility tool that translates websites for people with visual impairments.",
//     technologies: ["React", "Python", "TensorFlow", "Web Speech API"]
//   }
// ];

// // FEATURED PROJECTS WITH ADDITIONAL DETAILS
// const projects = [
//   {
//     name: "Innovexa",
//     description: "A tech community platform with features like Member Spotlight, Freelance Gigs, Polls, and Challenges.",
//     technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
//     features: ["Member Profiles", "Discussion Forum", "Project Showcase", "Job Board"],
//     image: "/images/innovexa.png",
//     link: "#",
//   },
//   {
//     name: "Website Timer Extension",
//     description: "Chrome extension tracking time spent on websites with beautiful UI, usage history, and keyword tracking.",
//     technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
//     features: ["Daily Usage Analytics", "Category Filtering", "Productivity Insights", "Export Data"],
//     image: "/images/web-timer.png",
//     link: "#",
//   },
//   {
//     name: "Helping Hands",
//     description: "Platform connecting elders and children with trustworthy assistants using location-based matching.",
//     technologies: ["React", "Django REST", "Google Maps API", "AWS"],
//     features: ["Background Verification", "Real-time Tracking", "Rating System", "Emergency Alerts"],
//     image: "/images/helping-hands.png",
//     link: "#",
//   },
// ];

// // SKILLS WITH CATEGORIES 
// const skills = {
//   "Development": ["Full-stack Development", "Responsive Design", "API Integration", "State Management"],
//   "Design": ["UI/UX Design", "Wireframing", "Prototyping", "Visual Hierarchy"],
//   "Operations": ["Version Control", "Deployment Automation", "SEO Optimization", "Performance Tuning"],
//   "Soft Skills": ["Team Leadership", "Community Management", "Technical Writing", "Problem Solving"]
// };

// // CUSTOM SECTION COMPONENT WITH ANIMATIONS
// type SectionProps = {
//   id: string;
//   title: string;
//   icon?: React.ReactNode;
//   children: React.ReactNode;
//   className?: string;
// };

// const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = "" }) => {
//   return (
//     <motion.section
//       id={id}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className={`py-16 ${className}`}
//     >
//       <div className="mb-8 text-center">
//         {icon && <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10">{icon}</div>}
//         <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">{title}</h2>
//         <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
//       </div>
//       {children}
//     </motion.section>
//   );
// }

// export default function PortfolioPage() {
//     const [activeTab, setActiveTab] = useState<TechCategory>("Programming Languages");
//     const [isScrolled, setIsScrolled] = useState(false);

//     // Navigation handling
//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
        
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Staggered animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { duration: 0.5 }
//         }
//     };

//     return (
//         <>
//             {/* Floating Nav */}
//             <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
//                 <div className="container-custom py-4 flex justify-center">
//                     <ul className="flex space-x-1 p-1 bg-muted/80 rounded-full backdrop-blur-sm">
//                         {["hero", "skills", "tech", "projects", "education", "experience", "contact"].map((item) => (
//                             <li key={item}>
//                                 <a 
//                                     href={`#${item}`}
//                                     className="px-4 py-2 text-sm font-medium rounded-full hover:bg-primary/10 transition-colors"
//                                 >
//                                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </nav>

//             <div className="container-custom space-y-4">
//                 {/* Hero Section */}
//                 <Section id="hero" title="" className="min-h-[90vh] flex items-center justify-center py-20">
//                     <div className="grid md:grid-cols-2 gap-10 items-center">
//                         <motion.div 
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.5 }}
//                             className="space-y-6"
//                         >
//                             <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
//                                 Full-Stack Developer & Community Leader
//                             </div>
//                             <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
//                                 Creating <span className="text-primary">modern</span> web experiences
//                             </h1>
//                             <p className="text-lg text-muted-foreground max-w-lg">
//                                 I design and build full-stack applications with a focus on user experience,
//                                 performance, and clean code. Passionate about community-driven development.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                                 <motion.a 
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     href="/contact" 
//                                     className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium shadow hover:shadow-lg hover:bg-primary/90 transition"
//                                 >
//                                     Get in Touch
//                                 </motion.a>
//                                 <motion.a 
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     href="/contact" 
//                                     className="bg-secondary border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-secondary/80 transition"
//                                 >
//                                     View Projects
//                                 </motion.a>
//                             </div>
//                             <div className="flex gap-4 pt-4">
//                                 <a href="https://github.com/nitin-hackgramer" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
//                                     <Github className="h-6 w-6" />
//                                 </a>
//                                 <a href="https://linkedin.com/in/nitin-sharma-a1a1a62ab" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                                     </svg>
//                                 </a>
//                                 <a href="https://twitter.com/NitinSh60345544" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </motion.div>
//                         <motion.div 
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="relative w-full aspect-square max-w-md mx-auto"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-70"></div>
//                             <div className="relative bg-background border-4 border-background shadow-2xl rounded-full overflow-hidden aspect-square">
//                                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
//                                 <img 
//                                     src="Nitin.jpg" 
//                                     alt="Developer Portrait" 
//                                     className="object-cover w-full h-full rounded-full"
//                                 />
//                             </div>
//                             {/* Decorative elements */}
//                             <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg">
//                                 <Code className="h-6 w-6" />
//                             </div>
//                             <div className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-full shadow-lg">
//                                 <Database className="h-6 w-6" />
//                             </div>
//                         </motion.div>
//                     </div>
//                 </Section>

//                 {/* Skills Section */}
//                 <Section 
//                     id="skills" 
//                     title="My Skills" 
//                     icon={<BadgeCheck className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {Object.entries(skills).map(([category, categorySkills]) => (
//                             <motion.div
//                                 key={category}
//                                 variants={itemVariants}
//                                 className="bg-gradient-to-br from-background to-muted p-6 rounded-xl border shadow-sm"
//                             >
//                                 <h3 className="text-xl font-semibold mb-4 text-foreground border-b pb-2">{category}</h3>
//                                 <ul className="space-y-3">
//                                     {categorySkills.map((skill, i) => (
//                                         <motion.li 
//                                             key={i}
//                                             initial={{ opacity: 0, x: -20 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: i * 0.1 }}
//                                             className="flex items-center gap-2"
//                                         >
//                                             <span className="text-primary">•</span>
//                                             <span className="text-muted-foreground">{skill}</span>
//                                         </motion.li>
//                                     ))}
//                                 </ul>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </Section>

//                 {/* Tech Stack Section */}
//                 <Section 
//                     id="tech" 
//                     title="Tech Stack" 
//                     icon={<Layers className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="mb-6">
//                         <div className="flex flex-wrap gap-2 justify-center mb-8">
//                             {Object.keys(techStack).map((category) => (
//                                 <button
//                                     key={category}
//                                     onClick={() => setActiveTab(category as TechCategory)}
//                                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                                         activeTab === category 
//                                             ? "bg-primary text-white shadow-md" 
//                                             : "bg-muted hover:bg-primary/10"
//                                     }`}
//                                 >
//                                     {category}
//                                 </button>
//                             ))}
//                         </div>
                        
//                         <motion.div 
//                             key={activeTab}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
//                         >
//                             {techStack[activeTab].map((tech, i) => (
//                                 <motion.div
//                                     key={tech.name}
//                                     initial={{ opacity: 0, x: -20 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     transition={{ delay: i * 0.1 }}
//                                     className="bg-background p-4 rounded-lg border shadow-sm"
//                                 >
//                                     <div className="flex justify-between items-center mb-2">
//                                         <span className="font-medium">{tech.name}</span>
//                                         <span className="text-sm text-muted-foreground">{tech.level}%</span>
//                                     </div>
//                                     <div className="w-full bg-muted rounded-full h-2.5">
//                                         <div 
//                                             className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
//                                             style={{ width: `${tech.level}%` }}
//                                         ></div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>
//                     </div>
//                 </Section>

//                 {/* Projects Section */}
//                 <Section 
//                     id="projects" 
//                     title="Featured Projects" 
//                     icon={<Rocket className="h-6 w-6 text-primary" />}
//                 >
//                     <motion.div 
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//                     >
//                         {projects.map((project, i) => (
//                             <motion.div
//                                 key={project.name}
//                                 variants={itemVariants}
//                                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                                 className="group bg-background rounded-xl border overflow-hidden shadow hover:shadow-md transition"
//                             >
//                                 <div className="h-48 overflow-hidden bg-muted">
//                                     <img 
//                                         src="/api/placeholder/400/240" 
//                                         alt={project.name} 
//                                         className="w-full h-full object-cover transition-transform group-hover:scale-105" 
//                                     />
//                                 </div>
//                                 <div className="p-6 space-y-4">
//                                     <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
//                                     <p className="text-sm text-muted-foreground">{project.description}</p>
                                    
//                                     <div className="pt-2">
//                                         <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Technologies</h4>
//                                         <div className="flex flex-wrap gap-2">
//                                             {project.technologies.map((tech, j) => (
//                                                 <span key={j} className="bg-secondary/50 text-xs px-2 py-1 rounded-md">
//                                                     {tech}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
                                    
//                                     <div className="pt-2">
//                                         <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Key Features</h4>
//                                         <ul className="text-xs text-muted-foreground space-y-1">
//                                             {project.features.map((feature, k) => (
//                                                 <li key={k} className="flex items-center gap-1">
//                                                     <ChevronRight className="h-3 w-3 text-primary flex-shrink-0" />
//                                                     <span>{feature}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
                                    
//                                     <a
//                                         href={project.link}
//                                         className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
//                                     >
//                                         View Project <ChevronRight className="h-4 w-4 ml-1" />
//                                     </a>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
                    
//                     <div className="mt-12 text-center">
//                         <motion.a
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                             href="/projects"
//                             className="inline-flex items-center bg-primary/10 text-primary hover:bg-primary/20 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
//                         >
//                             View All Projects <ChevronRight className="h-4 w-4 ml-1" />
//                         </motion.a>
//                     </div>
//                 </Section>

//                 {/* Education Section */}
//                 <Section 
//                     id="education" 
//                     title="Education" 
//                     icon={<GraduationCap className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="max-w-3xl mx-auto">
//                         {education.map((edu, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ delay: i * 0.2 }}
//                                 className="relative pl-10 pb-10 last:pb-0"
//                             >
//                                 {/* Timeline */}
//                                 <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
//                                 <div className="absolute left-0 top-1 -translate-x-1/2 h-6 w-6 rounded-full border-4 border-background bg-primary"></div>
                                
//                                 <div className="bg-muted/50 p-6 rounded-xl">
//                                     <div className="flex flex-wrap justify-between gap-4 mb-2">
//                                         <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
//                                         <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
//                                             {edu.duration}
//                                         </span>
//                                     </div>
//                                     <p className="text-lg font-medium text-foreground">{edu.degree} in {edu.field}</p>
//                                     <p className="text-sm text-muted-foreground mt-1">Affiliated with {edu.affiliation}</p>
//                                     <div className="mt-4 pt-4 border-t border-border/50">
//                                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
//                                             <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
//                                             <span>Focused on web technologies, data structures, and algorithms</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
//                                             <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
//                                             <span>Participated in coding clubs and technical events</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
//                                             <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
//                                             <span>Completed capstone project on community-driven development platforms</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </Section>

//                 {/* Experience Section */}
//                 <Section 
//                     id="experience" 
//                     title="Experience & Achievements" 
//                     icon={<Briefcase className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="space-y-12">
//                         {/* Internship */}
//                         <div className="max-w-4xl mx-auto">
//                             <h3 className="text-2xl font-semibold mb-6 text-center">Professional Experience</h3>
//                             {experiences.map((exp, i) => (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     className="bg-gradient-to-br from-background to-muted rounded-xl border p-6 shadow"
//                                 >
//                                     <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
//                                         <div>
//                                             <h4 className="text-xl font-medium text-foreground">{exp.role}</h4>
//                                             <p className="text-primary font-medium">{exp.company} - {exp.program}</p>
//                                         </div>
//                                         <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
//                                             {exp.duration}
//                                         </span>
//                                     </div>
//                                     <p className="text-muted-foreground mb-4">{exp.description}</p>
//                                     <div className="flex flex-wrap gap-2 mt-2">
//                                         {exp.skills.map((skill, j) => (
//                                             <span key={j} className="text-xs px-3 py-1 bg-secondary rounded-full">
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         {/* Hackathons */}
//                         <div className="max-w-4xl mx-auto">
//                             <h3 className="text-2xl font-semibold mb-6 text-center">Hackathon Achievements</h3>
//                             <div className="grid md:grid-cols-3 gap-6">
//                                 {hackathons.map((hackathon, i) => (
//                                     <motion.div
//                                         key={i}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         viewport={{ once: true }}
//                                         transition={{ delay: i * 0.1 }}
//                                         className="bg-background rounded-xl border overflow-hidden shadow group"
//                                     >
//                                         <div className="h-2 bg-gradient-to-r from-primary to-accent group-hover:h-3 transition-all"></div>
//                                         <div className="p-6">
//                                             <span className="text-xs font-medium text-muted-foreground">{hackathon.date}</span>
//                                             <h4 className="text-lg font-medium mt-1">{hackathon.name}</h4>
//                                             <p className="text-sm text-muted-foreground mt-1">{hackathon.organizer}</p>
                                            
//                                             <div className="mt-3 inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
//                                                 {hackathon.achievement}
//                                             </div>
                                            
//                                             <p className="text-sm text-muted-foreground mt-3">{hackathon.description}</p>
                                            
//                                             <div className="mt-4 flex flex-wrap gap-2">
//                                                 {hackathon.technologies.slice(0, 2).map((tech, j) => (
//                                                     <span key={j} className="text-xs px-2 py-1 bg-secondary/50 rounded-md">
//                                                         {tech}
//                                                     </span>
//                                                 ))}
//                                                 {hackathon.technologies.length > 2 && (
//                                                     <span className="text-xs px-2 py-1 bg-secondary/50 rounded-md">
//                                                         +{hackathon.technologies.length - 2} more
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </Section>

//                 {/* Community Section */}
//                 <Section 
//                     id="community" 
//                     title="Community Leadership" 
//                     icon={<Users className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
//                         <motion.div
//                             initial={{ opacity: 0, x: -30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                         >
//                             <h3 className="text-2xl font-semibold mb-4">Building Communities</h3>
//                             <p className="text-muted-foreground mb-6">
//                                 I co-manage a thriving tech community with over 170+ developers and creators from diverse backgrounds.
//                                 We foster collaboration, knowledge sharing, and professional growth.
//                             </p>
                            
//                             <div className="space-y-4">
//                                 <div className="flex items-start gap-3">
//                                     <div className="bg-primary/10 p-2 rounded-lg mt-1">
//                                         <Users className="h-5 w-5 text-primary" />
//                                     </div>
//                                     <div>
//                                         <h4 className="font-medium">Membership Growth</h4>
//                                         <p className="text-sm text-muted-foreground">Expanded community from 20 to 170+ members in 8 months</p>
//                                     </div>
//                                 </div>
                                
//                                 <div className="flex items-start gap-3">
//                                     <div className="bg-primary/10 p-2 rounded-lg mt-1">
//                                         <Award className="h-5 w-5 text-primary" />
//                                     </div>
//                                     <div>
//                                         <h4 className="font-medium">Events & Workshops</h4>
//                                         <p className="text-sm text-muted-foreground">Organized 10+ events, workshops, and hackathons for upskilling</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start gap-3">
//                                     <div className="bg-primary/10 p-2 rounded-lg mt-1">
//                                         <Coffee className="h-5 w-5 text-primary" />
//                                     </div>
//                                     <div>
//                                         <h4 className="font-medium">Mentorship</h4>
//                                         <p className="text-sm text-muted-foreground">Mentored junior developers and facilitated peer learning</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                         <motion.div
//                             initial={{ opacity: 0, x: 30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             viewport={{ once: true }}
//                             className="w-full flex justify-center"
//                         >
//                             <div className="relative w-full max-w-xs">
//                                 <div className="absolute -top-4 -left-4 bg-accent text-white p-4 rounded-full shadow-lg">
//                                     <Cpu className="h-6 w-6" />
//                                 </div>
//                                 <div className="relative bg-background border-4 border-background shadow-2xl rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
//                                     <img 
//                                         src="/community.png" 
//                                         alt="Community" 
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </Section>
//             </div>
//         </>
//     );
// }


"use client";
import React, { useState, useEffect } from "react";
import { 
  BadgeCheck, 
  Users, 
  Code, 
  Database, 
  Github, 
  Layers, 
  Rocket, 
  GraduationCap,
  Award,
  Briefcase,
  ChevronRight,
  Coffee,
  Cpu,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence, useSpring } from "framer-motion";

interface CustomCursorProps {
    x: number;
    y: number;
    isHovering: boolean;
}

// TECH STACK ORGANIZED BY CATEGORY
type TechCategory = "Programming Languages" | "Frontend" | "Backend" | "Databases" | "Tools & Platforms";

type Tech = { name: string; level: number };

const techStack: Record<TechCategory, Tech[]> = {
  "Programming Languages": [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "C/C++", level: 75 },
    { name: "HTML/CSS", level: 95 },
  ],
  "Frontend": [
    { name: "React", level: 88 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 80 },
  ],
  "Backend": [
    { name: "Django", level: 82 },
    { name: "REST APIs", level: 87 },
    { name: "Node.js", level: 70 },
  ],
  "Databases": [
    { name: "SQL", level: 80 },
    { name: "MongoDB", level: 65 },
    { name: "PostgreSQL", level: 75 },
  ],
  "Tools & Platforms": [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "PyCharm", level: 85 },
    { name: "Vercel", level: 88 },
    { name: "Figma", level: 75 },
  ]
};

// EDUCATION DATA
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

// EXPERIENCE DATA
const experiences = [
  {
    role: "Student Intern",
    company: "Scaler School of Technology",
    program: "YIIP Program",
    duration: "Summer 2023",
    description: "Participated in Young Innovator Internship Program focused on full-stack development using modern technologies. Collaborated with senior developers to build educational tech platforms.",
    skills: ["Next.js", "Django", "Team Collaboration"]
  }
];

// HACKATHON DATA
const hackathons = [
  {
    name: "Helping Hands Hackathon",
    organizer: "TechForGood",
    date: "March 2023",
    achievement: "1st Place Winner",
    description: "Developed a platform connecting elders and children with trusted assistants through location-based matching and verification systems.",
    technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"]
  },
  {
    name: "CodeFest 2023",
    organizer: "University Tech Alliance",
    date: "October 2023",
    achievement: "Top 5 Finalist",
    description: "Built a real-time collaborative coding platform with live debugging capabilities.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"]
  },
  {
    name: "DevHack 2024",
    organizer: "Developer Community Network",
    date: "February 2024",
    achievement: "Best UI/UX Award",
    description: "Created an AI-powered accessibility tool that translates websites for people with visual impairments.",
    technologies: ["React", "Python", "TensorFlow", "Web Speech API"]
  }
];

// FEATURED PROJECTS WITH ADDITIONAL DETAILS
const projects = [
  {
    name: "Innovexa",
    description: "A tech community platform with features like Member Spotlight, Freelance Gigs, Polls, and Challenges.",
    technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
    features: ["Member Profiles", "Discussion Forum", "Project Showcase", "Job Board"],
    image: "/images/innovexa.png",
    link: "#",
  },
  {
    name: "Website Timer Extension",
    description: "Chrome extension tracking time spent on websites with beautiful UI, usage history, and keyword tracking.",
    technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
    features: ["Daily Usage Analytics", "Category Filtering", "Productivity Insights", "Export Data"],
    image: "/images/web-timer.png",
    link: "#",
  },
  {
    name: "Helping Hands",
    description: "Platform connecting elders and children with trustworthy assistants using location-based matching.",
    technologies: ["React", "Django REST", "Google Maps API", "AWS"],
    features: ["Background Verification", "Real-time Tracking", "Rating System", "Emergency Alerts"],
    image: "/images/helping-hands.png",
    link: "#",
  },
];

// SKILLS WITH CATEGORIES 
const skills = {
  "Development": ["Full-stack Development", "Responsive Design", "API Integration", "State Management"],
  "Design": ["UI/UX Design", "Wireframing", "Prototyping", "Visual Hierarchy"],
  "Operations": ["Version Control", "Deployment Automation", "SEO Optimization", "Performance Tuning"],
  "Soft Skills": ["Team Leadership", "Community Management", "Technical Writing", "Problem Solving"]
};

// CUSTOM SECTION COMPONENT WITH ANIMATIONS
type SectionProps = {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ id, title, icon, children, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-16 ${className}`}
    >
      <div className="mb-12 text-center">
        {icon && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="inline-flex items-center justify-center p-4 mb-5 rounded-full bg-primary/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            {icon}
          </motion.div>
        )}
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3"
        >
          {title}
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"
        ></motion.div>
      </div>
      {children}
    </motion.section>
  );
}

export default function PortfolioPage() {
    const [activeTab, setActiveTab] = useState<TechCategory>("Programming Languages");
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [showCustomCursor, setShowCustomCursor] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const CustomCursor: React.FC<CustomCursorProps> = ({ x, y, isHovering }) => {
        const springConfig = { damping: 25, stiffness: 300 };
        const cursorX = useSpring(x, springConfig);
        const cursorY = useSpring(y, springConfig);
        const cursorSize = isHovering ? 40 : 20;
        const cursorOpacity = isHovering ? 0.5 : 1;

        return (
            <motion.div
                style={{
                    position: 'fixed',
                    left: cursorX,
                    top: cursorY,
                    width: cursorSize,
                    height: cursorSize,
                    backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.7)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    opacity: cursorOpacity,
                    backdropFilter: isHovering ? 'blur(5px)' : 'none',
                    transition: 'width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, opacity 0.2s ease-out, backdrop-filter 0.2s ease-out'
                }}
            />
        );
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!showCustomCursor) {
                setShowCustomCursor(true);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [showCustomCursor]);

    const gradientVariants = {
        animate: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            transition: {
                duration: 10,
                ease: "linear",
                repeat: Infinity
            }
        }
    };

    const containerPulse = {
        scale: [1, 1.01, 1],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
        }
    };

    // Navigation handling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when selecting a navigation item
    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    // Staggered animation variants
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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Glow animation variants
    const glowVariants = {
        hover: {
            boxShadow: "0 0 20px 5px rgba(59, 130, 246, 0.5)",
            scale: 1.02,
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
            {/* Main Navigation - moved below website navbar with appropriate spacing */}
            <nav className={`sticky top-16 z-40 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
                <div className="container-custom py-3 flex justify-between items-center">
                    {/* Mobile Navigation Toggle */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-full bg-muted/80 hover:bg-primary/10 transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                    
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-1 p-1 bg-muted/80 rounded-full backdrop-blur-sm shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                        {["hero", "skills", "tech", "projects", "education", "experience", "contact"].map((item) => (
                            <li key={item}>
                                <motion.a 
                                    href={`#${item}`}
                                    whileHover={{ 
                                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 text-sm font-medium rounded-full hover:bg-primary/10 transition-colors block"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </motion.a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Empty div to balance the flex layout */}
                    <div className="md:block hidden"></div>
                </div>
                
                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-background/95 backdrop-blur-lg shadow-lg border-t"
                        >
                            <ul className="py-3 px-4 space-y-2">
                                {["hero", "skills", "tech", "projects", "education", "experience", "contact"].map((item) => (
                                    <li key={item}>
                                        <a 
                                            href={`#${item}`}
                                            onClick={handleNavClick}
                                            className="block py-2 px-3 rounded-lg hover:bg-primary/10 transition-colors text-center font-medium"
                                        >
                                            {item.charAt(0).toUpperCase() + item.slice(1)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <div className="container-custom space-y-4">
                {/* Hero Section */}
                <Section id="hero" title="" className="min-h-[90vh] flex items-center justify-center py-20">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, type: "spring" }}
                            className="space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                            >
                                Full-Stack Developer & Community Leader
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
                            >
                                Creating <span className="text-primary relative">
                                    modern
                                    <motion.span 
                                        className="absolute bottom-0 left-0 w-full h-[0.2em] bg-gradient-to-r from-primary to-blue-400 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 0.8 }}
                                    />
                                </span> web experiences
                            </motion.h1>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.7 }}
                                className="text-lg text-muted-foreground max-w-lg"
                            >
                                I design and build full-stack applications with a focus on user experience,
                                performance, and clean code. Passionate about community-driven development.
                            </motion.p>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <motion.a 
                                    whileHover={{ 
                                        scale: 1.05, 
                                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    href="/contact" 
                                    className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium shadow hover:shadow-lg hover:bg-primary/90 transition"
                                >
                                    Get in Touch
                                </motion.a>
                                <motion.a 
                                    whileHover={{ 
                                        scale: 1.05, 
                                        boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" 
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#projects" 
                                    className="bg-secondary border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-secondary/80 transition"
                                >
                                    View Projects
                                </motion.a>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                                className="flex gap-5 pt-4"
                            >
                                <motion.a 
                                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                                    href="https://github.com/nitin-hackgramer" 
                                    target="_blank" 
                                    className="text-muted-foreground transition-colors"
                                >
                                    <Github className="h-6 w-6" />
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                                    href="https://linkedin.com/in/nitin-sharma-a1a1a62ab" 
                                    target="_blank" 
                                    className="text-muted-foreground transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </motion.a>
                                <motion.a 
                                    whileHover={{ scale: 1.2, color: "#3b82f6" }}
                                    href="https://twitter.com/NitinSh60345544" 
                                    target="_blank" 
                                    className="text-muted-foreground transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                            className="relative w-full aspect-square max-w-md mx-auto"
                        >
                            {/* Animated background glow */}
                            <motion.div 
                                animate={{ 
                                    scale: [1, 1.05, 1],
                                    opacity: [0.6, 0.8, 0.6]
                                }} 
                                transition={{ 
                                    repeat: Infinity, 
                                    duration: 5,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
                            ></motion.div>

                            <div className="relative bg-background border-4 border-background shadow-2xl rounded-full overflow-hidden aspect-square group">
                                {/* Animated gradient background - always active */}
                                <motion.div 
                                    initial={{ opacity: 0.3 }}
                                    animate={{ 
                                        opacity: [0.3, 0.6, 0.3],
                                        background: [
                                            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
                                            "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
                                            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)"
                                        ]
                                    }}
                                    transition={{ 
                                        duration: 8, 
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }}
                                    className="absolute inset-0 z-0"
                                />
                                
                                {/* Arcade-style animated background with softer elements */}
                                <motion.div 
                                    initial={{ opacity: 0.3 }}
                                    animate={{ 
                                        opacity: [0.3, 0.6, 0.3],
                                        background: [
                                            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
                                            "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
                                            "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)"
                                        ]
                                    }}
                                    transition={{ 
                                        duration: 8, 
                                        repeat: Infinity,
                                        ease: "easeInOut" 
                                    }}
                                    className="absolute inset-0 z-0"
                                />
                                
                                {/* Floating tech bubbles */}
                                <div className="absolute inset-0 overflow-hidden z-10 rounded-full opacity-70">
                                    {/* Floating bubbles */}
                                    {[...Array(15)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ 
                                                x: Math.random() * 100 - 50, 
                                                y: Math.random() * 100 - 50,
                                                opacity: 0.3 + Math.random() * 0.4,
                                                scale: Math.random() * 0.6 + 0.4
                                            }}
                                            animate={{ 
                                                x: [
                                                    Math.random() * 120 - 60,
                                                    Math.random() * 120 - 60,
                                                    Math.random() * 120 - 60
                                                ],
                                                y: [
                                                    Math.random() * 120 - 60,
                                                    Math.random() * 120 - 60,
                                                    Math.random() * 120 - 60
                                                ],
                                                opacity: [0.3, 0.7, 0.3],
                                                rotate: [0, 180, 360]
                                            }}
                                            transition={{ 
                                                duration: 15 + Math.random() * 15,
                                                repeat: Infinity,
                                                ease: "easeInOut" 
                                            }}
                                            className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/20"
                                            style={{
                                                width: `${10 + Math.random() * 15}px`,
                                                height: `${10 + Math.random() * 15}px`,
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                filter: "blur(1px)"
                                            }}
                                        />
                                    ))}
                                    
                                    {/* Tech symbols in larger bubbles */}
                                    {[...Array(6)].map((_, i) => {
                                        const size = 20 + Math.random() * 20;
                                        const symbols = ['{  }', '<  >', '(  )', '[  ]', '&&', '==', '++', '**'];
                                        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
                                        
                                        return (
                                            <motion.div
                                                key={`tech-${i}`}
                                                initial={{ 
                                                    opacity: 0.5,
                                                    scale: 0.8,
                                                    x: `${Math.random() * 100}%`, 
                                                    y: `${Math.random() * 100}%`
                                                }}
                                                animate={{ 
                                                    opacity: [0.5, 0.8, 0.5],
                                                    scale: [0.8, 1, 0.8],
                                                    x: [
                                                        `${Math.random() * 80 + 10}%`,
                                                        `${Math.random() * 80 + 10}%`,
                                                        `${Math.random() * 80 + 10}%`
                                                    ],
                                                    y: [
                                                        `${Math.random() * 80 + 10}%`,
                                                        `${Math.random() * 80 + 10}%`,
                                                        `${Math.random() * 80 + 10}%`
                                                    ]
                                                }}
                                                transition={{ 
                                                    duration: 20 + Math.random() * 10,
                                                    repeat: Infinity,
                                                    delay: Math.random() * 5,
                                                    ease: "easeInOut" 
                                                }}
                                                className="absolute flex items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs font-mono text-primary/70"
                                                style={{
                                                    width: `${size}px`,
                                                    height: `${size}px`
                                                }}
                                            >
                                                {symbol}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                                
                                {/* Main portrait with soft animations */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ 
                                        scale: [0.98, 1.02, 0.98],
                                        opacity: 1
                                    }}
                                    transition={{ 
                                        scale: {
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        },
                                        opacity: { duration: 1 }
                                    }}
                                    className="relative z-20 w-full h-full rounded-full overflow-hidden"
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    {/* Soft glow overlay on hover */}
                                    <motion.div 
                                        className="absolute inset-0 z-20 bg-gradient-to-tr from-primary/10 to-transparent transition-opacity duration-300"
                                        animate={{ 
                                            opacity: [0.2, 0.4, 0.2]
                                        }}
                                        whileHover={{ opacity: 0.6 }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    
                                    <motion.img 
                                        initial={{ scale: 1.2, filter: "blur(10px)" }}
                                        animate={{ 
                                            scale: 1, 
                                            filter: "blur(0px)",
                                            rotate: [0, 0.5, 0, -0.5, 0] // very subtle rotation
                                        }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { duration: 0.3 } 
                                        }}
                                        transition={{ 
                                            scale: { duration: 0.8, delay: 0.3 },
                                            filter: { duration: 0.8, delay: 0.3 },
                                            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                                        }}
                                        src="Nitin.jpg" 
                                        alt="Developer Portrait" 
                                        className="object-cover w-full h-full rounded-full"
                                    />
                                </motion.div>
                                
                                {/* Arcade-style rotating border */}
                                <motion.div 
                                    initial={{ opacity: 0.4, scale: 1.05, rotate: 0 }}
                                    animate={{ 
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [1.05, 1.07, 1.05],
                                        rotate: [0, 360]
                                    }}
                                    whileHover={{ opacity: 0.9, scale: 1.1 }}
                                    transition={{ 
                                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 30, repeat: Infinity, ease: "linear" }
                                    }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 z-10 pointer-events-none"
                                />
                                
                                {/* Soft pulsing glow effect */}
                                <motion.div
                                    animate={{ 
                                        opacity: [0, 0.2, 0],
                                        scale: [0.8, 1.1, 0.8]
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-0 bg-primary/20 rounded-full blur-md z-0"
                                />
                                
                                {/* Arcade-style decorative elements */}
                                {[...Array(8)].map((_, i) => {
                                    const angle = (i / 8) * Math.PI * 2;
                                    const x = Math.cos(angle) * 48 + 50;
                                    const y = Math.sin(angle) * 48 + 50;
                                    
                                    return (
                                        <motion.div
                                            key={`pixel-${i}`}
                                            initial={{ opacity: 0.4 }}
                                            animate={{ 
                                                opacity: [0.4, 0.8, 0.4],
                                                scale: [1, 1.2, 1]
                                            }}
                                            transition={{ 
                                                duration: 2,
                                                delay: i * 0.2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className="absolute w-2 h-2 bg-primary rounded-full z-25 pointer-events-none"
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        />
                                    );
                                })}
                            </div>
                            
                            {/* Floating Code Snippets */}
                            <div className="absolute -top-6 -left-6 z-10 opacity-70 transform -rotate-12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: [0.7, 0.9, 0.7],
                                        y: [-2, 2, -2]
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="bg-background/80 backdrop-blur-sm p-2 rounded-md border border-primary/30 shadow-lg text-[8px] font-mono text-primary/80"
                                >
                                    <div>{'<DevProfile />'}</div>
                                </motion.div>
                            </div>
                            
                            <div className="absolute -bottom-6 -right-6 z-10 opacity-70 transform rotate-12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: [0.7, 0.9, 0.7],
                                        y: [2, -2, 2]
                                    }}
                                    transition={{ 
                                        duration: 3,
                                        delay: 0.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="bg-background/80 backdrop-blur-sm p-2 rounded-md border border-accent/30 shadow-lg text-[8px] font-mono text-accent/80"
                                >
                                    <div>{'{ fullstack: true }'}</div>
                                </motion.div>
                            </div>
                            
                            {/* Modified Custom Cursor with black shadow animation */}
                            {showCustomCursor && (
                                <>
                                    {/* Black shadow cursor (default state) */}
                                    {!isHovering && (
                                        <motion.div
                                            style={{
                                                position: 'fixed',
                                                left: mousePosition.x,
                                                top: mousePosition.y,
                                                pointerEvents: 'none',
                                                zIndex: 9999,
                                                translateX: '-50%',
                                                translateY: '-50%',
                                            }}
                                        >
                                            {/* Main cursor dot */}
                                            <motion.div
                                                className="w-4 h-4 bg-black rounded-full"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.7, 0.9, 0.7],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            
                                            {/* Trailing shadow effect */}
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={`shadow-${i}`}
                                                    className="absolute w-4 h-4 bg-black rounded-full"
                                                    style={{
                                                        left: 0,
                                                        top: 0,
                                                    }}
                                                    animate={{
                                                        opacity: [0.4 - (i * 0.07), 0],
                                                        scale: [1 - (i * 0.1), 0.5 - (i * 0.1)],
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: i * 0.08,
                                                        repeat: Infinity,
                                                        ease: "easeOut"
                                                    }}
                                                />
                                            ))}
                                            
                                            {/* Outer shadow ring */}
                                            <motion.div
                                                className="absolute w-10 h-10 border border-black rounded-full"
                                                style={{
                                                    left: '-3px',
                                                    top: '-3px',
                                                }}
                                                animate={{
                                                    opacity: [0.1, 0.3, 0.1],
                                                    scale: [1, 1.5, 1],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                    
                                    {/* Gamified cursor (hover state) */}
                                    {isHovering && (
                                        <motion.div
                                            style={{
                                                position: 'fixed',
                                                left: mousePosition.x,
                                                top: mousePosition.y,
                                                pointerEvents: 'none',
                                                zIndex: 9999,
                                                translateX: '-50%',
                                                translateY: '-50%',
                                            }}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {/* Arcade game crosshair */}
                                            <motion.div 
                                                className="relative w-16 h-16"
                                                animate={{ rotate: [0, 360] }}
                                                transition={{ 
                                                    duration: 6, 
                                                    repeat: Infinity, 
                                                    ease: "linear" 
                                                }}
                                            >
                                                {/* Outer ring */}
                                                <motion.div 
                                                    className="absolute inset-0 rounded-full border-2 border-primary"
                                                    animate={{ 
                                                        boxShadow: [
                                                            "0 0 0 2px rgba(59, 130, 246, 0.3)",
                                                            "0 0 0 2px rgba(59, 130, 246, 0.8)",
                                                            "0 0 0 2px rgba(59, 130, 246, 0.3)"
                                                        ] 
                                                    }}
                                                    transition={{ 
                                                        duration: 1.5, 
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                                
                                                {/* Cross */}
                                                <motion.div className="absolute left-1/2 top-0 w-0.5 h-full bg-primary transform -translate-x-1/2" />
                                                <motion.div className="absolute left-0 top-1/2 w-full h-0.5 bg-primary transform -translate-y-1/2" />
                                                
                                                {/* Corner dots */}
                                                <motion.div 
                                                    className="absolute left-0 top-0 w-2 h-2 bg-primary rounded-full"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ 
                                                        duration: 0.8, 
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                                <motion.div 
                                                    className="absolute right-0 top-0 w-2 h-2 bg-primary rounded-full"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ 
                                                        duration: 0.8, 
                                                        delay: 0.2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                                <motion.div 
                                                    className="absolute left-0 bottom-0 w-2 h-2 bg-primary rounded-full"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ 
                                                        duration: 0.8, 
                                                        delay: 0.4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                                <motion.div 
                                                    className="absolute right-0 bottom-0 w-2 h-2 bg-primary rounded-full"
                                                    animate={{ scale: [1, 1.5, 1] }}
                                                    transition={{ 
                                                        duration: 0.8, 
                                                        delay: 0.6,
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                                
                                                {/* Arcade pixel indicators */}
                                                {[...Array(8)].map((_, i) => {
                                                    const angle = (i / 8) * Math.PI * 2;
                                                    const radius = 11;
                                                    const x = Math.cos(angle) * radius;
                                                    const y = Math.sin(angle) * radius;
                                                    
                                                    return (
                                                        <motion.div
                                                            key={`pixel-cursor-${i}`}
                                                            className="absolute w-1 h-1 bg-accent"
                                                            style={{
                                                                left: `calc(50% + ${x}px)`,
                                                                top: `calc(50% + ${y}px)`,
                                                                transform: 'translate(-50%, -50%)'
                                                            }}
                                                            animate={{ 
                                                                opacity: [0.3, 1, 0.3], 
                                                            }}
                                                            transition={{ 
                                                                duration: 1, 
                                                                delay: i * 0.125,
                                                                repeat: Infinity,
                                                                ease: "easeInOut"
                                                            }}
                                                        />
                                                    );
                                                })}
                                                
                                                {/* Center target */}
                                                <motion.div 
                                                    className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"
                                                    animate={{ 
                                                        scale: [1, 0.6, 1],
                                                        opacity: [0.8, 1, 0.8],
                                                        boxShadow: [
                                                            "0 0 10px rgba(59, 130, 246, 0.8)",
                                                            "0 0 15px rgba(59, 130, 246, 0.8)",
                                                            "0 0 10px rgba(59, 130, 246, 0.8)"
                                                        ]
                                                    }}
                                                    transition={{ 
                                                        duration: 1.5, 
                                                        repeat: Infinity,
                                                        ease: "easeInOut" 
                                                    }}
                                                />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </>
                            )}
                            {/* Floating decorative elements with animations */}
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.7 }}
                                className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/30"
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.6)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Code className="h-6 w-6" />
                            </motion.div>
                            
                            <motion.div 
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.7 }}
                                className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-full shadow-lg shadow-accent/30"
                                whileHover={{
                                    y: 5,
                                    boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.6)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Database className="h-6 w-6" />
                            </motion.div>
                        </motion.div>
                    </div>
                </Section>

                {/* Skills Section */}
                <Section 
                    id="skills" 
                    title="My Skills" 
                    icon={<BadgeCheck className="h-6 w-6 text-primary" />}
                >
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
                        {Object.entries(skills).map(([category, categorySkills]) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                whileHover={glowVariants.hover}
                                className="bg-gradient-to-br from-background to-muted p-6 rounded-xl border shadow-sm transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold mb-4 text-foreground border-b pb-2">{category}</h3>
                                <ul className="space-y-3">
                                    {categorySkills.map((skill, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ x: 3, color: "#3b82f6", transition: { duration: 0.2 } }}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="text-primary">•</span>
                                            <span className="text-muted-foreground">{skill}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Tech Stack Section */}
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
                                {techStack[activeTab].map((tech, i) => (
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
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${tech.level}%` }}
                                                transition={{ duration: 1, delay: 0.1 }}
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

                {/* Projects Section */}
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
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.name}
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -10, 
                                    boxShadow: "0 15px 30px -10px rgba(59, 130, 246, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                                className="group bg-background rounded-xl border overflow-hidden shadow hover:shadow-md transition relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="h-48 overflow-hidden bg-muted relative"></div>
<div className="h-48 overflow-hidden bg-muted relative">
                                    {/* Project image with animated overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                    <img 
                                        src={project.image || `/api/placeholder/800/500?text=${project.name}`} 
                                        alt={project.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    
                                    {/* Tech badges floating at the top */}
                                    <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
                                        {project.technologies.slice(0, 2).map((tech, index) => (
                                            <span 
                                                key={index}
                                                className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium rounded-full shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 2 && (
                                            <span className="px-2 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium rounded-full shadow-sm">
                                                +{project.technologies.length - 2}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="p-5 relative z-10">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {project.description}
                                    </p>
                                    
                                    {/* Feature list */}
                                    <div className="mb-5">
                                        <div className="grid grid-cols-2 gap-2">
                                            {project.features.slice(0, 4).map((feature, index) => (
                                                <div key={index} className="flex items-center gap-1.5">
                                                    <ChevronRight className="h-3 w-3 text-primary" />
                                                    <span className="text-xs text-muted-foreground">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <a 
                                        href={project.link}
                                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                                    >
                                        View Project
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center"
                    >
                        <motion.a 
                            whileHover={{ 
                                scale: 1.05, 
                                boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" 
                            }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/nitin-hackgramer"
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-secondary border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-secondary/80 transition"
                        >
                            <Github className="h-4 w-4" />
                            See More Projects on GitHub
                        </motion.a>
                    </motion.div>
                </Section>

                {/* Education Section */}
                <Section 
                    id="education" 
                    title="Education" 
                    icon={<GraduationCap className="h-6 w-6 text-primary" />}
                >
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-3xl mx-auto"
                    >
                        {education.map((edu, index) => (
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
                                
                                <div className="flex flex-wrap gap-4 sm:gap-0 justify-between items-start relative z-10">
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.institution}</h3>
                                        <p className="text-primary font-medium mt-1">{edu.degree} in {edu.field}</p>
                                        <p className="text-muted-foreground mt-2">{edu.location}</p>
                                        {edu.affiliation && (
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Affiliated with {edu.affiliation}
                                            </p>
                                        )}
                                    </div>
                                    <div className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-medium">
                                        {edu.duration}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </Section>

                {/* Experience Section */}
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

                {/* Contact Section */}
                <Section 
                    id="contact" 
                    title="Get In Touch" 
                    icon={<Coffee className="h-6 w-6 text-primary" />}
                    className="pb-24"
                >
                    <div className="max-w-3xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-10"
                        >
                            <p className="text-lg text-muted-foreground mb-6">
                                Have a project in mind or want to discuss potential collaborations? 
                                I'd love to hear from you! Feel free to reach out through any of the channels below.
                            </p>
                        </motion.div>
                        
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {/* Email Card */}
                            <motion.a
                                href="mailto:contact@nitinsharma.dev"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5, 
                                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-background rounded-xl p-6 border shadow-sm text-center flex flex-col items-center justify-center"
                            >
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-medium mb-1">Email</h3>
                                <p className="text-sm text-muted-foreground">contact@nitinsharma.dev</p>
                            </motion.a>
                            
                            {/* LinkedIn Card */}
                            <motion.a
                                href="https://linkedin.com/in/nitin-sharma-a1a1a62ab"
                                target="_blank"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5, 
                                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-background rounded-xl p-6 border shadow-sm text-center flex flex-col items-center justify-center"
                            >
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <h3 className="font-medium mb-1">LinkedIn</h3>
                                <p className="text-sm text-muted-foreground">Connect with me</p>
                            </motion.a>
                            
                            {/* GitHub Card */}
                            <motion.a
                                href="https://github.com/nitin-hackgramer"
                                target="_blank"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -5, 
                                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-background rounded-xl p-6 border shadow-sm text-center flex flex-col items-center justify-center"
                            >
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Github className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="font-medium mb-1">GitHub</h3>
                                <p className="text-sm text-muted-foreground">View my code</p>
                            </motion.a>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg mt-12 border border-primary/20"
                        >
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-semibold mb-2">Let's Build Something Amazing Together</h3>
                                <p className="text-muted-foreground">
                                    I'm currently available for freelance work and collaboration opportunities.
                                </p>
                            </div>
                            
                            <div className="flex justify-center">
                                <motion.a 
                                    whileHover={{ 
                                        scale: 1.05, 
                                        boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" 
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    href="mailto:contact@nitinsharma.dev" 
                                    className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-medium shadow-md hover:bg-primary/90 transition flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Me a Message
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </Section>
            </div>
        </>
    );
}
