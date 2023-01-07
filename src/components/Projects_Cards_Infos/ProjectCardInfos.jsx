// css
import styles from "./ProjectCardInfos.module.css"
// react icons
import { BsPencil, BsFillTrashFill } from "react-icons/bs"
// hooks
import { Link } from 'react-router-dom'

const ProjectCardInfos = ({ id, name, budget, category, handleRemove }) => {

  const removeProject = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.register_card}>
        <h4>{name}</h4>
            <p><span>Orçamento:</span> R${budget}</p>
            <p className={styles.category_text}><span className={`${styles[category.toLowerCase()]}`}></span>{category}</p>
        <div className={styles.project_card_actions}>
            <Link to={`/projects/${id}`}>
                <BsPencil /> Editar
            </Link>
            <button onClick={removeProject}>
                <BsFillTrashFill /> Excluir    
            </button>    
        </div>    
    </div>
  )
}

export default ProjectCardInfos