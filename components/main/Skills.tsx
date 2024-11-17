"use client"
import React from "react";
import { Backend_skill, Frontend_skill, tools } from "../constants/skills";
import SkillDataProvider from "../sub/SkillDataProvider";
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight} from "@/utils/motion";

const Skills = () => {
  return (
    <section
    className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden  py-20"
      style={{ transform: "scale(0.9" }}
      id='skills'
    > 
          <motion.div 
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(0.1)}
              className="flex w-full items-center justify-center">
              <h1 className="text-white md:text-6xl  w-full text-2xl tracking-widest font-bold uppercase text-center">Skills</h1>
              </motion.div>
                  
          <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.3)}
            className="w-full">
              <h3 className="text-purple-400 font-semibold tracking-widest text-center text-3xl uppercase pt-6">Frontend</h3>
          </motion.div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center ">
        {Frontend_skill.map((skill, index) => (
          <SkillDataProvider src={skill.Image} key={index} width={skill.width} height={skill.height} index={index} skillName={skill.skill_name} description={skill.description} />
        ))}
          </div>
           <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.3)}
            className="w-full">
              <h3 className="text-purple-400 font-semibold tracking-widest text-center text-3xl uppercase pt-6">Backend</h3>
              </motion.div>
           <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
              {Backend_skill.map((skill, index) => (
                  <SkillDataProvider src={skill.Image} key={index} width={skill.width} height={skill.height} index={index} skillName={skill.skill_name } description={skill.description} />
                ))}
      </div>
       <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.3)}
            className="w-full">
              <h3 className="text-purple-400 font-semibold tracking-widest text-center text-3xl uppercase pt-6">Tools</h3>
              </motion.div>
           <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
              {tools.map((skill, index) => (
                  <SkillDataProvider src={skill.Image} key={index} width={skill.width} height={skill.height} index={index} skillName={skill.skill_name } description={skill.description} />
                ))}
      </div>
    </section>
  );
};

export default Skills;
