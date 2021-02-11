import React, { Component } from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
};


class BurgerBuilder extends Component {    
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            meat: 0,
            bacon: 0
        },
        totalPrice: 4,
        itemCount: 0,
        itemPrice:0
    }

    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const newItemCount = {
            ...this.state.itemCount
        };
        newItemCount[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        const itemOldPrice = this.state.itemPrice;
        const itemNewPrice = itemOldPrice + priceAddition;
     
        this.setState({ totalPrice: newPrice, itemPrice:itemNewPrice, ingredients: updatedIngredients ,itemCount: newItemCount});      

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updateCount;
        const newItemCount = {
            ...this.state.itemCount
        };
         newItemCount[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients, itemCount: newItemCount});
    }



    render() {

        const disableInfo={
                ...this.state.ingredients
        };

        for(let key in disableInfo)
        {
            disableInfo[key] = disableInfo[key]<=0
        }
        return (
            
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler} 
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disableInfo}
                price={this.state.totalPrice}
                iprice ={INGREDIENT_PRICES}  
                newItemCount = {this.state.itemCount} 
                itemPrice = {this.state.itemPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;