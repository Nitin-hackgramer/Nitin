"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "Company One", logo: "https://placehold.co/200x100/FFFFFF/AAAAAA?text=Company+One" },
  { name: "Company Two", logo: "https://placehold.co/200x100/FFFFFF/AAAAAA?text=Company+Two" },
  { name: "Company Three", logo: "https://placehold.co/200x100/FFFFFF/AAAAAA?text=Company+Three" },
  { name: "Company Four", logo: "https://placehold.co/200x100/FFFFFF/AAAAAA?text=Company+Four" },
  { name: "Company Five", logo: "https://placehold.co/200x100/FFFFFF/AAAAAA?text=Company+Five" },
];

export function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="container-custom">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-10">
          Trusted by innovative companies
        </h2>
        
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-[150px] h-12 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={150}
                height={48}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}