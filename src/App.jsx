import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1>Fundamentos React (Arrow)</h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <NumeroAleatorio min={1} max={10} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Fabrício Caldana"
          nota={8.6}
        ></ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
