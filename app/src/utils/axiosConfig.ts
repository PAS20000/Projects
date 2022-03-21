import axios from "axios";

export const axiosConfig = axios.create({
    baseURL:'https://api.github.com/users/',
    headers:{
        'Content-Type': 'application/json',
    }
})