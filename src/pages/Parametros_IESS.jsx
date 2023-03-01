import { Link, useLoaderData, Form, redirect, useNavigate, useLocation } from "react-router-dom"
import { obtenerParametros, eliminarParametro} from "../data/parametros_iess"

export function loader() {
  const parametros = obtenerParametros()
  return parametros
}
export async function action({params}){
  await eliminarParametro(params.iessId)
  return redirect('/empleados/iess')
}
function ParametrosIESS() {

  const parametros = useLoaderData()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <h1 className="font-black text-4xl ">Parámetros del IESS</h1>
      <p>Administración de Parámetros</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {parametros.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Valor</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {parametros.map(parametro => (
                <tr key={parametro.ID_PARAMETRO_IESS} className="border-b">
                  <td className="">
                      {parametro.NOMBRE_PARAMETRO}
                  </td>
                  <td>
                      {parametro.VALOR}
                  </td>
                  
                  <td className="p-4 flex justify-center gap-3">
                      <button
                          type="button"
                          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                          onClick={() => navigate(`/empleados/iess/${parametro.ID_PARAMETRO_IESS}/editar`)}
                      >Editar</button>

                      <Form
                          method='post'
                          action={`/empleados/iess/${parametro.ID_PARAMETRO_IESS}/eliminar`}
                          onSubmit={ (e) => {
                              if (!confirm('¿Deseas eliminar este registro?')){
                                  e.preventDefault()
                              }
                          }}
                      >
                          <button
                          type="submit"
                          className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                      >Eliminar</button>
                      </Form>
                    
                  </td>
              </tr>

              ))}
            </tbody>
          </table>
        ) : (<p className="text-center mt-10"> No existe Parámetros del IESS</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link
            state={location.state}
            to='/empleados/iess/nuevo'>CREAR PARÁMETROS</Link>
        </button>
      </div>
    </>
  )
}

export default ParametrosIESS