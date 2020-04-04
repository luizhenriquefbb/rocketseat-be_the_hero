import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35.238.144.146:3333',
});

export default api;