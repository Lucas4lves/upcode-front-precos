import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import "../TabelaProdutos/style.css";
import { useGlobalContext } from "../../Contexts/Context";
import LinhaProduto from "../LinhaProduto";
export default function TabelaProdutos({ coluna }) {
  const { produtosFiltrados, selecionarProduto } = useGlobalContext();

  return (
    <TableContainer className="container-produtos">
      <Table className="tabela-maior">
        <Thead>
          <Tr className="titulo-tabela2">
            {coluna?.map((t, index) => {
              return <Th key={index}>{t}</Th>;
            })}
          </Tr>

          <Tbody>
            <Tr>
              {produtosFiltrados?.map((item, index) => {
                return (
                  <LinhaProduto
                    item={item}
                    index={index}
                    onSelect={selecionarProduto}
                    key={index}
                  />
                );
              })}
            </Tr>
          </Tbody>
        </Thead>
      </Table>
    </TableContainer>
  );
}
