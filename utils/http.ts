import axios, { AxiosInstance } from 'axios';

export const HTTPClientNonAuth = (): AxiosInstance => {
    return axios.create({
        baseURL: import.meta.env.VITE_PUBLIC_API_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
