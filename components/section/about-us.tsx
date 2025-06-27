import { Container } from "@components/common/container";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import React, { useState } from 'react';
import { useDevice } from "@hook/use-device";

interface AboutUsProps {
    description: string;
    stats: { value: string; label: string }[];
}

export const AboutUsSection: React.FC<AboutUsProps> = ({ description, stats }) => {
    const { devices } = useDevice();
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const isLongDescription = description.length > 150;
    const displayedDescription = isExpanded || !isLongDescription 
        ? description 
        : `${description.slice(0, 150)}...`;

    return (
        <section id="about-us" className="relative pt-14 pb-10">
            <Container>
                <div className="container items-center px-8 py-8 md:py-[7.63rem] md:px-[4.44rem] bg-[#F2F4F7] min-h-44 rounded-[3.13rem]">
                    <div className="space-y-[2.94rem]">
                        <div className="text-5xl md:text-6xl font-semibold">
                            Why <span className="text-orange-400">Hire me</span>?
                        </div>
                        <div className="text-[1.25rem] w-full text-[#98A2B3]">
                            {devices.mobile ? displayedDescription : description}
                            {isLongDescription && devices.mobile && (
                                <span 
                                className="text-orange-200 cursor-pointer ml-2"
                                onClick={toggleReadMore}
                                >
                                    {isExpanded ? 'Read Less' : 'Read More'}
                                </span>
                            )}
                        </div>
                        {stats.length >= 1 && (
                            <div className="flex flex-row space-x-[10px]">
                                {stats.map((stat, index) => (
                                    <div key={index} className="space-y-[10px] w-full">
                                        <div className="text-4xl font-medium">{stat.value}</div>
                                        <div className="text-xl text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <Link to="contact">
                            <button type="button" className="px-6 py-6 md:px-12 md:py-8 flex flex-row space-x-1 hover:space-x-3 items-center justify-center border border-gray-950 rounded-4xl text-xl cursor-pointer font-bold">
                                <p>Contact Me</p>
                                <ArrowRight size={28} />
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};