import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action as nuevoEmpleadoAction} from './pages/NuevoEmpleado'
import Index from './pages/Index'
import Pedidos from './pages/Pedidos'
import Produccion from './pages/Produccion'
import Clientes from './pages/Clientes'
import Finanzas from './pages/Finanzas'
import Empleados, {loader as empleadosLoader} from './pages/Empleados'
import ErrorPage from './components/ErrorPage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: '/pedidos',
        element: <Pedidos/>
      },
      {
        path: '/produccion',
        element: <Produccion/>
      },
      {
        path: '/clientes',
        element: <Clientes/>,
      },
      {
        path: '/empleados',
        element: <Empleados/>,
        loader: empleadosLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/empleados/nuevo',
        element: <NuevoEmpleado/>,
        action: nuevoEmpleadoAction
      },
      {
        path: '/finanzas',
        element: <Finanzas/>
      }
    ]
  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
