import React from "react";

const NavLink = (props) => {
  return (
    <a className={"text-lg hover:text-white text-white/70"} href={props.href}>
      {props.tag}
    </a>
  );
};

export default NavLink;
