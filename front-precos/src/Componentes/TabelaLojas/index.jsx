import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "./style.css";
import Linha from "../Linha";
import { useGlobalContext } from "../../Contexts/Context";

export default function Tabela({
  coluna, 
  resumo
}) {
  const { form, selecionarLoja, lojasFiltradas } =
    useGlobalContext();

  if(resumo)
  {
    return (
      <TableContainer className="container">
      <Table className="tabela-maior-loja">
        <Thead>
          <div>
            <Tr className="titulo-tabela">
              {coluna?.map((t, index) => {
                return <Th key={index}>{t}</Th>;
              })}
            </Tr>
          </div>

          <div>
            <Tbody>
              <Tr>
                {form.lojas?.map((item, index) => {
                  return (
                    <Linha
                      onSelect={selecionarLoja}
                      item={item}
                      key={index}
                      index={index}
                    />
                  );
                })}
              </Tr>
            </Tbody>
          </div>
        </Thead>
      </Table>
    </TableContainer>
    )
  }

  return (
    <TableContainer className="container">
      <Table className="tabela-maior-loja">
        <Thead>
          <div>
            <Tr className="titulo-tabela">
              {coluna?.map((t, index) => {
                return <Th key={index}>{t}</Th>;
              })}
            </Tr>
          </div>

          <div>
            <Tbody>
              <Tr>
                {lojasFiltradas?.map((item, index) => {
                  return (
                    <Linha
                      onSelect={selecionarLoja}
                      item={item}
                      key={index}
                      index={index}
                    />
                  );
                })}
              </Tr>
            </Tbody>
          </div>
        </Thead>
      </Table>
    </TableContainer>
  );
}
