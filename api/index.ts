import axios, { AxiosRequestConfig } from "axios";

export const API_URL = 'http://127.0.0.1:8000';
export const API_MEDIA_URL = "http://127.0.0.1:8000/media/";
export const GOOGLE_MAP_API_URL = 'https://maps.googleapis.com/maps/api/'

const $api = axios.create(
    {
        baseURL: API_URL
    }
);

const axiosGoogleMap = axios.create({
    baseURL: GOOGLE_MAP_API_URL
})

// if (localStorage.getItem('access_token')) {
//     $api.interceptors.request.use((config: AxiosRequestConfig | any) => {
//         config.headers.Authorization = "Bearer " + localStorage.getItem('access_token');
//         return config;
//     })
// }

export {axiosGoogleMap};
export default $api