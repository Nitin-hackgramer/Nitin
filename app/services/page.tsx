// app/services/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Layout, TrendingUp, ShoppingCart, Palette, Globe, Database, Shield } from 'lucide-react';

// Enhanced services data with icons and more detailed content
const services = [
  {
    title: 'Web Development',
    icon: <Code className="w-10 h-10" />,
    description: 'Crafting modern, scalable, and high-performance websites with clean and maintainable code.',
    longDescription: 'From responsive designs to complex web applications, I deliver solutions built with the latest technologies including React, Next.js, and TypeScript. My focus is on creating fast, accessible, and SEO-friendly websites that provide an exceptional user experience across all devices.',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'UI/UX Design',
    icon: <Palette className="w-10 h-10" />,
    description: 'Creating elegant, user-centered interfaces and intuitive experiences for websites and apps.',
    longDescription: 'I combine aesthetic appeal with functional design to create interfaces that users love. My design process involves careful research, wireframing, prototyping, and user testing to ensure the final product not only looks beautiful but also provides a seamless user experience.',
    technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Accessibility'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'SEO Optimization',
    icon: <TrendingUp className="w-10 h-10" />,
    description: 'Optimizing content and structure to boost discoverability and increase organic traffic.',
    longDescription: 'I implement comprehensive SEO strategies that help your website rank higher in search engine results. This includes keyword research, on-page optimization, technical SEO improvements, and performance enhancements to ensure your content reaches your target audience effectively.',
    technologies: ['Keyword Research', 'Analytics', 'Performance Optimization', 'Content Strategy', 'Local SEO'],
    color: 'from-green-500 to-emerald-400',
  },
  {
    title: 'E-commerce Solutions',
    icon: <ShoppingCart className="w-10 h-10" />,
    description: 'Developing seamless, secure online stores with smooth checkout and management tools.',
    longDescription: 'I build complete e-commerce platforms that help businesses sell products online effectively. My solutions include intuitive product catalogs, secure payment processing, inventory management, and analytics dashboards to track sales and customer behavior.',
    technologies: ['Shopify', 'WooCommerce', 'Payment Gateways', 'Inventory Systems', 'Customer Analytics'],
    color: 'from-amber-500 to-orange-400',
  },
  {
    title: 'Responsive Web Design',
    icon: <Layout className="w-10 h-10" />,
    description: 'Creating websites that look and function perfectly across all devices and screen sizes.',
    longDescription: 'I design and develop websites that automatically adapt to any device - from desktop computers to tablets and smartphones. My approach ensures consistent user experience regardless of screen size, while maintaining optimal performance across all platforms.',
    technologies: ['Mobile-First Design', 'Fluid Layouts', 'Media Queries', 'Viewport Optimization', 'Cross-browser Testing'],
    color: 'from-red-500 to-rose-400',
  },
  {
    title: 'International SEO',
    icon: <Globe className="w-10 h-10" />,
    description: 'Expanding your global reach with multilingual and multi-regional SEO strategies.',
    longDescription: 'I help businesses reach international audiences through specialized SEO techniques. This includes hreflang implementation, international keyword research, localized content creation, and technical configurations to ensure your website performs well in global markets.',
    technologies: ['Hreflang Tags', 'International Targeting', 'Language Optimization', 'GeoTargeting', 'Cultural Adaptation'],
    color: 'from-indigo-500 to-violet-400',
  },
  {
    title: 'Database Design',
    icon: <Database className="w-10 h-10" />,
    description: 'Creating efficient, scalable database structures for web applications and business systems.',
    longDescription: 'I design and implement database systems that efficiently store and retrieve your valuable data. My expertise includes relational and NoSQL database design, data modeling, optimization for performance, and implementing secure access controls.',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'],
    color: 'from-sky-500 to-blue-400',
  },
  {
    title: 'Security Implementation',
    icon: <Shield className="w-10 h-10" />,
    description: 'Protecting your digital assets with robust security measures and best practices.',
    longDescription: 'I implement comprehensive security solutions to protect websites and applications from various threats. This includes secure authentication systems, data encryption, regular security audits, and implementing best practices to prevent common vulnerabilities.',
    technologies: ['Auth Systems', 'HTTPS/SSL', 'Data Encryption', 'OWASP Guidelines', 'Security Auditing'],
    color: 'from-teal-500 to-cyan-400',
  },
];

// Testimonials to enhance the page
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    text: "The web development services exceeded our expectations. Our site is now loading 3x faster and our conversion rate has increased by 40%.",
    avatar: "/api/placeholder/50/50"
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthBrand",
    text: "The SEO optimization completely transformed our online presence. We're now ranking on the first page for our key terms, and organic traffic has doubled.",
    avatar: "/api/placeholder/50/50"
  },
  {
    name: "Elena Rodriguez",
    position: "Founder, ArtisanCraft",
    text: "The e-commerce solution was exactly what our small business needed. Setup was smooth, and we saw sales increase immediately after launch.",
    avatar: "/api/placeholder/50/50"
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white min-h-screen">
      {/* Hero section with particle effect */}
      <section className="relative overflow-hidden py-20 px-4 md:px-6">
        <div className="absolute inset-0 z-0">
          <Particles />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Expert Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Transforming ideas into exceptional digital experiences with cutting-edge technologies and creative solutions.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-10"
            >
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-400/30 transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
              Services I Offer
              <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique needs, combining technical expertise with creative innovation.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.2)",
                  transition: { duration: 0.3 } 
                }}
                className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 cursor-pointer transition-all"
                onClick={() => setSelectedService(service)}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 bg-gradient-to-br ${service.color} bg-opacity-20`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">Learn more</span>
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl relative"
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelectedService(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className={`rounded-xl p-5 bg-gradient-to-br ${selectedService.color} hidden md:flex items-center justify-center`}>
                <div className="text-white w-16 h-16">
                  {selectedService.icon}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {selectedService.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {selectedService.longDescription}
                </p>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${selectedService.color} bg-opacity-20 text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className={`bg-gradient-to-r ${selectedService.color} text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105`}>
                    Request this service
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg className="w-8 h-8 text-blue-500/20 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 relative z-10">{testimonial.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_60%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15),transparent_60%)]"></div>
            </div>
            
            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-block">
                <Sparkles className="w-10 h-10 mx-auto text-blue-400 mb-4" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Let's collaborate to create something extraordinary that meets your business goals and delights your users.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto">
                  Start a Project
                </button>
                <button className="border border-blue-500 text-blue-400 hover:text-white hover:bg-blue-500/10 font-semibold py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto">
                  View Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Animated background particles component
function Particles() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; opacity: number; speed: number; }[]>([]);
  
  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 0.5 + 0.2
        });
      }
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: ['0%', '100%'],
            opacity: [particle.opacity, 0],
          }}
          transition={{
            duration: 10 / particle.speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}