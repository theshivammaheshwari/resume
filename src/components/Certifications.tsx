import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Section from './shared/Section';
import { getStaggeredAnimation } from '../utils/animations';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <Section title="Certifications" icon={Award} className="bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            {...getStaggeredAnimation(index)}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
            <p className="text-blue-600 text-sm mt-1">{cert.period}</p>
            <p className="mt-2 text-gray-700">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}