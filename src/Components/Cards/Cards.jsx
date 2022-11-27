import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { MainContainer, CardContainer, ContainerProdutos } from "./style";
import { GlobalContext } from "../../global/GlobalContext";
import { Container } from "@mui/system";

export default function Cards() {
  const [produtos, setProdutos] = useState([]);
  const {states,setters} = useContext(GlobalContext)
  const {cart} = states
  const {setCart} = setters

  function valorInteiro(produtoos) {
    const resultado = produtoos.split(".");
    return resultado[0];
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        console.log(res);
        setProdutos(res.data.products);
      })
      .catch((err) => {
        console.error("deu ruim" + err);
      });
  }, []);

  function addCart(produto) {
    let copyCart = [...cart];

    let indiceProduto = cart.findIndex((prod) => {
      return prod.id === produto.id;
    });

    if ((cart.length > 0) & (indiceProduto >= 0)) {
      copyCart[indiceProduto].quantidade += 1;

    } else {
      produto.quantidade = 1;
      copyCart = [...copyCart, produto];
    }

    setCart(copyCart);

    window.localStorage.setItem("cart", JSON.stringify(copyCart));
  }

  return (
    <MainContainer>
      <CardContainer>
        {produtos.map((produto) => (
          <div key={produto.Id}>
            
            <img src={produto.photo} alt="" />

            <section>
              <h1>{produto.name}</h1>
              <h2>R$: {valorInteiro(produto.price)} </h2>
            </section>
            <p>{produto.description}</p>
            <button onClick={() => addCart(produto)}> Comprar</button>
          </div>
        ))}
      </CardContainer>
    </MainContainer>
  );
}
