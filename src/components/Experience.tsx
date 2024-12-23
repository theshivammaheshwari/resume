import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Infrastructure & Support Engineer",
    company: "Zentity a.s.",
    period: "09/2022 - 12/2024",
    type: "Part-time",
    description: [
      "Skilled in log and error analysis to troubleshoot issues, coupled with internal IT support to ensure smooth operations. Providing technical support through collaboration tools and platforms.",
      "Hands-on experience with tools like Jira, Confluence, Atlassian Suite, and Remedy Ticketing for effective team collaboration and incident management.",
      "Skilled in using Zabbix for proactive monitoring and employing Kibana Query Language (KQL) for advanced log analysis and troubleshooting.",
      "Proficient in developing automation scripts using Python and Bash to streamline and optimize IT operations."
    ]
  },
  {
    title: "Technical Superintendent",
    company: "The LNM Institute of Information Technology",
    period: "08/2021 - 08/2022",
    type: "Full-time",
    description: [
      "I contribute to various project-related tasks, including procurement, resolving technical issues, and addressing evolving requirements.",
      "I develop on-the-fly shell scripts to provide immediate solutions for system-related challenges and assist technical staff in preparing program documentation.",
    
    ]
  },
  {
    title: "Junior Technical Superintendent",
    company: "The LNM Institute of Information Technology",
    period: "08/2015 - 07/2021",
    type: "Full-time",
    description: [
      "Regular lab maintenance",
      "Network equipment management",
      "Hardware and software troubleshooting",
      "Linux repository management"
    ]
  },
  {
    title: "Programmer",
    company: "The LNM Institute of Information Technology",
    period: "09/2014 - 07/2015",
    type: "Full-time",
    description: [
      "Oversaw the 'cse.lnmiit.ac.in' website for smooth operations",
      "Resolved programming challenges across the institute"
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 flex items-center gap-2"
        >
          <Briefcase className="text-blue-600" />
          Professional Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <div className="text-right">
                  <span className="text-gray-600">{exp.period}</span>
                  <p className="text-sm text-gray-500">{exp.type}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
