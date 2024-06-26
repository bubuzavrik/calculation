import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

import { getAccessToken, resetAccessToken } from '../utils/auth';

function createHttpClient(endPoint = ''): AxiosInstance {
  const instance = axios.create({
    baseURL: `${process.env.REACT_APP_APP_URL}${endPoint}`,
    timeout: 0,
  } as CreateAxiosDefaults);

  instance.interceptors.request.use((config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(null, function axiosRetryInterceptor(err) {
    if (err.response.status === 401) {
      resetAccessToken();
    }
    return Promise.reject(err);
  });

  return instance;
}

export const httpApiClient = createHttpClient('/');
