import React from 'react'

function Preventa({preventa}) {

    const navigate = useNavigate()
    const {
        NOMBRE_CLIENTE_POTENCIAL,
        NOMBRE_EMPLEADO,
        FECHA_VISITA_PREVENTA,
        DESCRIPCION_PREVENTA,
        ID_PREVENTA
    } = preventa

    return (

        <tr className="border-b">
            <td className="">
                {NOMBRE_CLIENTE_POTENCIAL}
            </td>
            <td>
                {NOMBRE_EMPLEADO}
            </td>
            <td>
                {FECHA_VISITA_PREVENTA}
            </td>
            <td>
                {DESCRIPCION_PREVENTA}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/preventas/${ID_PREVENTA}/editar`)}
                >Editar</button>

                <Form
                    method='post'
                    action={`/preventas/${ID_PREVENTA}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas eliminar este registro?')) {
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

export default Preventa


