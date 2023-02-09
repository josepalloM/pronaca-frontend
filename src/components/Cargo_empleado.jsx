import { useNavigate, redirect } from "react-router-dom"

export async function action({ params }) {

    return redirect('/empleados/cargos')
}

function Cargo({ cargo }) {
    const { ID_CARGO_EMPLEADO, ID_DEPARTAMENTO, DESCRIPCION_CARGO } = cargo
    const navigate = useNavigate()

    return (
        <tr className="border-b">
            <td>
                {ID_DEPARTAMENTO}
            </td>
            <td>
                {DESCRIPCION_CARGO}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/empleados/cargos/${ID_CARGO_EMPLEADO}/editar`)}
                >Editar
                </button>
                <button type="submit"
                    className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                    onClick={() => navigate(`/empleados/cargos/${ID_CARGO_EMPLEADO}/eliminar`)}>
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cargo