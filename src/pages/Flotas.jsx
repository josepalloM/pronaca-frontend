import { Link, useLoaderData, useLocation } from "react-router-dom"
import { obtenerFlotas } from "../data/flotas"
import Flota from "../components/Flota"
import { obtenerPedidos, actualizarEstados } from "../data/pedidos"

export async function loader({params}) {
  const flotas = await obtenerFlotas(params.transporteId)
  const transporteId = params.transporteId
  const pedidos = await obtenerPedidos()
  return {flotas, transporteId, pedidos}
}

function Flotas() {

  const {flotas, transporteId, pedidos} = useLoaderData()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Flota</h1>
      <p>Administración de flota</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        <div className="flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/819/819873.png" alt="Imagen 1" className="w-20 h-20 object-contain" />
        </div>
        <div className="flex flex-col items-center font-black text-4xl ">{flotas[0].NOMBRE_TRANSPORTE}</div>
        {flotas.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">ID</th>
                <th className="p-2">Sector</th>
                <th className="p-2">Estado</th>
                <th className="p-2">Capacidad</th>
                <th className="p-2">Costo</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {flotas.map(flota => (
                <Flota
                flota={flota}
                pedidos={pedidos}
                  key={flota.ID_FLOTA}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existen flotas</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link
            state={location.state}
            to={`/flota/${transporteId}/nuevo`}>CREAR FLOTA</Link>
        </button>
      </div>
    </>
  )
}

export default Flotas