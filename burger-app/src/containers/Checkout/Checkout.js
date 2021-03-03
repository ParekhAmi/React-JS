import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component{

    state={
            ingredients:{
            salad:1,
            cheese:1,
            meat:0,
            bacon:2
        }
    };

    componentDidMount(){
        console.log('Compnent Mounted...');
        const query = new URLSearchParams(this.props.location.search);
        // console.log(this.props.location.search);
        console.log('Query',query.entries());
        const ingredients={};
        for(let param in query.entries()){
            console.log(param[0]);
            ingredients[param[0]]= +param[1];
        //     console.log(param[1]);
         }
         this.setState({ingredients:ingredients})
    }
    checkoutContinuedHandler=()=>{
        this.props.history.replace('/checkout/contact-data');
    }
    checkoutCancelledHandler=()=>{
        this.props.history.goBack();
    }

    render(){
        return(
                <div>
                    <CheckoutSummary 
                        ingredients={this.state.ingredients} 
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinuedHandler}
                        />
                </div>

        );
    }
}

export default Checkout;