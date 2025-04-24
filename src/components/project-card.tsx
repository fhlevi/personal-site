import React from 'react';
import { HoverButton } from './hover-button';
import { ProjectDescription } from './project-description';
import { useHover } from '../hooks/use-hover'; // Import hook

interface ProjectCardProps {
    image: string;
    name: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
    image, 
    name, 
    description 
}) => {
    const { isHover, onHoverEnter, onHoverLeave } = useHover(); // Use hook

    return (
        <div 
            className="relative w-auto h-[371px] bg-[#F9FAFB] rounded-3xl p-4 flex items-end"
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
        >
            <div className="absolute bg-white/25 w-full h-full rounded-3xl left-0 bottom-0 z-10"></div>
            <img 
                src={image}
                alt={name} 
                className="absolute left-0 bottom-0 h-full w-full rounded-3xl" 
                loading="lazy"
            />
            
            <HoverButton isHover={isHover} />
            <ProjectDescription name={name} description={description} />
        </div>
    );
};