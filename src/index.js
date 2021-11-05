import "./index.css";
import reactDom from "react-dom";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

reactDom.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Situação do Aluno"
      aluno="Fabrício Caldana" 
      nota={8.6}
    ></ComParametro>
    <Fragmento></Fragmento>
  </div>,
  document.getElementById("root")
);
