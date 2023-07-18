import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoPelis, setListadoPelis}) => {

    //const [listadoPelis, setListadoPelis] = useState([]);\

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
        console.log("Se guardaron correctamente");
    }, [])

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));
        setListadoPelis(peliculas);

        return peliculas;
    }

    const borrarPelicula = (id) => {
        //Conseguir peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
  
        //Actualizar estado del listado
        setListadoPelis(nuevo_array_pelis);

        //Actualizar los datos en el localStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
    }

  return (
    <>
    {listadoPelis !=null ? 
        listadoPelis.map(peli => {
            return (
                <article key={peli.id} className="peli-item">
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
        
                    <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                    <button className="delete" onClick={() => borrarPelicula(peli.id)}>Borrar</button>

                    {/* Aparece formulario de editar */}
                    {editar === peli.id && (

                        <Editar peli={peli} 
                                conseguirPeliculas={conseguirPeliculas} 
                                setEditar={setEditar} 
                                setListadoPelis={setListadoPelis}/>

                    )}
                </article>
            );
        })
        : <h3>No hay peliculas para mostar</h3>
    }

    </>
  )
}
