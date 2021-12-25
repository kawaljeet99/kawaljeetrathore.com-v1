import React from "react";

const NavLink = (props) => {
  return (
    <a
      className={`text-lg ${props.isActive ? "text-white" : "text-white/70"}`}
      href={props.href}
    >
      {props.section}
    </a>
  );
};

export default NavLink;
