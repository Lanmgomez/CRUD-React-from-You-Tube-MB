// hooks
import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
// components
import ProjectCardInfos from '../Projects_Cards_Infos/ProjectCardInfos'
// sass
import "./SearchPage.sass"

const SearchPage = () => {

    // hook search
    const [searchParams] = useSearchParams()
    // api
    const [registeredProjects, setRegisteredProjects] = useState([])
    // delete message
    const [sucessDeletedMessage, setSucessDeletedMessage] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:5000/projects?${searchParams}`)
             .then((response) => { setRegisteredProjects(response.data) })
             .catch((error) => console.log(error)) 
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
    <div className='search-page'>
        <div className='title-search'>
            <h1>Resultados disponíveis da sua busca:</h1>
        </div>
        <div className='search-cards-infos'>
            {sucessDeletedMessage && <p className="delete-msg">Projeto deletado com sucesso!</p>}
            {registeredProjects.length === 0 && <p>Não há serviços cadastrados.</p>}
            {registeredProjects.map((registers) => (
                <ProjectCardInfos 
                    key={registers.id}
                    id={registers.id}
                    name={registers.name} 
                    budget={registers.budget}
                    category={registers.category.name}
                    handleRemove={handleRemoveProject}
                />
            ))}
        </div>
    </div>
  )
}

export default SearchPage