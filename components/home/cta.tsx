"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, Mail, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container-custom"
      >
        <div className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              className="w-full h-full"
            >
              <path
                fill="currentColor"
                d="M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63"
                className="text-primary"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                d="M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764"
                className="text-primary"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                d="M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880"
                className="text-accent"
              />
            </svg>
          </div>
          
          <div className="py-16 px-8 md:px-16 lg:py-24 max-w-2xl relative z-10">
            <h2 className="h2 mb-4">Ready to bring your ideas to life?</h2>
            <p className="p-large text-muted-foreground mb-8">
              I'm currently available for new projects. Let's discuss how I can help you create an exceptional website that aligns with your business goals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Book a consultation</h4>
                  <p className="text-sm text-muted-foreground">Schedule a 30-minute discovery call</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Send a message</h4>
                  <p className="text-sm text-muted-foreground">Fill out the contact form with details</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let's work together
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  View my services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}