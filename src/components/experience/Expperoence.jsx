import React, { Fragment, useEffect, useState } from "react";
import Container from "../common/Container";
import { motion } from "framer-motion";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import timeLine from "../../JSON_DATA/TimeLine.json";
import "./style.scss";
import { TimelineContent } from "@mui/lab";

const Expperoence = () => {
  const [data, setData] = useState([]);
  const [year, setYear] = useState(timeLine.data[0].time);

  useEffect(() => {
    const filteredData = timeLine.data.filter((item) => item.time === year);
    setData(filteredData);
  }, [year]);

  return (
    <div id="Experience" className="pt-5 sm:  h-lvh">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center "
        >
          <p className="relative text-5xl font-bold duration-300 cursor-default hover:text-blue-400 nav2">
            Experience
          </p>
        </motion.div>
        <div className="flex items-center max-h-full mt-12 p-5 sm:px-1">
          <div className="flex  items-center h-full sm:p-0 p-8 ">
            <div className="flex flex-col">
              {timeLine.data.map((item, index) => (
                <TimelineItem
                  sx={{
                    " css-1ms7hib-MuiTimelineItem-root::before ": "padding: 0",
                  }}
                  key={index}
                  onClick={() => setYear(item.time)}
                >
                  <TimelineSeparator>
                    <TimelineDot
                      color="warning"
                      sx={{
                        "css-5eu42p-MuiTimelineItem-root::before": "padding: 0",
                        "MuiTimelineDot-root:": `  width: 30px; background-color: #2cccff;`,
                      }}
                    />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{item.time}</TimelineContent>
                </TimelineItem>
              ))}
            </div>
          </div>
          <div className="flex sm:flex-col sm:h-[600px] justify-between sm:m-4 sm:p-2 sm:ml-4 h-full p-8 ml-12 border border-black rounded-lg">
            {data.length > 0 && (
              <Fragment>
                <div className="w-8/12 sm:w-full">
                  <p className="text-3xl font-bold mb-6">{data[0].title}</p>
                  <p className="text-sm md:text-lg">{data[0].description}</p>
                </div>
                <div className="overflow-hidden w-4/12 sm:w-full rounded-2xl">
                  <img
                    className="w-[650px] h-[400px] sm:h-[300px] sm:mt-2 rounded-2xl z-0  object-cover duration-700  hover:scale-105"
                    src={data[0].img}
                    alt={data[0].title}
                  />
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expperoence;
