import axios from "axios";

export const api = axios.create({
    baseURL: 'https://app-hamburgueria.herokuapp.com',
});