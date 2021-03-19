import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://send-whatsapp-message-49578-default-rtdb.firebaseio.com/'
});

export default instance;