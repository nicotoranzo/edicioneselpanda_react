import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';

const Item = ({id, nombre, category,stock,autor, precio, img}) => {
    return (      
        
            <div className='item-principal'> 
                <header >{nombre}</header>
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
                    <NavLink to={`/item/${id}`} className="navlink">Ver detalle</NavLink>
                </footer>
            </div>    

    )
}

export default Item