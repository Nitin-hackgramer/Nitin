"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote: "Working with Elias was a game-changer for our business. The website he built has significantly increased our conversion rates and customer engagement.",
    author: "Sarah Thompson",
    role: "CEO, StyleHub",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Elias delivered a stunning website that perfectly captured our brand identity. His attention to detail and technical expertise is unmatched.",
    author: "Michael Rodriguez",
    role: "Marketing Director, TechNova",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "We needed a complex e-commerce solution with custom features, and Elias delivered beyond our expectations. The site is fast, intuitive, and our sales have increased by 40%.",
    author: "Emily Chen",
    role: "Founder, Artisanal Crafts",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="section-padding" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Client Testimonials"
          subtitle="Don't just take my word for it. Here's what my clients have to say about working with me."
          centered
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card border rounded-xl p-8 shadow-sm relative"
            >
              <div className="absolute -top-5 left-8 bg-primary rounded-full p-2 text-primary-foreground">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-6 mb-8 text-muted-foreground italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}