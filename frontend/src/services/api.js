import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.223.223.97:3333',
});

export default api;