import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action as nuevoEmpleadoAction, loader as cargarDepartamentoCargo} from './pages/NuevoEmpleado'
import NuevoDepartamento, {action as nuevoDepartamentoAction} from './pages/NuevoDepartamento'
import NuevoCargo, {loader as nuevoCargoLoader, action as nuevoCargoAction} from './pages/NuevoCargo'
import Index from './pages/Index'
import Pedidos from './pages/Pedidos'
import Item, { loader as itemsLoader } from './pages/Items'
import BalanceGeneral, { loader as balanceLoader } from './pages/BalanceGeneral'
import EstadoFinanciero, { loader as estadoLoader } from './pages/EstadoFinanciero'
import NuevoItem, {action as nuevoItemAction} from './pages/NuevoItem'
//import ActualizarItem, {action as actualizarItemAction} from '.pages/ActualizarItem'
import Clientes from './pages/Clientes'
import Finanzas from './pages/Finanzas'
import Empleados, {loader as empleadosLoader} from './pages/Empleados'
import {action as pagarEmpleado} from './components/Empleado'
import ActualizarIess, {loader as iess, action as nuevoIess} from './pages/ActualizarIess'
import {loader as eliminarEmpleado} from './pages/EliminarEmpleado'
import ErrorPage from './components/ErrorPage'
////actualizar empleado

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
        action: nuevoEmpleadoAction,
        loader: cargarDepartamentoCargo
      },

      {
        path: '/empleados/:empleadoId/editar',
        element: <ActualizarEmpleado />,
        loader: actualizarEmpleadoLoader,
        action: actualizarEmpleadoAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/empleados/:empleadoId/pagar',
        action: pagarEmpleado
      },
      {
        path:'/empleados/iess',
        element: <ActualizarIess/>,
        loader: iess,
        action: nuevoIess
      },
      {
        path:'/empleados/:empleadoId/eliminar',
        loader: eliminarEmpleado
      },
      {
        path: '/finanzas',
        element: <Finanzas/>
      },
      {
        path: '/empleados/departamentos/nuevo',
        element: <NuevoDepartamento/>,
        action: nuevoDepartamentoAction
      },
      {
        path: '/empleados/cargos/nuevo',
        element: <NuevoCargo/>,
        loader: nuevoCargoLoader,
        action: nuevoCargoAction
      },
      {
        path: '/finanzas/balance',
        element: <BalanceGeneral/>,
        loader: balanceLoader,
      },
      {
        path: '/finanzas/estado',
        element: <EstadoFinanciero/>,
        loader: estadoLoader,
      }
    ]
  },
 
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
