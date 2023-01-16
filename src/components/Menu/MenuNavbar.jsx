// sass
import './MenuNavbar.sass'
// icons / img
import Logo from '../../assets/costs_logo.png'
// hooks
import { Link } from 'react-router-dom'
// components
import SearchBar from '../Search_Bar/SearchBar'
import MenuMobile from './MenuMobile'

const MenuNavbar = () => {
  return (
    <nav className='Menu-Navbar'>
      <div>
        <Link to={`/`}><img src={Logo} alt="Costs-Logo" /></Link>
      </div>
      <div>
        <SearchBar />
      </div>
      <ul className='ul-navbar'>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/Cadastros`}>Cadastros</Link></li>
        <li><Link to={`/NewProject`}>Novo Projeto</Link></li>
      </ul>
      <MenuMobile />
    </nav>
  )
}

export default MenuNavbar