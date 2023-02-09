import { Link, useLoaderData, Form, redirect, useNavigate } from "react-router-dom"
import { obtenerBancos, eliminarBanco} from "../data/banco"

export function loader() {
  const bancos = obtenerBancos()
  return bancos
}
export async function action({params}){
  await eliminarBanco(params.bancoId)
  return redirect('/finanzas/bancos')
}
function ParametrosIESS() {
  const bancos = useLoaderData()
  const navigate = useNavigate()
  return (
    <>
      <h1 className="font-black text-4xl ">Bancos</h1>
      <p>Administración de Bancos</p>

      <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
        {bancos.length ? (
          <table className="w-full bg-white shadow mt-5 table-auto">
            <thead className="bg-black text-white">
              <tr>
                <th className="p-2">Nombre</th>
                <th className="p-2">Saldo</th>
                <th className="p-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {bancos.map(banco => (
                <tr key={banco.ID_BANCO} className="border-b">
                  <td className="">
                      {banco.NOMBRE_BANCO}
                  </td>
                  <td>
                      {banco.SALDO}
                  </td>
                  
                  <td className="p-4 flex justify-center gap-3">
                      <button
                          type="button"
                          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                          onClick={() => navigate(`/finanzas/bancos/${banco.ID_BANCO}/editar`)}
                      >Editar</button>

                      <Form
                          method='post'
                          action={`/finanzas/bancos/${banco.ID_BANCO}/eliminar`}
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
        ) : (<p className="text-center mt-10"> No existe Bancos</p>)}

        <button
          className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
        >
          <Link

            to='/finanzas/bancos/nuevo'>CREAR BANCOS</Link>
        </button>
      </div>
    </>
  )
}

export default ParametrosIESS