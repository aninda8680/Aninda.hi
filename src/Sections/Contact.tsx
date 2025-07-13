"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactFooter() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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

    emailjs
      .sendForm(
        "ad8680",     // e.g., "gmail_service"
        "template_gzk1r2l",    // e.g., "template_xyz"
        e.currentTarget,
        "CCw9tJ8un0WEPdImV"      // e.g., "AbCdEfG123456"
      )
      .then(() => {
        setIsSending(false);
        setSendStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSending(false);
        setSendStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-gray-950 to-gray-900 border-t border-gray-800 px-4 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full"
        >
          <h2 className="text-xl font-bold mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text font-mono">
            $ send_message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-mono placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-mono placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 font-mono placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <div className="flex justify-between items-center mt-2">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
                className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-md font-mono hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
              >
                {isSending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send
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

        {/* Contact Info */}
        <div className="flex flex-col justify-between w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-mono">
              $ contact_info
            </h2>

            <a href="mailto:anindadebta8680@gmail.com" className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 font-mono group-hover:text-cyan-400 transition-colors">
                anindadebta8680@gmail.com
              </span>
            </a>

            <a href="https://github.com/aninda8680" target="_blank" className="flex items-center gap-3 group">
              <Github className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 font-mono group-hover:text-purple-400 transition-colors">
                github.com/aninda8680
              </span>
            </a>

            <a href="https://linkedin.com/in/aninda01" target="_blank" className="flex items-center gap-3 group">
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-300 font-mono group-hover:text-blue-400 transition-colors">
                linkedin.com/in/aninda01
              </span>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs text-gray-500 font-mono mt-8 text-center md:text-left"
          >
            © {new Date().getFullYear()} Aninda Debta • Built with Next.js + Tailwind CSS
          </motion.p>
        </div>
      </div>
    </section>
  );
}
