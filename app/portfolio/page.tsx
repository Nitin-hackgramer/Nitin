
// "use client";
// import React, { useState, useEffect, useCallback, useMemo} from "react";
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
//   Cpu,
//   Menu,
//   X,
//   Home, 
//   User,
//   Mail,
//   Zap 
// } from "lucide-react";
// import { motion, AnimatePresence, useSpring } from "framer-motion";

// // TECH STACK ORGANIZED BY CATEGORY
// type TechCategory = "Programming Languages" | "Frontend" | "Backend" | "Databases" | "Tools & Platforms";

// type Tech = { name: string; level: number };

// const techStack: Record<TechCategory, Tech[]> = {
//       "Programming Languages": [
//             { name: "JavaScript", level: 90 },
//     { name: "Python", level: 90 },
//     { name: "C/C++", level: 85 },
//     { name: "HTML/CSS", level: 95 },
//   ],
//   "Frontend": [
//         { name: "React", level: 70 },
//     { name: "Next.js", level: 70 },
//     { name: "Tailwind CSS", level: 75 },
//     { name: "Framer Motion", level: 80 },
//   ],
//   "Backend": [
//     { name: "Django", level: 70 },
//     { name: "REST APIs", level: 87 },
//     { name: "Node.js", level: 60 },
//   ],
//   "Databases": [
//         { name: "SQL", level: 80 },
//     { name: "MongoDB", level: 65 },
//     { name: "PostgreSQL", level: 50 },
//   ],
//   "Tools & Platforms": [
//         { name: "Git & GitHub", level: 90 },
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
//     skills: ["No-Code Development", "Extension Development", "Artificial Intelligence", "Team Collaboration"]
//   }
// ];

// // HACKATHON DATA
// const hackathons = [
    //     {
//         name: "HackSpire Hackathon", 
//         organizer: "Inderprastha Engineering College",
//         date: "December 2024", 
//         achievement: "Top 15 Finalist - Only App Development Project",
//         description: "Developed an Android application for patient appointment management, doctor schedule viewing, and on-device lung cancer prediction from X-ray images using Kotlin, XML, and TensorFlow Lite.",
//         technologies: ["XML", "Kotlin", "TensorFlow Lite", "Firebase Firestore", "Firebase Auth", "Google Cloud Healthcare API"]
//     },
//     {
//         name: "Python Park - The Hackathon",
//         organizer: "Compunnel Inc.",
//         date: "June 2024",
//         achievement: "Top 10 Finalist - My Very First Hackathon",
//         description: "Developed a resume extractor using Python and libraries like PDFPlumber and regular expressions to parse and extract information from PDF and DOCX files.",
//         technologies: ["Python", "PDFPlumber", "python-docx", "re"]
//     },
//     {
//         name: "Bharat Shiksha Expo 2024 Hackathon",
//         organizer: "Bharat Shiksha Expo",
//         date: "November 2024",
//         achievement: "Top 20 Finalist - Praised for Good Presentation",
//         description: "Developed a platform where users can build a basic landing page and generate a QR code. This helps individuals and small businesses like bakeries and kirana shops to go online in this era of the internet.",
//         technologies: ["React", "HTML", "CSS", "JavaScript"]
//     }
// ];

// // FEATURED PROJECTS WITH ADDITIONAL DETAILS
// const projects = [
//     {
//         name: "Innovexa",
//         description: "A tech community platform with features like Member Spotlight, Freelance Gigs, Polls, and Challenges.",
//         technologies: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
//         features: ["Member Profiles", "Discussion Forum", "Project Showcase", "Job Board"],
//         image: "community.webp",
//         link: "https://innovexa.vercel.app",
//     },
//     {
//         name: "Portfolio Website",
//         description: "Modern, responsive portfolio showcasing my projects, skills, and experience with interactive animations.",
//         technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
//         features: ["Animated UI Elements", "Responsive Design", "Dark/Light Mode", "Interactive Sections"],
//         image: "/Portfolio_logo.webp",
//         link: "/",
//     },
//     {
    //         name: "Website Timer Extension",
//         description: "Chrome extension tracking time spent on websites with beautiful UI, usage history, and keyword tracking.",
//         technologies: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
//         features: ["Daily Usage Analytics", "Category Filtering", "Productivity Insights", "Export Data"],
//         image: ".png",
//         link: "#",
//     },
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
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.6 }}
//       className={`py-16 ${className}`}
//     >
//       <div className="mb-12 text-center">
//         {icon && (
//           <motion.div 
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             transition={{ type: "spring", stiffness: 300, damping: 15 }}
//             className="inline-flex items-center justify-center p-4 mb-5 rounded-full bg-primary/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
//           >
//             {icon}
//           </motion.div>
//         )}
//         <motion.h2 
//           initial={{ y: 20, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1 }}
//           className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3"
//         >
//           {title}
//         </motion.h2>
//         <motion.div 
//           initial={{ width: 0 }}
//           whileInView={{ width: "6rem" }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full"
//         ></motion.div>
//       </div>
//       {children}
//     </motion.section>
//   );
// }

// export default function PortfolioPage() {
//     const [activeTab, setActiveTab] = useState<TechCategory>("Programming Languages");
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [isMounted, setIsMounted] = useState(false);
    
//     // Prevent hydration errors by only rendering on client
//     useEffect(() => {
    //         setIsMounted(true);
    //     }, []);
    

//     const gradientVariants = {
    //         animate: {
        //             backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        //             transition: {
            //                 duration: 10,
            //                 ease: "linear",
//                 repeat: Infinity
//             }
//         }
//     };

//     const containerPulse = {
    //         scale: [1, 1.01, 1],
    //         transition: {
//             duration: 3,
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatDelay: 1
//         }
//     };

