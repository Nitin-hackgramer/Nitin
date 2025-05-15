'use client';
import React, { useState } from 'react';
import { MessageSquare, User, Mail, Phone, Send, MapPin, Linkedin, GitHub, Twitter } from 'react-feather';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  
  const validateForm = () => {
    const newErrors: Partial<FormState> = {};
    if (!form.name?.trim()) newErrors["name"] = "Name is required";
    if (!form.email?.trim()) newErrors["email"] = "Email is required";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) newErrors["email"] = "Email is invalid";
    if (!form.message?.trim()) newErrors["message"] = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error when user types
    if (name in errors) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-slate-900 text-white min-h-screen">
      {/* Header with floating particles effect */}
      <div className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-500 opacity-10"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            Let's Collaborate
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or interested in working together? I'd love to hear from you!
          </p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <MessageSquare className="mr-3 text-blue-500" />
                Send Me a Message
              </h2>
              
              {submitted ? (
                <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">Message Sent!</h3>
                  <p className="text-gray-300 mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <input 
                        name="name" 
                        type="text" 
                        value={form.name} 
                        onChange={handleChange}
                        placeholder="Your Name" 
                        className={`w-full bg-slate-700/50 border ${errors.name ? 'border-red-500' : 'border-slate-600'} rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      />
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <div className="relative">
                      <input 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={handleChange}
                        placeholder="Your Email" 
                        className={`w-full bg-slate-700/50 border ${errors.email ? 'border-red-500' : 'border-slate-600'} rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      />
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div className="relative">
                    <input 
                      name="phone" 
                      type="tel" 
                      value={form.phone} 
                      onChange={handleChange}
                      placeholder="Your Phone (Optional)" 
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  
                  <div className="relative">
                    <input 
                      name="subject" 
                      type="text" 
                      value={form.subject} 
                      onChange={handleChange}
                      placeholder="Subject" 
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  
                  <div>
                    <div className="relative">
                      <textarea 
                        name="message" 
                        rows={5} 
                        value={form.message} 
                        onChange={handleChange}
                        placeholder="Your Message" 
                        className={`w-full bg-slate-700/50 border ${errors.message ? 'border-red-500' : 'border-slate-600'} rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      />
                    </div>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 py-4 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition-all"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-500/20 p-3 rounded-lg">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-200">Email</h3>
                    <p className="text-blue-400 hover:text-blue-300 transition-colors">nitinkumar12082005@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-lg">
                    <Phone className="text-purple-500" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                    <p className="text-purple-400 hover:text-purple-300 transition-colors">+91 9968358455</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-lg">
                    <MapPin className="text-indigo-500" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-200">Location</h3>
                    <p className="text-indigo-400 hover:text-indigo-300 transition-colors">Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="https://www.linkedin.com/in/nitin-sharma-a1a1a62ab/" className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all">
                  <Linkedin className="text-blue-400 mr-2" size={20} />
                  <span>LinkedIn</span>
                </a>
                
                <a href="https://github.com/nitin-hackgramer" className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all">
                  <GitHub className="text-gray-300 mr-2" size={20} />
                  <span>GitHub</span>
                </a>
                
                <a href="https://x.com/NitinSh60345544" className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all">
                  <Twitter className="text-blue-400 mr-2" size={20} />
                  <span>Twitter</span>
                </a>
                <a
                    href="mailto:nitinkumar12082005@gmail.com"
                    className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all"
                    aria-label="Email"
                >
                    <Mail className="text-blue-400 mr-2" size={20} />
                    <span>Email</span>
                </a>
                
                <a
                    href="tel:+919968358455"
                    className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-lg p-4 transition-all"
                    aria-label="Phone"
                >
                    <Phone className="text-purple-400 mr-2" size={20} />
                    <span>Phone</span>
                </a>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-medium text-blue-400 mb-2">What services do you offer?</h3>
                  <p className="text-gray-300">I specialize in web development, UI/UX design, and digital marketing solutions tailored to your specific needs.</p>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-medium text-blue-400 mb-2">How quickly can you respond to inquiries?</h3>
                  <p className="text-gray-300">I typically respond to all messages within 24-48 hours during business days.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-blue-400 mb-2">Do you work with international clients?</h3>
                  <p className="text-gray-300">Yes! I work with clients worldwide and can accommodate different time zones for meetings and communications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <style jsx global>{`
            @keyframes float {
              0% { transform: translateY(0px) translateX(0px); }
              50% { transform: translateY(-20px) translateX(10px); }
              100% { transform: translateY(0px) translateX(0px); }
            }
          `}</style>
        </div>
      </footer>
    </div>
  );
}