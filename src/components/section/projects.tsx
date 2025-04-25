// import { Button } from "@components/common/button";
import { Container } from "@components/common/container";
import { ProjectCard } from "@components/project-card";

import NetflixImg from "@assets/images/netflix.png";


export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative py-14">
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
                        {[...Array(4)].map((_, index) => (
                            <ProjectCard 
                                key={index}
                                name="Project Name" 
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis lacus nunc, posuere in justo vulputate, bibendum sodales
                                ligula. Donec in nunc id enim efficitur facilisis.
                                ligula. Donec in nunc id enim efficitur facilisis."
                                image=""
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}