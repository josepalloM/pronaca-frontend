import { Link, useLoaderData, useLocation} from "react-router-dom"
import { obtenerPedidos } from "../data/pedidos"
import Pedido from "../components/Pedido"
import { obtenerCuentasPedidos } from "../data/cuentas"
import { actualizarCuentasPedidos } from "../data/cuentas"

export async function loader() {
  const pedidos = await obtenerPedidos()
  const cuentasPedidos = await obtenerCuentasPedidos(1)
  return {pedidos, cuentasPedidos}
}

function Pedidos() {
  actualizarCuentasPedidos(0)
  const {pedidos, cuentasPedidos} = useLoaderData()
  const location = useLocation()
  
  return (
    <>
      <h1 className="font-black text-4xl ">Pedidos</h1>
      <p>Administración de pedidos</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {pedidos.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Fecha</th>
                <th className="p-2">Empleado</th>
                <th className="p-2">Cliente</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map(pedido => (
                <Pedido
                  
                  pedido={pedido}
                  key={pedido.ID_PEDIDO}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existe pedidos</p>)}

        <Link
            state={location.state}
            to='/opciones/pedido/nuevo'>
          <button
            className="inline-block text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                          shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                          focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                          active:shadow transition duration-150 ease-in-out"
          >
            CREAR Pedido
          </button>
        </Link>
      </div>
      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Cuenta</th>
                <th className="p-2">Monto</th>
              </tr>
            </thead>
            <tbody>
              {cuentasPedidos.map(cuentaPedido => (
                <tr className="border-b">
                <td>
                    {cuentaPedido.DESCRIPCION_CUENTA}
                </td>
                <td>
                    {Math.abs(cuentaPedido.VALOR_CUENTA)}
                </td>                    
                </tr>  

              ))}
              <tr className="border-b">
                <td>
                    Utilidad neta
                </td>
                <td>
                    {(Math.abs(cuentasPedidos[2].VALOR_CUENTA)-Math.abs(cuentasPedidos[3].VALOR_CUENTA)).toFixed(2)}
                </td>                    
                </tr>  
            </tbody>
          </table>
      </div>
    </>
  )
}

export default Pedidos