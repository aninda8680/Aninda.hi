

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
    <section id="about" className=" min-h-screen w-screen flex items-center justify-center px-6 py-4 bg-gray-950 overflow-hidden">

     

      <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Left Column - About Me Heading and Whoami Box */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Animated title */}
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              About Me
            </h1>
          </motion.div>

          {/* Glowing animated border card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative p-[1px] rounded-xl bg-gradient-to-br from-cyan-500/30 to-purple-600/30 backdrop-blur-md"
          >
            <div className="bg-gray-900/80 rounded-xl p-8 backdrop-blur-sm h-full">
              <motion.p
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="font-mono text-cyan-400">$ whoami</span><br /><br />
                Hey! I'm a <span className="font-semibold text-white">3rd year B.Tech CSE student</span> at{' '}
                <span className="text-purple-400 font-medium">Adamas University</span>. Currently hacking on{' '}
                <span className="text-cyan-400">Python</span>, building with{' '}
                <span className="text-purple-400">Firebase</span>, and exploring{' '}
                <span className="text-cyan-400">App Development</span>.
              </motion.p>

              <motion.div
                className="mt-6 p-4 bg-gray-800/50 rounded-lg border-l-4 border-cyan-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-gray-400 font-mono text-sm md:text-base">
                  <span className="text-green-400">//</span> Passionate about solving complex problems<br />
                  <span className="text-green-400">//</span> Love turning coffee into clean code<br />
                  <span className="text-green-400">//</span> Always learning, always building
                </p>
              </motion.div>
            </div>
          </motion.div>
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