import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import Section from './shared/Section';
import { fadeInUp } from '../utils/animations';

const projectsData = [
  {
    title: "PC Application Control Through Air Gestures - IIT Kanpur",
    description:
      "Small and clever controller lets you control your computer through gestures. Easy set-up. Fast and generally responsive to even slight hand/finger movement.",
  },
  {
    title: "Smart Light Hack Using Raspberry Pi and NodeMCU",
    description:
      "Smart lights are vulnerable to security flaws due to default passwords and weak security settings. Attackers can exploit these vulnerabilities to gain unauthorized control over the lighting system. We have to detect unusual traffic to address potential security issues.",
  },
  {
    title: "COVID-19 Race Graph Visualization using D3.js",
    description:
      "Created an interactive race chart using D3.js to visualize the progression of COVID-19 cases across countries over time with dynamic and engaging animations.",
  },
  {
    title: "Intranet Website",
    description:
      "cse.lnmiit.ac.in An intranet is a private website that can only be accessed by people within your company. When you create an intranet, you give your staff somewhere to view and share information relating to your company.",
  },
];

export default function Projects() {
  return (
    <Section title="Projects" icon={Code} className="bg-white">
      <div className="grid gap-6 max-w-3xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <p className="text-gray-700 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
