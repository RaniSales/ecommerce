import {
  Box,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { MainContainer,ContainerImg, ButtonQuantity, ButtonQ,ButtonFinish,TotalValue, ButtonClose, TitleCart } from "../Cart/style";

function Cart() {
  const handleClose = () => {
    setOpen(false);
  };

  const { states, setters } = useContext(GlobalContext);
  const { open, cart } = states;
  const { setOpen,setCart } = setters;


  function addItem(produto){
    const copyProduto = [...cart]
    const index = copyProduto.findIndex(prod => prod.id === produto.id)
    copyProduto[index].quantidade += 1

    console.log(index)
    setCart(copyProduto)
    window.localStorage.setItem('cart',JSON.stringify(copyProduto))

}

let totalProduto = 0 
cart.forEach(element => {
    return totalProduto += Number(element.price) * Number(element.quantidade)
});

  function delItem(produto){
    const copyProduto = [...cart]
    const index = copyProduto.findIndex(prod => prod.id === produto.id)
    copyProduto[index].quantidade -= 1
    setCart(copyProduto)
    window.localStorage.setItem('cart',JSON.stringify(copyProduto))
  }

  function removeProduto(produto){
    const copyProduto = [...cart]
    const index = copyProduto.findIndex(prod => prod.id === produto.id)
    copyProduto.splice(index,1)
    setCart(copyProduto)
    window.localStorage.setItem('cart',JSON.stringify(copyProduto))

    console.log(copyProduto)
  }

  return (

    <Box
    display={open ? "block" : "none"}
      onClose={handleClose}
      sx={{
        position: "absolute",
        top: "0",
        right: "0",
        height:"100vh"
      }}
    >
      <TitleCart>
      
      <DialogTitle 
      sx={{ backgroundColor: "#0F52BA",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            color:"#FFFFFF",
            width:"80%",
            padding:"0",
            margin:"0",
            boxshadow: "-5px 0px 6px rgba(0, 0, 0, 0.13)",
            }}>Carrinho de Compras</DialogTitle>
        <DialogTitle onClick={handleClose}
         sx={{ 
         cursor:"pointer",
         color:"#FFFFFF",
         fontsize:"20em"
          }}>
          x
        </DialogTitle>
        
      </TitleCart>

      <DialogContent sx={{ backgroundColor: "#0F52BA"}}>
        {cart.map((produto) => {
          return (
            <MainContainer key={produto.id}>
              <ContainerImg>
                <img src={produto.photo} alt="" />
                <p>{produto.name}</p>
              </ContainerImg>
              <div>
                <ButtonQuantity>
                <ButtonQ disabled={produto.quantidade === 0} onClick={()=>delItem(produto)}>-</ButtonQ>
                <p>{produto.quantidade}</p>
                <ButtonQ onClick={()=>addItem(produto)}>+</ButtonQ>
              </ButtonQuantity>
              
              </div>
              <p>R$ {produto.price * produto.quantidade}</p>
              <ButtonClose onClick={()=> removeProduto(produto)}>X</ButtonClose>
            </MainContainer>
          );
        })}
        <TotalValue>Total: <p>R${totalProduto}</p> </TotalValue>
      </DialogContent>
        <ButtonFinish onClick={handleClose}>Finalizar compra</ButtonFinish>
    </Box>
 
  );
}

export default Cart;
