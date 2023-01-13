import { BsTrashFill } from 'react-icons/bs'
import styles from '../Projects_Cards_Infos/ProjectCardInfos.module.css'

const ServicesCard = ({ key, id, name, cost, description, handleRemove }) => {

    const removeService = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }

  return (
    <div key={key} className={styles.register_card}>
        <h4>{name}</h4>
            <p><span>Custo:</span> {cost}</p>
            <p><span>Descrição:</span> {description}</p>
        <div className={styles.project_card_actions}>
            <button onClick={removeService}>
                <BsTrashFill />Excluir
            </button>
        </div>
    </div>
  )
}

export default ServicesCard