"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Terminal, Cpu, Binary } from "lucide-react";
import { PinContainer } from "../components/ui/3d-pin";

const projects = [
  {
    title: "Club-Connect",
    description: "A club management platform for streamlined communication and events.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
    icon: <Terminal className="w-4 h-4" />,
  },
  {
    title: "Ornithopter Website",
    description: "A sleek product showcase site to present Ornithopter designs.",
    tech: ["React", "TypeScript"],
    link: "#",
    icon: <Code className="w-4 h-4" />,
  },
  {
    title: "Flashcard Quiz App",
    description: "A mobile quiz app built with Flutter to help you revise smarter.",
    tech: ["Flutter", "Dart"],
    link: "#",
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    title: "Mouse Control with Hand",
    description: "An experimental project using hand gestures to control the mouse.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "#",
    icon: <Binary className="w-4 h-4" />,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-20 bg-gray-950"
    >
      {/* Binary code background animation */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: Math.random() * 100 }}
            animate={{
              y: "100vh",
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 5,
              },
            }}
            className="absolute text-xs font-mono text-cyan-400 whitespace-nowrap"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Math.random().toString(2).substring(2, 15)}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-12 px-4"
      >
        <div className="inline-block relative">
          <div className="absolute -inset-2 bg-cyan-500/20 blur-lg rounded-full" />
          <h1 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
            &lt;my_projects&gt;
          </h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg font-mono mt-4"
        >
          $ npm run build --production
        </motion.p>
      </motion.div>

      {/* Projects grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center w-full max-w-6xl px-4">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="w-full flex items-center justify-center"
          >
            <div className="w-[24rem] h-[20rem]">
              <PinContainer
                title={project.link === "#" ? "In development" : "View project"}
                href={project.link}
                containerClassName="w-full h-full"
              >
                <div className="flex flex-col h-full w-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-gray-800 border border-cyan-400/20">
                      {React.cloneElement(project.icon, {
                        className: "w-5 h-5 text-cyan-400",
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-300 font-mono">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-gray-800 text-cyan-300 rounded-full border border-cyan-400/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center">
                    <span className="text-xs text-cyan-400 flex items-center font-mono">
                      {project.link === "#" ? "In development" : "View live"}
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </span>
                  </div>
                </div>
              </PinContainer>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute left-10 bottom-20 h-32 w-32 rounded-full bg-cyan-400 blur-[80px] opacity-30 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="absolute right-10 top-20 h-32 w-32 rounded-full bg-emerald-400 blur-[80px] opacity-30 -z-10"
      />
    </section>
  );
}
