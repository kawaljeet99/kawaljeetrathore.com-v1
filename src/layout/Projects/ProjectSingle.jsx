import React from "react";
import ProjectIndex from "./ProjectIndex";
import ProjectBtn from "./ProjectBtn";
import Github from "../../assets/icons/Github.svg";
import ExtLink from "../../assets/icons/ExtLink.svg";
import CoffeeRoassters from "../../assets/icons/CoffeeRoasters.png";

const ProjectSingle = (props) => {
  return (
    <div className="bg-black-400 border border-gray-300/50 rounded-2xl relative w-10/12 mx-auto my-20 sm:my-40 xl:my-48 py-10">
      <ProjectIndex index={props.index} />

      <div className="lg:flex w-11/12 lg:w-[93%] m-auto lg:gap-5 lg:justify-between lg:items-center">
        <div className="lg:w-5/12 flex flex-col gap-10 xl:gap-14">
          <h3 className="font-inter font-semibold leading-none text-[1.75rem] sm:text-4xl md:text-[2.75rem] xl:text-[3.5rem]">
            {props.title}
          </h3>
          <p className="md:text-lg xl:text-xl text-gray-100 w-10/12 lg:w-11/12 mx-auto lg:mx-0">
            {props.desc}
          </p>

          <div className="flex items-center justify-evenly lg:justify-start gap-5 md:gap-8 lg:gap-10 mt-3 mb-10 lg:my-0 mx-auto lg:mx-0">
            <ProjectBtn icon={Github} tag="GitHub" linkTo={props.repo} />
            <ProjectBtn icon={ExtLink} tag="Live" linkTo={props.live} />
          </div>
        </div>

        <div className="lg:w-7/12 rounded-2xl overflow-hidden border border-gray-400">
          <img src={CoffeeRoassters} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;
