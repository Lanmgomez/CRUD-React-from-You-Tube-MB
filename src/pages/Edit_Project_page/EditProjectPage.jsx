import "./EditProjectPage.sass"
// hooks
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
// components
import Loader from "../../components/Loader/Loader"
import Container from "../../layout/Container"
// material ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProjectForm from "../../components/Project_Form/ProjectForm"

const EditProjectPage = () => {

    const { id } = useParams()
    
    const [registeredProjects, setRegisteredProjects] = useState([])
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://localhost:5000/projects/${id}`)
                .then((response) => { setRegisteredProjects(response.data) })
                .catch((error) => console.log(error)) 
        }, 300)
    }, [id])

    const editPost = (registeredProjects) => {
        axios.patch(`http://localhost:5000/projects/${registeredProjects.id}`, registeredProjects)
             .then((response) => { setRegisteredProjects(response.data), handleClose() })
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
            <Container>
                <div className="project-edit-card2">
                    <h1>Projeto: {registeredProjects.name}</h1>
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
            </Container>
    ) : (<Loader />)}
    </div>
  )
}

export default EditProjectPage