export interface ISkill {
    id: string;
    skill: string;
}

export interface IExperience {
    id: string;
    company: string;
    position: string;
    status: string;
    date: string;
    description: string;
}

export interface IProject {
    id: string;
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[] | null;
}
