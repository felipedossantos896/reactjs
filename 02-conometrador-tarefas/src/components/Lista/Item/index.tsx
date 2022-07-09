import style from '../../Lista/Lista.module.scss'

const Item = ({ tarefa, tempo }: { tarefa: String, tempo: String }) => {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  )
}

export default Item
