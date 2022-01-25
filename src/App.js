import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Objetos especiales que hacen que tus
                espacios sean bellos y únicos.'/>
    </div>
  );
}

export default App;
