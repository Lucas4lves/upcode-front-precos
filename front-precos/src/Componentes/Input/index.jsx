import { useState } from "react";
import "../Input/style.css";

const Input = ({ formulario, setForm }) => {
  const pegarDataMinima = (date ="") => {
    let temp = new Date(date)
                   .toLocaleString()
                   .substring(0, 10)
                   .split("/");

    let [dia, mes, ano] = temp;
    return `${ano}-${mes}-${dia}`;
  };

  const adicionarUmDia = (datetime) => {
    let [ano, mes, dia] = datetime.split("-");

    dia = Number(dia) + 1;

    return `${ano}-${mes}-${dia}`;  
  }

  const [minDate, setMinDate] = useState(pegarDataMinima());


  return (
    <div className="caixa-maior">
      <h2 className="titulo2">Período da pesquisa</h2>
      <div className="caixainput">
        <div className="caixainput1">
          <p className="inicio">Inicio</p>
          <input
            className="typeinput"
            type="date"
            value={formulario.startDate.substring(0,10)}
            onChange={(e) => {
              setForm({
                ...formulario,
                startDate: new Date(e.target.value).toISOString(),
                endDate: ""
              });
              setMinDate(e.target.value)
            }}
          />
        </div>
        <div className="caixainput2">
          <p className="termino">Término</p>
          <input
            className="typeinput"
            type="date"
            min={adicionarUmDia(minDate)}
            value={formulario.endDate.substring(0,10)}
            onChange={(e) =>
              setForm({
                ...formulario,
                endDate: new Date(e.target.value).toISOString(),
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
