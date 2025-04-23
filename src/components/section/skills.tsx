import { Container } from "@components/common/container";
import { Tag } from "@components/common/tag";

export const SkillsSection = () => {
    return (
        <section id="skills" className="relative pb-24">
            <Container>
                <div className="container flex flex-col space-y-12 items-center justify-center">
                    <div className="flex flex-row gap-6 max-w-[947px] flex-wrap w-full items-center justify-center">
                        {[1,2,3,4,5,6,7,8].map(() => (
                            <Tag>
                                <span className="text-xl">Cards</span>
                            </Tag>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};