import { Container } from "@components/common/container";
import { Tag } from "@components/common/tag";

interface SkillsSectionProps {
    skills: string[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
    return (
        <section id="skills" className="relative pt-12">
            <Container>
                <div className="container flex flex-col space-y-12 items-center justify-center">
                    <div className="flex flex-row gap-6 max-w-[947px] flex-wrap w-full items-center justify-center">
                        {skills.map((skill, index) => (
                            <Tag key={index}>
                                <span className="text-xl">{skill}</span>
                            </Tag>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};