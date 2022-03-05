import React, { useEffect, useState } from "react";

import { getProducts } from '../api/api.js';
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';

import "./ItemListContainer.css";
import ItemList from "./ItemList.js";


function Item({ greeting }) {
    const [products, setProducts] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        getProducts().then(function (products) {
            console.log(products);
            if (!categoryName) {
                setProducts(products);
            } else {
                const categoryProducts = products.filter((product) => {
                    return product.category === categoryName;
                });

                setProducts(categoryProducts);
            }
        });

        getDocs(collection(db, 'items'))
            .then(snapshot => {
                const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                console.log(products)
            })
            .catch(error => {
                console.log(error);
            });

    }, [categoryName]);

    return (
        <div>
            <div className='container'>
                <h2>Tienda Casa Pelgo</h2>
                <h3>Decorando tu hogar de forma simple, canchera y sustentable</h3>
                <p>{greeting}</p>
            </div>
            {products.length > 0 ? <ItemList products={products} /> : <p>Cargando productos...</p>}
        </div>
    );
};
export default Item;