//     // Navigation handling and tracking if we've reached the skills section
//     const [skillsSectionTop, setSkillsSectionTop] = useState<number | null>(null);
    
//     useEffect(() => {
//         const handleScroll = () => {
    //             setIsScrolled(window.scrollY > 100);
    //         };
    
    //         // Only run in browser environment
    //         if (typeof window !== 'undefined') {
//             window.addEventListener('scroll', handleScroll);
            
//             // Get the skills section position after a slight delay to ensure DOM is ready
//             setTimeout(() => {
//                 const skillsSection = document.getElementById('skills');
//                 if (skillsSection) {
//                     setSkillsSectionTop(skillsSection.offsetTop);
//                 }
//             }, 100);
            
//             return () => window.removeEventListener('scroll', handleScroll);
//         }
//     }, []);

//     // Close mobile menu when selecting a navigation item
//     const handleNavClick = () => {
//         setMobileMenuOpen(false);
//     };

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

//     // Glow animation variants
//     const glowVariants = {
//         hover: {
//             y: -5,
//             boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.2)",
//             transition: { duration: 0.3 }
//         }
//     };

//     return (
//         <>
//         {isMounted && (
//             <>
//                 {/* Desktop Navigation */}
//                 <div className="hidden md:block">
//                     {/* Hero Section - Centered Navbar */}
//                     <motion.nav 
//                         className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
//                             !isScrolled 
//                                 ? 'opacity-100 scale-100' 
//                                 : 'opacity-0 scale-95 pointer-events-none'
//                         }`}
//                     >
//                         <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-lg">
//                             <ul className="flex space-x-1">
//                                 {['hero', 'skills', 'tech', 'projects', 'education', 'experience', 'community', 'contact'].map((section) => {
//                                     const IconMap = {
    //                                         'hero': Home,
    //                                         'skills': Zap,
//                                         'tech': Code,
//                                         'projects': Rocket,
//                                         'education': GraduationCap,
//                                         'experience': Briefcase,
//                                         'community': Users,
//                                         'contact': Mail
//                                     };
//                                     const Icon = IconMap[section as keyof typeof IconMap];
//                                     const label = section.charAt(0).toUpperCase() + section.slice(1);
                                    
//                                     return (
    //                                         <motion.li key={section}>
//                                             <button
//                                                 onClick={() => {
//                                                     const element = document.getElementById(section);
//                                                     element?.scrollIntoView({behavior: 'smooth'});
//                                                     handleNavClick();
//                                                 }}
//                                                 className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
    //                                                     section === 'hero' && !isScrolled || skillsSectionTop && window.scrollY >= skillsSectionTop && section === 'skills'
    //                                                         ? 'bg-blue-500/20 text-blue-400 shadow-sm'
//                                                         : 'text-white/80 hover:text-white hover:bg-white/10'
//                                                 }`}
//                                             >
//                                                 <Icon className="w-4 h-4" />
//                                                 <span>{label}</span>
//                                             </button>
//                                         </motion.li>
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                     </motion.nav>

//                     {/* Side Navigation that appears when scrolled */}
//                     <motion.div 
//                         initial={{ opacity: 0, x: -50 }}
//                         animate={{ 
//                             opacity: isScrolled ? 1 : 0,
//                             x: isScrolled ? 0 : -50,
//                             pointerEvents: isScrolled ? 'auto' : 'none'
//                         }}
//                         transition={{ duration: 0.5 }}
//                         className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50"
//                     >
//                         <div className="bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg p-2">
//                             <ul className="flex flex-col gap-3">
//                                 {['hero', 'skills', 'tech', 'projects', 'education', 'experience', 'community', 'contact'].map((section) => {
    //                                     const IconMap = {
//                                         'hero': Home,
//                                         'skills': Zap,
//                                         'tech': Code,
//                                         'projects': Rocket,
//                                         'education': GraduationCap,
//                                         'experience': Briefcase,
//                                         'community': Users,
//                                         'contact': Mail
//                                     };
//                                     const Icon = IconMap[section as keyof typeof IconMap];

//                                     return (
//                                         <motion.li 
//                                             key={section}
//                                             whileHover={{ scale: 1.1, x: 5 }}
//                                             whileTap={{ scale: 0.95 }}
//                                         >
//                                             <button
//                                                 onClick={() => {
//                                                     const element = document.getElementById(section);
//                                                     element?.scrollIntoView({behavior: 'smooth'});
//                                                 }}
//                                                 className="w-10 h-10 flex items-center justify-center rounded-full bg-background hover:bg-primary/10 transition-colors duration-200 group"
//                                                 title={section.charAt(0).toUpperCase() + section.slice(1)}
//                                             >
//                                                 <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
//                                             </button>
//                                         </motion.li>
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                     </motion.div>
//                 </div>

//                 {/* Mobile Navigation */}
//                 <div className="block md:hidden">
//                     <motion.button
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         whileTap={{ scale: 0.9 }}
//                         transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                         className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent text-white p-4 rounded-full shadow-lg"
//                     >
//                         {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                     </motion.button>

//                     <AnimatePresence>
//                         {mobileMenuOpen && (
//                             <motion.div 
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 transition={{ duration: 0.2 }}
//                                 className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
//                                 onClick={() => setMobileMenuOpen(false)}
//                             />
//                         )}
//                     </AnimatePresence>

//                     <AnimatePresence>
//                         {mobileMenuOpen && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: 20 }}
//                                 transition={{ type: "spring", damping: 20 }}
//                                 className="fixed bottom-24 right-6 z-40 bg-background/90 backdrop-blur-lg border border-border rounded-2xl shadow-xl p-4 w-56"
//                             >
//                                 <nav>
//                                     <ul className="space-y-2">
//                                         {['hero', 'skills', 'tech', 'projects', 'education', 'experience', 'community', 'contact'].map((section) => {
//                                             const IconMap = {
//                                                 'hero': Home,
//                                                 'skills': Zap,
//                                                 'tech': Code,
//                                                 'projects': Rocket,
//                                                 'education': GraduationCap,
//                                                 'experience': Briefcase,
//                                                 'community': Users,
//                                                 'contact': Mail
//                                             };
//                                             const Icon = IconMap[section as keyof typeof IconMap];
//                                             const label = section.charAt(0).toUpperCase() + section.slice(1);

