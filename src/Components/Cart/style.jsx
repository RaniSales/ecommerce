import styled from "styled-components"

export const TitleCart = styled.div`
    background-color:#0F52BA;
    display: flex;
`
export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    width: 90%;
    height: 5em;
    margin: 20px;

`

export const ContainerImg = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    color: #2C2C2C;
    text-align: left;
    margin: 10px;
    font-size: 1em;
    img{
        width: 4em;
    }

`

export const ButtonQuantity = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 4.5rem;
    border-radius: 4px;
    height: 1.5em;
    border: 0.3px solid #BFBFBF;;
`

export const ButtonQ = styled.div`
    border: 0.3px solid #BFBFBF;
    align-items: center;
    justify-content: space-around;
    height: 1.5em;
    background-color: #FFFFFF;
    border-radius: 4px;
    padding: 0 0.5em 0px;
`
export const ButtonClose = styled.button`
    background-color:#000000;
    color:#FFFFFF;
    margin-top: -5em;
    font-size: 1em;
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%;
    cursor: pointer;
`
export const ButtonFinish = styled.button`
    background-color: #000000;
    color: #FFFFFF;
    text-align: center;
    width: 100%;
    height: 60px;
    font-size: 1.7em;
    cursor: pointer;
`
export const TotalValue = styled.div`
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
`