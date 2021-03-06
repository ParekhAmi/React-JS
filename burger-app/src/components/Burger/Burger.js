import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import '../Burger/Burger.css';
import { withRouter } from 'react-router-dom';

const burger = (props) => {
    console.log(props);
    let transformIngredient = Object.keys(props.ingredients)
        .map(IgKey => {
            return [...Array(props.ingredients[IgKey])].map((_, i) => {
                return <BurgerIngredient key={IgKey + i} type={IgKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformIngredient.length === 0) {
        transformIngredient = <p>Please adding an Ingrediant to make Burger tasteful.</p>;
    }

    return (
        <div class="Burger">
            <BurgerIngredient type="bread-top" />
            {transformIngredient}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
};

export default withRouter(burger);