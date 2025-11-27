import { Container } from "../common/container";
import { SocialNetwork } from "../social-network";
import { FooterNavigation } from "./footer-navigation";
import { FooterContact } from "./footer-contact";
import { FooterSubscription } from "./footer-subcription";
import { openLink } from '@utils/open-link';
import { useDevice } from '@hook/use-device';
import { useContens } from "@hook/use-contents";

export const Footer = () => {
    const { devices } = useDevice();
    const { socialList } = useContens();

    return (
        <footer className="bg-footer w-full min-h-32 rounded-t-3xl">
            <Container>
                <div className="pt-6">
                    <div className="flex flex-row items-center justify-between pt-12 pb-16 border-b-2 border-[#475467]">
                        <div className="text-4xl md:text-6xl font-semibold text-white">Lets Connect there</div>
                    </div>
                    {devices.mobile ? (
                        <div className="py-14 flex flex-col items-start justify-between">
                            <div className="w-auto flex flex-col space-y-7 mb-7 lg:mb-0">
                                <p className="text-xl text-white">
                                    Faisal Fahlevi expertise in web development and attention to detail have significantly enhanced our platform's performance and user experience. Highly recommended
                                </p>
                            </div>
                            <FooterNavigation />
                            <FooterContact />
                            <FooterSubscription />
                            <SocialNetwork socialList={socialList} onOpenLink={openLink} />
                        </div>
                    ) : (
                        <div className="py-14 flex flex-col md:flex-row items-start justify-between">
                            <div className="w-[calc(var(--container-2xl)-37px)] pt-[calc(var(--spacing)*20)] flex flex-col space-y-7">
                                <p className="text-xl text-white">
                                    Faisal Fahlevi expertise in web development and attention to detail have significantly enhanced our platform's performance and user experience. Highly recommended
                                </p>
                                <SocialNetwork socialList={socialList} onOpenLink={openLink} />
                            </div>
                            <FooterNavigation />
                            <FooterContact />
                            <FooterSubscription />
                        </div>
                    )}
                </div>
            </Container>
        </footer>
    );
};