import { Link, useLoaderData, useLocation } from "react-router-dom"
import { obtenerProveedores } from "../data/proveedores"
import Transporte from "../components/Transporte"

export function loader() {
  const proveedores = obtenerProveedores()
  return proveedores
}

function Proveedores() {

  const proveedores = useLoaderData()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Transporte</h1>
      <p>Administración de transporte</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        <div className="flex flex-col items-center">
          <img src="https://cdn-icons-png.flaticon.com/512/819/819873.png" alt="Imagen 1" className="w-20 h-20 object-contain" />
        </div>
        {proveedores.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Tipo</th>
                <th className="p-2">RUC</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map(proveedor => (
                <Transporte
                  proveedor={proveedor}
                  key={proveedor.ID_PROVEEDOR}
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
            to='/proveedoresOpciones/proveedor/nuevo'>CREAR TRANSPORTE</Link>
        </button>
      </div>
    </>
  )
}

export default Proveedores