//                                             return (
    //                                                 <li key={section}>
    //                                                     <button
    //                                                         onClick={() => {
//                                                             const element = document.getElementById(section);
//                                                             element?.scrollIntoView({behavior: 'smooth'});
//                                                             handleNavClick();
//                                                         }}
//                                                         className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 text-foreground hover:bg-primary/10"
//                                                     >
//                                                         <Icon className="w-4 h-4" />
//                                                         <span>{label}</span>
//                                                     </button>
//                                                 </li>
//                                             );
//                                         })}
//                                     </ul>
//                                 </nav>
//                             </motion.div>
//                         )}
//                     </AnimatePresence>
//                 </div>
//             </>
//         )}

//             <div className="container-custom space-y-4">
//                 {/* Hero Section */}
//                 <Section id="hero" title="" className="min-h-[90vh] flex items-center justify-center py-20">
//                     <div className="grid md:grid-cols-2 gap-10 items-center">
//                         <motion.div 
//                             initial={{ opacity: 0, x: -50 }}
//                             animate={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.7, type: "spring" }}
//                             className="space-y-6"
//                         >
//                             <motion.div
//                                 initial={{ opacity: 0, y: -20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.3, duration: 0.5 }}
//                                 className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium shadow-[0_0_10px_rgba(59,130,246,0.3)]"
//                             >
//                                 Full-Stack Developer & Community Leader
//                             </motion.div>
//                             <motion.h1 
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.5, duration: 0.7 }}
//                                 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
//                             >
//                                 Creating <span className="text-primary relative">
//                                     modern
//                                     <motion.span 
//                                         className="absolute bottom-0 left-0 w-full h-[0.2em] bg-gradient-to-r from-primary to-blue-400 rounded-full"
//                                         initial={{ width: 0 }}
//                                         animate={{ width: "100%" }}
//                                         transition={{ delay: 1, duration: 0.8 }}
//                                     />
//                                 </span> web experiences
//                             </motion.h1>
//                             <motion.p 
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 0.7, duration: 0.7 }}
//                                 className="text-lg text-muted-foreground max-w-lg"
//                             >
//                                 I design and build full-stack applications with a focus on user experience,
//                                 performance, and clean code. Passionate about community-driven development.
//                             </motion.p>
//                             <motion.div 
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: 0.9, duration: 0.5 }}
//                                 className="flex flex-wrap gap-4"
//                             >
//                                 <motion.a 
//                                     whileHover={{ 
    //                                         scale: 1.05, 
    //                                         boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" 
//                                     }}
//                                     whileTap={{ scale: 0.95 }}
//                                     href="/contact" 
//                                     className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium shadow hover:shadow-lg hover:bg-primary/90 transition"
//                                 >
//                                     Get in Touch
//                                 </motion.a>
//                                 <motion.a 
//                                     whileHover={{ 
    //                                         scale: 1.05, 
//                                         boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)" 
//                                     }}
//                                     whileTap={{ scale: 0.95 }}
//                                     href="#projects" 
//                                     className="bg-secondary border border-border px-6 py-3 rounded-xl text-sm font-medium hover:bg-secondary/80 transition"
//                                 >
//                                     View Projects
//                                 </motion.a>
//                             </motion.div>
//                             <motion.div 
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 transition={{ delay: 1.1, duration: 0.5 }}
//                                 className="flex gap-5 pt-4"
//                             >
//                                 <motion.a 
//                                     whileHover={{ scale: 1.2, color: "#3b82f6" }}
//                                     href="https://github.com/nitin-hackgramer" 
//                                     target="_blank" 
//                                     className="text-muted-foreground transition-colors"
//                                 >
//                                     <Github className="h-6 w-6" />
//                                 </motion.a>
//                                 <motion.a 
//                                     whileHover={{ scale: 1.2, color: "#3b82f6" }}
//                                     href="https://linkedin.com/in/nitin-sharma-a1a1a62ab" 
//                                     target="_blank" 
//                                     className="text-muted-foreground transition-colors"
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                                     </svg>
//                                 </motion.a>
//                                 <motion.a 
//                                     whileHover={{ scale: 1.2, color: "#3b82f6" }}
//                                     href="https://twitter.com/NitinSh60345544" 
//                                     target="_blank" 
//                                     className="text-muted-foreground transition-colors"
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//                                     </svg>
//                                 </motion.a>
//                             </motion.div>
//                         </motion.div>
//                         <motion.div 
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{ opacity: 1, scale: 1 }}
//                             transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
//                             className="relative w-full aspect-square max-w-md mx-auto"
//                         >
//                             {/* Animated background glow */}
//                             <motion.div 
//                                 animate={{ 
//                                     scale: [1, 1.05, 1],
//                                     opacity: [0.6, 0.8, 0.6]
//                                 }} 
//                                 transition={{ 
//                                     repeat: Infinity, 
//                                     duration: 5,
//                                     ease: "easeInOut"
//                                 }}
//                                 className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
//                             ></motion.div>

//                             <div className="relative bg-background border-4 border-background shadow-2xl rounded-full overflow-hidden aspect-square group">
//                                 {/* Animated gradient background - always active */}
//                                 <motion.div 
//                                     initial={{ opacity: 0.3 }}
//                                     animate={{ 
//                                         opacity: [0.3, 0.6, 0.3],
//                                         background: [
//                                             "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
//                                             "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
//                                             "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)"
//                                         ]
//                                     }}
//                                     transition={{ 
//                                         duration: 8, 
//                                         repeat: Infinity,
//                                         ease: "easeInOut" 
//                                     }}
//                                     className="absolute inset-0 z-0"
//                                 />

