import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4200/api';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const AuthService = {

    async login(email: string, password: string) {

        return axios.post('auth/login', { email, password });

    },

    async register(email: string, password: string) {

        return axios.post('auth/register', { email, password });

    },

};
