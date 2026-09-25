import { HTTPClientNonAuth } from '../utils/http';
import { ISkill, IExperience, IProject } from '../modules/interfaces';

export const getSkills = async (): Promise<ISkill[]> => {
    const response = await HTTPClientNonAuth().get<ISkill[]>('/skill');
    return response.data;
};

export const getExperience = async (): Promise<IExperience[]> => {
    const response = await HTTPClientNonAuth().get<IExperience[]>('/experience');
    return response.data;
};

export const getProjects = async (): Promise<IProject[]> => {
    const response = await HTTPClientNonAuth().get<IProject[]>('/project');
    return response.data;
};
