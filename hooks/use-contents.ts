import { SOCIAL_NETWORK } from "@constants/networking";
import { EXPERIENCE } from "@constants/profiles";
import { ABOUT } from '@constants/profiles';
import { SKILLS } from '@constants/skills';
import { PROJECTS } from "@constants/projects";

import type { 
    ExperienceListSchema, 
    AboutUsSchema, 
    SkillsSchema, 
    SocialNetworkListSchema, 
    ProjectListSchema
} from "modules/types";

export const useContens = () => {    
    const experiences = EXPERIENCE as ExperienceListSchema;
    const aboutUs = ABOUT as AboutUsSchema;
    const skills = SKILLS as SkillsSchema;
    const socialList = SOCIAL_NETWORK as SocialNetworkListSchema;
    const projects = PROJECTS as ProjectListSchema;

    return {
        experiences,
        aboutUs,
        skills,
        socialList,
        projects
    };
};
