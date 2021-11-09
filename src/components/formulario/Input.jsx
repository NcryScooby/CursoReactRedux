import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Componente controlado */}
        <input value={valor} onChange={quandoMudar} />
        {/* Apenas leitura */}
        <input value={valor} readOnly />
        {/* Componente não controlado */}
        <input value={undefined} />
      </div>
    </div>
  );
};
