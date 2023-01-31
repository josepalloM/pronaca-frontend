import {useEffect, useState} from "react"
import {Form, useNavigate,redirect} from "react-router-dom"
import {agregarCuenta} from "../data/cuentas.js";
import {eliminarEmpleado} from "../data/empleados.js"

export async function action({params}){
    await agregarCuenta(params.empleadoId)
    
    return redirect('/empleados')
}

function Empleado({ empleado, cargos}) {
    const { NOMBRE_EMPLEADO, APELLIDO_EMPLEADO,ID_CARGO_EMPLEADO,SUELDO_NETO, ID_EMPLEADO} = empleado
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
                <Form
                    method='post'
                    action={`/empleados/${ID_EMPLEADO}/pagar`}
                    onSubmit={ (e) => {
                        if (!confirm('¿Deseas Pagar el sueldo?')){
                            e.preventDefault()
                        }
                    }}
                >
                         <button
                        type="submit"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    >Pagar</button>
                </Form>
            </td>
        </tr>
    )
}

export default Empleado