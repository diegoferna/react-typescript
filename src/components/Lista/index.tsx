
import Item from './item'
import style from './Lista.module.scss'
import Itarefa from '../../types/Itarefa'


function Lista(props: { tarefas:Itarefa[] }) {
    const { tarefas } = props
    return (
        <aside className={style.listaTarefas}>
            <h2>Adicione uma nova tarefa</h2>
            
            <ul>
                {tarefas.map((tarefa, index) => (
                    <Item {...tarefa} key={index}/>
                ))}
            </ul>
        </aside>
    )
}

export default Lista