import React from 'react';
import './Order.css';

const order = (props) => {
    
    let total=0;
    const ingredients = [];
    for( let ingredientName in props.ingredients){
        ingredients.push({
                name : ingredientName,
                amount : props.ingredients[ ingredientName]
        });
    }
    
    const ingredientsOutput = ingredients.map(igKey=>{
        
        console.log(total);
        if(igKey.amount!==0)
            return <span> {igKey.name} :({igKey.amount}) </span>
    })
    return(
    <div class="Order">
        <p>Ingredients: {ingredientsOutput}</p>
        <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
    );
 
};

export default order;