import Axios, { AxiosInstance } from 'axios';

const httpClient: AxiosInstance = Axios.create({
  baseURL: 'http://localhost:8080'
});

export { httpClient };
