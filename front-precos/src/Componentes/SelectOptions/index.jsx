import "../SelectOptions/style.css"

export default function SelectOptions() {
  return (
    <div className="select">
        <div className="categoria">
            <h2 className="titulo-categoria">Categorias</h2>
        </div>
      <select className='selectoptions' itemType="checkbox">
        <option className="textOption"></option>
        <option type="checkbox">Rx Marcas</option>
        <option>Genérico</option>
        <option>OTC</option>
        <option>kkkkkkk</option>
      </select>
    </div>
  )
}
