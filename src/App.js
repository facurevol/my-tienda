import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemCartContainer from './Components/ItemCartContainer';
import { Route, Routes, Link } from 'react-router-dom';
import CartContextProvider from './context/CartContext';


function App() {

  return (

    <div>
      <CartContextProvider>
        <header>
          <NavBar />
        </header>
        <main>
          <div className='desktop-container'>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting='Objetos especiales que hacen que tus
                espacios sean bellos y únicos.'/>}
              />

              <Route
                path="/categoria/:categoryName"
                element={<ItemListContainer greeting='Categorias' />}
              />
              <Route
                path="/producto/:productId"
                element={<ItemDetailContainer />}
              />

              <Route
                path="/cart"
                element={<ItemCartContainer />}
              />

              <Route
                path="*"
                element={
                  <div className='desktop-container'>
                    <h2>No encontrada!</h2>
                    <Link to="/"> {'<<'} volver al home </Link>
                  </div>}
              />

            </Routes>
          </div>
        </main>
      </CartContextProvider>
    </div>


  );
}


export default App;