//                                 {/* Arcade-style animated background with softer elements */}
//                                 <motion.div 
//                                     initial={{ opacity: 0.3 }}
//                                     animate={{ 
    //                                         opacity: [0.3, 0.6, 0.3],
//                                         background: [
//                                             "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
//                                             "radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)",
//                                             "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.1) 70%)"
//                                         ]
//                                     }}
//                                     transition={{ 
//                                         duration: 8, 
//                                         repeat: Infinity,
//                                         ease: "easeInOut" 
//                                     }}
//                                     className="absolute inset-0 z-0"
//                                 />
                                
//                                 {/* Floating tech bubbles */}
//                                 <div className="absolute inset-0 overflow-hidden z-10 rounded-full opacity-70">
//                                     {/* Floating bubbles */}
//                                     {[...Array(15)].map((_, i) => (
//                                         <motion.div
//                                             key={i}
//                                             initial={{ 
//                                                 x: Math.random() * 100 - 50, 
//                                                 y: Math.random() * 100 - 50,
//                                                 opacity: 0.3 + Math.random() * 0.4,
//                                                 scale: Math.random() * 0.6 + 0.4
//                                             }}
//                                             animate={{ 
//                                                 x: [
//                                                     Math.random() * 120 - 60,
//                                                     Math.random() * 120 - 60,
//                                                     Math.random() * 120 - 60
//                                                 ],
//                                                 y: [
//                                                     Math.random() * 120 - 60,
//                                                     Math.random() * 120 - 60,
//                                                     Math.random() * 120 - 60
//                                                 ],
//                                                 opacity: [0.3, 0.7, 0.3],
//                                                 rotate: [0, 180, 360]
//                                             }}
//                                             transition={{ 
//                                                 duration: 15 + Math.random() * 15,
//                                                 repeat: Infinity,
//                                                 ease: "easeInOut" 
//                                             }}
//                                             className="absolute rounded-full bg-gradient-to-br from-primary/30 to-accent/20"
//                                             style={{
    //                                                 width: `${10 + Math.random() * 15}px`,
    //                                                 height: `${10 + Math.random() * 15}px`,
    //                                                 left: `${Math.random() * 100}%`,
    //                                                 top: `${Math.random() * 100}%`,
    //                                                 filter: "blur(1px)"
    //                                             }}
//                                         />
//                                     ))}
                                    
//                                     {/* Tech symbols in larger bubbles */}
//                                     {[...Array(6)].map((_, i) => {
    //                                         const size = 20 + Math.random() * 20;
    //                                         const symbols = ['{  }', '<  >', '(  )', '[  ]', '&&', '==', '++', '**'];
    //                                         const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    //                                         return (
//                                             <motion.div
//                                                 key={`tech-${i}`}
//                                                 initial={{ 
//                                                     opacity: 0.5,
//                                                     scale: 0.8,
//                                                     x: `${Math.random() * 100}%`, 
//                                                     y: `${Math.random() * 100}%`
//                                                 }}
//                                                 animate={{ 
//                                                     opacity: [0.5, 0.8, 0.5],
//                                                     scale: [0.8, 1, 0.8],
//                                                     x: [
    //                                                         `${Math.random() * 80 + 10}%`,
    //                                                         `${Math.random() * 80 + 10}%`,
//                                                         `${Math.random() * 80 + 10}%`
//                                                     ],
//                                                     y: [
    //                                                         `${Math.random() * 80 + 10}%`,
    //                                                         `${Math.random() * 80 + 10}%`,
    //                                                         `${Math.random() * 80 + 10}%`
    //                                                     ]
    //                                                 }}
//                                                 transition={{ 
//                                                     duration: 20 + Math.random() * 10,
//                                                     repeat: Infinity,
//                                                     delay: Math.random() * 5,
//                                                     ease: "easeInOut" 
//                                                 }}
//                                                 className="absolute flex items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 text-xs font-mono text-primary/70"
//                                                 style={{
    //                                                     width: `${size}px`,
    //                                                     height: `${size}px`
    //                                                 }}
//                                             >
//                                                 {symbol}
//                                             </motion.div>
//                                         );
//                                     })}
//                                 </div>
                                
//                                 {/* Main portrait with soft animations */}
//                                 <motion.div
//                                     initial={{ scale: 0.9, opacity: 0 }}
//                                     animate={{ 
    //                                         scale: [0.98, 1.02, 0.98],
    //                                         opacity: 1
//                                     }}
//                                     transition={{ 
//                                         scale: {
    //                                             duration: 5,
    //                                             repeat: Infinity,
//                                             ease: "easeInOut"
//                                         },
//                                         opacity: { duration: 1 }
//                                     }}
//                                     className="relative z-20 w-full h-full rounded-full overflow-hidden" 
//                                 >
//                                     {/* Soft glow overlay on hover */}
//                                     <motion.div 
//                                         className="absolute inset-0 z-20 bg-gradient-to-tr from-primary/10 to-transparent transition-opacity duration-300"
//                                         animate={{ 
    //                                             opacity: [0.2, 0.4, 0.2]
//                                         }}
//                                         whileHover={{ opacity: 0.6 }}
//                                         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                                     />
                                    
//                                     <motion.img 
//                                         initial={{ scale: 1.2, filter: "blur(10px)" }}
//                                         animate={{ 
//                                             scale: 1, 
//                                             filter: "blur(0px)",
//                                             rotate: [0, 0.5, 0, -0.5, 0] // very subtle rotation
//                                         }}
//                                         whileHover={{ 
    //                                             scale: 1.05,
