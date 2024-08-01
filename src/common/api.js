import axios from "axios";
import {TOKEN_STORAGE_KEY} from "../features/auth/slice/authSlice.js";
import { AppConfig } from "../configs/app-config.js";


export const BASE_URL = AppConfig.BASE_URL;

export const apiInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 900_000,
});

apiInstance.interceptors.request.use((config) => {
    const tokenData = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
    const tokenExists = tokenData && tokenData.access_token;
    if (tokenExists) {
        config.headers.Authorization = `${tokenData.token_type} ${tokenData.access_token}`;
    }
    console.log('Starting Request', JSON.stringify(config, null, 2));
    return config;
});

apiInstance.interceptors.response.use((response) => {
    console.log('Response:', JSON.stringify(response, null, 2));
    return response;
});