import { localStorageKeys } from '@/shared/constant';
import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://localhost:8080',
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
