import React from "react";

const ProjectIndex = (props) => {
  return (
    <div className="project_index font-arimo font-bold italic leading-none hidden sm:inline text-[11rem] md:text-[12.5rem] lg:text-[15.625rem] xl:text-[18.75rem] text-gray-500 -z-[1] absolute -top-28 -left-9 md:-top-32 md:-left-11 lg:-top-36 lg:-left-14 xl:-top-48 xl:-left-14">
      {props.index}
    </div>
  );
};

export default ProjectIndex;
