import { useState } from "react";
import clsx from "clsx";
import { Container } from "@components/common/container";
import { ProjectCard } from "@components/project/project-card";
import { useQuery } from 'react-query';
import { getProjects } from "@services/profiles";
import type { ProjectListSchema } from "modules/types";

const INITIAL_SHOW = 4; // tampilkan 4 project pertama (2 baris di desktop)

const ProjectCardShimmer = ({ variant = 1 }: { variant?: number }) => {
    const descriptionLines = variant % 2 === 0 ? 2 : 3;
    const tagCount = variant % 3 === 0 ? 2 : 3;

    return (
        <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            <div className="w-full h-48 md:h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"
                style={{ backgroundSize: '200% 100%' }}>
            </div>
            <div className="p-6 space-y-4">
                <div className="h-7 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded animate-shimmer"
                    style={{ backgroundSize: '200% 100%', width: variant % 2 === 0 ? '70%' : '80%' }}>
                </div>
                <div className="space-y-2">
                    {Array.from({ length: descriptionLines }).map((_, i) => (
                        <div key={i}
                            className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded animate-shimmer"
                            style={{ backgroundSize: '200% 100%', width: i === descriptionLines - 1 ? '60%' : '100%' }}>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 pt-2">
                    {Array.from({ length: tagCount }).map((_, i) => (
                        <div key={i}
                            className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full animate-shimmer"
                            style={{ backgroundSize: '200% 100%', width: `${60 + (i * 10)}px` }}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const queryProjects = useQuery(['projects-list'], getProjects);
    const projects = queryProjects.data?.data as ProjectListSchema || [];
    const isLoading = queryProjects.isLoading;

    const hasMore = projects.length > INITIAL_SHOW;

    return (
        <section id="projects" className="relative py-14">
            <Container>
                <div className="container">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-5xl md:text-6xl font-semibold max-w-[643px] leading-16 md:leading-20">
                            Lets have a look at my&nbsp;
                            <span className="text-orange-400">Projects</span>
                        </p>
                    </div>

                    {/* Grid Wrapper */}
                    <div className="relative mt-[50px]">
                        <div
                            className={clsx(
                                "grid md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500",
                                !isExpanded && hasMore && "max-h-[760px]" // sesuaikan dengan tinggi 2 baris card
                            )}
                        >
                            {isLoading ? (
                                <>
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <ProjectCardShimmer key={index} variant={index + 1} />
                                    ))}
                                </>
                            ) : (
                                projects.map((project, index) => (
                                    <ProjectCard
                                        key={index}
                                        name={project.name}
                                        description={project.description}
                                        image={project.image}
                                        tags={project.tags}
                                        link={project.link}
                                    />
                                ))
                            )}
                        </div>

                        {/* Gradient Overlay + Show More Button */}
                        {hasMore && !isExpanded && !isLoading && (
                            <div
                                className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end pt-32 z-10"
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

                    {/* Show Less Button */}
                    {hasMore && isExpanded && !isLoading && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1D2939] bg-white text-[#1D2939] font-semibold shadow-md hover:bg-gray-50 transition-all"
                            >
                                Show less
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}