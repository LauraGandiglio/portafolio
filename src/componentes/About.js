import React, { useState } from 'react';
import '../hojas-de-estilo/About.css';
import '../hojas-de-estilo/general.css';
import Boton from "./Boton";
import { AiFillContainer } from "react-icons/ai";
import Tecno from './Tecno';
import CV from '../archivos/CV.pdf';

function About({ playAnimation, clickHandler, zindex }){
  
  return(
    <div className={playAnimation ? "contenedor-about atras" : "contenedor-about"}
    style={{ zIndex: zindex }} >
      <div className='contenedor-presentacion'>
        <p className='Sobremi'>Sobre mi</p>
        <p className='presentacion'>
        ¿Qué decir de mi? Desde niña siempre me entusiasmó aprender y darle "vida" a todo lo que me rodeaba, desde modificar la función de alguna cosa que, a mi pequeñín humilde criterio, no lo hacía de la mejor manera; hasta agregarle a los detalles ese poquito de color que les faltaba (mi mamá no estaría tan de acuerdo conmigo :P). Estuve transitando estos años en busca de eso que muchos te nombran pero pocos saben decirte bien que es:"eso" que te hace feliz. Entre alegrías, fracasos, desamores e incertidumbre, dí "por casualidad" con  la programación, y el mundo que se abrió me dejó con pocas palabras y ganas de ver más y más. Si buscas a alguien responsable, con buena predisposición y muchas ganas de aprender me animo a decirte que puedo ser la persona que estas buscando. Creo que puedo decir que encontré "eso", y solo sé que voy a seguir este camino con un poco de hormigueo en las manos, pero con una sonrisa.
        </p>
        <p className='despedida'>¡Gracias por leer!</p>
      </div>
      <div className='contenedor-skills'>
        <p className='skills'>Mis skills</p>
        <div className='iconos-skills'>
          <Tecno texto='HTML'/>
          <Tecno texto='CSS'/>
          <Tecno texto='JavaScript'/>
          <Tecno texto='React'/>
          <Tecno texto='Git & Github'/>
          <Tecno texto='Node.js'/>
        </div>
      </div>
      <Boton texto='Mis proyectos' className='boton-trabajos' onClick={clickHandler}/>
      <div className='contenedor-curriculum'>
        <p className='texto-curriculum'> Descarga mi currículum aquí</p>
        <a className='cv' href={CV} target="_blank" rel="noopener noreferrer" download="CV.pdf"><AiFillContainer className='icono-curriculum' /></a>
      </div>
    </div>

  );

}

export default About;

