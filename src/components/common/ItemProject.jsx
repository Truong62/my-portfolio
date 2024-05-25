import React from "react";
import { Link } from "react-router-dom";

const ItemProject = ({
  children,
  imgProject,
  title,
  description,
  language,
  linkto,
}) => {
  return (
    <div className="h-[550px] sm:h-[600px]">
      <Link
        to={linkto}
        className="border-2 sm:w-[380px] border-black w-[400px] h-full rounded-xl flex flex-col items-start justify-between flex-1 overflow-hidden"
      >
        <div className="px-3 pt-3">
          <div className="w-full border border-black rounded-xl overflow-hidden">
            <img
              className="z-0  object-cover rounded-xl duration-700  h-[250px] hover:scale-105"
              src={imgProject}
              alt={title}
            />
          </div>
          <div className="text-center ">
            <p className="relative inline-block mt-2 text-2xl font-bold duration-500 hover:scale-105 ">
              {title}
            </p>
            <p className="mt-2 text-justify text-gray-700">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap m-1">
          {language.map((language, index) => (
            <div
              key={index}
              className="flex items-center  text-violet-900 p-1 mt-2 mb-2 ml-1 mr-3 duration-700 border-2 rounded-md hover:scale-105 hover:-rotate-2 border-violet-900"
            >
              <img
                className="text-3xl  h-7 w-7"
                src={language.icon}
                alt={language.name}
              />
              <p className="ml-2 font-black text-violet-900">{language.name}</p>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default ItemProject;
