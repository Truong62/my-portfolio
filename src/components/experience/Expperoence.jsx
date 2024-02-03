import React from 'react';
import Container from '../common/Container';

const Expperoence = () => {
    return (
        <div id='Experience' className='pt-5 h-lvh'>
            <Container>
                <div className='flex items-center justify-center '>
                    <p className='relative text-5xl font-bold duration-300 cursor-default hover:text-blue-400 nav2'>Experience</p>
                </div>
                <div className='flex max-h-full h-[500px] border-2 border-black rounded-xl mt-12 p-5'>
                    <div className='flex flex-col items-center w-4/12 h-full p-8 shadow-xl rounded-xl'>
                        <p className='text-lg font-medium'>Null</p>
                    </div>
                    <div className='flex flex-col items-center w-8/12 h-full p-8 ml-12 shadow-xl rounded-xl'>
                        <p className='text-lg font-medium'>Intern</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Expperoence;