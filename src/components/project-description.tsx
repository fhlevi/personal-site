import React from 'react';

interface ProjectDescriptionProps {
    name: string;
    description: string;
}

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ name, description }) => {
    return (
        <div className="relative w-full rounded-3xl z-10 backdrop-blur-md bg-[#0000007f]">
            <div className="flex z-10 flex-col items-start justify-between h-full p-4">
                <h3 className="text-[40px] font-bold text-white">{name}</h3>
                <p className="text-base text-white">{description}</p>
            </div>
        </div>
    );
};
