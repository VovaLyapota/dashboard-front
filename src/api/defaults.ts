import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export const setToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};
