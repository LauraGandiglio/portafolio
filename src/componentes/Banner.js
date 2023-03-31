
import '../hojas-de-estilo/Banner.css';
import Boton from "./Boton";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import React, { useState } from 'react';

function Banner() {

  const [click,setClick] = useState(false);

  const clickBoton =()=> {
    if(click) {
      setClick(false);
    }else {
      setClick(true);
    }
  }

  return(
    <div className= { click ? 'contenedor-banner atras' :'contenedor-banner'} >
      <div className='contenedor-bars'>
      </div>
      <div className='contenedor-texto-banner'>
        <div className='contenedor-texto'>
          <h1 className='nombre-banner'>Laura Gandiglio</h1>
          <p className='carrera-banner'>Frontend Developer</p>
        </div>
      </div>
      <Boton texto='¡Adelante!' onClick={clickBoton} />
      <div className='contenedor-iconos-contacto'>
        <a rel="noreferrer" href='https://github.com/LauraGandiglio/portafolio-2023.git' target={'_blank'}><AiFillGithub className='icono-github' /> </a>
        <a rel="noreferrer" href='https://wa.link/adiq5d' target={'_blank'}><AiOutlinePhone className='icono-wp' /> </a>
      </div>
    </div>
  );
}

export default Banner;