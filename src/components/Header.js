import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import CartContext from '../store/CartContext';

export default function Header(props) {

    const cartCtx = useContext(CartContext)

    var number = 0;
    number = cartCtx.items.length

    return (
        <div>
            <Navbar className="bg-body-tertiary" >
                <Container>
                    <Navbar.Brand >Shoe Store</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Button onClick={props.changeStatus}>Cart ({number})</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

}
