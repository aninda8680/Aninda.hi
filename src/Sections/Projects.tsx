"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Terminal, Cpu, Binary, Heart } from "lucide-react";

const projects = [
  {
    title: "Club-Connect",
    description: "A club management platform for streamlined communication and events.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "#",
    icon: <Terminal className="w-5 h-5" />,
    color: "from-cyan-400 to-blue-500"
  },
  {
    title: "Ornithopter Website",
    description: "A sleek product showcase site to present Ornithopter designs.",
    tech: ["React", "TypeScript"],
    link: "#",
    icon: <Code className="w-5 h-5" />,
    color: "from-purple-400 to-pink-500"
  },
  {
    title: "Flashcard Quiz App",
    description: "A mobile quiz app built with Flutter to help you revise smarter.",
    tech: ["Flutter", "Dart"],
    link: "#",
    icon: <Cpu className="w-5 h-5" />,
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "Mouse Control with Hand",
    description: "An experimental project using hand gestures to control the mouse.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    link: "#",
    icon: <Binary className="w-5 h-5" />,
    color: "from-amber-400 to-orange-500"
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 py-20 bg-gray-950"
    >
      {/* Enhanced binary code background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              y: -20, 
              x: Math.random() * 100,
              opacity: 0
            }}
            animate={{
              y: "110vh",
              opacity: [0, 0.5, 0],
              transition: {
                duration: 15 + Math.random() * 30,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "linear"
              },
            }}
            className="absolute text-xs font-mono text-cyan-400 whitespace-nowrap"
            style={{ 
              left: `${Math.random() * 100}%`,
              textShadow: "0 0 8px rgba(34, 211, 238, 0.8)"
            }}
          >
            {Math.random().toString(2).substring(2, 15)}
          </motion.div>
        ))}
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      {/* Header with heartbeat animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 text-center mb-16 px-4"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror"
            }
          }}
          className="inline-block relative"
        >
          <div className="absolute -inset-3 bg-cyan-500/30 blur-xl rounded-full opacity-70" />
          <h1 className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono tracking-tighter">
            &lt;projects_with_heart&gt;
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg font-mono mt-6 flex items-center justify-center gap-2"
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <Heart className="w-5 h-5 text-pink-400 fill-pink-400/20" />
          </motion.span>
          $ npm run dev --passion=max
        </motion.p>
      </motion.div>

      {/* Projects grid with cascading animation */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
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
              className="group perspective-1000"
            >
              <div className={`h-full border border-gray-800 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-900/10 p-6 transition-all duration-500 hover:shadow-lg hover:shadow-${project.color.split(' ')[0]}/10 relative overflow-hidden`}>
                {/* Animated border glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-xl border-2 pointer-events-none border-transparent bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                {/* Pulsing icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    transition: {
                      duration: 3 + Math.random() * 3,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }
                  }}
                  className={`p-2 rounded-lg bg-gray-800 border ${project.color.replace('from-', 'border-').replace(' to', '/20')} w-fit mb-4`}
                >
                  {React.cloneElement(project.icon, { className: `w-5 h-5 ${project.color.replace('from-', 'text-').split(' ')[0]}` })}
                </motion.div>

                <div className="flex flex-col h-full">
                  <div>
                    <h3 className={`text-xl font-bold font-mono bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <motion.p 
                      whileHover={{ x: 2 }}
                      className="text-gray-400 text-sm mt-2"
                    >
                      {project.description}
                    </motion.p>
                  </div>

                  <div className="flex flex-wrap gap-2 my-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`text-xs px-3 py-1 bg-gray-800 rounded-full border ${project.color.replace('from-', 'border-').replace(' to', '/30')} font-mono text-white`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={project.link}
                      className={`inline-flex items-center text-xs font-mono ${project.color.replace('from-', 'text-').split(' ')[0]}`}
                    >
                      {project.link === "#" ? "Coming soon" : "View project"}
                      <motion.span
                        animate={{
                          x: [0, 3, 0],
                          transition: {
                            duration: 2,
                            repeat: Infinity
                          }
                        }}
                      >
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced glow effects */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-cyan-400 blur-[100px] opacity-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-400 blur-[100px] opacity-0 -z-10"
      />
      
      {/* Floating hearts in background */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0
          }}
          animate={{
            y: "100vh",
            opacity: [0, 0.3, 0],
            transition: {
              duration: 20 + Math.random() * 30,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear"
            }
          }}
          className="absolute text-xs text-pink-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: `${10 + Math.random() * 10}px`
          }}
        >
          ♥
        </motion.div>
      ))}
      {/* Status bar at bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-gray-900/80 border-t border-gray-800 py-2 px-4 flex justify-between items-center text-xs font-mono text-gray-400"
      >
        <div className="flex items-center gap-4">
          <span>"def greet()"</span>
          <span>TECH: {projects.reduce((acc, proj) => acc + proj.tech.length, 0)}</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 rounded-full bg-emerald-400"
          />
          <span>READY</span>
        </div>
      </motion.div>
    </section>
  );
}