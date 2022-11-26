import React, { useEffect, useState } from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { MainContainer, CardContainer, ContainerProdutos } from "./style";


export default function Cards() {
    const [produtos, setProdutos] = useState([]);

    function valorInteiro(produtoos) {
        const resultado = produtoos.split(".")
        return resultado[0]
    }

    useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then((res) => {
                console.log(res);
                setProdutos(res.data.products)
            })
            .catch((err) => {
                console.error("deu ruim" + err);
            });
    }, []);


    return (
        <MainContainer>
            <CardContainer>
                {produtos.map(produto => (
                    <div key={produto.Id}>
                        <img src={produto.photo} alt="" />
                        <h1>{produto.name}</h1>
                        <h2>R$: {valorInteiro(produto.price)} </h2>
                        <p>{produto.description}</p>
                        <button> Comprar</button>
                    </div>
                ))}

                
            </CardContainer>

        </MainContainer>);
}