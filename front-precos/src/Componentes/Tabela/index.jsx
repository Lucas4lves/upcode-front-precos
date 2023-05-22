import { Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import "../Tabela/style.css"



export default function Tabela({coluna,lojas}) {


  return (
    <TableContainer className='container'>
    <Table className='tabela-maior-loja'>
      <Thead>
        <div>
        <Tr className='titulo-tabela'>
          {coluna?.map((t ,index) => {
            return (
            <Th key={index}>{t}</Th>
            )
          })}
        </Tr>
        </div>
     
      <div>
      <Tbody >
        <Tr>
            {lojas?.map((item,index) =>{
              return(
                <div className='caixa-loja' key={index}>
                  <Td className='texto-tabela' >{item.codigo}</Td>
                  <Td className='texto-tabela'>{item.nomeFilial}</Td>
                  <div className='uf'>
                    <Td >{item.uf}</Td>
                  </div>
                  <input className='box' type='checkbox'/>
                </div>
                  
              )
            })}
        
        </Tr>
       
      </Tbody>
      </div>
      </Thead>
    </Table>
  </TableContainer>
  
    )
  }
