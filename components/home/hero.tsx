"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text";

const skills = [" Next.js", " React.js", " TypeScript", " Tailwind CSS", " UI/UX", " Node.js"];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(false);
      setTimeout(() => {
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        setShowCursor(true);
      }, 500);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium">Available for new projects</span>
          </div>
          
          <h1 className="h1 mb-6">
            Crafting exceptional digital experiences with{" "}
            <span className="relative">
            <span>
            <AnimatedText 
              text={skills[currentSkillIndex]}
              className="text-blue-400"
            />
            </span>
              <span className="absolute bottom-0 left-0 z-0 h-3 w-full bg-primary/10 rounded"></span>
            </span>
          </h1>
          
          <p className="p-large text-muted-foreground mb-8">
            I build premium, conversion-focused websites that help businesses grow, 
            using modern technologies to create fast, accessible, and visually engaging experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/portfolio">
                View my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Let's work together</Link>
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mt-16 md:mt-24"
        >
          <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden border">
            <div className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
              <div className="flex space-x-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="font-mono text-sm sm:text-base md:text-lg bg-black/80 text-primary-foreground p-4 rounded-md max-w-md w-full">
                  <p className="mb-2 text-white/70">// Crafting digital experiences</p>
                  <p>
                    <span className="text-blue-400">Const</span>{" "}
                    <span className="text-green-400">Developer</span> ={" "}
                    {"{"}
                  </p>
                  <p className="ml-4">
                    <span className="text-yellow-400">Name</span>:{" "}
                    <span className="text-orange-400">'Nitin Sharma'</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-yellow-400">Skills</span>:{" "}
                    <span>["</span>
                    <AnimatedText 
                      text={skills[currentSkillIndex]}
                      className="text-orange-400"
                    />
                    <span>"]</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-yellow-400">Available</span>:{" "}
                    <span className="text-purple-400">True</span>
                  </p>
                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-2/3 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}