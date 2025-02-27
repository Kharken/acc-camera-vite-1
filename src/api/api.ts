import {BASE_URL, REQUEST_TIMEOUT} from './const.ts';
import axios, {AxiosInstance} from 'axios';

const createAPI = (): AxiosInstance => (axios.create({
  baseURL: BASE_URL,
  timeout: REQUEST_TIMEOUT,
}));

export { createAPI };
