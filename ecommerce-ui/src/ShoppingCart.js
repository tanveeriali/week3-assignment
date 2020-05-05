import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';


export default class ShoppingCart extends React.Component{
    static propTypes = {
        airbnbs: PropTypes.array.isRequired,  
        inCart: PropTypes.array.isRequired,
    }
    
    render() {
        const cartChange =this.props.cartChange;
        const inCart = this.props.inCart
        const airbnbs = this.props.airbnbs
        let inTheCart;
        let order ='';
        if (inCart.length > 0) {
            inTheCart = inCart.map((i) =>  
                <div key={i} class='buying'>
                    <h3>{airbnbs[i].title}</h3>
                    <h4>{airbnbs[i].location.city}, {airbnbs[i].location.country}</h4>
                    <p>${airbnbs[i].payment.cost}</p>
                    <div className='remove' onClick={() =>cartChange(i)}>Remove this Airbnb</div>
                </div>
            )
            order = <Button>Complete Order</Button>
        }
        else {
            inTheCart = "Your cart is empty"
        }
        
        return (
            <div id='shopping'>
                <h2>In your cart</h2>
                {inTheCart}
                {order}
            </div>
        )
    }
}