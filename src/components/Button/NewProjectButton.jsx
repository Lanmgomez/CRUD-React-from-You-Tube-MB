import './NewProjectButton.sass'
import { Link } from 'react-router-dom'

const NewProjectButton = ({ to, text }) => {
  return (
    <button className='btn'>
        <Link to={to}>{text}</Link>
    </button>
  )
}

export default NewProjectButton