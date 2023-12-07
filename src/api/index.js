import axios from "axios";

export const api_key = 'afe966afd08609b2411eaaa179ba76cd';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})