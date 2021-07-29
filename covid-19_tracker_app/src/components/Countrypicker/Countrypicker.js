import React, { useState } from 'react';
import './Countrypicker.css';
import axios from '../Axios/Axios';


const Countrypicker = (props) => {

    const initialState = [{ name: '---Select country---', code: '---' }];
    const [listCountries, setListCountries] = useState(initialState);


    axios.get('/countries')
        .then(res => {
            //console.log(res.data.countries);
            setListCountries(listCountries => [...listCountries, res.data.countries]);
        })
        .catch(error => {
            console.log(error);
        })

    //console.log(listCountries);

    return (

        <div className='Countrypicker'>

            {
                <select>
                    {
                        listCountries.map(country => {
                            return (
                                <option value={country.iso3}>{country.name}</option>
                            )
                        })
                    }
                </select>
            }
            {props.children}
        </div>

    );
}

export default Countrypicker;