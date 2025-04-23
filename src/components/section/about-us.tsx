import { Container } from "@components/common/container";

import ProfileImg from "@assets/images/profiles-picture.jpg";

export const AboutUsSection = () => {
    return (
        <section id="about-us" className="relative mt-36">
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
                        <div className="text-[1.25rem] w-[27.75rem] text-[#344054]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
                        </div>
                        <div className="flex flex-row space-x-[10px]">
                            <div className="space-y-[10px] w-full">
                                <div className="text-4xl font-medium">450+</div>
                                <div className="text-xl text-gray-400">Project Completed</div>
                            </div>
                            <div className="space-y-[10px] w-full">
                                <div className="text-4xl font-medium">450+</div>
                                <div className="text-xl text-gray-400">Project Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};