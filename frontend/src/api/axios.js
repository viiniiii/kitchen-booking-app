import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL, 
});

export const fetchKitchens = async () => {
  const response = await api.get('/kitchens');
  return response.data;
};

export default api;
