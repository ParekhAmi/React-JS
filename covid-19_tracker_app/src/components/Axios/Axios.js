import axios from 'axios';

// const url = 'https://covid.mathdro.id/api';

// axios.get(url)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(error => {
//         console.log(error);
//     })

    const instance = axios.create({
        baseURL: 'https://covid.mathdro.id/api'
    });

export default instance;