import React from 'react';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';
import SectionTitle from './SectionTitle';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

export default function Section({ title, icon, className = '', children }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <SectionTitle icon={icon} title={title} inView={inView} />
        {children}
      </div>
    </section>
  );
}