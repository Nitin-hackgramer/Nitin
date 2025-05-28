"use client";

import React, { useState, useEffect, useRef, ElementType } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Pencil, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animated-text"; 
import RotatingText from '@/components/ui/RotatingText'
import Squares from '@/components/ui/Squares';
  
const skills = [" Next.js", " React.js", " TypeScript", " Tailwind CSS", " UI/UX", " Node.js"];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  // Using a ref to store the latest mouse position without triggering re-renders
  const latestMousePosition = useRef({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  // Ref for the specific element that creates the cursor shadow effect
  const cursorShadowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile for responsive adaptations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 ||
                  ('ontouchstart' in window) ||
                  (navigator.maxTouchPoints > 0));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Effect for cycling through skills text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Optimized mouse move effect using requestAnimationFrame
  useEffect(() => {
    // Only apply the effect on non-mobile devices
    if (isMobile) return;

    let animationFrameId: number;

    // Function to update the cursor shadow's position, called by requestAnimationFrame
    const updateCursorShadow = () => {
      if (cursorShadowRef.current && heroRef.current) {
        // Get the bounding rectangle of the hero section
        const rect = heroRef.current.getBoundingClientRect();
        // Calculate mouse position relative to the hero section
        const x = latestMousePosition.current.x - rect.left;
        const y = latestMousePosition.current.y - rect.top;

        // Apply transform for smoother animation.
        // We combine the mouse position translation with the centering translation.
        cursorShadowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      // Request the next animation frame
      animationFrameId = requestAnimationFrame(updateCursorShadow);
    };

    // Event handler for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Store the global mouse position in the ref, don't update state directly
      latestMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    // Add event listener and start the animation loop
    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateCursorShadow);

    // Cleanup function for when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId); // Cancel the animation frame to prevent memory leaks
    };
  }, [isMobile]); // Re-run effect if isMobile changes

  interface IconConfig {
    Icon: ElementType;
    color: string;
    delay: number;
  }

  const icons: IconConfig[] = [
    { Icon: Code, color: "text-blue-600 dark:text-blue-400", delay: 0.1 },
    { Icon: Pencil, color: "text-purple-600 dark:text-purple-400", delay: 0.2 },
    { Icon: Globe, color: "text-green-600 dark:text-green-400", delay: 0.3 },
    { Icon: Zap, color: "text-amber-600 dark:text-amber-400", delay: 0.4 },
  ];

  return (
    <> 
      <section ref={heroRef as React.RefObject<HTMLElement>} className="relative pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        {/* Decorative semi-circle background element */}
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-2/3 aspect-square">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border-[1px] border-slate-200 dark:border-primary/20"></div>
            <div className="absolute inset-2 rounded-full border-[1px] border-slate-300 dark:border-primary/30"></div>
            <div className="absolute inset-4 rounded-full border-[1px] border-slate-400 dark:border-primary/40"></div>
            <div className="absolute inset-8 rounded-full border-[1px] border-slate-300 dark:border-primary/20"></div>
            {/* Glowing point on the semi-circle */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 dark:bg-primary shadow-[0_0_20px_8px_rgba(59,130,246,0.5)] dark:shadow-[0_0_30px_10px_rgba(56,189,248,0.4)]"></div>
          </div>
        </div>

        {/* Refined grid pattern */}
        <div className="absolute inset-0 w-full h-full -z-10 opacity-50">
          <Squares 
            speed={0.3} 
            squareSize={70}
            direction='diagonal'
            borderColor='rgba(148, 163, 184, 0.15)'
            hoverFillColor='rgba(59, 130, 246, 0.08)'
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:max-w-2xl"
            >
              <div data-cursor-interactive className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-primary/5 border border-blue-200 dark:border-primary/10 px-4 py-1.5 backdrop-blur-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm font-medium">Available for new projects</span>
              </div>

              <h1 className="h1 mb-6 tracking-tight">
                Crafting exceptional
                <span className="relative block mt-1 mb-1">
                  <span data-cursor-interactive className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-primary dark:to-purple-500 bg-clip-text text-transparent">
                    digital experiences
                  </span>
                  <span className="absolute bottom-0 left-0 z-0 h-3 w-full bg-blue-100 dark:bg-primary/10 rounded"></span>
                </span>
                <span className="flex items-center">
                  with
                  <span className="relative ml-2 inline-block overflow-hidden">
                    <RotatingText
                      texts={skills}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </span>
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-muted-foreground mb-8 max-w-xl">
                I build premium, conversion-focused websites that help businesses grow,
                using modern technologies to create fast, accessible, and visually engaging experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button data-cursor-interactive size="lg" asChild className="bg-blue-600 hover:bg-blue-700 dark:bg-primary dark:hover:bg-primary/90 shadow-lg shadow-blue-500/20 dark:shadow-primary/20 transition-all">
                  <Link href="/portfolio">
                    View my work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button data-cursor-interactive variant="outline" size="lg" asChild className="border-blue-200 dark:border-primary/20 hover:bg-blue-50 dark:hover:bg-primary/5">
                    <Link href="/contact">Let's work together</Link>
                </Button>
              </div>

              {/* Skill icons */}
              <div className="mt-12 hidden md:flex items-center gap-4">
                {icons.map(({ Icon, color, delay }, index) => (
                  <motion.div
                    data-cursor-interactive
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + 0.5, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`p-3 rounded-lg bg-white dark:bg-background border ${index === 0 ? 'border-blue-300 dark:border-primary/30' : 'border-slate-200 dark:border-muted'}`}>
                      <Icon className={`h-5 w-5 ${color}`} />
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="text-sm text-slate-500 dark:text-muted-foreground"
                >
                  And many more skills
                </motion.div>
              </div>
            </motion.div>

            {/* Right animated developer card/terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex-1 w-full max-w-xl"
            >
              <div className="relative">
                {/* Backdrop glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/30 to-purple-300/30 dark:from-primary/20 dark:to-purple-500/20 rounded-2xl blur-md"></div>

                {/* Terminal window */}
                <div className="relative rounded-xl overflow-hidden border border-blue-200 dark:border-primary/20 bg-white/90 dark:bg-black/80 backdrop-blur-xl shadow-2xl">
                  <div className="p-4 sm:p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div data-cursor-interactive className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div data-cursor-interactive className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div data-cursor-interactive className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-slate-400 dark:text-muted-foreground">developer.profile</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center p-4">
                      <div className="font-mono text-sm sm:text-base bg-slate-50 dark:bg-black/40 text-slate-800 dark:text-primary-foreground p-6 rounded-md w-full border border-slate-200 dark:border-white/5">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <p data-cursor-interactive className="mb-3 text-slate-500 dark:text-white/70">// Introducing myself</p>
                          <p data-cursor-interactive>
                            <span className="text-blue-700 dark:text-blue-400">const</span>{" "}
                            <span className="text-green-700 dark:text-green-400">developer</span> ={" "}
                            {"{"}
                          </p>
                          <motion.p
                            data-cursor-interactive
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 }}
                            className="ml-4"
                          >
                            <span className="text-amber-700 dark:text-yellow-400">name</span>:{" "}
                            <span className="text-orange-700 dark:text-orange-400">'Nitin Sharma'</span>,
                          </motion.p>
                          <motion.p
                            data-cursor-interactive
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.9 }}
                            className="ml-4"
                          >
                            <span className="text-amber-700 dark:text-yellow-400">title</span>:{" "}
                            <span className="text-orange-700 dark:text-orange-400">'Frontend Developer'</span>,
                          </motion.p>
                          <motion.p
                            data-cursor-interactive
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.1 }}
                            className="ml-4"
                          >
                            <span className="text-amber-700 dark:text-yellow-400">currentSkill</span>:{" "}
                            <span className="relative flex items-center">
                              <span className="text-orange-700 dark:text-orange-400">'</span>
                              <AnimatedText
                                text={skills[currentSkillIndex]}
                                className="text-orange-700 dark:text-orange-400"
                              />
                              <span className="text-orange-700 dark:text-orange-400">'</span>
                              <span className="ml-1 animate-pulse text-blue-600 dark:text-primary">|</span>
                            </span>
                          </motion.p>
                          <motion.p
                            data-cursor-interactive
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3 }}
                            className="ml-4"
                          >
                            <span className="text-amber-700 dark:text-yellow-400">available</span>:{" "}
                            <span className="text-purple-700 dark:text-purple-400">true</span>,
                          </motion.p>
                          <motion.p
                            data-cursor-interactive
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5 }}
                            className="ml-4"
                          >
                            <span className="text-amber-700 dark:text-yellow-400">location</span>:{" "}
                            <span className="text-orange-700 dark:text-orange-400">'Remote'</span>
                          </motion.p>
                          <p data-cursor-interactive>{"}"}</p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  data-cursor-interactive
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-background rounded-lg p-2 shadow-lg border border-slate-200 dark:border-muted"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium">Online & Available</span>
                  </div>
                </motion.div>

                <motion.div
                  data-cursor-interactive
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9, duration: 0.5 }}
                  className="absolute -top-4 -left-4 bg-white dark:bg-background rounded-lg p-2 shadow-lg border border-slate-200 dark:border-muted"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs font-medium">5+ Years Experience</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}