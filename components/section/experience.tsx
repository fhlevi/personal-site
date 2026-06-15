import React, { useState } from "react";
import clsx from "clsx";
import { Container } from "@components/common/container";
import { RoundSchema } from "@modules/types";
import { useDevice } from "@hook/use-device";
import { useQuery } from 'react-query';
import { getExperience } from "@services/profiles";
import type { ExperienceListSchema } from "modules/types";
import { ExperienceShimmerDesktop, ExperienceShimmerMobile } from "@components/experience/experience-shimmer";

const MONTH_MAP: Record<string, number> = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3,
    'Mei': 4, 'May': 4, 'Jun': 5, 'Jul': 6,
    'Agu': 7, 'Aug': 7, 'Sep': 8, 'Okt': 9,
    'Oct': 9, 'Nov': 10, 'Des': 11, 'Dec': 11,
};

const INITIAL_SHOW = 4;

export const ExperienceSection: React.FC = () => {
    const { devices } = useDevice();
    const [isExpanded, setIsExpanded] = useState(false);

    const queryExperiences = useQuery(['experience-list'], getExperience);

    const parseDate = (part: string): number => {
        const trimmed = part.trim();
        if (trimmed.toLowerCase() === 'present' || trimmed === '') {
            return Number.MAX_SAFE_INTEGER;
        }
        const [month, year] = trimmed.split(' ');
        return new Date(parseInt(year), MONTH_MAP[month] ?? 0).getTime();
    };

    const parseExperienceDate = (dateStr: string) => {
        const [start, end] = dateStr.split(' - ');
        return {
            start: parseDate(start),
            end: parseDate(end ?? '')
        };
    };

    const allExperiences = (queryExperiences.data?.data as ExperienceListSchema || [])
        .slice()
        .sort((a, b) => {
            const dateA = parseExperienceDate(a.date);
            const dateB = parseExperienceDate(b.date);
            if (dateB.end !== dateA.end) return dateB.end - dateA.end;
            return dateB.start - dateA.start;
        });

    const hasMore = allExperiences.length > INITIAL_SHOW;
    const experiences = hasMore && !isExpanded
        ? allExperiences.slice(0, INITIAL_SHOW)
        : allExperiences;

    const isLoading = queryExperiences.isLoading;

    return (
        <section id="experience" className="pb-22">
            <Container className="flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    <h2 className="text-5xl md:text-6xl font-medium text-left md:text-center my-8 mt-16 md:my-[85px]">
                        My <span className="text-[#FD853A]">Work Experience</span>
                    </h2>

                    {/* List Wrapper dengan relative untuk gradient overlay */}
                    <div className="relative">
                        <div 
                            className={clsx(
                                "flex flex-col space-y-12 overflow-hidden transition-all duration-500",
                                !isExpanded && hasMore && "max-h-[1400px]" // sesuaikan tinggi agar pas 5 item
                            )}
                        >
                            {isLoading ? (
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
                                        );
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

                        {/* Gradient Overlay + Button — hanya muncul jika ada lebih dari 5 & belum expand */}
                        {hasMore && !isExpanded && !isLoading && (
                            <div
                                className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pt-32"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent, white 60%)'
                                }}
                            >
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="mb-4 flex items-center gap-2 px-6 py-3 rounded-full border border-[#1D2939] bg-white text-[#1D2939] font-semibold shadow-md hover:bg-gray-50 transition-all"
                                >
                                    Show more
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Button collapse — muncul setelah expand */}
                    {hasMore && isExpanded && !isLoading && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1D2939] bg-white text-[#1D2939] font-semibold shadow-md hover:bg-gray-50 transition-all"
                            >
                                Show less
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};