import { HTTPClientNonAuth } from './../utils/http';

const prefixExperience = '/experience';
const prefixSkills = '/skill';
const prefixProjects = '/project';

export const getExperience = () => {
    return HTTPClientNonAuth().get(prefixExperience);
};

export const getProjects = () => {
    return HTTPClientNonAuth().get(prefixProjects);
};

export const getSkills = () => {
    return HTTPClientNonAuth().get(prefixSkills);
};