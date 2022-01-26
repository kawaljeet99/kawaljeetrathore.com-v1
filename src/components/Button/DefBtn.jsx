import React from "react";

const DefBtn = (props) => {
  return (
    <a
      href="mailto:contact@kawaljeetrathore.com"
      className={`${
        props.isHeader
          ? "text-base sm:text-lg xl:text-xl px-4 sm:px-6 lg:px-8 py-1"
          : "text-xl md:text-2xl px-12 xl:px-16 py-3 xl:py-4"
      } border border-white/10 rounded-md bg-cyan-300/30 text-cyan-100 `}
    >
      <span className="drop-shadow-[0_4px_25px_rgba(0,163,255,0.7)]">
        Hire me
      </span>
    </a>
  );
};

export default DefBtn;
