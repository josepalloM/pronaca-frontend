import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action as nuevoEmpleadoAction} from './pages/NuevoEmpleado'
import Index from './pages/Index'
import Pedidos from './pages/Pedidos'
import Item, { loader as itemsLoader } from './pages/Items'
import ListaItems, {loader as listaItemsloader} from './pages/ListaItems'
import NuevoItem, {action as nuevoItemAction} from './pages/NuevoItem'
//import ListaItems, {action as nuevaListaItemAction} from './pages/NuevoListaItem'

import Clientes, {loader as clienteLoader} from './pages/Clientes'
import Finanzas from './pages/Finanzas'
import Empleados, {loader as empleadosLoader} from './pages/Empleados'
import ErrorPage from './components/ErrorPage'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import {action as eliminarClienteAction} from "./components/Cliente"
import ActualizarCliente, {loader as actualizarClienteLoader, action as actualizarClienteAction} from './pages/ActualizarCliente.jsx'
import ActualizarItem, { loader as actualizarItemLoader, action as actualizarItemAction} from './pages/ActualizarItem'
import EmpleadoProduccion from './pages/EmpleadoProduccion'
import NuevoListaItem, {action as nuevaListaItemAction} from './pages/NuevoListaItem'

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
        path: '/gestor',
        element: <EmpleadoProduccion/>
      },
      {
        path: '/produccion',
        element: <Item/>,
        loader: itemsLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/gestorlista',
        element: <ListaItems/>,
        loader: listaItemsloader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/listaitem/nuevo',
        element: <NuevoListaItem/>,
        action: nuevaListaItemAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/item/nuevo',
        element: <NuevoItem/>,
        action: nuevoItemAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/item/:itemId/actualizar',
        element: <ActualizarItem/>,
        loader: actualizarItemLoader,
        action: actualizarItemAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes',
        element: <Clientes/>,
        loader: clienteLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/cliente/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteId/editar',
        element: <ActualizarCliente />,
        loader: actualizarClienteLoader,
        action: actualizarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path:  '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
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
