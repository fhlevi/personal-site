import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ExperienceSchema = {
    company: string;
    position: string;
    date: string;
    description: string;
    color: string;
};

export type RoundSchema = {
    orange: string;
    blue: string;
};

export type NavigationSchema = {
    name: string;
    href: string;
    image?: string;
};

export type SocialNetworkSchema = {
    id: string|number
    icon: IconDefinition;
    link: string;
}

export type ExperienceListSchema = ExperienceSchema[];
export type NavigationListSchema = NavigationSchema[];
export type NavigationGroupSchema = NavigationListSchema[];
export type SocialNetworkListSchema = SocialNetworkSchema[];