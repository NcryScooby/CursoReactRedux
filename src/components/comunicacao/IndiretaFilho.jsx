import React from "react";

export default (props) => {
    const callBack = props.quandoClicar
    const min = 10;
    const max = 30;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

  return (
    <div>
      <div>Filho</div>
      <button
        onClick=
        {e => callBack("Fabrício", gerarIdade(), gerarNerd())}>
        Fornecer Informações
      </button>
    </div>
  )
}