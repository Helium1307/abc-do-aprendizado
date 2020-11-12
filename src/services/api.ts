import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dicionario-aberto.net/'
})

export default api;