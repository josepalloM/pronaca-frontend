import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action as nuevoEmpleadoAction, loader as cargarDepartamentoCargo} from './pages/NuevoEmpleado'
import NuevoDepartamento, {action as nuevoDepartamentoAction} from './pages/NuevoDepartamento'
import NuevoCargo, {loader as nuevoCargoLoader, action as nuevoCargoAction} from './pages/NuevoCargo'
import Index from './pages/Index'
import Pedidos, { loader as pedidoLoader } from './pages/Pedidos'
import Item, { loader as itemsLoader } from './pages/Items'

import BalanceGeneral, { loader as balanceLoader } from './pages/BalanceGeneral'
import EstadoFinanciero, { loader as estadoLoader } from './pages/EstadoFinanciero'
import ListaItems, {loader as listaItemsloader} from './pages/ListaItems'
import NuevoItem, {action as nuevoItemAction} from './pages/NuevoItem'
//import ListaItems, {action as nuevaListaItemAction} from './pages/NuevoListaItem'

import Clientes, {loader as clienteLoader} from './pages/Clientes'
import Finanzas from './pages/Finanzas'
import Empleados, {loader as empleadosLoader} from './pages/Empleados'
import Departamentos, {loader as departamentosLoader} from './pages/Departamentos'
import {action as pagarEmpleado} from './components/Empleado'
import ActualizarIess, {loader as iess, action as nuevoIess} from './pages/ActualizarIess'
import {loader as eliminarEmpleado} from './pages/EliminarEmpleado'
import {loader as eliminarDepartamento} from './pages/EliminarDepartamento'
import ErrorPage from './components/ErrorPage'
import NuevoCliente, {action as nuevoClienteAction, loader as nuevoClienteLoader} from './pages/NuevoCliente'
import {action as eliminarClienteAction} from "./components/Cliente"
import ActualizarCliente, {loader as actualizarClienteLoader, action as actualizarClienteAction} from './pages/ActualizarCliente.jsx'
import ActualizarItem, { loader as actualizarItemLoader, action as actualizarItemAction} from './pages/ActualizarItem'
import EmpleadoProduccion from './pages/EmpleadoProduccion'
import NuevoListaItem, {action as nuevaListaItemAction} from './pages/NuevoListaItem'

import NuevoPedido, {action as nuevoPedidoAction} from './pages/NuevoPedido'
import PedidosOpciones from './pages/PedidosOpciones'
import Preventas, {loader as preventaLoader} from './pages/Preventas'
import NuevaPreventa, {action as nuevaPreventaAction} from './pages/NuevaPreventa'
import ActualizarPedido, {loader as actualizarPedidoLoader, action as actualizarPedidoAction} from './pages/ActualizarPedido'
import ActualizarEmpleado, {loader as actualizarEmpleadoLoader, action as actualizarEmpleadoAction} from './pages/ActualizarEmpleado.jsx'
import ActualizarDepartamento, {loader as actualizarDepartamentoLoader, action as actualizarDepartamentoAction} from './pages/ActualizarDepartamento.jsx'


import NuevaCuenta, {action as nuevaCuenta} from './pages/NuevaCuenta'
import Cuentas, {loader as obtenerCuentas} from './pages/Cuentas'
import NuevoAsiento, {action as nuevoAsiento} from './pages/NuevoAsiento'
import {action as eliminarAsiento} from './components/Asiento'
import Asiento, {loader as obtenerAsientos} from './pages/Asientos'


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
        path: '/opciones',
        element: <PedidosOpciones/>
      },
      {
        path: '/opciones/preventa',
        element: <Preventas/>,
        loader: preventaLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/opciones/preventa/nuevo',
        element: <NuevaPreventa/>,
        action: nuevaPreventaAction
      },
      {
        path: '/opciones/pedidos',
        element: <Pedidos/>,
        loader: pedidoLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/opciones/pedido/nuevo',
        element: <NuevoPedido/>,
        action: nuevoPedidoAction,
        loader: pedidoLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/gestor',
        element: <EmpleadoProduccion/>
      },
      {
        path: '/pedido/:pedidoId/editar',
        element: <ActualizarPedido />,
        loader: actualizarPedidoLoader,
        action: actualizarPedidoAction,
        errorElement: <ErrorPage />
      },
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
        loader: nuevoClienteLoader,
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
        path: '*',
        element: <Index/>
      },
      {
        path: '/empleados/departamentos',
        element: <Departamentos/>,
        loader: departamentosLoader,
      },
      {
        path: '/empleados/departamentos/nuevo',
        element: <NuevoDepartamento/>,
        action: nuevoDepartamentoAction
      },
      {
        path: '/empleados/departamentos/:departamentoId/editar',
        element: <ActualizarDepartamento/>,
        loader: actualizarDepartamentoLoader,
        action: actualizarDepartamentoAction,
      },
      {
        path:'/empleados/departamentos/:departamentoId/eliminar',
        loader: eliminarDepartamento
      },
      {
        path: '/empleados/cargos/nuevo',
        element: <NuevoCargo/>,
        loader: nuevoCargoLoader,
        action: nuevoCargoAction
      },
      {
        path: '/finanzas/cuentas',
        element: <Cuentas/>,
        loader: obtenerCuentas
      },
      {
        path: '/finanzas/cuentas/nuevo',
        element: <NuevaCuenta/>,
        loader: obtenerCuentas,
        action: nuevaCuenta
      },
      
      {
        path: '/finanzas/asientos/nuevo',
        element: <NuevoAsiento/>,
        loader: obtenerCuentas,
        action: nuevoAsiento
      },
      {
        path: '/finanzas/asientos',
        element: <Asiento/>,
        loader: obtenerAsientos
      },
      {
        path:'/finanzas/asientos/:asientoId/eliminar',
        action: eliminarAsiento
      },
      {
        path: '/finanzas/balance',
        element: <BalanceGeneral/>,
        loader: balanceLoader
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
