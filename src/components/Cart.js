import React, { useContext, useEffect } from 'react'
import CartContext from '../store/CartContext'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

export default function Cart(props) {
    // var arr=[{}]
    var arr = []
    const cartCtx = useContext(CartContext)
    var total = 0
    const url = 'https://crudcrud.com/api/a84fd2f7889e46f080c3758a3637e072/items/'
    // var itemsCC = ''
    useEffect(() => {
        axios.get(url).then(res => {
            console.log(res.data)
            
        })
    }, [])

    console.log(cartCtx.items)

    arr = cartCtx.items.map((item) => {
        total += Number(item.price)
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>

            </tr>)
    }
    )

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Size</b></td>
                        <td><b>Price</b></td>
                    </tr>
                    {arr}
                </Modal.Body>

                <Modal.Footer>
                    <b>Total ---- Rs {total}</b>
                    <Button onClick={props.close} variant="secondary">Close</Button>
                    <Button variant="primary">Proceed</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
