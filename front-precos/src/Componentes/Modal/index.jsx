import React from 'react'
import { useState } from 'react'
import '../Modal/style.css'

export default function Modal() {
  const  [modalVisivel, setmodalVisivel] = useState(false);

  const abrirModal = () => {
    setmodalVisivel(true)
  }

  const fecharModal = () => {
    setmodalVisivel(false)
  }
      return (
    <div>
        <button className='botaoModal'  onClick={abrirModal}>Enviar</button>
        {modalVisivel && (
            <div className='modal'>
                <div className='modal-content'>
                    <h2>Pesquisa enviada com Sucesso</h2>
                    <button className='botaoModal' onClick={fecharModal}>Fechar</button>
                </div>
            </div>
        )}
    </div>
  )
}
