import { Link } from 'react-router-dom'
// sass
import './MenuNavbar.sass'
// icons / img
import { ImMenu } from "react-icons/im"
import Logo from '../../assets/costs_logo.png'
// hooks
import { useState } from "react"

const MenuNavbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false)

  const ShowMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <nav className='Menu-Navbar'>
      <div>
        <Link to={`/`}><img src={Logo} alt="Costs-Logo" /></Link>
      </div>
      <ul className='ul-navbar'>
        <li><Link to={`/`}>Home</Link></li>
        <li><Link to={`/AboutUs`}>Sobre Nós</Link></li>
        <li><Link to={`/Cadastros`}>Cadastros</Link></li>
        <li><Link to={`/NewProject`}>Novo Projeto</Link></li>
      </ul>
      <div className='sandwuiche-mobile-menu'>
        <ImMenu onClick={ShowMobileMenu} className='ImMenu'/>
      </div>
      {mobileMenu && 
        <ul className='ul-navbar-mobile'>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/AboutUs`}>Sobre Nós</Link></li>
          <li><Link to={`/Cadastros`}>Cadastros</Link></li>
          <li><Link to={`/NewProject`}>Novo Projeto</Link></li>
        </ul>
      }
    </nav>
  )
}

export default MenuNavbar