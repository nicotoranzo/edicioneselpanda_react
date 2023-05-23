import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import Itemlist from "../Itemlist/Itemlist"
import { useState, useEffect } from "react"
import {getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../services/FirebaseConfig";

const Itemlistcontainer = () => {

	const [products, setProducts] = useState([])	

	const {categoryId} = useParams()

	useEffect(() => {
		
		const collectionRef = categoryId
		? query(collection(db, "Productos"), where ("category", "==", categoryId))
		: collection(db, "Productos")

		getDocs(collectionRef)
			.then(response => {
				const productsAdapted = response.docs.map(doc=>{
					const data = doc.data()
					return {id: doc.id,...data}
				})
				setProducts(productsAdapted)
			})
			.catch(error => {
				console.error(error)
			})

	},[categoryId])

	return(
		<div className="container pt-2 mb-3 principal">
			<Itemlist  products={products}/>
		</div>
		
	)

}

export default Itemlistcontainer