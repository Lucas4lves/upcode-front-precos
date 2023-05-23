import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "../PesquisaInput/style.css";

function SearchInput({ lojas, filtrar }) {

  const [query, setQuery] = useState("");

  return (
    <div className="search-input">
      <input
        value={query}
        onChange={(e) => {
          filtrar(e.target.value);
          setQuery(e.target.value);
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
