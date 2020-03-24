import axios from 'axios'
import {setCookie, getCookie} from "./cookie"

export const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + getCookie['access_token'],
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

