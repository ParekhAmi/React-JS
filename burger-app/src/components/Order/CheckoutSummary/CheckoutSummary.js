import React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
const checkoutsummary = (props)=>{
        return(
            <div class="CheckoutSummary">
            <h1> We hope you will Enjoy Burger </h1>
            <div style={{width:'100%' ,  margin:'auto'}}> </div> 
                    <Burger  ingredients={props.ingredients}/>
                    <Button 
                        Name="Button Danger"
                        clicked={props.checkoutCancelled}
                            >CANCLE</Button>
                    <Button 
                        Name="Button Success"
                        clicked={props.checkoutContinued}
                        >
                            CONTINUE</Button>
                    
            </div>
            );

}

export default checkoutsummary;