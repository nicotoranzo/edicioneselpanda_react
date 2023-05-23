import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

 
  
  if (totalQuantity()===0){
    return (
        <div>
          <h2>No agregaste nada al carrito</h2>          
          <NavLink to="/">
            <button className='boton m-1'>Volver al inicio</button>
          </NavLink>          
        </div>
    )
  }

  return (
    <div className='m-1'>
       {cart.map(p => <CartItem key={p.id} {...p}/>)}
       <h3>Total: ${total()}</h3>       
       <button className='boton m-1' onClick={()=>clearCart()}>Limpiar Carrito</button>
       <div>        
        <NavLink to="/checkout">
          <button className='boton m-1'>Ir al Checkout</button>
        </NavLink>  
            
       </div>    

    </div>
  )
}

export default Cart