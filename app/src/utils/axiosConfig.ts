import axios from "axios";

export const axiosConfig = axios.create({
    baseURL:'https://api.github.com/',
    headers:{
        'Content-Type': 'application/json',
         authorization: 'token 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' //public repos key
    }
})