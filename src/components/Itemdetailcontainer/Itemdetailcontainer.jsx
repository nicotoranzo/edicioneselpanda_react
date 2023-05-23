import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import Itemdetail from "../Itemdetail/Itemdetail"
import { useParams } from 'react-router-dom'
import {getDoc, doc} from "firebase/firestore"
import { db } from "../../services/FirebaseConfig";

const ItemdetailContainer = () => {
  const [product, setProduct] = useState (null)
  const {itemId} = useParams()

  useEffect(() => {
    const docRef = doc(db, "Productos", itemId)
    
    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productAdapted = {id: response.id,...data}
        setProduct(productAdapted)
      })
      .catch(error => {
        console.log(error)
      })

  },[itemId])

       
  return (
    <div className='container col-3'>
        <Itemdetail {...product} />
    </div>
  )
}

export default ItemdetailContainer