// components
import CreateNewProjectButton from '../Create_New_Project_Button/CreateNewProjectButton'
import Inputs from '../Inputs/Inputs'
import Select from '../Select/Select'
// sass
import './ProjectForm.sass'
// hooks
import { useState, useEffect } from 'react'

const ProjectForm = ({ handleSubmit, projectData }) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    const CategoriesUrl = "http://localhost:5000/categories/"
 
// 03 - Axios lib:
   useEffect(() => {
        const FetchCategories = async () => {
            await axios.get(CategoriesUrl)
                       .then((response) => { setCategories(response.data) })
                       .catch((error) => console.log(error))
        }
        FetchCategories()
   }, [])

   const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
   }

   const handleChangeInput = (e) => {
    setProject({ ...project, [e.target.name] : e.target.value })
    console.log(project)
   }

   const handleChangeCategory = (e) => {
    setProject({ ...project, 
                    category: {
                        id: e.target.value,
                        name: e.target.options[e.target.selectedIndex].text
                    }
    })
   }

  return (
    <form onSubmit={submit}>
        <div>
            <Inputs 
                type={`text`}
                placeholder={`Insira o nome do projeto`}
                text={`Nome do projeto`}
                name={`name`}
                handleOnChange={handleChangeInput}
                value={project.name ? project.name : ""}
            />
            <Inputs 
                type={`number`}
                placeholder={`Insira do projeto`}
                text={`Orçamento do projeto`}
                name={`budget`}
                handleOnChange={handleChangeInput}
                value={project.budget ? project.budget : ""}
            />
        </div>
        <div>
            <Select 
                text={`Selecione a categoria`}
                name={`category_id`}
                options={categories}
                handleOnChange={handleChangeCategory}
                value={project.category ? project.category.id : ""}
            />
        </div>
        <div>
            <CreateNewProjectButton text={`Salvar`}/>
        </div>
    </form>
  )
}

export default ProjectForm