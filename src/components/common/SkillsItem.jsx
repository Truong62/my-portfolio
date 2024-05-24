import React from "react";

const skills = [
  { name: "HTML", img: "/Img/skills/html.png", className: "object-cover" },
  { name: "CSS", img: "/Img/skills/css.png", className: "object-cover" },
  {
    name: "Javascript",
    img: "/Img/skills/js.png",
    className: "object-cover",
  },
  { name: "GitHub", img: "/Img/skills/github.png", className: "object-cover" },
  {
    name: "Bootstrap",
    img: "/Img/skills/Bootstrap.png",
    className: "object-contain",
  },
  {
    name: "Tailwind",
    img: "/Img/skills/tailwind.png",
    className: "object-cover",
  },
  {
    name: "MySQL",
    img: "/Img/skills/Mysql_logo.png",
    className: "object-contain",
  },
  {
    name: "ReactJs",
    img: "/Img/skills/reactjs.png",
    className: "object-contain",
  },
  { name: "Scss", img: "/Img/skills/scss.png", className: "object-cover" },
  {
    name: "Express",
    img: "/Img/skills/node_express.jpg",
    className: "object-contain",
  },
  {
    name: "MongoDB",
    img: "/Img/skills/MongoDB.jpg",
    className: "object-cover",
  },
  {
    name: "Laravel",
    img: "/Img/skills/laravel.png",
    className: "object-cover",
  },
  {
    name: "Photoshop",
    img: "/Img/skills/Photoshop.png",
    className: "object-cover",
  },
  {
    name: "Premiere",
    img: "/Img/skills/Premiere.png",
    className: "object-cover",
  },
];

const SkillsItem = () => {
  return (
    <div className="grid grid-cols-6 mt-20 sm:mt-10 sm:grid-cols-3 gap-x-10 gap-y-9">
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center duration-300 rounded-full hover:scale-110 ${skill.className}`}
        >
          <img
            className="w-16 h-16 mt-3 sm:h-10 sm:w-10"
            src={skill.img}
            alt={skill.name}
          />
          <p className="mt-1 text-xl font-bold sm:text-base">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsItem;
