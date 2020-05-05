import React from 'react';
import airbnbs from './airbnbs.json';
import Listing from './Listing';
import Navigation from './Navigation';
import ShoppingCart from './ShoppingCart';
import {Container, Row,Col} from 'react-bootstrap'


class Places extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chosen: []
        }
        
    }
    cartChange = (i) => {
        let index = this.state.chosen.indexOf(i)
        if (index === -1) {
            this.setState({
                chosen: [...this.state.chosen, i]
            })
        }
        else {
            const chosenArray = this.state.chosen.filter((c,num) => {
                if (c !== i) {
                    return c
                }
            })
            this.setState({
                chosen: chosenArray
            })
        }
    }
    render() {
       return (
        <>
        <Navigation />
        <Container id='places' fluid>
            <Row>
                <Col md={9} xs={12} >
                    {airbnbs.map((bnb,i) =>  
                        <Listing bnb={bnb} key={i} index={i} chosen={this.state.chosen} cartChange={this.cartChange}/>
                    )}
                </Col>
                <Col md={3} xs={12}>
                    <ShoppingCart inCart={this.state.chosen} airbnbs={airbnbs} cartChange={this.cartChange}/>
                </Col>
                </Row>
           </Container>
           </>
        )
    }
}

export default Places;