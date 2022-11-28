import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { GlobalStateProvider } from './global/GlobalState';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <GlobalStateProvider>
    <div className="App">
      <Header />
      <Cards />
      <Cart />
      <Footer />
    </div>
    </GlobalStateProvider>
  );
}

export default App;
