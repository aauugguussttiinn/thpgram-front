import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: 'http://localhost:3000' });

API.interceptors.request.use(({ headers, ...config }) => ({
    ...config,
    headers: {
        ...headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${headers.Authorization ||  Cookies.get('token')}`,
    },
}));

export default class APIManager {
  static async registerUser(email, password) {
      const response = await API.post('/api/signup', { email, password });
      return response.data;
  }
}