import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, {action, action as nuevoEmpleadoAction, loader as cargarDepartamentoCargo} from './pages/NuevoEmpleado'
import NuevoDepartamento, {loader as nuevoDepartamentoLoader, action as nuevoDepartamentoAction} from './pages/NuevoDepartamento'
import NuevoCargo, {loader as nuevoCargoLoader, action as nuevoCargoAction} from './pages/NuevoCargo' //
import Index from './pages/Index'
import Pedidos, { loader as pedidoLoader } from './pages/Pedidos'
import Item, { loader as itemsLoader } from './pages/Items'
import Recetas_Produccion,{ loader as recetaLoader} from './pages/Receta'
import NuevaReceta_Produccion ,{action as nuevoRecetaAction} from './pages/NuevoReceta'
import TipoListaProduc,{ loader as tipolistaLoader} from './pages/TipoListaProduc'

import BalanceGeneral, { loader as balanceLoader } from './pages/BalanceGeneral'
import EstadoFinanciero, { loader as estadoLoader } from './pages/EstadoFinanciero'
import ListaItems, {loader as listaItemsloader} from './pages/ListaItems'
import NuevoItem, {action as nuevoItemAction} from './pages/NuevoItem'

import Clientes, {loader as clienteLoader} from './pages/Clientes'
import Finanzas from './pages/Finanzas'
///
import EmpleadosMenu from './pages/EmpleadosMenu'
import Empleados, {loader as empleadosLoader, action as pagar} from './pages/Empleados'
import Departamentos, {loader as departamentosLoader} from './pages/Departamentos'
import Cargos, {loader as cargosLoader} from './pages/Cargos' //
import {loader as eliminarEmpleado} from './pages/EliminarEmpleado'
import {loader as eliminarDepartamento} from './pages/EliminarDepartamento'
import {loader as eliminarCargo} from './pages/EliminarCargo' //
import ErrorPage from './components/ErrorPage'
import NuevoCliente, {action as nuevoClienteAction, loader as nuevoClienteLoader} from './pages/NuevoCliente'
import {action as eliminarClienteAction} from "./components/Cliente"
import ActualizarCliente, {loader as actualizarClienteLoader, action as actualizarClienteAction} from './pages/ActualizarCliente.jsx'
import ActualizarItem, { loader as actualizarItemLoader, action as actualizarItemAction} from './pages/ActualizarItem'
import ActualizarListaItem, {loader as actualizarListaItemLoader, action as actualizarListaItemAction} from './pages/ActializarListaItem'
import EmpleadoProduccion from './pages/EmpleadoProduccion'
import NuevoListaItem, {action as nuevaListaItemAction} from './pages/NuevoListaItem'
import {action as eliminarListaItemAction} from './components/ListaItem'
import {action as eliminarItemAction} from './components/Item'

import NuevoPedido, {action as nuevoPedidoAction, loader as nuevoPedidoLoader} from './pages/NuevoPedido'
import PedidosOpciones from './pages/PedidosOpciones'
import Preventas, {loader as preventaLoader} from './pages/Preventas'
import NuevaPreventa, {action as nuevaPreventaAction, loader as nuevaPreventaLoader} from './pages/NuevaPreventa'
import ActualizarPedido, {loader as actualizarPedidoLoader, action as actualizarPedidoAction} from './pages/ActualizarPedido'
import ActualizarEmpleado, {loader as actualizarEmpleadoLoader, action as actualizarEmpleadoAction} from './pages/ActualizarEmpleado.jsx'
import ActualizarDepartamento, {loader as actualizarDepartamentoLoader, action as actualizarDepartamentoAction} from './pages/ActualizarDepartamento.jsx'
import ActualizarCargo, {loader as actualizarCargoLoader, action as actualizarCargoAction} from './pages/ActualizarCargo.jsx' //


import NuevaCuenta, {action as nuevaCuenta} from './pages/NuevaCuenta'
import Cuentas, {loader as obtenerCuentas, action as eliminarCuenta} from './pages/Cuentas'
import NuevoAsiento, {action as nuevoAsiento} from './pages/NuevoAsiento'
import {action as eliminarAsiento} from './components/Asiento'
import Asiento, {loader as obtenerAsientos} from './pages/Asientos'
import Login/*, {action as loginAction}*/ from './pages/Login'
import Registro from './pages/Registro'
import { RutasPrivadas} from './routes/RutasPrivadas'
import Prueba from './pages/Prueba'


