import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.22.225.47:3333',
});

export default api;
