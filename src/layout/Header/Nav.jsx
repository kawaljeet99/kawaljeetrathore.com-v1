import React from "react";
import HireBtn from "../../components/Button/HireBtn";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className="bg-black-100 w-screen flex items-center justify-between px-6 py-5">
      <div className="font-bold text-3xl text-white flex-1">kj</div>

      <div className="flex justify-between items-center flex-1">
        <div className="flex gap-12">
          <NavLink href="/" section="Home" isActive />
          <NavLink href="#about" section="About" />
          <NavLink href="#projects" section="Projects" />
          <NavLink href="#contact" section="Contact" />
        </div>
        <HireBtn isHeader />
      </div>
    </div>
  );
};

export default Nav;
