import React from 'react'

export const Editar = ({peli, conseguirPeliculas, setListadoPelis, setEditar}) => {

    const titulo_componente = "Editar pelicula";
    
    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //Conseguir el target del evento
        let target = e.target;

        //Conseguir las peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Conseguir el indice de la pelicula que quiero editar
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //Conseguir la edicion que se realizo en el formulario
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        }

        // Actualizar la pelicula en las pelis alamacenadas
        pelis_almacenadas[indice] = peli_actualizada;

        //Actualizar peliculas en el localStorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        // Actualizr estados
        setListadoPelis(pelis_almacenadas);
        
        //Cierra la ventana de editar
        setEditar(0);


    }
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input type="text" 
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo} />

            <textarea name="descripcion"
                      defaultValue={peli.descripcion}
                      className="descripcion_editada" />

            <input type="submit" className='editar' value="Actualizar" />
        </form>
    </div>
  )
}
