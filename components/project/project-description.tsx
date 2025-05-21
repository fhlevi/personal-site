import { ProjectDescriptionProps } from '@modules/interfaces';
import React, { useState } from 'react';

export const ProjectDescription: 
React.FC<ProjectDescriptionProps> = ({ 
    name, 
    description 
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const isLongDescription = description.length > 150;
    const displayedDescription = isExpanded || !isLongDescription 
        ? description 
        : `${description.slice(0, 150)}...`;

    return (
        <div className="relative w-full rounded-3xl z-10 backdrop-blur-md bg-[#0000007f]">
            <div className="flex z-10 flex-col items-start justify-between h-full p-4">
                <h3 className="text-[40px] font-bold text-white">{name}</h3>
                <p className="text-base text-white">
                    {displayedDescription}
                    {isLongDescription && (
                        <span 
                        className="text-orange-200 cursor-pointer ml-2"
                        onClick={toggleReadMore}
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </span>
                    )}
                </p>
            </div>
        </div>
    );
};