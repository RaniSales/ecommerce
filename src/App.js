import './App.css';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Carrinho from './Components/Carrinho/Carrinho';

function App() {
  return (
    <div className="App">
      <Header />
    <Cards />
    <Footer />
    <Carrinho />
    </div>
  );
}

export default App;
