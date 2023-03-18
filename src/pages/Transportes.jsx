import { Link, useLoaderData, useLocation } from "react-router-dom"
import { obtenerTransportes } from "../data/transporte"
import Transporte from "../components/Transporte"

export function loader() {
  const transportes = obtenerTransportes()
  return transportes
}

function Transportes() {

  const transportes = useLoaderData()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Transporte</h1>
      <p>Administración de transporte</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        <div className="flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/819/819873.png" alt="Imagen 1" className="w-20 h-20 object-contain" />
        </div>
        {transportes.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Teléfono</th>
                <th className="p-2">RUC</th>
                <th className="p-2">Dirección</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {transportes.map(transporte => (
                <Transporte
                transporte={transporte}
                  key={transporte.ID_TRANSPORTE}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existen transportes</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link
            state={location.state}
            to='/transporte/nuevo'>CREAR TRANSPORTE</Link>
        </button>
      </div>
    </>
  )
}

export default Transportes