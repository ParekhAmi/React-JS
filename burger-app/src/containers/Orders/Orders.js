import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../components/Layout/axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    
    state = {
        orders: [],
        loading: true,
        total:0
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                console.log(res.data);
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                     });
                }
                let total=0;
                this.setState({loading: false,orders: fetchedOrders});
                this.state.orders.map(key=>{
                    total = total+Number.parseFloat(key.price);
                })
               this.setState({total:total})
            })
            .catch(err => {
                this.setState({loading: false});
            });       
    }
    render() {
        return (
            <div>
                    {this.state.orders.map(order => (
                        
                        <Order
                            key={order.id}
                            ingredients = {order.ingredients}
                            price= {order.price}
                        />
                    ))}
                    Total Amount : {Number.parseFloat(this.state.total).toFixed(2)}         
            </div>
        );
    }
}

export default withErrorHandler(Orders,axios);