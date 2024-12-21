import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import Section from './shared/Section';
import { getStaggeredAnimation } from '../utils/animations';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <Section title="Education" icon={GraduationCap} className="bg-white">
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            {...getStaggeredAnimation(index)}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
            <p className="text-blue-600">{edu.institution}</p>
            <div className="flex justify-between mt-2">
              <span className="text-gray-600">{edu.period}</span>
              <span className="text-green-600 font-semibold">{edu.score}</span>
            </div>
            <p className="mt-3 text-gray-700">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}