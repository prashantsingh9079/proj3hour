import React,{useState, useEffect} from 'react'
import CartContext from './CartContext'
import axios from 'axios'

export default function CartProvider(props) {

    const [items,setItems]= useState([])
    const url = 'https://crudcrud.com/api/a84fd2f7889e46f080c3758a3637e072/items/'

    useEffect(() =>{
       async function fetchD()
       {
        const res = await axios.get(url);
        const res1 =  res.data
        console.log(res1)
        var ia=[]
        for(let i=0; i<res1.length; i++)
        {
          ia.push(res1[i])
        }
        setItems(ia)
       }

       fetchD();

    },[])

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
