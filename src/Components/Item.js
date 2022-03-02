import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    return (
        <div>
            <div key={item.id} className='item-container'>
                <div className='item-img'>
                <Link to={`/producto/${item.id}`}><img src={item.img} alt='Imagen del producto' className='item-img' /></Link>
                </div>
                <div className='detail-container'>
                    <h6 className='item-categoria'>{item.category}</h6>
                    <h4 className='item-title'>{item.title}</h4>
                    <p className='item-price'>$ {item.price}</p>
                    <Link to={`/producto/${item.id}`}><button>Ver detalle</button></Link>
                </div>
            </div>
            
        </div>

    );
}