import Acordeon from "./Componentes/Acordeon/inde"
import Heder from "./Componentes/Heder"
import Input from "./Componentes/Input"
import { useState,useEffect } from "react"

function App() {
const[lojas, setLojas] = useState([]);
const[produtos, setProdutos] = useState([]);


const buscarProdutos = async() => {
await fetch("../data/produto.json", {
  method: "GET",
}).then(resposta => resposta.json())
.then(dados => setProdutos(dados))
.catch(erro => console.log(erro)) 
}

async function buscarLojas(){
    await fetch("../data/lojas.json", {
      method: "GET"
    }).then(res => res.json())
    .then(data => setLojas(data))
    .catch(err => console.log(err))
} 

useEffect(()=>{
  buscarLojas();
  buscarProdutos();
},[])



  return (
      <div>
        <Heder/>
        <Input/>
        <Acordeon lojas={lojas} produtos={produtos}/>
        
      </div>
  )
}

export default App
