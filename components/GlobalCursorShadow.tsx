// components/GlobalCursorShadow.tsx
"use client"; // This component will run on the client-side

import React, { useEffect, useRef, useState } from "react";

export const GlobalCursorShadow: React.FC = () => {
  // Ref to store the latest mouse position without triggering re-renders
  const latestMousePosition = useRef({ x: 0, y: 0 });
  // Ref to directly access the DOM element of the cursor shadow
  const cursorShadowRef = useRef<HTMLDivElement>(null);
  // State to check if the device is mobile (to disable effect)
  const [isMobile, setIsMobile] = useState(false);

  // Effect to determine if the device is mobile (runs once on mount)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile); // Re-check on window resize
    return () => window.removeEventListener('resize', checkMobile); // Cleanup
  }, []);

  // Effect for the mouse movement animation using requestAnimationFrame
  useEffect(() => {
    // If on a mobile device, or the shadow element isn't available, do nothing
    if (isMobile || !cursorShadowRef.current) return;

    let animationFrameId: number;
    const shadowElement = cursorShadowRef.current; // Cache element for performance

    // Function to update the cursor shadow's position
    const updateCursorShadow = () => {
      // Set the transform property directly on the DOM element
      // latestMousePosition.current.x/y are viewport coordinates
      shadowElement.style.transform = `translate(${latestMousePosition.current.x}px, ${latestMousePosition.current.y}px) translate(-50%, -50%)`;
      
      // Request the next animation frame
      animationFrameId = requestAnimationFrame(updateCursorShadow);
    };

    // Event handler for mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      // Store the global mouse position in the ref
      latestMousePosition.current = { x: e.clientX, y: e.clientY };
      // Ensure the shadow is visible when the mouse moves (if it was hidden)
      if (shadowElement.style.opacity === '0') {
        shadowElement.style.opacity = '1';
      }
    };

    // Event handler for mouse leaving the document
    const handleMouseLeave = () => {
      // Hide the shadow when the mouse leaves the window
      if (shadowElement) {
        shadowElement.style.opacity = '0';
      }
    };

    // Add event listeners and start the animation loop
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(updateCursorShadow); // Start the loop

    // Cleanup function: remove event listeners and cancel animation frame
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]); // Re-run this effect if isMobile changes

  // Render the shadow div only if not on a mobile device
  return (
    <>
      {!isMobile && (
        <div
          ref={cursorShadowRef}
          className="global-cursor-shadow" // Apply the global CSS class
          aria-hidden="true" // Indicate to screen readers that this is purely decorative
        />
      )}
    </>
  );
};