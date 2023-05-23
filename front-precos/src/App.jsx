import Acordeon from "./Componentes/Acordeon/inde";
import Heder from "./Componentes/Heder";
import Input from "./Componentes/Input";
import { useGlobalContext } from "./Contexts/Context";



function App() {

  const {form, setForm, loja, filtrarLojas, lojasFiltradas, produto} = useGlobalContext();
  return (
    <div>
      <Heder />
      <Input formulario={form} setForm={setForm} />
      <Acordeon
        loja={loja}
        produto={produto}
        formulario={form}
        setForm={setForm}
        filtrar={filtrarLojas}
        lojasFiltradas={lojasFiltradas}
      />
    </div>
  );
}

export default App;
