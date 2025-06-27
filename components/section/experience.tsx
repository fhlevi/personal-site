import React from "react";
import clsx from "clsx";
import { Container } from "@components/common/container";
import { RoundSchema } from "@modules/types";
import { ExperienceSectionProps } from "@modules/interfaces";
import { useDevice } from "@hook/use-device";

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
    const { devices } = useDevice();

    return (
        <section id="experience" className="pb-22">
            <Container className="flex items-center justify-center">
                <div className="max-w-6xl">
                    <h2 className="text-5xl md:text-6xl font-medium text-left md:text-center my-8 mt-16 md:my-[85px]">
                        My <span className="text-[#FD853A]">Work Experience</span>
                    </h2>
                    <div className="flex flex-col space-y-12">
                        {experience.map((item, index) => {
                            const colorClass = index % 2 === 0 ? 'orange' : 'blue';

                            const round: RoundSchema = {
                                orange: 'bg-[#FD853A]',
                                blue: 'bg-[#1D2939]',
                            } as const;

                            if (devices.mobile) {
                                return (
                                    <div key={index} className="flex gap-4 h-1/2">
                                        <div className="relative flex justify-center space-y-10">
                                            <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-[#1D2939] flex items-center justify-center">
                                                <div className={clsx("h-full w-full rounded-full", round[colorClass as keyof RoundSchema])}></div>
                                            </div>

                                            {index !== experience.length - 1 && (
                                                <div className="absolute border-r-2 border-dashed border-[#1D2939] h-full top-12"></div>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-3">
                                            <h3 className="text-[40px] font-bold text-[#344054]">{item.company}</h3>
                                            <h4 className="text-2xl font-bold text-[#344054]">{item.position}</h4>
                                            <p className="text-xl text-gray-400">{item.description}</p>
                                            <p className="text-lg text-gray-400">{item.date}</p>
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <div key={index} className="flex flex-row gap-4">
                                    <div className="flex flex-col items-end justify-start text-right space-y-3 w-1/2">
                                        <h3 className="text-[40px] font-bold text-[#344054]">{item.company}</h3>
                                        <p className="text-2xl text-gray-400">{item.date}</p>
                                    </div>
                                    <div className="relative flex justify-center space-y-10">
                                        <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-[#1D2939] flex items-center justify-center">
                                            <div className={clsx("h-full w-full rounded-full", round[colorClass as keyof RoundSchema])}></div>
                                        </div>

                                        {index !== experience.length - 1 && (
                                            <div className="absolute border-r-2 border-dashed border-[#1D2939] h-full top-12"></div>
                                        )}
                                    </div>
                                    <div className="flex flex-col space-y-3 w-1/2">
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
