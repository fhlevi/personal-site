import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';
import React from 'react';

import ProjectImg from '@assets/images/netflix.png';

export const ProjectCard = () => {
    const [isHover, setIsHover] = React.useState<boolean>(false);

    const handleHoverEnter = () => {
        setIsHover(true)
    }

    const handleHoverLeave = () => {
        setIsHover(false)
    }

    return (
        <div 
            className="relative w-auto h-[371px] bg-[#F9FAFB] rounded-3xl p-4 flex items-end"
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
        >
            <div className="absolute bg-white/25 w-full h-full rounded-3xl left-0 bottom-0 z-10"></div>
            <img 
                src={ProjectImg}
                alt="project-name" 
                className="absolute left-0 bottom-0 h-full w-full rounded-3xl" 
                loading="lazy"
            />
            
            <button 
            type="button"
            aria-label="direction-button"
            className={clsx(
                "absolute h-16 w-16 rounded-full border top-3 right-3 p-4 z-10 border-orange-400 cursor-pointer duration-300 ease-in-out",
                isHover ? "bg-orange-400 text-white" : "text-orange-400"
            )}>
                <ArrowRight size={32} />
            </button>

            <div className="relative w-full rounded-3xl z-10 backdrop-blur-md bg-[#0000007f]">
                <div className="flex z-10 flex-col items-start justify-between h-full p-4">
                    <h3 className="text-[40px] font-bold text-white">Project Name</h3>
                    <p className="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                </div>
            </div>
        </div>
    )
}