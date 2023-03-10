import { Link, useLoaderData, useLocation} from "react-router-dom"
import { obtenerPedidosProveedor } from "../data/pedidosProveedor"
import PedidoProveedor from "../components/PedidoProveedor"

export function loader() {
  const pedidosProveedor = obtenerPedidosProveedor()
  return pedidosProveedor
}

function PedidosProveedor() {

  const pedidosProveedor = useLoaderData()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Pedidos proveedores</h1>
      <p>Administración de pedidos a proveedores</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {pedidosProveedor.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                {/* <th className="p-2">ID</th> */}
                <th className="p-2">Proveedor</th>
                <th className="p-2">Fecha</th>
                <th className="p-2">Detalle</th>
                <th className="p-2">Cantidad</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Subtotal</th>
                <th className="p-2">Total</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidosProveedor.map(pedidoProveedor => (
                <PedidoProveedor
                  
                  pedidoProveedor={pedidoProveedor}
                  key={pedidoProveedor.ID_PEDIDO_PROVEEDOR}
                />
              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existe pedidos</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link
            state={location.state}
            to='/pedidoProveedor/nuevo'>CREAR Pedido</Link>
        </button>
      </div>
    </>
  )
}

export default PedidosProveedor