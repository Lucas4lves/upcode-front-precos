import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
import Botao from '../Botao'
import SelectOptions from '../SelectOptions'
import Tabela from '../Tabela'

  import "./style.css"

  
  export default function Acordeon() {
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
          <Tabela coluna={["Codigo", "Loja","UF"]}/>
           <Botao text='Proceguir'/>
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
             <SelectOptions/>
             <Tabela coluna={["Codigo", "Descrição"]}/>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </div>
    )
  }
  