import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './components/NavbarStyle.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbarr';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <main>
        <Navbar/>
        <ItemDetailContainer/>
        <ItemListContainer greeting={"Hola Mundo"} />
      </main>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
