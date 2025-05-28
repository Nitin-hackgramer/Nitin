"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Code, Database, Sparkles, ArrowRight, Play } from 'lucide-react';
import { useTheme } from 'next-themes';
import TiltedCard from '@/components/ui/TiltedCard';

// Interface for FloatingElement props
interface FloatingElementProps {
    delay: number;
    symbol: string;
    size: number;
    duration: number;
}

// Performance optimized floating elements with memoization
const FloatingElement = React.memo(({ delay, symbol, size, duration }: FloatingElementProps) => {
    const { theme } = useTheme();
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const opacity = useSpring(0.6, { stiffness: 100, damping: 15 });
    
    const randomPath = useMemo(() => ({
        x: [
            Math.random() * 60 - 30,
            Math.random() * 60 - 30,
            Math.random() * 60 - 30
        ],
        y: [
            Math.random() * 60 - 30,
            Math.random() * 60 - 30,
            Math.random() * 60 - 30
        ]
    }), []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
                opacity: [0.4, 0.8, 0.4],
                scale: [0.8, 1.1, 0.8],
                x: randomPath.x,
                y: randomPath.y,
                rotate: [0, 180, 360]
            }}
            transition={{ 
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
                times: [0, 0.5, 1]
            }}
            className={`absolute flex items-center justify-center rounded-full backdrop-blur-[2px] border text-xs font-mono will-change-transform ${
                theme === 'dark' 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-400/80'
                    : 'bg-gradient-to-br from-blue-500/15 to-purple-500/15 border-blue-400/25 text-blue-600/80'
            }`}
            style={{
                x, 
                y, 
                opacity,
                width: size,
                height: size,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`
            }}
        >
            {symbol}
        </motion.div>
    );
});

// Optimized tech stack display with AnimatePresence
const TechStack = React.memo(() => {
    const { theme } = useTheme();
    const [visibleTechs, setVisibleTechs] = useState(6);
    const techs = useMemo(() => [
        { name: 'React', color: 'from-blue-400 to-cyan-400' },
        { name: 'Node.js', color: 'from-green-400 to-emerald-400' },
        { name: 'Python', color: 'from-yellow-400 to-orange-400' },
        { name: 'TypeScript', color: 'from-blue-500 to-indigo-500' },
        { name: 'MongoDB', color: 'from-green-500 to-teal-500' },
        { name: 'AWS', color: 'from-orange-400 to-red-400' },
        { name: 'Docker', color: 'from-blue-600 to-blue-400' },
        { name: 'GraphQL', color: 'from-pink-400 to-purple-400' }
    ], []);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleTechs(prev => prev === techs.length ? 6 : techs.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [techs.length]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-2 mt-6"
        >
            <AnimatePresence mode="wait">
                {techs.slice(0, visibleTechs).map((tech, index) => (
                    <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${tech.color} text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-default`}
                    >
                        {tech.name}
                    </motion.span>
                ))}
            </AnimatePresence>
        </motion.div>
    );
});

// Simple static image component with just TiltedCard
const SimpleAvatar = React.memo(() => {
    return (
        <div className="relative w-full max-w-lg mx-auto">
            {/* Removed overflow-hidden and aspect-square to prevent clipping */}
            <div className="relative rounded-2xl"> 
                {/* Removed overflow-hidden from this div as well */}
                <div className="relative z-20 w-full h-full rounded-2xl">
                    <TiltedCard
                        imageSrc="nitin.webp"
                        altText="Nitin Sharma - Full Stack Developer"
                        captionText="Nitin Sharma - Full Stack Developer"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="400px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <div className="absolute top-80 left-11 -translate-x-1/2 w-full flex justify-start">
                                <div className="flex items-center justify-center bg-gray-700 bg-opacity-50 rounded-lg px-4 py-2 shadow-lg">
                                    <p 
                                        className="text-white font-semibold text-sm tracking-wide text-center" 
                                        style={{ fontFamily: 'monospace', whiteSpace: 'nowrap' }}
                                    >
                                        Nitin Sharma - Full Stack Developer
                                    </p>
                                </div>
                            </div>
                        }

                    />
                </div>
            </div>
        </div>
    );
});

