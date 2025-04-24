import { useState, useEffect } from "react";
import { EXPERIENCE } from "src/constants/profiles";
import { IExperienceList } from "src/types/experience";

export const useExperience = (): IExperienceList => {
    const [experience, setExperience] = useState<IExperienceList>([]);

    useEffect(() => {
        setExperience(EXPERIENCE);
    }, []);

    return experience;
};
