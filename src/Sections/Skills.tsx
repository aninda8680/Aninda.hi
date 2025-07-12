"use client";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBracketIcon, TerminalIcon, DatabaseIcon, CpuChipIcon, PaintBrushIcon } from "../Sections/icons";
import { SnakeGame } from "./SnakeGame";

const categories = [
  {
    title: "Languages",
    skills: ["Python", "Java"],
    icon: <TerminalIcon className="w-4 h-4 text-green-500" />,
    color: "border-green-500/30 hover:shadow-green-500/20",
    code: `print("Hello World!")`
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind", "shadcn/ui"],
    icon: <CodeBracketIcon className="w-4 h-4 text-blue-500" />,
    color: "border-blue-500/30 hover:shadow-blue-500/20",
    code: `function App() {\n  return <h1>Hello</h1>;\n}`
  },
  {
    title: "Backend",
    skills: ["Firebase"],
    icon: <DatabaseIcon className="w-4 h-4 text-purple-500" />,
    color: "border-purple-500/30 hover:shadow-purple-500/20",
    code: `const firebaseConfig = {\n  // config\n};`
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Vercel"],
    icon: <CpuChipIcon className="w-4 h-4 text-yellow-500" />,
    color: "border-yellow-500/30 hover:shadow-yellow-500/20",
    code: `git commit -m "update"`
  },
  {
    title: "Extras",
    skills: ["AI Tools", "Teamwork"],
    icon: <PaintBrushIcon className="w-4 h-4 text-pink-500" />,
    color: "border-pink-500/30 hover:shadow-pink-500/20",
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
      className=" min-h-screen w-full overflow-x-hidden bg-black px-4 py-16 border-t border-gray-800/50 "
    >
      <div className="max-w-6xl mx-auto">
        {/* Terminal Header */}
        <motion.div 
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex gap-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ 
              staggerChildren: 0.1,
              delayChildren: 0.2
            }}
          >
            {["red", "yellow", "green"].map((color) => (
              <motion.div
                key={color}
                className={`w-3 h-3 rounded-full bg-${color}-500`}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
            ))}
          </motion.div>
          <motion.span 
            className="text-gray-400 font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            skills_terminal
          </motion.span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Panel - Bio */}
          <motion.div 
            className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 font-mono relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated cursor */}
            <motion.div
              className="absolute top-6 left-6 w-2 h-5 bg-green-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="text-green-400 mb-4"
              variants={typingVariants}
              initial="hidden"
              whileInView="visible"
            >
              <span className="text-gray-500">$</span> cat about_me.txt
            </motion.div>
            
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold text-white mb-4 flex flex-wrap"
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

            <motion.div 
              className="text-gray-300 space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p>
                <span className="text-blue-400">//</span> Full-stack developer specializing in:
              </p>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  delay: 1,
                  staggerChildren: 0.1,
                }}
              >
                {categories.flatMap(c => c.skills).map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.2)",
                      borderColor: "#3b82f6"
                    }}
                    transition={{ 
                      delay: 1 + i * 0.05,
                      type: "spring",
                      stiffness: 500
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>

              <p className="pt-4 border-t border-gray-800">
                <span className="text-blue-400">//</span> Currently working with:
                <motion.span 
                  className="block text-green-400 mt-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  Python • React • Firebase
                </motion.span>
              </p>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <SnakeGame />
            </motion.div>
          </motion.div>

          {/* Right Panel - Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence>
              {categories.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      delay: idx * 0.15,
                      type: "spring",
                      stiffness: 300
                    }
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 25px -5px var(--tw-shadow-color)`,
                  }}
                  className={`bg-gray-900/50 border ${category.color} rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="p-4 h-full flex flex-col">
                    <motion.div 
                      className="flex items-center gap-2 mb-3"
                      whileHover={{ x: 5 }}
                    >
                      {category.icon}
                      <h3 className="font-mono font-medium text-white">
                        {category.title}
                      </h3>
                    </motion.div>
                    
                    <ul className="space-y-2 mb-3">
                      {category.skills.map((skill) => (
                        <motion.li 
                          key={skill}
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          whileHover={{ 
                            x: 5,
                            color: "#ffffff"
                          }}
                          transition={{ 
                            type: "spring",
                            stiffness: 300
                          }}
                          className="flex items-center text-gray-300 text-sm"
                        >
                          <motion.span 
                            className="text-green-500 mr-2"
                            animate={{ rotate: [0, 10, 0] }}
                            transition={{ 
                              repeat: Infinity,
                              repeatType: "mirror",
                              duration: 2
                            }}
                          >
                            ▹
                          </motion.span>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div 
                      className="mt-auto bg-black/50 rounded p-2 overflow-x-auto"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.code
                        className="text-gray-400 text-xs font-mono block"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {category.code}
                      </motion.code>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Status Bar */}
        <motion.div 
          className="mt-8 flex items-center justify-between text-xs text-gray-500 font-mono border-t border-gray-800 pt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            -- INSERT --
          </motion.div>
          <div>UTF-8</div>
          <div>100%</div>
        </motion.div>
      </div>
    </section>
  );
}