import React, {Component} from 'react';
import './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../components/Layout/axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalcode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
          let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        let ODate = date+"/"+month+"/"+year;
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ami Parekh',
                address: {
                    street: 'Iscon 1',
                    zipcode: '388120',
                    country: 'India'
                },
                email: 'ami87@gmail.com'
            },
            deliveryMethod: 'fastest',
            orderDate :  ODate
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.props.history.push("/");
            this.setState({loading: false});
        })
        .catch(error => {
            this.setState({loading: false});
        });
    }
    render() {
        let form = ( 
        <form>
            <input class="Input" type="text" name="name" placeholder="Your Name" />
            <input class="Input" type="email" name="email" placeholder="Your Email" />
            <input class="Input" type="text" name="street" placeholder="Street" />
            <input class="Input" type="text" name="postalcode" placeholder="PostalCode" />
            <Button Name="Button Success" clicked={this.orderHandler}>Order</Button>
        </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return(
            <div class="ContactData">
                <h4>Enter Contact Data</h4>
               {form}
            </div>
        );
    }
}
export default ContactData;