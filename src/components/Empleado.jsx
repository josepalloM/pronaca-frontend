import {useEffect, useState} from "react"

function Empleado({ empleado, cargos}) {
    const { NOMBRE_EMPLEADO, APELLIDO_EMPLEADO,ID_CARGO_EMPLEADO,SUELDO_NETO, ID_EMPLEADO} = empleado
    console.log(empleado)
    const [DESCRIPCION_CARGO,setCargo] = useState("")

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
                <button type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        >Editar</button>
                <button>Eliminar</button>
                <button>Pagar</button>
            </td>
        </tr>
    )
}

export default Empleado