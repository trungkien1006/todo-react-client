import axios from "axios";
import process from 'process';

const axiosPrivate = axios.create({
    baseURL: "http://localhost:1006/api/v1",
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosPrivate.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// axiosPrivate.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response.data.errors != "token invalid" && error.response.status === 400) {
//             localStorage.removeItem('authToken');

//             window.location.href = '/';
//         }

//         return Promise.reject(error);
//     }
// );
export default axiosPrivate;