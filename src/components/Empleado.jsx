import { useNavigate } from "react-router-dom";
import { eliminarEmpleado } from "../data/empleados.js";


export async function action({params}){
    await eliminarEmpleado(params.empleadoId)
    return redirect('/empleados')
}
function Empleado({ empleado }) {
    const navigate = useNavigate()
    const { NOMBRE_EMPLEADO, SUELDO_NETO, ID_EMPLEADO } = empleado

    return (
        <tr>
            <td>
                {NOMBRE_EMPLEADO}
            </td>
            <td>
                {SUELDO_NETO}
            </td>
            <td>
                <button onClick={() => navigate(`/empleados/${ID_EMPLEADO}/editar`)}>Editar</button>
                <button onClick={() => {
                    if (confirm('¿Deseas eliminar este registro?')) {
                        eliminarEmpleado(ID_EMPLEADO)
                        navigate('/empleados')
                    }
                }}>Eliminar</button>
                <button>Pagar</button>
            </td>
        </tr>
    )
}

export default Empleado
