import React from "react";
import Nav from "./layout/Header/Nav";
import Hero from "./layout/Hero/Hero";
import Projects from "./layout/Projects/Projects";

function App() {
  return (
    <div className="text-center md:text-left">
      <Nav />
      <Hero />
      {/* <Projects /> */}
    </div>
  );
}

export default App;
