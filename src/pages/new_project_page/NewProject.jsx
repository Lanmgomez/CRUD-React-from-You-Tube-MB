import ProjectForm from "../../components/Project_Form/ProjectForm"
import "./NewProject.sass"
import { useNavigate } from 'react-router-dom'

const NewProject = () => {

  const navigate = useNavigate()

  const URL_Projects = "http://localhost:5000/projects/"

  const createPost = async (project) => {
    project.cost = 0
    project.services = []

    // 02 - Axios lib  
    await axios.post(URL_Projects, project)
               .then((response) => { console.log(response); navigate('/Cadastros', { state: {message: "Projeto criado com sucesso!"} }) })
               .catch((error) => console.log(error))
  }

  return (
    <div className="new-project-container">
      <h1>Crie seu orçamento</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} />
    </div>
  )
}

export default NewProject