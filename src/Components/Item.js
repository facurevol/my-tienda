import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({ item }) {
    return (
        <div>
            <Link to={`/producto/${item.id}`}>
                <div key={item.id} className='item-container'>
                    <div className='item-img'>
                        <img src={item.img} alt='Imagen del producto' className='item-img' />
                    </div>
                    <div className='detail-container'>
                        <h6 className='item-categoria'>{item.categoria}</h6>
                        <h4 className='item-title'>{item.title}</h4>
                        <p className='item-price'>$ {item.price}</p>
                    </div>
                </div>
            </Link>
        </div>

    );
}