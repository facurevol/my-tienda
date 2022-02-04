

const productos = [
    {
        id: 1,
        title: 'Aromatizante de ambientes',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 400,
        img:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/208/295/products/om3131-ed36638a070df56c7e16425263913320-1024-1024.jpg",
    },
    {
        id: 2,
        title: 'Kit de Hogar II',
        description: 'Conjunto de aromatizantes para el hogar',
        price: 100,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_711515-MLA44965139979_022021-F.webp",
    },
    {
        id: 3,
        title: 'Velas',
        description: 'Es el mejor producto para que puedas limpiar energías del hogar',
        price: 300,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_619594-MLA44085594588_112020-F.webp",
    },
];

const promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(productos);
    }, 2000);
});

function getProductos() {
    return promesa;

}

export {
    getProductos,
}