import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import  Itemcount  from '../Itemcount/Itemcount';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const Itemdetail = ({ id,nombre, category,stock,autor, precio, img}) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem, error, clearError} = useContext(CartContext)
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    const item = {
      id,nombre,precio,img
    }
    addItem(item,quantity)
  }

  
  const navigate = useNavigate()

  return (
    <div className='principal'>
        <h5>{nombre}</h5>
        <picture>
          <img src={img} alt={nombre} className='img-item m-1'/>
        </picture>  
        <section className='m-1'>
        <p>{category}</p> 
        <p>Autor: {autor}</p> 
        <p>Cantidad: {stock}</p>
        <p>Precio: ${precio}</p>     
        </section>
        <footer>
          {
            quantityAdded > 0 ? (
              <div>
                <NavLink to="/Cart">
                  <button className='boton m-1'>Terminar compra</button>                  
                </NavLink>
              </div>
              
            ) : (
              <Itemcount inicial={1} stock={stock} onAdd={handleOnAdd}/>
            )
          }
          <div>        
            {error && (
              <div>
                <p>{error}</p>
                <button className='boton m-1' onClick={clearError}>Cerrar</button>
              </div>
            )}
          </div>
          <NavLink onClick={()=>navigate(-1)}>
            <button className='boton m-1'>Volver</button>  
          </NavLink>          
        </footer>     

    </div>
    
  )
}

export default Itemdetail