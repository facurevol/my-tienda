import './ItemList.css';
import Item from './Item';
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ItemList({ productos }) {
const cart = useContext(CartContext);
console.log(cart);


    return (
        <div className='item-list-container'>
            {
                productos.map ( function(producto) {
                    return (
                        <Item key={producto.id} item={producto} />
                    )
                })
            }            
        </div>
    );
}
