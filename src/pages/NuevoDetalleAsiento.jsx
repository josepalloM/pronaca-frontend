import {useNavigate, Form, useActionData, redirect, useLoaderData} from "react-router-dom"
import FormularioDetalleAsiento from "../components/FormularioDetalleAsiento"
import Error from "../components/Error";
import { obtenerDetallesAsiento } from "../data/detalle_asiento";
import {obtenerCuentas} from "../data/cuentas"

export async function loader() {
  const detallesAsiento = await obtenerDetallesAsiento()
  const cuentas = await obtenerCuentas()
  return {detallesAsiento,cuentas}
}

export  async function action({request}){
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)
  
  //validaciones
  const errores = []
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios')
  }

  //Retornar datos si hay erroes
  if(Object.keys(errores).length){
    return errores
  }

  await agregarCuentas(datos)

  return redirect('/finanzas/cuentas')
}

function NuevDetalleAsiento() {
  const {detallesAsiento, cuentas}= useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()

  return (
    <>
        <h1 className="font-black text-4xl text-black">Nuevo Detalle Del Asiento</h1>
        <p className="mt-3">Llena todos los campos para agregar una nueva Cuenta</p>

        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Cuenta</div>

        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}

          <FormularioDetalleAsiento cuentas={cuentas}/>
          
          
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {detallesAsiento.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Código Cuenta</th>
                                <th className="p-2">Cuenta</th>
                                <th className="p-2">Debe</th>
                                <th className="p-2">Haber</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detallesAsiento.map( detalleAsiento => (
                                <tr key={detalleAsiento.ID_DETALLE_ASIENTO} className="border-b">
                                    <td>
                                        {detalleAsiento.CODIGO_CUENTA}
                                    </td>
                                    <td>
                                        {detalleAsiento.CUENTA}
                                    </td>
                                    <td>
                                        {detalleAsiento.DEBE}
                                    </td>
                                    <td>
                                        {detalleAsiento.HABER}
                                    </td>
                                    <td className="p-4 flex justify-center gap-3">
                                        <button 
                                                className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                                                onClick={() => navigate(`/finanzas/asientos/nuevo/nuevaCuentaAsiento/${detalleAsiento.ID_DETALLE_ASIENTO}`)}>
                                                Eliminar
                                        </button>
                                    </td>
                                </tr>

                            ))}
                            </tbody>
                    </table>
                ): (<p className="text-center mt-10"> No existe cuentas</p> )}
            </div>
        </div>
        <div>
          <button
            type="button"
            className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
            onClick={() => navigate(-1)}
          >Cancelar</button>
        </div> 
    </>
  )
}

export default NuevDetalleAsiento