import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../PesquisaBotao/style.css";

function SearchInput({ lojas, lojasFiltradas, setLojasFiltradas }) {

  const [query, setQuery] = useState("");

  useEffect(() => {
    setLojasFiltradas(lojas);
  }, []);

  return (
    <div className="search-input">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setLojasFiltradas(lojasFiltradas.filter(loja => loja.nomeFilial.toUpperCase().includes(e.target.value.toUpperCase())));
        }}
        className="pesquisa"
        type="text"
        placeholder="Pesquisar..."
      />

      <FiSearch className="Icone" />
    </div>
  );
}

export default SearchInput;
