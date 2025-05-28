"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { BoxReveal } from "@/components/ui/box-reveal";
import SpotlightCard from '@/components/ui/SpotlightCard';

const projects = [
    {
        title : "Innovexa",
        description: "A tech community platform with features like Member Spotlight, Freelance Gigs, Polls, and Challenges.",
        image: "community.webp",
        tags: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL"],
        features: ["Member Profiles", "Discussion Forum", "Project Showcase", "Job Board"],
        link: "https://innovexa.vercel.app",
    },
    {
        title : "Portfolio Website",
        description: "Modern, responsive portfolio showcasing my projects, skills, and experience with interactive animations.",
        image: "/Portfolio_logo.webp",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        features: ["Animated UI Elements", "Responsive Design", "Dark/Light Mode", "Interactive Sections"],
        link: "/",
    },
    {
        title : "Website Timer Extension",
        description: "Chrome extension tracking time spent on websites with beautiful UI, usage history, and keyword tracking.",
        image: ".png",
        tags: ["JavaScript", "Chrome API", "Chart.js", "Local Storage"],
        features: ["Daily Usage Analytics", "Category Filtering", "Productivity Insights", "Export Data"],
        link: "#",
    },
];


export function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work. Each project represents unique challenges and solutions."
          centered
        />
        
        <div className="space-y-24 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 && "md:grid-flow-dense"
              )}>
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <BoxReveal>
                    <h3 className="h3 mb-4">{project.title}</h3>
                  </BoxReveal>
                  <BoxReveal>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                  </BoxReveal>
                  <BoxReveal>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </BoxReveal>
                  <BoxReveal>
                    <Button asChild variant="outline">
                      <Link href={project.link}>
                        View Live Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </BoxReveal>
                </div>
                <div className={cn(
                  index % 2 === 1 ? "md:col-start-1" : ""
                )}>
                  {/* The Link component wraps the image and overlay, making them clickable */}
                    <Link href={project.link} className="block group relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <SpotlightCard className="aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600} // Adjust as needed
                        height={338} // Adjust as needed for 16:9 aspect ratio
                        className="object-contain w-full h-full"
                      />
                      </SpotlightCard>
                    </motion.div>
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio#projects" className="flex items-center">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}