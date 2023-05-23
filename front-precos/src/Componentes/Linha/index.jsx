import { Td } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../../Contexts/Context";

const Linha = ({ item, onSelect, index }) => {
  const { form } = useGlobalContext();
  const [check, setCheck] = useState(false);
  
  useEffect(() => {
    let lojasSelecionadas = form.lojas.map(loja => loja.codigo);
    if (lojasSelecionadas.includes(item.codigo)) {
      setCheck(true);
      return;
    }

    setCheck(false);
  });

  return (
    <>
      <div id={item.codigo} className="caixa-loja" key={index}>
        <Td className="texto-tabela">{item.codigo}</Td>
        <Td className="texto-tabela">{item.nomeFilial}</Td>
        <div className="uf">
          <Td>{item.uf}</Td>
        </div>
        <input
          checked={check}
          className="box"
          type="checkbox"
          onClick={(e) => onSelect(e)}
        />
      </div>
    </>
  );
};

export default Linha;
