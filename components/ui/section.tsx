import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function Section({ id, title, icon, children }: SectionProps) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          {icon}
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}