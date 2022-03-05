import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';

import Item from './Item';


export default function ItemList({ products }) {
const cart = useContext(CartContext);
console.log(cart);

    return (
        <div className='item-list-container'>
            {
                products.map ( function(product) {
                    return (
                        <Item key={product.id} item={product} />
                    )
                })
            }            
        </div>
    );
}
