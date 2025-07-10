
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function Hero() {
  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "backOut"
      }
    })
  };

  const name = "Aninda";
  const title = "Full Stack Developer"; // Change to your actual title

  return (
    <section 
     id="Hero"
     className=" dark w-screen bg-black text-white">
      <BackgroundBeamsWithCollision className="w-screen">
        <div className="pt-20 max-w-2xl mx-auto p-4 min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={nameVariants}
            className="mb-8"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-purple-400 font-mono mb-4"
            >
              Hi, I'm
            </motion.p>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
              {name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className="inline-block hover:text-cyan-200 transition-colors duration-200"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-gray-400"
            >
              {title}
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Crafting immersive digital experiences with cutting-edge technology.
              {/* Change to your description */}
            </p>
            
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
              >
                View Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-gray-900/50 hover:text-white transition-all"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.5 }}
            className="mt-16 text-gray-500 text-sm"
          >
            <p>Scroll to explore ↓</p>
          </motion.div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
}