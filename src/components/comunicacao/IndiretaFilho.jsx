import react from "react";

export default (props) => {
    const callBack = props.quandoClicar
  return (
    <div>
      <div>Filho</div>
      <button
        onClick=
        {e => callBack("Fabrício", 21, false)}>
        Fornecer Informações
      </button>
    </div>
  )
}