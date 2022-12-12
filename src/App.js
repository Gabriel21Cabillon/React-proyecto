import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './components/NavbarStyle.css';
import ItemListContainer from './components/ItemListContainer';
import { Layout } from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <ItemListContainer />
      </Layout>
        {/* <Footer/> */}
    </div>
  );
}

export default App;
