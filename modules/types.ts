import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type ExperienceSchema = {
    company: string;
    position: string;
    status: string;
    date: string;
    description: string;
    color?: string;
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

export type AboutUsSchema = {
    description: string;
    stats: Array<{
        label: string;
        value: string;
    }>
}

export type ProjectsSchema = {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[]
}

type SkillItemSchema = {
    id: string | number;
    skill: string;
}

export type SkillsSchema = SkillItemSchema[];
export type ProjectListSchema = ProjectsSchema[];
export type ExperienceListSchema = ExperienceSchema[];
export type NavigationListSchema = NavigationSchema[];
export type NavigationGroupSchema = NavigationListSchema[];
export type SocialNetworkListSchema = SocialNetworkSchema[];