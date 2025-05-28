"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import OptimizedHeroSection from './hero-section';
import { SkillsSection } from './skills-section';
import TechSection from './tech-stack-section';
import ProjectsSection from './project-section';
import EducationSection from './education-section';
import { ExperienceSection } from './experiance-section';
import ContactSection from './contact-section';
import { Menu, X, Home, User, Code, Briefcase, GraduationCap, Mail, Zap } from 'lucide-react';


const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  // Handle navigation clicks
  const handleNavClick = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  }, []);

  // Navigation items with icons for better UX
  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'tech', label: 'Tech', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ], []);

  // Create dock items from nav items
  const dockItems = useMemo(() => 
    navItems.map((item) => ({
      icon: <item.icon size={18} />,
      label: item.label,
      onClick: () => handleNavClick(item.id)
    })), [navItems, handleNavClick]
  );

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight * 0.8;
    
    setIsScrolled(scrollY > heroHeight);
    
    // Update active section based on scroll position
    const sections = navItems.map(item => item.id);
    let current = 'hero';
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section;
          break;
        }
      }
    }
    
    setActiveSection(current);
  }, [navItems]);

  // Throttled scroll event listener
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Call once to set initial state
    handleScroll();
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Handle desktop widget toggle
  const toggleDesktopNav = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* Hero Section - Dock Navigation (positioned lower) */}
        <div  
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out ${
            !isScrolled 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center space-x-4">
              {dockItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="p-3 text-white hover:text-blue-400 hover:bg-white/10 rounded-xl transition-all duration-200 hover:scale-110"
                  title={item.label}
                  type="button"
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsed Left Widget */}
        <div 
          className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-700 ease-out ${
            isScrolled 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          {/* Trigger Button */}
          <button
            onClick={toggleDesktopNav}
            className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
              !isCollapsed ? 'rotate-180' : ''
            }`}
            type="button"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Expanded Navigation */}
          <div 
            className={`absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl transition-all duration-500 ease-out ${
              !isCollapsed 
                ? 'opacity-100 scale-100 translate-x-0' 
                : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
            }`}
          >
            <div className="p-4 min-w-[200px]">
              <ul className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li 
                      key={item.id}
                      className={`transition-all duration-300 ${
                        !isCollapsed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <button
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          activeSection === item.id
                            ? 'bg-blue-500/20 text-blue-400 shadow-sm'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                        type="button"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Floating Action Button Style */}
      <div className="md:hidden">
        {/* Main FAB */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
            mobileMenuOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
          }`}
          type="button"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Floating Menu Items */}
        <div className={`fixed bottom-6 right-6 z-40 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const totalItems = navItems.length;
            const angle = (index * (180 / (totalItems - 1))) - 180;
            const radius = 80;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`absolute bg-white/10 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg transition-all duration-500 ease-out ${
                  mobileMenuOpen
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-0'
                } ${activeSection === item.id ? 'bg-blue-500/30 ring-2 ring-blue-400/50' : ''}`}
                style={{
                  transform: mobileMenuOpen 
                    ? `translate(${x}px, ${y}px)` 
                    : 'translate(0, 0)',
                  transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms'
                }}
                type="button"
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Labels */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-30 pointer-events-none">
            {navItems.map((item, index) => {
              const totalItems = navItems.length;
              const angle = (index * (180 / (totalItems - 1))) - 180;
              const radius = 80;
              const labelRadius = radius + 40;
              const x = Math.cos((angle * Math.PI) / 180) * labelRadius;
              const y = Math.sin((angle * Math.PI) / 180) * labelRadius;
              
              return (
                <div
                  key={`${item.id}-label`}
                  className="absolute bottom-6 right-6 transition-all duration-500 ease-out"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    transitionDelay: `${index * 100 + 200}ms`
                  }}
                >
                  <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Actual Portfolio Sections */}
      <div className="space-y-0">
        <section id="hero">
          <OptimizedHeroSection />
        </section>
        
        <section id="skills">
          <SkillsSection/>
        </section>
        
        <section id="tech">
          <TechSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="education">
          <EducationSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default EnhancedNavbar;
