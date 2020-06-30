import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {ResetasContext} from '../context/ResetasContext';

const Formulario = () => {

  const {categorias} = useContext(CategoriasContext);
  const {buscarResetas, setControl} = useContext(ResetasContext);

  const [busqueda, setBusqueda] = useState({
    nombre : '',
    categoria : ''
  })


  const actualizarBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  return ( 
    <form 
      className="col-12"
      onSubmit={e => {
        e.preventDefault();
        setControl(true);
        buscarResetas(busqueda);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bedidas por categoría o ingredientes</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input 
            className="form-control"
            name="nombre"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={actualizarBusqueda}
          />
        </div>
          <div className="col-md-4">
            <select 
              className="form-control"
              name="categoria"
              onChange={actualizarBusqueda}
            >
              <option value="">Selecciona categoría</option>
              {categorias.map(categoria => (
                <option value={categoria.strCategory} key={categoria.strCategory}>{categoria.strCategory}</option>
              ))}
            </select>  
          </div>  
          <div className="col-md-4">
            <input type="submit" className="btn btn-primary btn-block" value="Buscar tragos"></input>
          </div>
        
      </div>
    </form>
   );
}
 
export default Formulario;
