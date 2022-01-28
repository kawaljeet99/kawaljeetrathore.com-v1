import React from "react";
import Nav from "./layout/Header/Nav";
import Hero from "./layout/Hero/Hero";
import Projects from "./layout/Projects/Projects";
import Contact from "./layout/Contact/Contact";

function App() {
  return (
    <div className="text-center lg:text-left">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
