import React, { Component } from 'react';
import Aux from '../../../hoc/Aux1';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';

class OrderSummary extends Component{

    componentWillUpdate(nextProps, nextState){
        console.log('OrderSummary Updated..');
    }
    render(){
        
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}> 
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        });
        return(
                 <Aux>
                                <h3>Your Order</h3>
                                <p>A dellicious burger with the following ingredients...</p>
                                <ul>
                                    {ingredientSummary}
                                </ul>
                                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                                <p>Continue to Checkout?</p>
                                <Button Name="Button Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                                <Button Name="Button Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </Aux>
        )
    }


} 
export default OrderSummary;