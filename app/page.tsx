import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { ClientsSection } from "@/components/home/clients";
import { ServicesPreview } from "@/components/home/services-preview";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { TestimonialsSection } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Nitin Sharma | Freelance Web Developer",
  description: "Expert freelance web developer specializing in React, Next.js, and modern web technologies.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}