import React from 'react';
import {Nav,Navbar,FormControl,Button,Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class Navigation extends React.Component{
    render() {
        return (
            <Nav className="mr-auto">
            <Navbar fixed="top" bg="dark" variant="dark">
            <FontAwesomeIcon icon={faHome} color="#fc5158"/>
                 <Navbar.Brand href="#home">Buy an Airbnb</Navbar.Brand>

            </Navbar>
            </Nav>
        )
    }


}