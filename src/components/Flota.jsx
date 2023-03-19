import { Form, useNavigate, redirect } from "react-router-dom";
import { currencyFormatter } from '../utils/formatters';
import { eliminarFlota } from "../data/flotas";

export async function action({ params }) {
    console.log("ID eliminar flota ", params.flotaId);
    await eliminarFlota(params.flotaId)
    return redirect(`/flota`)
}

function Flota({ flota }) {
    const navigate = useNavigate()
    const {
        ID_FLOTA,
        ID_TRANSPORTE,
        SECTOR_FLOTA,
        ESTADO_FLOTA,
        CANTIDAD_PEDIDOS_FLOTA,
        CAPACIDAD_FLOTA,
        COSTO_FLOTA

    } = flota

    return (
        <tr className="border-b text-center">
            <td className="">
                {SECTOR_FLOTA}
            </td>
            <td className="p-1">
                {ESTADO_FLOTA}
            </td>
            <td className="p-1">
                {CANTIDAD_PEDIDOS_FLOTA}/{CAPACIDAD_FLOTA}
            </td>
            <td className="p-1">
                {currencyFormatter.format(COSTO_FLOTA)}
            </td>

            <td className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/flota/${ID_FLOTA}/editar`)}
                >Editar</button>

                <Form
                    method='post'
                    action={`/flota/${ID_FLOTA}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas eliminar este flota?')) {
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

export default Flota