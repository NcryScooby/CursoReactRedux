import React from "react";

export default props => {
    const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <p>Número aleatório gerado entre {min} e {max}: <strong>{aleatorio}</strong></p>
    </div>
  );
}
