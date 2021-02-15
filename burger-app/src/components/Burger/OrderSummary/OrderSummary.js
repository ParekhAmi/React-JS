import React from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
        <li key={igKey}> 
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A dellicious burger with the following ingredients...</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button class="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button class="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;