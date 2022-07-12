import Axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const http = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
      }
    : { ...config.headers };

  return Axios({ ...config, baseURL: BASE_URL, headers });
};

export { http };
