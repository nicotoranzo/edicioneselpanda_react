import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';

const Item = ({id, nombre, category,stock,autor, precio}) => {
    return (      
        
            <div className='item-principal'> 
                <header >{nombre}</header>
                <section>
                <p>{category}</p> 
                <p>Autor: {autor}</p> 
                <p>Cantidad: {stock}</p>
                <p>Precio: ${precio}</p> 
                </section>
                <footer>
                    <NavLink to={`/item/${id}`} className="navlink">Ver detalle</NavLink>
                </footer>
            </div>    

    )
}

export default Item