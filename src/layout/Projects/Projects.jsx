import React from "react";
import SectionTitle from "../../components/Text/SectionTitle";
import ProjectSingle from "./ProjectSingle";

const Projects = (props) => {
  return (
    <div>
      <SectionTitle title="Projects" />
      <ProjectSingle
        index="1"
        title="CoffeeRoaster"
        desc="A nice website for coffee lovers ment so it can help other people of the Dev Community Feel free to Connect or Follow me on my Linkedin"
        repo=""
        live="https://coffeeroasters.kawaljeetrathore.com/"
      />
      <ProjectSingle
        index="2"
        title="Space Travel"
        desc="A nice website for coffee lovers ment so it can help other people of the Dev Community Feel free to Connect or Follow me on my Linkedin"
        repo=""
        live="https://spacetravel.kawaljeetrathore.com/"
      />
      <ProjectSingle
        index="3"
        title="Audiophile"
        desc="A nice website for coffee lovers ment so it can help other people of the Dev Community Feel free to Connect or Follow me on my Linkedin"
        repo=""
        live=""
      />
    </div>
  );
};

export default Projects;
