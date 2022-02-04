import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Objetos especiales que hacen que tus
                espacios sean bellos y únicos.'/>
      <ItemDetailContainer />
    </div>
  );
}

export default App;
