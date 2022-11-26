import styled from "styled-components";

export const MainContainer = styled.div`
  display: block;
  flex-direction: column;


`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  align-items: end;
  justify-content: center;
  text-align: center;
  margin: 7px;
  gap: 1%;
  color:black;
  box-shadow: 5px 7px 5px #323638;

  div {
    border-radius: 10px;
    border:2px solid black;
  }
  h2,p{
    text-shadow: 10px 10px 5px gray;
  }
  p{
    font-size: 0.9em;
  }
  h2{
    font-size: 1.3rem;
    margin-top: 10px;
   
  }
  h3{
    font-size: 1.1rem;
    color:orange;
    font-weight:bold;
   
  }
  img {
    display: flex;
    width: 25%;
    height: 20%;
    border: 2px solid black;
    margin:0 auto;
    margin-top:5px;
    background-size: cover;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width:70px;
    height:160px;
    font-size: 12px;
    img{
      height: 50%;
    }
    h2{
      font-size: 6px;
    }
    h3{
      font-size: 9px;
    }
    p{
      font-size: 5px;
    }
  }
`;

export const ProdutoBotao = styled.button`

`

