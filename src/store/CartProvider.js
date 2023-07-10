import React,{useState} from 'react'
import CartContext from './CartContext'
import axios from 'axios'

export default function CartProvider(props) {

    const [items,setItems]= useState([])
    const url = 'https://crudcrud.com/api/f9944aba18e94ed8aabea99f8b133281/items/'

    function addToCart(item)
    {
        axios.post(url,item).then((res) =>{
            console.log(res)
        })
        setItems((p) =>
        {
            const newArr = [...p];
            newArr.push(item)
            return newArr
        }
        )
    }


    const valueToBeGiven = {
        items:items,
        addItems:addToCart,
    }




  return (
    <CartContext.Provider value={valueToBeGiven}>
      {props.children}
    </CartContext.Provider>
  )
}
