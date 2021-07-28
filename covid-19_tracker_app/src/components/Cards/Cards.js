import React from 'react';
import instance from '../Axios/Axios';
import 'Cards.css';

const Cards = () => {
    const basicCounter = instance.get('/confirmed')
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    return (
        <div class="Cards">
            Confirmed {basicCounter}
        </div>
    );
}

export default Cards;