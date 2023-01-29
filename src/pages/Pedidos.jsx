import { Link, useLoaderData } from "react-router-dom"
import { obtenerPedidos } from "../data/pedidos"
import Pedido from "../components/Pedido"

export function loader() {
  const pedidos = obtenerPedidos()
  return pedidos
}

function Pedidos() {
  const pedidos = useLoaderData()
  return (
    <>
      <h1 className="font-black text-4xl ">Pedidos</h1>
      <p>Administración de pedidos</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {pedidos.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Fecha</th>
                <th className="p-2">Devuelto</th>
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

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link

            to='/pedido/nuevo'>CREAR Pedido</Link>
        </button>
      </div>
    </>
  )
}

export default Pedidos