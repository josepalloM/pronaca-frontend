import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import { currencyFormatter } from "../utils/formatters";

function Empleado({ empleado, cargos}) {
    const {ID_EMPLEADO, NOMBRE_EMPLEADO, APELLIDO_EMPLEADO,CEDULA_EMPLEADO,HORAS_LABORADAS,ID_CARGO_EMPLEADO,CORREO,SUELDO_NETO} = empleado
    const [DESCRIPCION_CARGO,setCargo] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{    
        
        {cargos.filter(cargos_e => cargos_e.ID_CARGO_EMPLEADO===ID_CARGO_EMPLEADO).map(cargo =>(
            setCargo(cargo.DESCRIPCION_CARGO)
        ))}
    })
    return (
        <tr className="border-b">
            <td>
                {NOMBRE_EMPLEADO} {APELLIDO_EMPLEADO}
            </td>
            <td>
                {CEDULA_EMPLEADO}
            </td>
            <td>
                {HORAS_LABORADAS}
            </td>
            <td>
                {currencyFormatter.format(SUELDO_NETO)}
            </td>
            <td>
                {DESCRIPCION_CARGO}
            </td>
            <td>
                {CORREO}
            </td>
            <td className="p-4 flex justify-center gap-3">
                <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/empleados/${ID_EMPLEADO}/rolDePago`)}
                    >Rol del pago
                </button>
                <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/empleados/${ID_EMPLEADO}/editar`)}
                    >Editar
                </button>
                <button type="submit"
                        className="text-red-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/empleados/${ID_EMPLEADO}/eliminar`)}>
                        Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Empleado