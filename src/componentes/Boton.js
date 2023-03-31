import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  return(
<div className="boton-banner" onClick={props.onClick}>
     <p>{props.texto}</p>
</div>
  );
}

export default Boton;
