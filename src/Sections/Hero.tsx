import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {  useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("dream_compiler.py");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);

  const executeCode = () => {
    if (isExecuting) return;
    
    setIsExecuting(true);
    setTerminalOutput([]);
    
    const outputs = [
      "💡 Compiling big dreams...",
      "🔍 Analyzing potential...",
      "⚙️  Optimizing algorithms...",
      "🔧 No errors found. Confidence ✅",
      "✨ Dreams manifested successfully!",
      "🚀 Deployment complete!"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < outputs.length) {
        setTerminalOutput(prev => [...prev, outputs[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsExecuting(false);
      }
    }, 800);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const codeBlockVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const terminalHeaderVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5,
      },
    },
  };

  const codeLineVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2 + i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const codeLines = [
    "class DreamCompiler:",
    "    def __init__(self):",
    "        self.status = \"in progress\"",
    "        self.skills = [\"Python\", \"React\", \"TypeScript\"]",
    "",
    "    def build(self):",
    "        print(\"💡 Compiling big dreams...\")",
    "        print(\"🔧 No errors found. Confidence ✅\")",
    "        self.status = \"manifested ✨\"",
    "",
    "    def deploy(self):",
    "        self.build()",
    "        return f\"Status: {self.status}\"",
    "",
    "dev = DreamCompiler()",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen w-screen overflow-x-hidden flex items-center justify-center px-6 py-4 bg-[#011627] overflow-hidden border-b border-[#1E2D3D]"
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        {/* Left Column - Text Content */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-[#82AAFF] text-lg mb-2 font-mono">
              <span className="text-[#7FDBCA]">//</span> Hey there, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-[#7FDBCA] mb-4 font-mono">
              Aninda Debta
            </h1>
            <h2 className="text-xl md:text-2xl text-[#D6DEEB] font-mono">
              <span className="text-[#7FDBCA]"> </span>
              <TypeAnimation
                sequence={[
                  'Android Developer',
                  1500,
                  'Python Enthusiast',
                  1500,
                  'Open Source Contributor',
                  1500
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-[#011221] p-4 rounded-lg border border-[#1E2D3D]">
              <p className="text-[#D6DEEB] text-base leading-relaxed font-mono">
                <span className="text-[#7FDBCA]">/* </span>
                Professional debugger. Sometimes I write code; other times, the code writes me.
                 | Full-stack chaos Students | 
                <span className="text-[#7FDBCA]"> */</span>
              </p>
              <p className="text-[#4e92ff] text-base leading-relaxed font-mono">
              "Why is this working?" specialist.
              </p>
              <p className="text-[#4e92ff] text-base leading-relaxed font-mono">
              "It worked in my head" club president.
              </p>
              <p className="text-[#4e92ff] text-base leading-relaxed font-mono">
              "Wait, that fixed it?" moments daily.
              </p>
              <p className="text-[#4e92ff] text-base leading-relaxed font-mono">
              "I’ll just console.log() my way out of this."
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
  {/* View Projects Button */}
  <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 10px rgba(130, 170, 255, 0.5)",
      backgroundColor: "#1E3A8A"
    }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="px-6 py-3 rounded bg-[#1E3A8A] text-[#82AAFF] border border-[#1E3A8A] transition-all font-mono flex items-center group"
  >
    <span className="text-[#7FDBCA] mr-2">~$</span>
    <span>view_projects()</span>
    <motion.span
      animate={{ x: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="ml-2 opacity-0 group-hover:opacity-100"
    >
      ▸
    </motion.span>
  </motion.button>

  {/* Contact Button */}
  <motion.button
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 10px rgba(127, 219, 202, 0.3)",
      backgroundColor: "#065F46"
    }}
    whileTap={{ scale: 0.95 }}
    onClick={() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }}
    className="px-6 py-3 rounded bg-[#065F46] text-[#7FDBCA] border border-[#065F46] transition-all font-mono group"
  >
    <span className="text-[#82AAFF]">npm</span> run contact
    <motion.span
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="ml-2 opacity-0 group-hover:opacity-100 inline-block"
    >
      →
    </motion.span>
  </motion.button>


            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 10px rgba(239, 68, 68, 0.3)",
                backgroundColor: "#7F1D1D"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={executeCode}
              disabled={isExecuting}
              className={`px-6 py-3 rounded ${isExecuting ? 'bg-[#444]' : 'bg-[#7F1D1D]'} text-[#F87171] border ${isExecuting ? 'border-[#444]' : 'border-[#7F1D1D]'} transition-all font-mono`}
            >
              {isExecuting ? 'Executing...' : 'Run Code'}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Interactive Code Editor */}
        <motion.div
          className="w-full md:w-1/2 h-[32rem] bg-[#011627] rounded-lg border border-[#1E2D3D] overflow-hidden flex flex-col shadow-2xl shadow-[#82AAFF]/10"
          initial="hidden"
          animate="visible"
          variants={codeBlockVariants}
        >
          <motion.div 
            className="bg-[#0C2136] px-4 py-3 flex items-center border-b border-[#1E2D3D]"
            variants={terminalHeaderVariants}
          >
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] cursor-pointer hover:bg-[#FF3B30]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] cursor-pointer hover:bg-[#FFA700]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27C93F] cursor-pointer hover:bg-[#00C300]"></div>
            </div>
            
            <div className="flex ml-6">
              {['dream_compiler.py', 'terminal'].map((tab) => (
                <div
                  key={tab}
                  className={`px-4 py-1 text-xs font-mono cursor-pointer rounded-t-md ${activeTab === tab ? 'bg-[#011627] text-[#82AAFF] border-t border-l border-r border-[#1E2D3D]' : 'text-[#607B96] hover:text-[#82AAFF]'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            
            <div className="ml-auto flex gap-2">
              <div className="w-3 h-3 rounded bg-[#1E2D3D] hover:bg-[#82AAFF] cursor-pointer"></div>
              <div className="w-3 h-3 rounded bg-[#1E2D3D] hover:bg-[#7FDBCA] cursor-pointer"></div>
              <div className="w-3 h-3 rounded bg-[#1E2D3D] hover:bg-[#FF5F56] cursor-pointer"></div>
            </div>
          </motion.div>
          
          {activeTab === 'dream_compiler.py' ? (
            <div className="flex-1 p-4 text-sm overflow-x-auto whitespace-pre font-mono text-[#D6DEEB] relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#011627] opacity-20 pointer-events-none"></div>
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={codeLineVariants}
                  className="flex hover:bg-[#1E2D3D] rounded px-1"
                >
                  {line === "" ? (
                    <br />
                  ) : (
                    <>
                      <span className="text-[#607B96] mr-4 select-none w-6 text-right">{i + 1}</span>
                      <span
                        className={
                          line.includes("class") ? "text-[#FF5370]" :
                          line.includes("def") ? "text-[#C792EA]" :
                          line.includes("print") ? "text-[#82AAFF]" :
                          line.includes("self") ? "text-[#89DDFF]" :
                          line.includes("=") ? "text-[#D6DEEB]" :
                          line.includes("dev") ? "text-[#7FDBCA]" :
                          line.includes("return") ? "text-[#FFCB6B]" : 
                          line.includes("skills") ? "text-[#F78C6C]" : "text-[#D6DEEB]"
                        }
                      >
                        {line}
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="mt-4 flex items-center"
              >
                <span className="text-[#7FDBCA] mr-2">$</span>
                <span className="text-[#82AAFF]">python3 dream_compiler.py</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className="ml-1"
                >
                  █
                </motion.span>
              </motion.div>
            </div>
          ) : (
            <div className="flex-1 p-4 text-sm overflow-y-auto font-mono text-[#D6DEEB] bg-[#011221]">
              <div className="mb-2 flex items-center">
                <span className="text-[#7FDBCA] mr-2">$</span>
                <span className="text-[#82AAFF]">python3 dream_compiler.py</span>
              </div>
              {terminalOutput.length > 0 ? (
                <div className="space-y-2">
                  {terminalOutput.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`flex items-start ${
                        line.includes("💡") ? "text-[#82AAFF]" :
                        line.includes("🔍") ? "text-[#89DDFF]" :
                        line.includes("⚙️") ? "text-[#FFCB6B]" :
                        line.includes("🔧") ? "text-[#7FDBCA]" :
                        line.includes("✨") ? "text-[#C792EA]" :
                        line.includes("🚀") ? "text-[#FF5370]" : "text-[#D6DEEB]"
                      }`}
                    >
                      <span className="mr-2">{line.includes("💡") ? "💡" : 
                                           line.includes("🔍") ? "🔍" : 
                                           line.includes("⚙️") ? "⚙️" : 
                                           line.includes("🔧") ? "🔧" : 
                                           line.includes("✨") ? "✨" : 
                                           line.includes("🚀") ? "🚀" : ">"}</span>
                      {line.replace(/[💡🔍⚙️🔧✨🚀]/g, '')}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-[#607B96] italic">
                  // Click "Run Code" to see the output...
                </div>
              )}
              {terminalOutput.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: terminalOutput.length * 0.1 + 0.5 }}
                  className="mt-4 flex items-center"
                >
                  <span className="text-[#7FDBCA] mr-2">$</span>
                  <span className="text-[#607B96]">_</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="ml-1"
                  >
                    █
                  </motion.span>
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}