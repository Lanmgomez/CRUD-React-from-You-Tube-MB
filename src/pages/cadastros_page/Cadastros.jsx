// css
import "./Cadastros.sass"
// hooks
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react" 
// components
import Messages from "../../layout/Messages"
import Container from "../../layout/Container"
import NewProjectButton from "../../components/Button/NewProjectButton"
import ProjectCardInfos from "../../components/Projects_Cards_Infos/ProjectCardInfos"
import Loader from "../../components/Loader/Loader"
 
const Cadastros = () => {

  const [registeredProjects, setRegisteredProjects] = useState([])
  const [loadingImg, setLoadingImg] = useState(false)
  const [sucessDeletedMessage, setSucessDeletedMessage] = useState(false)
  
  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:5000/projects/")
         .then((response) => { setRegisteredProjects(response.data), setLoadingImg(true) })
         .catch((error) => console.log(error))
    }, 300)
  }, [])

  const DeleteMessage = () => {
    const timer = setSucessDeletedMessage(true)
    setTimeout(() => { setSucessDeletedMessage(false) }, 3000)
    return () => clearTimeout(timer)
  }

  const handleRemoveProject = (id) => {
    axios.delete(`http://localhost:5000/projects/${id}`)
         .then(setRegisteredProjects(registeredProjects.filter((register) => register.id !== id)),
               DeleteMessage()
         )         
         .catch((error) => console.log(error)) 
  }

  return (
    <div className="project-container">
      <div className="title-container">
        <h1>Meus Projetos</h1>
        <NewProjectButton to={`/NewProject`} text="Novo Projeto" />
      </div>
      {message && <Messages msg={message} type={`success`} />}
      <Container customClass="start">
          {registeredProjects.length > 0 && 
            registeredProjects.map((registers) => (
              <ProjectCardInfos 
                  key={registers.id}
                  id={registers.id}
                  name={registers.name} 
                  budget={registers.budget}
                  category={registers.category.name}
                  handleRemove={handleRemoveProject}
              />
            ))}
            {registeredProjects.length == "" && <p>Não há projetos cadastrados...</p>}
            {!loadingImg && <Loader />}
            {sucessDeletedMessage && <p className="delete-msg">Projeto deletado com sucesso!</p>}
      </Container>
    </div>
  )
}

export default Cadastros