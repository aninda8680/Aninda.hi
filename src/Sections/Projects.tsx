"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Terminal, Github } from "lucide-react";

// 1. UPDATED projects array
const projects = [
  {
    title: "Club-Connect",
    description: "A club management platform for streamlined communication and events.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://club-connect-v1.vercel.app/", // Vercel Deployment Link
    githubLink: "https://github.com/aninda8680/Club-Connect.v1", // GitHub Repo Link
    icon: <Terminal className="w-5 h-5" />,
    color: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/10"
  },
  {
    title: "Ornithopter Website",
    description: "A sleek product showcase site to present Ornithopter designs.",
    tech: ["React", "TypeScript"],
    link: "#", // Retaining "#" for projects without a live link
    githubLink: "https://github.com/aninda8680/Ornithopter", // Added for consistency
    icon: <Code className="w-5 h-5" />,
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/10"
  },
  {
    title: "NetTrash",
    description: "An integrated system that combines IoT hardware (smart bins) with a sophisticated management software dashboard for real-time waste monitoring and automated logistics.",
    tech: ["React", "TypeScript"],
    link: "#", // Retaining "#" for projects without a live link
    githubLink: "https://github.com/aninda8680/Ornithopter", // Added for consistency
    icon: <Code className="w-5 h-5" />,
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/10"
 }
  // {
  //   title: "Flashcard Quiz App",
  //   description: "A mobile quiz app built with Flutter to help you revise smarter.",
  //   tech: ["Flutter", "Dart"],
  //   link: "#",
  //   icon: <Cpu className="w-5 h-5" />,
  //   color: "text-emerald-400",
  //   border: "border-emerald-400/20",
  //   bg: "bg-emerald-400/10"
  // },
  // {
  //   title: "Mouse Control with Hand",
  //   description: "An experimental project using hand gestures to control the mouse.",
  //   tech: ["Python", "OpenCV", "MediaPipe"],
  //   link: "#",
  //   icon: <Binary className="w-5 h-5" />,
  //   color: "text-amber-400",
  //   border: "border-amber-400/20",
  //   bg: "bg-amber-400/10"
  // },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center px-6 py-20 lg:py-20 bg-black border-t border-gray-800/50"
    >
      {/* Subtle Tech Pattern - a faint, scattered grid for texture */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(ellipse at top left, rgba(23,200,250,0.1), transparent), radial-gradient(ellipse at bottom right, rgba(168,85,247,0.1), transparent)',
      }}></div>

      {/* Professional Terminal-Inspired Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 text-center mb-5 px-4 w-full max-w-5xl"
      >
        <div className="inline-block border border-cyan-500/20 bg-gray-900 p-5 px-6 rounded-xl shadow-2xl shadow-cyan-500/10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 font-mono tracking-tight">
            <span className="text-cyan-400">$</span> view_projects<span className="text-cyan-400/80 animate-pulse">_</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-4 font-mono text-sm max-w-2xl mx-auto leading-relaxed"
          >
            // <span className="text-purple-400">Loading modules:</span> Curated work built with <span className="text-cyan-400">modular code</span> and <span className="text-emerald-400">high performance</span>.
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Grid with Terminal Cards */}
      <div className="relative z-10 w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { 
                  delay: idx * 0.5,   // stagger fade-in
                  duration: 0.6,        // smooth fade
                  ease: "easeInOut"
                } 
              }}
              whileHover={{
                y: -5,
                scale: 1.02, 
                boxShadow: '0 10px 25px -5px rgba(34, 211, 238, 0.4)', 
                transition: { duration: 0.2 }
              }}
              className="group border border-gray-800/50 bg-gray-900/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-800/90"
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
                    <div className={`p-3 rounded-full shadow-lg border ${project.border} ${project.bg} group-hover:shadow-xl group-hover:shadow-cyan-400/10 transition-shadow`}>
                      {React.cloneElement(project.icon, { className: `w-5 h-5 ${project.color}` })}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold font-mono text-white`}>
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
                          className={`text-xs px-3 py-1 rounded-full ${project.bg} ${project.border} border font-mono ${project.color} transition-colors group-hover:bg-opacity-20`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 2. MODIFIED Footer for better links */}
                  <div className="mt-auto pt-4 border-t border-gray-800/50 flex flex-wrap gap-4">
                    {/* Live Link */}
                    <a
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm font-mono transition-colors ${project.link === "#" ? "text-gray-500 cursor-not-allowed" : `${project.color} hover:text-white`}`}
                    >
                      {project.link === "#" ? (
                        <span className="text-xs text-gray-500">// deployment_pending</span>
                      ) : (
                        <>
                          <motion.span
                            animate={{
                              x: [0, 2, 0],
                              transition: {
                                duration: 1.5,
                                repeat: Infinity
                              }
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                          </motion.span>
                          <span>Live Deployment</span>
                        </>
                      )}
                    </a>

                    {/* GitHub Link (using Github icon) */}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center text-sm font-mono transition-colors ${project.githubLink === "#" ? "text-gray-500 cursor-not-allowed" : `${project.color} hover:text-white`}`}
                      >
                        {project.githubLink === "#" ? (
                          ''
                        ) : (
                          <>
                            <motion.span
                              initial={{ scale: 1 }}
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <Github className="w-4 h-4 mr-2" />
                            </motion.span>
                            <span>View Source</span>
                          </>
                        )}
                      </a>
                    )}
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
  className="fixed bottom-0 left-0 right-0 bg-transparent border-t border-gray-800/50 py-2 px-4 flex justify-between items-center text-xs font-mono text-gray-400"
>
  <div className="flex items-center gap-4">
    <span className="text-cyan-400">~/projects</span>
    <span>PROJECTS: {projects.length}</span>
    <span>by Aninda Debta</span>
  </div>
  <div className="flex items-center gap-2">
    <motion.span
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="w-2 h-2 rounded-full bg-cyan-400"
    />
    <span>DEV_MODE</span>
  </div>
</motion.div>


    </section>
  );
}