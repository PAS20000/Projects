import axios from "axios";

export const axiosConfig = axios.create({
    baseURL:'https://api.github.com/',
    headers:{
        'Content-Type': 'application/json',
         authorization: process.env.GIT_TOKEN
    }
})