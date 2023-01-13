import "./EditProjectPage.sass"
// hooks
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
// components
import Loader from "../../components/Loader/Loader"
import ServicesForm from "../../components/Services_Form/ServicesForm"
import ServicesCard from "../../components/Services_Card/ServicesCard"
import ProjectForm from "../../components/Project_Form/ProjectForm"
// material ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const EditProjectPage = () => {

    const { id } = useParams()
    
    // api
    const [registeredProjects, setRegisteredProjects] = useState([])
    const [registeredServices, setRegisteredServices] = useState([])

    // modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // messages
    const [editMessageSucess, setEditMessageSucess] = useState(false)
    const [errorServiceMSG, setErrorServiceMSG] = useState(false)
    const [deleteServiceMSG, setDeleteServiceMSG] = useState(false)
    // component
    const [showServiceForm, setServiceForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:5000/projects/${id}`)
                .then((response) => { setRegisteredProjects(response.data), setRegisteredServices(response.data.services) })
                .catch((error) => console.log(error)) 
        }, 300)
    }, [id])

    // messages
    const MessageSucess = () => {
        setEditMessageSucess(true)
        const timer = setTimeout(() => { setEditMessageSucess(false) }, 3500)
        return () => clearTimeout(timer)
    }

    const deleteServiceMSGs = () => {
        setDeleteServiceMSG(true)
        const timer = setTimeout(() => { setDeleteServiceMSG(false) }, 3500)
        return () => clearTimeout(timer)
    }

    const errorCostServiceValidation = () => {
        setErrorServiceMSG(true)
            const timer = setTimeout(() => { setErrorServiceMSG(false) }, 4000)
            return () => clearTimeout(timer)
    }

    const editPost = (registeredProjects) => {
        // budget validation
        if (registeredProjects.budget < registeredProjects.cost) {
            // message
        }

        axios.patch(`http://localhost:5000/projects/${registeredProjects.id}`, registeredProjects)
             .then((response) => { setRegisteredProjects(response.data), handleClose(), MessageSucess() })
             .catch((error) => console.log(error))            
    }

    const toggleServiceForm = () => {
        setServiceForm(!showServiceForm)
    }

    const createService = (registeredProjects) => {
        // last service
        const lastService = registeredProjects.services[registeredProjects.services.length -1]
        lastService.id = Math.floor( Math.random() * 1000 )
        const lastServiceCost = lastService.cost
        const newCost = parseFloat(registeredProjects.cost) + parseFloat(lastServiceCost)

        // maximum value validation cost vs budget
        if (newCost > parseFloat(registeredProjects.budget)) {
            errorCostServiceValidation()
            return
        } else {
            MessageSucess()
            setServiceForm(false)
        }
        // add service cost to project total cost
        registeredProjects.cost = newCost

        // update project
        axios.patch(`http://localhost:5000/projects/${registeredProjects.id}`, registeredProjects)
            .then((response) => { setRegisteredProjects(response.data), console.log(response.data) })
            .catch((error) => console.log(error))
    }

    // remove service 
    const handleRemoveService = (id, cost) => {
        // removing cost register of total budget (rescuing cost)
        const servicesUpdated = registeredProjects.services.filter((service) => service.id !== id)
        const projectUpdated = registeredProjects
        projectUpdated.services = servicesUpdated

        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        axios.patch(`http://localhost:5000/projects/${projectUpdated.id}`, projectUpdated)
             .then((response) => { 
                setRegisteredProjects(projectUpdated),
                setRegisteredServices(servicesUpdated),
                deleteServiceMSGs()
            })
            .catch((error) => console.log(error)) 
    }

    // css lib modal @material/ui
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const buttonEdit = {
        bgcolor: "#000",
        color: "#fb3",
        top: "20px" 
    }

  return (
    <div className="project-edit-card">{registeredProjects.name ? (
            <div>
                {editMessageSucess &&  <p className="editMessageSucess">Alterações salvas</p>}
                <div className="project-edit-card2">
                    <h1 className="title">Projeto: {registeredProjects.name}</h1>
                            <p><span>Categoria:</span> {registeredProjects.category.name}</p>
                            <p><span>Total de Orçamento:</span> R$ {registeredProjects.budget}</p>
                            <p><span>Total Utilizado:</span> R$ {registeredProjects.cost}</p>
                        <Button sx={buttonEdit} onClick={handleOpen}>Editar projeto</Button>
                </div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Edite as Informações
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <ProjectForm 
                                        handleSubmit={editPost} 
                                        projectData={registeredProjects}
                                    />
                                </Typography>
                            </Box>
                        </Modal>
                <div className="service-form-container">
                    <h1>Adicione um serviço:&nbsp;
                        <button className="add-service-btn-style" onClick={toggleServiceForm}>
                        {!showServiceForm ? "+" : "Fechar"}  
                        </button>
                    </h1>
                    {errorServiceMSG && <p className="errorServiceMSG">Custo excedeu o limite do orçamento, verifique novamente!</p>}
                    {showServiceForm && (
                            <ServicesForm 
                                handleSubmit={createService}
                                projectData={registeredProjects} 
                                btnText={"Adicionar Serviço"}
                            />
                        )}
                </div>
                <div className="services">
                    <h1>Serviços:</h1>
                        {deleteServiceMSG && <p className="errorServiceMSG">Serviço deletado com sucesso!</p>}
                        {registeredServices.length === 0 && <p>Não há serviços cadastrados.</p>}
                        {registeredServices.length > 0 && 
                            registeredServices.map((services) => (
                                <ServicesCard 
                                    key={services.id}
                                    id={services.id}
                                    name={services.name}
                                    cost={services.cost}
                                    description={services.description}
                                    handleRemove={handleRemoveService}
                                />
                            ))
                        }
                </div>
            </div>
    ) : (<Loader />)}
    </div>
  )
}

export default EditProjectPage