import { Link, useLoaderData, useLocation } from "react-router-dom"
import { obtenerProveedores } from "../data/proveedores"
import Proveedor from "../components/Proveedor"

export function loader() {
  const proveedores = obtenerProveedores()
  return proveedores
}

function Proveedores() {
  
  const proveedores = useLoaderData()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Proveedores</h1>
      <p>Administración de proveedores</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {proveedores.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Tipo</th>
                <th className="p-2">RUC</th>
                <th className="p-2">Teléfono</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map(proveedor => (
                <Proveedor
                  proveedor={proveedor}
                  key={proveedor.ID_PROVEEDOR}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existe proveedores</p>)}

        <Link
            state={location.state}
            to='/proveedoresOpciones/proveedor/nuevo'>
          <button
          className="inline-block text-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm 
                                    shadow-md hover:bg-amber-400 hover:shadow focus:bg-grey
                                    focus:shadow focus:outline-none focus:ring-0 active:bg-grey
                                    active:shadow transition duration-150 ease-in-out"
          // value="CREAR Proveedor"
        >CREAR Proveedor
          
        </button>
        </Link>
      </div>
    </>
  )
}

export default Proveedores