import { Container } from "../common/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

export const Banner = () => {
    return (
        <>
            <div className="blurred-circle"></div>
            <div className="decorative-circle"></div>
            <section id="banner">
                <Container>
                    <div className="relative min-h-[52rem] h-full">
                        <div className="absolute top-14 flex flex-col items-center w-full">
                            <div className="px-6 py-3 border border-black rounded-full w-fit">Hello!</div>
                            <h1 className="text-[95px] lg:w-4xl text-center font-semibold leading-24 mt-5">I'm <span className="text-orange-400">Levi</span>, <br />Frontend Engineer</h1>
                        </div>
                        <div className="w-full h-full absolute flex items-center justify-between">
                            <div className="flex flex-col space-y-7 items-start justify-start">
                                <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl" />
                                <p className="w-[20.5rem]">Jenny’s Exceptional product design ensure our website’s success. Highly Recommended</p>
                            </div>
                            <div className="flex flex-col space-y-5">
                                <div className="flex flex-row w-40 items-end justify-end">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon icon={faStar} className="text-[27px] h-8 text-orange-400" key={index} />
                                    ))}
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <div className="text-[47px] font-bold">5 Years</div>
                                    <div className="text-xl text-right">Experience</div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-full bottom-0 items-center justify-center flex">
                            <div className="bg-[#FEB273] w-[50rem] h-[25rem] rounded-t-full"></div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};
