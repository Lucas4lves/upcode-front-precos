import React from "react";
import { ChakraProvider, Tbody, Box, Table, Tr, Td } from '@chakra-ui/react';
import { AiOutlineClose } from "react-icons/ai";
import "../Selecionados/style.css";


const Selecionados = ({ onClickDelete }) => {

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
                    <Td className="descricao_selecionados">2</Td>
                    <Td className="descricao_selecionados">Abolição</Td>
                    <Td className="descricao_selecionados">CE</Td>
                    <button type="button" className="delete_button" onClick={onClickDelete}>
                      <AiOutlineClose />
                    </button>
                  </Tr>
                  <Tr>
                    <Td className="descricao_selecionados">4</Td>
                    <Td className="descricao_selecionados">Aguambi</Td>
                    <Td className="descricao_selecionados">CE</Td>
                    <button type="button" className="delete_button" onClick={onClickDelete}>
                      <AiOutlineClose />
                    </button>
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

export default Selecionados;