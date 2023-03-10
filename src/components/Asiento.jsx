import {Form, useNavigate,redirect} from "react-router-dom"
import { eliminarAsiento } from "../data/asiento"
import { eliminarDetalles} from "../data/detalle_asiento"
export async function action({params}){
    await eliminarDetalles(params.asientoId)
    await eliminarAsiento(params.asientoId)
    return redirect('/finanzas/asientos')
}

function Asiento({ asiento}) {
    const navigate = useNavigate()
    const {ID_ASIENTO, FECHA_ASIENTO,descripcion_asiento} = asiento
        return (
        <tr className="border-b">
            <td>
                {ID_ASIENTO}
            </td>
            <td>
                {FECHA_ASIENTO}
            </td>
            <td>
                {descripcion_asiento}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/finanzas/asientos/${ID_ASIENTO}/detalle`)}
                >Editar
                </button>
                <Form
                    method='post'
                    action={`/finanzas/asientos/${ID_ASIENTO}/eliminar`}
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
    )
}

export default Asiento