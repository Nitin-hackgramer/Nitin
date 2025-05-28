import { motion } from "framer-motion";
import { Coffee, Github } from "lucide-react";
import { Section } from "@/components/ui/section"; // Adjust import path as needed

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
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

export function ContactSection() {
    return (
        <Section 
            id="contact" 
            title="Get In Touch" 
            icon={<Coffee className="h-6 w-6 text-primary" />}
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
                        href="mailto:nitinkumar12082005@gmail.com"
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
                        <p className="text-sm text-muted-foreground">nitinkumar12082005@gmail.com</p>
                    </motion.a>
                    
                    {/* LinkedIn Card */}
                    <motion.a
                        href="https://linkedin.com/in/nitin-sharma-a1a1a62ab"
                        target="_blank"
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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
                            href="mailto:nitinkumar12082005@gmail.com" 
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
    );
}

export default ContactSection;