import {createContext} from 'react'

export const CartContext = createContext({});

export const CartProvider = ({ children}) => {
   const teste ="testando"
   
    return <CartContext.Provider>{children}</CartContext.Provider>;     
}

