import { Link, useLoaderData } from "react-router-dom"
import { obtenerPreventas } from "../data/preventa"
import Preventa from "../components/Preventa"

export function loader() {
  const preventas = obtenerPreventas()
  return preventas
}

function Preventas() {
  const preventas = useLoaderData()
  console.log(preventas)
  return (
    <>
      <h1 className="font-black text-4xl ">Preventa</h1>
      <p>Administración de preventas</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
         {preventas.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Cliente</th>
                <th className="p-2">Empleado</th>
                <th className="p-2">Fecha Preventa</th>
                <th className="p-2">Descripción</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {preventas.map(preventa => (
                <Preventa
                  cliente={preventa}
                  key={preventa.ID_PREVENTA}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existen preventas</p>)} 

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link

            to='/opciones/preventa/nuevo'>CREAR preventa</Link>
        </button>
      </div>
    </>
  )
}

export default Preventas