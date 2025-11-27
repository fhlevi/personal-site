import { ExperienceListSchema, SocialNetworkListSchema } from './types';
import { LinkProps } from "react-scroll";

export interface NavigationItemsProps extends LinkProps {
    name?: string; 
    image?: string; 
    menuActive?: string;
}

export interface SocialNetworkProps {
    socialList: SocialNetworkListSchema;
    onOpenLink: (link: string) => void;
}

export interface ProjectDescriptionProps {
    name: string;
    description: string;
}

export interface ProjectCardProps extends ProjectDescriptionProps {
    image: string;
    tags?: string[];
    link?: string;
}

export interface ExperienceSectionProps {
    experience: ExperienceListSchema;
}

export interface ButtonBannerProps {
    name: string;
    children: React.ReactNode;
    onSetActive: (name: string) => void;
    buttonActive: string;
    onClick?: () => void;
    to?: string;
}

export interface UseReadMoreOptions {
    maxLength?: number;
    suffix?: string;
}

export interface UseReadMoreReturn {
    displayedText: string;
    isExpanded: boolean;
    isLongText: boolean;
    toggleExpand: () => void;
}