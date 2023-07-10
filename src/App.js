import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import FormInput from './components/FormInput';
import ShowProduct from './components/ShowProduct';
import {  useState } from 'react';
// import CartContext from './store/CartContext';
import Cart from './components/Cart';
import CartProvider from './store/CartProvider';

function App() {

  // const cartCtx = useContext(CartContext)
  const [toShowCart, setToShowCart] = useState(false)

  const dummy = [
    {id:'1',name:'Reebok Black',desc:'Black Leather Shoes', price:3499, large:200, medium:200, small:200},
    {id:'2',name:'Reebok White',desc:'White Leather Shoes', price:6499, large:300, medium:300, small:300},
  ]

  const [productArr, setProductArr] = useState(dummy)

  

function addToProductArr(obj)
{
  setProductArr((p) =>{
    return [...p,obj]
  })
}

function changeStatus()
{
  setToShowCart(true)
}

function closeModal()
{
  setToShowCart(false)
}


  return (
    <CartProvider>
      {toShowCart && <Cart close={closeModal}/> }
      <Header changeStatus={changeStatus}/>
      <FormInput addToProductArr={addToProductArr}/>
      <ShowProduct arr={productArr}/>
    </CartProvider>
  );
}

export default App;
