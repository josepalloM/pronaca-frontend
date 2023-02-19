import { Link, useLoaderData,Form, redirect } from "react-router-dom";
import {obtenerCuentas} from "../data/cuentas.js";
import { eliminarCuenta } from "../data/cuentas.js";

export async function loader() {
    const cuentas = await obtenerCuentas()
    return cuentas
}
export async function action({params}){
    await eliminarCuenta(params.cuentaId)
    return redirect('/finanzas/cuentas')
}
function Cuentas() {

    const cuentas = useLoaderData()
    
    return (
        <>
            <h1 className="font-black text-4xl">Catálogo de Cuentas</h1>
            <p >Administración de Cuentas</p>

            <div className="rounded-md md: w-11/12 mx-auto px-5 py-10 mt-5">
                {cuentas.length ? (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-black text-white">
                            <tr>
                                <th className="p-2">Código</th>
                                <th className="p-2">Nombre</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cuentas.map( cuenta => (
                                <tr key={cuenta.ID_CUENTA} className="border-b">
                                    <td>
                                        {cuenta.CODIGO_CUENTA}
                                    </td>
                                    <td>
                                        {cuenta.DESCRIPCION_CUENTA}
                                    </td>
                                    <td className="p-4 flex justify-center gap-3">
                                        <Form
                                            method='post'
                                            action={`/finanzas/cuentas/${cuenta.ID_CUENTA}/eliminar`}
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
                ): (<p className="text-center mt-10"> No existe cuentas</p> )}

                <button  className="mt-3 rounded bg-orange-300 p-2 uppercase font-bold text-black text-sm">
                    <Link
                        to='/finanzas/cuentas/nuevo'>CREAR CUENTAS</Link>
                </button>
            </div>            
        
        </>
    )
}

export default Cuentas