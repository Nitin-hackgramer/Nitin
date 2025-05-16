// components/ArcadeCursor.tsx
'use client';

import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function ArcadeCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 z-[9999] pointer-events-none mix-blend-difference"
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    >
      <div className="relative w-full h-full">
        {/* Core cursor */}
        <div className="w-full h-full rounded-full bg-[#00ffea] animate-pulse shadow-[0_0_10px_2px_#00ffea]" />
        
        {/* Arcade glow ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#00ffea] opacity-30 animate-spin-slow" />
      </div>
    </motion.div>
  );
}
