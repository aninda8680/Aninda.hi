"use client";
import { motion } from "framer-motion";
import { CodeBracketIcon, TerminalIcon, DatabaseIcon, CpuChipIcon, PaintBrushIcon } from "../Sections/icons";
import { SnakeGame } from "./SnakeGame"; // Adjust path as needed

const categories = [
  {
    title: "Languages",
    skills: ["Python", "Java"],
    icon: <TerminalIcon className="w-5 h-5 text-green-400" />,
    color: "from-green-500 to-emerald-600",
    code: `# Python enthusiast\nprint("Hello World!")\n\n# Java basics\nSystem.out.println("Hi");`
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "shadcn/ui"],
    icon: <CodeBracketIcon className="w-5 h-5 text-blue-400" />,
    color: "from-blue-500 to-cyan-600",
    code: `// React component\nfunction App() {\n  return <h1>Hello</h1>;\n}\n\n// Tailwind\n<div className="bg-blue-500">`
  },
  {
    title: "Backend & DB",
    skills: ["Firebase"],
    icon: <DatabaseIcon className="w-5 h-5 text-purple-400" />,
    color: "from-purple-500 to-fuchsia-600",
    code: `// Firebase setup\nimport { initializeApp } from "firebase/app";\n\nconst firebaseConfig = {\n  // config\n};`
  },
  {
    title: "Dev Tools",
    skills: ["GitHub", "VS Code", "Vercel"],
    icon: <CpuChipIcon className="w-5 h-5 text-yellow-400" />,
    color: "from-yellow-500 to-amber-600",
    code: `# Git commands\ngit add .\ngit commit -m "update"\ngit push\n\n# Vercel CLI\nvercel deploy`
  },
  {
    title: "Extras",
    skills: ["Canva", "AI Tools", "Teamwork"],
    icon: <PaintBrushIcon className="w-5 h-5 text-pink-400" />,
    color: "from-pink-500 to-rose-600",
    code: `# AI Prompt Example\nprompt = "Generate python code for"\n          "a neural network classifier"\n\n# Team collaboration\nprint("Pair programming rocks!")`
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen w-full overflow-x-hidden overflow-x-hidden flex items-center bg-gray-950 overflow-hidden px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column - Text Content */}
<motion.div 
  className="w-full lg:w-1/2"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="text-left mb-12">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "backOut" }}
      className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
    >
      <span className="text-gray-400">&lt;</span>my_skills<span className="text-gray-400"> /&gt;</span>
    </motion.h1>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-gray-400 text-lg mb-8 font-mono"
    >
      <div className="flex items-center mb-2">
        <span className="text-green-400 mr-2">$</span>
        <span>python --version</span>
      </div>
      <div className="text-cyan-300 ml-4">Python 3.11.4</div>
      
      <div className="flex items-center mt-4 mb-2">
        <span className="text-green-400 mr-2">$</span>
        <span>cat skills.txt | grep -E "python|react|firebase"</span>
        <span className="ml-2 w-2 h-5 bg-green-400 animate-pulse"></span>
      </div>
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="text-gray-300 text-lg leading-relaxed"
    >
      I specialize in building full-stack applications with Python and modern web technologies. 
      My toolkit includes everything from backend APIs to beautiful UIs.
    </motion.p>
  </div>

  {/* Python Snake Animation */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 1 }}
    className="mt-8"
  >
    <SnakeGame />
  </motion.div>
</motion.div>

        {/* Right Column - Skills Cards */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ 
                  delay: idx * 0.15,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`bg-gradient-to-br ${category.color} rounded-xl shadow-lg overflow-hidden border border-gray-800/50 h-full`}
              >
                <div className="p-6 backdrop-blur-sm bg-black/30 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-mono font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-2.5 mb-4">
                    {category.skills.map((skill) => (
                      <motion.li 
                        key={skill}
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center text-gray-200 group"
                      >
                        <span className="mr-2 text-xs text-cyan-300">▹</span>
                        <span className="group-hover:text-white transition-colors font-mono">
                          {skill}
                        </span>
                        <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 text-cyan-300 transition-opacity">
                          {Math.floor(Math.random() * 90) + 10}%
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-auto bg-black/50 rounded-md p-3 font-mono text-xs overflow-hidden">
                    <motion.code
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-gray-300 block"
                    >
                      {category.code}
                    </motion.code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        className="absolute left-0 top-1/3 -z-10"
      >
        <div className="text-[8rem] font-bold opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-300">
          {"</>"}
        </div>
      </motion.div>
    </section>
  );
}