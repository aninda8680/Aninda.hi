import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";

import Contact from "./Sections/Contact";

export default function App() {
  return (
    <div className="w-screen max-h-screen">
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
