"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Terminal, Cpu, Binary, Heart, GitBranch, CpuIcon } from "lucide-react";

const projects = [
  {
    title: "Club-Connect",
    description: "A club management platform for streamlined communication and events.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
    icon: <Terminal className="w-5 h-5" />,
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10"
  },
  {
    title: "Ornithopter Website",
    description: "A sleek product showcase site to present Ornithopter designs.",
    tech: ["React", "TypeScript"],
    link: "#",
    icon: <Code className="w-5 h-5" />,
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/10"
  },
  {
    title: "Flashcard Quiz App",
    description: "A mobile quiz app built with Flutter to help you revise smarter.",
    tech: ["Flutter", "Dart"],
    link: "#",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Mouse Control with Hand",
    description: "An experimental project using hand gestures to control the mouse.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "#",
    icon: <Binary className="w-5 h-5" />,
    color: "text-amber-400",
    border: "border-amber-400/20",
    bg: "bg-amber-400/10"
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center px-4 py-20 bg-black border-t border-gray-800/50"
    >
      {/* CRT Screen Effect */}
      <div className="fixed inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-[url('/crt.png')] opacity-10 z-50" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0.2) 50%,transparent_50%)] bg-[length:100%_4px] opacity-20" />

      {/* Matrix Rain Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: -20, 
              x: Math.random() * 100,
              opacity: 0
            }}
            animate={{
              y: "110vh",
              opacity: [0, 0.8, 0],
              transition: {
                duration: 5 + Math.random() * 15,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              },
            }}
            className="absolute text-xs font-mono text-green-400 whitespace-nowrap"
            style={{ 
              left: `${Math.random() * 100}%`,
              textShadow: "0 0 5px rgba(74, 222, 128, 0.7)"
            }}
          >
            {Math.random().toString(36).substring(2, 15)}
          </motion.div>
        ))}
      </div>

      {/* Professional Terminal-Inspired Header */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, type: "spring" }}
  className="relative z-10 text-center mb-16 px-4 w-full max-w-5xl"
>
  <div className="inline-block border border-emerald-500/20 bg-gray-900 p-5 px-6 rounded-lg shadow-xl shadow-emerald-500/5">
    <div className="flex items-center gap-2 mb-3 font-mono text-xs text-emerald-400">
      <GitBranch className="w-4 h-4 opacity-80" />
      <span>~/professional-portfolio</span>
      <div className="h-3 w-[1px] bg-emerald-400/80 animate-pulse ml-auto"></div>
    </div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono tracking-tight">
      <span className="text-emerald-400">$</span> view_projects<span className="text-emerald-400/80 animate-pulse">_</span>
    </h1>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-gray-400 mt-4 font-mono text-sm max-w-2xl mx-auto leading-relaxed"
    >
      {/* Professional description with subtle colors */}
      // Curated selection of professional work. Built with <span className="text-blue-400">precision</span> and <span className="text-emerald-400">expertise</span>.
    </motion.p>
  </div>
</motion.div>

      {/* Projects Grid with Terminal Cards */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  delay: idx * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                } 
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group border ${project.border} ${project.bg} rounded-lg overflow-hidden backdrop-blur-sm`}
            >
              <div className="p-5 h-full flex flex-col">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4 font-mono text-xs">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className={`${project.color} ml-2`}>project_{idx + 1}.js</span>
                </div>

                {/* Project Content */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-2 rounded ${project.bg} ${project.border} border`}>
                      {React.cloneElement(project.icon, { className: `w-5 h-5 ${project.color}` })}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold font-mono ${project.color}`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1 font-mono">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="my-4">
                    <p className="text-gray-500 text-xs font-mono mb-2">// tech_stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`text-xs px-3 py-1 rounded-full ${project.bg} ${project.border} border font-mono ${project.color}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-800/50">
                    <a
                      href={project.link}
                      className={`inline-flex items-center text-xs font-mono ${project.link === "#" ? "text-gray-500 cursor-not-allowed" : `${project.color} hover:text-white`}`}
                    >
                      {project.link === "#" ? "// deployment_pending" : "// view_live"}
                      {project.link !== "#" && (
                        <motion.span
                          animate={{
                            x: [0, 2, 0],
                            transition: {
                              duration: 1.5,
                              repeat: Infinity
                            }
                          }}
                        >
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </motion.span>
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-gray-800/50 py-2 px-4 flex justify-between items-center text-xs font-mono text-gray-400"
      >
        <div className="flex items-center gap-4">
          <span className="text-green-400">~/projects</span>
          <span>PROJECTS: {projects.length}</span>
          <span>TECH: {projects.reduce((acc, proj) => acc + proj.tech.length, 0)}</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
          <span>DEV_MODE</span>
        </div>
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
    </section>
  );
}