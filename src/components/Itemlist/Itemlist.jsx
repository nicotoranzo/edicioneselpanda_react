import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "../Item/Item"

const Itemlist = ({products}) => {
    return(
        <div className='container'>
            <div className='col-12 col-md-6 pt-2 mb-3 d-flex'>
                {products.map(prod => <Item key={prod.id}{...prod}/>)}            
            </div>
        </div>

    )
}

export default Itemlist

