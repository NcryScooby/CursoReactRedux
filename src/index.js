import "./index.css";
import reactDom from "react-dom";
import React from "react";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

reactDom.render(
  <div id="app">
    <Primeiro></Primeiro>
    <ComParametro
      titulo="Situação do Aluno"
      aluno="Fabrício Caldana" 
      nota={8.6}
    ></ComParametro>
  </div>,
  document.getElementById("root")
);
