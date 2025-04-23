import { Container } from "@components/common/container";
import { ContactInput } from "@components/contact-input";


export const ContactSection = () => {
    return (
        <section id="contact" className="relative pt-24 pb-12">
            <Container>
                <div className="container">
                    <div className="flex flex-col items-center justify-center space-y-2.5">
                        <div className="text-6xl font-semibold max-w-[799px] text-center leading-20">
                            Have an Awsome Project Idea?&nbsp;
                            <span className="text-orange-400">Let’s Discuss</span>
                        </div>
                        <div className="max-w-[832px] w-full">
                            <ContactInput />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};