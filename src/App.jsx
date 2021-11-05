import React from "react";

import Card from "./components/layout/Card";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <h1>Fundamentos React (Arrow)</h1>

    <Card titulo="#04 - Desafio Aleatório">
      <NumeroAleatorio min={1} max={10} />
    </Card>

    <Card titulo="#03 - Fragmento">
      <Fragmento />
    </Card>

    <Card titulo="#02 - Com Parâmetro">
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Fabrício Caldana"
        nota={8.6}
      ></ComParametro>
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
