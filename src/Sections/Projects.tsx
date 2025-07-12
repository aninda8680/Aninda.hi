"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Club-Connect",
    description: "A club management platform for streamlined communication and events.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#", // replace with actual link
  },
  {
    title: "Ornithopter Website",
    description: "A sleek product showcase site to present Ornithopter designs.",
    tech: ["React", "TypeScript"],
    link: "#", // replace with actual link
  },
  {
    title: "Flashcard Quiz App",
    description: "A mobile quiz app built with Flutter to help you revise smarter.",
    tech: ["Flutter", "Dart"],
    link: "#", // replace with actual link
  },
  {
    title: "Mouse Control with Hand",
    description: "An experimental project using hand gestures to control the mouse (details coming soon).",
    tech: ["TBD"],
    link: "#", // placeholder
  },
];

export default function Projects() {
  return (
    <section id="projects" className=" min-h-screen w-full overflow-x-hidden flex items-center justify-center px-6 py-4 bg-gray-950 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Projects
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-700 text-center mb-10"
      >
        I build whatever pops into my head — ideas, experiments, and tools I vibe with.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-2xl shadow-sm p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-neutral-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 text-sm text-indigo-600 hover:underline"
            >
              View Project <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
