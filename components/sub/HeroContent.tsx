'use client'

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex md:flex-row flex-col-reverse gap-4 items-center justify-center px-10 mt-40 z-[20]"
    >
      <div className="h-full w-full flex flex-col  justify-center m-auto text-start">
        <motion.div
          className="welcome-box py-[8px] px-[4px] border rounded-lg flex border-[#7042f88b] opacity-[0.9] w-[13rem]"
          variants={slideInFromTop}
              >
                  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                  <h1 className="welcome-text text-[13px]">Fullstack Developer Portfolio</h1>
              </motion.div>
              <motion.div
                  variants={slideInFromLeft(0.5)}
                  className="mt-6 text-2xl md:text-4xl lg:text-6xl font-bold text-white max-w-[600px] h-auto py-4">
                  <span>
                      
                  Providing the 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600"> best project </span>experience
                  </span>
                   
              </motion.div>
              <motion.p
                  variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px] text-justify">
                  I am a passionate and dedicated junior full-stack developer with a strong foundation in both front-end and back-end technologies.
              </motion.p>
        <motion.a
          href="/about"
                  variants={slideInFromLeft(1)}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                  Learn More!
              </motion.a>  
              
      </div>
              <motion.div
                  variants={slideInFromRight(0.8)} 
                  className="md:w-[400px] w-[200px] px-12 aspect-square xl:left-[-200px] relative">
              <Image src='/developer.jpg' alt="fullstack image" fill
               className="object-cover rounded-full border-solid border-purple-400 border-2 "/>
              </motion.div>
    </motion.div>
  );
};

export default HeroContent;
