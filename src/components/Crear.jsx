import React, { useState } from 'react'
import { GuardarPeliStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoPelis}) => {

    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState ({
        titulo: "",
        descripcion: ""
    })

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto de la pelicula a guardar

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //Guardar estado
        setPeliState(peli);

        //Actualizr el estado del listado principal
        setListadoPelis(elementos => {
            if(!elementos){
                return[peli];
            }
            return[...elementos, peli];
        })

        //Guardar en el almacenamiento local
        GuardarPeliStorage("pelis", peli);

        //
    }

  return (
    <div className="add">

        <h3 className="title">{tituloComponente}</h3>
        {(titulo && descripcion) && "Has creado la peli: "+titulo}
        <form onSubmit={conseguirDatosForm}>
            <input 
                type="text" 
                id='titulo'
                name='titulo'
                placeholder="Titulo" />
            <textarea 
                id='descripcion'
                name='descripcion'
                placeholder="Descripcion"></textarea>
            <input 
                type="submit" 
                id='save'
                value="guardar" />
        </form>

    </div>
  )
}
