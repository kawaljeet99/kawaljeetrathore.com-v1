import React from "react";
import DefBtn from "../../components/Button/DefBtn";
import NavLink from "./NavLink";
import { v4 as uuidv4 } from "uuid";

const Nav = () => {
  const navbar = [
    { tag: "Home", href: "#home" },
    { tag: "About", href: "#about" },
    { tag: "Projects", href: "#projects" },
    { tag: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-black-100 w-screen flex items-center justify-between gap-20 px-8 lg:pr-12 py-3 md:py-4 lg:py-5">
      <div className="font-bold text-2xl lg:text-3xl text-white">kj</div>

      <div className="flex justify-between items-center gap-20">
        <div className="hidden md:flex md:gap-12 xl:gap-16">
          {navbar.map((item) => {
            return <NavLink key={uuidv4()} href={item.href} tag={item.tag} />;
          })}
        </div>
        <DefBtn isHeader />
      </div>
    </div>
  );
};

export default Nav;
