import axios from "axios";
import process from 'process';

const axiosPublic = axios.create({
    baseURL: "http://localhost:1006/api/v1",
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosPublic.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosPublic.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosPublic;