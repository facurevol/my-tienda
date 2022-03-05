import { createContext, useState, useEffect } from "react";


export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storageData = localStorage.getItem('items');
    return storageData ? JSON.parse(storageData) : [];
});

useEffect(() => {
    window.localStorage.setItem('items', JSON.stringify(cart));
}, [cart]);

    const addCart = (newItemCount, item) => {
      
       if (isOnCart(item.id)) {           
           addQuantity(newItemCount, item);
       } else {
        setCart([...cart, { ...item, newItemCount }]);
       }
    };

    const isOnCart = (id) => {
        const answer = cart.some((prod)=> prod.id === id);
        return answer;
    };

    const addQuantity = (newItemCount, item) => {
        const copy = [...cart];
        copy.forEach((prod) => {
            if (prod.id === item.id){
                prod.newItemCount += newItemCount;
            }
        } )
    };

    const addItem = (id) => {
        const copy = [...cart];
        copy.forEach((prod) => {
          if (prod.id === id && prod.newItemCount > 0 ) {
            prod.newItemCount += 1;
          }
          totalPrice();
        });
      };
   
      const subItem = (id) => {
        const copy = [...cart];
        copy.forEach((prod) => {
          if (prod.id === id && prod.newItemCount > 0 ) {
            prod.newItemCount -= 1;
          }
          totalPrice();
        });
      };
      
    const deleteItem = (id) => {
      setCart(cart.filter((prod) => prod.id !== id));
    };
    
    const [total, setTotal] = useState();
    const totalPrice = () => {
        let count = 0;    
        cart.forEach((prod) => {
          count = count + prod.price * prod.newItemCount;
        });
        setTotal(count);
        return total;
      };

    const deleteCart = () => {
        setCart([]);
    };

    const totalItems = () => {
      return cart.reduce((prev, count) => prev + count.newItemCount, 0);
  };
    return (
    <CartContext.Provider value={{cart, addCart, deleteCart, deleteItem, addItem, subItem, totalPrice, totalItems}}>
        {children}
    </CartContext.Provider>
    );
};

export default CartContextProvider