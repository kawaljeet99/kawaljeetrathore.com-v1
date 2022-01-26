import React from "react";

// Not to be used as a component.
// Delete once the project completes
const HireBtn = (props) => {
  return (
    <div
      className={`${
        props.isHeader ? "h-10" : "h-[4.5rem]"
      } border border-white/10 rounded-md h-10 min-w-max max-w-[17.75rem] bg-cyan-300/30 text-center flex items-center`}
    >
      <a
        className={`${
          props.isHeader ? "text-lg px-7 py-[0.4rem]" : "text-2xl px-20 py-5"
        }  no-underline text-cyan-100 m-auto drop-shadow-[0_4px_25px_rgba(0,163,255,0.7)]`}
        href="mailto:contact@kawaljeetrathore.com"
      >
        Hire Me ✍
      </a>
    </div>
  );
};

export default HireBtn;
