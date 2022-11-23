import React from "react";

// Componente Quadrado
// Informa o Tabuleiro quando é clicado
// Recebe um dos estados disponíveis: O, X ou null
export default function Square(props) {
  return (
    <button className="square" 
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}
