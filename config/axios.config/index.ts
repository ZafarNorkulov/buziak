import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { ResponseError } from "./error";
import Cookies from "js-cookie";

const instance = axios.create();

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  if (config.headers) {
    config.headers.Accept = "application/json";
  }

  const access_token = localStorage.getItem("access_token");

  if (access_token && !config.url?.includes("/register")) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  return config;
};

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
  console.error("Request Error:", error);
  return Promise.reject(new ResponseError(error));
};

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response?.status === 403) {
    console.warn("403 Forbidden - Access Denied");
  }

  if (error.response?.status === 401) {
    console.warn("401 Unauthorized - Clearing tokens...");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    Cookies.remove("access_token");
  }

  return Promise.reject(new ResponseError(error));
};

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;
