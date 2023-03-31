import React from "react";
import '../hojas-de-estilo/Tecno.css';
import {AiFillCheckCircle} from "react-icons/ai";

function Tecno({texto}) {
  return(
    <div className='contenedor-iconos-skills'>
      <AiFillCheckCircle className= 'check'/>
      <p className='skill'>{texto}</p>
    </div>
  );
}

export default Tecno;