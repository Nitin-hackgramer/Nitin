"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    quote: "Nitin's expertise helped us digitize our operations seamlessly. Our new platform has expanded our reach across India, boosting sales and customer satisfaction.",
    author: "Prince Gupta",
    role: "Managing Director, BharatConnect Solutions",
    avatar: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example: Indian male
  },
  {
    quote: "Nitin truly understood our vision for connecting with the Indian market. The website he designed not only looks fantastic but also resonates deeply with our local audience.",
    author: "Piyush Thapliyal",
    role: "Brand Manager, DesiCrafts Emporium",
    avatar: "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example: Indian female
  },
  {
    quote: "For our pan-India e-commerce venture, Nitin developed a robust and scalable platform. It's user-friendly for both our team and customers, leading to a significant uplift in our online business.",
    author: "Prakash Madhok",
    role: "Proprietor, ApniDukaan Online",
    avatar: "https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Example: Indian male
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