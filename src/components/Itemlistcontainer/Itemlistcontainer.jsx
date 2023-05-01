import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import Itemlist from "../Itemlist/Itemlist"
import {getProducts, getProductsByCategory} from "../productos"
import { useState, useEffect } from "react"

const Itemlistcontainer = () => {

	const [products, setProducts] = useState([])	

	const {categoryId} = useParams()

	useEffect(() => {
	
		const asyncFunc = categoryId ? getProductsByCategory : getProducts
		
		asyncFunc(categoryId)
			.then(response => {
				setProducts(response)
			})
			.catch(error => {
				console.error(error)
			})

	},[categoryId])

	return(
		<div className="container principal pt-2 mb-3">
			<Itemlist  products={products}/>	
		</div>
		
	)

}

export default Itemlistcontainer