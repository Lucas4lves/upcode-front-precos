import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Botao from "../Botao";
import HederResumo from "../HederResumo/Categoriaheder";
import SearchInput from "../PesquisaInput";
import ProdutosSelecionados from "../ProdutosSelecionados";
import Selecionados from "../LojasSelecionados";
import SelectOptions from "../SelectOptions";
import Tabela from "../TabelaLojas";
import TabelaProdutos from "../TabelaProdutos";
import Modal from "../Modal";
import "./style.css";
import { useGlobalContext } from "../../Contexts/Context";

export default function Acordeon({ loja, produto, formulario, setForm, filtrar,lojasFiltradas}) {
  
  const validarForm = (form) => {
    const values = Object.values(form);
    for(let value of values){
      if(value === "")
      {
        return false;
      }
    } 
    return true;
  }
  
  const enviarPesquisa = (url, payload) =>{
    const formValido = validarForm(payload);
    if(formValido)
    {
      return alert("Form válido!")
    }

    return alert("Form inválido!");
  }

  const { produtosFiltrados, filtrarProdutos } = useGlobalContext();
  return (
    <div className="caixa-maior1">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <div className="acordion1">
            <AccordionButton className="button">
              <Box className="text-button" as="span" flex="1" textAlign="left">
                Lojas
              </Box>
              <AccordionIcon style={{ fontSize: "24px" }} />
            </AccordionButton>
          </div>
          <AccordionPanel className="text" pb={4}>
            <div className="caixa-inpt">
              <SearchInput lojas={loja} filtrar={filtrar}/>
            </div>

            <div className="selecao-lojas">
              <Tabela
                coluna={["Codigo", "Loja", "UF"]}
                loja={loja}
                formulario={formulario}
                setForm={setForm}
                lojasFiltradas={lojasFiltradas}
              />
              <div className="selecionados">
                <Selecionados tipo={'lojas'} />
              </div>
            </div>
          
            <div className="caixa-batao">
              <Botao text="Prosseguir" />
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <div className="acordion1">
            <AccordionButton className="button">
              <Box className="text-button" as="span" flex="1" textAlign="left">
                Produtos
              </Box>
              <AccordionIcon style={{ fontSize: "24px" }} />
            </AccordionButton>
          </div>
          <AccordionPanel className="text" pb={4}>
            <div className="caixa-Selecao">
              <SelectOptions />
              <div className="inputPesquisa">
              <SearchInput lojas={produtosFiltrados} filtrar={filtrarProdutos}/>
              </div>
            </div>

            <div className="seleciona-produtos">
              <TabelaProdutos
                coluna={["Codigo", "Descrição"]}
                formulario={formulario}
                setForm={setForm}
                produto={produto}
              />
              <div className="selecionados">
               <Selecionados tipo={'produtos'} />
              </div>
            </div>
            <div className="caixa-batao">
              <Botao text="Salvar" />
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <div className="acordion1">
            <AccordionButton className="button">
              <Box className="text-button" as="span" flex="1" textAlign="left">
                Resumo
              </Box>
              <AccordionIcon style={{ fontSize: "24px" }} />
            </AccordionButton>
          </div>
          <AccordionPanel className="text" pb={4}>
            <HederResumo />
            <div className="selecionados-resumo">
              <Tabela
                resumo={true}
                className="caixa-resumo"
                coluna={["Codigo", "Loja", "UF"]}
                produto={produto}
              />
              <div className="select">
                <Selecionados tipo={"produtos"} />
              </div>
            </div>
            <div className="caixa-batao">
              <button className="button" onClick={()=>{
               enviarPesquisa("teste",formulario);
              }}>Enviar </button>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
