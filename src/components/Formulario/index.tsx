import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            name="tarefa"
            type="text"
            placeholder="O que você quer estudar"
            required
          />
        </div>

        <div>
          <label htmlFor="time">Tempo</label>
          <input
            name="time"
            type="time"
            step={1}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao/>
      </form>
    );
  }
}

export default Formulario