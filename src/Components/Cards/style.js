import styled from "styled-components";

export const MainContainer = styled.div`
  margin:auto;
  width: 80%;
  display: flex;
  grid-template-columns: 15% 15% 15%;
  grid-template-rows: auto;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 12px;
  }
`

export const CardContainer = styled.div`
  text-align: center;
  margin: 7px;
  color:white;
  box-shadow: 5px 7px 5px #323638;
  h2,p{
    text-shadow: 10px 10px 5px blue;
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
    height: 40%;
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
  cursor: pointer;
  border:none;
  outline: none;
  border-radius: 5px;
  color:white;
  padding: 10px;
  background:black;
  margin-top: 10%;
  :hover{
    background-image: linear-gradient(to right, black,darkblue,blueviolet, rgb(228, 60, 161,0.5))
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    padding: 3px;
    margin: 5px;
    font-size: 5px;
    border-radius: 2px;
  }
`
