import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import Botao from '../Botao'
import SearchInput from '../PesquisaBotao'
import Selecionados from '../Selecionados'
import SelectOptions from '../SelectOptions'
import Tabela from '../Tabela'
import TabelaProdutos from '../TabelaProdutos'

  import "./style.css"

  
  export default function Acordeon({lojas,produtos}) {
    return (
      
      <div className='caixa-maior1'>
        <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <div className='acordion1'>
            <AccordionButton className='button'>
              <Box className='text-button'  as="span" flex='1' textAlign='left'>
                Lojas
              </Box>
              <AccordionIcon  style={{fontSize: '24px'}}  />
            </AccordionButton>
            
          </div>
          <AccordionPanel className='text' pb={4}>
           <div className='caixa-inpt'>
            <SearchInput/>
            </div>

          
          <Tabela coluna={["Codigo", "Loja","UF"]} lojas={lojas}/>
           <Botao text='Proseguir'/>
           </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem>
          <div className='acordion1'>
            <AccordionButton className='button'>
              <Box className='text-button'  as="span" flex='1' textAlign='left'>
                Produtos
              </Box>
              <AccordionIcon style={{fontSize: '24px'}} />
            </AccordionButton>
          </div>
          <AccordionPanel className='text' pb={4}>
            <div className='caixa-Selecao'>
               <SelectOptions/>
               <SearchInput/>
             </div>
             <TabelaProdutos coluna={["Codigo", "Descrição"]} produtos={produtos}/>
             <Botao text='Salvar'/>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <div className='acordion1'>
            <AccordionButton className='button'>
              <Box className='text-button' as="span" flex='1' textAlign='left'>
                Resumo
              </Box>
              <AccordionIcon style={{fontSize: '24px'}} />
            </AccordionButton>
          </div>
          <AccordionPanel className='text' pb={4}>
          <Tabela coluna={["Codigo", "Loja","UF"]}/>

          <Selecionados/>

          <Botao text='Enviar'/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  