import NuevoParametro, {action as nuevoParametro} from './pages/NuevoIess'
import ActualizarIess, {loader as iess, action as actualizarIess} from './pages/ActualizarIess'
import ParametrosIESS, {loader as parametros, action as eliminarIess} from './pages/Parametros_IESS'


import Bancos, {loader as obtenerBancos, action as eliminarBanco} from './pages/Bancos'
import NuevoBanco, {action as nuevoBanco} from './pages/NuevoBanco'
import ActualizarBanco, {loader as obtenerBanco, action as actualizarBanco } from './pages/ActualizarBanco'

//Detalle pedido
import NuevoDetalle_Pedido, {action as nuevoDetalle_PedidoAction, loader as nuevoDetalle_PedidoLoader} from './pages/NuevoDetalle_Pedido'

// Import all of Bootstrap's JS
//import * as bootstrap from 'bootstrap'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,

    children: [
      
      {
        path: '/login',
        element: <Login/>,
        //action: loginAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/registro',
        element: <Registro/>
      },


      {
        path:'/rutas',
        element: <RutasPrivadas/>,
      },


      {
        index: true,
        element: <Index/>,
        
      },
      {
        path: '/opciones',
        element:<PedidosOpciones/>
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
        action: nuevaPreventaAction,
        loader: nuevaPreventaLoader
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
        loader: nuevoPedidoLoader,
        errorElement: <ErrorPage/>
      },
      //Detalle pedido
      {
        path: '/opciones/pedido/detalle/nuevo',
        element: <NuevoDetalle_Pedido/>,
        action: nuevoDetalle_PedidoAction,
        loader: nuevoDetalle_PedidoLoader,
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
      {
        path: '/empleados_menu',
        element: <EmpleadosMenu/>
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
        path: '/gestorreceta',
        element: <Recetas_Produccion/>,
        loader: recetaLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/receta/nuevo',
        element: <NuevaReceta_Produccion/>,
        action: nuevoRecetaAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/gestortipolista',
        element: <TipoListaProduc/>,
        loader: tipolistaLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/listaitem/nuevo',
        element: <NuevoListaItem/>,
        action: nuevaListaItemAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/listaitem/:listaId/actualizar',
        element: <ActualizarListaItem/>,
        loader: actualizarListaItemLoader,
        action: actualizarListaItemAction,
        errorElement: <ErrorPage/>
      },
      {
        path:  '/listaitem/:listaId/eliminar',
        action: eliminarListaItemAction
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
        path:  '/item/:itemId/eliminar',
        action: eliminarItemAction
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
        action: pagar,
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
        path: '/empleados/iess',
        element: <ParametrosIESS />,
        loader: parametros,
        errorElement: <ErrorPage />
      },
      {
        path: '/empleados/:empleadoId/pagar',
        action: pagar
        
      },
      {
        path:'/empleados/iess/:iessId/editar',
        element: <ActualizarIess/>,
        loader: iess,
        action: actualizarIess
      },
      {
        path:'/empleados/iess/nuevo',
        element: <NuevoParametro/>,
        action: nuevoParametro
      },
      {
        path:'/empleados/iess/:iessId/eliminar',
        action: eliminarIess
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
        loader: nuevoDepartamentoLoader,
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
        path: '/empleados/cargos',
        element: <Cargos/>,
        loader: cargosLoader,
      },
      {
        path: '/empleados/cargos/nuevo',
        element: <NuevoCargo/>,
        loader: nuevoCargoLoader,
        action: nuevoCargoAction
      },

      {
       path:'/empleados/cargos/:cargoId/eliminar',
       loader: eliminarCargo
      },
      {
        path: '/finanzas/bancos',
        element: <Bancos/>,
        loader: obtenerBancos,
        action: eliminarBanco
      },
      {
        path: '/finanzas/bancos/nuevo',
        element: <NuevoBanco/>,
        action: nuevoBanco
      },
      {
        path: '/finanzas/bancos/:bancoId/editar',
        element: <ActualizarBanco/>,
        loader: obtenerBanco,
        action: actualizarBanco
      },
      {
        path:'/finanzas/bancos/:bancoId/eliminar',
        action: eliminarBanco
      },
      {
        path: '/finanzas/cuentas',
        element: <Cuentas/>,
        loader: obtenerCuentas,
        action: eliminarCuenta
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
