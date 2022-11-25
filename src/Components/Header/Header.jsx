import React,{useState} from "react";
import './style.css'


function Header() {
    const [active, setMode] = useState(false);
    const TMode = () => {
      setMode(!active);
    };
    
      return (
        <div>
          <div className="Header">
          <h1>Sistemas</h1>
            <div className={active ? "icon iconActive" : "icon"} onClick={TMode}>
                <div className="hamburguer hamburguerIcon"></div>
            </div>     
          <div className={active ? "menu menuOpen": "menu menuClose"}>
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