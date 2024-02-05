import React from 'react';
import Container from '../common/Container';
import SkillsItem from '../common/SkillsItem';
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div id='skills' className='pt-5 h-lvh'>
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className='flex items-center justify-center '>
                    <p className='relative text-5xl font-bold duration-300 cursor-default sm:text-3xl hover:text-blue-400 nav2'>My Skills</p>
                </motion.div>
                <SkillsItem />
            </Container>
        </div>
    );
};

export default Skills;