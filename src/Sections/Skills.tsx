"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, CodeSquare, Database, Cpu, Palette, Code} from 'lucide-react';
// The user requested to remove the SnakeGame import
// import { SnakeGame } from "./SnakeGame"; 

const categories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "TypeScript"],
    icon: <Terminal className="w-5 h-5 text-green-400" />,
    code: `print("Hello World!")`
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Next.js"],
    icon: <CodeSquare className="w-5 h-5 text-cyan-400" />,
    code: `function App() {\n  return <h1>Hello</h1>;\n}`
  },
  {
    title: "Backend/DB",
    skills: ["Firebase", "PostgreSQL", "Node.js"],
    icon: <Database className="w-5 h-5 text-purple-400" />,
    code: `const firebaseConfig = {\n  // config\n};`
  },
  {
    title: "DevOps/Tools",
    skills: ["Git", "VS Code", "Vercel/Netlify"],
    icon: <Cpu className="w-5 h-5 text-yellow-400" />,
    code: `git commit -m "update"`
  },
  {
    title: "Design/UX",
    skills: ["Figma", "UI/UX Principles", "Animation"],
    icon: <Palette className="w-5 h-5 text-pink-400" />,
    code: `prompt = "Generate code"`
  },
];

const typingVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3
    }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200
    }
  }
};

export default function Skills() {
  const title = "<my_skills />";
  
  return (
    <section 
      id="skills" 
      // FIX: Removed 'flex items-center justify-center' which was pushing content off-screen when the content height exceeded min-h-screen.
      // Adjusted padding for better overall spacing.
      className=" min-h-screen w-full overflow-x-hidden px-6 py-20 lg:py-32 bg-gray-950 border-t border-gray-800/50"
    >
      {/* FIX: Added 'mx-auto' to ensure the max-width container is centered horizontally. */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        
        {/* Left Column - Terminal-style Skills Summary */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <div className="bg-gray-900/90 rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-gray-950/50">
            
            {/* Terminal header */}
            <div className="flex items-center gap-2 p-3 bg-gray-900 border-b border-gray-800">
              <div className="flex gap-2">
                {["red", "yellow", "green"].map((color) => (
                  <div key={color} className={`w-3 h-3 rounded-full bg-${color}-500`}></div>
                ))}
              </div>
              <span className="text-xs font-mono text-gray-400 ml-2">user@portfolio: ~/skills</span>
            </div>

            {/* Terminal body */}
            <div className="p-6 font-mono">
              <div className="mb-4">
                <p className="text-green-400">$ <span className="text-cyan-400">echo "My Expertise"</span></p>
                
                <motion.h1 
                  className="text-3xl font-bold text-white mb-4 flex flex-wrap mt-2 ml-4"
                  variants={typingVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {title.split("").map((char, i) => (
                    <motion.span 
                      key={i} 
                      variants={letterVariants}
                      whileHover={{ scale: 1.2, color: "#3b82f6" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>
              </div>

              {/* Skills as JSON output */}
              <div className="mb-4">
                <p className="text-green-400">$ <span className="text-cyan-400">cat skills.json</span></p>
                <p className="text-gray-300 mt-2 ml-4">{"{"}</p>
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"focus"</span>: <span className="text-amber-300">"Full-Stack Web Development"</span>,</p>
                
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"core_stack"</span>: [</p>
                <p className="text-gray-300 ml-8"><span className="text-emerald-400">"React/Next.js"</span>,</p>
                <p className="text-gray-300 ml-8"><span className="text-emerald-400">"Python/Node.js"</span>,</p>
                <p className="text-gray-300 ml-8"><span className="text-emerald-400">"Firebase/SQL"</span></p>
                <p className="text-gray-300 ml-6">],</p>
                
                <p className="text-gray-300 ml-6"><span className="text-purple-400">"methodology"</span>: <span className="text-amber-300">"Clean Code & Performance"</span></p>
                <p className="text-gray-300 ml-4">{"}"}</p>
              </div>

              {/* Blinking cursor at the end */}
              <motion.div
                className="mt-6 text-gray-500 text-sm font-mono flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span>user@portfolio:~$</span>
                <motion.div
                  className="w-2 h-4 bg-cyan-400 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Skills Cards */}
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
            <Code className="w-6 h-6 text-cyan-400" />
            Skill Categories
          </motion.h2>

          <div className="grid grid-cols-3 gap-4">
            <AnimatePresence>
              {categories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    // Adjusted shadow to use cyan for a cyberpunk/tech feel
                    boxShadow: '0 10px 20px -5px rgba(34, 211, 238, 0.2)'
                  }}
                  // Using the reference card style
                  className="bg-gray-900/70 border border-gray-800 p-4 rounded-lg hover:bg-gray-800/70 transition-all cursor-default group relative overflow-hidden"
                >
                  {/* Animated highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      {/* Icon is already colored via props in categories array */}
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 p-1 group-hover:bg-cyan-400/20 transition-colors">
                          {category.icon}
                      </div>
                      <h3 className="font-mono font-medium text-white text-lg">
                        {category.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-1 mb-3 ml-2 text-sm text-gray-400">
                      {category.skills.map((skill) => (
                        <li 
                          key={skill}
                          className="flex items-center"
                        >
                          <span className="text-cyan-400 mr-2">/</span>
                          {skill}
                        </li>
                      ))}
                    </ul>

                    {/* Code snippet at the bottom */}
                    <div 
                      className="mt-auto bg-black/50 rounded p-2 overflow-x-auto border border-gray-700/50"
                    >
                      <code
                        className="text-gray-400 text-xs font-mono block whitespace-pre"
                      >
                        {category.code}
                      </code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
