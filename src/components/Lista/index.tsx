
import Item from './item'
import style from './Lista.module.scss'
import Itarefa from '../../types/Itarefa'

interface Props {
    tarefas:Itarefa[],
    selecionaTarefa:  (tarefaSelecionada: Itarefa) => void
}

function Lista(props:  Props ) {
    const { tarefas, selecionaTarefa } = props
    return (
        <aside className={style.listaTarefas}>
            <h2>Adicione uma nova tarefa</h2>
            
            <ul>
                {tarefas.map(tarefa => (
                    <Item 
                        key={tarefa.id}
                        {...tarefa} 
                        selecionaTarefa={selecionaTarefa}
                        
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista