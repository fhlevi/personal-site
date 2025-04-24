import { Container } from "./common/container";
import { SocialNetwork } from "./social-network";
import { FooterNavigation } from "./footer-navigation";
import { FooterContact } from "./footer-contact";
import { FooterSubscription } from "./footer-subscription";
import { useSocialNetwork } from '@hook/use-social-network';
import { openLink } from '@utils/open-link';

export const Footer = () => {
    const socialList = useSocialNetwork();

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
                            <SocialNetwork socialList={socialList} onOpenLink={openLink} />
                        </div>
                        <FooterNavigation />
                        <FooterContact />
                        <FooterSubscription />
                    </div>
                </div>
            </Container>
        </footer>
    );
};