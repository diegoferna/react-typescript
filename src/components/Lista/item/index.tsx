import Itarefa from '../../../types/Itarefa';
import style from '../Lista.module.scss'

export default function Item({tarefa, tempo, selecionado, completado}: Itarefa) {
//   const {tarefa, tempo} = props



  return (
    <li className={style.item} >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
