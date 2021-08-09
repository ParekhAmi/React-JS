import axios from 'axios';

    const instance = axios.create({
        baseURL: 'https://covid.mathdro.id/api'
    });

export default instance;