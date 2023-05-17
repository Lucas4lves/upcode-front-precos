import imagem from "../../assets/Logo.png";
import "../Heder/style.css";



function Heder() {
  return (
    <>
    <div className="Header">
        <div className="imagemlogo">
          <img src={imagem} alt="Logo"/>
        </div>      
          
        </div>
        <h1 className="titulo">Cadastro de Pesquisa</h1>
        </>
  )
}

export default Heder