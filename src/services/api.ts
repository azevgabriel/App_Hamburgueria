import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: 'https://app-hamburgueria.herokuapp.com',
});

api.interceptors.request.use(
    async (config) => {
      
        const token = await AsyncStorage.getItem('@Hamburgueria:TOKEN');
        config.headers.Authorization = (token) ? `Bearer ${token}` : '';
        return config;
    }, (error) => {
    // I cand handle a  with errors here
      return Promise.reject(error);
    },
  );