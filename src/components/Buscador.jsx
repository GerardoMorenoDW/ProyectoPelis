import React, { useState } from 'react'

export const Buscador = ({listadoPelis, setListadoPelis}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //Crear estado y actualizarlo
    setBusqueda(e.target.value);

    //Filtrar para buscar coincidencias
    let pelis_encontradas = listadoPelis.filter(peli => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    //Comprobar si hay un resultado
    if(busqueda.length <= 1 || pelis_encontradas <= 0){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }


    //Dar valor de todo en localStorage

    //Actualizar estado del listado principal con lo que he logrado filtrar
    setListadoPelis(pelis_encontradas);
  }
  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        {(noEncontrado == true && busqueda.length > 2) && (
          <span className='no-encontrado'>No se han encontrado coincidencias</span>
        )}
        <form>
            <input type="text" 
                   placeholder="Buscar"
                   name='busqueda'
                   autoComplete='off'
                   onChange={buscarPeli}/>
        </form>
    </div>
  )
}
