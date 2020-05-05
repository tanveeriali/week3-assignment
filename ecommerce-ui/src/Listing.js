import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Card, Col, Button} from 'react-bootstrap'
import Stars from './Stars';

class Listing extends React.Component{
    static propTypes = {
        bnb: PropTypes.object.isRequired,  
        cartChange: PropTypes.func.isRequired,
        chosen: PropTypes.array.isRequired,
        index: PropTypes.number.isRequired
    }


    render() {
        let cartButton;
        if (this.props.chosen.indexOf(this.props.index) === -1){
            cartButton = <Button className='cart'  onClick={() =>cartChange(this.props.index)}>Buy this Airbnb <FontAwesomeIcon icon={faShoppingCart} /></Button>
        }
        else {
            cartButton = <Button className='cart cancel'  onClick={() =>cartChange(this.props.index)}>Remove from cart <FontAwesomeIcon icon={faShoppingCart} /></Button>

        }

        const bnb = this.props.bnb;
        const cartChange =this.props.cartChange;
        return (
            <Col className='listing' md={12} xs={12}>
            <Card>
            <Card.Body>

            <h2>{bnb.title}</h2>
            <h3>{bnb.houseType}</h3>
            <img src={bnb.image} />
            <h3>{bnb.location.city}, {bnb.location.country}</h3>
            <p>${bnb.payment.cost} <em>{bnb.payment.description}</em></p>
            <Stars num={bnb.rating.stars} reviews={bnb.rating.reviews}/>
            {cartButton}
            </Card.Body>
            </Card>
            </Col>
        )
    }
}

export default Listing;

