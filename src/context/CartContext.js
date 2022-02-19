import { createContext, useState } from "react";


export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCart = (newItemCount, item) => {
       // console.log(newItemCount, item);
       if (isOnCart(item.id)) {
           //alert('Estas sumando unidades del item en el carrito');
           sumarCantidad (newItemCount, item);
       } else {
        setCart([...cart, { ...item, newItemCount }]);
       }
    };

    const isOnCart = (id) => {
        const respuesta = cart.some((prod)=> prod.id === id);
        return respuesta;
    };

    const sumarCantidad = (newItemCount, item) => {
        const copia = [...cart];
        copia.forEach((prod) => {
            if (prod.id === item.id){
                prod.newItemCount += newItemCount;
            }
        } )
    };

   
   
    
    const sumarItem = (id) => {
    
            cart.forEach((prod) => {
                if (prod.id === id){
                    prod.newItemCount += 1;
                }
        })
    }
    
    const restarItem = () => {
    
        cart.forEach((prod) => {
            if (prod.newItemCount > 0){
                prod.newItemCount -= 1;
            }
    })
}
       
    
    
    const borrarItem = (id) => {
        setCart (cart.filter((prod) => prod.id !== id));
    
    }
    
    const sumaTotal = () => {
        let count = 0
        cart.forEach((prod)=> {
            count = count + prod.price * prod.newItemCount
        })
        return count
    }  

    const vaciarCart = () => {
        setCart([]);
    }

    //console.log(cart);
    return (
    <CartContext.Provider value={{cart, addCart, vaciarCart, borrarItem, sumarItem, restarItem, sumaTotal, sumarCantidad}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContextProvider