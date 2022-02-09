import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "./ItemCount.js";
import { getProductos } from '../api/api.js';
import ItemList from "./ItemList.js";
import { useParams } from "react-router-dom";

function Item({ greeting }) {
    const [productos, setProductos] = useState([]);
    const {categoriaName} = useParams();

    useEffect(() => {
        getProductos().then(function (productos) {
            console.log(productos);
            if (!categoriaName){
                setProductos (productos);
            } else {
            const productosPorCategoria = productos.filter((producto) => {
                return producto.categoria === categoriaName;
            });

            setProductos(productosPorCategoria);
        }
        });

    }, [categoriaName]);

    function addToCart(ItemCount) {
        console.log(ItemCount);

    };

    return (
        <div className='item-list-container'>
            <div className='container'>
                <h2>Somos Casa Pelgo!!!</h2>
                <p>{greeting}</p>
            </div>
            {productos.length > 0 ? <ItemList productos={productos} /> : <p>Cargando productos...</p>}
            <ItemCount stock={5} initial={1} onAdd={addToCart} />
        </div>
    );
};
export default Item;