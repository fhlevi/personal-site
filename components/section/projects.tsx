// import { Button } from "@components/common/button";
import { Container } from "@components/common/container";
import { ProjectCard } from "@components/project/project-card";
import { useContens } from "@hook/use-contents";

export const ProjectsSection = () => {
    const { projects } = useContens();

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
                        {projects.map((project, index) => (
                            <ProjectCard 
                                key={index}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                tags={project.tags}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}