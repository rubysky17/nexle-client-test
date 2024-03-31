import axios from "axios";
import { ACCESSTOKEN } from "../redux/constants/auth";

const API_URL = process.env.REACT_APP_URL_API;


export const instanceAxios = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: {}
});

instanceAxios.interceptors.request.use(
    (config) => {
        const getTokenFromStore: string | null = localStorage.getItem(ACCESSTOKEN)
        const TOKEN: any = getTokenFromStore ? JSON.parse(getTokenFromStore) : ""

        if (TOKEN) {
            config.headers.Authorization = `Bearer ${TOKEN}`; // Config Headers
        }

        return config;
    },
    (error) => {
        // console.log("request error", error);
        return Promise.reject(error);
    }
);
