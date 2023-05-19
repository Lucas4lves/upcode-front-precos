import { Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import "../TabelaProdutos/style.css"



export default function TabelaProdutos({coluna,produtos}) {


  return (
  <TableContainer className='container-produtos'>
  <Table className='tabela-maior'>
    <Thead>
      <Tr className='titulo-tabela2'>
        {coluna?.map((t ,index) => {
          return (
          <Th key={index}>{t}</Th>
          )
        })}
      </Tr>
   
    <Tbody>
      <Tr>
        {produtos?.map((item,index) => {
            return(
                <div className='caixa-produtos' key={index}>
                    <Td className='texto-tabela'>{item.id}</Td>
                    <Td className='texto-tabela texto-nome'>{item.nome}</Td>
                    <div>
                        <input type="checkbox"/>    
                    </div>
                   
                </div>
            )
        })}
      </Tr>
    </Tbody>
    </Thead>
  </Table>
</TableContainer>

  )
}