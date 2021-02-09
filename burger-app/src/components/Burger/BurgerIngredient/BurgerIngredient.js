import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {

        let ingredient = null;
        //console.log('Inside Burger Ingrediant', this.props.type);
        switch (this.props.type) {
            case ('bread-top'):
                ingredient = (
                    <div class="BreadTop">
                        <div class="Seeds1"></div>
                        <div class="Seeds2"></div>
                    </div>);
                break;
            case ('bread-bottom'):
                ingredient =   (<div class="BreadBottom"></div>);
                break;
            case ('cheese'): ingredient = (<div class="Cheese"></div>);
                break;
            case ('meat'): ingredient = (<div class="Meat"></div>);
                break;
            case ('salad'): ingredient = (<div class="Salad"></div>);
                break;
            default:
                ingredient = null;
        }
        console.log('Before Return ' ,ingredient);
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};
export default BurgerIngredient;