'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectCardProps } from '../types/types';


const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden"
    >
      <div className="relative h-48 group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute text-slate-200 inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <Link 
            href={project.github}
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/25 transition-colors"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link 
            href={project.live}
            target="_blank"
            className="p-3 bg-white/10 rounded-full hover:bg-white/25 transition-colors"
          >
            <FaExternalLinkAlt className="text-2xl" />
          </Link>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-purple-500">{project.title}</h3>
        <p className="text-slate-200 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2 text-purple-500">Key Features:</h4>
          <ul className="text-slate-200 text-sm space-y-1">
            {project.features.map((feature: string) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full text-slate-100"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <h4 className="text-sm font-semibold mb-2 text-purple-500">Technologies Used:</h4>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <div 
                key={tech.name}
                className="flex items-center gap-1 text-slate-300 hover:text-purple-300 transition-colors"
              >
                <tech.icon className="text-xl" />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectCard;