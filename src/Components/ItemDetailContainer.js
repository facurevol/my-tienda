import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProductos } from "../api/api.js";
import ItemDetail from "./ItemDetail.js";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';



export default function ItemDetailContainer () {
    const [productos, setDetail] = useState([]);
    const { productoId } = useParams();
        
   /*useEffect(() => {
        getProductos().then((productos) => {
            const producto = productos.find ((p) => p.id === parseInt (productoId));
            setDetail(producto);            
        }).catch((error) => {
            console.log (error);
        });

    }, [productoId]);*/

    useEffect (() => {

        const productoRef = doc(db, 'items', productoId)
        
        getDoc(productoRef)
        .then((snapshot) => {

            if(snapshot.exists()) {
                setDetail({ id: snapshot.id, ...snapshot.data()})
            }
            /*const productos = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
            console.log(productos)*/
        })
        .catch(error => {
            console.log(error)
        })

    }, [productoId]);

    return (
        <div>        
        <ItemDetail key={productos.id} item={productos} /> 
        </div>
    )


}