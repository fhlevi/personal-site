import { EXPERIENCE } from "@constants/profiles";
import { ExperienceListSchema } from "modules/types";

export const useExperience = () => {
    const experience = EXPERIENCE as ExperienceListSchema

    return experience;
};
