/*import './App.css';
import Cards from './Components/Cards/Cards';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Carrinho from './Components/Carrinho/Carrinho';
import Nav from './Components/Carrinho/Nav'
import {useState} from 'react'

function App() {

  const commerce = new Commerce(process.env.REACT_APP_PUBLICKEY_SANDBOX)

  const [cart, setCart] = useState()

  useEffect(() => {
      commerce.cart.retrieve()
          .then(res => {
              setCart(res)
          })
  },[])

  const addToCart = (productId, variantInfo) => {

      if(variantInfo) {
          commerce.cart.add(productId, 1, variantInfo)
              .then(res => {
                  setCart(res.cart)
              })
      } else {
          window.alert('Please Select a Shirt Size')
      }
  }

  const cartHelperFunctions = {

    deleteItem: (lineItemId) => {
        commerce.cart.remove(lineItemId)
            .then(res => {
                setCart(res.cart)
            })
    },
    addQaunity: (lineItemId, newQuanity) => {
        commerce.cart.update(lineItemId, {quantity: newQuanity})
            .then(res => {
                setCart(res.cart)

            })
    },
    subtractQuanity: (lineItemId, newQuanity) => {

        if (newQuanity === 0) {
            cartHelperFunctions.deleteItem(lineItemId)
        } else {
            commerce.cart.update(lineItemId, {quantity: newQuanity})
                .then(res => {
                    setCart(res.cart)
                })
        }

    }
}

  const emptyCart = () => {
    commerce.cart.empty()
        .then(res => {
            setCart(null)
        })
}

  return (
      <div className="App">
          <Nav cart={cart} emptyCart={emptyCart}/>
          <Grid centered stackable padded relaxed>
              <Grid.Column className='left-column' width={5}>
                  <LeftPanel />
              </Grid.Column>
              <Grid.Column width={9}>
                  <ProductContainer 
                      addToCart={addToCart} 
                  />
              </Grid.Column>
          </Grid>
          <Cards />
          <Header/>
          <Carrinho />
          <Footer />
      </div>
);
}



<CartItemsContext.Provider value={cartHelperFunctions}>
    <Nav cart={cart} emptyCart={emptyCart}/>
</CartItemsContext.Provider>*/