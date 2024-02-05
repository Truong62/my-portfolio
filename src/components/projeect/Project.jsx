import React from 'react';
import Container from '../common/Container';
import project1 from '../../Img/project1.png'
import project2 from '../../Img/project2.png'
import project3 from '../../Img/project3.png'
import { SiCsharp, SiMongodb, SiMysql } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs } from "react-icons/di";
import ItemProject from '../common/ItemProject';
import { motion } from "framer-motion";


const Project = () => {
    return (
        <div id="project" >
            <Container>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className='flex items-center justify-center sm:mt-10'>
                    <p className='text-5xl font-bold duration-300 cursor-default sm:mt-8 hover:text-blue-400 navProject sm:text-3xl'>Projects</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 168 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className='grid grid-cols-3 mt-12 sm:grid-cols-1 mb-28 gap-x-20 gap-y-12 place-items-center'>
                    <ItemProject
                        imgProject={project1}
                        title='Sneaker Store'
                        description='The system is developed on the command-line to streamline the operations of a shoe store, enabling the quick generation of invoices with product details and customer information. Cashiers can efficiently process orders, access daily transactions, and create detailed invoices post-purchase.'
                        language={[
                            { name: ".NET 7", icon: <SiCsharp></SiCsharp> },
                            { name: "MySQL", icon: <SiMysql></SiMysql> },
                        ]}
                        linkto={"https://github.com/Truong62/Project-1"}
                    ></ItemProject>
                    <ItemProject
                        imgProject={project3}
                        title='Shop Online'
                        description='The full-stack system includes a Restful API for adding, editing, deleting, and updating data and files. This project facilitates efficient and convenient product posting and order management. Customers can quickly browse products and make purchases with ease.'
                        language={[
                            { name: "Reactjs", icon: <GrReactjs></GrReactjs> },
                            { name: "Nodejs", icon: <DiNodejs></DiNodejs> },
                            { name: "Mongodb", icon: <SiMongodb></SiMongodb> },
                        ]}
                        linkto={"https://nntshop.netlify.app/"}
                    ></ItemProject>
                    <ItemProject
                        imgProject={project2}
                        title='Database Design'
                        description='This is the design model of the database that helps developers manage user accounts, customers, and orders for the product.'
                        language={[
                            { name: ".NET 7", icon: <SiCsharp></SiCsharp> },
                            { name: "MySQL", icon: <SiMysql></SiMysql> },
                        ]}
                        linkto={"https://github.com/Truong62/Project-1"}
                    ></ItemProject>
                </motion.div>
            </Container>
        </div>
    );
};

export default Project;