import { Container } from "@components/common/container";
import { Tag } from "@components/common/tag";
import { useQuery } from 'react-query';
import { getSkills } from "@services/profiles";
import type { SkillsSchema } from "modules/types";
import { ScrollReveal, staggerContainer, popVariant } from "@components/common/scroll-reveal";
import { motion } from "framer-motion";

export const SkillsSection = () => {
    const querySkills = useQuery(['skills-list'], getSkills);
    const skills = querySkills.data?.data as SkillsSchema || [];

    return (
        <section id="skills" className="relative pt-12">
            <Container>
                <div className="container flex flex-col space-y-12 items-center justify-center">
                    <ScrollReveal variants={staggerContainer} isStaggerContainer className="flex flex-row gap-2 md:gap-6 max-w-[947px] flex-wrap w-full items-center justify-center">
                        {skills.map((item) => (
                            <motion.div key={item.id} variants={popVariant}>
                                <Tag>
                                    {item.skill}
                                </Tag>
                            </motion.div>
                        ))}
                    </ScrollReveal>
                </div>
            </Container>
        </section>
    );
};