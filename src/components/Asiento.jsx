import {Form, useNavigate,redirect} from "react-router-dom"
import { eliminarAsiento } from "../data/asiento"

export async function action({params}){
    await eliminarAsiento(params.asientoId)
    return redirect('/finanzas/asientos')
}

function Asiento({ asiento, cuentas}) {
    const {ID_ASIENTO, ID_CUENTA, ID_INFORME_FINANCIERO, FECHA_ASIENTO,descripcion_asiento,DEBE,HABER} = asiento
    const cuenta = cuentas.filter(cuenta => (cuenta.ID_CUENTA==ID_CUENTA))
    const cuenta2 = cuentas.filter(cuenta => (cuenta.DESCRIPCION_CUENTA==descripcion_asiento))
    return (
        <tr className="border-b">
            <td>
                {ID_ASIENTO}
            </td>
            <td>
                {FECHA_ASIENTO}
            </td>
            <td>
                {cuenta[0].DESCRIPCION_CUENTA}
            </td>
            <td>
                {descripcion_asiento}
            </td>
            <td>
                {cuenta2[0]?.CODIGO_CUENTA}
            </td>
            <td>
                {DEBE}
            </td>
            <td>
                {HABER}
            </td>
            <td className="p-4 flex justify-center gap-3">
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