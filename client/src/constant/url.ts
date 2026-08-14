import axios from "axios";

export const url = "https://learnx-sii0.onrender.com/api"

export const api = axios.create({
    baseURL: url,
    withCredentials: true
})