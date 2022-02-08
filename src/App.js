import React from "react";
import Nav from "./layout/Header/Nav";
import Hero from "./layout/Hero/Hero";
import About from "./layout/About/About";
import Projects from "./layout/Projects/Projects";
import Contact from "./layout/Contact/Contact";

function App() {
  return (
    <div className="text-center lg:text-left">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <>Copyright text will come here</>
    </div>
  );
}

export default App;
