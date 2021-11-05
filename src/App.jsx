import React from "react";

import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";


export default () => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>
    <NumeroAleatorio min={1} max={10}/>
    <Fragmento />
    <ComParametro
      titulo="Situação do Aluno"
      aluno="Fabrício Caldana"
      nota={8.6}
    ></ComParametro>
    <Primeiro />
  </div>
);
