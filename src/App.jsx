import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoEmpleado, { action as nuevoEmpleadoAction, loader as cargarDepartamentoCargo } from './pages/NuevoEmpleado'
import NuevoDepartamento, { loader as nuevoDepartamentoLoader, action as nuevoDepartamentoAction } from './pages/NuevoDepartamento'
import NuevoCargo, { loader as nuevoCargoLoader, action as nuevoCargoAction } from './pages/NuevoCargo' //
import Index from './pages/Index'
import Pedidos, { loader as pedidoLoader } from './pages/Pedidos'
import { action as eliminarPedidoAction } from "./components/Pedido"
import Item, { loader as itemsLoader } from './pages/Items'
import Recetas_Produccion, { loader as recetaLoader } from './pages/Receta'
import NuevaReceta_Produccion, { action as nuevoRecetaAction } from './pages/NuevoReceta'
import PasosReceta, { loader as pasorecetaLoader } from './pages/PasoReceta'
import NuevoPaso_Receta, { action as nuevoPasoRecetaAction } from './pages/NuevoPasoReceta'

import BalanceGeneral, { loader as balanceLoader } from './pages/BalanceGeneral'
import EstadoFinanciero, { loader as estadoLoader } from './pages/EstadoFinanciero'
import ListaItems, { loader as listaItemsloader } from './pages/ListaItems'
import NuevoItem, { action as nuevoItemAction } from './pages/NuevoItem'

import RolDePago, {loader as rolDePagoLoader} from './pages/RolDePago'

import Clientes, { loader as clienteLoader } from './pages/Clientes'
import Finanzas from './pages/Finanzas'
///
import EmpleadosMenu from './pages/EmpleadosMenu'
import Empleados, { loader as empleadosLoader, action as pagar } from './pages/Empleados'
import Departamentos, { loader as departamentosLoader } from './pages/Departamentos'
import Cargos, { loader as cargosLoader } from './pages/Cargos' //
import { loader as eliminarEmpleado } from './pages/EliminarEmpleado'
import { loader as eliminarDepartamento } from './pages/EliminarDepartamento'
import { loader as eliminarCargo } from './pages/EliminarCargo' //
import ErrorPage from './components/ErrorPage'
import NuevoCliente, { action as nuevoClienteAction, loader as nuevoClienteLoader } from './pages/NuevoCliente'
import { action as eliminarClienteAction } from "./components/Cliente"
import ActualizarCliente, { loader as actualizarClienteLoader, action as actualizarClienteAction } from './pages/ActualizarCliente.jsx'
import ActualizarItem, { loader as actualizarItemLoader, action as actualizarItemAction } from './pages/ActualizarItem'
import ActualizarListaItem, { loader as actualizarListaItemLoader, action as actualizarListaItemAction } from './pages/ActializarListaItem'
import EmpleadoProduccion from './pages/EmpleadoProduccion'
import NuevoListaItem, { action as nuevaListaItemAction } from './pages/NuevoListaItem'
import { action as eliminarListaItemAction } from './components/ListaItem'
import { action as eliminarItemAction } from './components/Item'

import NuevoPedido, { action as nuevoPedidoAction, loader as nuevoPedidoLoader } from './pages/NuevoPedido'
import PedidosOpciones from './pages/PedidosOpciones'
import Preventas, { loader as preventaLoader } from './pages/Preventas'
import NuevaPreventa, { action as nuevaPreventaAction, loader as nuevaPreventaLoader } from './pages/NuevaPreventa'
import Bodegas, { loader as bodegaLoader} from './pages/Bodegas'
import NuevaBodega, { action as nuevaBodegaAction} from './pages/NuevaBodega'
import { action as eliminarBodegaAction } from "./components/Bodega"
import VerBodega, { loader as actualizarBodegaLoader} from './pages/VerBodega'
import { action as eliminarPreventaAction } from "./components/Preventa"
import ActualizarPedido, { loader as actualizarPedidoLoader, action as actualizarPedidoAction } from './pages/ActualizarPedido'
import ActualizarEmpleado, { loader as actualizarEmpleadoLoader, action as actualizarEmpleadoAction } from './pages/ActualizarEmpleado.jsx'
import ActualizarDepartamento, { loader as actualizarDepartamentoLoader, action as actualizarDepartamentoAction } from './pages/ActualizarDepartamento.jsx'
import ActualizarCargo, { loader as actualizarCargoLoader, action as actualizarCargoAction } from './pages/ActualizarCargo.jsx' //
/////
import NuevoBalance, { action as nuevoBalance } from './pages/NuevoBalance'

