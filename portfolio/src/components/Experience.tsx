import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react";

interface Experience_Type {
  logo: string;
  designation: string;
  company: string;
  location: string;
  duration: string;
  company_description: string;
  workStack: string[];
}

const Experience: React.FC<Experience_Type> = (props: Experience_Type) => {
  return (
    <div className="rounded-3xl bg-indigo-600 text-white border-2 md:w-[85vw] w-[90vw] flex flex-col p-5 gap-2">
      <div className="flex flex-row gap-3 items-center">
        <div className="flex justify-center items-center h-max w-max">
          <motion.img
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              behaviour: "smooth",
            }}
            className="border-2 rounded border-white shadow-xl"
            src={props.logo}
            width="120px"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="header_list text-xl">{props.designation}</p>
          <p className="header_list text-lg">{props.company}</p>
          <p className="para_list">{props.location}</p>
          <p className="para_list">{props.duration}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 p-3">
        <p className="w-[100%] text-base para_list">
          {props.company_description}
        </p>
        <div className="flex flex-col gap-2 w-[100%]">
          <p className="logo text-xl w-max text-yellow-200">Work Experience</p>
          {props.workStack?.map((data: string) => (
            <span className="flex items-start gap-2 md:p-1 p-0.5">
              <Icon icon="meteocons:star-fill" height="1.5rem" />
              <p className="para_list">{data}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
