import Messages from "../../layout/Messages"
import "./Cadastros.sass"
import { useLocation } from "react-router-dom"
import Container from "../../layout/Container"
import NewProjectButton from "../../components/Button/NewProjectButton"
 
const Cadastros = () => {

  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }

  return (
    <div className="project-container">
      <div className="title-container">
        <h1>Meus Projetos</h1>
        <NewProjectButton to={`/NewProject`} text="Novo Projeto" />
      </div>
      {message && <Messages msg={message} type={`success`} />}
      <Container>
          <p>Projetos...</p>
      </Container>
    </div>
  )
}

export default Cadastros