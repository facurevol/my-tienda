import "./ItemDetailContainer.css"

export default function ItemDetail({ item }) {
    return (

        <div key={item.id} className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className='card-title'>{item.title}</h4>
                        <p className='card-text'>{item.description}</p>
                        <p className='card-price'>$ {item.price}</p>
                    </div>
                    <div className="card-footer">
                        <a href="!#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        </div>



    );
}