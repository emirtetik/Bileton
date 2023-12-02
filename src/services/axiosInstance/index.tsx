import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface Headers {
  [key: string]: string;
}

interface InstanceProps extends AxiosRequestConfig {
  headers: Headers;
}

const axiosInstance: InstanceProps = {
  baseURL: 'https://event-api-tqwv.onrender.com/api/event/',
  headers: {
    'Content-Type': 'application/json'
  }
};

const instance: AxiosInstance = axios.create(axiosInstance);

export default instance;
