import { useState, useEffect } from "react";
import { Td } from "@chakra-ui/react";
import { useGlobalContext } from "../../Contexts/Context";

const LinhaProduto = ({ item, onSelect, index }) => {
  const { form } = useGlobalContext();
  const [check, setCheck] = useState(false);

  useEffect(() => {
    let produtosSelecionados = form.produtos.map((produto) => produto.id);
    if (produtosSelecionados.includes(item.id)) {
      setCheck(true);
      return;
    }
    setCheck(false);
  });

  return (
    <div id={item.id} className="caixa-produtos" key={index}>
      <Td className="texto-tabela">{item.id}</Td>   
        <div className="caixa-produto">
          <Td className="texto-tabela texto-nome">{item.nome}</Td>
        </div>
      <input checked={check} type="checkbox" onChange={(e) => onSelect(e)} />
    </div>
  );
};

export default LinhaProduto;
