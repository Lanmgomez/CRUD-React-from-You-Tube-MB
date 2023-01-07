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
        color: "#fb3"
    }

  return (
    <div>{registeredProjects.name ? (
        <div>
            <Container customClass="column">
                <div>
                    <h1>Projeto: {registeredProjects.name}</h1>
                            <p>Categorria: {registeredProjects.category.name}</p>
                            <p>Total de Orçamento: {registeredProjects.budget}</p>
                            <p>Total Utilizado: {registeredProjects.cost}</p>
                        <Button sx={buttonEdit} onClick={handleOpen}>Editar projeto</Button>
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
                                    <p>Projeto: {registeredProjects.name}</p>
                                    <p>Categorria: {registeredProjects.category.name}</p>
                                    <p>Total de Orçamento: {registeredProjects.budget}</p>
                                    <p>Total Utilizado: {registeredProjects.cost}</p>
                                </Typography>
                            </Box>
                        </Modal>
                </div>
            </Container>
        </div>
    ) : (<Loader />)}</div>
  )
}

export default EditProjectPage