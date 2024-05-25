import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { IoLogoYoutube, IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div id="about" className="w-full mb-10 h-lvh sm:overflow-hidden">
      <div className="flex items-center justify-center w-full p-6 text-black cursor-pointer sm:justify-between sm:py-6">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={686}
          className="text-xl font-bold duration-300 sm:mx-1 sm:text-base hover:text-blue-400 nav hover:scale-110 mx-9"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="project"
          spy={true}
          smooth={true}
          duration={686}
          className="text-xl font-bold duration-300 sm:mx-1 sm:text-base hover:text-blue-400 nav hover:scale-110 mx-9"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="Experience"
          spy={true}
          smooth={true}
          duration={686}
          className="text-xl font-bold duration-300 sm:mx-1 sm:text-base hover:text-blue-400 nav hover:scale-110 mx-9"
        >
          Experience
        </ScrollLink>
        <ScrollLink
          to="skills"
          spy={true}
          smooth={true}
          duration={686}
          className="text-xl font-bold duration-300 sm:mx-1 sm:text-base hover:text-blue-400 nav hover:scale-110 mx-9"
        >
          Skills
        </ScrollLink>
        <ScrollLink
          to="Contact"
          spy={true}
          smooth={true}
          duration={686}
          className="text-xl font-bold duration-300 sm:mx-1 sm:text-base hover:text-blue-400 nav hover:scale-110 mx-9"
        >
          Contact
        </ScrollLink>
      </div>
      <div className="sm:relative flex items-center justify-around  h-full ">
        <div className="bottom-16 sm:ml-6 sm:absolute">
          <div className="flex">
            <p className="mr-6 font-bold text-8xl drop-shadow-sm sm:text-3xl sm:mr-3 sm:block">
              Hi! I'm
            </p>
            <div className="text-[#FAEF5D]">
              <TypeAnimation
                sequence={["Coder", 2000, "Youtuber", 2000, "Student", 2000]}
                className="font-bold duration-700 text-8xl sm:text-3xl sm:mr-3"
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="w-[850px] mt-6 col sm:w-full"
          >
            <p className="mr-6 text-2xl font-medium sm:text-xl sm:drop-shadow-2xl ">
              Hello everyone, my name is Ngoc Truong. I am a programmer, and I
              have been learning programming since August 2022.
            </p>
          </motion.div>
          <div className="py-5 sm:py-3 cursor-pointer rounded-full sm:w-[150px] sm:mt-8 w-[250px] duration-500 sm:hover:bg-[#FAEF5D] hover:bg-white bg-[#FAEF5D] flex justify-center items-center mt-32 border-[#FAEF5D] border-2 hover:border-black">
            <p className="text-2xl font-medium sm:text-xl">VIEW MORE</p>
          </div>
          <div className="flex items-center mt-6 sm:mt-0">
            <Link
              className="p-3 "
              to="https://www.youtube.com/@sarus.204"
              target="_blank"
            >
              <IoLogoYoutube className="text-3xl duration-500 hover:text-blue-400 hover:scale-125"></IoLogoYoutube>
            </Link>
            <Link
              className="p-3 "
              to="https://www.facebook.com/truongdzai.26/"
              target="_blank"
            >
              <IoLogoFacebook className="text-3xl duration-500 hover:text-blue-400 hover:scale-125"></IoLogoFacebook>
            </Link>
            <Link
              className="p-3 "
              to="https://www.instagram.com/ng.ngoc.truong/"
              target="_blank"
            >
              <IoLogoInstagram className="text-3xl duration-500 hover:text-blue-400 hover:scale-125"></IoLogoInstagram>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 168 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="rounded-lg sm:top-0 sm:-z-50 sm:rounded-none sm:absolute sm:shadow-none shadow-img shadow-gray-400"
        >
          <img
            className="object-cover sm:h-lvh rounded-md sm:w-full opacity-85 w-[500px] h-[600px] sm:rounded-none  hover:scale-105 hover:-rotate-2 duration-700 "
            src="/Img/IMG_5124.JPG"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
