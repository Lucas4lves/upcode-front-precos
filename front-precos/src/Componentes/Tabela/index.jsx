import { Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import "../Tabela/style.css"



export default function Tabela({coluna,loja, formulario, setForm}) {

  const excluirLoja = (e) => {
    setForm({...formulario, lojas: formulario.lojas.filter(loja => loja !== pegarLojaPorId(parseInt(e.target.parentNode.id)))})
  }

  const pegarLojaPorId = (id) => {
    const lojaEncontrada = loja.filter(loja => loja.codigo == id)[0];

    return lojaEncontrada;
  }

  const selecionarLoja = (e) =>{
    if(e.target.checked){
      setForm(
        {...formulario, lojas: [...formulario.lojas, pegarLojaPorId(parseInt(e.target.parentNode.id))]}
      )
      return;
    }
      excluirLoja(e);
    return;
  }

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
            {loja?.map((item,index) =>{
              return(
                <div id={item.codigo} className='caixa-loja' key={index}>
                  <Td className='texto-tabela' >{item.codigo}</Td>
                  <Td className='texto-tabela'>{item.nomeFilial}</Td>
                  <div className='uf'>
                    <Td >{item.uf}</Td>
                  </div>
                  <input className='box' type='checkbox' onClick={(e) => selecionarLoja(e)}/>
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
