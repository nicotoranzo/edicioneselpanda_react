import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { getProductById } from '../productos'
import Itemdetail from "../Itemdetail/Itemdetail"
import { useParams } from 'react-router-dom'

const ItemdetailContainer = () => {
  const [product, setProduct] = useState (null)

  const { itemId} = useParams()

  useEffect(() => {

    getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
  }, [itemId])
       
  return (
    <div className='container col-3'>
        <Itemdetail {...product} />
    </div>
  )
}

export default ItemdetailContainer