// Main hero component
const OptimizedHeroSection = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative transition-colors duration-500 ${
            theme === 'dark'
                ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
                : 'bg-gradient-to-br from-stone-50 via-slate-50 to-gray-100'
        }`}>
            {/* Background elements */}
            <div className={`absolute inset-0 ${
                theme === 'dark'
                    ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-950'
                    : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/25 via-slate-50 to-stone-100'
            }`} />
            
            {/* Animated grid background */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: theme === 'dark' ? 0.1 : 0.08 }}
                transition={{ duration: 2 }}
                className={`absolute inset-0 bg-[linear-gradient(rgba(59,130,246,${theme === 'dark' ? '0.1' : '0.08'})_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,${theme === 'dark' ? '0.1' : '0.08'})_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]`}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="space-y-8"
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                            className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium shadow-lg ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-300'
                                    : 'bg-gradient-to-r from-blue-500/15 to-purple-500/15 border-blue-400/25 text-blue-700'
                            }`}
                        >
                            <Sparkles className="h-4 w-4" />
                            Full-Stack Developer & Community Leader
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-2 h-2 bg-green-400 rounded-full"
                            />
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight ${
                                theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}
                        >
                            Creating{' '}
                            <span className="relative inline-block">
                                <motion.span 
                                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                                    animate={{ 
                                        backgroundImage: [
                                            "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)",
                                            "linear-gradient(45deg, #8b5cf6, #06b6d4, #3b82f6)",
                                            "linear-gradient(45deg, #06b6d4, #3b82f6, #8b5cf6)"
                                        ]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    modern
                                </motion.span>
                                <motion.span 
                                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 0.8 }}
                                />
                            </span>
                            <br />
                            web experiences
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className={`text-lg lg:text-xl max-w-2xl leading-relaxed ${
                                theme === 'dark' ? 'text-slate-300' : 'text-stone-600'
                            }`}
                        >
                            I design and build full-stack applications with a focus on{' '}
                            <span className="text-blue-400 font-semibold">user experience</span>,{' '}
                            <span className="text-purple-400 font-semibold">performance</span>, and{' '}
                            <span className="text-cyan-400 font-semibold">clean code</span>. 
                            Passionate about community-driven development.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.4)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Get in Touch
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </motion.button>
                            
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                    backgroundColor: theme === 'dark' ? "rgba(51, 65, 85, 0.8)" : "rgba(248, 250, 252, 0.8)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className={`group backdrop-blur-sm border px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                                    theme === 'dark'
                                        ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white'
                                        : 'bg-stone-50/60 border-stone-200 text-stone-700 hover:text-slate-900'
                                }`}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Play className="h-4 w-4 group-hover:scale-110 transition-transform" />
                                    View Projects
                                </span>
                            </motion.button>
                        </motion.div>

                        {/* Social links */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex gap-6 pt-4"
                        >
                            {[
                                { 
                                    icon: () => (
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    ),
                                    href: "https://github.com/nitin-hackgramer", 
                                    color: "hover:text-blue-400" 
                                },
                                { 
                                    icon: () => (
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    ),
                                    href: "https://linkedin.com/in/nitin-sharma-a1a1a62ab",
                                    color: "hover:text-blue-500"
                                },
                                { 
                                    icon: () => (
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    ),
                                    href: "https://twitter.com/NitinSh60345544",
                                    color: "hover:text-blue-400"
                                }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`transition-all duration-300 p-2 rounded-full ${
                                        theme === 'dark'
                                            ? `text-slate-400 ${social.color} hover:bg-slate-800/50`
                                            : `text-stone-500 ${social.color} hover:bg-stone-100/50`
                                    }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Tech stack */}
                        <TechStack />
                    </motion.div>

                    {/* Right content - Simple Avatar with just TiltedCard */}
                    <div className="flex justify-center lg:justify-end">
                        <SimpleAvatar />
                    </div>
                </div>
            </div>

            {/* Floating particles background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 20 }, (_, i) => (
                    <motion.div
                        key={`bg-particle-${i}`}
                        initial={{ 
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                            opacity: 0
                        }}
                        animate={{ 
                            y: [null, -100, (typeof window !== 'undefined' ? window.innerHeight : 800) + 100],
                            opacity: [0, theme === 'dark' ? 0.6 : 0.4, 0]
                        }}
                        transition={{ 
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        className={`absolute w-1 h-1 rounded-full ${
                            theme === 'dark' ? 'bg-blue-400/30' : 'bg-blue-500/25'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default OptimizedHeroSection;
