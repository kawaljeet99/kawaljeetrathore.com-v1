import React from "react";

const ProjectBtn = (props) => {
  return (
    <div className="min-w-fit">
      <a
        href={props.linkTo}
        target="_blank"
        rel="noreferrer"
        className="bg-cyan-300/30 px-5 py-2 max-w-fit align-middle rounded-md border border-white/10 text-base sm:text-lg lg:text-xl xl:text-2xl text-cyan-100"
      >
        <img
          src={props.icon}
          className="inline-block h-6 sm:h-7 lg:h-8 mr-3 "
          alt=""
        />
        <span className="drop-shadow-[0_4px_25px_rgba(0,163,255,0.7)] align-middle">
          {props.tag}
        </span>
      </a>
    </div>
  );
};

export default ProjectBtn;
