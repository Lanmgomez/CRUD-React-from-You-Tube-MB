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
import EditProjectPage from "./pages/Edit_Project_page/EditProjectPage"
// components
import MenuNavbar from "./components/Menu/MenuNavbar"
import Container from "./layout/Container"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
      <MenuNavbar />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/Cadastros" element={<Cadastros />}/>
            <Route path="/NewProject" element={<NewProject />}/>
            <Route path="/projects/:id" element={<EditProjectPage />}/> 
          </Routes>
        </Container>
        <Footer />
    </BrowserRouter>
  )
}

export default App
