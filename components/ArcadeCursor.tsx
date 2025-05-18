// components/TechOrbitCursor.tsx
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function TechOrbitCursor() {
  const [cursorX, setCursorX] = useState(-100);
  const [cursorY, setCursorY] = useState(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [trailPoints, setTrailPoints] = useState<{x: number, y: number, age: number}[]>([]);
  const prevPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const interactionPoints = useRef<{x: number, y: number, intensity: number, decay: number}[]>([]);

  const speedRef = useRef(speed); // Ref to hold the latest speed for use in rAF
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  
  // Initialize window size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Main cursor position and interaction tracker
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      const dx = newX - prevPosition.current.x;
      const dy = newY - prevPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const newSpeed = Math.min(distance * 0.2, 10); 
      setSpeed(newSpeed);
      
      if (distance > 5) {
        setTrailPoints(prev => {
          const newPoint = { x: newX, y: newY, age: 0 };
          const maxPoints = Math.floor(5 + newSpeed * 2);
          return [newPoint, ...prev.slice(0, maxPoints - 1)];
        });
      }
      
      setCursorX(newX);
      setCursorY(newY);
      prevPosition.current = { x: newX, y: newY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || 
          (e.target as HTMLElement).tagName === 'BUTTON' ||
          (e.target as HTMLElement).closest('button') ||
          (e.target as HTMLElement).closest('a') ||
          (e.target as HTMLElement).closest('[data-interactive]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newPoint = { 
        x: e.clientX, 
        y: e.clientY, 
        intensity: 1,
        decay: 0.02
      };
      interactionPoints.current = [...interactionPoints.current, newPoint];
    };
    
    const handleMouseUp = () => {
      setIsClicking(false);
    };
    
    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Animation loop for cursor trails and interaction points
  useEffect(() => {
    const animateTrails = () => {
      setTrailPoints(prev => 
        prev
          .map(point => ({ ...point, age: point.age + 1 }))
          // Adjust trail lifetime based on speed: faster speed -> slightly shorter lifetime
          .filter(point => point.age < Math.max(15, 40 - speedRef.current * 2)) 
      );
      
      interactionPoints.current = interactionPoints.current
        .map(point => ({
          ...point,
          intensity: point.intensity - point.decay
        }))
        .filter(point => point.intensity > 0);
      
      animationFrameId.current = requestAnimationFrame(animateTrails);
    };
    
    animationFrameId.current = requestAnimationFrame(animateTrails);
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Keep empty dependency array, speed is accessed via speedRef

  const cursorSize = isClicking ? 28 : isHovering ? 40 : 24;
  
  const generateOrbitParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = isHovering ? 32 : 24;
      
      // Adjust orbital animation duration based on speed
      const orbitalDuration = (2 + (i % 3)) / (1 + speed / 10);

      return (
        <motion.div
          key={`orbit-${i}`}
          className="absolute rounded-full bg-cyan-400"
          style={{
            width: 3,
            height: 3,
            top: "50%",
            left: "50%",
            x: Math.cos(angle) * radius - 1.5,
            y: Math.sin(angle) * radius - 1.5,
            boxShadow: "0 0 6px rgba(6, 182, 212, 0.8)",
            opacity: 0.7
          }}
          animate={{
            x: [
              Math.cos(angle) * radius - 1.5,
              Math.cos(angle + 0.2) * (radius + 5) - 1.5,
              Math.cos(angle) * radius - 1.5
            ],
            y: [
              Math.sin(angle) * radius - 1.5,
              Math.sin(angle + 0.2) * (radius + 5) - 1.5,
              Math.sin(angle) * radius - 1.5
            ],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: orbitalDuration, // Use speed-adjusted duration
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
          }}
        />
      );
    });
  };

  const backgroundPatterns = () => (
    <motion.div 
      className="fixed left-0 top-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9990 }}
    >
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`grid-h-${i}`}
          className="absolute left-0 w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
          style={{
            height: 1,
            top: `${(i + 1) * 10}%`,
            opacity: 0.3
          }}
          animate={{
            y: [0, (cursorY - windowSize.height / 2) * 0.03],
            opacity: [0.2, 0.1 + (i % 2 === 0 ? 0.15 : 0)]
          }}
          transition={{
            y: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
          }}
        />
      ))}
      
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`grid-v-${i}`}
          className="absolute top-0 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0"
          style={{
            width: 1,
            left: `${(i + 1) * 10}%`,
            opacity: 0.3
          }}
          animate={{
            x: [0, (cursorX - windowSize.width / 2) * 0.03],
            opacity: [0.2, 0.1 + (i % 2 === 0 ? 0.15 : 0)]
          }}
          transition={{
            x: { duration: 0.5, ease: "easeOut" },
            opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
          }}
        />
      ))}
      
      {interactionPoints.current.map((point, i) => (
        <motion.div
          key={`ripple-${i}-${point.x}-${point.y}`}
          className="absolute rounded-full border border-cyan-400"
          style={{
            left: point.x,
            top: point.y,
            width: 100,
            height: 100,
            x: -50,
            y: -50,
            opacity: point.intensity * 0.8,
            scale: 1 + (1 - point.intensity) * 2
          }}
        />
      ))}
    </motion.div>
  );

  return (
    <>
      {backgroundPatterns()}
      
      {trailPoints.map((point, i) => {
        // Adjust trail opacity fadeout to match its lifetime, which is affected by speed
        const trailLifetime = Math.max(15, 40 - speed * 2);
        return (
          <motion.div
            key={`trail-${i}`}
            className="fixed rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: Math.max(2, 6 - point.age * 0.2), 
              height: Math.max(2, 6 - point.age * 0.2),
              marginLeft: -3,
              marginTop: -3,
              backgroundColor: 'rgba(6, 182, 212, 0.8)',
              boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)',
              opacity: Math.max(0, 1 - point.age / trailLifetime), // Use speed-adjusted lifetime for opacity
              zIndex: 9993,
              pointerEvents: 'none'
            }}
          />
        );
      })}
      
      <motion.div
        className="fixed rounded-full z-[9999] pointer-events-none"
        style={{
          left: cursorX,
          top: cursorY,
          width: cursorSize,
          height: cursorSize,
          marginLeft: -cursorSize / 2,
          marginTop: -cursorSize / 2,
          boxShadow: isHovering 
            ? '0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4)' 
            : '0 0 15px rgba(6, 182, 212, 0.4)',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
      >
        <motion.div
          className="absolute rounded-full border border-cyan-400"
          style={{
            inset: -5,
            opacity: 0.6,
          }}
          animate={{
            rotate: 360,
            scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1]
          }}
          transition={{
            rotate: { duration: 6 / (1 + speed / 15), repeat: Infinity, ease: "linear" }, // Adjust rotation speed
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div
          className="absolute rounded-full border-2 border-dashed border-cyan-400"
          style={{
            inset: -10,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          animate={{
            rotate: -360,
            scale: isHovering ? [1, 1.08, 1] : [1, 1.05, 1]
          }}
          transition={{
            rotate: { duration: 10 / (1 + speed / 15), repeat: Infinity, ease: "linear" }, // Adjust rotation speed
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <div 
          className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600"
          style={{
            opacity: 0.9,
            boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.6)'
          }}
        >
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{ opacity: 0.4 }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.2) 2px, rgba(255, 255, 255, 0.2) 3px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.2) 2px, rgba(255, 255, 255, 0.2) 3px)
                `
              }}
            />
          </div>
        </div>
        
        <motion.div
          className="absolute rounded-full bg-white"
          style={{
            width: 6,
            height: 6,
            top: "50%",
            left: "50%",
            marginTop: -3,
            marginLeft: -3,
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
          }}
          animate={{
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {generateOrbitParticles(8)}
      </motion.div>
    </>
  );
}
