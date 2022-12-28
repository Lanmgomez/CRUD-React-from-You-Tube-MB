import "./Home.sass"
import savings from "../../assets/savings.svg"
import NewProjectButton from "../../components/Button/NewProjectButton"

const Home = () => {
  return (
    <section className="home-container">
      <h1>Bem vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <NewProjectButton to={`/NewProject`} text="Novo Projeto"/>
        <img src={savings} className="savings-img" alt="Costs" />
    </section>
  )
}

export default Home