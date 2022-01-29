import React from "react";
import { v4 as uuidv4 } from "uuid";
import SectionTitle from "../../components/Text/SectionTitle";
import At from "../../assets/icons/At.svg";
import Github from "../../assets/icons/Github.svg";
import LinkedIn from "../../assets/icons/LinkedIn.svg";
import CodePen from "../../assets/icons/CodePen.svg";

const Contact = () => {
  return (
    <div>
      <SectionTitle title="Contact me" />

      <div className="w-10/12 min-w-[320px] m-auto my-10 md:my-14 xl:my-20 sm:px-6 lg:px-8 py-10 border border-white/10 rounded-md bg-black-400 grid grid-cols-2 auto-rows-auto lg:grid-rows-2 gap-y-8 items-center">
        <p className="text-lg md:text-xl lg:text-[1.375rem] sm:text-left col-span-full lg:row-start-1 lg:col-span-1">
          Let's get in touch!
        </p>

        <div className="sm:flex items-center col-span-full lg:m-auto">
          <p className="text-lg md:text-xl lg:text-[1.375rem] mb-2 sm:mb-0">
            Email me at
          </p>
          <span className="hidden sm:inline-block w-10 h-px bg-white/30 mx-4 md:mx-10"></span>
          <a
            href="mailto:contact@kawaljeetrathore.com"
            className="font-bold inline-block md:text-lg lg:text-2xl border border-gray-300 rounded-md px-4 md:px-6 xl:px-10 py-2 md:py-3 xl:py-5 bg-black-900"
          >
            <img
              src={At}
              alt=""
              className="hidden lg:inline-block h-[1.875rem]"
            />
            <span className="hidden lg:inline-block w-px h-10 bg-gray-300 mx-5 xl:mx-10 align-middle"></span>
            contact@kawaljeetrathore.com
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-x-14 md:gap-x-28 lg:gap-x-10 col-span-full lg:row-start-1 lg:col-start-2 lg:ml-auto">
          <p className="text-lg md:text-xl lg:text-[1.375rem] mb-2 sm:mb-0">
            Follow me on:
          </p>
          <div className="flex gap-5">
            {[
              [Github, "https://github.com/kawaljeet99/"],
              [LinkedIn, "https://www.linkedin.com/in/kawaljeet-rathore/"],
              [CodePen, ""],
            ].map(([icon, link]) => {
              return (
                <a href={link} target="_blank" rel="noreferrer" key={uuidv4()}>
                  <img src={icon} alt="kj github profile" />
                </a>
              );
            })}
            {/* <a
              href="https://github.com/kawaljeet99/"
              target="_blank"
            >
              <img src={Github} alt="kj github profile" />
            </a>
            <img src={LinkedIn} alt="kj linkedIn profile" />
            <img src={CodePen} alt="kj codepen profile" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
