import React from 'react';
import axios from '../Axios/Axios';
import './Cards.css';

const Cards = () => {


    // let one = "https://covid19.mathdro.id/api/confirmed";
    // let two = "https://covid19.mathdro.id/api/recovered";
    // let three = "https://covid19.mathdro.id/api/deaths";


    // const requestOne = axios.get(one);
    // const requestTwo = axios.get(two);
    // const requestThree = axios.get(three);

    // axios.all([requestOne,requestTwo,requestThree])
    //     .then(axios.spread((...responses) => {
    //         const responseOne = responses[0]
    //         const responseTwo = responses[1]
    //         const responseThree = responses[2]

    //         console.log(responseOne,responseTwo,responseThree);
        
    //     }))
    //     .catch(error => {
    //         console.log(error);
    //     })

        
        

    axios.get('/confirmed')  
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })

            axios.get('/recovered')
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })

                    axios.get('/deaths')  
                            .then(res => {
                                console.log(res.data);
                            })
                            .catch(error => {
                                console.log(error);
                            })    
    return (
        <div class="Cards">
            <div class="Confirmed">

            </div>
            <div class="Recovered">

            </div>
            <div class="Deaths">
                
            </div>
        </div>
    );
}

export default Cards;