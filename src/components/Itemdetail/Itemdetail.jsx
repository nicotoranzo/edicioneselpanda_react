import { NavLink } from 'react-router-dom';
import '../../App.css';
import  Itemcount  from '../Itemcount/Itemcount';

const Itemdetail = ({ id, nombre, category,stock,autor, precio}) => {
  return (
    <div className='principal'>
        <header >{nombre}</header>
        <section>
        <p>{category}</p> 
        <p>Autor: {autor}</p> 
        <p>Cantidad: {stock}</p>
        <p>Precio: ${precio}</p> 
        </section>
        <footer>
          <Itemcount inicial={1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)} />
          <NavLink to={"/category"}>Volver</NavLink>          
        </footer>
        

    </div>
    
  )
}

export default Itemdetail