import { Container } from "../common/container";
import { Testimonial } from "../common/Testimonial";
import { Rating } from "../common/Rating";
import { Experience } from "../common/Experience";

export const Banner = () => {
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
                                <h1 className="text-[95px] lg:w-4xl text-center font-semibold leading-24 mt-5">I'm <span className="text-orange-400">Levi</span>, <br />Frontend Engineer</h1>
                            </div>
                            <div className="w-full h-full absolute flex items-center justify-between">
                                <Testimonial text="Levi expertise in web development and attention to detail have significantly enhanced our platform's performance and user experience. Highly recommended" />
                                <div className="flex flex-col space-y-5">
                                    <Rating stars={5} />
                                    <Experience years={5} />
                                </div>
                            </div>
                            <div className="absolute w-full bottom-0 items-center justify-center flex">
                                <div className="bg-[#FEB273] w-[50rem] h-[25rem] rounded-t-full"></div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};
