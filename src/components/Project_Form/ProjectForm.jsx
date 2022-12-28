// components
import CreateNewProjectButton from '../Create_New_Project_Button/CreateNewProjectButton'
import Inputs from '../Inputs/Inputs'
import Select from '../Select/Select'
// sass
import './ProjectForm.sass'
// hooks
import { useState, useEffect } from 'react'

const ProjectForm = () => {

    const [categories, setCategories] = useState([])

    const CategoriesUrl = "http://localhost:5000/categories/"

    // Fetch method 01 
    /*
    useEffect(() => {
        const FetchCategories = async () => {
            const response = await fetch(CategoriesUrl)
            const data = await response.json()
            setCategories(data)
        }
        FetchCategories()
    }, [])
    */
    // Fetch method 02
    
   useEffect(() => {
        const FetchCategories = async () => {
            await fetch(CategoriesUrl, {
                method: "GET",
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => { setCategories(data) })
            .catch(error => console.log(error))
        }
        FetchCategories()
   })

  return (
    <form>
        <div>
            <Inputs 
                type={`text`}
                placeholder={`Insira o nome do projeto`}
                text={`Nome do projeto`}
                name={`name`}
            />
            <Inputs 
                type={`number`}
                placeholder={`Insira do projeto`}
                text={`Orçamento do projeto`}
                name={`budget`}
            />
        </div>
        <div>
            <Select 
                text={`Selecione a categoria`}
                name={`category_id`}
                options={categories}
                onChange={``}
                value={``}
            />
        </div>
        <div>
            <CreateNewProjectButton text={`Criar Novo Projeto`}/>
        </div>
    </form>
  )
}

export default ProjectForm