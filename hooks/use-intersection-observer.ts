"use client";

import { useState, useEffect, useRef, RefObject } from "react";

interface UseIntersectionObserverProps {
  root?: RefObject<Element> | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<Element | null>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    
    if (!node || (triggerOnce && frozen.current)) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          if (triggerOnce) {
            frozen.current = true;
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { root: root?.current, rootMargin, threshold }
    );
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);
  
  return { ref, entry, isVisible };
}