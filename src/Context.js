import React, { useState } from 'react';
import { createContext } from 'react';

export const Cart = createContext();

export function Context ({children}) {

const [cart,setCart] = useState([])

    return (
        <Cart.Provider value={{cart, setCart}}>
            {children}
        </Cart.Provider>
    )
}

