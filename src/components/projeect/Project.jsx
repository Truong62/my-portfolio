import React from "react";
import Container from "../common/Container";
import ItemProject from "../common/ItemProject";
import { motion } from "framer-motion";
import dataproject from "../../JSON_DATA/project.json";

const Project = () => {
  return (
    <div id="project">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center sm:mt-10"
        >
          <p className="text-5xl font-bold duration-300 cursor-default sm:mt-8 hover:text-blue-400 navProject sm:text-3xl">
            Projects
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 168 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-3 mt-12 sm:grid-cols-1 gap-x-20 gap-y-12 place-items-center"
        >
          {dataproject.data.map((item) => (
            <ItemProject
              imgProject={item.img}
              title={item.title}
              description={item.description}
              language={item.language}
              linkto={item.linkto}
            ></ItemProject>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Project;
