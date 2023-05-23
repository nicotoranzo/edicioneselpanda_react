import { useContext } from 'react';
import Cart from './assets/cart.svg';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

export const CartWidget = () => {
	const {totalQuantity} = useContext(CartContext)
	
	return(
		<NavLink to="/cart">
			<img src={Cart} alt="cart-widget"/>
			{totalQuantity()}
		</NavLink>
	)
}