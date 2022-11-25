import React, { useState } from "react";
import './style.css'
import Cart from "../../assets/Cart.png"


function Header() {
  const [active, setMode] = useState(false);
  const TMode = () => {
    setMode(!active);
  };

  return (
    <div className="Header">
      <div>
         <a href="#">Sistemas</a>
      </div>
      <div>
        <img className="carrinho" src={Cart} />
        <div className={active ? "menu menuOpen" : "menu menuClose"}>
          <div className="List">
            <ul className="ListItems">
              <li>um</li>
              <li>dois</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}


export default Header;
