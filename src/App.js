import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (

    <div>
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
              path="/categoria/:categoriaName"
              element={<ItemListContainer greeting='Categorias' />}
            />
            <Route
              path="/producto/:productoId"
              element={<ItemDetailContainer />}
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
    </div>

  );
}

export default App;