//                                             transition: { duration: 0.3 } 
//                                         }}
//                                         transition={{ 
    //                                             scale: { duration: 0.8, delay: 0.3 },
    //                                             filter: { duration: 0.8, delay: 0.3 },
    //                                             rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    //                                         }}
    //                                         src="Nitin.webp" 
    //                                         alt="Developer Portrait" 
//                                         className="object-cover w-full h-full rounded-full"
//                                     />
//                                 </motion.div>
                                
//                                 {/* Arcade-style rotating border */}
//                                 <motion.div 
//                                     initial={{ opacity: 0.4, scale: 1.05, rotate: 0 }}
//                                     animate={{ 
    //                                         opacity: [0.4, 0.7, 0.4],
//                                         scale: [1.05, 1.07, 1.05],
//                                         rotate: [0, 360]
//                                     }}
//                                     whileHover={{ opacity: 0.9, scale: 1.1 }}
//                                     transition={{ 
    //                                         opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//                                         scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
//                                         rotate: { duration: 30, repeat: Infinity, ease: "linear" }
//                                     }}
//                                     className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 z-10 pointer-events-none"
//                                 />
                                
//                                 {/* Soft pulsing glow effect */}
//                                 <motion.div
//                                     animate={{ 
//                                         opacity: [0, 0.2, 0],
//                                         scale: [0.8, 1.1, 0.8]
//                                     }}
//                                     transition={{ 
    //                                         duration: 3,
//                                         repeat: Infinity,
//                                         ease: "easeInOut"
//                                     }}
//                                     className="absolute inset-0 bg-primary/20 rounded-full blur-md z-0"
//                                 />

//                                 {/* Arcade-style decorative elements */}
//                                 {[...Array(8)].map((_, i) => {
    //                                     const angle = (i / 8) * Math.PI * 2;
    //                                     const x = Math.cos(angle) * 48 + 50;
    //                                     const y = Math.sin(angle) * 48 + 50;
                                    
    //                                     return (
        //                                         <motion.div
        //                                             key={`pixel-${i}`}
//                                             initial={{ opacity: 0.4 }}
//                                             animate={{ 
    //                                                 opacity: [0.4, 0.8, 0.4],
    //                                                 scale: [1, 1.2, 1]
    //                                             }}
    //                                             transition={{ 
//                                                 duration: 2,
//                                                 delay: i * 0.2,
//                                                 repeat: Infinity,
//                                                 ease: "easeInOut"
//                                             }}
//                                             className="absolute w-2 h-2 bg-primary rounded-full z-25 pointer-events-none"
//                                             style={{
//                                                 left: `${x}%`,
//                                                 top: `${y}%`,
//                                                 transform: 'translate(-50%, -50%)'
//                                             }}
//                                         />
//                                     );
//                                 })}
//                             </div>
                            
//                             {/* Floating Code Snippets */}
//                             <div className="absolute -top-6 -left-6 z-10 opacity-70 transform -rotate-12">
//                                 <motion.div
//                                     initial={{ opacity: 0 }}
//                                     animate={{ 
//                                         opacity: [0.7, 0.9, 0.7],
//                                         y: [-2, 2, -2]
//                                     }}
//                                     transition={{ 
//                                         duration: 3,
//                                         repeat: Infinity,
//                                         ease: "easeInOut"
//                                     }}
//                                     className="bg-background/80 backdrop-blur-sm p-2 rounded-md border border-primary/30 shadow-lg text-[8px] font-mono text-primary/80"
//                                 >
//                                     <div>{'<DevProfile />'}</div>
//                                 </motion.div>
//                             </div>
                            
//                             <div className="absolute -bottom-6 -right-6 z-10 opacity-70 transform rotate-12">
//                                 <motion.div
//                                     initial={{ opacity: 0 }}
//                                     animate={{ 
//                                         opacity: [0.7, 0.9, 0.7],
//                                         y: [2, -2, 2]
//                                     }}
//                                     transition={{ 
//                                         duration: 3,
//                                         delay: 0.5,
//                                         repeat: Infinity,
//                                         ease: "easeInOut"
//                                     }}
//                                     className="bg-background/80 backdrop-blur-sm p-2 rounded-md border border-accent/30 shadow-lg text-[8px] font-mono text-accent/80"
//                                 >
//                                     <div>{'{ fullstack: true }'}</div>
//                                 </motion.div>
//                             </div>
                            
//                             {/* Floating decorative elements with animations */}
//                             <motion.div 
//                                 initial={{ y: 20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 1, duration: 0.7 }}
//                                 className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg shadow-primary/30"
//                                 whileHover={{
//                                     y: -5,
//                                     boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.6)",
//                                     transition: { duration: 0.2 }
//                                 }}
//                             >
//                                 <Code className="h-6 w-6" />
//                             </motion.div>
                            
//                             <motion.div 
//                                 initial={{ y: -20, opacity: 0 }}
//                                 animate={{ y: 0, opacity: 1 }}
//                                 transition={{ delay: 1.2, duration: 0.7 }}
//                                 className="absolute -bottom-4 -left-4 bg-accent text-white p-4 rounded-full shadow-lg shadow-accent/30"
//                                 whileHover={{
    //                                     y: 5,
    //                                     boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.6)",
//                                     transition: { duration: 0.2 }
//                                 }}
//                             >
//                                 <Database className="h-6 w-6" />
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </Section>

