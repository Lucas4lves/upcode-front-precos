import React from "react";
import { ChakraProvider, Tbody, Box, Table, Tr, Td } from "@chakra-ui/react";
import { useGlobalContext } from "../../Contexts/Context"
import { AiOutlineClose } from "react-icons/ai";
import "../LojasSelecionados/style.css";

const Selecionados = ({ tipo }) => {

  const { form } = useGlobalContext();

  if(tipo == "lojas")
  {
    return (
      <div className="main">
      <ChakraProvider>
        <div className="container_selecionados">
          <div>
            <h1 className="title_selecionados">Selecionadas</h1>
            <Box>
              <Table>
                <Tbody>
                  <Tr>
                    {form.lojas? form.lojas.map((loja) => {
                      return (
                        <>
                        <div className="teste">
                        <Td className="descricao_selecionados">{loja.codigo}</Td>
                          <Td className="descricao_selecionados">{loja.nomeFilial}</Td>
                          <Td className="descricao_selecionados">{loja.uf}</Td>
                          {/* <button type="button" className="delete_button">
                            <AiOutlineClose />
                          </button> */}
                        </div>
                      
                        </>
                      );
                    }): null}
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </div>
        </div>
      </ChakraProvider>
    </div>
    )
  }

  return (
    <div className="main">
    <ChakraProvider>
      <div className="container_selecionados">
        <div>
          <h1 className="title_selecionados">Selecionados</h1>
          <Box>
            <Table>
              <Tbody>
                <Tr>
                  {form.produtos? form.produtos.map((produto) => {
                    return (
                      <>
                      <div className='teste2'>
                      <Td className="descricao_selecionados">{produto.id}</Td>
                        <Td className="descricao_selecionados">{produto.nome}</Td>
                        <Td className="descricao_selecionados">{}</Td>
                        {/* <button type="button" className="delete_button">
                          <AiOutlineClose />
                        </button> */}
                      </div>
                      </>
                    );
                  }): null}
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </div>
      </div>
    </ChakraProvider>
  </div>
  );
};

export default Selecionados;
