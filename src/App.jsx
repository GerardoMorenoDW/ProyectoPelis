import { useState } from "react"
import { Buscador } from "./components/Buscador"
import { Crear } from "./components/Crear"
import { Listado } from "./components/Listado"


function App() {
   
    const [listadoPelis, setListadoPelis] = useState([]);

  return (
    <div className="layout">
        {/*Cabecera del sitio*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/*Barra de Navegacion*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="content">
            {/*Aqui va el listado de peliculas*/}
           <Listado listadoPelis={listadoPelis} setListadoPelis={setListadoPelis}/>
        </section>
        
        {/*Barra Lateral*/}
        <aside className="lateral">
            <Buscador listadoPelis={listadoPelis} setListadoPelis={setListadoPelis}/>

            <Crear setListadoPelis={setListadoPelis}/>
        </aside>
        
        {/*Pie de pagina*/}
        <footer className="footer">
            &copy; Master en React - Hecho por Gerardo Moreno
        </footer>

    </div>
  )
}

export default App
