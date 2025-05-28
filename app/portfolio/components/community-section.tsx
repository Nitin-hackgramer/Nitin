import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Coffee, Cpu } from 'lucide-react';
import {Section} from '@/components/ui/section';

export default function CommunitySection() {
    return (
        <Section 
            id="community" 
            title="Community Leadership" 
            icon={<Users className="h-6 w-6 text-primary" />}
        >
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-semibold mb-4">Building Communities</h3>
                    <p className="text-muted-foreground mb-6">
                        I co-manage a thriving tech community with over 170+ developers and creators from diverse backgrounds.
                        We foster collaboration, knowledge sharing, and professional growth.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg mt-1">
                                <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Membership Growth</h4>
                                <p className="text-sm text-muted-foreground">Expanded community from 20 to 170+ members in 8 months</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg mt-1">
                                <Award className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Events & Workshops</h4>
                                <p className="text-sm text-muted-foreground">Organized 10+ events, workshops, and hackathons for upskilling</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="bg-primary/10 p-2 rounded-lg mt-1">
                                <Coffee className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Mentorship</h4>
                                <p className="text-sm text-muted-foreground">Mentored junior developers and facilitated peer learning</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full flex justify-center"
                >
                    <div className="relative w-full max-w-xs">
                        <div className="absolute -top-4 -left-4 bg-accent text-white p-4 rounded-full shadow-lg">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <div className="relative bg-background border-4 border-background shadow-2xl rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                            <img 
                                src="/community.webp" 
                                alt="Community" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}