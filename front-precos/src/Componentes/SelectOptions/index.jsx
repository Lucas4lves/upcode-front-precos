import "../SelectOptions/style.css"

export default function SelectOptions() {
  return (
    <div className="select">
        <div className="categoria">
            <h2 className="titulo-categoria">Categorias</h2>
        </div>
      <select className='selectoptions' itemType="checkbox">
        <option className="textOption"></option>
        <option>Rx Marcas</option>
        <option>Rx Genérico</option>
        <option>OTC</option>
        <option>Marca Própria</option>
      </select>
    </div>
  )
}
