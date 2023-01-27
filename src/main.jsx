import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action as nuevoEmpleadoAction} from './pages/NuevoEmpleado'
import Index from './pages/Index'
import Pedidos from './pages/Pedidos'
import Item, { loader as itemsLoader } from './pages/Items'
import NuevoItem, {action as nuevoItemAction} from './pages/NuevoItem'
//import ActualizarItem, {action as actualizarItemAction} from '.pages/ActualizarItem'
import Clientes from './pages/Clientes'
import Finanzas from './pages/Finanzas'
import Empleados, {loader as empleadosLoader} from './pages/Empleados'
import ErrorPage from './components/ErrorPage'

//////import main
import {action as eliminarEmpleadoAction} from "./components/Empleado"
import ActualizarEmpleado, {loader as actualizarEmpleadoLoader, action as actualizarEmpleadoAction} from './pages/ActualizarEmpleado.jsx'




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
        element: <Item/>,
        loader: itemsLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/item/nuevo',
        element: <NuevoItem/>,
        action: nuevoItemAction
      },
      /*{
        path: '/item/actualizar',
        element: <ActualizarItem/>,
        action: actualizarItemAction
      },*/
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
