
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FaServer, FaDatabase, FaCode, FaTools } from 'react-icons/fa';

// const skills = {
//   frontend: [
//     { name: "Next.js", level: 90 },
//     { name: "React", level: 90 },
//     { name: "TypeScript", level: 85 },
//     { name: "Tailwind CSS", level: 90 },
//     { name: "JavaScript", level: 90 },
//   ],
//   backend: [
//     { name: "Node.js", level: 85 },
//     { name: "Express.js", level: 85 },
//     { name: "Socket.io", level: 80 },
//     { name: "Nodemailer", level: 80 },
//   ],
//   database: [
//     { name: "MongoDB", level: 85 },
//     { name: "Firebase", level: 60 },
//   ],
//   tools: [
//     { name: "Git", level: 85 },
//     { name: "Docker", level: 65 },
//     { name: "REST APIs", level: 70 },
//   ]
// };

// const page = () => {

//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = '/Resume-rey-leal.pdf'; // Path to the CV file in the public directory
//     link.download = 'resume.pdf'; // You can set a custom filename
//     link.click();
//   };

 


//   return (
//     <div className="w-full min-h-screen py-20 px-4 mt-10">
//       <div className="max-w-6xl mx-auto">
//         {/* Hero Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl font-bold mb-6 text-purple-500">About Me</h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Full Stack Developer specializing in MERN Stack and Next.js development. 
//             Passionate about building scalable web applications and real-time systems.
//           </p>
//         </motion.div>

//         {/* Profile Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
//         >
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold mb-4 text-purple-500">Professional Journey</h2>
//             <p className="text-gray-400">
//               As a Full Stack Developer, I bring ideas to life using modern web technologies. 
//               My expertise spans the entire development stack, from crafting responsive front-end 
//               interfaces to building robust back-end systems.
//             </p>
//             <p className="text-gray-400">
//               I specialize in building applications using the MERN (MongoDB, Express.js, React, Node.js) 
//               stack and Next.js framework. My experience includes implementing real-time features with 
//               Socket.io, handling email communications with Nodemailer, and managing data with both 
//               Firebase and MongoDB.
//             </p>
//             <div className="flex gap-4">
//                           <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
//                           onClick={handleDownload}>
//                 Download CV
//               </button>
//                           <button className="px-6 py-3 border text-slate-100 border-blue-600 rounded-lg hover:bg-blue-600/10 transition-colors">
//                               <a href='/projects'>
                                  
//                 View Projects
//                               </a>
//               </button>
//             </div>
//           </div>
//           <div className="relative h-[400px] rounded-lg overflow-hidden">
//             <Image
//               src="/developer.jpg" // Add your image path
//               alt="Profile"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </motion.div>

//         {/* Skills Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//                   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                 
//         >
//           {/* Frontend Skills */}
//           <div className="bg-[#1a1a1a] p-6 rounded-xl text-slate-100" id='skills'>
//             <div className="flex items-center gap-3 mb-6">
//               <FaCode className="text-2xl text-blue-500" />
//               <h3 className="text-xl font-semibold">Frontend</h3>
//             </div>
//             <div className="space-y-4">
//               {skills.frontend.map((skill, index) => (
//                 <div key={skill.name}>
//                   <div className="flex justify-between mb-1">
//                     <span>{skill.name}</span>
//                     <span>{skill.level}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-700 rounded-full">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1, delay: index * 0.1 }}
//                       className="h-full bg-blue-500 rounded-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Backend Skills */}
//           <div className="bg-[#1a1a1a] p-6 rounded-xl text-slate-100">
//             <div className="flex items-center gap-3 mb-6">
//               <FaServer className="text-2xl text-green-500" />
//               <h3 className="text-xl font-semibold">Backend</h3>
//             </div>
//             <div className="space-y-4">
//               {skills.backend.map((skill, index) => (
//                 <div key={skill.name}>
//                   <div className="flex justify-between mb-1">
//                     <span>{skill.name}</span>
//                     <span>{skill.level}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-700 rounded-full">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1, delay: index * 0.1 }}
//                       className="h-full bg-green-500 rounded-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Database Skills */}
//           <div className="bg-[#1a1a1a] p-6 rounded-xl text-slate-100">
//             <div className="flex items-center gap-3 mb-6">
//               <FaDatabase className="text-2xl text-purple-500" />
//               <h3 className="text-xl font-semibold">Database</h3>
//             </div>
//             <div className="space-y-4">
//               {skills.database.map((skill, index) => (
//                 <div key={skill.name}>
//                   <div className="flex justify-between mb-1">
//                     <span>{skill.name}</span>
//                     <span>{skill.level}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-700 rounded-full">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1, delay: index * 0.1 }}
//                       className="h-full bg-purple-500 rounded-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tools & Others */}
//           <div className="bg-[#1a1a1a] p-6 rounded-xl text-slate-100">
//             <div className="flex items-center gap-3 mb-6">
//               <FaTools className="text-2xl text-orange-500" />
//               <h3 className="text-xl font-semibold">Tools & Others</h3>
//             </div>
//             <div className="space-y-4">
//               {skills.tools.map((skill, index) => (
//                 <div key={skill.name}>
//                   <div className="flex justify-between mb-1">
//                     <span>{skill.name}</span>
//                     <span>{skill.level}%</span>
//                   </div>
//                   <div className="h-2 bg-gray-700 rounded-full">
//                     <motion.div
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1, delay: index * 0.1 }}
//                       className="h-full bg-orange-500 rounded-full"
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default page;

'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume-rey-leal.pdf'; // Update with your CV path
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-purple-500">About Me</h1>
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
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-purple-500">My Journey</h2>
            <p className="text-gray-400">
              From navigating vast oceans to navigating code, my transition from the maritime 
              industry to software development has been driven by a passion for creating innovative 
              solutions and continuous learning.
            </p>
            <p className="text-gray-400">
              My maritime background has equipped me with invaluable skills that translate 
              perfectly into software development: problem-solving under pressure, attention 
              to detail, adaptability, and strong team collaboration.
            </p>
            <p className="text-gray-400">
              Today, I specialize in full-stack development, building applications using modern 
              technologies like Next.js, React, and Node.js. My maritime experience has taught 
              me the importance of reliability and precision – qualities I bring to every line 
              of code I write.
            </p>

            {/* Transferable Skills Section */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl mt-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                How Maritime Experience Enhances My Development
              </h3>
              <ul className="space-y-3">
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
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/developer.jpg" // Update with your image
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            {/* Current Focus */}
            <div className="bg-[#1a1a1a] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Current Focus
              </h3>
              <p className="text-gray-400">
                As a Full Stack Developer, I'm passionate about building scalable web 
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

export default AboutPage;