import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Section from './shared/Section';
import { fadeInUp } from '../utils/animations';
import { volunteeringData } from '../data/volunteering';

export default function Volunteering() {
  return (
    <Section title="Volunteering & Leadership" icon={Heart} className="bg-white">
      <motion.div
        {...fadeInUp}
        className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-semibold text-gray-900">{volunteeringData.title}</h3>
        <p className="text-blue-600 mt-1">{volunteeringData.period}</p>
        <p className="text-gray-700 font-medium mt-2">{volunteeringData.role}</p>
        <ul className="mt-4 space-y-2">
          {volunteeringData.responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}