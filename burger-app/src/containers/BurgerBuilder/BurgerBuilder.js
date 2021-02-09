import React,{ Component } from 'react';
import Aux from '../../hoc/Aux1';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burger />
                <div>Build controls</div>                
            </Aux>
        );   
    }   
}

export default BurgerBuilder;