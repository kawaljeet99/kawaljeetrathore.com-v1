import React from "react";

const ProjectIndex = (props) => {
  return (
    <div className="project_index hidden sm:inline text-[12.5rem] lg:text-[15.625rem] xl:text-[18.75rem] text-gray-500 font-arimo ">
      {props.index}
    </div>
  );
};

export default ProjectIndex;
