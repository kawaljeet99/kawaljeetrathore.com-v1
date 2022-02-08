import React from "react";
import SectionTitle from "../../components/Text/SectionTitle";
import Kawaljeet from "../../assets/images/Kawaljeet.png";
// import TestImg from "../../assets/images/TestImg.png";
import HTML5 from "../../assets/icons/HTML5.svg";
import CSS3 from "../../assets/icons/CSS3.svg";
import JS from "../../assets/icons/JS.svg";
import Sass from "../../assets/icons/Sass.svg";
import ReactIcon from "../../assets/icons/ReactIcon.svg";
import Tailwind from "../../assets/icons/Tailwind.svg";
import Git from "../../assets/icons/Git.svg";
import Github from "../../assets/icons/Github.svg";
import Figma from "../../assets/icons/Figma.svg";

const About = (props) => {
  return (
    <div
      id="about"
      className="w-10/12 min-w-[320px] m-auto my-10 md:my-14 xl:my-20"
    >
      <SectionTitle title="About me" />

      <div className="">
        <div>
          <img
            src={Kawaljeet}
            alt="Kawaljeet Rathore"
            className="border-b border-white/70 max-h-[650px]"
          />
          {/* <img
            src={TestImg}
            alt="Kawaljeet Rathore"
            className="border-b border-white/70"
          /> */}
        </div>
        <div className="md:text-lg text-gray-200">
          <p>
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section.
          </p>

          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in Web Development so it can help other people of the
            Dev Community. Feel free to Connect or Follow me on my Linkedin
            where I post useful content related to Web Development and
            Programming.
          </p>

          <p>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
      </div>

      <h3>Here are a few tools & technologies I’ve been working with:</h3>

      <div className="relative border-[0.75px] border-gray-300 rounded-md bg-black-400 grid grid-cols-3 grid-rows-3 gap-8 p-8 max-w-max mx-auto sm:grid-cols-5 sm:grid-rows-2 overflow-hidden">
        {[HTML5, CSS3, JS, Sass, ReactIcon, Tailwind, Git, Github, Figma].map(
          (icon) => {
            return <img className="h-10 w-10" src={icon} alt="" />;
          }
        )}
        <div className="blue_drop_shadow absolute left-0 top-1/2 -translate-y-1/2 h-72 w-72 bg-cyan-100/10 blur-[50px] rounded-[50%]"></div>
      </div>

      {/* Apart from this, I've also made websites using platforms like wordpress, bigcommerce, webflow */}
    </div>
  );
};

export default About;
