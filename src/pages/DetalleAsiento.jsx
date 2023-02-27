import {useNavigate, Form, useActionData, redirect, useLoaderData} from "react-router-dom"
import Error from "../components/Error";
import { obtenerDetalle} from "../data/detalle_asiento";
import { obtenerAsiento } from "../data/asiento";

export async function loader({params}) {
  const asiento = await obtenerAsiento(params.asientoId)
  const detallesAsiento = await obtenerDetalle(asiento[0].ID_ASIENTO)
  //calcular debe y haber
  let debe = 0
  let haber = 0
  detallesAsiento.map(detalle => {debe=debe+detalle.DEBE; haber=haber+detalle.HABER})
  
  return {detallesAsiento,asiento, debe, haber}
}

function DetalleAsiento() {
  const {detallesAsiento, asiento, debe, haber}= useLoaderData()
  const errores = useActionData()
  const navigate = useNavigate()
    
  return (
    <>
        <h1 className="font-black text-4xl text-black">Detalle Del Asiento --{asiento[0].descripcion_asiento}--</h1>
        
        <div className=" flex justify-start bg-black text-white rounded md: w-3/4 mx-auto px-5 py-2 mt-6">Cuenta</div>

        <div className="bg-white shadow rounded-md md: w-3/4 mx-auto px-5 py-10 mt-5">
          {errores?.length && errores.map( (error, i) =>  <Error key={i}>{error}</Error>)}
            <div className="mb-4">
                <label
                    className="flex justify-start text-gray-800"
                    htmlFor="fecha_asiento"
                >Fecha Asiento:</label>
                <input 
                    id="fecha_asiento"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    defaultValue={asiento[0].FECHA_ASIENTO}
                    name="fecha_asiento"
                />
            </div>
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

            <h1 className="font-black text-4xl text-black">Verificación</h1>
            
            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                
              <table className="w-full bg-white shadow mt-5 table-auto">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="p-2">Debe</th>
                    <th className="p-2">Haber</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td >
                      {debe}
                    </td>
                    <td >
                      {haber}
                    </td>          
                  </tr>
                </tbody>
              </table>
            </div>
              {debe===haber ? 
              <div>
                <p className="text-red-600 uppercase font-bold text-x">VÁLIDO</p>
              </div>:
              <div>
                <p className="uppercase font-bold text-x">No VÁLIDO</p>
            </div>
              } 
            <div className="grid grid-cols-2 gap-2">  
                <div>
                    <button
                        type="button"
                        className="felx justify-items-center mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm"
                        onClick={() => navigate(-1)}
                    >Cancelar</button>
                </div>            
            </div>
        </div>
    </>
  )
}

export default DetalleAsiento