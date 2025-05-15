"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { ArrowRight, Code, Palette, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern frameworks like React and Next.js, optimized for performance and SEO.",
    href: "/services#web-development",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive user interfaces and engaging user experiences that convert visitors into customers.",
    href: "/services#ui-ux-design",
  },
  {
    icon: LineChart,
    title: "Performance Optimization",
    description: "Speed up your existing website with modern optimization techniques for better user experience and search rankings.",
    href: "/services#performance",
  },
];

export function ServicesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Services I offer"
          subtitle="I provide end-to-end web development services to help businesses build their online presence with modern, performant websites."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "rounded-lg border bg-card p-8 shadow-sm transition-all duration-700",
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12",
                isInView && `transition-delay-${index * 100}`
              )}
              style={{ 
                transitionDelay: isInView ? `${index * 100}ms` : '0ms'
              }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="h4 mb-3">{service.title}</h3>
              <p className="mb-5 text-muted-foreground">{service.description}</p>
              <Link
                href={service.href}
                className="text-sm font-medium text-primary inline-flex items-center hover:underline"
              >
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/services">
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}