import Itarefa from '../../../types/Itarefa';
import style from './Item.module.scss'


interface Props extends Itarefa {
    selecionaTarefa:  (tarefaSelecionada: Itarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
//   const {tarefa, tempo} = props
  return (
    <li 
        className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
        onClick={()=> selecionaTarefa({
            tarefa, 
            tempo,
            selecionado, 
            completado,
            id
        })}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
