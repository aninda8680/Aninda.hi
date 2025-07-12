
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Hero() {
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
        ease: "easeOut",
      },
    },
  };

  const name = "Aninda";
  const title = "Full Stack Developer • Python Enthusiast • Problem Solver";

  return (
    <section
      id="hero"
      className=" min-h-screen w-screen overflow-x-hidden flex items-center justify-center px-6 py-4 bg-gray-950 overflow-hidden"
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
              <p className="text-[#569cd6] text-lg mb-2"># Hey there, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-[#4ec9b0] mb-4">
                {name.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block hover:text-[#9cdcfe] transition-colors"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
              <h2 className="text-xl md:text-2xl text-[#9cdcfe]">
                <span className="text-[#569cd6]"># </span>
                {title}
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-[#d4d4d4] text-base leading-relaxed">
                <span className="text-[#569cd6]"># </span>
                I enjoy building fun terminal applications. Here's a Python
                implementation of the classic Snake game using curses.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded bg-[#1e496c] text-[#9cdcfe] border border-[#264f78] hover:bg-[#2a5d8a] transition-all"
              >
                <span className="text-[#569cd6]">def </span>
                <span>view_projects()</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 rounded bg-[#2d2d2d] text-[#d4d4d4] border border-[#3e3e42] hover:bg-[#37373d] transition-all"
              >
                <span className="text-[#569cd6]">def </span>
                <span>contact_me()</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Snake Game Code */}
          <motion.div
            className="w-full md:w-1/2 h-[32rem] bg-[#252526] rounded-lg border border-[#3e3e42] overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-[#d4d4d4] ml-4">snake_game.py</div>
            </div>
            <div className="flex-1 p-4 text-sm overflow-x-auto whitespace-pre font-mono text-[#d4d4d4]">
              <code>
{`class DreamCompiler:
    def __init__(self):
        self.status = "in progress"

    def build(self):
        print("💡 Compiling big dreams...")
        print("🔧 No errors found. Confidence ✅")
        self.status = "manifested ✨"

dev = DreamCompiler()
dev.build()
`}
              </code>
            </div>
          </motion.div>
        </div>

    </section>
  );
}
