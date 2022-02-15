import { createContext, useState } from "react";


export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const {cart, setCart} = useState([]);

    const addCart = (newItemCount, item) => {
        console.log(newItemCount, item);
        setCart([...cart, { ...item, newItemCount }]);
    };

    console.log(cart);
    return (
    <CartContext.Provider value={{ cart, addCart }}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContextProvider