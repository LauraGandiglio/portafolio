import React from "react";
import '../hojas-de-estilo/Trabajo.css';

function Trabajo ({texto,imagen}){
  return(
    <div className='contenedor-trabajo'>
      <img className= 'trabajo-imagen' src={require(`../imagenes/${imagen}`)} alt='Miniatura del trabajo'/>
      <p className='trabajo-nombre'>
        {texto}
      </p>
    </div>
  );
}

export default Trabajo;