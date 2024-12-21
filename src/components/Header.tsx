import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative"
          >
            
           
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-4"
            >
              Shivam Maheshwari
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 mb-6"
            >
              Infrastructure & Support Engineer | IT Professional
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              {[
                {
                  icon: Mail,
                  href: "mailto:theshivammaheshwari@gmail.com",
                  text: "theshivammaheshwari@gmail.com"
                },
                {
                  icon: Phone,
                  href: "tel:+919468955596",
                  text: "+91-9468955596"
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/theshivammaheshwari",
                  text: "LinkedIn"
                },
                {
                  icon: Github,
                  href: "https://github.com/theshivammaheshwari",
                  text: "GitHub"
                }
              ].map(({ icon: Icon, href, text }, index) => (
                <motion.a
                  key={text}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                  <span>{text}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-center text-gray-300 leading-relaxed"
        >
          Leveraging nearly a decade of experience in IT infrastructure, operations, and programming. 
          Passionate about secure and efficient systems, demonstrated through my MTech thesis on 
          certificate-less signcryption schemes in VANETs and dedication to innovative IT solutions.
        </motion.p>
      </div>
    </motion.header>
  );
}
