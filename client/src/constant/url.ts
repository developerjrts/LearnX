import axios from "axios";

export const url = "https://learnx-sii0.onrender.com/api"
// export const url = "http://localhost:5000/api"

export const api = axios.create({
    baseURL: url,
    withCredentials: true
})