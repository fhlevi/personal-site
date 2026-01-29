// import { Button } from "@components/common/button";
import { Container } from "@components/common/container";
import { ProjectCard } from "@components/project/project-card";
import { useQuery } from 'react-query';
import { getProjects } from "@services/profiles";
import type { ProjectListSchema } from "modules/types";

const ProjectCardShimmer = ({ variant = 1 }: { variant?: number }) => {
    const descriptionLines = variant % 2 === 0 ? 2 : 3;
    const tagCount = variant % 3 === 0 ? 2 : 3;

    return (
        <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            {/* Image Shimmer */}
            <div className="w-full h-48 md:h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"
                style={{ backgroundSize: '200% 100%' }}>
            </div>

            {/* Content Shimmer */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <div className="h-7 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded animate-shimmer"
                    style={{
                        backgroundSize: '200% 100%',
                        width: variant % 2 === 0 ? '70%' : '80%'
                    }}>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    {Array.from({ length: descriptionLines }).map((_, i) => (
                        <div
                            key={i}
                            className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded animate-shimmer"
                            style={{
                                backgroundSize: '200% 100%',
                                width: i === descriptionLines - 1 ? '60%' : '100%'
                            }}>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex gap-2 pt-2">
                    {Array.from({ length: tagCount }).map((_, i) => (
                        <div
                            key={i}
                            className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full animate-shimmer"
                            style={{
                                backgroundSize: '200% 100%',
                                width: `${60 + (i * 10)}px`
                            }}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const ProjectsSection = () => {
    const queryProjects = useQuery(['projects-list'], getProjects);
    const projects = queryProjects.data?.data as ProjectListSchema || [];
    const isLoading = queryProjects.isLoading;

    return (
        <section id="projects" className="relative py-14">
            <Container>
                <div className="container">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-5xl md:text-6xl font-semibold max-w-[643px] leading-16 md:leading-20">
                            Lets have a look at my&nbsp;
                            <span className="text-orange-400">Projects</span>
                        </p>
                        {/* <Button className="h-16 w-36 font-bold text-1.5xl" type="button">
                            See All
                        </Button> */}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-[50px]">
                        {isLoading ? (
                            // Loading Shimmer - Show 4 skeleton cards
                            <>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <ProjectCardShimmer key={index} />
                                ))}
                            </>
                        ) : (
                            // Actual Projects
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
                </div>
            </Container>
        </section>
    );
}