import { Container } from "@components/common/container";
import { Tag } from "@components/common/tag";
import { useContens } from "@hook/use-contents";

export const SkillsSection = () => {
    const { skills } = useContens();
    
    return (
        <section id="skills" className="relative pt-12">
            <Container>
                <div className="container flex flex-col space-y-12 items-center justify-center">
                    <div className="flex flex-row gap-2 md:gap-6 max-w-[947px] flex-wrap w-full items-center justify-center">
                        {skills.map((skill, index) => (
                            <Tag key={index}>
                                {skill}
                            </Tag>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};