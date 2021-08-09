import React, { useState } from 'react';
import axios from '../Axios/Axios';
import './Cards.css';

const Cards = () => {

    const initialState = [{ provinceState: '---Select State---', code: '---', countryRegion: '---' }];
    const [dataValue, setDataValue] = useState(initialState);

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
            let updatedData = res.data;
            setDataValue(dataValue => [...dataValue, ...updatedData]);
        })
        .catch(error => {
            console.log(error);
        })

    //console.log(dataValue);

    // axios.get('/recovered')
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })

    //         axios.get('/deaths')  
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })
    //                 .catch(error => {
    //                     console.log(error);
    //                 })    
    return (
        <div class="Cards">
            {
                <select class='Cards'>
                    {
                        dataValue.map(oneStateData => {

                            return (
                                <option value={oneStateData.countryRegion}>{oneStateData.provinceState}</option>
                            )
                        })
                    }
                </select>
            }
            <div class="Confirmed">
                Confirmed
            </div>
            <div class="Recovered">
                Recovered
            </div>
            <div class="Deaths">
                Deaths
            </div>

        </div>
    );
}

export default Cards;