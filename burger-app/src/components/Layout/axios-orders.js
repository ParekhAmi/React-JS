import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-cbbc3-default-rtdb.firebaseio.com/'
});


export default instance;