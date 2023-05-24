
import "../Input/style.css"

const Input = ({formulario, setForm}) => {
  return (
    <div className="caixa-maior">
      <h2 className='titulo2'>Período da pesquisa</h2>
        <div className='caixainput'>
          <div className='caixainput1'>
              <p className='inicio'>Inicio</p>
              <input className='typeinput' type="date"

              value={formulario.startDate}
              onChange={(e) => setForm({...formulario, startDate: e.target.value})}
              />
          </div>
            <div className='caixainput2'> 
              <p className='termino'>Término</p>
              <input className='typeinput' type="date" 
              value={formulario.endDate}
              onChange={(e)=> setForm({...formulario, endDate: e.target.value})}
              />
            </div> 
          </div>
    </div>

  )
}

export default Input

// startDate: "",
// endDate: "",