import { createContext } from "react";
import lojasInicial from "../../data/lojas.json";
import { useState, useEffect, useContext } from "react";
export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [loja, setLojas] = useState([]);
  const [lojasFiltradas, setLojasFiltradas] = useState(lojasInicial);
  const [produto, setProdutos] = useState([]);
  const [form, setForm] = useState({
    categoria: "Rx Marcas",
    startDate: "",
    endDate: "",
    lojas: [],
    produtos: [],
    isFinished: false,
  });

  const filtrarLojas = (query) => {
    setLojasFiltradas(loja.filter((l) => l.codigo.toString() === query));
    if (query.length <= 0) {
      setLojasFiltradas(loja);
    }
  };

  const buscarProdutos = async () => {
    await fetch("../data/produto.json", {
      method: "GET",
    })
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados))
      .catch((erro) => console.log(erro));
  };

  async function buscarLojas() {
    await fetch("../data/lojas.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setLojas(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    buscarLojas();
    buscarProdutos();
  }, []);

  return <AppContext.Provider value={{
    loja, lojasFiltradas, filtrarLojas, produto, setProdutos, form, setForm
  }}>{children}</AppContext.Provider>;
};

export { AppProvider as default };