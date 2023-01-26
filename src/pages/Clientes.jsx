import { Link, useLoaderData } from "react-router-dom"
import { obtenerClientes } from "../data/clientes"
import Cliente from "../components/Cliente"

export function loader() {
  const clientes = obtenerClientes()
  return clientes
}

function Clientes() {
  const clientes = useLoaderData()
  return (
    <>
      <h1 className="font-black text-4xl ">Clientes</h1>
      <p>Administración de clientes</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {clientes.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Apellido</th>
                <th className="p-2">Dirección</th>
                <th className="p-2">Teléfono</th>
                <th className="p-2">Cédula</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <Cliente
                  cliente={cliente}
                  key={cliente.ID_CLIENTE_POTENCIAL}
                />

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existe clientes</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link

            to='/cliente/nuevo'>CREAR Cliente</Link>
        </button>
      </div>
    </>
  )
}

export default Clientes