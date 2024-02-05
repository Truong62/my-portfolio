import React from 'react';
import { Link } from 'react-router-dom';

const ItemProject = ({ children, imgProject, title, description, language, linkto }) => {
    return (
        <Link
            to={linkto} className='border-2 border-black w-[400px] h-full rounded-xl flex flex-col items-start justify-between flex-1 overflow-hidden'>
            <div className='px-3 pt-3'>
                <img className='z-0 border border-black object-cover w-full duration-700 rounded-xl h-[250px] hover:scale-105' src={imgProject} alt="" />
                <div className='text-center '>
                    <p className='relative inline-block mt-2 text-2xl font-bold duration-500 hover:scale-105 '>{title}</p>
                    <p className='mt-2 text-justify text-gray-700'>{description}</p>
                </div>
            </div>
            <div className='flex flex-wrap m-1'>
                {language.map((language, index) => (
                    <div key={index} className='flex items-center p-1 mt-2 mb-2 ml-1 mr-3 duration-700 border-2 rounded-md hover:scale-105 hover:-rotate-2 border-violet-900'>
                        {language.icon && React.cloneElement(language.icon, { className: 'text-3xl text-violet-900' })}
                        <p className='ml-2 font-black text-violet-900'>{language.name}</p>
                    </div>
                ))}
            </div>
        </Link>
    );
};

export default ItemProject;

