import React from 'react';
import { ProjectCardProps } from '@modules/interfaces';
import { ProjectButton } from './project-button';
import { useHover } from '@hook/use-hover';
import { ProjectDescription } from './project-description';

export const ProjectCard: 
React.FC<ProjectCardProps> = ({ 
    image, 
    name, 
    description,
    link
}) => {
    const { isHover, onHoverEnter, onHoverLeave } = useHover();

    const variant = isHover ? "default" : "outline";

    const handleClick = () => {
        window.open(link, "_blank");
    };

    return (
        <div 
        className="relative w-auto h-[371px] bg-[#F9FAFB] rounded-3xl p-4 flex items-end"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}>
            <div className="absolute bg-white/20 w-full h-full rounded-3xl left-0 bottom-0 z-10"></div>
            
            {image && (
                <img 
                src={image} 
                alt={name} 
                className="absolute left-0 bottom-0 h-full w-full rounded-3xl object-cover"/>
            )}
            
            {link && (
                <ProjectButton 
                variant={variant} 
                onClick={handleClick} />
            )}
            
            <ProjectDescription name={name} description={description} />
        </div>
    );
};