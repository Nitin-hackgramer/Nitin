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

const projects = [
  {
    title: "Modern E-commerce Platform",
    description: "A headless e-commerce website built with Next.js, Tailwind CSS, and Shopify integration. Features include product filtering, search, and a seamless checkout experience.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "E-commerce", "Tailwind CSS", "Shopify"],
    link: "/portfolio/ecommerce-platform",
  },
  {
    title: "SaaS Dashboard Interface",
    description: "A responsive dashboard for a SaaS analytics platform with real-time data visualization, user management, and interactive reports.",
    image: "https://images.pexels.com/photos/7367/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "ChartJS", "TypeScript", "SaaS"],
    link: "/portfolio/saas-dashboard",
  },
  {
    title: "Real Estate Listing Platform",
    description: "A modern real estate platform with advanced search, property listings, and interactive maps. Features include virtual tours and agent contact forms.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Next.js", "Google Maps API", "Prisma", "PostgreSQL"],
    link: "/portfolio/real-estate-platform",
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
              className={cn(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 && "md:grid-flow-dense"
              )}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <h3 className="h3 mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button asChild variant="outline">
                  <Link href={project.link}>
                    View case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={cn(
                "rounded-lg overflow-hidden border shadow-sm", 
                index % 2 === 1 ? "md:col-start-1" : ""
              )}>
                <Link href={project.link} className="block group relative">
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="object-cover aspect-[16/10] w-full transform transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}