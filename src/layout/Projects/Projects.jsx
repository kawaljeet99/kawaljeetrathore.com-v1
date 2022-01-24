import React from "react";
import SectionTitle from "../../components/Text/SectionTitle";
import ProjectBtn from "./ProjectBtn";
import ProjectSingle from "./ProjectSingle";
import Github from "../../assets/icons/Github.svg";

const Projects = (props) => {
  return (
    <div>
      <SectionTitle title="Projects" />
      <ProjectBtn icon={Github} tag="GitHub" />
      <ProjectSingle />
    </div>
  );
};

export default Projects;