import NuevaCuenta, { action as nuevaCuenta } from './pages/NuevaCuenta'
import Cuentas, { loader as obtenerCuentas, action as eliminarCuenta } from './pages/Cuentas'
import NuevoAsiento, { action as nuevoAsiento } from './pages/NuevoAsiento'
import NuevoDetalleAsiento, { action as obtenerCuentasAsiento, loader as obtenerDetallesAsiento } from './pages/NuevoDetalleAsiento'
import { action as eliminarAsiento } from './components/Asiento'
import Asiento, { loader as obtenerAsientos } from './pages/Asientos'
import Login, {action as loginAction, loader as loginLoader} from './pages/Login'
import Registro from './pages/Registro'
import { RutasPrivadas } from './routes/RutasPrivadas'



//Detalle de asiento
import DetalleAsiento, { loader as obtenerDetalle } from './pages/DetalleAsiento'
import { action as nuevoDetalleAsiento } from './components/FormularioDetalleAsiento'
import { loader as eliminarDetalleAsiento } from './pages/EliminarDetalleAsiento'
import { loader as actualizarCierreDeCuentas } from './pages/ActualizarCierreDeCuentas'


import NuevoParametro, { action as nuevoParametro } from './pages/NuevoIess'
import ActualizarIess, { loader as iess, action as actualizarIess } from './pages/ActualizarIess'
import ParametrosIESS, { loader as parametros, action as eliminarIess } from './pages/Parametros_IESS'


import Bancos, { loader as obtenerBancos, action as eliminarBanco } from './pages/Bancos'
import NuevoBanco, { action as nuevoBanco } from './pages/NuevoBanco'
import ActualizarBanco, { loader as obtenerBanco, action as actualizarBanco } from './pages/ActualizarBanco'

//Detalle pedido
import NuevoDetalle_Pedido, { action as nuevoDetalle_PedidoAction, loader as nuevoDetalle_PedidoLoader } from './pages/NuevoDetalle_Pedido'
import Detalle_Pedidos, { loader as detalle_pedidoLoader } from './pages/Detalle_Pedidos'
import { action as eliminarDetalle_PedidoAction } from "./components/Detalle_Pedido"
// import ActualizarDetalle_Pedido, {loader as actualizarDetalle_PedidoLoader, action as actualizarDetalle_PedidoAction} from './pages/ActualizarDetalle_Pedido'

///importar editar Balance
import VerDetalleBalance, { loader as obtenerDetalleBalanceLoader} from './pages/AcVerDetalleBalance'



