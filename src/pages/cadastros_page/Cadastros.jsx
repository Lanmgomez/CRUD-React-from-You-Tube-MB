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
 
const Cadastros = () => {

  const [registeredProjects, setRegisteredProjects] = useState([])
  
  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    axios.get("http://localhost:5000/projects/")
         .then((response) => { setRegisteredProjects(response.data) })
         .catch((error) => console.log(error))
  }, [])

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
                  name={registers.name} 
                  budget={registers.budget}
                  category={registers.category.name}
              />
            ))}
            {registeredProjects.length == "" && <p>Não há projetos cadastrados...</p>}
      </Container>
    </div>
  )
}

export default Cadastros