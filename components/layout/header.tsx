"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import Image from "next/image"; // Available if you want to optimize local images further
import { Menu, Moon, Sun, ChevronRight, Blend } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme(); // theme can be 'system', resolvedTheme is 'light' or 'dark'
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Effect to ensure component is mounted on the client before running theme-dependent logic
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if the current path matches the nav item
  const isActive = (path: string) => pathname === path;

  // Handle scroll events for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for toggling the theme
  const handleThemeToggle = () => {
    if (!mounted) return; // Ensure we only toggle theme on the client
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  // The theme toggle button (Sun/Moon)
  const ThemeToggleButton = ({ isMobile = false }: { isMobile?: boolean }) => {
    if (!mounted) {
        return (
            <div className={cn(
                "h-9 w-9 rounded-full flex items-center justify-center", // Adjust size to match Button variant="icon"
                isMobile ? "mr-2" : "",
                isMobile ? "" : "border border-primary/20" // Mimic outline variant style
            )}>
                {/* Placeholder for SSR/hydration phase */}
            </div>
        );
    }

    return (
      <motion.div whileTap={{ scale: 0.9 }} data-interactive-cursor="true"> {}
        <Button
          variant={isMobile ? "ghost" : "outline"}
          size="icon"
          onClick={handleThemeToggle}
          aria-label="Toggle theme"
          className={cn(
            isMobile ? "" : "rounded-full border-primary/20 hover:bg-primary/10 opacity-60 hover:opacity-100",
            isMobile ? "mr-2" : ""
          )}
        >
          <Sun className={cn(
            "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          )} />
          <Moon className={cn(
            "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          )} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </motion.div>
    );
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-x-8 bg-background/30 backdrop-blur-md px-6 py-2 rounded-full shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                data-interactive-cursor="true" 
              >
                <span className={cn(
                  "text-sm font-medium transition-colors relative z-10 py-2 px-1",
                  isActive(item.href) 
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}>
                  {item.name}
                </span>
                {(isActive(item.href) || hoveredItem === item.name) && (
                  <motion.div 
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggleButton isMobile={false} /> {/* Desktop Theme Toggle */}
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} data-interactive-cursor="true">
              <Button asChild className="rounded-full px-6 font-medium">
                <Link href="/contact" className="flex items-center gap-1">
                  Let's talk <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center">
            <ThemeToggleButton isMobile={true} /> {/* Mobile Theme Toggle */}
            
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  data-interactive-cursor="true"
                  variant="outline" 
                  size="icon" 
                  aria-label="Open menu"
                  className="rounded-full border-primary/20"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-primary/10">
                
                <div className="flex flex-col space-y-1">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        data-interactive-cursor="true"
                        href={item.href}
                        className={cn(
                          "flex items-center py-3 px-4 rounded-lg transition-colors",
                          isActive(item.href) 
                            ? "bg-primary/10 text-primary font-medium" 
                            : "text-foreground/80 hover:bg-accent/10 hover:text-accent"
                        )}
                      >
                        <span className="text-lg">{item.name}</span>
                        {isActive(item.href) && (
                          <motion.div 
                            layoutId={`mobileNavIndicator-${item.name}`}
                            className="ml-auto"
                          >
                            <ChevronRight className="h-4 w-4 text-primary" />
                          </motion.div>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button data-interactive-cursor="true" asChild className="w-full rounded-lg">
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Let's talk <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
