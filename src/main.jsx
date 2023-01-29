import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action as nuevoEmpleadoAction} from './pages/NuevoEmpleado'
import Index from './pages/Index'
import Pedidos, { loader as pedidoLoader } from './pages/Pedidos'
import Item, { loader as itemsLoader } from './pages/Items'
import NuevoItem, {action as nuevoItemAction} from './pages/NuevoItem'

//import ActualizarItem, {action as actualizarItemAction} from '.pages/ActualizarItem'
import Clientes, {loader as clienteLoader} from './pages/Clientes'
import Finanzas from './pages/Finanzas'
import Empleados, {loader as empleadosLoader} from './pages/Empleados'
import ErrorPage from './components/ErrorPage'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import {action as eliminarClienteAction} from "./components/Cliente"
import ActualizarCliente, {loader as actualizarClienteLoader, action as actualizarClienteAction} from './pages/ActualizarCliente.jsx'

import ActualizarItem, { loader as actualizarItemLoader} from './pages/ActualizarItem'

import NuevoPedido, {action as nuevoPedidoAction} from './pages/NuevoPedido'



// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'


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
        element: <Pedidos/>,
        loader: pedidoLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/pedido/nuevo',
        element: <NuevoPedido/>,
        action: nuevoPedidoAction
      },
      // {
      //   path: '/Pedidos/:pedidoId/editar',
      //   element: <ActualizarPedido />,
      //   loader: actualizarPedidoLoader,
      //   action: actualizarPedidoAction,
      //   errorElement: <ErrorPage />
      // },
      // {
      //   path:  '/pedidos/:pedidoId/eliminar',
      //   action: eliminarPedidoAction
      // },
      {
        path: '/produccion',
        element: <Item/>,
        loader: itemsLoader,
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
      },
      {
        path: '*',
        element: <Index/>
      }
    ]
  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
