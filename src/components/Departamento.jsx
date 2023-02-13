import { useEffect, useState } from "react"
import { Form, useNavigate, redirect } from "react-router-dom"

export async function action({ params }) {

    return redirect('/empleados/departamentos')
}

function Empleado({ departamento }) {
    const { ID_DEPARTAMENTO, NOMBRE_DEPARTAMENTO} = departamento
    const navigate = useNavigate()

    return (
        <tr className="border-b">
            <td>
                {ID_DEPARTAMENTO}
            </td>
            <td>
                {NOMBRE_DEPARTAMENTO}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/empleados/departamentos/${ID_DEPARTAMENTO}/editar`)}
                >Editar
                </button>
                <button type="submit"
                    className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/empleados/departamentos/${ID_DEPARTAMENTO}/eliminar`)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Empleado