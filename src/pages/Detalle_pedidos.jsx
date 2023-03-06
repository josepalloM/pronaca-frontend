import { Link, useLoaderData } from "react-router-dom"
import { obtenerDetalle_Pedidos } from "../data/detalle_pedidos"
import Detalle_Pedido from "../components/Detalle_pedido"

export function loader() {
  const detalle_pedidos = obtenerDetalle_Pedidos()
  return detalle_pedidos
}

function Detalle_Pedidos() {
  const detalle_pedidos = useLoaderData()
  return (
    <>
      <h1 className="font-black text-4xl ">Detalle Pedidos</h1>
      <p>Administración de detalle de pedidos</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {detalle_pedidos.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Items</th>
                <th className="p-2">Cantidad</th>
                <th className="p-2">Subtotal</th>
                <th className="p-2">Precio</th>
              </tr>
            </thead>
            <tbody>
              {detalle_pedidos.map(detalle_pedido => (
                <Detalle_Pedido
                  detalle_pedido={detalle_pedido}
                  key={detalle_pedido.ID_DETALLE_PEDIDO}
                />
              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existe pedidos</p>)}
      </div>
    </>
  )
}

export default Detalle_Pedidos