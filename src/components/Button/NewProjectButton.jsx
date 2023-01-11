import './NewProjectButton.sass'
import { Link } from 'react-router-dom'

const NewProjectButton = ({ to, btnText }) => {
  return (
    <button className='btn'>
        <Link to={to}>{btnText}</Link>
    </button>
  )
}

export default NewProjectButton