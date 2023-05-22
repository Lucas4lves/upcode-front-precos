import { Table,Thead,Tbody,Tr,Th,Td,TableContainer} from '@chakra-ui/react'
import "../TabelaProdutos/style.css"



export default function TabelaProdutos({coluna,produto, formulario, setForm}) {

const excluirProduto = (e) => {
  setForm({...formulario, produtos: formulario.produtos.filter(produto => produto !== pegarProdutoPorId(e.target.parentNode.id))})
}

const pegarProdutoPorId = (id) => {
    return produto.filter((p) => p.id == id)[0];
}

  const selecionarProduto = (e) => {
    if(e.target.checked){
      setForm(
        {...formulario, produtos: [...formulario.produtos, pegarProdutoPorId(e.target.parentNode.id)]}
      )
      return;
    }
    excluirProduto(e);
    return;
  }
  

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
        {produto?.map((item,index) => {
            return(
                <div className='caixa-produtos' key={index} >
                    <Td className='texto-tabela'>{item.id}</Td>
                    <div>
                      <div className='caixa-produto'>
                      <Td className='texto-tabela texto-nome'>{item.nome}</Td>
                      </div>
                        <div className='box' id={item.id} >
                           <input type="checkbox" onClick={(e) => selecionarProduto(e)}/>   
                        </div>
                         
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