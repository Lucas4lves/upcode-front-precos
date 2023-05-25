import React from 'react';
import '../HederResumo/style.css'
import { useGlobalContext } from "../../Contexts/Context";

const HederResumo = () => {
  const { form } = useGlobalContext();

  const {startDate, endDate} = form;

  const pad = (data) => {
    if(data.length < 2)
    {
      return "0"+ data;
    }

    return data;
  }

  const formatarData = (data) =>{
     const temp = new Date(data).toLocaleDateString();
     let [dia, mes, ano] = temp.split("/");

    dia = Number(dia) + 1;

     return `${dia}/${mes}/${ano}`;
  }

  return (
    <>
    <div className='categoria'>
      <h2>Categoria</h2><br></br>
      <h2>{startDate? formatarData(startDate): null} até {endDate? formatarData(endDate) : null}</h2>
    </div>  
  
    <div className='lojas'>
      <h2>Lojas</h2> 
      <h2>Produtos</h2>
    </div>
 </>
  );
}

export default HederResumo;
