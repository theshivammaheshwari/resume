import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  inView: boolean;
}

export default function SectionTitle({ icon: Icon, title, inView }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold mb-12 flex items-center gap-2"
    >
      <Icon className="text-blue-600" />
      {title}
    </motion.h2>
  );
}