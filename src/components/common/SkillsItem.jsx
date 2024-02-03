import React from 'react';
import htmlImage from "../../Img/skills/html.png";
import cssImage from "../../Img/skills/css.png";
import jsImage from "../../Img/skills/js.png";
import gitImage from "../../Img/skills/github.png";
import bootstrapImage from "../../Img/skills/Bootstrap.png";
import tailwindImage from "../../Img/skills/tailwind.png";
import mysqlImage from "../../Img/skills/Mysql_logo.png";
import reactImage from "../../Img/skills/reactjs.png";
import scssImage from "../../Img/skills/scss.png";
import nodejsImage from "../../Img/skills/node_express.jpg";
import MongoDBImage from "../../Img/skills/MongoDB.jpg";
import laravelImage from "../../Img/skills/laravel.png";
import photoshopImage from "../../Img/skills/Photoshop.png";
import premiereImage from "../../Img/skills/Premiere.png";

const skills = [
    { name: 'HTML', img: htmlImage, className: 'object-cover' },
    { name: 'CSS', img: cssImage, className: 'object-cover' },
    { name: 'Javascript', img: jsImage, className: 'object-cover' },
    { name: 'GitHub', img: gitImage, className: 'object-cover' },
    { name: 'Bootstrap', img: bootstrapImage, className: 'object-contain' },
    { name: 'Tailwind', img: tailwindImage, className: 'object-cover' },
    { name: 'MySQL', img: mysqlImage, className: 'object-contain' },
    { name: 'ReactJs', img: reactImage, className: 'object-contain' },
    { name: 'Scss', img: scssImage, className: 'object-cover' },
    { name: 'Express', img: nodejsImage, className: 'object-contain' },
    { name: 'MongoDB', img: MongoDBImage, className: 'object-cover' },
    { name: 'Laravel', img: laravelImage, className: 'object-cover' },
    { name: 'Photoshop', img: photoshopImage, className: 'object-cover' },
    { name: 'Premiere', img: premiereImage, className: 'object-cover' },
];

const SkillsItem = () => {
    return (
        <div className='grid grid-cols-6 mt-20 sm:mt-10 sm:grid-cols-3 gap-x-10 gap-y-9'>
            {skills.map((skill, index) => (
                <div key={index} className={`flex flex-col items-center justify-center duration-300 rounded-full hover:scale-110 ${skill.className}`}>
                    <img className='w-16 h-16 mt-3 sm:h-10 sm:w-10' src={skill.img} alt={skill.name} />
                    <p className='mt-1 text-xl font-bold sm:text-base'>{skill.name}</p>
                </div>
            ))}
        </div>
    );
};

export default SkillsItem;
