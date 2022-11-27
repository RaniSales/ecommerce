
import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import CartImg from "../../assets/Cart.png"
import './style.css'

function Header() {

  const {states,setters} = useContext(GlobalContext)
  const {cart} = states
  const {setOpen} = setters


  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <header className="Header">
      
      <div className="logo">
        <h1>MKS</h1><a href="#">Sistemas</a>
      </div>

        <main>
            <img  className="carrinho" src={CartImg}  alt=""  onClick={handleClickOpen} />
            <p>{cart.length}</p>   
        </main>
    </header>
  );
}

export default Header;
