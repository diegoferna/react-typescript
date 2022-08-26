import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Itarefa from "../types/Itarefa";
import style from "./App.module.scss";


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>(); 

  function selecionaTarefa(tarefaSelecionada: Itarefa){
     setSelecionado(tarefaSelecionada)
     setTarefas((tarefasAntigas) => tarefasAntigas.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
     })) )
  }

  return (
  
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado}/>
      
    </div>
  );
}


export default App;
