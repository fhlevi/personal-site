import os

file_path = '/Users/macbook/Documents/portfolio/website/personal-app/services/profiles.ts'
content = """import { HTTPClientNonAuth } from '../utils/http';

export const getSkills = async () => {
    const response = await HTTPClientNonAuth().get('/skill');
    return response.data;
};

export const getExperience = async () => {
    const response = await HTTPClientNonAuth().get('/experience');
    return response.data;
};
"""

with open(file_path, 'w') as f:
    f.write(content)
