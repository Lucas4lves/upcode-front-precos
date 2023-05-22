import React from 'react'
import { ChakraProvider, Tbody, Box, Table, Tr, Td } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import "../ProdutosSelecionados/style.css"

const ProdutosSelecionados = ({formulario = {} }) => {

  const {produtos} = formulario;

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
                    {produtos? produtos.map((produto) => {
                      return (
                        <>
                          <Td className="descricao_selecionados">{produto.id}</Td>
                          <Td className="descricao_selecionados">{produto.nome}</Td>
                          <Td className="descricao_selecionados">{}</Td>
                          <button type="button" className="delete_button">
                            <AiOutlineClose />
                          </button>
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

  
export default ProdutosSelecionados;