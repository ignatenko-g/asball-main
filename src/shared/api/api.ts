import axios from 'axios';
import { API_URL } from '../config/apiConfig';

export const api = axios.create({
  baseURL: API_URL,
});
