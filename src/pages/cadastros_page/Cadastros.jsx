import Messages from "../../layout/Messages"
import "./Cadastros.sass"
import { useLocation } from "react-router-dom"

const Cadastros = () => {

  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }

  return (
    <div>
      <h1>Meus Projetos</h1>
      {message && <Messages msg={message} type={`success`} />}
    </div>
  )
}

export default Cadastros