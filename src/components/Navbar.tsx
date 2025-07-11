import { useState, useEffect } from 'react';
import { Menu, X, Code2, TerminalSquare, Bug, GitBranch, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hero', label: 'Home', icon: <TerminalSquare className="w-5 h-5" /> },
  { id: 'about', label: 'About', icon: <Code2 className="w-5 h-5" /> },
  { id: 'skills', label: 'Skills', icon: <Cpu className="w-5 h-5" /> },
  { id: 'projects', label: 'Projects', icon: <GitBranch className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <Bug className="w-5 h-5" /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const current = navItems.find(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 80 && rect.bottom >= 80;
        }
        return false;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop overlay for mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 shadow-xl transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-black/60 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
      >
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text drop-shadow font-mono tracking-tight">
            Aninda
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative text-gray-200 hover:text-white px-2 py-1 transition duration-300 font-medium cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="opacity-80">{item.icon}</span>
                  {item.label}
                </div>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white bg-transparent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-900 via-black to-gray-900 border-l border-gray-800/50 shadow-lg z-50 flex flex-col py-20 px-6 space-y-4 md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative text-left text-gray-300 hover:text-white px-2 py-2 transition-all duration-300 font-medium tracking-wide cursor-pointer"
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                      activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
