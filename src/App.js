import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './components/NavbarStyle.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbarr';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <ItemListContainer greeting={"Hola Mundo"} />
      </main>
    </div>
  );
}

export default App;
