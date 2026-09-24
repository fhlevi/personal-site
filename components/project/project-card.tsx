import React from 'react';
import { ProjectCardProps } from '@modules/interfaces';
import { ProjectButton } from './project-button';
import { useHover } from '@hook/use-hover';
import { ProjectDescription } from './project-description';
import { useObfuscatedImage } from '@hook/use-obfuscate-image';

export const ProjectCard: 
React.FC<ProjectCardProps> = ({ 
    image, 
    name, 
    description,
    link
}) => {
    const { isHover, onHoverEnter, onHoverLeave } = useHover();
    const blobUrl = useObfuscatedImage('assets/images/projects/' + image);

    const variant = isHover ? "default" : "outline";

    const handleClick = () => {
        if (link) window.open(link, "_blank");
    };

    return (
        <div 
        className="group relative w-auto h-[371px] bg-[#F9FAFB] rounded-3xl p-4 flex items-end overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        onClick={handleClick}>
            <div className="absolute bg-black/10 w-full h-full rounded-3xl left-0 bottom-0 z-10 transition-colors duration-500 group-hover:bg-black/40"></div>
            
            {image && (
                <img 
                src={blobUrl} 
                alt={name} 
                className="absolute left-0 bottom-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"/>
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
