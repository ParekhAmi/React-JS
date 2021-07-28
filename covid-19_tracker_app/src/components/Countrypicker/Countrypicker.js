import React, { useState } from 'react';
import './Countrypicker.css';
import axios from 'axios';


const Countrypicker = () => {

    const initialState = [{ name: '---Select country---', code: '---' }];
    const [listCountries, setListCountries] = useState(initialState);


    axios.get('https://covid.mathdro.id/api/countries')
        .then(res => {
            //console.log(res.data.countries);
            setListCountries(res.data.countries);
        })
        .catch(error => {
            console.log(error);
        })

    console.log(listCountries);

    return (

        <div class='Countrypicker'>

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
        </div>

    );
}

export default Countrypicker;