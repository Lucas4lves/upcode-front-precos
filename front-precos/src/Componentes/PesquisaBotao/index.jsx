import React from 'react';
import { FiSearch } from 'react-icons/fi';
import '../PesquisaBotao/style.css';

function SearchInput() {
  return (
    <div className="search-input">
      <input className='pesquisa'  type="text" placeholder="Pesquisar..."/>
   
        <FiSearch className='Icone' />
    
    </div>
  );
}

export default SearchInput;
