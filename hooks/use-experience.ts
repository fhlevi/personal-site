import { useState, useEffect } from "react";
import { EXPERIENCE } from "@constants/profiles";
import { ExperienceListSchema } from "modules/types";

export const useExperience = () => {
    const [experience, setExperience] = useState<ExperienceListSchema>([]);

    useEffect(() => {
        setExperience(EXPERIENCE);
    }, []);

    return experience;
};
