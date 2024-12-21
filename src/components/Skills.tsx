import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Globe, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: <Code />,
    title: "Programming",
    skills: ["C", "C++", "Java", "Python"]
  },
  {
    icon: <Database />,
    title: "Databases",
    skills: ["SQL", "MySQL"]
  },
  {
    icon: <Globe />,
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    icon: <Terminal />,
    title: "IT Infrastructure & Monitoring",
    skills: ["Zabbix", "KQL", "Jira", "Confluence", "Remedy"]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}