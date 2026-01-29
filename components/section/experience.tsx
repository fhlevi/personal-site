import React from "react";
import clsx from "clsx";
import { Container } from "@components/common/container";
import { RoundSchema } from "@modules/types";
import { useDevice } from "@hook/use-device";
import { useQuery } from 'react-query';
import { getExperience } from "@services/profiles";
import type { ExperienceListSchema } from "modules/types";

// Shimmer Components
const ExperienceShimmerMobile = () => (
    <div className="flex gap-4 h-1/2">
        <div className="relative flex justify-center space-y-10">
            <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="h-full w-full rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="absolute border-r-2 border-dashed border-gray-300 h-full top-12"></div>
        </div>
        <div className="flex flex-col space-y-3 flex-1">
            <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/3 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
    </div>
);

const ExperienceShimmerDesktop = () => (
    <div className="flex flex-row gap-4">
        <div className="flex flex-col items-end justify-start text-right space-y-3 w-1/2">
            <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 ml-auto animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2 ml-auto animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
        <div className="relative flex justify-center space-y-10">
            <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="h-full w-full rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="absolute border-r-2 border-dashed border-gray-300 h-full top-12"></div>
        </div>
        <div className="flex flex-col space-y-3 w-1/2">
            <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/5 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
    </div>
);

export const ExperienceSection: React.FC = () => {
    const { devices } = useDevice();

    const queryExperiences = useQuery(['experience-list'], getExperience);
    const experiences = queryExperiences.data?.data as ExperienceListSchema || [];
    const isLoading = queryExperiences.isLoading;

    return (
        <section id="experience" className="pb-22">
            <Container className="flex items-center justify-center">
                <div className="max-w-6xl">
                    <h2 className="text-5xl md:text-6xl font-medium text-left md:text-center my-8 mt-16 md:my-[85px]">
                        My <span className="text-[#FD853A]">Work Experience</span>
                    </h2>
                    <div className="flex flex-col space-y-12">
                        {isLoading ? (
                            // Loading Shimmer
                            <>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    devices.mobile ? (
                                        <ExperienceShimmerMobile key={index} />
                                    ) : (
                                        <ExperienceShimmerDesktop key={index} />
                                    )
                                ))}
                            </>
                        ) : (
                            // Actual Data
                            experiences.map((item, index) => {
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

                                                {index !== experiences.length - 1 && (
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

                                            {index !== experiences.length - 1 && (
                                                <div className="absolute border-r-2 border-dashed border-[#1D2939] h-full top-12"></div>
                                            )}
                                        </div>
                                        <div className="flex flex-col space-y-3 w-1/2">
                                            <div className="flex space-x-2">
                                                <h3 className="text-4xl font-bold text-[#344054]">{item.position}</h3>
                                                <p className="text-xl text-gray-400 pt-3">{item.status && `(${item.status})`}</p>
                                            </div>
                                            <p className="text-xl text-gray-400 min-h-[140px] max-h-[140px]">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};