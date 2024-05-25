import React from "react";

const skills = [
  { name: "HTML", img: "/Img/skills/html.png" },
  { name: "CSS", img: "/Img/skills/css.png" },
  {
    name: "Javascript",
    img: "/Img/skills/js.png",
  },
  { name: "GitHub", img: "/Img/skills/github.png" },
  {
    name: "Bootstrap",
    img: "/Img/skills/Bootstrap.png",
  },
  {
    name: "Tailwind",
    img: "/Img/skills/tailwind.png",
  },
  {
    name: "MySQL",
    img: "/Img/skills/Mysql_logo.png",
  },
  {
    name: "ReactJs",
    img: "/Img/skills/reactjs.png",
  },
  { name: "Scss", img: "/Img/skills/scss.png" },
  {
    name: "Express",
    img: "/Img/skills/node_express.jpg",
  },
  {
    name: "MongoDB",
    img: "/Img/skills/MongoDB.jpg",
  },
  {
    name: "Laravel",
    img: "/Img/skills/laravel.png",
  },
  {
    name: "Photoshop",
    img: "/Img/skills/Photoshop.png",
  },
  {
    name: "Premiere",
    img: "/Img/skills/Premiere.png",
  },
  {
    name: "KoaJS",
    img: "https://miro.medium.com/v2/resize:fit:1140/1*_SEhpSaIh7-l1jV-yFgeDQ.jpeg",
  },
  {
    name: "FireBase",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png",
  },
  {
    name: "Shopify",
    img: "https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.jpg",
  },
  {
    name: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
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
            className="w-16 h-16 mt-3 sm:h-10 sm:w-10 object-contain"
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
