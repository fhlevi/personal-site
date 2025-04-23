// import { Button } from "@components/common/button";
import { Container } from "@components/common/container";
import { ProjectCard } from "@components/project-card";


export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative pt-24 pb-12">
            <Container>
                <div className="container">
                    <div className="flex flex-row items-center justify-between">
                        <div className="text-6xl font-semibold max-w-[643px] leading-20">
                            Lets have a look at my&nbsp;
                            <span className="text-orange-400">Projects</span>
                        </div>
                        {/* <Button className="h-16 w-36 font-bold text-1.5xl" type="button">
                            See All
                        </Button> */}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-[50px]">
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </Container>
        </section>
    );
}