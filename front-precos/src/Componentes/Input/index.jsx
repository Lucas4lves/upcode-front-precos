import "../Input/style.css";

const Input = ({ formulario, setForm }) => {

  const pegarDataMinima = () => {
    let temp = new Date()
                   .toLocaleString()
                   .substring(0, 10)
                   .split("/");

    let [dia, mes, ano] = temp;
    return `${ano}-${mes}-${dia}`;
  };

  return (
    <div className="caixa-maior">
      <h2 className="titulo2">Período da pesquisa</h2>
      <div className="caixainput">
        <div className="caixainput1">
          <p className="inicio">Inicio</p>
          <input
            className="typeinput"
            type="date"
            min={pegarDataMinima()}
            value={formulario.startDate.substring(0,10)}
            onChange={(e) => {
              setForm({
                ...formulario,
                startDate: new Date(e.target.value).toISOString(),
              });
            }}
          />
        </div>
        <div className="caixainput2">
          <p className="termino">Término</p>
          <input
            className="typeinput"
            type="date"
            min={pegarDataMinima()}
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
