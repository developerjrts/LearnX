import axios from "axios";

export const url = axios.create({
    baseURL: "https://learnx-sii0.onrender.com/api",
    withCredentials: true
})