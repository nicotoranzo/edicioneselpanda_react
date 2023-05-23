import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({nombre, img, precio, quantity, id,}) => {

  const {removeItem} = useContext (CartContext)
  
  return (
    <div className='container principal'>
      <section className='cartitem'>
        <picture>
          <img src={img} alt={nombre} className='img-cartitem m-1'/>
        </picture>    
        <h4>{nombre}</h4>        
        <div>Precio: ${precio}</div>
        <div>Cantidad: {quantity}</div>        
        <div>Subtotal: ${precio*quantity}</div>    
        <button onClick={()=> removeItem(id)} className='boton'>X</button>
      </section>
    </div>
  )
}

export default CartItem