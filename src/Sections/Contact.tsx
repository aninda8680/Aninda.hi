"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 max-w-3xl mx-auto p-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-center mb-10"
      >
        Let’s connect — whether you want to collaborate, hire, or just say hi!
      </motion.p>

      <div className="flex flex-col items-center gap-6 text-gray-800 dark:text-gray-200">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 text-lg hover:text-indigo-600"
        >
          <Mail className="w-5 h-5" />
          your.email@example.com
        </a>

        <div className="flex gap-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
