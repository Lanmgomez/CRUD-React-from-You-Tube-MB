import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Routes
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
// pages
import Home from "./pages/home_page/Home"
import Cadastros from "./pages/cadastros_page/Cadastros"
import NewProject from "./pages/new_project_page/NewProject"
import EditProjectPage from "./pages/Edit_Project_page/EditProjectPage"

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      { path: "/", element: <Home /> },
      { path: "/Cadastros", element: <Cadastros /> },
      { path: "/NewProject", element: <NewProject /> },
      { path: "/projects/:id", element: <EditProjectPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
