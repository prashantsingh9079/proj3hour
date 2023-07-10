import React, { useContext } from 'react'
import {Card, Table, Button} from 'react-bootstrap'
import CartContext from '../store/CartContext'


export default function ShowProduct(props) {

    const cartCtx = useContext(CartContext)

    function largeButtonClicked(e)
    {
        e.preventDefault()
        let nameD = e.target.parentNode.parentNode.children[0].textContent
        let priceD = e.target.parentNode.parentNode.children[2].textContent.split(" ")[1]
        let quantityD = e.target.parentNode.parentNode.children[3].textContent
        const data = {name:nameD,price:priceD,quantity:quantityD,size:'large'}
        cartCtx.addItems(data)
    }

    function mediumButtonClicked(e)
    {
        e.preventDefault()
        let nameD = e.target.parentNode.parentNode.children[0].textContent
        let priceD = e.target.parentNode.parentNode.children[2].textContent.split(" ")[1]
        let quantityD = e.target.parentNode.parentNode.children[3].textContent
        const data = {name:nameD,price:priceD,quantity:quantityD,size:'medium'}
        cartCtx.addItems(data)
    }

    function smallButtonClicked(e)
    {
        e.preventDefault()
        let nameD = e.target.parentNode.parentNode.children[0].textContent
        let priceD = e.target.parentNode.parentNode.children[2].textContent.split(" ")[1]
        let quantityD = e.target.parentNode.parentNode.children[3].textContent
        const data = {name:nameD,price:priceD,quantity:quantityD,size:'small'}
        cartCtx.addItems(data)
    }


const data = props.arr.map((item)=>{
    return (
    <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.desc}</td>
        <td>Rs {item.price}</td>
        <td>{item.large}</td>
        <td>{item.medium}</td>
        <td>{item.small}</td>
        <td><Button onClick={largeButtonClicked}>Buy Large({item.large})</Button></td>
        <td><Button onClick={mediumButtonClicked}>Buy Medium({item.medium})</Button></td>
        <td><Button onClick={smallButtonClicked}>Buy Small({item.small})</Button></td>
    </tr>
    )
})

  return (
    <Card style={{padding:'2rem'}}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Desc</th>
          <th>Price</th>
          <th>Large</th>
          <th>Medium</th>
          <th>Small</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </Table>
    </Card>
  )
}
