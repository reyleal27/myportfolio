'use client'

import { projects } from '@/components/constants/projects';
import ProjectCard from '../../components/main/ProjectCard';
import { motion } from 'framer-motion';


const ProjectsPage:React.FC = () => {
  return (
    <div className="min-h-screen w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-purple-500">My Projects</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A collection of my full-stack projects showcasing my expertise in 
            Next.js, MERN Stack, Firebase, and real-time applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;