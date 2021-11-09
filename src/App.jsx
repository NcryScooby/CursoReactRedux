import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import UsuarioInfo from "./components/condicional/UsuarioInfo";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
import ParOuImpar from "./components/condicional/ParOuImpar";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";


export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
    <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>

    <Card titulo="#09 - Comunicação Direta" color="#588C73">
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={20}/>
        <UsuarioInfo usuario={{nome: 'Fabrício'}}/>
        <UsuarioInfo usuario={{email: 'fa@gmail.com'}}/>
      </Card>

      <Card titulo="#07 - Exercício - Produtos" color="#E8B71A">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componentes com Filhos" color="#00C8F8">
        <Familia sobrenome="Anelli">
          <FamiliaMembro nome="Fabrício" />
          <FamiliaMembro nome="Caren" />
          <FamiliaMembro nome="Anderson" />
        </Familia>
      </Card>

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
