import { GlobalContext } from './GlobalContext'
import React, { useEffect, useState} from 'react'

export const GlobalStateProvider = (props) => {

    const [open, setOpen] = React.useState(false);

    //objeto user
    const [user, setUser] = useState({});

    // produtos no carrinho
    const [cart, setCart] = useState([]);

    // info pedido criado
    const [order, setOrder] = useState({})

    // info filtro
    const [filter, setFilter] = useState("")

    useEffect(()=>{
        const cartLocal = window.localStorage.getItem('cart')
        cartLocal && setCart(JSON.parse(cartLocal))
    },[])
    
    let states = {user, cart, order, filter,open}; 
    let setters = {setUser, setCart, setOrder, setFilter,setOpen}
    
    return (
        <GlobalContext.Provider value = {{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}



