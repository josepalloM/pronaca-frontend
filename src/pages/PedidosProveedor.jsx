import { Link, useLoaderData, useLocation } from "react-router-dom"
import { obtenerPedidosProveedor } from "../data/pedidosProveedor"
import PedidoProveedor from "../components/PedidoProveedor"
import { actualizarCuentasPedidosProveedor, obtenercuentasPedidosProveedor } from "../data/cuentas"

export async function loader() {
  const pedidosProveedor = await obtenerPedidosProveedor()
  const cuentasPedidosProveedor = await obtenercuentasPedidosProveedor(1)
  return { pedidosProveedor, cuentasPedidosProveedor }
}

function PedidosProveedor() {
  actualizarCuentasPedidosProveedor(0)
  const { pedidosProveedor, cuentasPedidosProveedor } = useLoaderData()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Pedidos proveedores</h1>
      <p>Administración de pedidos a proveedores</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        <div className="flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/2801/2801655.png" alt="Imagen 2" className="w-20 h-20 object-contain" />
        </div>
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
            to='/proveedoresOpciones/pedidoProveedor/nuevo'>CREAR Pedido</Link>
        </button>
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
            {cuentasPedidosProveedor.map(cuentaPedidoProveedor => (
              <tr className="border-b">
                <td>
                  {cuentaPedidoProveedor.DESCRIPCION_CUENTA}
                </td>
                <td>
                  {Math.abs(cuentaPedidoProveedor.VALOR_CUENTA)}
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PedidosProveedor