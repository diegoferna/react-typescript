import React from "react";
import Botao from "../Botao";
import style from  './Formulario.module.scss'
import Itarefa from '../../types/Itarefa'
import {v4 as uuidv4} from 'uuid'

class Formulario extends React.Component<{ setTarefas : React.Dispatch<React.SetStateAction<Itarefa[]>>}> {
  state = {
    tarefa: '',
    tempo: '00:00:00'
  }

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    this.props.setTarefas(t => 
        [
            ...t,
            {
              ...this.state,
              selecionado: false,
              completado: false,
              id: uuidv4()
            }
        ]
    )
    this.setState({
        tarefa: '',
        tempo:'00:00:00'
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicionar novo estudo</label>
          <input
            name="tarefa"
            type="text"
            placeholder="O que você quer estudar"
            value={this.state.tarefa}
            onChange={e => this.setState({...this.state, tarefa: e.target.value})}
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            name="time"
            type="time"
            step={1}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            value={this.state.tempo}
            onChange={e => this.setState({...this.state, tempo: e.target.value})}
            required
          />
        </div>
        <Botao type="submit">Enviar</Botao>
      </form>
    );
  }
}

export default Formulario