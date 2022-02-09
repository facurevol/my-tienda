import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../api/api.js";
import ItemDetail from "./ItemDetail.js";


export default function ItemDetailContainer () {
    const [productos, setDetail] = useState([]);
    const { productoId } = useParams();
        
    useEffect(() => {
        getProductos().then((productos) => {
            const producto = productos.find ((p) => p.id === parseInt (productoId));
            setDetail(producto);            
        }).catch((error) => {
            console.log (error);
        });

    }, [productoId]);

    return (
        <div>        
        <ItemDetail key={productos.id} item={productos} /> 
        </div>
    )


}