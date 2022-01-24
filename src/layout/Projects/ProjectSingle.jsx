import React from "react";
import ProjectIndex from "./ProjectIndex";
import ProjectBtn from "./ProjectBtn";
import Github from "../../assets/icons/Github.svg";

const ProjectSingle = (props) => {
  return (
    <div className="bg-black-400 border border-gray-300/50 rounded-md">
      <ProjectIndex />
      <div className="lg:flex w-11/12 m-auto lg:gap-5 lg:justify-between lg:items-center ">
        <div className="lg:w-5/12">
          <h3 className="font-inter font-semibold text-[1.75rem] md:text-[3.25rem] xl:text-[4rem]">
            {props.title}
          </h3>
          <p className="md:text-lg lg:text-xl text-gray-100">{props.desc}</p>

          <div className="flex items-center justify-between">
            <ProjectBtn icon={Github} tag="GitHub" />
            <ProjectBtn icon={Github} tag="Live" />
          </div>
        </div>
        <div className="lg:w-7/12">image</div>
      </div>
    </div>
  );
};

export default ProjectSingle;
