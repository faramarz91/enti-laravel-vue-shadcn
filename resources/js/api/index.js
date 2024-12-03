// src/services/axiosInstance.js

import axios from "axios";
import {useValidationStore} from "@/stores/validation.ts";

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
});
axiosInstance.defaults.baseURL = 'http://localhost'
axiosInstance.defaults.timeout = 10000;
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.withXSRFToken = true;

// Add interceptors to attach tokens to the request, if needed
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    error => {
        if (error.response && error.response.status === 422) {
            // Validation error
            useValidationStore().data = error.response.data;
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
