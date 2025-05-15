"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  className?: string;
  highlightIndices?: number[];
  highlightClassName?: string;
};

export function AnimatedText({
  text,
  className,
  highlightIndices = [],
  highlightClassName = "text-primary",
}: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Reset state when text changes
    setDisplayedText("");
    index.current = 0;
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const animateText = () => {
      if (index.current < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index.current));
        index.current += 1;
        timeoutRef.current = setTimeout(animateText, 30); // Speed of typing
      }
    };
    
    timeoutRef.current = setTimeout(animateText, 150); // Initial delay
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text]);
  
  return (
    <span className={className}>
      {displayedText.split("").map((char, idx) => (
        <span
          key={idx}
          className={cn(
            "transition-opacity duration-75",
            highlightIndices.includes(idx) && highlightClassName
          )}
        >
          {char}
        </span>
      ))}
      <span className="animate-pulse">|</span>
    </span>
  );
}