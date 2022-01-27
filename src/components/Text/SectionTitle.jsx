import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <h1 className="section_title font-bold text-5xl sm:text-7xl lg:text-[5rem] xl:text-8xl w-max m-auto text-cyan-200">
        {props.title}
      </h1>
    </div>
  );
};

export default SectionTitle;