//                 {/* Skills Section */}
//                 <Section 
//                     id="skills" 
//                     title="My Skills" 
//                     icon={<BadgeCheck className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
//                         {Object.entries(skills).map(([category, categorySkills]) => (
//                             <motion.div
//                                 key={category}
//                                 variants={itemVariants}
//                                 whileHover={glowVariants.hover}
//                                 className="bg-gradient-to-br from-background to-muted p-6 rounded-xl border shadow-sm transition-all duration-300"
//                             >
//                                 <h3 className="text-xl font-semibold mb-4 text-foreground border-b pb-2">{category}</h3>
//                                 <ul className="space-y-3">
//                                     {categorySkills.map((skill, i) => (
//                                         <motion.li 
//                                             key={i}
//                                             initial={{ opacity: 0, x: -20 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: i * 0.1 }}
//                                             whileHover={{ x: 3, color: "#3b82f6", transition: { duration: 0.2 } }}
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
//                                 <motion.button
//                                     key={category}
//                                     onClick={() => setActiveTab(category as TechCategory)}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                                         activeTab === category 
//                                             ? "bg-primary text-white shadow-lg shadow-primary/30" 
//                                             : "bg-muted hover:bg-primary/10 hover:shadow-md hover:shadow-primary/20"
//                                     }`}
//                                 >
//                                     {category}
//                                 </motion.button>
//                             ))}
//                         </div>
                        
//                         <AnimatePresence mode="wait">
//                             <motion.div 
//                                 key={activeTab}
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -20 }}
//                                 transition={{ duration: 0.5 }}
//                                 className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//                             >
//                                 {techStack[activeTab].map((tech, i) => (
//                                     <motion.div
//                                         key={tech.name}
//                                         initial={{ opacity: 0, x: -20 }}
//                                         animate={{ opacity: 1, x: 0 }}
//                                         transition={{ delay: i * 0.1 }}
//                                         whileHover={{ 
//                                             y: -5, 
//                                             boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
//                                             transition: { duration: 0.2 }
//                                         }}
//                                         className="bg-background p-5 rounded-lg border shadow-sm"
//                                     >
//                                         <div className="flex justify-between items-center mb-2">
//                                             <span className="font-medium">{tech.name}</span>
//                                             <span className="text-sm text-muted-foreground">{tech.level}%</span>
//                                         </div>
//                                         <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
//                                             <motion.div 
//                                                 initial={{ width: 0 }}
//                                                 whileInView={{ width: `${tech.level}%` }}
//                                                 transition={{ duration: 1, delay: 0.1 }}
//                                                 className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full relative"
//                                             >
//                                                 {/* Add a subtle shine animation */}
//                                                 <motion.div 
//                                                     animate={{ 
//                                                         x: ["100%", "-100%"],
//                                                     }} 
//                                                     transition={{ 
    //                                                         repeat: Infinity, 
    //                                                         duration: 2,
    //                                                         ease: "easeInOut",
//                                                         repeatDelay: 1
//                                                     }}
//                                                     className="absolute top-0 bottom-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                                                 ></motion.div>
//                                             </motion.div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </motion.div>
//                         </AnimatePresence>
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
//                         viewport={{ once: true, margin: "-100px" }}
//                         className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
//                     >
//                         {projects.map((project, index) => (
    //                             <motion.div
    //                                 key={index}
//                                 variants={itemVariants}
//                                 whileHover={{
    //                                     y: -10,
//                                     boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)",
//                                     transition: { duration: 0.3, ease: "easeOut" }
//                                 }}
//                                 className="bg-background rounded-xl border shadow-sm overflow-hidden flex flex-col relative group"
//                             >
//                                 {/* Decorative background elements */}
//                                 <motion.div 
//                                     className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                                     aria-hidden="true"
//                                 />

//                                 <div className="relative w-full aspect-square p-6 sm:p-8 max-w-[300px] mx-auto overflow-hidden">
//                                     {/* Subtle background animation */}
//                                     <motion.div
//                                         initial={{ scale: 0.9, opacity: 0.3 }}
//                                         animate={{ 
//                                             scale: [0.9, 1.05, 0.9],
//                                             opacity: [0.3, 0.6, 0.3],
//                                         }}
//                                         transition={{ 
//                                             duration: 8,
//                                             repeat: Infinity,
//                                             ease: "easeInOut"
//                                         }}
//                                         className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl z-0"
//                                         style={{ 
    //                                             top: '50%', 
    //                                             left: '50%', 
//                                             transform: 'translate(-50%, -50%)' 
//                                         }}
//                                     />

//                                     {/* Project image with elegant animations */}
//                                     <motion.div
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.8, delay: index * 0.1 }}
//                                         className="relative z-10 h-full flex items-center justify-center"
//                                     >
//                                         <motion.img 
//                                             initial={{ scale: 0.8, filter: "blur(5px)" }}
//                                             whileInView={{ scale: 1, filter: "blur(0px)" }}
//                                             whileHover={{ 
//                                                 scale: 1.1,
//                                                 rotate: [0, 2, -2, 0],
//                                                 transition: { scale: { duration: 0.4 }, rotate: { duration: 0.7, ease: "easeInOut" } }
//                                             }}
//                                             transition={{ duration: 0.7 }}
//                                             src={project.image} 
//                                             alt={project.name}
//                                             className="w-full h-full object-contain drop-shadow-lg"
//                                         />
//                                     </motion.div>
                                    
//                                     {/* Shine effect overlay */}
//                                     <motion.div
//                                         className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-20 pointer-events-none"
//                                         animate={{ 
//                                             left: ['-100%', '200%'],
//                                         }}
//                                         transition={{ 
//                                             duration: 1.5, 
//                                             ease: "easeInOut",
//                                             repeat: Infinity,
//                                             repeatDelay: 3
//                                         }}
//                                     />
//                                 </div>
                                
//                                 <div className="p-5 flex flex-col flex-grow relative z-10 bg-background/80 backdrop-blur-sm">
//                                     <motion.h3 
//                                         initial={{ opacity: 0, x: -20 }}
//                                         whileInView={{ opacity: 1, x: 0 }}
//                                         transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
//                                         className="text-xl font-semibold mb-2"
//                                     >
//                                         {project.name}
//                                     </motion.h3>
                                    
