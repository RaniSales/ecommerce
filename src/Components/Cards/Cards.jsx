import React,{useEffect, useState} from "react";
import axios from "axios"
import {BASE_URL} from "../../constants/urls"
import { MainContainer,CardContainer, ContainerProdutos } from "./style";


export default function Cards() {
     const [produtos, setProdutos] = useState([]); 
     
     useEffect(() => {
        axios.get(`${BASE_URL}`)
            .then((res) => {
                console.log(res); 
                setProdutos(res.data.products)
        })
            .catch ((err) => {
                console.error("deu ruim" + err); 
   });
   },[]);
   
   
   return ( 
            <MainContainer>
                <CardContainer>
                {produtos.map(produto => ( 
                   <p key={produto.Id}>
                    <img src={produto.photo} alt=""/>
                     <h1>{produto.name}</h1>
                      <h2>{produto.price}</h2>
                      <p>{produto.description}</p>
                      </p> 
                      ))} 
                      </CardContainer>
                       
                      </MainContainer> ); 
                      }