import Acordeon from "./Componentes/Acordeon/inde"
import Heder from "./Componentes/Heder"
import Input from "./Componentes/Input"
import { useState,useEffect } from "react"

function App() {
const[loja, setLojas] = useState([]);
const[produto, setProdutos] = useState([]);
const[form, setForm] =  useState({
  categoria: "Rx Marcas",
  startDate: "",
  endDate: "",
  lojas:[],
  produtos:[],
  isFinished: false
})


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
        <Input formulario={form} setForm={setForm}/>
        <Acordeon loja={loja} produto={produto} formulario={form} setForm={setForm}  />
        
      </div>
  )
}

export default App
