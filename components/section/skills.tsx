import { Container } from "@components/common/container";
import { Tag } from "@components/common/tag";
import { useQuery } from 'react-query';
import { getSkills } from "@services/profiles";
import type { SkillsSchema } from "modules/types";

export const SkillsSection = () => {
    const querySkills = useQuery(['skills-list'], getSkills);
    const skills = querySkills.data?.data as SkillsSchema || [];

    return (
        <section id="skills" className="relative pt-12">
            <Container>
                <div className="container flex flex-col space-y-12 items-center justify-center">
                    <div className="flex flex-row gap-2 md:gap-6 max-w-[947px] flex-wrap w-full items-center justify-center">
                        {skills.map((item) => (
                            <Tag key={item.id}>
                                {item.skill}
                            </Tag>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};