function App() {

    const [user, setUser] = useState()
    useEffect(() => {
        const obtenerLS = () => {
            const us = localStorage.getItem('user');
            us?.length > 0 && setUser(us)

        }
        obtenerLS()
        //console.log("user", obtenerLS())
    }, [])
    //console.log("user APP", user)

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,

            children: [

                {
                    path: '/login',
                    element: <Login />,
                    action: loginAction,
                    loader: loginLoader,
                    errorElement: <ErrorPage />
                },

                {
                    element: <RutasPrivadas usuario={user} />,
                    children: [
                        {
                            path: '/opciones',
                            element: <PedidosOpciones />
                        },
                        {
                            path: '/opciones/bodega',
                            element: <Bodegas />,
                            loader: bodegaLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/opciones/bodega/nuevo',
                            element: <NuevaBodega />,
                            action: nuevaBodegaAction
                        },
                        {
                            path: '/bodegas/:bodegaId/eliminar',
                            action: eliminarBodegaAction
                        },
                        {
                            path: '/bodegas/:bodegaId/editar',
                            element: <VerBodega />,
                            loader: actualizarBodegaLoader
                        },
                        {
                            path: '/opciones/preventa',
                            element: <Preventas />,
                            loader: preventaLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/opciones/preventa/nuevo',
                            element: <NuevaPreventa />,
                            action: nuevaPreventaAction,
                            loader: nuevaPreventaLoader
                        },
                        {
                            path: '/preventas/:preventaId/eliminar',
                            action: eliminarPreventaAction
                        },
                        {
                            path: '/opciones/pedidos',
                            element: <Pedidos />,
                            loader: pedidoLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/opciones/pedido/nuevo',
                            element: <NuevoPedido />,
                            action: nuevoPedidoAction,
                            loader: nuevoPedidoLoader,
                            errorElement: <ErrorPage />
                        },
                        //Detalle pedido
                        {
                            path: '/opciones/detalle_pedidos/:pedidoId',
                            element: <Detalle_Pedidos />,
                            loader: detalle_pedidoLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/opciones/pedido/detalle/nuevo',
                            element: <NuevoDetalle_Pedido />,
                            action: nuevoDetalle_PedidoAction,
                            loader: nuevoDetalle_PedidoLoader,
                            errorElement: <ErrorPage />
                        },
                        // {
                        //   path: '/detalle_pedido/:detalle_pedidoId/editar',
                        //   element: <ActualizarDetalle_Pedido />,
                        //   loader: actualizarDetalle_PedidoLoader,
                        //   action: actualizarDetalle_PedidoAction,
                        //   errorElement: <ErrorPage />
                        // },
                        // {
                        //   path:  '/opciones/detalle_pedidos/:detalle_pedidoId/eliminar',
                        //   action: eliminarDetalle_PedidoAction
                        // },

                        {
                            path: '/gestor',
                            element: <EmpleadoProduccion />
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
                            element: <EmpleadosMenu />
                        },

                        {
                            path: '/opciones/pedidos/:pedidoId/eliminar',
                            action: eliminarPedidoAction
                        },

                        {
                            path: '/produccion',
                            element: <Item />,
                            loader: itemsLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/gestorlista',
                            element: <ListaItems />,
                            loader: listaItemsloader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/gestorreceta',
                            element: <Recetas_Produccion />,
                            loader: recetaLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/receta/nuevo',
                            element: <NuevaReceta_Produccion />,
                            action: nuevoRecetaAction,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/gestorpasoreceta/:pasorecetaId/pasos',
                            element: <PasosReceta />,
                            loader: pasorecetaLoader,
                            //action: pasosrecetaAction,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/pasosreceta/nuevo',
                            element: <NuevoPaso_Receta />,
                            action: nuevoPasoRecetaAction,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/listaitem/nuevo',
                            element: <NuevoListaItem />,
                            action: nuevaListaItemAction,
                            //loader: nuevaListaLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/listaitem/:listaId/actualizar',
                            element: <ActualizarListaItem />,
                            loader: actualizarListaItemLoader,
                            action: actualizarListaItemAction,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/listaitem/:listaId/eliminar',
                            action: eliminarListaItemAction
                        },
                        {
                            path: '/item/nuevo',
                            element: <NuevoItem />,
                            action: nuevoItemAction,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/item/:itemId/actualizar',
                            element: <ActualizarItem />,
                            loader: actualizarItemLoader,
                            action: actualizarItemAction,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/item/:itemId/eliminar',
                            action: eliminarItemAction
                        },
                        {
                            path: '/clientes',
                            element: <Clientes />,
                            loader: clienteLoader,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/cliente/nuevo',
                            element: <NuevoCliente />,
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
                            path: '/clientes/:clienteId/eliminar',
                            action: eliminarClienteAction
                        },
                        {
                            path: '/empleados',
                            element: <Empleados />,
                            loader: empleadosLoader,
                            action: pagar,
                            errorElement: <ErrorPage />
                        },
                        {
                            path: '/empleados/nuevo',
                            element: <NuevoEmpleado />,
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
                            path: '/empleados/iess/:iessId/editar',
                            element: <ActualizarIess />,
                            loader: iess,
                            action: actualizarIess
                        },
                        {
                            path: '/empleados/iess/nuevo',
                            element: <NuevoParametro />,
                            loader: obtenerCuentas,
                            action: nuevoParametro
                        },
                        {
                            path: '/empleados/iess/:iessId/eliminar',
                            action: eliminarIess
                        },
                        {
                            path: '/empleados/:empleadoId/eliminar',
                            loader: eliminarEmpleado
                        },
                        {
                            path: '/finanzas',
                            element: <Finanzas />
                        },
                        {
                            path: '/empleados/departamentos',
                            element: <Departamentos />,
                            loader: departamentosLoader,
                        },
                        {
                            path: '/empleados/departamentos/nuevo',
                            element: <NuevoDepartamento />,
                            loader: nuevoDepartamentoLoader,
                            action: nuevoDepartamentoAction
                        },
                        {
                            path: '/empleados/departamentos/:departamentoId/editar',
                            element: <ActualizarDepartamento />,
                            loader: actualizarDepartamentoLoader,
                            action: actualizarDepartamentoAction,
                        },
                        {
                            path: '/empleados/departamentos/:departamentoId/eliminar',
                            loader: eliminarDepartamento
                        },
                        {
                            path: '/empleados/cargos',
                            element: <Cargos />,
                            loader: cargosLoader,
                        },
                        {
                            path: '/empleados/cargos/nuevo',
                            element: <NuevoCargo />,
                            loader: nuevoCargoLoader,
                            action: nuevoCargoAction
                        },

                        {
                            path: '/empleados/cargos/:cargoId/eliminar',
                            loader: eliminarCargo
                        },
                        {
                            path: '/empleados/:empleadoId/rolDePago',
                            element:<RolDePago/>,
                            loader:rolDePagoLoader
                        },
                        {
                            path: '/finanzas/bancos',
                            element: <Bancos />,
                            loader: obtenerBancos,
                            action: eliminarBanco
                        },
                        {
                            path: '/finanzas/bancos/nuevo',
                            element: <NuevoBanco />,
                            action: nuevoBanco
                        },
                        {
                            path: '/finanzas/bancos/:bancoId/editar',
                            element: <ActualizarBanco />,
                            loader: obtenerBanco,
                            action: actualizarBanco
                        },
                        {
                            path: '/finanzas/bancos/:bancoId/eliminar',
                            action: eliminarBanco
                        },
                        {
                            path: '/finanzas/cuentas',
                            element: <Cuentas />,
                            loader: obtenerCuentas,
                            action: eliminarCuenta
                        },
                        {
                            path: '/finanzas/cuentas/nuevo',
                            element: <NuevaCuenta />,
                            loader: obtenerCuentas,
                            action: nuevaCuenta
                        }, {
                            path: '/finanzas/cuentas/:cuentaId/eliminar',
                            action: eliminarCuenta
                        },

                        {
                            path: '/finanzas/asientos/nuevo',
                            element: <NuevoAsiento />,
                            loader: obtenerCuentas,
                            action: nuevoAsiento
                        },
                        {
                            path: '/finanzas/asientos/:asientoId/detalle',
                            element: <DetalleAsiento />,
                            loader: obtenerDetalle
                        },
                        {
                            path: '/finanzas/asientos/nuevo/nuevaCuentaAsiento',
                            element: <NuevoDetalleAsiento />,
                            loader: obtenerDetallesAsiento,
                            action: nuevoDetalleAsiento
                        },
                        {
                            path: '/finanzas/asientos/nuevo/nuevaCuentaAsiento/:detalleAsientoId',
                            loader: eliminarDetalleAsiento
                        },
                        {
                            path: '/finanzas/asientos/nuevo/nuevaCuentaAsiento/cerrarCuentas/:asientoId',
                            loader: actualizarCierreDeCuentas
                        },
                        {
                            path: '/finanzas/asientos',
                            element: <Asiento />,
                            loader: obtenerAsientos
                        },
                        {
                            path: '/finanzas/asientos/:asientoId/eliminar',
                            action: eliminarAsiento
                        },
                        {
                            path: '/finanzas/balance',
                            element: <BalanceGeneral />,
                            loader: balanceLoader
                        },
                        {
                            path: '/finanzas/balance/nuevo',
                            element: <NuevoBalance />,
                            loader: balanceLoader,
                            action: nuevoBalance
                        },
                        {
                            path: '/finanzas/balance/:balanceId/detalle',
                            element: <VerDetalleBalance />,
                            loader: obtenerDetalleBalanceLoader,
                            //action :obtenerDetalleBalanceAction 
                        },

                    

                        {
                            path: '/finanzas/estado',
                            element: <EstadoFinanciero />,
                            loader: estadoLoader,
                        }
                    ]
                },
                {
                    index: true,
                    element: <Index />,

                },
                {
                    path: '*',
                    element: <Layout />
                },
            ]
        },

    ])
    return <RouterProvider router={router} />
}

export default App;