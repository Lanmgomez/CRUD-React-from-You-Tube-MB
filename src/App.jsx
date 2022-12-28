// hooks
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
// sass/css
import './App.sass'
// pages
import Home from "./pages/home_page/Home"
import AboutUs from "./pages/about_us_page/AboutUs"
import Cadastros from "./pages/cadastros_page/Cadastros"
import NewProject from "./pages/new_project_page/NewProject"
// components
import MenuNavbar from "./components/Menu/MenuNavbar"
import Container from "./layout/Container"
import Footer from "./components/Footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <MenuNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/Cadastros" element={<Cadastros />}/>
            <Route path="/NewProject" element={<NewProject />}/> 
          </Routes>
        </Container>
        <Footer />
    </BrowserRouter>
  )
}

export default App
