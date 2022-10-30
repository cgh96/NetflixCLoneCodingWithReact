import axios from 'axios';

export const BASE_URL = "https://api.themoviedb.org/3";
export const POSTER_URL = "https://image.tmdb.org/t/p/original";
export const API_KEY = "7a2ff151953c7c5d8c726df5e662e936";

export const client = axios.create({
    baseURL: BASE_URL,
});