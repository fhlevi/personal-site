import { Testimonial } from "@components/common/testimonial";
import { Container } from "../common/container";
import { Rating } from "@components/common/rating";
import { Experience } from "@components/common/experience";
import React from "react";
import { ButtonBanner } from "@components/button-banner";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

export const Banner = () => {
    const [buttonActive, setButtonActive] = React.useState<string>('contact');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/assets/Faisal Fahlevi-resume.pdf';
        link.download = 'Faisal Fahlevi-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className="blurred-circle"></div>
            <div className="decorative-circle"></div>
            <section id="banner">
                <Container>
                    <div className="container mx-auto px-6">
                        <div className="relative min-h-[52rem] h-full">
                            <div className="absolute top-14 flex flex-col items-center w-full">
                                <div className="px-6 py-3 border border-black rounded-full w-fit">Hello!</div>
                                <h1 className="text-[95px] lg:w-4xl text-center font-semibold leading-24 mt-5">I'm <span className="text-orange-400">Faisal Fahlevi</span>, <br />Frontend Engineer</h1>
                            </div>
                            <div className="w-full h-full absolute flex items-center justify-between">
                                <Testimonial text="Faisal Fahlevi expertise in web development and attention to detail have significantly enhanced our platform's performance and user experience. Highly recommended" />
                                <div className="flex flex-col space-y-5">
                                    <Rating stars={5} />
                                    <Experience years={5} />
                                </div>
                            </div>
                            <div className="absolute w-full bottom-0 items-center justify-center flex">
                                {/* <div className="bg-[#FEB273] w-[50rem] h-[25rem] rounded-t-full"></div> */}
                                <div className="min-w-[367px] min-h-[82px] p-2.5 backdrop-blur-md bg-[#0000007f]/20 rounded-full grid grid-cols-2 items-center justify-center text-xl">
                                    <ButtonBanner 
                                    name="contact" 
                                    to="contact"
                                    buttonActive={buttonActive} 
                                    onSetActive={setButtonActive}>
                                        <span>Contact</span>
                                        <ArrowUpRight size={28} />
                                    </ButtonBanner>
                                    <ButtonBanner 
                                    name="download"
                                    buttonActive={buttonActive} 
                                    onSetActive={setButtonActive}
                                    onClick={handleDownload}>
                                        <span>Download CV</span>
                                        <ArrowDownToLine size={28} />
                                    </ButtonBanner>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};
