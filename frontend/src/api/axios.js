import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchKitchens = async () => {
  const response = await api.get('/kitchens');
  return response.data;
};

export default api;
