import React from "react";

const HireBtn = (props) => {
  return (
    <div className="border border-white/10 rounded-md h-10 min-w-max bg-cyan-300/30 text-center flex items-center ">
      <a
        className={`${
          props.isHeader ? "text-lg" : "text-2xl"
        }  no-underline text-cyan-100 drop-shadow-[0_4px_24px_rgba(0, 203, 241, 0.7)] px-7 py-2`}
        href="mailto:contact@kawaljeetrathore.com"
      >
        Hire Me ✍
      </a>
    </div>
  );
};

export default HireBtn;
