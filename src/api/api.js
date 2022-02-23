import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';

/*const productos = [
    {
        id: 1,
        title: 'Combo hogar 1',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/hogar-05.jpg",
        categoria: 'hogar',
    },
    {
        id: 2,
        title: 'Vela esfera',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/hogar-06.jpg",
        categoria: 'hogar',
    },
    {
        id: 3,
        title: 'Vela cilindro',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/hogar-07.jpg",
        categoria: 'hogar',
    },
    {
        id: 4,
        title: 'Combo hogar 4',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/hogar-08.jpg",
        categoria: 'hogar',
    },   
    {
        id: 5,
        title: 'Combo aromas 1',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/Aromas-05.jpg",
        categoria: 'aromas',
    },
    {
        id: 6,
        title: 'Combo aromas 2',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/Aromas-06.jpg",
        categoria: 'aromas',
    },
    {
        id: 7,
        title: 'Combo aromas 3',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/Aromas-07.jpg",
        categoria: 'aromas',
    },
    {
        id: 8,
        title: 'Combo aromas 4',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/Aromas-08.jpg",
        categoria: 'aromas',
    },
    {
        id: 9,
        title: 'Combo cocina 1',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/cocina-06.jpg",
        categoria: 'cocina',
    },
    {
        id: 10,
        title: 'Combo cocina 2',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/cocina-07.jpg",
        categoria: 'cocina',
    },
    {
        id: 11,
        title: 'Dispenser',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/cocina-05.jpg",
        categoria: 'cocina',
    },
    {
        id: 12,
        title: 'Botellón de agua',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/cocina-08.jpg",
        categoria: 'cocina',
    },
    {
        id: 13,
        title: 'Combo baño 1',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/limpieza-05.jpg",
        categoria: 'limpieza',
    },
    {
        id: 14,
        title: 'Combo baño 2',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/limpieza-06.jpg",
        categoria: 'limpieza',
    },
    {
        id: 15,
        title: 'Combo baño 3',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/Aromas-08.jpg",
        categoria: 'limpieza',
    },
    {
        id: 16,
        title: 'Combo baño 4',
        description: 'Nuestros aromas están diseñados para adaptarse a las necesidades de tu marca, para que seas vos quien brinde una experiencia única a tus clientes',
        price: 300,
        img: ".././img/limpieza-08.jpg",
        categoria: 'limpieza',
    },
];*/

const promesa = new Promise(function (resolve, reject) {
    /*setTimeout(function () {
        resolve(productos);
    }, 2000);*/

    getDocs(collection(db, 'items'))
    .then(snapshot => {
        const productos = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data() }))
        console.log(productos)
        resolve (productos)
    })
    .catch(error => {
        console.log(error)
        reject(error)
    })



});

function getProductos() {
    return promesa;

}

export {
    getProductos,
}