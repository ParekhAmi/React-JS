import React,{ Component } from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state={
        ingredients:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
         }
    }
    render() {
        return (
            <Aux>
                <Burger ingredient={this.state.ingredients} />
                <div>Build controls</div>                
            </Aux>
        );   
    }   
}

export default BurgerBuilder;