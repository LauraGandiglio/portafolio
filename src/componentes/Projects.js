import React,{useState} from "react";
import '../hojas-de-estilo/Projects.css';
import '../hojas-de-estilo/general.css';
import Trabajo from './Trabajo';
import Boton from './Boton';

function Proyects ({ playAnimation, clickHandler, zindex }) {

  return (
	<div className={playAnimation? "contenedor-projects atras": "contenedor-projects"}
  style={{ zIndex: zindex }}>
		<div className='caja-projects'>
			<div className='contenedor-projects-titulo'>
				<p className='mis-proyectos'> Mis proyectos</p>
        <p className='proyectos-info'> Te invito a clickear abajo para mirar algunos de mis proyectos</p>
			</div>
			<div className='contenedor-proyectos'>
        <Trabajo texto = 'Barra movil' imagen = 'fondo.jpg'/>
        <Trabajo texto = 'Barra movil' imagen = 'projects.jpg'/>
        <Trabajo texto = 'Barra movil' imagen = 'banner.jpg'/>
        <Trabajo texto = 'Barra movil' imagen = 'aboutme.jpg'/>
        <Trabajo texto = 'Barra movil' imagen = 'gris.jpg'/>
      </div>
		</div>
    <Boton texto = 'Inicio' onClick = {clickHandler} /> 
	</div>
	);
}

export default Proyects;

