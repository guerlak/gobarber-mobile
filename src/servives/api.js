import axios from 'axios';

const api = axios.create({
  host: 'http://10.0.2.2',
});

export default api;
