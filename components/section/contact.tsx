import { Container } from "@components/common/container";
import { ContactInput } from "@components/contact-input";

interface ContactSectionProps {
    title?: string;
    highlight?: string;
    ContactInputComponent?: React.ComponentType;
}

export const ContactSection = ({
    title = "Have an Awsome Project Idea?",
    highlight = "Let’s Discuss",
    ContactInputComponent = ContactInput,
}: ContactSectionProps) => {
    return (
        <section id="contact" className="pt-34 pb-12">
            <Container>
                <div className="container">
                    <div className="flex flex-col items-center justify-center space-y-2.5">
                        <div className="text-6xl font-semibold max-w-[799px] text-center leading-20">
                            {title}&nbsp;
                            <span className="text-orange-400">{highlight}</span>
                        </div>
                        <div className="max-w-[832px] w-full">
                            <ContactInputComponent />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};