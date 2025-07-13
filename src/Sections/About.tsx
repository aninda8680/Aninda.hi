

import { motion } from 'framer-motion';
import { Gamepad2, Camera, BookText, Sparkles, Code, Flame, Cpu, Terminal, Database, Smartphone } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: <Code className="w-6 h-6" />, label: "Competitive Coding" },
    { icon: <Flame className="w-6 h-6" />, label: "Firebase & Apps" },
    { icon: <Terminal className="w-6 h-6" />, label: "Python Scripting" },
    { icon: <Smartphone className="w-6 h-6" />, label: "Mobile Dev" },
    { icon: <Database className="w-6 h-6" />, label: "Backend Systems" },
    { icon: <Gamepad2 className="w-6 h-6" />, label: "Gaming" },
    { icon: <BookText className="w-6 h-6" />, label: "Mystery Books" },
    { icon: <Camera className="w-6 h-6" />, label: "Photography" }
  ];

  return (
    <section id="about" className=" min-h-screen w-full overflow-x-hidden flex items-center justify-center px-6 py-4 bg-gray-950 ">

     

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Column - Terminal-style bio */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Terminal container with integrated header */}
          <div className="bg-gray-900/90 rounded-lg border border-gray-800 overflow-hidden">
            {/* Terminal header - now flush with body */}
            <div className="flex items-center gap-2 p-3 bg-gray-900 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs font-mono text-gray-400 ml-2">user@portfolio: ~/about</span>
            </div>

            {/* Terminal body - no gap between header */}
            <div className="p-6 font-mono">
              <div className="mb-4">
                <p className="text-green-400">$ <span className="text-cyan-400">whoami</span></p>
                <p className="text-gray-300 mt-2 ml-4">{"{"}</p>
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"name"</span>: <span className="text-amber-300">"Your Name"</span>,</p>
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"role"</span>: <span className="text-amber-300">"Developer"</span>,</p>
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"education"</span>: <span className="text-amber-300">"B.Tech CSE @ Adamas University"</span>,</p>
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"Building cool stuff"</span></p>
                <p className="text-gray-300 ml-4">{"}"}</p>
              </div>

              <div className="mb-4">
                <p className="text-green-400">$ <span className="text-cyan-400">cat bio.txt</span></p>
                <p className="text-gray-300 mt-2 ml-4">// 3rd year CS student passionate about solving</p>
                <p className="text-gray-300 ml-4">// problems through code. Currently focused on:</p>
                <p className="text-gray-300 ml-4">// - Python development</p>
                <p className="text-gray-300 ml-4">// - Firebase applications</p>
                <p className="text-gray-300 ml-4">// - Mobile development</p>
              </div>

              <div className="flex gap-4 mt-6">
                <div className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">
                  Always Learning
                </div>
                <div className="text-xs px-3 py-1 bg-purple-400/10 text-purple-400 rounded-full border border-purple-400/20">
                  Problem Solver
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Interest Cards */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-gray-300 mb-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
            My Interests & Skills
          </motion.h2>

          <div className="grid grid-cols-2 gap-4">
            {interests.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: '0 10px 20px -5px rgba(34, 211, 238, 0.2)'
                }}
                className="bg-gray-900/70 border border-gray-800 p-4 rounded-lg hover:bg-gray-800/70 transition-all cursor-default group relative overflow-hidden"
              >
                {/* Animated highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 w-8 h-8 mb-3">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Terminal-like blinking cursor */}
          <motion.div
            className="mt-12 text-gray-500 text-sm font-mono flex items-center justify-end gap-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <span>exploring more !!!!</span>
            <div className="w-2 h-4 bg-cyan-400 animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}