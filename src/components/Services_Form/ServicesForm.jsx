// sass
import "./ServicesForm.sass"
// hooks
import { useState } from "react"
// components
import Inputs from '../Inputs/Inputs'

const ServicesForm = ({ handleSubmit, projectData }) => {

    const [services, setService] = useState([])

    const handleChange = (e) => {
        setService({ ...services, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        projectData.services.push(services)
        handleSubmit(projectData)
    }

  return (
    <form onSubmit={submit} className="form-services">
        <Inputs 
            type={`text`}
            text={`Nome do serviço`}
            name={`name`}
            placeholder={`Insira o nome do serviço`}
            handleOnChange={handleChange}
            value={services.name ? services.name : "" }
        />
         <Inputs 
            type={`number`}
            text={`Custo do serviço`}
            name={`cost`}
            placeholder={`Insira o valor do serviço`}
            handleOnChange={handleChange}
            value={services.cost ? services.cost : "" }
        />
         <Inputs 
            type={`text`}
            text={`Descrição do serviço`}
            name={`description`}
            placeholder={`Insira a descrição do serviço`}
            handleOnChange={handleChange}
            value={services.description ? services.description : "" }
        />
        <input type="submit" className="btn-add" value={`Adicionar Serviço`} />
    </form>
  )
}

export default ServicesForm