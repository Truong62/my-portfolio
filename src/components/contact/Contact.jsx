import React from 'react';
import Container from '../common/Container';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div id='Contact'>
            <Container>
                <div className='w-full border-t-2 border-gray-300 rounded-full'></div>
                <div className='grid grid-cols-3 px-5 mt-6 sm:grid-cols-1 gap-x-6'>
                    <div className='mb-8 sm:mb-3'>
                        <p className='mb-3 text-3xl font-medium '>View</p>
                        <ScrollLink to='about' spy={true} smooth={true} duration={686}
                            className='inline-block text-lg font-normal duration-300 cursor-pointer hover:text-blue-500 hover:scale-105'>
                            About
                        </ScrollLink>
                        <ScrollLink to='project' spy={true} smooth={true} duration={686}
                            className='block my-1 text-lg font-normal duration-300 cursor-pointer hover:text-blue-500 hover:scale-105'>
                            Projects
                        </ScrollLink>
                        <ScrollLink to='skills' spy={true} smooth={true} duration={686}
                            className='inline-block my-1 text-lg font-normal duration-300 cursor-pointer hover:text-blue-500 hover:scale-105'>
                            Skills
                        </ScrollLink>
                    </div>
                    <div className='sm:mb-3'>
                        <p className='mb-3 text-3xl font-medium'>My Youtube</p>
                        <Link to='https://www.youtube.com/watch?v=7ZuVtJMaYl4&t=6s' target="_blank"
                            className='inline-block text-lg font-normal duration-300 cursor-pointer hover:text-blue-500 hover:scale-105'>
                            Redux Toolkit
                        </Link>
                        <br />
                        <Link to='https://www.youtube.com/watch?v=vd28gTD9sVo&t=195s' target="_blank"
                            className='inline-block my-1 text-lg font-normal duration-300 cursor-pointer hover:text-blue-500 hover:scale-105'>
                            Github
                        </Link>
                        <br />
                        <Link to='https://www.youtube.com/watch?v=B1GAM8cxTUQ&t=137s' target="_blank"
                            className='inline-block my-1 text-lg font-normal duration-300 cursor-pointer hover:text-blue-500 hover:scale-105'>
                            Minecraft
                        </Link>
                    </div>
                    <div className='sm:mb-8'>
                        <p className='mb-3 text-3xl font-medium'>Contact</p>
                        <div className='flex items-center cursor-pointer'>
                            <p className='mr-2 text-lg font-normal'>Gmail:</p>
                            <span>Gamingnnt@gmail.com</span>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <p className='mr-2 text-lg font-normal'>Phone:</p>
                            <span>8386838699</span>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <p className='mr-2 text-lg font-normal'>Address:</p>
                            <span>Ha Noi</span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;