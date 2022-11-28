import styled from "styled-components";


export const MainContainer = styled.div`
 background-color: #E5E5E5;
 overflow-y: scroll;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 15% 15%;
  justify-content: center;
  text-align: center;
  gap: 4%;
  height: 100%;
  background-color: #E5E5E5;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: grid;
    grid-template-columns:60%;
    margin:auto;
    grid-template-rows: auto;
    gap:8px
  }


  @media screen and (min-device-width : 820px) and (max-device-width : 1180px) {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: auto;
    gap:4%;
  }

  div {
    border-radius: 8px;
    margin-top: 20%;
    width:217.56px;
    height:285px;
    background-color: #FFFFFF;
    transition: transform 2s;
  }
  
  div:hover{
    transform: translateX(5px) scale(1.2);
}
  h1,h2,p{
    color: #2C2C2C;
    font-family:"Montserrat"
  }
  
  section{
  display: flex;
  justify-content: space-between;
}

  h1{
    margin-top: 10px;
    font-size: 0.9em;
    text-align: left;
    }

  h2{
    font-size: 0.8rem;
    font-weight:bold;
    background: #373737;
    border-radius: 5px;
    color:#FFFFFF;
    width: 6em;
    margin: 5px;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 0.5em;
    text-align: left;
    margin: 5px 10px 15px 10px;
  }

  img {
    display: flex;
    width: 170px;
    height: 150px;
    margin:0 auto;
    margin-top:5px;
    background-size: cover;
    
  }

  button{
    background-color: #0F52BA;
    width: 100%;
    border: none;
    border-radius: 0px 0px 8px 8px;
    height: 2.6em;
    color: #FFFFFF;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover{
    color:rgba(0,0,0,0.5)
  }

`