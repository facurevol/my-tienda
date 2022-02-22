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
        console.log(cart);
        const copia = [...cart];
        copia.forEach((prod) => {
          if (prod.id === id && prod.newItemCount > 0 ) {
            prod.newItemCount += 1;
          }
          console.log(copia);
          sumaTotal();
        });
      };
   

      const restarItem = (id) => {
        console.log(cart);
        const copia = [...cart];
        copia.forEach((prod) => {
          if (prod.id === id && prod.newItemCount > 0 ) {
            prod.newItemCount -= 1;
          }
          console.log(copia);
          sumaTotal();
        });
      };
    
    

    const borrarItem = (id) => {
      setCart(cart.filter((prod) => prod.id !== id));
    };
    
    const [total, setTotal] = useState();
    const sumaTotal = (newItemCount, item) => {
        let count = 0;
    
        cart.forEach((prod) => {
          count = count + prod.price * prod.newItemCount;
        });
        setTotal(count);
        console.log(total);
        return total;
      };

    const vaciarCart = () => {
        setCart([]);
    };

    //console.log(cart);
    return (
    <CartContext.Provider value={{cart, addCart, vaciarCart, borrarItem, sumarItem, restarItem, sumaTotal}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContextProvider