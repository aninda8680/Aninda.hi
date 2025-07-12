"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Club-Connect",
    description: "A club management platform for streamlined communication and events.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
  },
  {
    title: "Ornithopter Website",
    description: "A sleek product showcase site to present Ornithopter designs.",
    tech: ["React", "TypeScript"],
    link: "#",
  },
  {
    title: "Flashcard Quiz App",
    description: "A mobile quiz app built with Flutter to help you revise smarter.",
    tech: ["Flutter", "Dart"],
    link: "#",
  },
  {
    title: "Mouse Control with Hand",
    description: "An experimental project using hand gestures to control the mouse (details coming soon).",
    tech: ["TBD"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center px-6 py-12 bg-[#0a0a0a] text-green-400 font-mono"
    >
      <div className="w-full max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 text-center text-green-500"
        >
          Projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-green-300 mb-12 max-w-xl mx-auto text-sm sm:text-base"
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
              className="bg-[#111111] border border-[#222] hover:border-green-500 rounded-xl p-5 shadow-md hover:shadow-green-600/10 transition duration-300 flex flex-col"
            >
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">{project.title}</h3>
                <p className="text-green-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-green-900/20 border border-green-800 text-green-400 rounded-full"
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
                className="mt-auto inline-flex items-center gap-1 text-green-300 hover:text-green-200 transition text-sm"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
