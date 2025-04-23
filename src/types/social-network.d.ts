import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type SocialNetwork = {
    id: string|number
    icon: IconDefinition;
    link: string;
}

export type SocialNetworkList = SocialNetwork[];