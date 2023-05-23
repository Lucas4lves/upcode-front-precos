import { createContext } from "react";
import lojasInicial from "../../data/lojas.json";
import produtosInicial from "../../data/produto.json";
import { useState, useEffect, useContext } from "react";
export const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [loja, setLojas] = useState([]);
  const [lojasFiltradas, setLojasFiltradas] = useState(lojasInicial);
  const [produto, setProdutos] = useState([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState(produtosInicial);
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

  const filtrarProdutos = (query) => {
    setProdutosFiltrados(produtosFiltrados.filter((p) => p.id.toString().includes(query)));
    if (query.length <= 0) {
      setProdutosFiltrados(produto);
    }
  };

  const filtrarProdutosPorCategoria = (categoria) => {
    setProdutosFiltrados(produto.filter(produto => produto.categoria.startsWith(categoria)));
    if(categoria.length <= 0){
      setProdutosFiltrados(produtosFiltrados);
    }
  }

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

  const excluirLoja = (e) => {
    setForm({
      ...form,
      lojas: form.lojas.filter(
        (loja) => loja !== pegarLojaPorId(parseInt(e.target.parentNode.id))
      ),
    });
  };

  const pegarLojaPorId = (id) => {
    const lojaEncontrada = loja.filter((loja) => loja.codigo == id)[0];
    return lojaEncontrada;
  };

  const selecionarLoja = (e) => {
    if (e.target.checked) {
      setForm({
        ...form,
        lojas: [
          ...form.lojas,
          pegarLojaPorId(parseInt(e.target.parentNode.id)),
        ],
      });
      return;
    }
    excluirLoja(e);
    return;
  };
  useEffect(() => {
    buscarLojas();
    buscarProdutos();
  }, []);

  const excluirProduto = (e) => {
    setForm({...form, produtos: form.produtos.filter(produto => produto !== pegarProdutoPorId(e.target.parentNode.id))})
  }

  const pegarProdutoPorId = (id) => {
    return produto.filter((p) => p.id == id)[0];
}
  const selecionarProduto = (e) => {
    if(e.target.checked){
      setForm(
        {...form, produtos: [...form.produtos, pegarProdutoPorId(e.target.parentNode.id)]}
      )
      return;
    }
    excluirProduto(e);
    return;
  }

  return (
    <AppContext.Provider
      value={{
        loja,
        lojasFiltradas,
        filtrarLojas,
        produto,
        setProdutos,
        form,
        setForm,
        selecionarLoja,
        pegarLojaPorId,
        excluirLoja,
        filtrarProdutosPorCategoria,
        produtosFiltrados,
        filtrarProdutos,
        selecionarProduto
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider as default };
