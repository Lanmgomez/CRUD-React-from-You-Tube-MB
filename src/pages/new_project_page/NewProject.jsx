import ProjectForm from "../../components/Project_Form/ProjectForm"
import "./NewProject.sass"

const NewProject = () => {
  return (
    <div className="new-project-container">
      <h1>Crie seu orçamento</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm />
    </div>
  )
}

export default NewProject