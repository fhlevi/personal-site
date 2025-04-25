import { Container } from "@components/common/container";

import ProfileImg from "@assets/images/profiles-picture.jpg";

interface AboutUsProps {
    description: string;
    stats: { value: string; label: string }[];
}

export const AboutUsSection = ({ description, stats }: AboutUsProps) => {
    return (
        <section id="about-us" className="relative pt-14 pb-10">
            <Container>
                <div className="container grid grid-cols-2 items-center py-[7.63rem] px-[4.44rem] bg-[#F2F4F7] min-h-44 rounded-[3.13rem]">
                    <img 
                        src={ProfileImg}
                        alt="profile-image" 
                        loading="lazy" 
                        className="rounded-6xl w-[90%]"
                    />
                    <div className="space-y-[2.94rem]">
                        <div className="text-[4rem] font-semibold">
                            Why <span className="text-orange-400">Hire me</span>?
                        </div>
                        <div className="text-[1.25rem] w-[27.75rem] text-[#98A2B3]">
                            {description}
                        </div>
                        <div className="flex flex-row space-x-[10px]">
                            {stats.map((stat, index) => (
                                <div key={index} className="space-y-[10px] w-full">
                                    <div className="text-4xl font-medium">{stat.value}</div>
                                    <div className="text-xl text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};