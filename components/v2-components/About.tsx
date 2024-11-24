'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutV2 = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/rey-vincent-resume.pdf'; 
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className=" w-full px-4" >
      <div className="container mx-auto pt-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-purple-500" id='about'>Rey Vincent Leal</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A Maritime Professional turned Full Stack Developer, bringing a unique 
            perspective to software development through years of operational excellence at sea.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* Text Content */}
          <div className="space-y-6 text-justify">
            <h2 className="text-3xl font-bold mb-4 text-purple-500">My Journey</h2>
            <p className="text-gray-400 text-lg">
              From navigating vast oceans to navigating code, my transition from the maritime 
              industry to software development has been driven by a passion for creating innovative 
              solutions and continuous learning.
            </p>
            <p className="text-gray-400 text-lg">
              My maritime background has equipped me with invaluable skills that translate 
              perfectly into software development: problem-solving under pressure, attention 
              to detail, adaptability, and strong team collaboration.
            </p>
            <p className="text-gray-400 text-lg">
              Today, I specialize in full-stack development, building applications using modern 
              technologies like Next.js, React, and Node.js. My maritime experience has taught 
              me the importance of reliability and precision – qualities I bring to every line 
              of code I write.
            </p>

            {/* Transferable Skills Section */}
            

            <div className="flex gap-4 pt-6">
              <button 
                onClick={handleDownload}
                className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Download CV
              </button>
              <Link
                href="/projects"
                className="px-6 py-3 border border-blue-600 rounded-lg text-slate-200 hover:bg-blue-600/10 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Image Section */}
                  <div className="space-y-6">
                      <div className="bg-[#1a1a1a] p-6 rounded-xl mt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                How Maritime Experience Enhances My Development
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Critical thinking and problem-solving in high-pressure situations</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Strong attention to detail and safety-first mindset</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Effective team collaboration and leadership skills</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-500 text-xl">•</span>
                  <span>Adaptability to new technologies and changing environments</span>
                </li>
              </ul>
            </div>
            {/* Current Focus */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Current Focus
              </h3>
              <p className="text-gray-400 text-lg">
                As a Full Stack Developer, Im passionate about building scalable web 
                applications that solve real-world problems. I combine my technical skills 
                with my maritime industry insights to create efficient, user-focused solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutV2;