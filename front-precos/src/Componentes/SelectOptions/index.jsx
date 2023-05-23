import "../SelectOptions/style.css"
import { useGlobalContext } from "../../Contexts/Context";
import { useState } from "react";

export default function SelectOptions() {

  const { filtrarProdutosPorCategoria } = useGlobalContext();
  const [categoria, setCategoria] = useState("RX Marca");

  const categorias = ["RX Marca", "RX Genérico", "OTC", "Marca Própria"];

  return (
    <div className="select">
        <div className="categoria">
            <h2 className="titulo-categoria">Categorias</h2>
        </div>
      <select onChange={(e) => {
        filtrarProdutosPorCategoria(e.target.value);
        setCategoria(e.target.value);
        console.log(e.target.value);
      }} value={categoria} className='selectoptions' itemType="checkbox">
       {categorias.map(c => <option>{c}</option>)}
      </select>
    </div>
  )
}
