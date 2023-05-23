import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
}) 

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [error, setError] = useState(null);

    
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev =>[...prev, {...item, quantity}])
        } else {
            setError("El producto ya fue agregado");
        }
    }

    const clearError = () => {
        setError(null);
      };
    

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) =>{
        return cart.some(prod => prod.id === itemId)
        
    }

    const totalQuantity = () => {
        return cart.reduce((acc,prod) => (acc += prod.quantity),0)

    }

    const total = () => {
        return cart.reduce((acc,prod) => (acc += prod.precio * prod.quantity),0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, totalQuantity, total, error, clearError}}>
            {children}
        </CartContext.Provider>
    )
}