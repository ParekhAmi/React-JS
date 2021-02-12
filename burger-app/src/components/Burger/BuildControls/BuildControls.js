import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' }
];

const buildControls = (props) => (

    <div class="BuildControls">
        <p>Current Price : {props.price.toFixed(2)}</p>

        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                disabled={props.disabled[ctrl.type]}
                iprice={props.iprice[ctrl.type]}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                newItemCount={props.newItemCount[ctrl.type]}
            />
        ))}

        <p>totalAllItemPrice: {props.itemPrice.toFixed(2)}</p>

        <button 
        class=".OrderButton"
        disabled={!props.purchasable}>ORDER NOW</button>

    </div>
);

export default buildControls;