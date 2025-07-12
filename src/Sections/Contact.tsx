"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus("");

    // Construct the mailto link with form data
    const subject = `Message from ${formData.name}`;
    const body = `${formData.message}\n\nFrom: ${formData.email}`;
    const mailtoLink = `mailto:anindadebta8680@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Simulate sending (in reality this will open user's email client)
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSending(false);
      setSendStatus("Redirecting to email...");
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSendStatus("Message sent successfully!");
      }, 2000);
    }, 1000);
  };

  return (
    <footer id="contact" className="w-full bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Contact form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 p-6 rounded-lg border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono">
              $ send_message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-1">
                  // your_name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-1">
                  // your_email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-1">
                  // your_message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSending}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md font-mono hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  {isSending ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {sendStatus && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-xs font-mono ${
                      sendStatus.includes("successfully") ? "text-green-400" : "text-cyan-400"
                    }`}
                  >
                    {sendStatus}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right side - Contact info */}
          <div className="flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 font-mono">
                $ contact_info
              </h2>
              
              <div className="space-y-4">
                <a
                  href="mailto:anindadebta8680@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-gray-700 border border-cyan-400/20 group-hover:bg-cyan-400/10 transition-colors">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-gray-300 font-mono group-hover:text-cyan-400 transition-colors">
                    anindadebta8680@gmail.com
                  </span>
                </a>
                
                <a
                  href="https://github.com/aninda8680"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-gray-700 border border-purple-400/20 group-hover:bg-purple-400/10 transition-colors">
                    <Github className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300 font-mono group-hover:text-purple-400 transition-colors">
                    github.com/aninda8680
                  </span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/aninda01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-gray-700 border border-blue-400/20 group-hover:bg-blue-400/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300 font-mono group-hover:text-blue-400 transition-colors">
                    linkedin.com/in/aninda01
                  </span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center md:text-left"
            >
              <p className="text-gray-500 text-sm font-mono">
                © {new Date().getFullYear()} Built with Next.js & Tailwind CSS
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}