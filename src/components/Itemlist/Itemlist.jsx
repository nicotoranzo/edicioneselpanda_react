import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Item from "../Item/Item"

const Itemlist = ({products}) => {
    return(
        <div className='cardgrid'>
            {products.map(prod => <Item key={prod.id}{...prod}/>)}        
        </div>
    )
}

export default Itemlist

