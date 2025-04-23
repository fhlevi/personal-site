import { Container } from "./common/container";
import { SendHorizontal } from 'lucide-react';
import { SocialNetwork } from "./social-network";

export const Footer = () => {
    return (
        <footer className="bg-footer w-full min-h-32 rounded-t-3xl">
            <Container>
                <div className="pt-6">
                    <div className="flex flex-row items-center justify-between pt-12 pb-16 border-b-2 border-[#475467]">
                        <div className="text-6xl font-semibold text-white">Lets Connect there</div>
                    </div>
                    <div className="py-14 flex flex-row items-start justify-between">
                        <div className="w-[calc(var(--container-2xl)-37px)] pt-[calc(var(--spacing)*20)] flex flex-col space-y-7">
                            <div className="text-xl text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                            </div>
                            <SocialNetwork />
                        </div>
                        <div className="space-y-7">
                            <div className="text-xl font-semibold text-orange-400">Navigation</div>
                            <div className="flex flex-col space-y-5 text-base text-white">
                                <div>Home</div>
                                <div>Experience</div>
                                <div>About</div>
                                <div>Projects</div>
                                <div>Skills</div>
                            </div>
                        </div>
                        <div className="space-y-7">
                            <div className="text-xl font-semibold text-orange-400">Contact</div>
                            <div className="flex flex-col space-y-5 text-base text-white">
                                <div>fhlevi2804@gmail.com</div>
                                <div>levi.vercel.com</div>
                            </div>
                        </div>
                        <div className="max-w-[19rem] w-full space-y-7">
                            <div className="text-xl font-semibold text-orange-400">Get the latest information</div>
                            <div className="flex flex-row h-[3.19rem] w-full">
                                <input className="h-full w-full bg-white rounded-l-xl px-4 focus:ring-0 focus:outline-0 focus:border-0" placeholder="Email Address" />
                                <button 
                                    type="button" 
                                    aria-label="send-email-footer" 
                                    className="h-full w-12 bg-orange-400 rounded-r-xl items-center justify-center flex">
                                    <SendHorizontal className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}