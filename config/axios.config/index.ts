import axios, { InternalAxiosRequestConfig } from "axios";

const instance = axios.create();

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  return config;
};

instance.interceptors.request.use(onRequest);

export default instance;
