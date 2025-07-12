
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";

import Contact from "./Sections/Contact";


export default function App() {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </div>
  );
}
