import React from "react";
import { ChakraProvider, Tbody, Box, Table, Tr, Td } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import "../LojasSelecionados/style.css";

const Selecionados = ({ formulario = {} }) => {

  const {lojas} = formulario;

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
                    {lojas? lojas.map((loja) => {
                      return (
                        <>
                        <div className="teste">
                        <Td className="descricao_selecionados">{loja.codigo}</Td>
                          <Td className="descricao_selecionados">{loja.nomeFilial}</Td>
                          <Td className="descricao_selecionados">{loja.uf}</Td>
                          <button type="button" className="delete_button">
                            <AiOutlineClose />
                          </button>
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