//                                     <motion.p 
//                                         initial={{ opacity: 0 }}
//                                         whileInView={{ opacity: 1 }}
//                                         transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
//                                         className="text-muted-foreground text-sm mb-4 flex-grow"
//                                     >
//                                         {project.description}
//                                     </motion.p>

//                                     <motion.div 
//                                         initial={{ opacity: 0, y: 10 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
//                                         className="flex flex-wrap gap-2 mb-4"
//                                     >
//                                         {project.technologies.slice(0, 3).map((tech, i) => (
//                                             <motion.span 
//                                                 key={i} 
//                                                 initial={{ opacity: 0, scale: 0.8 }}
//                                                 whileInView={{ opacity: 1, scale: 1 }}
//                                                 transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + (i * 0.1) }}
//                                                 whileHover={{ 
    //                                                     backgroundColor: "rgba(59, 130, 246, 0.15)",
    //                                                     scale: 1.05,
//                                                     transition: { duration: 0.2 }
//                                                 }}
//                                                 className="text-xs px-2 py-1 bg-secondary rounded-md"
//                                             >
//                                                 {tech}
//                                             </motion.span>
//                                         ))}
//                                         {project.technologies.length > 3 && (
//                                             <motion.span 
//                                                 initial={{ opacity: 0, scale: 0.8 }}
//                                                 whileInView={{ opacity: 1, scale: 1 }}
//                                                 transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
//                                                 className="text-xs px-2 py-1 bg-secondary rounded-md"
//                                             >
//                                                 +{project.technologies.length - 3}
//                                             </motion.span>
//                                         )}
//                                     </motion.div>
                                    
//                                     <motion.a
//                                         initial={{ opacity: 0 }}
//                                         whileInView={{ opacity: 1 }}
//                                         transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
//                                         whileHover={{ 
//                                             x: 5, 
//                                             color: "#3b82f6",
//                                             transition: { duration: 0.2 } 
//                                         }}
//                                         href={project.link}
//                                         className="inline-flex items-center text-primary text-sm font-medium group"
//                                     >
//                                         View Project 
//                                         <motion.div
//                                             animate={{ x: [0, 5, 0] }}
//                                             transition={{ 
//                                                 duration: 1.5, 
//                                                 repeat: Infinity,
//                                                 repeatType: "reverse",
//                                                 ease: "easeInOut"
//                                             }}
//                                         >
//                                             <ChevronRight className="h-4 w-4 ml-1" />
//                                         </motion.div>
//                                     </motion.a>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
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
//                     title="Experience" 
//                     icon={<Briefcase className="h-6 w-6 text-primary" />}
//                 >
//                     <div className="max-w-4xl mx-auto space-y-8">
//                         {/* Work Experience */}
//                         <motion.div 
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true, margin: "-100px" }}
//                         >
//                             {experiences.map((exp, index) => (
    //                                 <motion.div 
//                                     key={index}
//                                     variants={itemVariants}
//                                     className="bg-background rounded-xl p-6 border shadow-sm mb-6 relative overflow-hidden"
//                                     whileHover={{ 
//                                         boxShadow: "0 10px 30px -5px rgba(59, 130, 246, 0.2)",
//                                         y: -5,
//                                         transition: { duration: 0.3 }
//                                     }}
//                                 >
//                                     {/* Background gradient */}
//                                     <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full filter blur-2xl -mr-20 -mt-20 opacity-70 pointer-events-none"></div>
                                    
//                                     <div className="relative z-10">
//                                         <div className="flex flex-wrap gap-4 sm:gap-0 justify-between items-start mb-4">
//                                             <div>
//                                                 <h3 className="text-xl font-semibold">{exp.role}</h3>
//                                                 <p className="text-primary font-medium mt-1">{exp.company}</p>
//                                                 {exp.program && (
//                                                     <p className="text-sm text-muted-foreground mt-1">
//                                                         {exp.program}
//                                                     </p>
//                                                 )}
//                                             </div>
//                                             <div className="bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-medium">
//                                                 {exp.duration}
//                                             </div>
//                                         </div>

//                                         <p className="text-muted-foreground mb-4">{exp.description}</p>

//                                         <div className="flex flex-wrap gap-2">
//                                             {exp.skills.map((skill, i) => (
//                                                 <span 
//                                                     key={i}
//                                                     className="px-2 py-1 bg-secondary text-muted-foreground text-xs rounded-md"
//                                                 >
//                                                     {skill}
//                                                 </span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </motion.div>

//                         {/* Hackathon Experience */}
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true, margin: "-100px" }}
//                         >
//                             <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//                                 <Award className="h-5 w-5 text-primary" />
//                                 <span>Hackathon Experience</span>
//                             </h3>
                            
//                             <div className="grid md:grid-cols-3 gap-6">
//                                 {hackathons.map((hackathon, i) => (
//                                     <motion.div 
//                                         key={i}
//                                         initial={{ opacity: 0, y: 20 }}
//                                         whileInView={{ opacity: 1, y: 0 }}
//                                         transition={{ delay: i * 0.1, duration: 0.5 }}
//                                         viewport={{ once: true }}
//                                         whileHover={{ 
    //                                             y: -5, 
