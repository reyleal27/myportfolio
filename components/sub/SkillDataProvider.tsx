"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Props {
  src: string;
  width: number;
  height: number;
    index: number;
  skillName: string;
  description: string;
}


const SkillDataProvider = ({ src, width, height, index,skillName,description}: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custon={index}
      transition={{ delay: index * animationDelay }}
      >
           <HoverCard>
      <HoverCardTrigger asChild>
         <Image src={src} width={width} height={height} alt="skill image" className="hover:scale-125 cursor-pointer"/>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{skillName }</h4>
            <p className="text-sm">
             {description}
            </p>
          </div>
        </div>
      </HoverCardContent>
          </HoverCard>
          
    </motion.div>
  );
};

export default SkillDataProvider;
