import React,{useState} from "react";
import '../hojas-de-estilo/Projects.css';
import Trabajo from './Trabajo';
import Boton from './Boton';

function Proyects () {

  const [click3,setClick3] = useState(false);

  const clickBoton =()=> {
    if(click3) {
      setClick3(false);
    }else {
      setClick3(true);
    }
    setTimeout(()=> {window.location.reload()},1800);
  }
  
  return (
	<div className={ click3 ? 'contenedor-projects atras2' :'contenedor-projects'}>
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
    <Boton texto = 'Inicio' onClick = {clickBoton} /> 
	</div>
	);
}

export default Proyects;