//                                             boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
//                                             transition: { duration: 0.3 }
//                                         }}
//                                         className="bg-background rounded-xl border overflow-hidden shadow relative"
//                                     >
//                                         <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
//                                         <div className="p-5">
//                                             <div className="mb-3 flex items-start justify-between">
//                                                 <h4 className="font-semibold text-lg">{hackathon.name}</h4>
//                                                 <span className="text-xs text-muted-foreground">{hackathon.date}</span>
//                                             </div>
//                                             <p className="text-xs text-muted-foreground mb-2">{hackathon.organizer}</p>
//                                             <div className="mb-3 inline-block px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
//                                                 {hackathon.achievement}
//                                             </div>
//                                             <p className="text-sm text-muted-foreground mb-4">{hackathon.description}</p>
//                                             <div className="flex flex-wrap gap-1">
//                                                 {hackathon.technologies.slice(0, 3).map((tech, j) => (
//                                                     <span key={j} className="text-xs px-2 py-0.5 bg-secondary rounded">
//                                                         {tech}
//                                                     </span>
//                                                 ))}
//                                                 {hackathon.technologies.length > 3 && (
//                                                     <span className="text-xs px-2 py-0.5 bg-secondary rounded">
//                                                         +{hackathon.technologies.length - 3}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </motion.div>
//                                 ))}
//                             </div>
//                         </motion.div>
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
//                                         src="/community.webp" 
//                                         alt="Community" 
//                                         className="object-cover w-full h-full"
//                                     />
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </Section>

//                 {/* Contact Section */}
//                 <Section 
//                     id="contact" 
//                     title="Get In Touch" 
//                     icon={<Coffee className="h-6 w-6 text-primary" />}
//                     className="pb-24"
//                 >
//                     <div className="max-w-3xl mx-auto">
//                         <motion.div 
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="text-center mb-10"
//                         >
//                             <p className="text-lg text-muted-foreground mb-6">
//                                 Have a project in mind or want to discuss potential collaborations? 
//                                 I'd love to hear from you! Feel free to reach out through any of the channels below.
//                             </p>
//                         </motion.div>
                        
//                         <motion.div 
//                             variants={containerVariants}
//                             initial="hidden"
//                             whileInView="visible"
//                             viewport={{ once: true }}
//                             className="grid md:grid-cols-3 gap-6"
//                         >
//                             {/* Email Card */}
//                             <motion.a
//                                 href="mailto:contact@nitinsharma.dev"
//                                 variants={itemVariants}
//                                 whileHover={{ 
    //                                     y: -5, 
    //                                     boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
    //                                     transition: { duration: 0.3 }
    //                                 }}
//                                 className="bg-background rounded-xl p-6 border shadow-sm text-center flex flex-col items-center justify-center"
//                             >
//                                 <div className="bg-primary/10 p-4 rounded-full mb-4">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="font-medium mb-1">Email</h3>
//                                 <p className="text-sm text-muted-foreground">nitinkumar12082005@gmail.com</p>
//                             </motion.a>

//                             {/* LinkedIn Card */}
//                             <motion.a
//                                 href="https://linkedin.com/in/nitin-sharma-a1a1a62ab"
//                                 target="_blank"
//                                 variants={itemVariants}
//                                 whileHover={{ 
//                                     y: -5, 
//                                     boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
//                                     transition: { duration: 0.3 }
//                                 }}
//                                 className="bg-background rounded-xl p-6 border shadow-sm text-center flex flex-col items-center justify-center"
//                             >
//                                 <div className="bg-primary/10 p-4 rounded-full mb-4">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                                     </svg>
//                                 </div>
//                                 <h3 className="font-medium mb-1">LinkedIn</h3>
//                                 <p className="text-sm text-muted-foreground">Connect with me</p>
//                             </motion.a>

//                             {/* GitHub Card */}
//                             <motion.a
//                                 href="https://github.com/nitin-hackgramer"
//                                 target="_blank"
//                                 variants={itemVariants}
//                                 whileHover={{ 
    //                                     y: -5, 
    //                                     boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)",
    //                                     transition: { duration: 0.3 }
    //                                 }}
    //                                 className="bg-background rounded-xl p-6 border shadow-sm text-center flex flex-col items-center justify-center"
//                             >
//                                 <div className="bg-primary/10 p-4 rounded-full mb-4">
//                                     <Github className="h-6 w-6 text-primary" />
//                                 </div>
//                                 <h3 className="font-medium mb-1">GitHub</h3>
//                                 <p className="text-sm text-muted-foreground">View my code</p>
//                             </motion.a>
//                         </motion.div>

//                         <motion.div 
//                             initial={{ opacity: 0 }}
//                             whileInView={{ opacity: 1 }}
//                             transition={{ delay: 0.4, duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 shadow-lg mt-12 border border-primary/20"
//                         >
//                             <div className="text-center mb-8">
//                                 <h3 className="text-2xl font-semibold mb-2">Let's Build Something Amazing Together</h3>
//                                 <p className="text-muted-foreground">
//                                     I'm currently available for freelance work and collaboration opportunities.
//                                 </p>
//                             </div>

//                             <div className="flex justify-center">
//                                 <motion.a 
//                                     whileHover={{ 
    //                                         scale: 1.05, 
    //                                         boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)" 
    //                                     }}
    //                                     whileTap={{ scale: 0.95 }}
    //                                     href="mailto:contact@nitinsharma.dev" 
    //                                     className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-medium shadow-md hover:bg-primary/90 transition flex items-center gap-2"
    //                                 >
    //                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    //                                     </svg>
    //                                     Send Me a Message
    //                                 </motion.a>
    //                             </div>
    //                         </motion.div>
    //                     </div>
    //                 </Section>
    //             </div>
    //         </>
    //     );
    import { Metadata } from "next";
    import EnhancedNavbar from "./components/navbar-section"; 
    export const metadata: Metadata = {
        title: "Portfolio | Nitin Sharma - Full-Stack Developer & Community Leader",
        description: "Comprehensive portfolio showcasing my skills, projects, education, and experience as a full-stack developer and community leader.",
    };
    
    export default function PortfolioPage() {
        return (
            <>
            <EnhancedNavbar /> 
        </>
    );
}