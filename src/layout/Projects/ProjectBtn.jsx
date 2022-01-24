import React from "react";

const ProjectBtn = (props) => {
  return (
    <div className="flex-auto">
      <a
        href={props.linkTo}
        className="bg-cyan-300/30 px-5 py-2 flex max-w-fit gap-4 items-center rounded-md border border-white/10 text-2xl text-cyan-100 "
      >
        <img src={props.icon} className="inline-block" />
        <span className="drop-shadow-[0_4px_25px_rgba(0,163,255,0.7)]">
          {props.tag}
        </span>
      </a>
    </div>
  );
};

export default ProjectBtn;
