import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Itemcount = ({stock, inicial, onAdd}) => {

  const [quantity, setQuantity] = useState(inicial)
  
  const increment = () => {
    if(quantity < stock) {
        setQuantity(quantity+1)
    }
  }
  
  const decrement = () => {
    if(quantity > 1) {
        setQuantity(quantity-1)
    }
  }

  return (
    <div className='container mb-3'>
      <div className='row'>
        <div className="d-flex justify-content-center mb-3">
          <button className="boton m-1" onClick={decrement}>-</button>
          <div className="m-1">{quantity}</div>
          <button className="boton m-1" onClick={increment}>+</button>
        </div>
      </div>
      <div>
        <button className="boton" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default Itemcount