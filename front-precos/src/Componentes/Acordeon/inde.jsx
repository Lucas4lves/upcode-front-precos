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
            
              <div className='selecao-lojas'>
              <Tabela coluna={["Codigo", "Loja","UF"]} lojas={lojas}/>
                  <div className='selecionados'>            
                       <Selecionados/>
                  </div> 
             </div>
             <div>
              
             </div>
             <div className='caixa-batao'>
              <Botao text='Proceguir'/>
             </div>
         
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
            
             <div className='seleciona-produtos'>
               <TabelaProdutos coluna={["Codigo", "Descrição"]} produtos={produtos}/>
                 <div className='selecionados'>            
                     <Selecionados/>
                  </div> 
               </div>
               <div className='caixa-batao'>
                <Botao text='Salvar'/>
             </div>
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
          <div className='selecionados-resumo'>
            <Tabela className="caixa-resumo" coluna={["Codigo", "Loja","UF"]} produtos={produtos}/>
            <div className='select'>
              <Selecionados/>
            </div>
          </div>
          <div className='caixa-batao'>
            <Botao text='Enviar'/>
          </div>
        
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  