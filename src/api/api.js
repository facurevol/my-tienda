import { getDocs, collection } from "firebase/firestore";
import { db } from '../firebase';

const promise = new Promise(function (resolve, reject) {

    getDocs(collection(db, 'items'))
        .then(snapshot => {
            const products = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            console.log(products)
            resolve(products)
        })
        .catch(error => {
            console.log(error)
            reject(error)
        })
});

function getProducts() {
    return promise;
}

export {
    getProducts,
}