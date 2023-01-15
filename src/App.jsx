// hooks
import { Outlet } from "react-router-dom"
// sass/css
import './App.sass'
// components
import MenuNavbar from "./components/Menu/MenuNavbar"
import Container from "./layout/Container"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div>
        <MenuNavbar />
          <Outlet>
            <Container />
          </Outlet>
        <Footer />
    </div>
  )
}

export default App
