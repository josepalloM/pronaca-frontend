import {useEffect, useState} from "react"
import {Form, useNavigate,redirect} from "react-router-dom"
import { actualizarCostosGastos } from "../data/cuentas.js";
import { actualizarMovimiento } from "../data/movimiento_empleado.js";
import { obtenerEmpleados } from "../data/empleados.js";

export async function action({params}){
    await actualizarCostosGastos(params.empleadoId) 
    return redirect('/empleados')
}
/*
export async function loader() {
    const empleados = await obtenerEmpleados()
    {empleados.map( empleado => (
        actualizarMovimiento(empleado.ID_EMPLEADO)
    ))}
}*/

function Empleado({ empleado, cargos}) {
    const {ID_EMPLEADO, NOMBRE_EMPLEADO, APELLIDO_EMPLEADO,ID_CARGO_EMPLEADO,SUELDO_NETO} = empleado
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
                {SUELDO_NETO}
            </td>
            <td>
                {DESCRIPCION_CARGO}
            </td>
            <td className="p-4 flex justify-center gap-3">
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