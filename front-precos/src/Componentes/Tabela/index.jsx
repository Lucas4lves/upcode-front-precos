import { Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import "../Tabela/style.css"



export default function Tabela({coluna}) {


  return (
  <TableContainer >
  <Table className='tabela-maior'>
    <Thead>
      <Tr>
        {coluna?.map((t ,index) => {
          return (
          <Th key={index}>{t}</Th>
          )
        })}
      </Tr>
    </Thead>
    <Tbody >
      <Tr>
        <Td className='teste' >1</Td>
        <Td className='teste'>Senador pompeu</Td>
        <Td className='teste'>Placeholder</Td>
        <input className='box' type='checkbox'/>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

  )
}
