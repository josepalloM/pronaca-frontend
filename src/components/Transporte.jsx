import { Form, useNavigate, redirect } from "react-router-dom";
import { eliminarTransporte } from "../data/transporte";

export async function action({ params }) {
    await eliminarTransporte(params.transporteId)
    return redirect('/transporte')
}

function Transporte({ transporte }) {
    const navigate = useNavigate()
    const {
        ID_TRANSPORTE,
        NOMBRE_TRANSPORTE,
        RUC_TRANSPORTE,
        TELEFONO_TRANSPORTE,
        DIRECCION_TRANSPORTE

    } = transporte

    return (
        <tr className="border-b">
            <td className="">
                {NOMBRE_TRANSPORTE}
            </td>
            <td>
                {RUC_TRANSPORTE}
            </td>
            <td>
                {TELEFONO_TRANSPORTE}
            </td>
            <td>
                {DIRECCION_TRANSPORTE}
            </td>

            <td className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/transporte/${ID_TRANSPORTE}/editar`)}
                >Editar</button>

                <Form
                    method='post'
                    action={`/transporte/${ID_TRANSPORTE}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas eliminar este transporte?')) {
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

export default Transporte