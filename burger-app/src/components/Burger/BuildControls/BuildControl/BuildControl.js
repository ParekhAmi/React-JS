import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (

    <div class="BuildControl">

        <div class="Label">{props.label}</div>
        <div>Price: {props.iprice}</div>
        <button class="Less" disabled={props.disabled} onClick={props.removed}>Less</button>
        <button class="More" onClick={props.added}>More</button>
        Item Count: {props.newItemCount}
        Total Price: {props.newItemCount * props.iprice}


    </div>

);
export default buildControl;

//Stateless function use ()
//Statefull class use {}