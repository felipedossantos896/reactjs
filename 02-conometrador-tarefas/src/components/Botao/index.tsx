import React from 'react';
import "../Botao/style.scss";

class Botao extends React.Component {
  render() {
      const estaAtivo = false;
      const styles = {
        backgroundColor: estaAtivo ? "green" : "red"
      }

      return(
        <button className="botao">Botão</button>
      )
  }
}

export default Botao;