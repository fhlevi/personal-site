import React from "react";
import clsx from "clsx";
import { Container } from "@components/common/container";
import { IExperienceList, RoundSchema } from "@type/experience";

interface ExperienceSectionProps {
    experience: IExperienceList;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
    return (
        <section id="experience" className="pb-22">
            <Container>
                <div className="container mx-auto px-6">
                    <h2 className="text-6xl font-medium text-center my-[85px]">
                        My <span className="text-[#FD853A]">Work Experience</span>
                    </h2>
                    <div className="flex flex-col space-y-12">
                        {experience.map((item, index) => {
                            const round: RoundSchema = {
                                orange: 'bg-[#FD853A]',
                                blue: 'bg-[#1D2939]',
                            } as const;

                            return (
                                <div key={index} className="grid grid-cols-3 gap-4">
                                    <div className="flex flex-col space-y-3">
                                        <h3 className="text-[40px] font-bold text-[#344054]">{item.company}</h3>
                                        <p className="text-2xl text-gray-400">{item.date}</p>
                                    </div>
                                    <div className="relative flex justify-center space-y-10">
                                        <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-[#1D2939] flex items-center justify-center">
                                            <div className={clsx("h-full w-full rounded-full", round[item.color as keyof RoundSchema])}></div>
                                        </div>

                                        {index !== experience.length - 1 && (
                                            <div className="absolute border-r-2 border-dashed border-[#1D2939] h-full top-12"></div>
                                        )}
                                    </div>
                                    <div className="flex flex-col space-y-3">
                                        <h3 className="text-4xl font-bold text-[#344054]">{item.position}</h3>
                                        <p className="text-xl text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
};
