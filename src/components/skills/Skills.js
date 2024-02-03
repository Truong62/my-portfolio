import React from 'react';
import Container from '../common/Container';
import SkillsItem from '../common/SkillsItem';

const Skills = () => {
    return (
        <div id='skills' className='pt-5 h-lvh'>
            <Container>
                <div className='flex items-center justify-center '>
                    <p className='relative text-5xl font-bold duration-300 cursor-default sm:text-3xl hover:text-blue-400 nav2'>My Skills</p>
                </div>
                <SkillsItem />
            </Container>
        </div>
    );
};

export default Skills;