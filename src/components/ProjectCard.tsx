import React from 'react';
import Github from '../assets/svg/github.svg?react';
import Globe from '../assets/svg/globe.svg?react';

interface ProjectProps {
    icon: string;
    name: string;
    description: string;
    technologies: string[];
    linkRepo: string;
    linkDemo?: string;
}

export const ProjectCard:React.FC<ProjectProps> = ({ icon, name, description, technologies, linkRepo, linkDemo }) => {
  return (
    <div className='bg-vsc-surface border border-vsc-border rounded-md p-4 cursor-pointer transition-all duration-200 hover:border-vsc-accent hover:-translate-y-0.5'>
        
        <div className="flex items-center gap-2.5 mb-2">
            <span className="text-[20px]">{icon}</span>
            <span className="text-syn-type font-semibold text-sm">
                {name}
            </span>
        </div>

        
        <div className="text-vsc-text-muted text-xs leading-normal mb-3">
            {description}
        </div>

        
        <div className="flex gap-1.5 flex-wrap">
            {technologies.map((tech, index) => (
                <span key={index} className="bg-vsc-surface2 border border-vsc-border text-syn-keyword text-[11px] px-2 py-0.5 rounded-full">
                    {tech}
                </span>
            ))}
        </div>

        
        <div className="mt-3 flex gap-2">
            <a href={linkRepo} className="inline-flex items-center gap-1 text-vsc-text-muted text-xs px-2 py-0.75 border border-vsc-border rounded transition-colors duration-150 hover:text-syn-property hover:border-vsc-accent">
                <Github className="text-white-a h-3.5"/>
                <p className='py-1'>GitHub</p>
            </a>
            <a href={linkDemo} className="inline-flex items-center gap-1 text-vsc-text-muted text-xs px-2 py-0.75 border border-vsc-border rounded transition-colors duration-150 hover:text-syn-property hover:border-vsc-accent">
                <Globe className="text-white-a h-3.5"/>
                <p className='py-1'>Live</p>
            </a>
        </div>
        

    </div>
  )
}
